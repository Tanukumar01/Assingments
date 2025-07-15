# Auth System

A simple authentication system with login and signup functionality. This project provides a basic user authentication flow using Node.js, Express, and MongoDB.

## Features
- User registration (Sign Up)
- User login
- Session management
- Simple frontend for authentication

## Live Demo
You can try the live demo here: [https://auth-ye6h.onrender.com/](https://auth-ye6h.onrender.com/)

## Project Structure
```
Auth/
  models/         # Mongoose models (User.js)
  public/         # Static frontend files (HTML, CSS, JS)
  routes/         # Express routes (auth.js)
  server.js       # Main server file
  package.json    # Project dependencies
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd Auth
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the `Auth/` directory with the following:
     ```env
     MONGODB_URI=your_mongodb_connection_string
     SESSION_SECRET=your_secret_key
     PORT=5000
     ```
4. Start the server:
   ```bash
   npm start
   ```
5. Open [http://localhost:5000](http://localhost:5000) in your browser.

## Usage
- Visit `/` for the login page.
- Click "Sign Up" to register a new account.
- After signing up, you can log in and access protected routes.

## API Example Screenshots

### 1. Successful Signup Request
![Signup Success](./assets/signup-success.png)

### 2. Successful Login Request
![Login Success](./assets/login-success.png)

## License
This project is for educational purposes. 