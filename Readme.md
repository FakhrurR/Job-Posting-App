# Restful Api Jop Posting App

<p align="center">
  <a href="https://nodejs.org/">
    <img title="Node JS" src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>

---

## Table Of Contents

- [Introduction](#Introduction)
- [Prerequiste](#Prerequiste)
- [Feature](#Feature)
- [Stacks](#Stacks)
- [Installation](#Installation)
  - [Clone](#Clone)
  - [Create Environment Variable](#Create-Environment-Variable)
  - [Start Development Server](#Start-Development-Server)
    <!-- - [Run server development](#Run-server-development) -->
  - [Build For Production](#Build-For-Production)
- [API Docs](#API-Docs)
  - [Jobs](#Jobs)
  - [Categories](#Category)
  - [Company](#Company)
  - [User](#User)
  - [Auth](#Auth)
- [License and Support](#License-and-Support)

---

---
## Introduction

Restful Api Job Posting app is an application program interface (API) that uses HTTP requests to GET, PUT, POST and DELETE data to people that want a job or company that want hire an employee.

---
## Prerequiste

- Node.js - Download and Install [Node.js](https://nodejs.org/en/) - Simple bash script to manage multiple active node.js versions.

- Nodemon - Download and Install [Nodemon](https://nodemon.io/) - nodemon is a tool that automatically restarting the node application when file changes in the directory are detected.
---
## Feature

- [x] CRUD Jobs
- [x] CRUD Companies
- [x] Validation schema
- [x] Search job by name
- [x] Sort job by name, company, and date updated
- [x] Pagination
- [x] Upload logo
- [x] Allowed CORS
- [x] Authentication with JWT

## Stacks

- NodeJS
- MySQL
- ExpressJS
- JWT
- Bcryptjs
- multer

## Installation

### Clone
```bash
$ git clone https://github.com/FakhrurR/Job-Posting-App.git
$ cd Job-Posting-App
$ npm install
```
---

### Create Environment Variable
```bash
$ cp .env.example .env
$ nano .env
```
```env

# DATABASE
PORT = 'port for express'

DB_HOST = 'your_db_host'
DB_USER = 'your_db_user'
DB_PASSWORD = 'your_password_db'
DB_NAME = 'database_name'
DB_PORT = ''

# SECRET KEY
API_JWT_SECRET=''
```
---
### Start Development Server
```bash
$ npm start
```
---
### Build For Production
```bash
$ npm build or yarn build
```
---

## API Docs

### Jobs

| Method | Endpoint        | Description       | Request Param       | Request Body                                                                                                        | Request Query                                                                                         |
| ------ | --------------- | ----------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| GET    | /job    | Get jobs          | -                   | -                                                                                                                   | `name`: STRING, `company`: STRING,`limit`: NUMBER, `page`: NUMBER, `sortby`: STRING,`orderby`: STRING |
| GET    | /job:id | Get one job by id | `id`: STRING (UUID) | -                                                                                                                   | -                                                                                                     |
| POST   | /job    | Create new job    | -                   | `name`: STRING,`location`: STRING,`salary`:STRING,`description`: STRING ,`category_id`: STRING, `compant_id`:STRING | -                                                                                                     |
| PATCH  | /job:id | Update job        | `id`: STRING (UUID) | `name`: STRING,`location`: STRING,`salary`:STRING,`description`: STRING ,`category_id`: STRING, `compant_id`:STRING | -                                                                                                     |
| DELETE | /job:id | Delete job        | `id`: STRING (UUID) | -                                                                                                                   | -                                                                                                     |

### Company

| Method | Endpoint              | Description        | Request Param       | Request Body                                                                   |
| ------ | --------------------- | ------------------ | ------------------- | ------------------------------------------------------------------------------ |
| GET    | /company     | Get company        | -                   | -                                                                              |
| GET    | /company/:id | Get one company    | `id`: STRING (UUID) | -                                                                              |
| POST   | /companiy     | Create new company | -                   | `name`: STRING,`location`: STRING,`logo`: STRING (IMAGE),`description`: STRING |
| PATCH  | /company/:id | Update company     | `id`: STRING (UUID) | `name`: STRING,`location`: STRING,`logo`: STRING (IMAGE),`description`: STRING |
| DELETE | /company/:id | Delete company     | `id`: STRING (UUID) | -                                                                              |

### Category

| Method | Endpoint               | Description         | Request Param | Request Body       |
| ------ | ---------------------- | ------------------- | ------------- | ------------------ |
| GET    | /categories     | Get category        | -             | -                  |
| GET    | /categories/:id | Get one category    | `id`: INT     | -                  |
| POST   | /categories     | Create new category | -             | `category`: STRING |
| PATCH  | /categories/:id | Update category     | `id`: INT     | `category`: STRING |
| DELETE | /categories/:id | Delete category     | `id`: INT     | -                  |

### User

| Method | Endpoint          | Description  | Request Param       | Request Body                        | Request Headers |
| ------ | ----------------- | ------------ | ------------------- | ----------------------------------- | --------------- |
| GET    | /user     | Get all user | `id`: STRING (UUID) | -                                   | -               |
| GET    | /user/:id | Get one user | `id`: STRING (UUID) | -                                   | -               |
| PATCH  | /user/:id | Get one user | `id`: STRING (UUID) | `email`: STRING, `password`: STRING | `bearer`: token |
| DELETE | /user/:id | Get one user | `id`: STRING (UUID) | -                                   | -               |

### Auth

| Method | Endpoint                | Description   | Request Headers | Request Body                        |
| ------ | ----------------------- | ------------- | --------------- | ----------------------------------- |
| POST   | /user/login/    | Login user    | -               | `email`: STRING, `password`: STRING |
| POST   | /user/signup/ | Register user | -               | `email`: STRING, `password`: STRING |

---

---
## License and Support

For API support, please contact me
[FakhrurR](https://github.com/FakhruR 'FakhrurR')

Copyright © 2019 by Fakhrur Rijal
