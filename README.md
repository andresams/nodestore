# Nodestore

This is a simple sample store created with ReactJS, NodeJS, MongoDB and Bootstrap.

## Project Structure

 - /api — Contains the NodeJS API with all endpoints related to products, categories, orders and customers
 - /client — Home to the ReactJS client
 - /data — MongoDB storage directory
 - /mongoseed — Seeds the database with product and category data
## How to run
 
- First time: Use the commands `docker-compose build` and `docker-compose up`. This will build up all the necessary containers and also seed the MongoDB with the product and category data.
- Use just `docker-compose up` after building the containers for the first time.

# How to access the website

 - ReactJS Client — http://localhost:3000/
 - NodeJS API — http://localhost:8000/
