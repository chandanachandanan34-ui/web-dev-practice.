
# Flag Quiz Game

A full-stack Flag Quiz web application built using Express.js, PostgreSQL, and EJS. The application displays random country flags and allows users to guess the corresponding country name while tracking their score.

## Features

* Random country flag generation
* Country name guessing game
* Score tracking system
* Correct and incorrect answer feedback
* Game-over and restart functionality
* PostgreSQL database integration
* Responsive and simple user interface

## Tech Stack

* Node.js
* Express.js
* PostgreSQL
* EJS
* HTML
* CSS
* Body-parser
* Dotenv

## Project Structure

flag-quiz-game/

├── public/

│   ├── images/

│   └── styles/

├── views/

│   └── index.ejs

├── index.js

├── package.json

├── package-lock.json


├── .gitignore

└── README.md

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/flag-quiz-game.git
```

Move into the project directory:

```bash
cd flag-quiz-game
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add:

```env
DB_USER=your_username
DB_HOST=localhost
DB_NAME=world
DB_PASSWORD=your_password
DB_PORT=5432
```

Run the application:

```bash
node index.js
```

Open in browser:

```bash
http://localhost:3000
```

## Database

Create a PostgreSQL database named `world` and add a `flags` table.

Example schema:

```sql
CREATE TABLE flags(
id SERIAL PRIMARY KEY,
name VARCHAR(50),
flag TEXT
);
```

## Future Improvements

* Add difficulty levels
* Add timer functionality
* Store high scores
* Add more quiz categories
* Improve UI design

## Author

Chandana N
