import express from "express";

import MessageResponse from "../interfaces/MessageResponse";
import schipol from "./schipol";
import airline from "./airline";
import destinations from "./destinations";

const router = express.Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/schipol", schipol);
router.use("/airline", airline);
router.use("/destinations", destinations);

export default router;
