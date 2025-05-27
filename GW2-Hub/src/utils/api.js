import axios from "axios";

//Character api calls
export async function fetchCharacters(apiKey) {
  const res = await axios.get(
    `https://api.guildwars2.com/v2/characters?access_token=${apiKey}`
  );
  return res.data;
}

export async function fetchCharacterDetails(apiKey, name) {
  const res = await axios.get(
    `https://api.guildwars2.com/v2/characters/${encodeURIComponent(
      name
    )}?access_token=${apiKey}`
  );
  return res.data;
}

//wizard vault api calls
export async function fetchWizardVaultDailies(apiKey) {
  const res = await axios.get(
    `https://api.guildwars2.com/v2/account/wizardsvault/daily?access_token=${apiKey}`
  );
  return res.data;
}

export async function fetchWizardVaultDailiesDetails(apiKey, id) {
  const res = await axios.get(
    `https://api.guildwars2.com/v2/account/wizardsvault//objectives?ids=${id.join(
      ","
    )}?access_token=${apiKey}`
  );
  return res.data;
}

export async function fetchWizardVaultWeeklies(apiKey) {
  const res = await axios.get(
    `https://api.guildwars2.com/v2/account/wizardsvault/weekly?access_token=${apiKey}`
  );
  return res.data;
}

export async function fetchWizardVaultSpecial(apiKey) {
  const res = await axios.get(
    `https://api.guildwars2.com/v2/account/wizardsvault/special?access_token=${apiKey}`
  );
  return res.data;
}
