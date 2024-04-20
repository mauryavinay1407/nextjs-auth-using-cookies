# Next.js Authentication using cookies

This is a simple Next.js application with authentication using cookies and user's data stored in mongoDB database. It allows users to sign up, log in, and log out securely.

## Features

* User authentication with email and password
* Sign up, log in, and log out functionality
* Password hashing for security
* Session management with JWT tokens
* Includes middlewares,zod validations,loader and many more functionalities
* MongoDB database integration

## Technologies Used

* **[Next.js](https://nextjs.org/)**: React framework for server-rendered applications.
* **[mongoDB](https://www.mongodb.com/)**: React framework for server-rendered applications.
 * **[Tailwindcss](https://tailwindcss.com/)**: Tailwind CSS for responsive design.
 * **[Mongoose](https://mongoosejs.com/)**: MongoDB object modeling for Node.js.
* **[bcryptjs](https://www.npmjs.com/package/bcryptjs)**: Library for password hashing.

 # Installation
* Clone the repository:

```bash
git clone https://github.com/mauryavinay1407/nextjs-auth-using-cookies.git
```
* Install server dependencies:
```bash
cd nextjs-authentication
npm install
```
* Set up MongoDB:
```bash
MONGODB_URI=mongodb://localhost:27017/your-database
```
* Start the development server:
```bash
npm run dev
```

**Open the app in your browser:** The Next.js development server should now be running. Open http://localhost:3000 in your web browser to view the app
