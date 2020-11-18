## Posts Microservice

This nodeJS service uses Express, CORS, Axios, and Nodemon to create and list posts in our blog application.

This service is used by the React app in the client folder.

CORS is used because our app is listening on ports 4000 and 4001, but our React app is listening on port 3000. CORS resolves this conflict.

Service also uses 'crypto' and 'bodyParser', which are loaded from 'require' statements.

There is no database for this service. All of your posts and comments are held in memory. If the service is restarted, any previously store data will be gone.