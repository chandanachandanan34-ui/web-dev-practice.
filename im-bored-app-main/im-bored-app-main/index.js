import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

// middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// GET - random activity
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://bored-api.appbrewery.com/random"
    );

    const result = response.data;

    res.render("index.ejs", {
      data: [result],   // convert to array for same EJS logic
      error: null
    });

  } catch (error) {
    res.render("index.ejs", {
      data: null,
      error: error.message
    });
  }
});

// POST - filtered activities (ARRAY)
app.post("/", async (req, res) => {
  try {
    const type = req.body.type;
    const participants = req.body.participants;

    const response = await axios.get(
      `https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`
    );

    const result = response.data;

    if (!result || result.length === 0) {
      return res.render("index.ejs", {
        data: null,
        error: "No activities that match your criteria."
      });
    }

    res.render("index.ejs", {
      data: result,
      error: null
    });

  } catch (error) {
    res.render("index.ejs", {
      data: null,
      error: "No activities found."
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});