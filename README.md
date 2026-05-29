# 🎓 Study Planner

An AI-powered Study Planner Agent built for the **Pirates of the Coral-Bean Hackathon** by WeMakeDevs.

CoralStudy AI helps students organize assignments, notes, schedules, deadlines, and priorities using intelligent planning and Coral-inspired structured querying concepts.

---

# Features

## Assignment Management

* Add assignments with:

  * Subject
  * Deadline
  * Time
  * Priority
  * Notes

## AI Study Assistant

Ask questions like:

* What should I study today?
* Any overdue tasks?
* How many pending assignments?
* Which tasks are completed?

## AI Study Recommendation

The system intelligently recommends which task should be completed first based on:

* Deadline
* Time
* Priority

## Task Status Tracking

* Pending Tasks
* Completed Tasks
* Mark tasks as completed permanently

## Overdue Detection

Automatically detects overdue assignments.

## Notes Support

Users can store study notes and reminders for every assignment.

## Schedule Section

Displays a simple daily class schedule for better study planning.

## Coral Query Demo

Demonstrates Coral-inspired SQL-style querying over assignment data.

Example queries:

```sql
SELECT * FROM assignments
WHERE priority = 'High';
```

```sql
SELECT * FROM assignments
WHERE completed = false;
```

```sql
SELECT * FROM assignments
WHERE completed = true;
```

---

# Coral Concepts

CoralStudy AI follows Coral-inspired structured retrieval and query-based planning concepts.

The application treats assignment data as structured queryable information and performs intelligent filtering operations similar to Coral workflows.

The AI assistant dynamically retrieves:

* High priority tasks
* Pending assignments
* Completed work
* Overdue tasks
* Nearest deadlines

This creates an agent-like study planning workflow inspired by Coral’s structured querying approach.

---

# Tech Stack

## Frontend

* React.js
* CSS

## Backend

* Node.js
* Express.js

## Storage

* JSON File Storage

---

# Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/mummanavasanthi/Study_Planner.git
```

---

## 2️⃣ Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## 3️⃣ Backend Setup

Open another terminal:

```bash
cd server
npm install
node index.js
```

Backend runs on:

```bash
http://localhost:5000
```

---

# Demo Features

* Add assignments
* Add notes
* AI recommendations
* AI chat assistant
* Mark tasks completed
* Overdue detection
* Coral query demo
* Schedule section

---

# 🔮 Future Improvements

* Database Integration
* Authentication System
* Real AI APIs (Gemini/OpenAI)
* Dynamic Schedule Management
* Notifications & Reminders

---

# Project Goal

The goal of CoralStudy AI is to simplify academic workflow management using AI-assisted planning and Coral-inspired structured retrieval concepts.

