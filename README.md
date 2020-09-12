# Text Search

It is a full stack text search app working as search bar for seaching query based on the tags and query string.

# Preview

![preview image](./assets/images/preview.gif)

### API Code Explaination Video at https://emart-77f69.web.app/

### React App Code Explaination Video at https://emart-77f69.web.app/

# API Routes

1. /api/v1/question/create :-> To create new question in database.

   ```
   Fields Needed to Create Question :-
   1. query
   2. topic
   3. tag array
   ```

2. /api/v1/search :-> To search query based on input string from database.
   ```
   Fields Needed to Search Question :-
   1. searchKey
   ```

# Techstack

### HTML, SCSS, React, Rest API(Node JS), Mongo DB

# Instructions to install

1. Clone this repository from https://github.com/dheerajk7/AdmitKard-Text-Search.git
2. Install NPM if you have not installed yet.
3. Go to project directory and run these commands to run API server

   #### To install node Modules

   ```
   npm install
   ```

   #### To run Node JS API server

   ```
   npm start
   ```

4. Go to client directory which have react app inside project directory and run these commands to run react app

   #### To install node Modules

   ```
   npm install
   ```

   #### To run react app

   ```
   npm start
   ```

5. Go and check at http://localhost:3000

# Directory Structure

`/` - all code files <br>
`/config` - all configuration files <br>
`/controllers` - all controllers files <br>
`/models` - all database models files <br>
`/routes` - all routes files <br>
`/static` - all static files <br>
`/client` - all react app files <br>
`/client/src` - all react app code files <br>
`/client/src/components`- all react components files <br>
`/client/src/helpers` - all helpers files <br>
`/client/src/styles` - all SCSS styles files <br>

---
