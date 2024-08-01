# User Information Collection System

## Overview

This project uses the MEAN Stack to create a dynamic web application. This time, we utilize the MYSQL database to store information. Angular is used on the front-end and we also have the advantage of adding controllers so that the time of submission on the form is posted in real (local) time. CSS is used for styling the page. We are also able to post all information from the MYSQL database directly on the front-end, so anything manually inserted from that end will be displayed as well. We use the Node Express server. The advantage is having CORS. 

The system consists of four main components:

1. **Angular Frontend**: A form for users to submit their information.
2. **CSS Styling**: Styles for the frontend form.
3. **Node.js Express Backend**: A server to process the form submission and interact with the MySQL database.
4. **JavaScript Controllers**: Functions to manage the form data and communication with the backend.

## Components

### Angular Frontend

#### Description

The frontend is an AngularJS-based form that allows users to enter their name, age, city, and hobby. This information is sent to the backend for processing and storage in a MySQL database.
