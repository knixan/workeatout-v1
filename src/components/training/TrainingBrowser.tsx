"use client";

import { useState } from "react";
import Chip from "@/components/site/Chip";
import {
  trainingDayOptions,
  trainingForms,
  trainingWeekRhythms,
  type TrainingDaysPerWeek,
  type TrainingForm,
  type TrainingProgram,
} from "@/data/training";
import TrainingDayCard from "./TrainingDayCard";

type TrainingBrowserProps = {
  programs: TrainingProgram[];
  initialForm: TrainingForm;
};

export default function TrainingBrowser({
  programs,
  initialForm,
}: TrainingBrowserProps) {
  const [form, setForm] = useState(initialForm);
  const [days, setDays] = useState<TrainingDaysPerWeek>(trainingDayOptions[0]);

  const program = programs.find(
    (item) => item.form === form && item.daysPerWeek === days,
  );
  const selectedForm = trainingForms.find(({ id }) => id === form);

  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <div>
          <h2 className="text-center font-heading text-sm font-semibold text-sage">
            Välj träningsform
          </h2>
          <div
            role="group"
            aria-label="Välj träningsform"
            className="mt-2 flex flex-wrap justify-center gap-2"
          >
            {trainingForms.map(({ id, label }) => (
              <Chip
                key={id}
                selected={form === id}
                onClick={() => setForm(id)}
              >
                {label}
              </Chip>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-center font-heading text-sm font-semibold text-sage">
            Dagar i veckan
          </h2>
          <div
            role="group"
            aria-label="Välj antal dagar i veckan"
            className="mt-2 flex flex-wrap justify-center gap-2"
          >
            {trainingDayOptions.map((option) => (
              <Chip
                key={option}
                selected={days === option}
                onClick={() => setDays(option)}
              >
                {option} dagar
              </Chip>
            ))}
          </div>
        </div>
      </div>

      {program && (
        <div aria-live="polite" className="mt-10">
          <h2 className="text-center font-heading text-3xl font-semibold text-pink md:text-4xl">
            {selectedForm?.label} – {days} dagar/vecka
          </h2>

          <div className="mt-5 space-y-5 rounded-2xl bg-forest p-6 font-heading leading-relaxed text-white md:p-10 md:text-lg">
            <p>Fokus: {program.focus}</p>
            <p>Exempel på veckorytm: {trainingWeekRhythms[days]}</p>
          </div>

          <div className="mt-6 grid items-start gap-6 md:grid-cols-2 xl:grid-cols-3">
            {program.days.map((day) => (
              <TrainingDayCard key={day.title} day={day} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
