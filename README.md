# El Meu Espai d'Estudi 🌸📚

Aplicacio web (HTML/CSS/JS) per ajudar a estudiar i autoavaluar-se amb tests,
amb un sistema de punts ("Rodrigos") per fer-ho mes divertit.

## Com fer-la servir

Hi ha dues maneres d'obrir-la, compatibles entre elles:

**A) En local, fent doble clic** a `index.html` (s'obre a Chrome sense
internet ni servidor). Util per provar canvis abans de publicar-los.

**B) Publicada a internet (GitHub Pages)** — es la forma recomanada perque
hi pugueu accedir des de qualsevol dispositiu (PC, iPad...), no nomes des
d'aquest ordinador. Un cop pujada, prem `Ctrl+D` a Chrome (o "Afegir a la
pantalla d'inici" a Safari/iPad) per tenir-hi accés directe amb un clic/icona.

⚠️ Important sobre les dades (historial i Rodrigos): es guarden al navegador
de cada dispositiu (localStorage), no al nuvol. Aixo vol dir:
- Si es fa un test des del PC i un altre des de l'iPad, cada dispositiu te
  el seu propi historial i el seu propi compte de Rodrigos (no se sumen).
- Pujar una versio nova a GitHub (noves preguntes, nova assignatura...) **no
  esborra res**: l'historial i els Rodrigos acumulats es mantenen, sempre
  que no es canviin les claus internes `estudiFillaApp_v1_history` ni
  `estudiFillaApp_rodrigos_v1` (jo ja en tinc cura quan et faig actualitzacions).
- Només es perdrien si s'esborren les "dades de navegacio" del navegador.

## Sistema de punts "Rodrigos" 🍩

Cada resposta correcta d'un test suma 1 Rodrigo (simbol **OR**: inicials
d'Olivia Rodrigo i joc de paraules amb "or", el metall preciós). El comptador
es veu sempre a dalt a la dreta, i en acabar un test apareix una bombolla
de felicitacio amb els Rodrigos guanyats en aquell test. El total es acumulatiu
i no es reinicia mai en afegir contingut nou.

## Estructura del projecte

```
estudi-filla/
├── index.html              -> pagina principal, no cal tocar-la gaire
├── css/
│   └── style.css           -> estils (colors, tipografia, floral, insignia Rodrigos)
├── js/
│   ├── storage.js          -> guarda/llegeix l'historial de resultats
│   ├── points.js           -> guarda/llegeix els Rodrigos acumulats (gamificacio)
│   ├── quiz.js              -> genera i corregeix els tests
│   ├── app.js               -> navegacio entre pantalles (NO conte contingut)
│   └── data/
│       ├── matematiques.js  -> temes i preguntes de Matematiques - ESO2
│       └── catala.js        -> temes i preguntes de Llengua Catalana - ESO2
├── img/
│   └── or-butterfly.png     -> logo de la papallona OR (icona dels Rodrigos)
└── README.md                -> aquest fitxer
```

**IMPORTANT sobre la carpeta `img/`:** no s'ha de canviar de nom ni eliminar
el fitxer `or-butterfly.png`. Es la icona que es mostra a la insignia de punts
i a la bombolla de felicitacio. Si es puja una nova versio a GitHub, cal
pujar tambe aquesta carpeta `img/` (no nomes els `.js`/`.html`/`.css`).

## Com afegir una assignatura nova

1. Crea un fitxer nou a `js/data/`, per exemple `angles.js`.
2. Segueix exactament aquest format (copia el de `catala.js` com a plantilla):

Important: el camp `"name"` ha d'incloure el curs, seguint el format
`"Nom de l'assignatura - ESO2"` (aixi, si en el futur s'afegeixen assignatures
d'altres cursos, es distingiran facilment a la pagina principal).

```js
window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['angles'] = {
  "id": "angles",
  "name": "Angles - ESO2",
  "icon": "🇬🇧",
  "color": "#5fa8d9",
  "topics": [
    {
      "id": "present-simple",
      "name": "Present Simple",
      "icon": "⏰",
      "questions": [
        {
          "id": "ang_ps_01",
          "type": "mcq",
          "text": "She ___ to school every day.",
          "options": ["go", "goes", "going", "gone"],
          "answer": 1,
          "explanation": "Amb he/she/it, el present simple afegeix -s/-es: goes."
        }
      ]
    }
  ]
};
```

3. Enllaça el fitxer nou dins `index.html`, afegint una linia com aquesta
   just al costat de les altres (abans de `storage.js`):

```html
<script src="js/data/angles.js"></script>
```

4. Torna a obrir `index.html` a Chrome: la nova assignatura ja apareixera
   a la pagina principal, amb el seu generador de test inclos.

## Com afegir temes o preguntes noves a una assignatura existent

Obre el fitxer corresponent (`js/data/matematiques.js` o `js/data/catala.js`)
amb un editor de text (per exemple el Bloc de notes, o millor VSCode/Notepad++).

- Per afegir un **tema nou**, copia un bloc `{ "id": ..., "name": ..., "icon": ...,
  "questions": [...] }` dins de la llista `"topics"` i omple'l amb preguntes noves.
- Per afegir **preguntes** a un tema existent, afegeix objectes nous dins de la
  seva llista `"questions"`.

### Tipus de preguntes disponibles

- `"type": "mcq"` -> opcio multiple. Necessita `"options"` (llista de 4 textos)
  i `"answer"` (index de l'opcio correcta, comptant des de 0).
- `"type": "tf"` -> veritat/fals. `"answer"` ha de ser `true` o `false`.
- `"type": "short"` -> resposta curta escrita. `"answer"` és una llista de
  respostes acceptades en minuscules (per exemple `["3/4"]`). No cal posar
  accents a la resposta esperada, el sistema ignora accents i majuscules/minuscules.

El camp `"explanation"` es opcional pero recomanat: es mostra despres de
corregir el test com a pista/explicacio.

⚠️ Important: cada vegada que afegeixis o canviis preguntes, revisa que el
fitxer JSON segueixi sent valid (cometes, claus i claudators ben tancats).
Si tens dubtes, demana'm a mi (l'assistent) que et generi el bloc nou i
l'enganxes directament.

## Com funciona el generador de test

- Es pot triar quins temes incloure (per defecte, tots els de l'assignatura).
- Es pot triar el nombre de preguntes: 10, 12 o 15.
- Les preguntes es trien a l'atzar del banc de preguntes de cada tema
  seleccionat, i les opcions de resposta multiple tambe es barregen.
- En acabar, es mostra la nota, un missatge motivador, el percentatge
  encertat per tema i una llista de "Temes a repassar" (els que han sortit
  per sota del 80% d'encert en aquell test).
- Cada intent queda guardat a l'historial (bo to per veure l'evolucio).

## Proximes ampliacions possibles

- Afegir mes assignatures (Angles, Castella, Socials, Naturals...).
- Afegir mes temes dins de Matematiques i Catala.
- Fer un mode "nomes els temes flojos" que generi tests centrats en allo
  que surt pitjor a l'historial.
- Afegir un grafic d'evolucio al llarg del temps.
- Botigueta o nivells per bescanviar els Rodrigos acumulats.

Quan vulguis ampliar-ho, només cal que em passis quin contingut vols afegir
i jo et genero els blocs de codi (o un fitxer nou sencer) per enganxar.

## Publicar actualitzacions a GitHub Pages

Si la pagina ja esta publicada a GitHub Pages, per actualitzar-la nomes cal
pujar (sobreescriure) els fitxers que hagin canviat al mateix repositori
(botó "Add file" > "Upload files" a GitHub). No cal tornar a fer res mes:
- L'historial de resultats i els Rodrigos acumulats de cada dispositiu es
  mantenen (es guarden al navegador, no als fitxers).
- Si s'afegeix una assignatura nova, recorda seguir el format de nom
  "Nom - ESO2" i enllaçar el fitxer nou dins `index.html`.
