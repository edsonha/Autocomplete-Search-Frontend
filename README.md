# Autocomplete-Search-Frontend

Build using React that calls GitHub Search API via [back-end API](https://github.com/edsonha/Autocomplete-Search-Backend).
The [web application](https://autocomplete-search-frontend.herokuapp.com/) is hosted on Heroku.

\*App Limitation = only 30 calls / minutes allowed by GitHub Search API

## To run on local environment

```
  1. Start your backend server
  2. npm install
  3. Create new .env.development.local file
  4. Put this file in .env.development.local file
     REACT_APP_API_URL=http://localhost:3001
  5. npm start
```

## Run test

```
  npm test
```
