
/* ===========================================================
   app.js - Navegació i pantalles de l'aplicació
   =========================================================== */
const App = (function () {
  const appEl = document.getElementById("app");

  const state = {
    view: "home",
    subjectId: null,
    selectedTopics: [],
    numQuestions: 10,
    quiz: null,
    userAnswers: {},
    lastResult: null,
  };

  function getSubjects() {
    return Object.values(window.SUBJECTS || {});
  }

  function getSubject(id) {
    return (window.SUBJECTS || {})[id];
  }

  function go(view, params) {
    state.view = view;
    Object.assign(state, params || {});
    render();
    window.scrollTo(0, 0);
  }

  // ---------- helper per crear elements DOM sense dependencies ----------
  function el(tag, opts, children) {
    const e = document.createElement(tag);
    opts = opts || {};
    Object.keys(opts).forEach((key) => {
      if (key === "class") e.className = opts[key];
      else if (key === "html") e.innerHTML = opts[key];
      else if (key === "text") e.textContent = opts[key];
      else if (key.indexOf("on") === 0 && typeof opts[key] === "function") {
        e.addEventListener(key.slice(2), opts[key]);
      } else {
        e.setAttribute(key, opts[key]);
      }
    });
    (children || []).forEach((c) => {
      if (c) e.appendChild(c);
    });
    return e;
  }

  function render() {
    appEl.innerHTML = "";
    appEl.appendChild(renderTopBar());
    if (state.view === "home") renderHome();
    else if (state.view === "subject") renderSubject();
    else if (state.view === "quiz") renderQuiz();
    else if (state.view === "results") renderResults();
    else if (state.view === "history") renderHistory();
  }

  function renderTopBar() {
    const bar = el("div", { class: "topbar" });
    const left = el("div", { class: "topbar-left" });
    left.appendChild(
      el("button", {
        class: "btn btn-ghost",
        text: "🏠 Inici",
        onclick: () => go("home"),
      })
    );
    if (state.subjectId && state.view !== "home") {
      const subj = getSubject(state.subjectId);
      if (subj) {
        left.appendChild(
          el("button", {
            class: "btn btn-ghost",
            text: subj.icon + " " + subj.name,
            onclick: () => go("subject", { subjectId: state.subjectId }),
          })
        );
      }
    }
    bar.appendChild(left);
    bar.appendChild(renderPointsBadge());
    return bar;
  }

  // ---------------------- Insignia de Rodrigos (punts) ----------------------
  // Icona de la papallona OR (logo d\'Olivia Rodrigo), fitxer a img/or-butterfly.png
  function butterflyIcon(extraClass) {
    return el("img", {
      class: "butterfly-icon " + (extraClass || ""),
      src: "img/or-butterfly.png",
      alt: "Papallona OR",
    });
  }

  function renderPointsBadge() {
    const total = Points.getTotal();
    const badge = el("div", {
      class: "rodrigos-badge",
      title: "Els teus Rodrigos acumulats",
    });
    badge.appendChild(butterflyIcon());
    badge.appendChild(el("span", { class: "rodrigos-label", text: "OR" }));
    badge.appendChild(el("span", { class: "rodrigos-count", text: String(total) }));
    return badge;
  }

  function showRodrigosToast(amount) {
    if (!amount || amount <= 0) return;
    const toast = el("div", { class: "rodrigos-toast" });
    toast.appendChild(butterflyIcon("butterfly-icon-big"));
    const textBox = el("div", { class: "rodrigos-toast-text" });
    textBox.appendChild(el("strong", { text: "🎉 Felicitats!" }));
    textBox.appendChild(
      el("span", { text: "Has obtingut " + amount + " Rodrigo" + (amount === 1 ? "" : "s") + "!" })
    );
    toast.appendChild(textBox);
    toast.addEventListener("click", () => dismissToast());
    document.body.appendChild(toast);

    function dismissToast() {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 400);
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => toast.classList.add("show"));
    });
    setTimeout(dismissToast, 3800);
  }

  // ---------------------------- HOME -------------------------------
  function renderHome() {
    const wrap = el("div", { class: "view home-view" });
    wrap.appendChild(
      el("div", { class: "hero" }, [
        el("h1", { html: "📚 El Meu Espai d'Estudi 🌸" }),
        el("p", {
          class: "subtitle",
          text: "Tria una assignatura i posa't a repassar!",
        }),
      ])
    );

    const grid = el("div", { class: "subject-grid" });
    const subjects = getSubjects();

    if (subjects.length === 0) {
      grid.appendChild(
        el("p", { class: "muted", text: "Encara no hi ha assignatures afegides." })
      );
    } else {
      subjects.forEach((subject) => {
        const card = el("div", {
          class: "card subject-card",
          style: "--accent:" + (subject.color || "#8B5FBF"),
        });
        card.appendChild(el("div", { class: "card-icon", text: subject.icon || "📘" }));
        card.appendChild(el("h2", { text: subject.name }));
        card.appendChild(
          el("p", {
            class: "muted",
            text: subject.topics.length + " temes disponibles",
          })
        );
        card.appendChild(
          el("button", {
            class: "btn btn-primary",
            text: "Entrar \u27A4",
            onclick: () => go("subject", { subjectId: subject.id, selectedTopics: subject.topics.map((t) => t.id) }),
          })
        );
        grid.appendChild(card);
      });
    }
    wrap.appendChild(grid);
    appEl.appendChild(wrap);
  }

  // --------------------------- SUBJECT ------------------------------
  function renderSubject() {
    const subject = getSubject(state.subjectId);
    if (!subject) {
      go("home");
      return;
    }
    if (!state.selectedTopics || state.selectedTopics.length === 0) {
      state.selectedTopics = subject.topics.map((t) => t.id);
    }

    const wrap = el("div", { class: "view subject-view" });
    wrap.appendChild(
      el("div", { class: "hero hero-small" }, [
        el("h1", { text: subject.icon + " " + subject.name }),
        el("p", {
          class: "subtitle",
          text: "Selecciona els temes que vols incloure al test (per defecte, tots).",
        }),
      ])
    );

    const topicsGrid = el("div", { class: "topic-grid" });
    subject.topics.forEach((topic) => {
      const checked = state.selectedTopics.includes(topic.id);
      const stats = Storage.getTopicStats(subject.id, topic.id);
      const card = el("div", {
        class: "card topic-card" + (checked ? " selected" : ""),
        onclick: () => {
          if (state.selectedTopics.includes(topic.id)) {
            state.selectedTopics = state.selectedTopics.filter((id) => id !== topic.id);
          } else {
            state.selectedTopics = state.selectedTopics.concat([topic.id]);
          }
          renderSubjectInPlace();
        },
      });
      card.appendChild(el("div", { class: "topic-icon", text: topic.icon || "📘" }));
      card.appendChild(el("div", { class: "topic-name", text: topic.name }));
      card.appendChild(
        el("div", { class: "topic-count muted", text: topic.questions.length + " preguntes al banc" })
      );
      if (stats.attempts > 0) {
        const badgeClass =
          stats.avgPercent >= 80 ? "badge-good" : stats.avgPercent >= 50 ? "badge-mid" : "badge-low";
        card.appendChild(
          el("div", {
            class: "topic-badge " + badgeClass,
            text: "Mitjana: " + stats.avgPercent + "%",
          })
        );
      }
      card.appendChild(
        el("div", { class: "topic-check", text: checked ? "✅" : "⬜" })
      );
      topicsGrid.appendChild(card);
    });

    // Marcador per poder re-renderitzar només aquesta vista sense perdre scroll
    wrap.id = "subject-view-container";
    wrap.appendChild(topicsGrid);

    const selectAllRow = el("div", { class: "row select-row" }, [
      el("button", {
        class: "btn btn-ghost btn-small",
        text: "Seleccionar tots",
        onclick: () => {
          state.selectedTopics = subject.topics.map((t) => t.id);
          renderSubjectInPlace();
        },
      }),
      el("button", {
        class: "btn btn-ghost btn-small",
        text: "Deseleccionar tots",
        onclick: () => {
          state.selectedTopics = [];
          renderSubjectInPlace();
        },
      }),
    ]);
    wrap.appendChild(selectAllRow);

    const configBox = el("div", { class: "card config-box" });
    configBox.appendChild(el("h3", { text: "📝 Configura el test" }));

    const label = el("label", { text: "Nombre de preguntes: ", class: "config-label" });
    const select = el("select", { class: "select-num" });
    [10, 12, 15].forEach((n) => {
      const opt = el("option", { text: String(n) });
      opt.value = n;
      if (n === state.numQuestions) opt.selected = true;
      select.appendChild(opt);
    });
    select.addEventListener("change", (e) => {
      state.numQuestions = parseInt(e.target.value, 10);
    });
    label.appendChild(select);
    configBox.appendChild(label);

    configBox.appendChild(
      el("button", {
        class: "btn btn-primary btn-big",
        text: "🚀 Generar Test",
        onclick: () => startQuiz(subject),
      })
    );
    configBox.appendChild(
      el("button", {
        class: "btn btn-secondary",
        text: "📊 Veure historial d'aquesta assignatura",
        onclick: () => go("history", { subjectId: subject.id }),
      })
    );
    wrap.appendChild(configBox);

    appEl.appendChild(wrap);
  }

  function renderSubjectInPlace() {
    // re-render senzill de tota la vista (manté selecció a l'state)
    render();
  }

  function startQuiz(subject) {
    const topicIds =
      state.selectedTopics && state.selectedTopics.length > 0
        ? state.selectedTopics
        : subject.topics.map((t) => t.id);
    const quiz = Quiz.buildQuiz(subject, topicIds, state.numQuestions);
    if (quiz.questions.length === 0) {
      alert("No hi ha prou preguntes per generar el test amb aquesta selecció.");
      return;
    }
    go("quiz", { quiz: quiz, userAnswers: {} });
  }

  // ----------------------------- QUIZ --------------------------------
  function renderQuiz() {
    const quiz = state.quiz;
    const wrap = el("div", { class: "view quiz-view" });
    wrap.appendChild(
      el("div", { class: "hero hero-small" }, [
        el("h1", { text: "✏️ Test: " + quiz.subjectName }),
        el("p", { class: "subtitle", text: quiz.questions.length + " preguntes. Sense pressa, pensa-hi bé!" }),
      ])
    );

    quiz.questions.forEach((q, index) => {
      const qCard = el("div", { class: "card question-card" });
      qCard.appendChild(
        el("div", { class: "question-header" }, [
          el("span", { class: "question-number", text: "Pregunta " + (index + 1) + "/" + quiz.questions.length }),
          el("span", { class: "question-topic", text: q.topicName }),
        ])
      );
      qCard.appendChild(el("p", { class: "question-text", text: q.text }));

      if (q.type === "mcq") {
        q.options.forEach((opt, optIdx) => {
          const inputId = "q" + index + "_opt" + optIdx;
          const row = el("label", { class: "option-row", for: inputId });
          const input = el("input", { type: "radio", name: "q" + index, id: inputId, value: optIdx });
          input.addEventListener("change", () => {
            state.userAnswers[index] = optIdx;
          });
          row.appendChild(input);
          row.appendChild(el("span", { text: " " + opt }));
          qCard.appendChild(row);
        });
      } else if (q.type === "tf") {
        [["Veritat", true], ["Fals", false]].forEach(([label, value], i) => {
          const inputId = "q" + index + "_tf" + i;
          const row = el("label", { class: "option-row", for: inputId });
          const input = el("input", { type: "radio", name: "q" + index, id: inputId, value: String(value) });
          input.addEventListener("change", () => {
            state.userAnswers[index] = value;
          });
          row.appendChild(input);
          row.appendChild(el("span", { text: " " + label }));
          qCard.appendChild(row);
        });
      } else if (q.type === "short") {
        const input = el("input", { type: "text", class: "text-input", placeholder: "Escriu la resposta..." });
        input.addEventListener("input", (e) => {
          state.userAnswers[index] = e.target.value;
        });
        qCard.appendChild(input);
      }

      wrap.appendChild(qCard);
    });

    wrap.appendChild(
      el("button", {
        class: "btn btn-primary btn-big submit-btn",
        text: "✅ Corregir Test",
        onclick: () => submitQuiz(),
      })
    );

    appEl.appendChild(wrap);
  }

  function submitQuiz() {
    const quiz = state.quiz;
    const unanswered = quiz.questions.filter((q, i) => state.userAnswers[i] === undefined || state.userAnswers[i] === "");
    if (unanswered.length > 0) {
      const ok = confirm(
        "Encara et queden " + unanswered.length + " pregunta(es) sense respondre. Vols corregir igualment?"
      );
      if (!ok) return;
    }

    const result = Quiz.gradeQuiz(quiz, state.userAnswers);

    const attempt = {
      date: new Date().toISOString(),
      subjectId: quiz.subjectId,
      subjectName: quiz.subjectName,
      topicIds: quiz.topicIds,
      score: result.score,
      total: result.total,
      percent: result.percent,
      perTopic: result.perTopic,
    };
    Storage.saveAttempt(attempt);

    // Cada resposta correcta val 1 Rodrigo. Es suma al total acumulat
    // (el total es guarda al navegador i no es reinicia mai en pujar
    // noves versions a GitHub Pages, ni en afegir noves preguntes/temes).
    Points.addPoints(result.score);

    go("results", { lastResult: result });
    showRodrigosToast(result.score);
  }

  // --------------------------- RESULTS -------------------------------
  function motivationalMessage(percent) {
    if (percent >= 90) return { text: "Excel·lent! 🌟 Ets una autèntica crack!", cls: "tier-great" };
    if (percent >= 75) return { text: "Molt bé! 💜 Vas pel bon camí.", cls: "tier-good" };
    if (percent >= 50) return { text: "Bé, però pots millorar una mica més 💪", cls: "tier-mid" };
    return { text: "Cal repassar més aquests temes, tu pots! 🌸", cls: "tier-low" };
  }

  function topicRecommendation(percent) {
    if (percent >= 80) return { text: "Domines aquest tema ✅", cls: "badge-good" };
    if (percent >= 50) return { text: "Repassa'l una mica 📖", cls: "badge-mid" };
    return { text: "Repassa'l a fons ⚠️", cls: "badge-low" };
  }

  function renderResults() {
    const result = state.lastResult;
    const wrap = el("div", { class: "view results-view" });
    const msg = motivationalMessage(result.percent);

    wrap.appendChild(
      el("div", { class: "hero hero-small" }, [el("h1", { text: "🎉 Resultats del Test" })])
    );

    const scoreBox = el("div", { class: "card score-box" });
    scoreBox.appendChild(el("div", { class: "score-big", text: result.score + " / " + result.total }));
    scoreBox.appendChild(el("div", { class: "score-percent", text: result.percent + "%" }));

    const bar = el("div", { class: "progress-bar" });
    const fill = el("div", { class: "progress-fill" });
    fill.style.width = result.percent + "%";
    bar.appendChild(fill);
    scoreBox.appendChild(bar);

    scoreBox.appendChild(el("p", { class: "motivational " + msg.cls, text: msg.text }));
    wrap.appendChild(scoreBox);

    const topicsBox = el("div", { class: "card" });
    topicsBox.appendChild(el("h3", { text: "📋 Resultat per temes" }));
    const topicList = el("div", { class: "topic-result-list" });
    const toReview = [];

    Object.keys(result.perTopic).forEach((topicId) => {
      const t = result.perTopic[topicId];
      const pct = Math.round((t.correct / t.total) * 100);
      const rec = topicRecommendation(pct);
      if (pct < 80) toReview.push(t.name);

      const row = el("div", { class: "topic-result-row" });
      row.appendChild(el("span", { class: "topic-result-name", text: t.name }));
      row.appendChild(el("span", { class: "topic-result-score muted", text: t.correct + "/" + t.total + " (" + pct + "%)" }));
      row.appendChild(el("span", { class: "topic-badge " + rec.cls, text: rec.text }));
      topicList.appendChild(row);
    });
    topicsBox.appendChild(topicList);
    wrap.appendChild(topicsBox);

    if (toReview.length > 0) {
      const reviewBox = el("div", { class: "card review-box" });
      reviewBox.appendChild(el("h3", { text: "🌸 Temes a repassar" }));
      const ul = el("ul");
      toReview.forEach((name) => ul.appendChild(el("li", { text: name })));
      reviewBox.appendChild(ul);
      wrap.appendChild(reviewBox);
    } else {
      const okBox = el("div", { class: "card review-box review-box-ok" });
      okBox.appendChild(el("p", { text: "👏 No cal repassar res en concret: domines tots els temes d'aquest test!" }));
      wrap.appendChild(okBox);
    }

    // Detall pregunta a pregunta
    const detailsBox = el("div", { class: "card" });
    detailsBox.appendChild(el("h3", { text: "🔍 Repàs pregunta a pregunta" }));
    result.details.forEach((d, i) => {
      const row = el("div", { class: "detail-row " + (d.isCorrect ? "detail-correct" : "detail-incorrect") });
      row.appendChild(el("p", { class: "detail-question", text: (i + 1) + ". " + d.question.text }));
      let userAnswerText = "";
      let correctAnswerText = "";
      if (d.question.type === "mcq") {
        userAnswerText = d.userAnswer !== undefined ? d.question.options[d.userAnswer] : "(sense resposta)";
        correctAnswerText = d.question.options[d.question.answer];
      } else if (d.question.type === "tf") {
        userAnswerText = d.userAnswer === undefined ? "(sense resposta)" : d.userAnswer ? "Veritat" : "Fals";
        correctAnswerText = d.question.answer ? "Veritat" : "Fals";
      } else {
        userAnswerText = d.userAnswer || "(sense resposta)";
        correctAnswerText = Array.isArray(d.question.answer) ? d.question.answer[0] : d.question.answer;
      }
      row.appendChild(el("p", { class: "detail-answer", text: (d.isCorrect ? "✅ " : "❌ ") + "La teva resposta: " + userAnswerText }));
      if (!d.isCorrect) {
        row.appendChild(el("p", { class: "detail-answer detail-correct-answer", text: "✔️ Resposta correcta: " + correctAnswerText }));
      }
      if (d.question.explanation) {
        row.appendChild(el("p", { class: "detail-explanation", text: "💡 " + d.question.explanation }));
      }
      detailsBox.appendChild(row);
    });
    wrap.appendChild(detailsBox);

    const actionsRow = el("div", { class: "row" }, [
      el("button", {
        class: "btn btn-primary",
        text: "🔁 Fer un altre test",
        onclick: () => go("subject", { subjectId: state.subjectId }),
      }),
      el("button", {
        class: "btn btn-secondary",
        text: "📊 Veure historial",
        onclick: () => go("history", { subjectId: state.subjectId }),
      }),
    ]);
    wrap.appendChild(actionsRow);

    appEl.appendChild(wrap);
  }

  // --------------------------- HISTORY -------------------------------
  function renderHistory() {
    const subject = getSubject(state.subjectId);
    const history = Storage.getHistory(state.subjectId);

    const wrap = el("div", { class: "view history-view" });
    wrap.appendChild(
      el("div", { class: "hero hero-small" }, [
        el("h1", { text: "📊 Historial - " + (subject ? subject.name : "") }),
      ])
    );

    if (history.length === 0) {
      wrap.appendChild(el("p", { class: "muted", text: "Encara no has fet cap test d'aquesta assignatura." }));
    } else {
      history.forEach((a) => {
        const d = new Date(a.date);
        const dateStr = d.toLocaleDateString("ca-ES") + " " + d.toLocaleTimeString("ca-ES", { hour: "2-digit", minute: "2-digit" });
        const row = el("div", { class: "card history-row" });
        row.appendChild(el("span", { class: "history-date", text: dateStr }));
        row.appendChild(el("span", { class: "history-score", text: a.score + "/" + a.total + " (" + a.percent + "%)" }));
        const bar = el("div", { class: "progress-bar progress-bar-small" });
        const fill = el("div", { class: "progress-fill" });
        fill.style.width = a.percent + "%";
        bar.appendChild(fill);
        row.appendChild(bar);
        wrap.appendChild(row);
      });
    }

    wrap.appendChild(
      el("button", {
        class: "btn btn-primary",
        text: "⬅ Tornar a l'assignatura",
        onclick: () => go("subject", { subjectId: state.subjectId }),
      })
    );

    appEl.appendChild(wrap);
  }

  function init() {
    render();
  }

  return { init, go };
})();

document.addEventListener("DOMContentLoaded", App.init);
