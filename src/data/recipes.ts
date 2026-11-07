// Mockdata tills databas och admin finns på plats.

export const recipeCategories = [
  { id: "frukost", label: "Frukost" },
  { id: "mellanmal", label: "Mellanmål" },
  { id: "lunch-middag", label: "Lunch/Middag" },
  { id: "kvallsmat", label: "Kvällsmat" },
] as const;

export type RecipeCategory = (typeof recipeCategories)[number]["id"];

export type Recipe = {
  id: string;
  title: string;
  category: RecipeCategory;
  ingredients: string[];
  instructions: string;
  nutrition: {
    protein: number;
    carbs: number;
    fat: number;
  };
};

// Atwater: 4 kcal per gram protein och kolhydrater, 9 kcal per gram fett.
export function recipeKcal({ protein, carbs, fat }: Recipe["nutrition"]) {
  return Math.round((protein * 4 + carbs * 4 + fat * 9) / 5) * 5;
}

export const recipeReadingGuide = [
  "Näringsvärdena är uppskattningar per portion och anges som kalorier, protein, kolhydrater och fett. Kalorierna är beräknade från protein, kolhydrater och fett och avrundade till närmaste 5 kcal. Värdena kan variera beroende på märke, styckningsdetalj och exakt råvara.",
  "Kött, fisk och fågel anges i rå vikt. Ris och quinoa anges i torr vikt. Potatis anges i rå vikt. Grönsaker anges som ungefärlig vikt.",
  "Tillaga utan extra olja, eller använd en liten mängd och räkna då med att fett och kalorier ökar. Välj osötad sylt och naturell lättkvarg omkring 0,1–0,3 % fett.",
  "Recepten är tänkta som variationer inom din angivna måltidsstruktur – inte som en ny individuell kostordination. Om du har exakta makromål från din rådgivare bör de styra framför uppskattningarna här.",
];

export const recipeNutritionNote =
  "Näringsvärdena är avrundade riktvärden, inte laboratorievärden. För att få mer exakta siffror behöver du använda näringsdeklarationen för just dina produkter och väga råvarorna på samma sätt varje gång. Särskilt proteinpulver, müsli, nötter, färs och viltskav kan skilja sig mycket mellan märken och sorter.";

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
    nutrition: { protein: 22, carbs: 39, fat: 4 },
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
    nutrition: { protein: 29, carbs: 7, fat: 12 },
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
    nutrition: { protein: 28, carbs: 25, fat: 9 },
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
    nutrition: { protein: 27, carbs: 29, fat: 4 },
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
    nutrition: { protein: 18, carbs: 27, fat: 1 },
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
    nutrition: { protein: 18, carbs: 20, fat: 1 },
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
    nutrition: { protein: 18, carbs: 23, fat: 1 },
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
    nutrition: { protein: 15, carbs: 25, fat: 1 },
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
    nutrition: { protein: 32, carbs: 32, fat: 5 },
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
    nutrition: { protein: 29, carbs: 42, fat: 2 },
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
    nutrition: { protein: 31, carbs: 35, fat: 4 },
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
    nutrition: { protein: 29, carbs: 34, fat: 2 },
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
    nutrition: { protein: 26, carbs: 24, fat: 2 },
  },
  {
    id: "kvarg-med-notter-och-kanel",
    title: "Kvarg med nötter och kanel",
    category: "mellanmal",
    ingredients: [
      "250 g lättkvarg 0,1–0,3 %",
      "25 g valnötter eller cashewnötter",
      "Kanel",
    ],
    instructions:
      "Lägg kvargen i en skål och toppa med hackade nötter och kanel.",
    nutrition: { protein: 31, carbs: 12, fat: 17 },
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
    nutrition: { protein: 25, carbs: 18, fat: 2 },
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
    nutrition: { protein: 18, carbs: 25, fat: 1 },
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
    nutrition: { protein: 27, carbs: 43, fat: 8 },
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
    nutrition: { protein: 28, carbs: 32, fat: 15 },
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
    nutrition: { protein: 30, carbs: 35, fat: 8 },
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
    nutrition: { protein: 29, carbs: 39, fat: 9 },
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
    nutrition: { protein: 26, carbs: 14, fat: 11 },
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
    nutrition: { protein: 31, carbs: 20, fat: 13 },
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
    nutrition: { protein: 20, carbs: 18, fat: 15 },
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
    nutrition: { protein: 27, carbs: 14, fat: 18 },
  },
];
