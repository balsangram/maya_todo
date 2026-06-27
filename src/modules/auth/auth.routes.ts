import { Router } from "express";
import { forgotPassword, login, logout, profile, register, resetPassword, verifyOTP } from "./auth.controller.ts";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/forgot-password", forgotPassword);
router.post("/verify-otp", verifyOTP);
router.post("/reset-password", resetPassword);
router.get("/profile", profile);

export default router;