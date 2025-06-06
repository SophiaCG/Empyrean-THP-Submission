# Take Home Code Test Instructions

## Overview

Your task is to build a small mobile app that interacts with our mock API server. The goal is to simulate a realistic app that requires login, displays a list of data, and allows navigation into detail screens.

This test is designed to be practical, not abstract — no algorithm puzzles here. We want to see how you approach real-world development problems: API interaction, UI structure, data flow, and error handling.

Remember that you will be expected to be able to explain every part of your app's code and design. If you use AI/ChatGPT to help you build this, be up front and prepared to explain what you used it for and why.

## Requirements

You should:
* Start with a login screen (use the provided login endpoint)
* After login, fetch and display a list of items/posts
* Show the author/user for each item
* When tapping/clicking an item, show:
    * Item details
    * Associated comments
    * Author info (can be basic or in a separate view)

## Bonus Ideas (Optional)

* Not required, but appreciated if you have time:
* Add local caching or offline support
* Add loading and error states
* Allow users to favorite an item
* Add unit tests, animations, or visual polish

## Authentication

All endpoints (except `/login`) require an `Authorization` header set to `Bearer: <jwt-token>`. 
This token is returned by the `/login` endpoint if the credentials are correct.



# Mock API Server

This is a mock API server to be used as part of a take-home coding exercise. It simulates a real backend with authentication, related data resources, and optional chaos mode for testing delays and errors.

## 🔧 Requirements

- Node.js (v14 or later)
- npm

## 🚀 Getting Started

1. Install dependencies:

```bash
npm install
```
	
2.	Start the server:

```bash
npm start
```

3.	The server will be running at:

```
http://localhost:3000
```

## Chaos Mode (Enabled by Default)

This server includes a “chaos mode” that randomly introduces:
•	💥 Simulated 500 server errors (15% chance)
•	⏳ Artificial response delays (30% chance)
•	💣 Sometimes both at once!

This is meant to help test real-world error handling, loading states, and resilience.

To disable chaos globally:
1.	Create a file called .env in the project root:

CHAOS=off

2.	Restart the server after editing .env.


## Authentication

All endpoints (except /login) require this HTTP header:

Authorization: Bearer fake-jwt-token

This token is returned by the /login endpoint when you use the correct credentials.

## API

🧪 Available Endpoints

**Public**
* POST /login (use username: test, password: password123 for successful login)

**Protected (require auth token)**
* GET /items
* GET /items/:id
* GET /items/:id/comments
* GET /users
* GET /users/:id


# Submitting Your Project

Please submit your code via GitHub, GitLab, or as a zip file
Include a short README.md explaining:
* How to run your app
* Any assumptions or tradeoffs
* What you’d improve with more time

