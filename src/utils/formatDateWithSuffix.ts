function addOrdinalSuffix(day: number): string {
  const suffixes = ["th", "st", "nd", "rd"];
  const value = day % 100;
  return day + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0]);
}

export function formatDateWithSuffix(unixTimestamp: number): string {
  const date = new Date(unixTimestamp * 1000);
  const month = date.toLocaleString('default', { month: 'long' });
  const day = addOrdinalSuffix(date.getDate());
  const year = date.getFullYear();
  
  return `${month} ${day}, ${year}`;
}
