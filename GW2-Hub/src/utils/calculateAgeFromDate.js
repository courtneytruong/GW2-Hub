export function calculateAgeFromDate(isoDateString) {
  const createdDate = new Date(isoDateString);
  const now = new Date();

  let years = now.getUTCFullYear() - createdDate.getUTCFullYear();
  let months = now.getUTCMonth() - createdDate.getUTCMonth();
  let days = now.getUTCDate() - createdDate.getUTCDate();

  // Adjust if days negative
  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(now.getUTCFullYear(), now.getUTCMonth(), 0);
    days += prevMonth.getUTCDate();
  }

  // Adjust if months negative
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
}

function pluralize(value, unit) {
  return `${value} ${unit}${value !== 1 ? "s" : ""}`;
}

export function formatAge({ years, months, days }) {
  const yearStr = pluralize(years, "year");
  const monthStr = pluralize(months, "month");
  const dayStr = pluralize(days, "day");

  return `${yearStr}, ${monthStr}, and ${dayStr}`;
}
