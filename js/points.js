
/* ===========================================================
   points.js - Sistema de punts "Rodrigos" (gamificacio)

   MOLT IMPORTANT per al futur: la clau KEY d'aqui sota NO s'ha
   de canviar mai en properes versions. Els Rodrigos es guarden al
   navegador (localStorage) de cada dispositiu, lligats a aquesta
   clau. Si es canvia el nom de la clau, la filla perdria tots els
   Rodrigos acumulats en pujar una nova versio a GitHub Pages.
   Afegir assignatures, temes o preguntes noves NO afecta els punts:
   nomes es perdrien si es canvia aquesta KEY o si s'esborren les
   dades de navegacio del navegador.
   =========================================================== */
const Points = (function () {
  const KEY = "estudiFillaApp_rodrigos_v1";

  function getTotal() {
    try {
      const raw = localStorage.getItem(KEY);
      const val = raw ? parseInt(raw, 10) : 0;
      return isNaN(val) ? 0 : val;
    } catch (e) {
      console.error("Error llegint els Rodrigos", e);
      return 0;
    }
  }

  function addPoints(n) {
    if (!n || n <= 0) return getTotal();
    const total = getTotal() + n;
    try {
      localStorage.setItem(KEY, String(total));
    } catch (e) {
      console.error("Error guardant els Rodrigos", e);
    }
    return total;
  }

  return { getTotal, addPoints };
})();
