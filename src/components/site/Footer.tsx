import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forest">
      <div className="px-6 py-8 lg:px-12 2xl:px-24">
        <Link
          href="/"
          aria-label="Workeatout! startsida"
          className="inline-block"
        >
          <Image
            src="/workeatout-footer-loggo.png"
            alt="Workeatout!"
            width={1086}
            height={824}
            className="h-auto w-40"
          />
        </Link>
      </div>
    </footer>
  );
}
