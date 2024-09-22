import express from "express";
import axiosInstance from "../../utils/axiosInstance";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { airline } = req.query;
    const response = await axiosInstance.get("/public-flights/flights", {
      params: {
        includedelays: "false",
        page: "0",
        airline: airline,
      },
    });

    res.json(response.data);
  } catch (error: any) {
    console.error("Error fetching flights:", error.message);
    res.status(500).json({ message: "Failed to fetch flights" });
  }
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  try {
    console.log(`Fetching flight ${id}...`);
    axiosInstance.get(`/public-flights/flights/${id}`).then((response) => {
      console.log(`Fetched flight ${id}!`);
      res.json(response.data);
    });
  } catch (error: any) {
    console.error("Error fetching flight:", error.message);
    res.status(500).json({ message: "Failed to fetch flight" });
  }
});

export default router;
