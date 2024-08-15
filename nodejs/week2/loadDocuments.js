import { promises } from "fs";

const loadDocuments = async (filePath) => {
  try {
    const data = await promises.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.log("Error on reading the file", error);
  }
};

export default loadDocuments;
