import Image from "next/image";
import Link from "next/link";
import { LuLogIn } from "react-icons/lu";

const links = [
  { href: "/", label: "Hem", active: true },
  { href: "#maltider", label: "Måltider" },
  { href: "#traningsprogram", label: "Träningsprogram" },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-4 px-6 py-5 md:gap-x-8 lg:px-12 2xl:px-24">
        <Link href="/" aria-label="Workeatout! startsida">
          <Image
            src="/navbar-loggo.png"
            alt="Workeatout!"
            width={1420}
            height={410}
            preload
            className="h-auto w-28 sm:w-36 md:w-48"
          />
        </Link>

        <nav
          aria-label="Huvudmeny"
          className="order-last w-full md:order-none md:w-auto"
        >
          <ul className="flex items-center gap-6 font-heading text-sm font-medium text-white lg:gap-10">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={link.active ? "page" : undefined}
                  className={`border-b-2 pb-1 transition-colors hover:border-pink ${
                    link.active ? "border-pink" : "border-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 font-heading text-xs font-medium text-white sm:gap-3 sm:text-sm">
          <Link
            href="#"
            className="rounded-md bg-pink px-2.5 py-1.5 sm:px-3 transition-opacity hover:opacity-85"
          >
            Bli medlem!
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md border border-lime px-2.5 py-1.5 sm:px-3 transition-colors hover:bg-lime"
          >
            <LuLogIn aria-hidden className="size-4" />
            Logga in!
          </Link>
        </div>
      </div>
    </header>
  );
}
