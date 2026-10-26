
/* ===========================================================
   quiz.js - Generació i correcció dels tests
   =========================================================== */
const Quiz = (function () {
  function shuffle(array) {
    const a = array.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Treu accents i normalitza per comparar respostes curtes amb tolerància
  function normalize(str) {
    return (str || "")
      .toString()
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^l'/, "l ")
      .replace(/'/g, " ");
  }

  function pickQuestions(topics, numQuestions) {
    let pool = [];
    topics.forEach((t) => {
      t.questions.forEach((q) =>
        pool.push(Object.assign({}, q, { topicId: t.id, topicName: t.name }))
      );
    });
    pool = shuffle(pool);
    return pool.slice(0, Math.min(numQuestions, pool.length));
  }

  function buildQuiz(subject, topicIds, numQuestions) {
    const topics = subject.topics.filter((t) => topicIds.includes(t.id));
    let questions = pickQuestions(topics, numQuestions);

    // Barregem l'ordre de les opcions de les mcq i reajustem l'índex correcte
    questions = questions.map((q) => {
      const copy = Object.assign({}, q);
      if (copy.type === "mcq") {
        const withIndex = copy.options.map((opt, idx) => ({ opt, idx }));
        const shuffled = shuffle(withIndex);
        copy.options = shuffled.map((o) => o.opt);
        copy.answer = shuffled.findIndex((o) => o.idx === q.answer);
      }
      return copy;
    });

    return {
      subjectId: subject.id,
      subjectName: subject.name,
      topicIds: topicIds,
      questions: questions,
    };
  }

  function gradeQuiz(quiz, userAnswers) {
    let correctCount = 0;
    const perTopic = {};

    const details = quiz.questions.map((q, i) => {
      const userAnswer = userAnswers[i];
      let isCorrect = false;

      if (q.type === "mcq") {
        isCorrect = userAnswer === q.answer;
      } else if (q.type === "tf") {
        isCorrect = userAnswer === q.answer;
      } else if (q.type === "short") {
        const accepted = Array.isArray(q.answer) ? q.answer : [q.answer];
        isCorrect = accepted.some((a) => normalize(a) === normalize(userAnswer));
      }

      if (!perTopic[q.topicId]) {
        perTopic[q.topicId] = { name: q.topicName, correct: 0, total: 0 };
      }
      perTopic[q.topicId].total++;
      if (isCorrect) {
        perTopic[q.topicId].correct++;
        correctCount++;
      }

      return { question: q, userAnswer, isCorrect };
    });

    return {
      score: correctCount,
      total: quiz.questions.length,
      percent:
        quiz.questions.length > 0
          ? Math.round((correctCount / quiz.questions.length) * 100)
          : 0,
      perTopic,
      details,
    };
  }

  return { buildQuiz, gradeQuiz, normalize, shuffle };
})();
