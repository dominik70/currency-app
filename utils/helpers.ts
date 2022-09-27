import { format } from "date-fns";

export const formatDate = (date: Date) => {
  return format(date, "yyyy-MM-dd");
};

export const formatCurrency = (number: number) => {
  const log = number !== 0 ? Math.floor(Math.log10(number)) : 0;
  const div = log < 0 ? Math.pow(10, 1 - log) : 100;

  const rounded = Math.round(number * div) / div;

  return Number.isInteger(rounded * 10) ? rounded.toFixed(2) : rounded;
};

export const isDateAfter = (date1: Date | string, date2: Date | string) => {
  return new Date(date1) > new Date(date2);
};

export const getPointSize = (length: number) => {
  if (length > 250) return 1.75;
  if (length > 150) return 2;
  if (length > 100) return 2.5;
  return 3;
};
