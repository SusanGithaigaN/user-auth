# User Auth for login

## About the project

A login/signup page that will allow users to view some content after signing up and then login.

## Setup Requirements

- Ruby version : **2.7.4**
- Postman (for testing API endpoints)
- React Router Dom version 6

## Setup Installation

```
    * Clone the repository
    * To set up the backend, run:
        - bundle install
    * To set up the frontend, run:
        - npm install --prefix client
    * Run the following commands to get the entire project running:
        - foreman start -f Procfile.dev
    * On the client directory, run the following command to install react-roter-dom
        - npm install react-router-dom@6
    * For installation of React mui, run:
        - npm i mdb-react-ui-kit

```

# user-auth

> POST
```
    /users
```

* Create a new user/ signup
```
    {
        name: "string",
        tel_no: "string",
        email: "string",
        password: "string",
        username:"string"
    }
```

* Response
```
    201 Created
```

> POST (Login)
```
    /login
```

* User login
```
    {
        username: "string",
        password: "string"
    }
```

* Response
```
    201 created
```
