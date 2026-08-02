import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const city = req.query.city || "Bangalore";

    const response = await axios.get(
      `https://wttr.in/${city}?format=j1`
    );

    const data = response.data;

    const weather = {
      city: city,
      temp: data.current_condition[0].temp_C,
      desc: data.current_condition[0].weatherDesc[0].value,
      humidity: data.current_condition[0].humidity,
      wind: data.current_condition[0].windspeedKmph
    };

    res.render("index", { weather: weather });
  } catch (error) {
    console.log(error.message);
    res.render("index", { weather: null });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});