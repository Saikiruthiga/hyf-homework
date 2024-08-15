import express from "express";

import searchItemRouter from "./routers/searchItem.js";
import searchIdRouter from "./routers/searchId.js";
import searchFieldRouter from "./routers/searchfield.js";

import loadDocuments from "./loadDocuments.js";

const app = express();
const port = process.env.PORT || 3000;

let documents = [];

(async () => {
  documents = await loadDocuments("./documents.json");
})();

app.use(express.json());

app.use((request, response, next) => {
  request.documents = documents;
  next();
});

app.get("/", (request, response) => {
  response.send("This a search engine");
});

app.use("/search", searchItemRouter); // GET /search
app.use("/documents", searchIdRouter); // GET /documents/:id
app.use("/search", searchFieldRouter); //POST /search

app.listen(port, () => console.log(`listening on port ${port}`));
