## Microservices with Node JS and React

### Work in progress

These are the files from Stephen Grider's excellent Udemy course. I am running these NodeJS and React files on a Ubuntu 20.04 VM in WSL2.

NPM Packages: Express, Axios, CORS, Nodemon

You will need to install Postman to test the POST and COMMENTS services.

You will also need create-react-app for the CLIENT application.

The purpose of this repo is to store the relevent files and instructions on how to use them, following the examples in the course.

The CORS (Cross Origin Resource Sharing) error that occurs (before you install and run CORS) happens because our React app is running on port 3000, and is using resources on ports 4000 and 4001. Our POSTS service runs on port 4000. Our COMMENTS service runs on port 4001.

Without CORS running, the POSTS and COMMENTS services will fail. We will see a better CORS solution later in the course.

To see the CORS error, use the NETWORKING tab fron Firefox or Chrome web developer tools.

## POSTMAN

You can test the POST and COMMENTS microservices using POSTMAN.

1. Run POSTS on port 4000 (WSL Ubuntu 20.04)
2. Run POSTMAN in Windows
3. Select 'post' in POSTMAN
4. BODY tab is selected. Enter title
5. Service will generate id for post (hex)
6. If post title sucessfully sent, then display 201-create code
7. Since the post titles are going into an array, it will accumulate 
   as long as the service is running
8. The array is cleared when the service is no longer running

### AXIOS

Promise based HTTP client for the browser and node.js

https://www.npmjs.com/package/express

### EXPRESS

Fast, unopinionated, minimalist web framework for node.

https://www.npmjs.com/package/express

### CORS
CORS is a node.js package for providing a Connect/Express middleware that can be 
used to enable CORS with various options.

https://www.npmjs.com/package/cors

### NODEMON
nodemon is a tool that helps develop node.js based applications by automatically 
restarting the node application when file changes in the directory are detected.

https://www.npmjs.com/package/nodemon

