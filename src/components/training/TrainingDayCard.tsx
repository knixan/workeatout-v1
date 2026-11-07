import { LuFootprints } from "react-icons/lu";
import type { TrainingDay } from "@/data/training";

type TrainingDayCardProps = {
  day: TrainingDay;
};

export default function TrainingDayCard({ day }: TrainingDayCardProps) {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-md">
      <h3 className="font-heading text-lg leading-snug font-semibold text-forest">
        {day.title}
      </h3>

      <ul className="mt-3 divide-y divide-surface">
        {day.exercises.map((exercise) => (
          <li key={exercise.name} className="py-2">
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-sm font-medium">{exercise.name}</span>
              <span className="shrink-0 font-heading text-sm font-semibold text-sage">
                {exercise.sets}
              </span>
            </div>
            <p className="mt-0.5 text-xs text-sage">{exercise.note}</p>
          </li>
        ))}
      </ul>

      <p className="mt-3 flex items-start gap-2 rounded-lg bg-surface p-3 text-sm">
        <LuFootprints aria-hidden className="mt-0.5 size-4 shrink-0 text-lime" />
        <span>
          <span className="font-semibold">Gåband:</span> {day.treadmill}
        </span>
      </p>
    </article>
  );
}
