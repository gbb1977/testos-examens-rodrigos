
/* ===========================================================
   storage.js - Gestió de l'historial de resultats (localStorage)
   =========================================================== */
const Storage = (function () {
  const KEY = "estudiFillaApp_v1_history";

  function _readAll() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error("Error llegint l'historial", e);
      return [];
    }
  }

  function _writeAll(data) {
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
    } catch (e) {
      console.error("Error guardant l'historial", e);
    }
  }

  function saveAttempt(attempt) {
    const all = _readAll();
    all.push(attempt);
    _writeAll(all);
  }

  function getHistory(subjectId) {
    const all = _readAll();
    all.sort((a, b) => new Date(b.date) - new Date(a.date));
    return subjectId ? all.filter((a) => a.subjectId === subjectId) : all;
  }

  // Retorna { attempts, avgPercent } per a un tema concret, mirant tot l'historial
  function getTopicStats(subjectId, topicId) {
    const history = getHistory(subjectId);
    let attempts = 0;
    let sumPercent = 0;
    history.forEach((a) => {
      if (a.perTopic && a.perTopic[topicId]) {
        const t = a.perTopic[topicId];
        if (t.total > 0) {
          attempts++;
          sumPercent += Math.round((t.correct / t.total) * 100);
        }
      }
    });
    return {
      attempts,
      avgPercent: attempts > 0 ? Math.round(sumPercent / attempts) : null,
    };
  }

  function clearHistory() {
    _writeAll([]);
  }

  return { saveAttempt, getHistory, getTopicStats, clearHistory };
})();
