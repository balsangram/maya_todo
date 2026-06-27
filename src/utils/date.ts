// Current Date
export const getCurrentDate = (): Date => {
  return new Date();
};

// Current Timestamp
export const getCurrentTimestamp = (): number => {
  return Date.now();
};

// Format Date (YYYY-MM-DD)
export const formatDate = (date: Date): string => {
  return date.toISOString().split("T")[0];
};

// Format Time (HH:MM)
export const formatTime = (date: Date): string => {
  return date.toTimeString().slice(0, 5);
};

// Check Today
export const isToday = (date: Date): boolean => {
  return formatDate(date) === formatDate(new Date());
};

// Add Days
export const addDays = (date: Date, days: number): Date => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

// Add Months
export const addMonths = (date: Date, months: number): Date => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + months);
  return newDate;
};

// Add Years
export const addYears = (date: Date, years: number): Date => {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() + years);
  return newDate;
};

// Day Name
export const getDayName = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
  });
};

// Month Name
export const getMonthName = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    month: "long",
  });
};