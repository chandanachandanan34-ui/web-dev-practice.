import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const app = express();
const port = 3000;

let quiz = [];
let totalCorrect = 0;
let currentQuestion = {};

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function loadQuiz() {
  try {
    await db.connect();

    const res = await db.query("SELECT * FROM flags");
    quiz = res.rows;

    console.log("Quiz data loaded");

    await db.end(); // okay if you only need data once
  } catch (err) {
    console.error("Database error:", err);
  }
}

app.get("/", (req, res) => {
  totalCorrect = 0;
  nextQuestion();

  res.render("index.ejs", {
    question: currentQuestion,
  });
});

app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;

  if (
    currentQuestion.name.toLowerCase() ===
    answer.toLowerCase()
  ) {
    totalCorrect++;
    isCorrect = true;
  }

  nextQuestion();

  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

function nextQuestion() {
  const randomCountry =
    quiz[Math.floor(Math.random() * quiz.length)];

  currentQuestion = randomCountry;
}

loadQuiz().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});