# Markdown Blog Application

A full-stack web application built using Node.js, Express, MongoDB, and EJS. It allows users to create, edit, and delete articles with rich-text content using Markdown syntax. The application converts the Markdown input into clean, sanitized HTML for display on the web.

## Key Features

- Article Management: Users can easily create, edit, and delete articles with a user-friendly interface.
- Markdown Support: The application supports Markdown syntax, enabling users to format their articles with rich-text content, including headings, lists, links, and more.
- Sanitized HTML: The application uses the marked package to convert Markdown input into sanitized HTML, ensuring safe and clean content display.
- Responsive Design: The application is built using Bootstrap, making it fully responsive and mobile-friendly.
- Easy Deployment: The project can be easily deployed on various hosting platforms, such as Heroku or Netlify, with minimal configuration.

## Prerequisites

- [Node.js](https://nodejs.org/en/) v12.0.0 or higher
- [npm](https://www.npmjs.com/) v6.0.0 or higher
- [MongoDB](https://www.mongodb.com/) installed and running on your local machine

## Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the repository:**
   
   git clone https://github.com/DonYoon/blog-markdown.git

2. **Change to the project directory:**

   cd markdown-blog

3. **Install dependencies:**

   npm install

4. **Ensure MongoDB is installed and running on your local machine.** 
   
   Update the MongoDB connection string in the `server.js` file if necessary.

5. **Start the application:**

   npm start

6. **Access the application in your browser by navigating to http://localhost:5000.**
