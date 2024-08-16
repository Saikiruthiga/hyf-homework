import express from "express";
const router = express.Router();

router.get("/:id", async (request, response) => {
  try {
    const documents = request.documents;
    const id = request.params.id;
    const result = documents.find((doc) => doc.id === Number(id));
    if (result) {
      return response.json(result);
    } else {
      return response.status(404).json({ error: "No records found" });
    }
  } catch (error) {
    response.status(500).json({ Error: "Error on fetch" });
  }
});

export default router;
