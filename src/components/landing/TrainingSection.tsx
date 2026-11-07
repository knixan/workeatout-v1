import Link from "next/link";
import type { IconType } from "react-icons";
import {
  LuArrowRight,
  LuDumbbell,
  LuFootprints,
  LuHeartPulse,
} from "react-icons/lu";
import { trainingForms, type TrainingForm } from "@/data/training";
import SectionHeading from "./SectionHeading";

const formIcons: Record<TrainingForm, IconType> = {
  "styrka-puls": LuHeartPulse,
  "muskler-former": LuDumbbell,
  "muskler-kondition": LuFootprints,
};

export default function TrainingSection() {
  return (
    <section
      id="traningsprogram"
      className="scroll-mt-20 bg-surface lg:scroll-mt-28 px-6 pt-4 pb-24"
    >
      <SectionHeading
        icon={LuDumbbell}
        title="Träningsprogram"
        subtitle="Välj din träningsform och träna 3, 4 eller 5 dagar i veckan"
      />
      <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
        {trainingForms.map(({ id, label, description }) => {
          const Icon = formIcons[id];
          return (
            <Link
              key={id}
              href={`/traning?form=${id}`}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-md transition-shadow hover:shadow-xl"
            >
              <Icon aria-hidden className="size-9 text-lime" />
              <h3 className="mt-3 font-heading text-xl font-semibold text-sage">
                {label}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed">
                {description}
              </p>
              <span className="mt-4 flex items-center gap-1.5 font-heading text-sm font-semibold text-pink">
                Visa upplägg
                <LuArrowRight aria-hidden className="size-4" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
