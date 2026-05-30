export function formatDateRange(
  startDate: string,
  endDate: string | null
): string {
  const fmt = (d: string) => {
    const [year, month] = d.split("-");
    if (!month) return year;
    const date = new Date(Number(year), Number(month) - 1);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };
  return `${fmt(startDate)} — ${endDate ? fmt(endDate) : "Present"}`;
}

export function getDuration(startDate: string, endDate: string | null): string {
  const start = new Date(startDate.replace("-", "/") + "/01");
  const end = endDate ? new Date(endDate.replace("-", "/") + "/01") : new Date();
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const rem = months % 12;
  const parts: string[] = [];
  if (years > 0) parts.push(`${years}y`);
  if (rem > 0) parts.push(`${rem}m`);
  return parts.join(" ");
}
