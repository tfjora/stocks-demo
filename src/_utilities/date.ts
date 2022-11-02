import { isValid } from "date-fns";

export const formatToTimeStamp = (dateStr: string): number => {
  const isDateValid = isValid(new Date(dateStr));

  const timeStamp = isDateValid ? new Date(dateStr).getTime() : 0;
  return timeStamp;
};
