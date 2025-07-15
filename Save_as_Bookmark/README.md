# Save as Bookmark

A web application that allows users to save and manage bookmarks easily. This project provides a simple interface to add, view, and organize your favorite links.

## Features
- Add new bookmarks with title and URL
- View a list of saved bookmarks
- Delete bookmarks
- User-friendly interface

## Live Demo
You can try the live demo here: [https://assignments-2bnp.onrender.com/](https://assignments-2bnp.onrender.com/)

## Project Structure
```
Save_as_Bookmark/
  client/         # Frontend React app
  server/         # Backend Node.js/Express API
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- (Optional) MongoDB if the backend uses a database

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd Save_as_Bookmark
   ```
2. Install dependencies for both client and server:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```
3. (Optional) Set up environment variables for the backend if required (e.g., database connection string).
4. Start the backend server:
   ```bash
   npm start
   ```
5. Start the frontend client (in a new terminal):
   ```bash
   cd ../client
   npm run dev
   ```
6. Open [http://localhost:5173](http://localhost:5173) in your browser for the frontend.

## Usage
- Add a new bookmark by entering the title and URL.
- View your saved bookmarks in a list.
- Delete bookmarks you no longer need.

## License
This project is for educational purposes. 