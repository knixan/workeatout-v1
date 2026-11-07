import Image from "next/image";
import Link from "next/link";

type RecipeCardProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
};

export default function RecipeCard({
  title,
  description,
  image,
  imageAlt,
  href,
}: RecipeCardProps) {
  return (
    <Link
      href={href}
      className="relative block aspect-square overflow-hidden rounded-2xl shadow-md transition-shadow hover:shadow-xl"
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(min-width: 1024px) 490px, (min-width: 640px) 50vw, 100vw"
        className="scale-105 object-cover"
      />
      <div className="absolute inset-x-0 bottom-[8%] bg-sage/75 px-5 py-3 text-white">
        <h3 className="font-heading text-3xl font-medium uppercase md:text-4xl">
          {title}
        </h3>
        <p className="mt-1 text-sm font-medium">{description}</p>
      </div>
    </Link>
  );
}
