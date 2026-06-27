import { Router } from "express";

import authRoutes from "./src/modules/auth/auth.routes";
// import userRoutes from "../modules/user/routes/user.routes";
// import taskRoutes from "../modules/task/routes/task.routes";
// import categoryRoutes from "../modules/category/routes/category.routes";
// import reminderRoutes from "../modules/reminder/routes/reminder.routes";
// import notificationRoutes from "../modules/notification/routes/notification.routes";
// import calendarRoutes from "../modules/calendar/routes/calendar.routes";
// import analyticsRoutes from "../modules/analytics/routes/analytics.routes";

const router = Router();

router.use("/auth", authRoutes);
// router.use("/users", userRoutes);
// router.use("/tasks", taskRoutes);
// router.use("/categories", categoryRoutes);
// router.use("/reminders", reminderRoutes);
// router.use("/notifications", notificationRoutes);
// router.use("/calendar", calendarRoutes);
// router.use("/analytics", analyticsRoutes);

export default router;