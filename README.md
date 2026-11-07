# Workeatout!

Workeatout! är en svensk webbplats om hälsosam livsstil, med näringsrika recept och träningsprogram för alla nivåer.

Projektet består av tre sidor:

- **Startsidan** har en hero-sektion, fyra måltidskategorier (frukost, mellanmål, lunch/middag och kvällsmat) och tre träningsformer. Korten länkar vidare till rätt kategori eller form.
- **Receptsidan** (`/recept`) visar alla recept, med sökning och chips för att filtrera på måltid.
- **Träningssidan** (`/traning`) visar 9 träningsupplägg, där chips väljer träningsform och 3, 4 eller 5 dagar i veckan.

Recept och träning är mockdata i `src/data/` tills databas och admin finns på plats.

## Tekniker

- [Next.js](https://nextjs.org) 16 med App Router
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) 4
- [React Icons](https://react-icons.github.io/react-icons/), där ikonerna kommer från Lucide (`react-icons/lu`)

## Kom igång

Du behöver ha Node.js och npm installerat.

```bash
git clone https://github.com/knixan/workeatout-v1.git
cd workeatout-v1
npm install
npm run dev
```

Öppna sedan [http://localhost:3000](http://localhost:3000) i webbläsaren.

## Kommandon

| Kommando        | Beskrivning                                   |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Startar utvecklingsservern                    |
| `npm run build` | Bygger projektet för produktion               |
| `npm run start` | Startar produktionsbygget (kör `build` först) |
| `npm run lint`  | Kontrollerar koden med ESLint                 |

## Projektstruktur

```text
public/
├── maltider/            Bilder till måltidskategorierna
└── *.png                Loggor och hero-bild
src/
├── app/
│   ├── globals.css      Tailwind, färger och typsnittsvariabler
│   ├── layout.tsx       Rotlayout, typsnitt och metadata
│   ├── page.tsx         Startsidan
│   ├── recept/          Receptsidan
│   └── traning/         Träningssidan
├── components/
│   ├── landing/         Sektioner som hör till startsidan
│   ├── recipes/         Receptlistan med sökning och filter
│   ├── site/            Delade delar, till exempel Navbar, Footer och Chip
│   └── training/        Träningsuppläggen med chips
└── data/
    ├── recipes.ts       Mockdata för recepten
    └── training.ts      Mockdata för träningsuppläggen
```

Sidor i `src/app` bygger på komponenter som importeras från `src/components`. Använd `Image` från `next/image` för bilder och `Link` från `next/link` för interna länkar.

## Färger

Färgerna är definierade i `src/app/globals.css` och fungerar som vanliga Tailwind-klasser, till exempel `bg-forest` och `text-pink`.

| Namn      | Färgkod   | Används till                       |
| --------- | --------- | ---------------------------------- |
| `forest`  | `#052310` | Mörk bakgrund och brödtext         |
| `sage`    | `#4A6E4A` | Rubriker och textband på måltider  |
| `lime`    | `#598F18` | Ikoner och knappkanter             |
| `pink`    | `#DF3477` | Primära knappar och accenter       |
| `surface` | `#F6F6F6` | Ljus bakgrund i sektioner          |

Rubriker använder typsnittet Poppins (`font-heading`) och övrig text använder Inter.

## Status

Startsidan, receptsidan och träningssidan är på plats. Det här återstår:

- Databas och admin för recept och träning
- Sidor för "Bli medlem!" och "Logga in!", som knapparna i navbaren ska länka till
