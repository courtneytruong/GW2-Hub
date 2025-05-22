import ProgressBar from "./ProgressBar";
import { ImCheckmark2, ImCheckmark } from "react-icons/im";

export default function WizardVaultCard({ wizardObjectives }) {
  const isComplete =
    wizardObjectives.progress_current >= wizardObjectives.progress_complete;
  return (
    <div className="bg-gradient-to-t from-black to-red-800 p-4 rounded shadow text-neutral-300 mb-4">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-semibold">{wizardObjectives.title}</h2>
      </div>
      <div className="text-md font-semibold">
        <p>Track: {wizardObjectives.track}</p>
        <p>Acclaim: {wizardObjectives.acclaim}</p>
      </div>
      <div className="flex justify-between items-center gap-4">
        <ProgressBar
          current={wizardObjectives.progress_current}
          complete={wizardObjectives.progress_complete}
        />
        {isComplete ? (
          <ImCheckmark size={30} className="text-green-500" />
        ) : (
          <ImCheckmark2 size={30} />
        )}
      </div>
    </div>
  );
}
