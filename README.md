# Storefront Backend Project

## Getting Started

This repo contains a Node and Express app for constructing a storefront API. To get started, clone this repo and run `yarn install` or `npm install` in your terminal at the project root.

## Technologies used
The application makes use of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing
- supertest for endpoint testing

## Setting up the database.

#### `NOTE`: 
- Database runs on port 5432 or port specified in the POSTGRES_PORT env variable. 
- Application runs on port specified in the PORT env variable.

#### 1. Create a database for the application. eg storeDb
#### 2. Create a testing database. eg storeDb_test



## Instructions to get this project up and running.

#### 1. Set `.env` variables as presented in the `.env.example` 
#### 2. Run `npm install` or `yarn install` to install dependencies.
#### 3. Run `npm run migrate-up` to run migrations on your database.
#### 4. Run `npm run watch` to start server. Server runs on port `8000`.

## Instructions for running tests

#### 1. Make sure project is not running on your assigned port.
#### 2. Change the value of `ENV` variable in the .env file to `test`.
#### 3. Run `npm run test` to run testing.

