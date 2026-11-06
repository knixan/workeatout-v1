import type { IconType } from "react-icons";

type SectionHeadingProps = {
  icon: IconType;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  icon: Icon,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <Icon aria-hidden className="size-9 text-lime" />
      <h2 className="mt-3 font-heading text-2xl font-semibold text-sage uppercase md:text-3xl">
        {title}
      </h2>
      {subtitle && <p className="mt-1 text-forest">{subtitle}</p>}
    </div>
  );
}
