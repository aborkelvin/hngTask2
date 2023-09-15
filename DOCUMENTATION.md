# HNG TASK 2 - REST API DOCUMENTATION

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
   - [Option 1: Local Installation](#option-1-local-installation)
   - [Option 2: Using the Deployed API](#option-2-using-the-deployed-api)
3. [API Endpoints](#api-endpoints)
   - [CREATE: Adding a New Person](#create-adding-a-new-person)
   - [READ: Fetching Details of a Person](#read-fetching-details-of-a-person)
   - [UPDATE: Modifying Details of an Existing Person](#update-modifying-details-of-an-existing-person)
   - [DELETE: Removing a Person](#delete-removing-a-person)
4. [Technologies Used](#technologies-used)
5. [Testing](#testing)
6. [Deployment](#deployment)

## Introduction

Welcome to the documentation for the HNG Task 2 REST API. This API enables CRUD (Create, Read, Update, Delete) operations on a "person" resource. It was developed as part of the second task for the HNG Internship program.

## Getting Started

### Option 1: Local Installation

#### Installation

To run or deploy this API locally, ensure that you have Node.js and npm (Node Package Manager) installed. Then, follow these steps:

1. Clone this repository to your local machine.

2. Navigate to the project directory using your terminal.

3. Create a `.env` file in the root directory of the project and add your MongoDB connection URL as follows:

   ```plaintext
   MONGODB_URL=mongodb://<username>:<password>@cluster0.bfdeg7e.mongodb.net/<database_name>
   ```
4. Run the following command to install the required packages:

   ```bash
   npm install
    ```
    This command will automatically install all the necessary dependencies specified in the `package.json` file.

To run the API locally, use the following command:

    ```base
    npm start
    ```

The Api will be accessible at http://localhost:3000/api. You can make HTTP requests to this URL to interact with the endpoints.

### Option 2: Using the Deployed Api

The API has been deployed on Render and is accessible at the following URL:

https://anthonyabor-hngtask2.onrender.com/api

You can make HTTP requests directly to this URL to interact with the deployed API without the need for local installation.


## Api Endpoints

### CREATE: Adding a New Person

- **Endpoint:** `/api`
- **Method:** POST
- **Description:** Add a new person to the database.
- **Example Request:** 
    ```http
    POST baseUrl/api
    Content-Type: application/json

    {
        "name": "Michelle Antoine Griezzman",
    }
    ``` 
- **Example Response:**
    ```http
    {
        "name": "Michelle Antoine Griezzman",
        "_id": "650484463b2ac86ea8e7159b",
        "__v": 0
    }

    ```

### READ: Fetching details of a person

- **Endpoint:** `/api/:user_id`
- **Method:** GET
- **Description:** Retrieve details of a specific person by their ID.
- **Example Request:** 
    ```http
    GET baseUrl/api/650484463b2ac86ea8e7159b
    ```
- **Example Response:**
    ```http
    {
        "name": "Michelle Antoine Griezzman",
        "_id": "650484463b2ac86ea8e7159b",
        "__v": 0
    }

    ```



### UPDATE: Modifying details of an existing person

- **Endpoint:** `/api/:user_id`
- **Method:** PATCH
- **Description:** Update details of a specific person by their ID.
- **Example Request:** 
    ```http
        PATCH baseUrl/api/650484463b2ac86ea8e7159b
        Content-Type: application/json

        {
            "name": "Antoine Griezzman"
        }
    ```
- **Example Response:**
    ```http
    {
        "name": "Antoine Griezzman",
        "_id": "650484463b2ac86ea8e7159b",
        "__v": 0
    }

    ```


### DELETE: Removing a person

- **Endpoint:** `/api/:user_id`
- **Method:** DELETE
- **Description:** Delete a specific person by their ID.
- **Example Request:** 
    ```http
        DELETE baseUrl/api/650484463b2ac86ea8e7159b        
    ```
- **Example Response:**
    ```
        Person with name Antoine Griezman and id 650483b43b2ac86ea8e71591 has been deleted
    ```


#### Technologies Used

- JavaScript (Node.js)
- Express.js
- Mongoose
- dotenv
- MongoDB

#### Testing

All tests for this API were conducted using Postman, a popular API testing tool. 

#### Deployment

The API has been deployed on Render and is accessible at the following URL:

[https://anthonyabor-hngtask2.onrender.com/api](https://anthonyabor-hngtask2.onrender.com/api)


