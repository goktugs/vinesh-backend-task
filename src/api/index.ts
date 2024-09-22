import express from "express";

import MessageResponse from "../interfaces/MessageResponse";
import schipol from "./schipol";
import airline from "./airline";

const router = express.Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/schipol", schipol);
router.use("/airline", airline);

export default router;
