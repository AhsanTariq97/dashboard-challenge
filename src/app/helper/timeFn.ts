export const formatTime12Hour = (
  timeString: string,
  timeZoneOffset: number = 5,
): string => {
  const date = new Date(timeString.replace("Z", "")); // Remove 'Z' and parse
  const utcTime = date.getTime() + date.getTimezoneOffset() * 60000; // Convert to UTC
  const localTime = new Date(utcTime + timeZoneOffset * 3600000); // Apply the desired time zone offset
  const formattedTime = localTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return formattedTime.toUpperCase().replace(" ", ""); // Remove the space between the time and AM/PM
};
