window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['matematiques'] = {
  "id": "matematiques",
  "name": "Matemàtiques - ESO2",
  "icon": "📐",
  "color": "#8B5FBF",
  "topics": [
    {
      "id": "fraccions",
      "name": "Fraccions",
      "icon": "🍕",
      "questions": [
        {
          "id": "mat_fr_01",
          "type": "mcq",
          "text": "Simplifica la fracció 8/12 al màxim.",
          "options": [
            "2/3",
            "4/6",
            "1/2",
            "3/4"
          ],
          "answer": 0,
          "explanation": "8/12 es pot dividir numerador i denominador per 4: 2/3."
        },
        {
          "id": "mat_fr_02",
          "type": "mcq",
          "text": "Quina fracció és equivalent a 1/2?",
          "options": [
            "2/4",
            "2/3",
            "3/4",
            "4/5"
          ],
          "answer": 0,
          "explanation": "2/4 es simplifica a 1/2."
        },
        {
          "id": "mat_fr_03",
          "type": "short",
          "text": "Quin és el resultat de 1/4 + 1/4? (escriu-ho com a fracció, ex: 1/2)",
          "answer": [
            "1/2",
            "2/4"
          ],
          "explanation": "Com que tenen el mateix denominador, sumem numeradors: 2/4 = 1/2."
        },
        {
          "id": "mat_fr_04",
          "type": "mcq",
          "text": "3/5 de 20 és:",
          "options": [
            "12",
            "15",
            "8",
            "10"
          ],
          "answer": 0,
          "explanation": "20 ÷ 5 = 4, i 4 × 3 = 12."
        },
        {
          "id": "mat_fr_05",
          "type": "tf",
          "text": "La fracció 5/5 és equivalent a 1.",
          "answer": true,
          "explanation": "Qualsevol fracció amb numerador i denominador iguals val 1."
        },
        {
          "id": "mat_fr_06",
          "type": "mcq",
          "text": "Per sumar fraccions amb denominadors diferents cal:",
          "options": [
            "Trobar un denominador comú i sumar numeradors",
            "Sumar numeradors i denominadors directament",
            "Multiplicar numeradors i denominadors",
            "Restar numeradors"
          ],
          "answer": 0,
          "explanation": "Cal igualar denominadors abans de sumar numeradors."
        },
        {
          "id": "mat_fr_07",
          "type": "short",
          "text": "Simplifica la fracció 10/15 (escriu-la com a a/b).",
          "answer": [
            "2/3"
          ],
          "explanation": "Dividint numerador i denominador per 5 obtenim 2/3."
        },
        {
          "id": "mat_fr_08",
          "type": "mcq",
          "text": "1/3 × 1/2 = ?",
          "options": [
            "1/6",
            "1/5",
            "2/6",
            "2/5"
          ],
          "answer": 0,
          "explanation": "Es multipliquen numeradors (1×1) i denominadors (3×2) = 1/6."
        },
        {
          "id": "mat_fr_09",
          "type": "mcq",
          "text": "2/3 ÷ 1/3 = ?",
          "options": [
            "2",
            "3",
            "2/9",
            "1/2"
          ],
          "answer": 0,
          "explanation": "Dividir fraccions és multiplicar per la inversa: 2/3 × 3/1 = 2."
        },
        {
          "id": "mat_fr_10",
          "type": "tf",
          "text": "Per dividir fraccions es multiplica per la fracció inversa de la segona.",
          "answer": true,
          "explanation": "És la regla general de la divisió de fraccions."
        },
        {
          "id": "mat_fr_11",
          "type": "mcq",
          "text": "Quina fracció és més gran, 3/4 o 2/3?",
          "options": [
            "3/4",
            "2/3",
            "Són iguals",
            "No es pot saber"
          ],
          "answer": 0,
          "explanation": "3/4 = 0,75 i 2/3 ≈ 0,67, per tant 3/4 és més gran."
        },
        {
          "id": "mat_fr_12",
          "type": "short",
          "text": "Expressa 0,75 com a fracció irreductible (a/b).",
          "answer": [
            "3/4"
          ],
          "explanation": "0,75 = 75/100, que simplificat dona 3/4."
        },
        {
          "id": "mat_fr_13",
          "type": "mcq",
          "text": "La fracció 7/4 és:",
          "options": [
            "Impròpia (més gran que 1)",
            "Pròpia (més petita que 1)",
            "Equivalent a 1",
            "Nul·la"
          ],
          "answer": 0,
          "explanation": "El numerador (7) és més gran que el denominador (4), per tant val més d'1."
        },
        {
          "id": "mat_fr_14",
          "type": "short",
          "text": "Quant és 2/5 + 1/5? (com a fracció a/b)",
          "answer": [
            "3/5"
          ],
          "explanation": "Mateix denominador: sumem numeradors, 2+1=3."
        },
        {
          "id": "mat_fr_15",
          "type": "mcq",
          "text": "Quin nombre mixt correspon a 9/4?",
          "options": [
            "2 i 1/4",
            "1 i 2/4",
            "2 i 1/2",
            "No es pot transformar"
          ],
          "answer": 0,
          "explanation": "9 ÷ 4 = 2 i en queden 1 de resta: 2 i 1/4."
        }
      ]
    },
    {
      "id": "calcul-mental",
      "name": "Càlcul mental",
      "icon": "⚡",
      "questions": [
        {
          "id": "mat_cm_01",
          "type": "short",
          "text": "Quant és el 10% de 250?",
          "answer": [
            "25"
          ],
          "explanation": "El 10% s'obté dividint per 10: 250/10=25."
        },
        {
          "id": "mat_cm_02",
          "type": "mcq",
          "text": "Quant és 7 × 8?",
          "options": [
            "54",
            "56",
            "64",
            "48"
          ],
          "answer": 1,
          "explanation": "7×8=56."
        },
        {
          "id": "mat_cm_03",
          "type": "short",
          "text": "Quant és 9 × 9?",
          "answer": [
            "81"
          ],
          "explanation": "9×9=81."
        },
        {
          "id": "mat_cm_04",
          "type": "mcq",
          "text": "Quant és la meitat de 180?",
          "options": [
            "80",
            "90",
            "95",
            "100"
          ],
          "answer": 1,
          "explanation": "180÷2=90."
        },
        {
          "id": "mat_cm_05",
          "type": "short",
          "text": "Quant és 2 elevat a 5 (2^5)?",
          "answer": [
            "32"
          ],
          "explanation": "2×2×2×2×2=32."
        },
        {
          "id": "mat_cm_06",
          "type": "mcq",
          "text": "Quant és el 50% de 84?",
          "options": [
            "40",
            "42",
            "44",
            "48"
          ],
          "answer": 1,
          "explanation": "El 50% és la meitat: 84÷2=42."
        },
        {
          "id": "mat_cm_07",
          "type": "short",
          "text": "Quant és l'arrel quadrada de 81?",
          "answer": [
            "9"
          ],
          "explanation": "9×9=81, per tant √81=9."
        },
        {
          "id": "mat_cm_08",
          "type": "tf",
          "text": "El doble de 36 és 72.",
          "answer": true,
          "explanation": "36×2=72."
        },
        {
          "id": "mat_cm_09",
          "type": "mcq",
          "text": "Quant és 100 − 37?",
          "options": [
            "63",
            "67",
            "73",
            "53"
          ],
          "answer": 0,
          "explanation": "100−37=63."
        },
        {
          "id": "mat_cm_10",
          "type": "short",
          "text": "Quant és el 25% de 200?",
          "answer": [
            "50"
          ],
          "explanation": "25% és la quarta part: 200÷4=50."
        },
        {
          "id": "mat_cm_11",
          "type": "mcq",
          "text": "Quant és 12 × 11?",
          "options": [
            "122",
            "132",
            "142",
            "121"
          ],
          "answer": 1,
          "explanation": "12×11=132."
        },
        {
          "id": "mat_cm_12",
          "type": "short",
          "text": "Quant és la tercera part de 90?",
          "answer": [
            "30"
          ],
          "explanation": "90÷3=30."
        },
        {
          "id": "mat_cm_13",
          "type": "mcq",
          "text": "Quant és 6 al quadrat (6^2)?",
          "options": [
            "12",
            "36",
            "64",
            "16"
          ],
          "answer": 1,
          "explanation": "6×6=36."
        },
        {
          "id": "mat_cm_14",
          "type": "tf",
          "text": "1000 dividit per 10 és 10.",
          "answer": false,
          "explanation": "1000÷10=100, no 10."
        },
        {
          "id": "mat_cm_15",
          "type": "short",
          "text": "Quant és el 20% de 150?",
          "answer": [
            "30"
          ],
          "explanation": "150÷10=15 (10%), ×2 = 30 (20%)."
        }
      ]
    },
    {
      "id": "geometria",
      "name": "Geometria",
      "icon": "📏",
      "questions": [
        {
          "id": "mat_ge_01",
          "type": "mcq",
          "text": "Quants costats té un hexàgon?",
          "options": [
            "5",
            "6",
            "7",
            "8"
          ],
          "answer": 1,
          "explanation": "\"Hexa\" vol dir sis."
        },
        {
          "id": "mat_ge_02",
          "type": "short",
          "text": "Quants graus sumen els angles interns d'un triangle?",
          "answer": [
            "180"
          ],
          "explanation": "Sempre sumen 180°."
        },
        {
          "id": "mat_ge_03",
          "type": "mcq",
          "text": "Fórmula de l'àrea d'un rectangle:",
          "options": [
            "base × alçada",
            "base + alçada",
            "2×(base+alçada)",
            "base²"
          ],
          "answer": 0,
          "explanation": "Àrea = base × alçada."
        },
        {
          "id": "mat_ge_04",
          "type": "short",
          "text": "Calcula l'àrea d'un quadrat de costat 5 cm (en cm²).",
          "answer": [
            "25"
          ],
          "explanation": "Àrea del quadrat = costat² = 5×5=25."
        },
        {
          "id": "mat_ge_05",
          "type": "mcq",
          "text": "Un triangle amb els tres costats iguals s'anomena:",
          "options": [
            "Equilàter",
            "Isòsceles",
            "Escalè",
            "Rectangle"
          ],
          "answer": 0,
          "explanation": "Equilàter: els tres costats (i angles) iguals."
        },
        {
          "id": "mat_ge_06",
          "type": "tf",
          "text": "Un angle de 90° s'anomena angle recte.",
          "answer": true,
          "explanation": "Correcte, 90° és un angle recte."
        },
        {
          "id": "mat_ge_07",
          "type": "mcq",
          "text": "Fórmula del perímetre d'un cercle (longitud de la circumferència):",
          "options": [
            "2πr",
            "πr²",
            "πr",
            "2r"
          ],
          "answer": 0,
          "explanation": "La longitud de la circumferència és 2πr."
        },
        {
          "id": "mat_ge_08",
          "type": "short",
          "text": "Quants graus té un angle recte?",
          "answer": [
            "90"
          ],
          "explanation": "Un angle recte mesura exactament 90°."
        },
        {
          "id": "mat_ge_09",
          "type": "mcq",
          "text": "Un quadrilàter amb els quatre costats iguals i els quatre angles de 90° és un:",
          "options": [
            "Quadrat",
            "Rectangle",
            "Rombe",
            "Trapezi"
          ],
          "answer": 0,
          "explanation": "Si a més dels angles rectes els costats són iguals, és un quadrat."
        },
        {
          "id": "mat_ge_10",
          "type": "tf",
          "text": "L'àrea d'un triangle és (base × alçada) / 2.",
          "answer": true,
          "explanation": "Correcte, aquesta és la fórmula general."
        },
        {
          "id": "mat_ge_11",
          "type": "mcq",
          "text": "Dos angles que sumen 180° es diuen:",
          "options": [
            "Suplementaris",
            "Complementaris",
            "Adjacents",
            "Oposats"
          ],
          "answer": 0,
          "explanation": "Suplementaris: sumen 180°. Complementaris sumen 90°."
        },
        {
          "id": "mat_ge_12",
          "type": "short",
          "text": "Calcula el perímetre d'un rectangle de base 6 cm i alçada 4 cm (en cm).",
          "answer": [
            "20"
          ],
          "explanation": "Perímetre = 2×(6+4) = 20 cm."
        },
        {
          "id": "mat_ge_13",
          "type": "mcq",
          "text": "Un angle més petit de 90° es diu:",
          "options": [
            "Agut",
            "Obtús",
            "Recte",
            "Pla"
          ],
          "answer": 0,
          "explanation": "Agut: menys de 90°. Obtús: entre 90° i 180°."
        },
        {
          "id": "mat_ge_14",
          "type": "tf",
          "text": "Un hexàgon regular té tots els costats i angles iguals.",
          "answer": true,
          "explanation": "Per definició, un polígon regular té costats i angles iguals."
        },
        {
          "id": "mat_ge_15",
          "type": "short",
          "text": "Calcula l'àrea d'un triangle amb base 8 cm i alçada 5 cm (en cm²).",
          "answer": [
            "20"
          ],
          "explanation": "Àrea = (8×5)/2 = 20 cm²."
        }
      ]
    },
    {
      "id": "semblanca",
      "name": "Semblança de figures",
      "icon": "🔺",
      "questions": [
        {
          "id": "mat_se_01",
          "type": "mcq",
          "text": "Dues figures són semblants quan:",
          "options": [
            "Tenen la mateixa forma però poden tenir mides diferents",
            "Tenen la mateixa mida",
            "Tenen el mateix color",
            "Tenen el mateix nombre de costats, només"
          ],
          "answer": 0,
          "explanation": "La semblança conserva la forma (angles) però no necessàriament la mida."
        },
        {
          "id": "mat_se_02",
          "type": "short",
          "text": "Si la raó de semblança entre dos triangles és 2, i un costat del petit mesura 3 cm, quant mesura el costat corresponent del gran (en cm)?",
          "answer": [
            "6"
          ],
          "explanation": "3 × 2 = 6 cm."
        },
        {
          "id": "mat_se_03",
          "type": "mcq",
          "text": "La raó de semblança es calcula com:",
          "options": [
            "El quocient entre costats corresponents",
            "La suma dels costats",
            "La diferència dels costats",
            "El producte dels costats"
          ],
          "answer": 0,
          "explanation": "Es divideix un costat per el seu corresponent a l'altra figura."
        },
        {
          "id": "mat_se_04",
          "type": "tf",
          "text": "Dues figures congruents (idèntiques) també es consideren semblants.",
          "answer": true,
          "explanation": "Són semblants amb raó de semblança 1."
        },
        {
          "id": "mat_se_05",
          "type": "short",
          "text": "Un mapa té escala 1:100000. Si la distància al mapa és 2 cm, quants km representa a la realitat?",
          "answer": [
            "2"
          ],
          "explanation": "2 cm × 100000 = 200000 cm = 2000 m = 2 km."
        },
        {
          "id": "mat_se_06",
          "type": "mcq",
          "text": "En figures semblants, els angles corresponents són:",
          "options": [
            "Iguals",
            "Diferents",
            "Complementaris",
            "Suplementaris"
          ],
          "answer": 0,
          "explanation": "La semblança sempre conserva els angles."
        },
        {
          "id": "mat_se_07",
          "type": "short",
          "text": "Si la raó de semblança és 1/3 i el costat de la figura gran mesura 15 cm, quant mesura el costat corresponent de la petita (en cm)?",
          "answer": [
            "5"
          ],
          "explanation": "15 × 1/3 = 5 cm."
        },
        {
          "id": "mat_se_08",
          "type": "tf",
          "text": "En una ampliació fotogràfica, la imatge resultant és semblant a l'original.",
          "answer": true,
          "explanation": "Es manté la forma, només canvia la mida."
        },
        {
          "id": "mat_se_09",
          "type": "mcq",
          "text": "Si dues figures tenen raó de semblança 1, aleshores són:",
          "options": [
            "Congruents (iguals)",
            "Diferents",
            "Impossibles de comparar",
            "Sempre triangles"
          ],
          "answer": 0,
          "explanation": "Raó 1 vol dir que no hi ha canvi de mida: són iguals."
        },
        {
          "id": "mat_se_10",
          "type": "short",
          "text": "Un plànol té escala 1:50. Si una habitació al plànol mesura 8 cm de llarg, quants metres mesura en realitat?",
          "answer": [
            "4"
          ],
          "explanation": "8 cm × 50 = 400 cm = 4 m."
        },
        {
          "id": "mat_se_11",
          "type": "mcq",
          "text": "Per saber si dos triangles són semblants, cal comprovar que:",
          "options": [
            "Els seus angles corresponents són iguals",
            "Tenen el mateix perímetre",
            "Tenen la mateixa àrea",
            "Són del mateix color"
          ],
          "answer": 0,
          "explanation": "Si els angles coincideixen, els triangles són semblants."
        },
        {
          "id": "mat_se_12",
          "type": "tf",
          "text": "La raó de semblança pot ser més petita que 1 (quan la figura es redueix).",
          "answer": true,
          "explanation": "Correcte, una reducció té raó de semblança entre 0 i 1."
        }
      ]
    },
    {
      "id": "pitagores",
      "name": "Teorema de Pitàgores",
      "icon": "📐",
      "questions": [
        {
          "id": "mat_pi_01",
          "type": "mcq",
          "text": "El teorema de Pitàgores s'aplica a:",
          "options": [
            "Triangles rectangles",
            "Triangles equilàters",
            "Qualsevol triangle",
            "Quadrats"
          ],
          "answer": 0,
          "explanation": "Només és vàlid en triangles amb un angle recte."
        },
        {
          "id": "mat_pi_02",
          "type": "short",
          "text": "Calcula la hipotenusa d'un triangle rectangle amb catets de 3 i 4 cm (en cm).",
          "answer": [
            "5"
          ],
          "explanation": "3²+4²=9+16=25, i √25=5."
        },
        {
          "id": "mat_pi_03",
          "type": "mcq",
          "text": "La fórmula del teorema de Pitàgores (sent 'a' la hipotenusa) és:",
          "options": [
            "a² = b² + c²",
            "a = b + c",
            "a² = b² − c²",
            "a = b² + c²"
          ],
          "answer": 0,
          "explanation": "El quadrat de la hipotenusa és la suma dels quadrats dels catets."
        },
        {
          "id": "mat_pi_04",
          "type": "short",
          "text": "Un triangle rectangle té catets de 6 i 8 cm. Quina és la seva hipotenusa (en cm)?",
          "answer": [
            "10"
          ],
          "explanation": "6²+8²=36+64=100, i √100=10."
        },
        {
          "id": "mat_pi_05",
          "type": "tf",
          "text": "La hipotenusa és el costat més llarg d'un triangle rectangle.",
          "answer": true,
          "explanation": "Sempre és el costat oposat a l'angle recte, el més llarg."
        },
        {
          "id": "mat_pi_06",
          "type": "mcq",
          "text": "En un triangle rectangle, els catets són:",
          "options": [
            "Els dos costats que formen l'angle recte",
            "El costat oposat a l'angle recte",
            "Els tres costats",
            "Cap dels anteriors"
          ],
          "answer": 0,
          "explanation": "Els catets formen l'angle de 90°; la hipotenusa és l'oposada."
        },
        {
          "id": "mat_pi_07",
          "type": "short",
          "text": "Si la hipotenusa d'un triangle rectangle és 13 cm i un catet és 5 cm, quant val l'altre catet (en cm)?",
          "answer": [
            "12"
          ],
          "explanation": "13²−5²=169−25=144, i √144=12."
        },
        {
          "id": "mat_pi_08",
          "type": "tf",
          "text": "El teorema de Pitàgores permet calcular un costat desconegut si coneixem els altres dos d'un triangle rectangle.",
          "answer": true,
          "explanation": "Exactament, aquesta és la seva utilitat principal."
        },
        {
          "id": "mat_pi_09",
          "type": "mcq",
          "text": "Un triangle amb costats 3, 4 i 5 és:",
          "options": [
            "Rectangle",
            "Equilàter",
            "Obtusangle",
            "No pot existir"
          ],
          "answer": 0,
          "explanation": "Compleix 3²+4²=5², per tant és rectangle."
        },
        {
          "id": "mat_pi_10",
          "type": "short",
          "text": "Calcula la hipotenusa d'un triangle rectangle amb catets de 9 i 12 cm (en cm).",
          "answer": [
            "15"
          ],
          "explanation": "9²+12²=81+144=225, i √225=15."
        },
        {
          "id": "mat_pi_11",
          "type": "mcq",
          "text": "Si coneixem la hipotenusa i un catet, per trobar l'altre catet cal:",
          "options": [
            "Restar els quadrats i fer l'arrel quadrada",
            "Sumar els quadrats i fer l'arrel quadrada",
            "Multiplicar-los",
            "Dividir-los"
          ],
          "answer": 0,
          "explanation": "c² = a² − b² i després arrel quadrada."
        },
        {
          "id": "mat_pi_12",
          "type": "tf",
          "text": "El teorema de Pitàgores només funciona en triangles rectangles isòsceles.",
          "answer": false,
          "explanation": "Funciona en qualsevol triangle rectangle, isòsceles o no."
        }
      ]
    }
  ]
};
