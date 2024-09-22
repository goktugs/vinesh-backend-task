import express from "express";
import axiosInstance from "../../utils/axiosInstance";

const router = express.Router();

router.get("/:iata", async (req, res) => {
  try {
    const airlineIate = req.params.iata;

    const response = await axiosInstance.get(
      `/public-flights/airlines/${airlineIate}`
    );

    res.json(response.data);
  } catch (error: any) {
    console.error("Error fetching airline:", error.message);
    res.status(500).json({ message: "Failed to fetch airline" });
  }
});

export default router;
