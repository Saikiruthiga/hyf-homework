import express from "express";
const router = express.Router();

router.get("/", async (request, response) => {
  const documents = request.documents;
  const searchItem = request.query.q;
  if (searchItem) {
    const results = documents.filter((doc) =>
      Object.values(doc).some((value) =>
        value.toString().toLowerCase().includes(searchItem.toLowerCase())
      )
    );
    if (results.length > 0) {
      return response.json(results);
    } else {
      return response
        .status(404)
        .send(`The search item "${searchItem}" is not found in the documents`);
    }
  }
  return response.json(documents);
});

export default router;
