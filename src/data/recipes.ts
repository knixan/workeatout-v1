// Mockdata tills databas och admin finns på plats.

export const recipeCategories = [
  { id: "frukost", label: "Frukost" },
  { id: "mellanmal", label: "Mellanmål" },
  { id: "lunch-middag", label: "Lunch/Middag" },
  { id: "kvallsmat", label: "Kvällsmat" },
] as const;

export type RecipeCategory = (typeof recipeCategories)[number]["id"];

// Ett riktvärde eller ett intervall, till exempel [370, 390].
export type NutritionValue = number | readonly [number, number];

export type Recipe = {
  id: string;
  title: string;
  category: RecipeCategory;
  ingredients: string[];
  instructions: string;
  nutrition: {
    kcal: NutritionValue;
    protein: NutritionValue;
    carbs: NutritionValue;
    fat: NutritionValue;
  };
};

export const recipeUsageGuide = {
  title: "Så använder du recepten",
  paragraphs: [
    "Välj en måltid i samma kategori som i ditt grundschema. Recepten är gjorda för ungefär liknande portionsstorlekar och måltidsnivåer, men exakta kcal beror på märke, fetthalt och tillagning. Väg pasta, ris och quinoa torrt; kött och fisk anges i rå vikt om inget annat står.",
    "Potatis anges i rå vikt och grönsaker som ungefärlig vikt.",
    "Tillaga utan extra olja, eller använd en liten mängd och räkna då med att fett och kalorier ökar. Välj osötad sylt och naturell lättkvarg omkring 0,1–0,3 % fett.",
    "Recepten är tänkta som variationer inom din angivna måltidsstruktur – inte som en ny individuell kostordination. Om du har exakta makromål från din rådgivare bör de styra framför uppskattningarna här.",
  ],
};

export const recipeGuides = [
  {
    title: "Smak utan att dra iväg i kcal",
    paragraphs: [
      "Grekisk yoghurt fungerar fint som kall sås. Välj gärna naturell 0–2 % fett och smaksätt med citron, vitlök, dill, persilja, curry, paprikapulver, chili eller örter.",
      "Avokado ger krämighet. Mixa 25–30 g avokado med 50 g grekisk yoghurt, lime, koriander eller vitlök och lite vatten. Det blir en smakrik sås på ungefär 65–80 kcal beroende på yoghurt.",
      "Asiatisk smak: soja (cirka 1 msk) ger vanligtvis få kcal. En liten mängd ostronsås, cirka 1 tsk–2 tsk, ger också relativt lite energi. Kontrollera etiketten eftersom märken skiljer sig åt; tänk även på salthalten.",
      "Räkna med extra energi från olja, pesto, nötter, ost och större mängder avokado. Använd gärna non-stick-panna, vatten eller buljong när du vill hålla måltiden nära uppskattningen.",
    ],
  },
  {
    title: "Fler snabba såser och smaksättningar",
    paragraphs: [
      "Dill- och citronsås: 60 g grekisk yoghurt 0–2 %, dill, citron, svartpeppar och lite salt. Ca 35–45 kcal.",
      "Vitlöks- och örtsås: 60 g grekisk yoghurt 0–2 %, pressad vitlök, persilja, oregano och citron. Ca 35–45 kcal.",
      "Avokado- och limesås: 25 g avokado, 50 g grekisk yoghurt 0–2 %, lime, koriander och vatten. Ca 65–80 kcal.",
      "Curry- och mangosås: 60 g grekisk yoghurt 0–2 %, curry och 20 g finhackad mango. Ca 45–55 kcal.",
      "Asiatisk woksås: 1 msk soja, 2 tsk ostronsås, vitlök, ingefära, chili och 1–2 msk vatten. Ca 15–25 kcal.",
    ],
  },
  {
    title: "Om kcal och portionsstorlek",
    paragraphs: [
      "Kcal och makron är ungefärliga uppskattningar per portion, avrundade för att vara praktiska. Olika märken av bönpasta, grekisk yoghurt, proteinpulver, keso, såser och köttfärs kan skilja sig tydligt i energi och protein. Kontrollera därför förpackningen om du behöver följa en bestämd energinivå mycket noggrant.",
      "Vill du hålla måltiden nära grundschemat: använd angivna mängder, välj magra mejeri- och köttalternativ och mät upp olja, pesto, nötter och avokado. Soja och ostronsås går bra i små mängder för smak, men de kan bidra med mycket salt.",
    ],
  },
];

export const recipes: Recipe[] = [
  // Frukost
  {
    id: "kanelgrot-med-kvarg-och-bar",
    title: "Kanelgröt med kvarg och bär",
    category: "frukost",
    ingredients: [
      "1 dl havregryn",
      "2 dl vatten",
      "150 g lättkvarg 0,1–0,3 %",
      "50 g blåbär",
      "1 tsk osötad sylt",
      "Kanel",
    ],
    instructions:
      "Koka havregrynen med vattnet. Rör ner kanel. Servera med kvarg, blåbär och sylt.",
    nutrition: { kcal: 280, protein: 22, carbs: 39, fat: 4 },
  },
  {
    id: "agg-och-kalkonomelett-med-gronsaker",
    title: "Ägg- och kalkonomelett med grönsaker",
    category: "frukost",
    ingredients: [
      "2 ägg",
      "60 g kalkonpålägg eller tillagad kalkon",
      "100 g tomat, paprika och spenat",
      "Salt, peppar och örter",
    ],
    instructions:
      "Vispa äggen lätt. Stek omeletten i en bra non-stick-panna. Lägg i kalkon och grönsaker och vik ihop.",
    nutrition: { kcal: 250, protein: 29, carbs: 7, fat: 12 },
  },
  {
    id: "kvargskal-med-musli-och-agg",
    title: "Kvargskål med müsli och ägg",
    category: "frukost",
    ingredients: [
      "200 g lättkvarg 0,1–0,3 %",
      "25 g müsli",
      "1 ägg",
      "Kanel eller några skivor jordgubbar",
    ],
    instructions:
      "Koka ägget. Lägg kvarg i en skål och toppa med müsli och kanel. Ät ägget vid sidan av.",
    nutrition: { kcal: 295, protein: 28, carbs: 25, fat: 9 },
  },
  {
    id: "havre-och-aggvitepannkakor",
    title: "Havre- och äggvitepannkakor",
    category: "frukost",
    ingredients: [
      "1 dl havregryn",
      "1,5 dl äggvita",
      "50 g lättkvarg",
      "50 g hallon",
      "Kanel och lite vatten vid behov",
    ],
    instructions:
      "Mixa havregryn, äggvita, kvarg och kanel. Stek små pannkakor i non-stick-panna. Servera med hallon.",
    nutrition: { kcal: 260, protein: 27, carbs: 29, fat: 4 },
  },
  {
    id: "bananpannkaka-pa-havre-och-aggvita",
    title: "Bananpannkaka på havre och äggvita",
    category: "frukost",
    ingredients: [
      "40 g havregryn",
      "1 liten banan (ca 100–120 g)",
      "150 g äggvita",
      "50 g lättkvarg till topping",
      "Kanel och ½ tsk bakpulver",
      "50 g bär (valfritt)",
    ],
    instructions:
      "Mosa bananen. Mixa eller rör ihop med havregryn, äggvita, kanel och bakpulver. Låt gärna smeten stå 3–5 minuter. Stek små pannkakor i en non-stick-panna på medelvärme. Servera med kvarg och eventuellt bär.",
    nutrition: {
      kcal: [370, 390],
      protein: [28, 30],
      carbs: [55, 60],
      fat: [4, 5],
    },
  },
  {
    id: "overnight-oats-med-vaniljkvarg-och-bar",
    title: "Overnight oats med vaniljkvarg och bär",
    category: "frukost",
    ingredients: [
      "35 g havregryn",
      "150 g lättkvarg 0,1–0,3 %",
      "100 g blåbär eller hallon",
      "5 g chiafrön",
      "½ dl vatten eller osötad mandeldryck",
      "Vaniljpulver eller kanel",
    ],
    instructions:
      "Blanda havregryn, kvarg, chiafrön och vätska i en burk. Rör ner vanilj eller kanel. Ställ i kylen över natten. Toppa med bären före servering.",
    nutrition: {
      kcal: [285, 305],
      protein: [20, 22],
      carbs: [35, 39],
      fat: [4, 6],
    },
  },
  {
    id: "omelett-med-kalkon-svamp-och-spenat",
    title: "Omelett med kalkon, svamp och spenat",
    category: "frukost",
    ingredients: [
      "1 helt ägg",
      "150 g äggvita",
      "50 g kalkonpålägg eller tillagad kalkon",
      "100 g champinjoner och spenat",
      "1 knäckebröd",
      "Salt, peppar och paprikapulver",
    ],
    instructions:
      "Skiva svampen och stek den mjuk i non-stick-panna. Lägg i spenat och kalkon. Häll över vispat ägg och äggvita. Tillaga på låg värme tills omeletten stelnat. Servera med knäckebrödet.",
    nutrition: {
      kcal: [260, 280],
      protein: [30, 33],
      carbs: [14, 17],
      fat: [7, 9],
    },
  },
  {
    id: "apple-och-kanelgrot-med-protein",
    title: "Äpple- och kanelgröt med protein",
    category: "frukost",
    ingredients: [
      "35 g havregryn",
      "150 ml lättmjölk eller osötad sojadryck",
      "15 g proteinpulver (valfri smak)",
      "½ äpple (ca 75 g)",
      "Kanel och vatten efter önskad konsistens",
    ],
    instructions:
      "Koka havregryn med mjölk och lite vatten. Riv eller tärna äpplet och låt det koka med. Låt gröten svalna någon minut innan proteinpulvret rörs ner. Smaksätt med kanel.",
    nutrition: {
      kcal: [290, 320],
      protein: [20, 24],
      carbs: [40, 45],
      fat: [4, 6],
    },
  },

  // Mellanmål 1
  {
    id: "kvarg-med-mango-och-gurkstavar",
    title: "Kvarg med mango och gurkstavar",
    category: "mellanmal",
    ingredients: [
      "150 g lättkvarg 0,1–0,3 %",
      "150 g mango",
      "150 g gurka eller andra grönsaker",
    ],
    instructions:
      "Skär mangon i bitar och servera med kvargen. Ät grönsakerna vid sidan av.",
    nutrition: { kcal: 190, protein: 18, carbs: 27, fat: 1 },
  },
  {
    id: "bar-och-vaniljkvarg",
    title: "Bär- och vaniljkvarg",
    category: "mellanmal",
    ingredients: [
      "150 g lättkvarg 0,1–0,3 %",
      "150 g blåbär eller hallon",
      "Vaniljpulver eller kanel",
    ],
    instructions:
      "Rör ner vaniljpulver eller kanel i kvargen och toppa med bären.",
    nutrition: { kcal: 160, protein: 18, carbs: 20, fat: 1 },
  },
  {
    id: "apple-kvarg-och-kanel",
    title: "Äpple, kvarg och kanel",
    category: "mellanmal",
    ingredients: [
      "150 g lättkvarg 0,1–0,3 %",
      "1 litet äpple (ca 120 g)",
      "Kanel",
    ],
    instructions: "Tärna äpplet och blanda med kvargen. Strö över kanel.",
    nutrition: { kcal: 175, protein: 18, carbs: 23, fat: 1 },
  },
  {
    id: "bjornbarskvarg-med-krispiga-gronsaker",
    title: "Björnbärskvarg med krispiga grönsaker",
    category: "mellanmal",
    ingredients: [
      "125 g lättkvarg 0,1–0,3 %",
      "200 g björnbär eller blandade bär",
      "100 g morot eller gurka",
    ],
    instructions:
      "Servera bären med kvargen och grönsakerna i stavar vid sidan av.",
    nutrition: { kcal: 170, protein: 15, carbs: 25, fat: 1 },
  },
  {
    id: "kramig-barskal-med-grekisk-yoghurt",
    title: "Krämig bärskål med grekisk yoghurt",
    category: "mellanmal",
    ingredients: [
      "150 g grekisk yoghurt 0–2 %",
      "100 g jordgubbar eller blåbär",
      "10 g hackade valnötter",
      "Kanel eller lite vaniljpulver",
    ],
    instructions:
      "Skiva jordgubbarna eller använd tinade bär. Lägg upp med yoghurten och toppa med nötter och kanel.",
    nutrition: {
      kcal: [200, 230],
      protein: [15, 18],
      carbs: [15, 20],
      fat: [7, 10],
    },
  },
  {
    id: "kvargmousse-med-kakao-och-hallon",
    title: "Kvargmousse med kakao och hallon",
    category: "mellanmal",
    ingredients: [
      "150 g lättkvarg",
      "1 tsk kakao (ca 5 g)",
      "80 g hallon",
      "Lite sötströ eller vaniljpulver efter smak",
    ],
    instructions:
      "Vispa eller rör kvargen luftig med kakao och eventuell sötning. Toppa med hallon. Låt stå kallt en stund om du vill ha fastare konsistens.",
    nutrition: {
      kcal: [145, 165],
      protein: [18, 20],
      carbs: [14, 17],
      fat: [1, 2],
    },
  },
  {
    id: "riskakor-med-kalkon-och-avokadokram",
    title: "Riskakor med kalkon och avokadokräm",
    category: "mellanmal",
    ingredients: [
      "2 riskakor",
      "60 g kalkonpålägg",
      "25 g avokado",
      "30 g grekisk yoghurt 0–2 %",
      "Citron, salt och svartpeppar",
    ],
    instructions:
      "Mosa avokadon med yoghurt, citron och peppar. Bred på riskakorna och toppa med kalkon.",
    nutrition: {
      kcal: [190, 210],
      protein: [14, 16],
      carbs: [18, 22],
      fat: [5, 7],
    },
  },
  {
    id: "liten-proteinsmoothie-med-banan-och-bar",
    title: "Liten proteinsmoothie med banan och bär",
    category: "mellanmal",
    ingredients: [
      "15 g proteinpulver",
      "150 ml lättmjölk eller osötad sojadryck",
      "½ banan",
      "75 g frysta bär",
      "Is och vatten efter önskad konsistens",
    ],
    instructions:
      "Mixa allt till en jämn smoothie. Tillsätt mer vatten eller is om du vill ha den tunnare.",
    nutrition: {
      kcal: [185, 210],
      protein: [17, 20],
      carbs: [23, 28],
      fat: [2, 4],
    },
  },

  // Lunch
  {
    id: "citronkyckling-med-quinoa-och-krispig-sallad",
    title: "Citronkyckling med quinoa och krispig sallad",
    category: "lunch-middag",
    ingredients: [
      "110 g kycklingfilé (rå vikt)",
      "30 g quinoa (torr vikt)",
      "250 g sallad: gurka, tomat, rödkål och salladsblad",
      "Citron, vitlök, peppar och örter",
    ],
    instructions:
      "Koka quinoan. Krydda kycklingen med citron, vitlök och örter och stek eller tillaga i ugn. Servera med salladen.",
    nutrition: { kcal: 300, protein: 32, carbs: 32, fat: 5 },
  },
  {
    id: "torsk-med-potatis-och-varm-broccoli",
    title: "Torsk med potatis och varm broccoli",
    category: "lunch-middag",
    ingredients: [
      "120 g torsk (rå vikt)",
      "200 g potatis",
      "250 g broccoli, morot och rödlök",
      "Citron, dill, salt och peppar",
    ],
    instructions:
      "Koka potatisen. Tillaga torsken i ugn med citron och dill. Ånga eller koka grönsakerna och servera tillsammans.",
    nutrition: { kcal: 300, protein: 29, carbs: 42, fat: 2 },
  },
  {
    id: "kalkonbowl-med-raris",
    title: "Kalkonbowl med råris",
    category: "lunch-middag",
    ingredients: [
      "110 g kalkonfilé (rå vikt)",
      "30 g råris (torr vikt)",
      "250 g strimlad vitkål, morot, gurka och tomat",
      "Soja med låg salthalt, lime och ingefära",
    ],
    instructions:
      "Koka riset. Stek kalkonen med ingefära och lite soja. Lägg upp med grönsaker och pressa över lime.",
    nutrition: { kcal: 300, protein: 31, carbs: 35, fat: 4 },
  },
  {
    id: "rakor-med-svart-ris-och-gronsaker",
    title: "Räkor med svart ris och grönsaker",
    category: "lunch-middag",
    ingredients: [
      "120 g skalade räkor",
      "30 g svart ris (torr vikt)",
      "250 g sparris, gurka, tomat och salladsblad",
      "Citron, dill och svartpeppar",
    ],
    instructions:
      "Koka riset. Blanda räkorna med citron och dill. Servera med ris och grönsaker.",
    nutrition: { kcal: 270, protein: 29, carbs: 34, fat: 2 },
  },
  {
    id: "pastasallad-med-bonpasta-kyckling-och-pestoyoghurt",
    title: "Pastasallad med bönpasta, kyckling och pestoyoghurt",
    category: "lunch-middag",
    ingredients: [
      "50 g bönpasta (torr vikt)",
      "100 g kycklingfilé (rå vikt)",
      "150 g tomat, gurka och ruccola",
      "40 g grekisk yoghurt 0–2 %",
      "5 g pesto",
      "Citron, svartpeppar och basilika",
    ],
    instructions:
      "Koka bönpastan enligt förpackningen och skölj svalt. Tillaga kycklingen och skär i bitar. Rör ihop yoghurt, pesto, citron och peppar. Blanda med pasta och grönsaker.",
    nutrition: {
      kcal: [370, 410],
      protein: [42, 48],
      carbs: [30, 36],
      fat: [6, 9],
    },
  },
  {
    id: "tonfisksallad-med-bonpasta-och-citronkram",
    title: "Tonfisksallad med bönpasta och citronkräm",
    category: "lunch-middag",
    ingredients: [
      "45 g bönpasta (torr vikt)",
      "100 g tonfisk i vatten, avrunnen",
      "150 g paprika, rödlök, gurka och tomat",
      "50 g grekisk yoghurt 0–2 %",
      "Citron, dijonsenap, dill och svartpeppar",
    ],
    instructions:
      "Koka och kyl pastan. Blanda yoghurt med citron, lite dijonsenap och dill. Vänd ner tonfisk, grönsaker och pasta. Smaka av med peppar.",
    nutrition: {
      kcal: [320, 360],
      protein: [38, 44],
      carbs: [28, 33],
      fat: [3, 5],
    },
  },
  {
    id: "asiatisk-notfarsbowl-med-soja-och-ostronsas",
    title: "Asiatisk nötfärsbowl med soja och ostronsås",
    category: "lunch-middag",
    ingredients: [
      "100 g nötfärs 5 % (rå vikt)",
      "30 g ris (torr vikt)",
      "200 g wokgrönsaker",
      "1 msk soja",
      "2 tsk ostronsås",
      "1 tsk sesamfrön eller 3 g sesamolja",
      "Vitlök och färsk ingefära",
    ],
    instructions:
      "Koka riset. Stek färsen och tillsätt vitlök och ingefära. Lägg i grönsakerna. Smaksätt med soja och ostronsås samt lite vatten. Toppa med sesamfrön eller en liten mängd sesamolja.",
    nutrition: {
      kcal: [350, 390],
      protein: [26, 30],
      carbs: [36, 42],
      fat: [8, 11],
    },
  },
  {
    id: "rak-och-quinoasallad-med-avokadoyoghurt",
    title: "Räk- och quinoasallad med avokadoyoghurt",
    category: "lunch-middag",
    ingredients: [
      "120 g skalade räkor",
      "30 g quinoa (torr vikt)",
      "200 g sallad, gurka och tomat",
      "25 g avokado",
      "50 g grekisk yoghurt 0–2 %",
      "Lime, koriander, chili och svartpeppar",
    ],
    instructions:
      "Koka quinoan och låt svalna. Mixa avokado, yoghurt, lime, koriander och lite vatten till en sås. Vänd ihop sallad, quinoa och räkor. Servera med såsen.",
    nutrition: {
      kcal: [330, 370],
      protein: [29, 33],
      carbs: [30, 35],
      fat: [7, 10],
    },
  },

  // Mellanmål 2
  {
    id: "proteindrink-med-banan",
    title: "Proteindrink med banan",
    category: "mellanmal",
    ingredients: [
      "1 portion whey/proteinpulver enligt förpackningen (ca 25 g protein)",
      "1 liten banan",
      "Vatten och is",
    ],
    instructions:
      "Mixa eller skaka proteinpulvret med vatten. Ät bananen vid sidan av eller mixa ner den.",
    nutrition: { kcal: 220, protein: 26, carbs: 24, fat: 2 },
  },
  {
    id: "kvarg-med-notter-och-kanel",
    title: "Kvarg med nötter och kanel",
    category: "mellanmal",
    ingredients: [
      "200 g lättkvarg 0,1–0,3 %",
      "15 g valnötter eller cashewnötter",
      "Kanel",
    ],
    instructions:
      "Lägg kvargen i en skål. Hacka nötterna grovt och strö över tillsammans med kanel.",
    nutrition: { kcal: [205, 230], protein: [23, 26], carbs: [10, 13], fat: [8, 11] },
  },
  {
    id: "apelsin-och-proteinshake",
    title: "Apelsin och proteinshake",
    category: "mellanmal",
    ingredients: [
      "1 apelsin",
      "1 portion proteinpulver enligt förpackningen",
      "Vatten",
    ],
    instructions:
      "Skaka proteinpulvret med kallt vatten. Ät apelsinen vid sidan av.",
    nutrition: { kcal: 190, protein: 25, carbs: 18, fat: 2 },
  },
  {
    id: "kvarg-med-gojibar-och-apple",
    title: "Kvarg med gojibär och äpple",
    category: "mellanmal",
    ingredients: [
      "150 g lättkvarg 0,1–0,3 %",
      "10 g gojibär",
      "½–1 litet äpple",
    ],
    instructions: "Skär äpplet i bitar. Blanda med kvarg och gojibär.",
    nutrition: { kcal: 180, protein: 18, carbs: 25, fat: 1 },
  },
  {
    id: "apple-med-proteinshake",
    title: "Äpple med proteinshake",
    category: "mellanmal",
    ingredients: [
      "1 äpple (ca 130 g)",
      "1 portion proteinpulver enligt förpackningen (ca 20–25 g protein)",
      "Vatten och is",
    ],
    instructions:
      "Skaka proteinpulvret med kallt vatten. Ät äpplet vid sidan av eller skär ner det i en skål.",
    nutrition: {
      kcal: [180, 220],
      protein: [21, 26],
      carbs: [20, 25],
      fat: [1, 3],
    },
  },
  {
    id: "keso-med-ananas-och-lime",
    title: "Keso med ananas och lime",
    category: "mellanmal",
    ingredients: [
      "150 g cottage cheese/keso, gärna mager",
      "100 g färsk eller fryst ananas",
      "Lite rivet limeskal eller limejuice",
    ],
    instructions:
      "Skär ananas i mindre bitar. Blanda med keso och smaksätt med lime.",
    nutrition: {
      kcal: [175, 205],
      protein: [19, 22],
      carbs: [18, 22],
      fat: [3, 5],
    },
  },
  {
    id: "banan-med-vaniljyoghurt-och-protein",
    title: "Banan med vaniljyoghurt och protein",
    category: "mellanmal",
    ingredients: [
      "½–1 liten banan (ca 80 g)",
      "100 g grekisk yoghurt 0–2 %",
      "10 g proteinpulver med vaniljsmak",
      "Kanel",
    ],
    instructions:
      "Rör ut proteinpulvret i yoghurten. Skiva bananen och lägg ovanpå. Pudra med kanel.",
    nutrition: {
      kcal: [175, 210],
      protein: [17, 20],
      carbs: [22, 29],
      fat: [1, 3],
    },
  },

  // Middag
  {
    id: "notfarsbiffar-med-sotpotatis-och-kalsallad",
    title: "Nötfärsbiffar med sötpotatis och kålsallad",
    category: "lunch-middag",
    ingredients: [
      "110 g nötfärs 5 % (rå vikt)",
      "200 g sötpotatis",
      "250 g vitkål, gurka och tomat",
      "Paprikapulver, vitlök, salt och peppar",
    ],
    instructions:
      "Forma färsen till biffar och krydda. Tillaga i panna eller ugn. Rosta eller koka sötpotatisen och servera med sallad.",
    nutrition: { kcal: 350, protein: 27, carbs: 43, fat: 8 },
  },
  {
    id: "lax-med-quinoa-och-broccoli",
    title: "Lax med quinoa och broccoli",
    category: "lunch-middag",
    ingredients: [
      "100 g lax (rå vikt)",
      "30 g quinoa (torr vikt)",
      "250 g broccoli, sparris och rödlök",
      "Citron, dill och svartpeppar",
    ],
    instructions:
      "Koka quinoan. Ugnsbaka laxen med citron och dill. Ånga grönsakerna och servera.",
    nutrition: { kcal: 375, protein: 28, carbs: 32, fat: 15 },
  },
  {
    id: "lovbiff-med-ris-och-wokgronsaker",
    title: "Lövbiff med ris och wokgrönsaker",
    category: "lunch-middag",
    ingredients: [
      "110 g lövbiff (rå vikt)",
      "30 g fullkornsris (torr vikt)",
      "250 g broccoli, paprika, morot och lök",
      "Ingefära, vitlök och soja med låg salthalt",
    ],
    instructions:
      "Koka riset. Strimla och stek lövbiffen snabbt. Woka grönsakerna och krydda med ingefära, vitlök och lite soja.",
    nutrition: { kcal: 330, protein: 30, carbs: 35, fat: 8 },
  },
  {
    id: "viltskav-med-potatis-och-svamp",
    title: "Viltskav med potatis och svamp",
    category: "lunch-middag",
    ingredients: [
      "110 g viltskav eller renskav (rå vikt)",
      "200 g potatis",
      "200–250 g champinjoner, lök och broccoli",
      "Timjan, peppar och lite vatten eller buljong",
    ],
    instructions:
      "Stek skavet och svampen i non-stick-panna. Tillsätt lök, timjan och en skvätt vatten eller buljong. Servera med kokt potatis och broccoli.",
    nutrition: { kcal: 355, protein: 29, carbs: 39, fat: 9 },
  },
  {
    id: "lax-med-potatis-och-kall-dill-och-citronsas",
    title: "Lax med potatis och kall dill- och citronsås",
    category: "lunch-middag",
    ingredients: [
      "100 g lax (rå vikt)",
      "180 g potatis",
      "150 g broccoli eller haricots verts",
      "60 g grekisk yoghurt 0–2 %",
      "Citron, dill, salt och peppar",
    ],
    instructions:
      "Koka potatisen och ånga grönsakerna. Ugnsbaka laxen med citron och peppar. Rör ihop yoghurt, dill och citron till en kall sås.",
    nutrition: {
      kcal: [390, 430],
      protein: [27, 30],
      carbs: [38, 43],
      fat: [13, 16],
    },
  },
  {
    id: "tacobowl-med-avokadoyoghurt",
    title: "Tacobowl med avokadoyoghurt",
    category: "lunch-middag",
    ingredients: [
      "100 g nötfärs 5 % eller mager kalkonfärs",
      "150 g sötpotatis",
      "150 g sallad, tomat och paprika",
      "25 g avokado",
      "50 g grekisk yoghurt 0–2 %",
      "Tacokrydda med låg salthalt",
    ],
    instructions:
      "Tillaga tärnad sötpotatis i ugn eller airfryer. Stek färsen med tacokrydda och lite vatten. Mosa avokado med yoghurt och lime. Servera som bowl med grönsaker.",
    nutrition: {
      kcal: [370, 420],
      protein: [26, 30],
      carbs: [38, 44],
      fat: [9, 13],
    },
  },
  {
    id: "asiatisk-kycklingwok-med-soja-och-ostronsas",
    title: "Asiatisk kycklingwok med soja och ostronsås",
    category: "lunch-middag",
    ingredients: [
      "110 g kycklingfilé (rå vikt)",
      "30 g fullkornsris (torr vikt)",
      "200 g wokgrönsaker",
      "1 msk soja",
      "2 tsk ostronsås",
      "Vitlök, ingefära och chili",
    ],
    instructions:
      "Koka riset. Skär kycklingen i bitar och stek i non-stick-panna. Tillsätt grönsaker, vitlök och ingefära. Rör ner soja, ostronsås och en skvätt vatten. Låt allt bli varmt och servera med ris.",
    nutrition: {
      kcal: [320, 360],
      protein: [30, 34],
      carbs: [34, 39],
      fat: [4, 6],
    },
  },
  {
    id: "kalkonkottbullar-i-tomatsas-med-quinoa",
    title: "Kalkonköttbullar i tomatsås med quinoa",
    category: "lunch-middag",
    ingredients: [
      "110 g mager kalkonfärs (rå vikt)",
      "30 g quinoa (torr vikt)",
      "100 g krossade tomater",
      "150 g zucchini och champinjoner",
      "5 g riven parmesan (valfritt)",
      "Oregano, vitlök och svartpeppar",
    ],
    instructions:
      "Krydda färsen och forma små köttbullar. Bryn i non-stick-panna och låt sjuda färdigt i tomatsås med vitlök och oregano. Koka quinoan och servera med zucchini och svamp.",
    nutrition: {
      kcal: [330, 370],
      protein: [28, 32],
      carbs: [33, 38],
      fat: [6, 9],
    },
  },

  // Kvällsmat
  {
    id: "aggomelett-med-svamp-och-kiwi",
    title: "Äggomelett med svamp och kiwi",
    category: "kvallsmat",
    ingredients: [
      "2 hela ägg",
      "1 dl äggvita",
      "100 g champinjoner och lök",
      "1 kiwi",
    ],
    instructions:
      "Stek svamp och lök mjuka. Häll över ägg och äggvita och tillaga till en omelett. Ät kiwin vid sidan av.",
    nutrition: { kcal: 260, protein: 26, carbs: 14, fat: 11 },
  },
  {
    id: "kasein-med-notter-och-apelsin",
    title: "Kasein med nötter och apelsin",
    category: "kvallsmat",
    ingredients: [
      "35 g kasein enligt förpackningen",
      "25 g cashewnötter eller valnötter",
      "1 liten apelsin",
      "Vatten enligt önskad konsistens",
    ],
    instructions:
      "Blanda kaseinet med vatten till en kräm eller shake. Ät nötterna och apelsinen vid sidan av.",
    nutrition: { kcal: 320, protein: 31, carbs: 20, fat: 13 },
  },
  {
    id: "kokta-agg-med-vitkal-och-frukt",
    title: "Kokta ägg med vitkål och frukt",
    category: "kvallsmat",
    ingredients: [
      "3 hela ägg",
      "100 g strimlad vitkål",
      "1 kiwi eller liten apelsin",
    ],
    instructions:
      "Koka äggen efter önskad konsistens. Servera med strimlad vitkål och frukt.",
    nutrition: { kcal: 285, protein: 20, carbs: 18, fat: 15 },
  },
  {
    id: "wheyshake-med-notter-och-kiwi",
    title: "Wheyshake med nötter och kiwi",
    category: "kvallsmat",
    ingredients: [
      "1 portion whey enligt förpackningen",
      "25 g pekannötter eller hasselnötter",
      "1 kiwi",
    ],
    instructions:
      "Skaka proteinpulvret med kallt vatten. Ät nötterna och kiwin vid sidan av.",
    nutrition: { kcal: 325, protein: 27, carbs: 14, fat: 18 },
  },
  {
    id: "kaseinkram-med-kiwi-och-notter",
    title: "Kaseinkräm med kiwi och nötter",
    category: "kvallsmat",
    ingredients: [
      "30 g kasein enligt förpackningen",
      "20 g cashewnötter eller valnötter",
      "1 kiwi",
      "Vatten efter önskad konsistens",
    ],
    instructions:
      "Rör kaseinet med lite vatten till en tjock kräm eller skaka till en shake. Ät med kiwi och nötter.",
    nutrition: {
      kcal: [260, 300],
      protein: [24, 28],
      carbs: [17, 22],
      fat: [10, 14],
    },
  },
  {
    id: "kvallsomelett-med-svamp-och-spenat",
    title: "Kvällsomelett med svamp och spenat",
    category: "kvallsmat",
    ingredients: [
      "2 hela ägg",
      "100 g äggvita",
      "100 g champinjoner och spenat",
      "Lite lök, salt och peppar",
    ],
    instructions:
      "Stek svamp och lök mjuka i non-stick-panna. Häll över vispade ägg och äggvita. Lägg i spenaten och tillaga tills omeletten stelnat.",
    nutrition: {
      kcal: [190, 220],
      protein: [25, 28],
      carbs: [4, 7],
      fat: [10, 12],
    },
  },
  {
    id: "grekisk-yoghurt-med-bar-och-kanel",
    title: "Grekisk yoghurt med bär och kanel",
    category: "kvallsmat",
    ingredients: [
      "200 g grekisk yoghurt 0–2 %",
      "75 g hallon eller blåbär",
      "Kanel eller vaniljpulver",
    ],
    instructions:
      "Lägg upp yoghurten och toppa med bär. Smaksätt med kanel eller vanilj.",
    nutrition: {
      kcal: [160, 200],
      protein: [18, 22],
      carbs: [13, 18],
      fat: [3, 6],
    },
  },
  {
    id: "keso-pa-knackebrod-med-tomat",
    title: "Keso på knäckebröd med tomat",
    category: "kvallsmat",
    ingredients: [
      "150 g mager cottage cheese/keso",
      "1 knäckebröd",
      "100 g tomat eller gurka",
      "Örtsalt, svartpeppar och gräslök",
    ],
    instructions:
      "Blanda keson med gräslök och peppar. Servera på knäckebrödet eller som en skål med grönsaker vid sidan av.",
    nutrition: {
      kcal: [170, 195],
      protein: [19, 22],
      carbs: [16, 20],
      fat: [2, 4],
    },
  },
];
