import express from "express";
import axiosInstance from "../../utils/axiosInstance";

const router = express.Router();

router.get("/", async (req, res) => {
  const { page = 0, query = "" } = req.query;
  try {
    const response = await axiosInstance.get("/public-flights/destinations", {
      params: {
        page: page,
        sort: "+iata",
      },
    });

    res.json(response.data);
  } catch (error: any) {
    console.error("Error fetching airline:", error.message);
    res.status(500).json({ message: "Failed to fetch airline" });
  }
});

export default router;
