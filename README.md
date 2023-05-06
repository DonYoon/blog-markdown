# Markdown Blog Application

A full-stack web application built using Node.js, Express, MongoDB, and EJS. It allows users to create, edit, and delete articles with rich-text content using Markdown syntax. The application converts the Markdown input into clean, sanitized HTML for display on the web.

## Key Features

- Article Management: Users can easily create, edit, and delete articles with a user-friendly interface.
- Markdown Support: The application supports Markdown syntax, enabling users to format their articles with rich-text content, including headings, lists, links, and more.
- Sanitized HTML: The application uses the marked package to convert Markdown input into sanitized HTML, ensuring safe and clean content display.
- Responsive Design: The application is built using Bootstrap, making it fully responsive and mobile-friendly.
- Easy Deployment: The project can be easily deployed on various hosting platforms, such as Heroku or Netlify, with minimal configuration.

## Prerequisites

- Node.js v12.0.0 or higher
- npm v6.0.0 or higher
- MongoDB installed and running on your local machine

## Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the repository**
   
git clone https://github.com/yourusername/markdown-blog.git
cd markdown-blog

Replace `yourusername` with your GitHub username.

2. **Install dependencies**

npm install


3. **Ensure MongoDB is installed and running on your local machine**. Update the MongoDB connection string in the `server.js` file if necessary.

4. **Start the application**

npm start

Access the application in your browser by navigating to http://localhost:5000.

This Markdown Blog Application serves as an excellent showcase of full-stack web development skills and provides a solid foundation for building more advanced content management systems or web applications.
