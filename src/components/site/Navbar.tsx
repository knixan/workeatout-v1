import Image from "next/image";
import Link from "next/link";
import {
  LuBookOpen,
  LuClipboardList,
  LuDumbbell,
  LuHouse,
  LuUtensils,
} from "react-icons/lu";

const links = [
  { href: "/", label: "Hem", icon: LuHouse },
  { href: "/#maltider", label: "Måltider", icon: LuUtensils },
  {
    href: "/#traningsprogram",
    label: "Träningsprogram",
    shortLabel: "Program",
    icon: LuClipboardList,
  },
  { href: "/traning", label: "Träning", icon: LuDumbbell },
  { href: "/recept", label: "Recept", icon: LuBookOpen },
];

type NavbarProps = {
  current: "/" | "/recept" | "/traning";
};

export default function Navbar({ current }: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-forest shadow-md">
      <div className="flex h-14 items-center px-6 lg:grid lg:h-16 lg:grid-cols-[1fr_auto_1fr] lg:px-12 2xl:px-24">
        <Link href="/" aria-label="Workeatout! startsida" className="w-fit">
          <Image
            src="/navbar-loggo.png"
            alt="Workeatout!"
            width={1420}
            height={410}
            preload
            className="h-auto w-32 md:w-40"
          />
        </Link>

        {/* Under lg blir menyn en fast ikonrad längst ner, nära tummen. */}
        <nav
          aria-label="Huvudmeny"
          className="fixed inset-x-0 bottom-0 border-t border-sage/40 bg-forest pb-[env(safe-area-inset-bottom)] lg:static lg:border-0 lg:bg-transparent lg:pb-0"
        >
          <ul className="grid grid-cols-5 font-heading text-[11px] font-medium text-white lg:flex lg:items-center lg:gap-x-8 lg:text-sm xl:gap-x-10">
            {links.map(({ href, label, shortLabel, icon: Icon }) => {
              const isCurrent = href === current;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={`flex h-16 flex-col items-center justify-center gap-1 transition-colors lg:h-auto lg:border-b-2 lg:pb-1 lg:hover:border-pink ${
                      isCurrent
                        ? "text-pink lg:border-pink lg:text-white"
                        : "lg:border-transparent"
                    }`}
                  >
                    <Icon aria-hidden className="size-6 lg:hidden" />
                    <span className="lg:hidden">{shortLabel ?? label}</span>
                    <span className="hidden lg:inline">{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
