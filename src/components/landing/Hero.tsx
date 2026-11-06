import Image from "next/image";
import Link from "next/link";
import { LuApple, LuDumbbell, LuHeart, LuLeaf } from "react-icons/lu";

const features = [
  { icon: LuApple, label: "Hälsosamma recept" },
  { icon: LuDumbbell, label: "Träningsprogram för alla" },
  { icon: LuLeaf, label: "En balanserad livsstil" },
  { icon: LuHeart, label: "Resultat du känner" },
];

export default function Hero() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-forest xl:block xl:aspect-[1920/1067]">
      <div className="relative z-10 w-full px-6 pt-36 pb-10 md:pt-32 lg:px-12 xl:pt-40 2xl:px-24 2xl:pt-52">
        <div className="xl:max-w-[480px] 2xl:max-w-[36vw]">
          <h1 className="font-heading text-4xl leading-tight font-semibold text-white md:text-5xl 2xl:text-6xl">
            ÄT BRA.
            <br />
            TRÄNA SMART.
            <br />
            <span className="text-pink">LEV BÄTTRE!</span>
          </h1>

          <p className="mt-6 max-w-md leading-relaxed text-white 2xl:text-lg">
            Workeatout! är din guide till en hälsosam livsstil med näringsrika
            recept och effektiva träningsprogram – för alla nivåer.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 font-heading text-sm font-semibold text-white">
            <Link
              href="#traningsprogram"
              className="rounded-lg bg-pink px-6 py-3 transition-opacity hover:opacity-85"
            >
              Kom igång idag!
            </Link>
            <Link
              href="#maltider"
              className="rounded-lg border border-lime px-6 py-3 transition-colors hover:bg-lime"
            >
              Utforska recept
            </Link>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
            {features.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex flex-col items-center gap-2 text-center text-xs leading-snug text-white 2xl:text-sm"
              >
                <Icon aria-hidden className="size-8 text-lime" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative h-72 sm:h-96 xl:absolute xl:inset-0 xl:h-auto">
        <Image
          src="/workeatout-hero.png"
          alt="Grönt äpple, hantlar, kettlebell, shaker och en skål med kyckling, ris och broccoli"
          fill
          preload
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-forest to-transparent xl:hidden" />
      </div>
    </section>
  );
}
