// Mockdata tills databas och admin finns på plats.

export const trainingForms = [
  {
    id: "styrka-puls",
    label: "Styrka & puls",
    description:
      "Vill kombinera styrketräning, parövningar och ett tydligt pulshöjande inslag.",
  },
  {
    id: "muskler-former",
    label: "Muskler & former",
    description:
      "Vill prioritera muskeluppbyggnad, progression och extra träning för rumpa/ben.",
  },
  {
    id: "muskler-kondition",
    label: "Muskler & kondition",
    description:
      "Vill bygga/behålla muskler och samtidigt få in mer planerad kondition.",
  },
] as const;

export const trainingDayOptions = [3, 4, 5] as const;

export type TrainingForm = (typeof trainingForms)[number]["id"];
export type TrainingDaysPerWeek = (typeof trainingDayOptions)[number];

export type Exercise = {
  name: string;
  sets: string;
  note: string;
};

export type TrainingDay = {
  title: string;
  exercises: Exercise[];
  treadmill: string;
};

export type TrainingProgram = {
  id: string;
  form: TrainingForm;
  daysPerWeek: TrainingDaysPerWeek;
  focus: string;
  days: TrainingDay[];
};

export const trainingWeekRhythms: Record<TrainingDaysPerWeek, string> = {
  3: "måndag – onsdag – fredag. Vila eller lätt promenad övriga dagar.",
  4: "måndag – tisdag – torsdag – lördag. Flytta dagarna vid behov så att tunga benpass inte hamnar direkt efter varandra.",
  5: "måndag – tisdag – onsdag – fredag – lördag. Håll konditions-/lättdagen lugn och lägg vilodagar när kroppen behöver dem.",
};

export const trainingIntroGuide = {
  title: "Så använder du schemat",
  paragraphs: [
    "Välj den målsättning som passar dig bäst och följ upplägget för det antal dagar du realistiskt kan träna. Du behöver inte göra alla nio program. Varje program är ett eget veckoschema med fokus på hela kroppen och extra prioritet på rumpa och ben.",
    "Rumpa/ben tränas ungefär 2–3 gånger i veckan i samtliga upplägg. Överkroppen får minst ett tydligt pass i veckan och ofta även indirekt träning i helkroppspassen.",
    "Standardupplägg: sikta oftast på 3 × 12 repetitioner. För tyngre basövningar fungerar 3 × 8–12 bra. När du klarar övre delen av repetitionsspannet med god teknik kan du höja vikten lite.",
    "Välj en vikt där de sista 2–3 repetitionerna känns utmanande men där du fortfarande kan hålla god teknik. Avsluta normalt setet med cirka 1–3 repetitioner kvar i reserv.",
    "Värm upp 5–8 minuter på gåband eller cykel och gör 1–2 lättare uppvärmningsset före den första tyngre övningen för en muskelgrupp.",
    "Vila cirka 60–90 sekunder mellan vanliga set. Vid tunga knäböj, benpress och höftlyft kan du vila 90–150 sekunder. I cirkel-/supersetuppläggen: växla övningarna med kort övergång och vila sedan 60–90 sekunder efter paret.",
  ],
};

export const trainingGuides = [
  {
    title: "Viktigt om fettförbränning och resultat",
    paragraphs: [
      "Styrketräning hjälper dig att behålla och bygga muskler medan du arbetar mot en lägre fettmassa. Fettminskning sker över hela kroppen och påverkas framför allt av energiintag, vardagsrörelse, sömn och kontinuitet – det går inte att punktförbränna fett från exempelvis mage eller lår. Gåbandet är ett komplement, inte ett måste.",
      "Det finns inget särskilt träningsupplägg som bara gäller kvinnor. Övningarna här prioriterar rumpa och ben utifrån dina önskemål, men principerna för styrka och muskeluppbyggnad är desamma.",
    ],
  },
  {
    title: "Gåband – så kan du lägga upp det",
    paragraphs: [
      "Lugn/medelintensiv gång: 10–20 minuter efter styrkan. Välj ett tempo där du blir varm och andfådd men fortfarande kan prata i korta meningar.",
      "Lutningsgång: 10–15 minuter med lätt till måttlig lutning. Börja lågt och öka bara om gångsteget känns naturligt och du inte behöver hänga i räckena.",
      "Intervaller: 5 minuter lugnt, därefter 6–8 rundor med 1 minut rask gång och 1–2 minuter lugnare gång, avsluta 3–5 minuter lugnt.",
      "Öka hellre tiden gradvis än att börja med hög lutning eller mycket hög fart. Anpassa efter kondition, knän, höfter och dagsform.",
    ],
  },
  {
    title: "Progression – så utvecklas du",
    paragraphs: [
      "Vecka 1–2: lär in övningarna, hitta rätt maskininställningar och välj vikter som känns hanterbara. Du behöver inte träna till failure.",
      "När du klarar alla set med 12 bra repetitioner och fortfarande har lite kvar i tanken: höj vikten minsta möjliga steg nästa gång. Om tekniken försämras, sänk vikten.",
      "Skriv gärna upp vikt och repetitioner. Små förbättringar över tid är målet – inte att slå rekord varje pass.",
      "Efter 6–8 veckor kan du byta ut någon variant, exempelvis goblet squat mot benpress eller step-up mot utfall, men behåll grundrörelserna.",
    ],
  },
  {
    title: "Återhämtning och anpassning",
    paragraphs: [
      "Ha minst en vilodag eller en lättare dag när du känner dig sliten. Muskeluppbyggnad sker också under återhämtningen.",
      "Vid skarp smärta, yrsel eller obehag som inte känns normalt: avbryt övningen. Anpassa rörelseutslag och belastning efter din kropp.",
      "Om du är nybörjare, återkommer efter uppehåll, är gravid/nyförlöst eller har skada/sjukdom: börja med färre set och stäm av lämplig nivå med vårdpersonal eller fysioterapeut vid behov.",
      "Du behöver inte genomföra alla pass till varje pris. Ett hållbart schema du kan följa över tid ger bättre förutsättningar än ett alltför tufft schema.",
    ],
  },
];

export const trainingNote =
  "Träningsunderlag – anpassa vikter och träningsmängd efter dagsform";

function ex(name: string, sets: string, note: string): Exercise {
  return { name, sets, note };
}

export const trainingPrograms: TrainingProgram[] = [
  // 1. Styrka & puls – 3 dagar/vecka
  {
    id: "styrka-puls-3",
    form: "styrka-puls",
    daysPerWeek: 3,
    focus:
      "Helkroppsstyrka med parövningar för lite högre puls. Träna exempelvis måndag, onsdag och fredag.",
    days: [
      {
        title: "Dag 1 – Helkropp A",
        exercises: [
          ex("A1 Benpress", "3 × 12", "Växla med A2."),
          ex("A2 Bröstpress", "3 × 12", "Gör övningarna direkt efter varandra."),
          ex("B1 Hip thrust", "3 × 12", "Pausa kort i toppläget."),
          ex("B2 Latsdrag", "3 × 12", "Växla med B1."),
          ex("C1 Gående utfall", "2 × 10/ben", "Kontrollerade steg."),
          ex("C2 Bicepscurl", "2 × 12", "Växla med C1."),
          ex("Höftabduktion", "2 × 15", "Avsluta med kontrollerade reps."),
          ex("Planka", "2 × 30–40 sek", "Spänn magen och håll neutral rygg."),
        ],
        treadmill: "10–15 min rask gång efter passet",
      },
      {
        title: "Dag 2 – Helkropp B",
        exercises: [
          ex("A1 Knäböj eller goblet squat", "3 × 10–12", "Växla med A2."),
          ex("A2 Sittande rodd", "3 × 12", "Håll bröstet upprätt."),
          ex("B1 Bencurl", "3 × 12", "Växla med B2."),
          ex("B2 Tricepspress", "3 × 12", "Armbågarna nära kroppen."),
          ex("C1 Benspark", "2 × 12", "Kontrollerad sänkning."),
          ex("C2 Bröstflyes i maskin", "2 × 12", "Lätt böjda armbågar."),
          ex("Dead bug", "2 × 10/sida", "Håll ländryggen stabil."),
        ],
        treadmill: "Intervaller 12–15 min: 1 min raskt + 90 sek lugnt × 5–6",
      },
      {
        title: "Dag 3 – Helkropp C",
        exercises: [
          ex("A1 Rumänska marklyft med hantlar", "3 × 10–12", "Höften bak, rak rygg."),
          ex("A2 Bröstpress", "3 × 12", "Växla med A1."),
          ex("B1 Hip thrust", "3 × 12", "Växla med B2."),
          ex("B2 Latsdrag eller rodd", "3 × 12", "Välj en dragövning."),
          ex("C1 Step-up på låg bänk", "2 × 10/ben", "Tryck genom hela foten."),
          ex("C2 Axelpress i maskin", "2 × 12", "Lätt till måttlig vikt."),
          ex("Höftabduktion", "2 × 15", "Jämnt tempo."),
          ex("Sidoplanka", "2 × 20–30 sek/sida", "Stabil höft."),
        ],
        treadmill: "10–15 min gång i jämnt tempo",
      },
    ],
  },

  // 2. Styrka & puls – 4 dagar/vecka
  {
    id: "styrka-puls-4",
    form: "styrka-puls",
    daysPerWeek: 4,
    focus:
      "Två tydligare underkroppspass, ett överkroppspass och ett helkroppspass. Lägg gärna vilodag mellan benpassen.",
    days: [
      {
        title: "Dag 1 – Underkropp + press",
        exercises: [
          ex("A1 Benpress", "3 × 12", "Växla med A2."),
          ex("A2 Bröstpress", "3 × 12", "Superset."),
          ex("Hip thrust", "3 × 12", "Kontrollerad rörelse."),
          ex("Benspark", "3 × 12", "Fokusera på lårens framsida."),
          ex("Höftabduktion", "2 × 15", "Utan att gunga."),
          ex("Planka", "2 × 30–40 sek", "Bålstabilitet."),
        ],
        treadmill: "10–15 min lutningsgång",
      },
      {
        title: "Dag 2 – Överkropp",
        exercises: [
          ex("Latsdrag", "3 × 12", "Dra armbågarna nedåt."),
          ex("Sittande rodd", "3 × 12", "Samla skulderbladen."),
          ex("Bröstflyes i maskin", "3 × 12", "Lätt kontrollerad stretch."),
          ex("Bicepscurl", "3 × 12", "Undvik att svinga."),
          ex("Tricepspress", "3 × 12", "Full kontroll."),
          ex("Axelpress", "2 × 12", "Lätt vikt."),
          ex("Pallof press", "2 × 12/sida", "Håll bålen stilla."),
        ],
        treadmill: "12–15 min rask gång",
      },
      {
        title: "Dag 3 – Underkropp + rygg",
        exercises: [
          ex("Knäböj eller goblet squat", "3 × 10–12", "Gå så djupt du kan med bra teknik."),
          ex("Bencurl", "3 × 12", "Långsam återgång."),
          ex("Rumänska marklyft", "3 × 10–12", "Höftfällning."),
          ex("Latsdrag", "3 × 12", "Jämnt tempo."),
          ex("Gående utfall", "2 × 10/ben", "Kortare steg om balansen behövs."),
          ex("Höftabduktion", "2 × 15", "Rumpans utsida."),
        ],
        treadmill: "Intervaller 10–12 min: 1 min raskt + 90 sek lugnt × 5",
      },
      {
        title: "Dag 4 – Helkropp i cirkel",
        exercises: [
          ex("A1 Step-up", "2 × 10/ben", "Växla med A2."),
          ex("A2 Bröstpress", "2 × 12", "Superset."),
          ex("B1 Hip thrust", "2 × 12", "Växla med B2."),
          ex("B2 Sittande rodd", "2 × 12", "Superset."),
          ex("Benspark", "2 × 12", "Kontrollerat."),
          ex("Bicepscurl + tricepspress", "2 × 12 vardera", "Växla mellan armarna."),
          ex("Dead bug", "2 × 10/sida", "Stabil bål."),
        ],
        treadmill: "10–15 min jämn gång",
      },
    ],
  },

  // 3. Styrka & puls – 5 dagar/vecka
  {
    id: "styrka-puls-5",
    form: "styrka-puls",
    daysPerWeek: 5,
    focus:
      "Tre styrkepass med rumpa/ben, ett överkroppspass och ett separat konditions-/bålpass. Håll dag 5 lätt till måttlig.",
    days: [
      {
        title: "Dag 1 – Underkropp + bröst",
        exercises: [
          ex("Benpress", "3 × 12", "Jämnt tempo."),
          ex("Hip thrust", "3 × 12", "Pausa högst upp."),
          ex("Benspark", "2 × 12", "Kontrollerat."),
          ex("Bröstpress", "3 × 12", "Stabil skulderposition."),
          ex("Höftabduktion", "2 × 15", "Rumpans utsida."),
        ],
        treadmill: "10–15 min rask gång",
      },
      {
        title: "Dag 2 – Överkropp",
        exercises: [
          ex("Latsdrag", "3 × 12", "Rygg."),
          ex("Sittande rodd", "3 × 12", "Rygg."),
          ex("Bröstflyes i maskin", "3 × 12", "Bröst."),
          ex("Bicepscurl", "3 × 12", "Armar."),
          ex("Tricepspress", "3 × 12", "Armar."),
          ex("Axelpress", "2 × 12", "Axlar."),
          ex("Pallof press", "2 × 12/sida", "Bål."),
        ],
        treadmill: "15 min gång",
      },
      {
        title: "Dag 3 – Kondition + bål",
        exercises: [
          ex("Dead bug", "3 × 10/sida", "Kontrollerat."),
          ex("Sidoplanka", "2 × 20–30 sek/sida", "Håll höften uppe."),
          ex("Ryggresning utan extra vikt", "2 × 12", "Liten, kontrollerad rörelse."),
          ex("Lätt höftabduktion", "2 × 15", "Valfritt, inte till utmattning."),
        ],
        treadmill: "25–30 min gåband: växla 2 min raskt och 2 min lugnt",
      },
      {
        title: "Dag 4 – Underkropp + rygg",
        exercises: [
          ex("Knäböj/goblet squat", "3 × 10–12", "Teknik före vikt."),
          ex("Bencurl", "3 × 12", "Baksida lår."),
          ex("Rumänska marklyft", "3 × 10", "Höftfällning."),
          ex("Sittande rodd", "3 × 12", "Rygg."),
          ex("Gående utfall", "2 × 10/ben", "Balans och kontroll."),
          ex("Höftabduktion", "2 × 15", "Rumpa."),
        ],
        treadmill: "10–12 min intervaller efter styrkan",
      },
      {
        title: "Dag 5 – Helkroppscirkel",
        exercises: [
          ex("A1 Step-up", "2 × 10/ben", "Växla med A2."),
          ex("A2 Bröstpress", "2 × 12", "Lätt till måttlig vikt."),
          ex("B1 Hip thrust", "2 × 12", "Växla med B2."),
          ex("B2 Latsdrag", "2 × 12", "Jämnt tempo."),
          ex("Benspark", "2 × 12", "Lättare än dag 4."),
          ex("Bicepscurl", "2 × 12", "Kontrollerat."),
          ex("Tricepspress", "2 × 12", "Kontrollerat."),
        ],
        treadmill: "10–15 min lugn gång om du känner dig pigg",
      },
    ],
  },

  // 4. Muskler & former – 3 dagar/vecka
  {
    id: "muskler-former-3",
    form: "muskler-former",
    daysPerWeek: 3,
    focus:
      "Bygga muskler med lite mer vila mellan seten och progressiv belastning. Rumpa/ben får tre pass med varierad belastning.",
    days: [
      {
        title: "Dag 1 – Helkropp – rumpa/ben i fokus",
        exercises: [
          ex("Hip thrust", "3 × 8–12", "Viktig huvudövning; vila 90–120 sek."),
          ex("Benpress", "3 × 10–12", "Full kontroll."),
          ex("Latsdrag", "3 × 10–12", "Rygg."),
          ex("Bröstpress", "3 × 10–12", "Bröst."),
          ex("Höftabduktion", "3 × 12–15", "Rumpans utsida."),
          ex("Bicepscurl", "2 × 12", "Armar."),
          ex("Planka", "2 × 30–45 sek", "Bål."),
        ],
        treadmill: "10 min lugn till rask gång",
      },
      {
        title: "Dag 2 – Överkropp + baksida ben",
        exercises: [
          ex("Sittande rodd", "3 × 10–12", "Rygg."),
          ex("Bröstflyes i maskin", "3 × 12", "Bröst."),
          ex("Axelpress", "3 × 10–12", "Axlar."),
          ex("Tricepspress", "3 × 12", "Armar."),
          ex("Bicepscurl", "3 × 12", "Armar."),
          ex("Bencurl", "3 × 10–12", "Baksida lår."),
          ex("Rumänska marklyft", "2 × 10–12", "Lätt till måttlig vikt, teknik först."),
        ],
        treadmill: "10–15 min gång",
      },
      {
        title: "Dag 3 – Helkropp – rumpa/ben i fokus",
        exercises: [
          ex("Knäböj eller goblet squat", "3 × 8–12", "Lår och säte."),
          ex("Rumänska marklyft", "3 × 10–12", "Baksida lår/säte."),
          ex("Gående utfall", "2 × 10/ben", "Kontrollerade steg."),
          ex("Höftabduktion", "3 × 12–15", "Rumpans utsida."),
          ex("Latsdrag eller rodd", "3 × 10–12", "Välj en ryggövning."),
          ex("Bröstpress", "2 × 10–12", "Överkropp."),
          ex("Vadpress", "2 × 12–15", "Valfritt tillägg."),
        ],
        treadmill: "10–15 min lutningsgång",
      },
    ],
  },

  // 5. Muskler & former – 4 dagar/vecka
  {
    id: "muskler-former-4",
    form: "muskler-former",
    daysPerWeek: 4,
    focus:
      "Två tyngre underkroppspass, ett överkroppspass och ett extra rumpa/helkroppspass. Ge musklerna återhämtning mellan de tyngre benpassen.",
    days: [
      {
        title: "Dag 1 – Underkropp A – säte och framsida lår",
        exercises: [
          ex("Hip thrust", "4 × 8–12", "Huvudövning; vila 90–150 sek."),
          ex("Benpress", "3 × 10–12", "Jämn rörelse."),
          ex("Benspark", "3 × 12", "Framsida lår."),
          ex("Höftabduktion", "3 × 15", "Rumpans utsida."),
          ex("Vadpress", "2 × 12–15", "Valfritt."),
        ],
        treadmill: "10 min lugn gång",
      },
      {
        title: "Dag 2 – Överkropp",
        exercises: [
          ex("Latsdrag", "3 × 10–12", "Rygg."),
          ex("Sittande rodd", "3 × 10–12", "Rygg."),
          ex("Bröstpress", "3 × 10–12", "Bröst."),
          ex("Bröstflyes i maskin", "2 × 12", "Bröst."),
          ex("Axelpress", "2 × 10–12", "Axlar."),
          ex("Bicepscurl", "3 × 12", "Armar."),
          ex("Tricepspress", "3 × 12", "Armar."),
        ],
        treadmill: "10–15 min gång",
      },
      {
        title: "Dag 3 – Underkropp B – baksida lår och säte",
        exercises: [
          ex("Rumänska marklyft", "3 × 8–12", "Höftfällning."),
          ex("Knäböj/goblet squat", "3 × 10–12", "Teknik före djup."),
          ex("Bencurl", "3 × 10–12", "Baksida lår."),
          ex("Gående utfall", "2 × 10/ben", "Stabilt steg."),
          ex("Höftabduktion", "2 × 15", "Avsluta utan att gunga."),
        ],
        treadmill: "10 min lugn gång",
      },
      {
        title: "Dag 4 – Rumpa + helkropp lättare",
        exercises: [
          ex("Hip thrust (lättare)", "3 × 12", "Lättare än dag 1."),
          ex("Step-up", "2 × 10/ben", "Låg höjd om det behövs."),
          ex("Höftabduktion", "3 × 15", "Kontrollerat."),
          ex("Sittande rodd", "2 × 12", "Överkropp."),
          ex("Bröstpress", "2 × 12", "Överkropp."),
          ex("Dead bug", "2 × 10/sida", "Bål."),
        ],
        treadmill: "10–15 min rask gång",
      },
    ],
  },

  // 6. Muskler & former – 5 dagar/vecka
  {
    id: "muskler-former-5",
    form: "muskler-former",
    daysPerWeek: 5,
    focus:
      "Tre ben-/rumpastimuli, ett överkroppspass och ett lättare kompletteringspass. Gör dag 5 återhämtande, inte ett extra maxpass.",
    days: [
      {
        title: "Dag 1 – Underkropp A – tungt säte/lår",
        exercises: [
          ex("Hip thrust", "4 × 8–10", "Öka vikten gradvis."),
          ex("Benpress", "3 × 10", "Stabil teknik."),
          ex("Benspark", "3 × 12", "Framsida lår."),
          ex("Höftabduktion", "3 × 15", "Rumpa."),
          ex("Vadpress", "2 × 12–15", "Valfritt."),
        ],
        treadmill: "10 min lugn gång",
      },
      {
        title: "Dag 2 – Överkropp",
        exercises: [
          ex("Latsdrag", "3 × 10–12", "Rygg."),
          ex("Sittande rodd", "3 × 10–12", "Rygg."),
          ex("Bröstpress", "3 × 10–12", "Bröst."),
          ex("Bröstflyes i maskin", "2 × 12", "Bröst."),
          ex("Axelpress", "2 × 10–12", "Axlar."),
          ex("Bicepscurl", "3 × 12", "Armar."),
          ex("Tricepspress", "3 × 12", "Armar."),
        ],
        treadmill: "10–15 min gång",
      },
      {
        title: "Dag 3 – Lätt kondition + bål/rörlighet",
        exercises: [
          ex("Dead bug", "2 × 10/sida", "Bål."),
          ex("Sidoplanka", "2 × 20 sek/sida", "Bål."),
          ex("Höftabduktion (lätt)", "2 × 15", "Valfritt aktiveringsset."),
          ex("Höft- och fotledsrörlighet", "2 × 30 sek", "Lugnt och utan smärta."),
        ],
        treadmill: "20–30 min bekväm gång på gåband",
      },
      {
        title: "Dag 4 – Underkropp B – baksida lår/säte",
        exercises: [
          ex("Rumänska marklyft", "3 × 8–12", "Höftfällning."),
          ex("Knäböj/goblet squat", "3 × 10–12", "Kontrollerat."),
          ex("Bencurl", "3 × 10–12", "Baksida lår."),
          ex("Gående utfall", "2 × 10/ben", "Stabilitet."),
          ex("Höftabduktion", "2 × 15", "Rumpa."),
        ],
        treadmill: "10 min lugn gång",
      },
      {
        title: "Dag 5 – Rumpa + helkropp lättare",
        exercises: [
          ex("Hip thrust (måttlig)", "3 × 12", "Lämna 2–3 reps i reserv."),
          ex("Step-up", "2 × 10/ben", "Kontrollerat."),
          ex("Höftabduktion", "2 × 15", "Rumpa."),
          ex("Sittande rodd", "2 × 12", "Rygg."),
          ex("Bröstpress", "2 × 12", "Bröst."),
          ex("Tricepspress eller bicepscurl", "2 × 12", "Välj den du vill prioritera."),
        ],
        treadmill: "10–15 min rask gång",
      },
    ],
  },

  // 7. Muskler & kondition – 3 dagar/vecka
  {
    id: "muskler-kondition-3",
    form: "muskler-kondition",
    daysPerWeek: 3,
    focus:
      "Styrka i hela kroppen följt av kort konditionsdel. Håll konditionen tillräckligt utmanande men inte så hård att tekniken i styrkan påverkas.",
    days: [
      {
        title: "Dag 1 – Helkropp + intervaller",
        exercises: [
          ex("Benpress", "3 × 10–12", "Ben."),
          ex("Hip thrust", "3 × 10–12", "Säte."),
          ex("Latsdrag", "3 × 12", "Rygg."),
          ex("Bröstpress", "3 × 12", "Bröst."),
          ex("Höftabduktion", "2 × 15", "Säte."),
          ex("Planka", "2 × 30 sek", "Bål."),
        ],
        treadmill: "Efter styrkan: 12 min, 1 min raskt + 1 min lugnt × 6",
      },
      {
        title: "Dag 2 – Helkropp + jämn kondition",
        exercises: [
          ex("Knäböj/goblet squat", "3 × 10–12", "Ben."),
          ex("Bencurl", "3 × 12", "Baksida lår."),
          ex("Sittande rodd", "3 × 12", "Rygg."),
          ex("Bröstflyes i maskin", "2 × 12", "Bröst."),
          ex("Bicepscurl", "2 × 12", "Armar."),
          ex("Tricepspress", "2 × 12", "Armar."),
          ex("Dead bug", "2 × 10/sida", "Bål."),
        ],
        treadmill: "Efter styrkan: 15–20 min rask gång",
      },
      {
        title: "Dag 3 – Helkropp + korta intervaller",
        exercises: [
          ex("Rumänska marklyft", "3 × 10", "Säte/baksida lår."),
          ex("Gående utfall", "2 × 10/ben", "Ben/säte."),
          ex("Hip thrust", "2 × 12", "Lättare än dag 1."),
          ex("Latsdrag eller rodd", "3 × 12", "Rygg."),
          ex("Axelpress", "2 × 12", "Axlar."),
          ex("Höftabduktion", "2 × 15", "Säte."),
        ],
        treadmill: "Efter styrkan: 10–14 min, 30 sek raskt + 90 sek lugnt × 6–7",
      },
    ],
  },

  // 8. Muskler & kondition – 4 dagar/vecka
  {
    id: "muskler-kondition-4",
    form: "muskler-kondition",
    daysPerWeek: 4,
    focus:
      "Två underkroppspass, ett överkroppspass och ett konditionsbetonat helkroppspass.",
    days: [
      {
        title: "Dag 1 – Underkropp + kort intervall",
        exercises: [
          ex("Hip thrust", "3 × 10–12", "Säte."),
          ex("Benpress", "3 × 10–12", "Ben."),
          ex("Benspark", "2 × 12", "Framsida lår."),
          ex("Höftabduktion", "2 × 15", "Säte."),
          ex("Planka", "2 × 30 sek", "Bål."),
        ],
        treadmill: "Efter styrkan: 10 min, 1 min raskt + 1 min lugnt × 5",
      },
      {
        title: "Dag 2 – Överkropp + kondition",
        exercises: [
          ex("Latsdrag", "3 × 12", "Rygg."),
          ex("Sittande rodd", "3 × 12", "Rygg."),
          ex("Bröstpress", "3 × 12", "Bröst."),
          ex("Bröstflyes i maskin", "2 × 12", "Bröst."),
          ex("Bicepscurl", "3 × 12", "Armar."),
          ex("Tricepspress", "3 × 12", "Armar."),
          ex("Axelpress", "2 × 12", "Axlar."),
        ],
        treadmill: "Efter styrkan: 15–20 min rask gång",
      },
      {
        title: "Dag 3 – Underkropp + jämn kondition",
        exercises: [
          ex("Knäböj/goblet squat", "3 × 10–12", "Ben/säte."),
          ex("Rumänska marklyft", "3 × 10–12", "Baksida lår/säte."),
          ex("Bencurl", "3 × 12", "Baksida lår."),
          ex("Gående utfall", "2 × 10/ben", "Ben/säte."),
          ex("Höftabduktion", "2 × 15", "Säte."),
        ],
        treadmill: "Efter styrkan: 12–15 min gång med lätt lutning",
      },
      {
        title: "Dag 4 – Helkroppskondition – kontrollerad cirkel",
        exercises: [
          ex("A1 Step-up", "2 × 10/ben", "Växla med A2."),
          ex("A2 Sittande rodd", "2 × 12", "Lätt till måttlig vikt."),
          ex("B1 Lätt hip thrust", "2 × 12", "Växla med B2."),
          ex("B2 Bröstpress", "2 × 12", "Lätt till måttlig vikt."),
          ex("Höftabduktion", "2 × 15", "Kontrollerat."),
          ex("Dead bug", "2 × 10/sida", "Bål."),
        ],
        treadmill: "15–20 min: 2 min raskt + 2 min lugnt",
      },
    ],
  },

  // 9. Muskler & kondition – 5 dagar/vecka
  {
    id: "muskler-kondition-5",
    form: "muskler-kondition",
    daysPerWeek: 5,
    focus:
      "Två tydliga benpass, ett rumpa/helkroppspass, ett överkroppspass och ett separat konditionspass. Det ger både styrketräning och konditionsvolym med planerad återhämtning.",
    days: [
      {
        title: "Dag 1 – Underkropp A – styrka",
        exercises: [
          ex("Hip thrust", "4 × 8–10", "Säte; vila ordentligt."),
          ex("Benpress", "3 × 10", "Ben."),
          ex("Benspark", "2 × 12", "Framsida lår."),
          ex("Höftabduktion", "2 × 15", "Säte."),
          ex("Planka", "2 × 30 sek", "Bål."),
        ],
        treadmill: "10 min lugn gång",
      },
      {
        title: "Dag 2 – Överkropp – styrka",
        exercises: [
          ex("Latsdrag", "3 × 10–12", "Rygg."),
          ex("Sittande rodd", "3 × 10–12", "Rygg."),
          ex("Bröstpress", "3 × 10–12", "Bröst."),
          ex("Bröstflyes i maskin", "2 × 12", "Bröst."),
          ex("Axelpress", "2 × 12", "Axlar."),
          ex("Bicepscurl", "3 × 12", "Armar."),
          ex("Tricepspress", "3 × 12", "Armar."),
        ],
        treadmill: "Efter styrkan: 15 min rask gång",
      },
      {
        title: "Dag 3 – Kondition + bål",
        exercises: [
          ex("Dead bug", "2 × 10/sida", "Bål."),
          ex("Sidoplanka", "2 × 20–30 sek/sida", "Bål."),
          ex("Pallof press", "2 × 12/sida", "Bålstabilitet."),
          ex("Lätt rörlighet", "5 × min", "Höft, bröstrygg och fotleder."),
        ],
        treadmill: "25–35 min gåband i prattempo eller 1 min raskt/2 min lugnt × 8",
      },
      {
        title: "Dag 4 – Underkropp B – volym",
        exercises: [
          ex("Knäböj/goblet squat", "3 × 10–12", "Ben/säte."),
          ex("Rumänska marklyft", "3 × 10–12", "Baksida lår/säte."),
          ex("Bencurl", "3 × 12", "Baksida lår."),
          ex("Gående utfall", "2 × 10/ben", "Ben/säte."),
          ex("Höftabduktion", "2 × 15", "Säte."),
        ],
        treadmill: "Efter styrkan: 8–12 min lugn gång",
      },
      {
        title: "Dag 5 – Rumpa + helkropp och konditionsfinisher",
        exercises: [
          ex("Hip thrust (lätt–måttlig)", "3 × 12", "Lämna 2–3 reps i reserv."),
          ex("Step-up", "2 × 10/ben", "Kontrollerat."),
          ex("Höftabduktion", "2 × 15", "Säte."),
          ex("Sittande rodd", "2 × 12", "Rygg."),
          ex("Bröstpress", "2 × 12", "Bröst."),
          ex("Bicepscurl eller tricepspress", "2 × 12", "Välj en armövning."),
        ],
        treadmill: "Efter styrkan: 10 min intervaller, 30 sek raskt + 90 sek lugnt × 5",
      },
    ],
  },
];
