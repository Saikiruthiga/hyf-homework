import express from "express";
import knex from "./database_client.js";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
  let query = knex.select("*").from("contacts");

  // if ("sort" in req.query) {
  //   const orderBy = req.query.sort.toString();
  //   if (orderBy.length > 0) {
  //     query = query.orderByRaw(orderBy);
  //   }
  // }
  // console.log("SQL", query.toSQL().sql);

  if ("sort" in req.query) {
    const orderBy = req.query.sort.toString().split(" ");
    const columnName = ["id", "first_name", "last_name", "email"];
    if (
      orderBy.length === 2 &&
      columnName.includes(orderBy[0]) &&
      (orderBy[1].toLowerCase() === "asc" ||
        orderBy[1].toLowerCase() === "desc")
    ) {
      query = query.orderBy(orderBy[0], orderBy[1]);
    } else {
      return res.status(400).json({ Error: "Bad request" });
    }
  }
  try {
    const data = await query;
    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
