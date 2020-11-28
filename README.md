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