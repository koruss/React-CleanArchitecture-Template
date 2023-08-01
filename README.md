![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/vite-%2523646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Zustand](https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Axios](https://img.shields.io/static/v1?style=for-the-badge&message=Axios&color=5A29E4&logo=Axios&logoColor=FFFFFF&label=)

# React Project Template Clean Architecture

## Vite + React + Typescript 

This template serves as the base for creating quickly and easily
applications with React, using the SWC transpiler for Typescript, also using Vite for the build and server creation, internally uses React Router Dom for the routes control, axios for the HTTP client and Zustand for the state management.

Inside the project are two single pages the main site and a login site

## About the Structure
This boilerplate tries to follow the most important principles of the Hexagonal architecture using three mayor layers ( Domain, Application, Infraestructure) also it uses Dependency Injection to control the adapters and ports used.

Lets explain how the structure works:

- **The infraestructure layer** is in charge to manage all the exit or entrance of data to the application, for example: database connections, APIs, UI, etc. For that reason, all the React related, is located in the Infraestructure layer, the same happens with the axios and the zustand store

- **The Application layer** manage all the use cases of the application, for example the archive of data, change personal data, etc. In this case, the application contains the UserService in charge of the login logic and the Data transfer objects.

- **The Domain layer** Contains the entities or domain objects, in this case the domain layer also contains the ports interfaces, some literature place it on the application layer, however, because of the abstract nature of the driven ports , is placed in the Domain objects.

Plus this layers there is a fundamental part of the solution, the **dependency injection manager** ( DI ),  which will be in charge of establish which adapter will be used and automatically inject with the implementations of the adapter once the port is called.

## How to use
 There are some requisites to run the application

        - Node.JS 18 +

### Installation
First you will need to install all the modules and libraries using the following command:
 ```
    npm install
 ```

To execute the application you can run the following command:
```
    npm run dev
```



This will open the server in your localhost using port 5173 by default [Localhost][def]

[def]: http://localhost:5173/

Also the project is organized using **EsLint** to use it you can run the command 
```
  npx eslint --init 
```
