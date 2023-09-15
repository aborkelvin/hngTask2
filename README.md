# HNG TASK 2 - REST API FOR CRUD OPERATIONS ON A PERSON RESOURCE

## Project Description

This is a simple REST API that enables CRUD (Create, Read, Update, Delete) operations on a "person" resource. It was developed as part of the second task for the HNG Internship program.

## Table of Contents

1. [Getting Started](#getting-started)
   - [Installation](#installation)
   - [Usage](#usage)
2. [Endpoints](#endpoints)
3. [Technologies Used](#technologies-used)
4. [Testing](#testing)
5. [Deployment](#deployment)

## Getting Started

### Installation

To run or deploy this API, ensure that you have Node.js and npm (Node Package Manager) installed. Then, follow these steps:

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

### Usage

To run the API locally, use the following command:

```bash
npm start
```
The API will be accessible at http://localhost:3000/api. You can make HTTP requests to this URL to interact with the endpoints.

#### Endpoints