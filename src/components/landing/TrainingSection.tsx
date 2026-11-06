import { LuDumbbell } from "react-icons/lu";
import SectionHeading from "./SectionHeading";

export default function TrainingSection() {
  return (
    <section
      id="traningsprogram"
      className="scroll-mt-8 bg-surface px-6 pt-4 pb-24"
    >
      <SectionHeading icon={LuDumbbell} title="Träningsprogram" />
    </section>
  );
}
