import { useEffect, useState } from "react";
import {
  fetchDailyAchievements,
  fetchDailyAchievementDetails,
  fetchAccountAchievements,
} from "../utils/api";

export default function Strikes() {
  const [apiKey, setApiKey] = useState(localStorage.getItem("gw2_api_key"));
  const [priorityStrikes, setPriorityStrikes] = useState([]);
  const [achievementProgress, setAchievementProgress] = useState([]);

  useEffect(() => {
    const getPriorityStrikes = async () => {
      try {
        const dailyIds = await fetchDailyAchievements();
        const achievementDetails = await fetchDailyAchievementDetails(dailyIds);
        const priorityStrikes = achievementDetails.filter((ach) =>
          ach.name.includes("Priority Strike")
        );
        setPriorityStrikes(priorityStrikes);

        const accountAchievements = await fetchAccountAchievements(apiKey);
        const progress = accountAchievements.filter((ach) =>
          priorityStrikes.map((s) => s.id).includes(ach.id)
        );

        setAchievementProgress(progress);
      } catch (error) {
        console.error("Uh oh! Trouble fetching the strikes:", error);
      }
    };
    getPriorityStrikes();
  }, [apiKey]);

  if (!apiKey) return <ApiKeyInput onSubmit={setApiKey} />;

  return (
    <div>
      {priorityStrikes.map((strike) => {
        const progress = achievementProgress.find((a) => a.id === strike.id);
        return (
          <li key={strike.id} className="p-3 bg-white rounded-xl border">
            <span className="font-semibold">{strike.name}</span>{" "}
            {progress?.done ? (
              <span className="text-green-600">✅ Cleared</span>
            ) : (
              <span className="text-red-600">❌ Not Cleared</span>
            )}
          </li>
        );
      })}
    </div>
  );
}
