import express from "express";

import MessageResponse from "../interfaces/MessageResponse";
import schipol from "./schipol";

const router = express.Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/schipol", schipol);

export default router;
