import { useState, useEffect } from "react";
import {
  fetchWizardVaultDailies,
  fetchWizardVaultWeeklies,
  fetchWizardVaultSpecial,
} from "../utils/api";
import WizardVaultCard from "../components/WizardVaultCard";

export default function WizardVault() {
  //state to set wizard vault dailies, weeklies, special objectives as an array
  const [wizardVaultDaily, setWizardVaultDaily] = useState([]);
  const [wizardVaultWeekly, setWizardVaultWeekly] = useState([]);
  const [wizardVaultSpecial, setWizardVaultSpecial] = useState([]);

  //set api key, pull api key from local storage
  const [apiKey, setApiKey] = useState(localStorage.getItem("gw2_api_key"));

  //fetch wizardVaultDailies
  useEffect(() => {
    async function loadAllWizardVaultDailyDetails() {
      try {
        const response = await fetchWizardVaultDailies(apiKey);
        console.log("Vault response:", response);
        if (!response || !Array.isArray(response.objectives)) {
          throw new Error("Invalid response format");
        }

        const { objectives: dailyWizardObjectives } = response;
        setWizardVaultDaily(dailyWizardObjectives);
      } catch (error) {
        console.error("Failed to fetch wizard vault dailies:", error);
      }
    }

    if (apiKey) loadAllWizardVaultDailyDetails();
  }, [apiKey]);

  //fetch wizard vault weeklies
  useEffect(() => {
    async function loadAllWizardVaultWeeklyDetails() {
      try {
        const response = await fetchWizardVaultWeeklies(apiKey);
        console.log("Vault response:", response);
        if (!response || !Array.isArray(response.objectives)) {
          throw new Error("Invalid response format");
        }

        const { objectives: weeklyWizardObjectives } = response;
        setWizardVaultWeekly(weeklyWizardObjectives);
      } catch (error) {
        console.error("Failed to fetch wizard vault dailies:", error);
      }
    }

    if (apiKey) loadAllWizardVaultWeeklyDetails();
  }, [apiKey]);

  //fetch wizard vault special objectives
  useEffect(() => {
    async function loadAllWizardVaultSpecialDetails() {
      try {
        const response = await fetchWizardVaultSpecial(apiKey);
        console.log("Vault response:", response);
        if (!response || !Array.isArray(response.objectives)) {
          throw new Error("Invalid response format");
        }

        const { objectives: specialWizardObjectives } = response;
        setWizardVaultSpecial(specialWizardObjectives);
      } catch (error) {
        console.error("Failed to fetch wizard vault dailies:", error);
      }
    }

    if (apiKey) loadAllWizardVaultSpecialDetails();
  }, [apiKey]);

  //if no api key show component to set api key
  if (!apiKey) return <ApiKeyInput onSubmit={setApiKey} />;

  return (
    <div className="p-4 mx-auto max-w-5xl min-h-screen">
      <h1 className="text-2xl text-center font-bold mb-4">Wizard Vault</h1>
      <h2 className="text-neutral-300 text-lg font-semibold border-b-2 border-neutral-300 mb-4">
        Daily Objectives
      </h2>
      <div>
        {wizardVaultDaily.map((dailyWizardObjectives) => (
          <WizardVaultCard
            key={dailyWizardObjectives.id}
            wizardObjectives={dailyWizardObjectives}
          />
        ))}
        <h2 className="text-neutral-300 text-lg font-semibold border-b-2 border-neutral-300 mb-4">
          Weekly Objectives
        </h2>
        {wizardVaultWeekly.map((weeklyWizardObjectives) => (
          <WizardVaultCard
            key={weeklyWizardObjectives.id}
            wizardObjectives={weeklyWizardObjectives}
          />
        ))}
        <h2 className="text-neutral-300 text-lg font-semibold border-b-2 border-neutral-300 mb-4">
          Special Objectives
        </h2>
        {wizardVaultSpecial.map((specialWizardObjectives) => (
          <WizardVaultCard
            key={specialWizardObjectives.id}
            wizardObjectives={specialWizardObjectives}
          />
        ))}
      </div>
    </div>
  );
}
