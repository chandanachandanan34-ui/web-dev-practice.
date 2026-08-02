import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
res.render("index.ejs", { totalLength: null });
});

app.post("/submit", (req, res) => {
  const first = req.body["fName"];
  const last = req.body["lName"];
  const combinedLength = (first + last).length;
  res.render("index.ejs", { 
    totalLength: combinedLength 
  });
  console.log("Combined Length:", combinedLength);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
