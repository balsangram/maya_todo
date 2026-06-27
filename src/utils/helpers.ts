// Generate 6-digit OTP
export const generateOTP = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Generate Random Code
export const generateCode = (length: number = 8): string => {
  return Math.random().toString(36).substring(2, 2 + length).toUpperCase();
};

// Capitalize First Letter
export const capitalize = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

// Remove Undefined Fields
export const removeUndefined = (obj: Record<string, unknown>) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== undefined)
  );
};

// Delay Function
export const delay = (ms: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, ms));