# blog_using_http
Created a blog using http methods performing CRUD operations..
This repository contains a full-stack blogging application built using Node.js, Express, EJS, and Axios, designed around a decoupled architecture that separates a user-facing client interface from a RESTful API data layer. The client server (running on port 3000) manages dynamic route rendering using EJS templates like index.ejs and modify.ejs, while the backend API server (running on port 4000) manages full CRUD operations (Create, Read, Update, Delete) on an in-memory data store using structured JSON endpoints. To run the application locally, clone the workspace, run npm install, and launch both servers in separate terminal windows using node index.js and node server.js before navigating to http://localhost:3000 in your web browser.

# Full-Stack Blog Application

A complete, full-stack blogging web application built using **Node.js**, **Express**, **EJS**, and **Axios**. The project is split into a user-facing frontend server and a decoupled RESTful API backend data-store layer to demonstrate clean architectural separation.

## 🚀 Features
* **View All Posts:** Dynamically fetches and displays blog entries.
* **Create New Posts:** Add new content with titles, authors, and body text.
* **Edit/Patch Posts:** Modify specific fields of an existing post seamlessly.
* **Delete Posts:** Easily remove blog items from the data store.
* **Architecture Separation:** Frontend UI handles rendering, while Backend API serves purely structured JSON data.

---

## 🛠️ Tech Stack
* **Frontend:** Node.js, Express.js, EJS (Embedded JavaScript templates), Axios, HTML/CSS
* **Backend:** Node.js, Express.js, Body-Parser (In-Memory data persistence)

---

## 📂 Project Structure
* `index.js` — The RESTful API Backend Server (Runs on port `4000`)
* `server.js` — The Client-Facing Frontend Server (Runs on port `3000`)
* `views/` — EJS templates (`index.ejs`, `modify.ejs`) for UI rendering
* `public/` — Static assets and CSS styling sheets

---

## 💻 Getting Started

Follow these steps to get your local environment up and running.

### 1. Installation
Clone the repository and install dependencies in your root directory:
```bash
npm install

2. Running the Application
Because this is a decoupled stack, you need to run both servers in separate terminal windows.
Step A: Start the Backend API Server (Port 4000)
# Using standard node
node index.js

# Or using nodemon for live updates
nodemon index.js
Step B: Start the Frontend UI Server (Port 3000)
Open a new terminal window or tab, then execute:
node server.js
3. Accessing the Application
Open your web browser and navigate to:
http://localhost:3000
