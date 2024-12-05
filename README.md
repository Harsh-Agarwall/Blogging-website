# My Blog Application

This is a full-stack blog application built using React for the frontend and Node.js with Express and MongoDB for the backend. Users can create posts, search for posts by tags, and manage their own posts after logging in. The application uses JWT (JSON Web Tokens) for authentication and implements role-based access control.
You can visit my site it is deployed on render https://blogging-website-app.onrender.com

## Features

- **User Authentication**: Secure user login and signup using JWT authentication.
- **Post Creation**: Authenticated users can create blog posts with titles, content, and tags.
- **Search by Tag**: Users can search posts by tags and view the results.
- **Post Management**: Users can view their own posts, edit them, and delete them.
- **Responsive Design**: The frontend is designed to be responsive and user-friendly.

## Tech Stack

### Frontend
- **React**: JavaScript library for building user interfaces.
- **React Router**: For client-side routing.
- **Axios**: For making HTTP requests.
- **Bootstrap**: For responsive design and layout.

### Backend
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user and post data.
- **JWT (JSON Web Tokens)**: For secure user authentication.
## Folder Structure

The project is divided into two main directories: `client/` for the frontend and `server/` for the backend.
```
my-blog/
├── client/                  # React frontend application
│   ├── public/              # Public files (index.html, etc.)
│   ├── src/                 # Source code for React components and assets
│   ├── .gitignore           # Git ignore file for frontend
│   └── package.json         # Frontend dependencies and scripts
│
├── server/                  # Node.js backend application
│   ├── models/              # Mongoose models (Post, User, etc.)
│   ├── routes/              # API routes for handling requests (posts, auth, etc.)
│   ├── .env                 # Environment variables (database URL, JWT secret, etc.)
│   ├── .gitignore           # Git ignore file for backend
│   ├── index.js             # Entry point for the server
│   ├── package.json         # Backend dependencies and scripts
│   └── README.md            # Backend project documentation
│
├── .gitignore               # Global git ignore file for the entire project
└── README.md                # Project documentation
```

## Setting Up the Project

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or use a cloud database like MongoDB Atlas)
- npm or yarn

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/my-blog.git
cd my-blog
```
2. Set Up the Backend
Navigate to the server/ directory and install the backend dependencies:

```bash
cd server
npm install
```
Next, create a .env file in the server/ directory and add the following environment variables:

```env
DB_URI=mongodb://localhost:27017/my_blog
JWT_SECRET=your_jwt_secret_key
```
DB_URI is the MongoDB connection string.
JWT_SECRET is the secret key for encoding and decoding JWT tokens.
Now, start the backend server:

```bash
npm start
```
The backend should now be running at http://localhost:5000.

3. Set Up the Frontend
Navigate to the client/ directory and install the frontend dependencies:

```bash

cd client
npm install
```
To run the frontend:

```bash

npm start
```
The frontend should now be running at http://localhost:3000.
4. Accessing the Application
Once both the frontend and backend are running, you can access the blog application by opening http://localhost:3000 in your browser.

5. JWT Authentication
During login, the user will receive a JWT token, which will be stored in localStorage.
The token will be sent with requests to protected routes (like creating posts, viewing personal posts, etc.) via the Authorization header.

7. Creating a Post
Log in to your account.
Go to the Create Post page.
Enter a title, content, and tags for your post.
Click Submit Post to save it to the database.

9. Searching for Posts by Tags
Use the search bar in the navbar to search for posts by tags.
Enter a tag (e.g., tech) and click Search.
Posts with the selected tag will be displayed.

11. Editing or Deleting Your Posts
Go to the My Posts page to view all your posts.
You can edit or delete your posts from this page.
Additional Notes

.env File: Make sure not to commit your .env file to Git. Add it to your .gitignore to avoid exposing sensitive information.
JWT Token: Tokens are stored in the browser's localStorage. The token is sent with each request to protected routes.
