import { LuChevronDown } from "react-icons/lu";

type InfoDetailsProps = {
  title: string;
  paragraphs: string[];
};

export default function InfoDetails({ title, paragraphs }: InfoDetailsProps) {
  return (
    <details className="group rounded-2xl bg-white p-5 shadow-md">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-heading font-semibold text-sage [&::-webkit-details-marker]:hidden">
        {title}
        <LuChevronDown
          aria-hidden
          className="size-5 shrink-0 transition-transform group-open:rotate-180"
        />
      </summary>
      <div className="mt-3 space-y-3 text-sm leading-relaxed">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </details>
  );
}
