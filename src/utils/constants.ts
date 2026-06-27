// =====================
// User Roles
// =====================

export const USER_ROLE = {
  USER: "USER",
  ADMIN: "ADMIN",
} as const;

// =====================
// Task Status
// =====================

export const TASK_STATUS = {
  PENDING: "PENDING",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
} as const;

// =====================
// Task Priority
// =====================

export const TASK_PRIORITY = {
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  HIGH: "HIGH",
} as const;

// =====================
// Repeat Types
// =====================

export const REPEAT_TYPE = {
  NONE: "NONE",
  DAILY: "DAILY",
  WEEKLY: "WEEKLY",
  MONTHLY: "MONTHLY",
  YEARLY: "YEARLY",
} as const;

// =====================
// Days
// =====================

export const DAYS = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
] as const;

// =====================
// Notification Status
// =====================

export const NOTIFICATION_STATUS = {
  PENDING: "PENDING",
  SENT: "SENT",
  FAILED: "FAILED",
} as const;

// =====================
// HTTP Status
// =====================

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
} as const;

// =====================
// Messages
// =====================

export const MESSAGE = {
  SUCCESS: "Success",
  CREATED: "Created Successfully",
  UPDATED: "Updated Successfully",
  DELETED: "Deleted Successfully",

  LOGIN_SUCCESS: "Login Successfully",
  REGISTER_SUCCESS: "Registration Successfully",

  INVALID_CREDENTIALS: "Invalid Email or Password",
  USER_NOT_FOUND: "User Not Found",

  INTERNAL_SERVER_ERROR: "Internal Server Error",
} as const;