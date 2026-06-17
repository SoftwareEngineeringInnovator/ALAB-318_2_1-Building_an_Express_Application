# ALAB 318.2.1 - Building an Express Application

## Description

This project is a small cybersecurity themed Express application. The goal of this lab was to practice building an Express app using routes, EJS views, middleware, static files, form handling, route parameters, and file downloads.

The app is called **CyberSafe Express App**. It includes a home page, an about page, cybersecurity tips pages, a form, a success page, a local image, and a download button.

## Technologies Used

- Node.js
- Express
- EJS
- HTML
- CSS
- Git and GitHub

## Features

- Express server setup
- EJS template engine
- Multiple EJS views
- Navigation between pages
- Static CSS file served from the `public` folder
- Local image served from the `public/images` folder
- Form that sends a POST request
- Success page that displays submitted form data
- Custom middleware that logs request information
- Route parameter example using `/tips/:topic`
- Download route using `res.download()`

## Project Structure

```text
ALAB-318_2_1-Building_an_Express_Application/

    public/
        images/cybersecurity.jpg
        styles.css
    
    views/
        about.ejs
        index.ejs
        success.ejs
        tips.ejs

.gitignore
index.js
package.json
package-lock.json
README.md
```

## Author

Fredy Chilito-Ramos - Software Engineering Innovator - PerScholas Software Engineering Student 
Created as part of the Per Scholas Software Engineering Program.
Project Topic: Cybersecurity.