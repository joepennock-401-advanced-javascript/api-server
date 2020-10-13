<!---
[ANOTHER README EXAMPLE HERE](https://github.com/codefellows/seattle-javascript-401n17/blob/master/reference/submission-instructions/labs/example/README.md)
--->
# LAB - Class 08

## Project: API Server

### Author: Joe Pennock

### Links and Resources

- [ci/cd](https://github.com/joepennock-401-advanced-javascript/api-server/actions)
- [back-end server url](#) - N/A
- [front-end application](#) - N/A
- [Current PR Request](https://github.com/joepennock-401-advanced-javascript/api-server/pull/6)
- [API Swagger Documentation](https://github.com/joepennock-401-advanced-javascript/api-server/blob/master/docs/openapi.json)

### Setup

First, clone this repo to your local machine. Copy/paste this into the desired location and clone it using `git clone <path>`:
```
https://github.com/joepennock-401-advanced-javascript/api-server.git
```

Initial project setup will require a few dependencies to be installed from `npm`. First, initalize a new project by running `npm init` and following the prompts to enter basic project info. This process will create a `package.json` and set up ability to install new `npm` dependencies. Next, install the required dependencies using the `npm i <package name>` command:
- `dotenv` - allows access to environemntal vairables
- `express` - a server framework for Node.js.
- `uuid` - will be used to add IDs to each requerst added to the in memory 'database' (NOTE: will be obsolete during the next phase when MongoDB is added to the project)
- `jest` - a testing framework (only necessary for the dev process or if you would like to run your own tests)
  - `@codefellows/supergoose` - A testing package used to help when testing servers and databases. This package sets up a mock server and DB to prevent tests from posting data to the production database.

#### `.env` requirements (where applicable)

- `PORT` - 3000
- `MONGODB_URI` - mongodb://localhost:27017/api-server

<!---
- `PORT` - Port Number
- `MONGODB_URI` - URL to the running mongo instance/db
-->

#### How to initialize/run your application (where applicable)

- This server is currently operating on `http://localhost:3000`. Once the repo has been cloned and your `.env` file set with the correct port, run this command to connect to your new server:
```
node index.js
```
This will connect the server to whatever port you have in the `.env`, which in our case is 3000 for the local host. Now, you server is up and running and can now receive requests and send a responses back. 

For testing purposes, you will want to use an API testing tool such as the CLI based [httpie](https://httpie.org/) or the [postman](https://www.postman.com/) or [insomnia](https://insomnia.rest/) GUI applications. Once youu have either of those set up, you can send `GET`, `POST`, `PUT` and `DELETE` requests to your server on `localhost:3000` and receive back responses in your API testing tool of choice.

<!--- #### How to use your library (where applicable) --->

#### Tests

To run tests, simply type the command `npm test server.test.js`. This will run all unit tests for the server file. Currently, there are unit tests set up for each of the two types of routes, `products` and `categories`. 
- There are tests to affirm that the error handler for `404` errors is working as intended. 
- There are also tests to affirm that when using a `POST` route or `GET` route, you return a `201` or `200` response, respectively, indicating that a new record was successfully added or retrieved.

<!---
- How do you run tests?
- Any tests of note?
- Describe any tests that you did not complete, skipped, etc
--->

#### Collaboration

[Joseph Zabaleta](https://github.com/joseph-zabaleta)
[Diane Stephani](https://github.com/dianestephani)
Ben Hill

#### UML

Initial draft of the project UML. 
![Lab 07 UML](./assets/api-server-lab-07.jpeg)
