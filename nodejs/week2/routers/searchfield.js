import express from "express";

const router = express.Router();

router.post("/", (request, response) => {
  try {
    const documents = request.documents;
    const searchItem = request.query.q;
    const searchField = request.body.fields;
    if (searchItem && searchField) {
      return response.status(400).json({
        Error: "Bad request, both search condition should not be provided",
      });
    }
    if (searchItem) {
      const result = documents.filter((doc) =>
        Object.values(doc).some((value) =>
          value.toString().includes(searchItem)
        )
      );
      return response.status(200).json(result);
    }
    if (searchField) {
      const result = documents.filter((doc) =>
        Object.entries(doc).some((value) =>
          value.toString().toLowerCase().includes(Object.entries(searchField))
        )
      );
      return response.json(result);
    }
  } catch (error) {
    response.status(500).json({ Error: "Internal Server error" });
    console.log(error);
  }
});

export default router;
