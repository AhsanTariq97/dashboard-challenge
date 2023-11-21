export const formatDateAndDay = (
  timeString: string,
  timeZoneOffset: number = 5,
): string => {
  const date = new Date(timeString.replace("Z", "")); // Remove 'Z' and parse
  const utcTime = date.getTime() + date.getTimezoneOffset() * 60000; // Convert to UTC
  const localTime = new Date(utcTime + timeZoneOffset * 3600000); // Apply the desired time zone offset

  const formattedDateAndDay = localTime.toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  return formattedDateAndDay;
};
