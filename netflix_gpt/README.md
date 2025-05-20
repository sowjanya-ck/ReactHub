# netflix gpt
    - create react app
    - configured tailwand css
    - header 
    - routing of app
    - login and signup form
    form validation
    - useref hook
    -firebase setup
    - deploy to production

# feature 
login/sign up
    - sing in /sign up form
    -redirect to browse page

browse page ( ony after logged in)
    - main movie
        -trailer in the backgound
        -movie suggestions rows
            -n number of movies
netflixgpt
    -search bar
    - movie suggestions
    

rafce - shortcut to create the functional component


## steps
 - Header (bg- logo)
 - login form 
 - sing up form

## sing in signup form validation
    - formik library is good to use for form
    - userRef hook -(refer the input field)

## firebase configuration
    - npm install firebase
    -  npm install -g firebase-tools 
    - firebase login - command to check login else reidict to login 
    - firebase init (select build as your public directory - if its app created using create react app)
    - firebase deploy
         app is deployed now .(url - https://netflix-gpt-964f2.web.app/)
    
    - authentication done
## redux toolkit
    - npm i -D @reduxjs/toolkit
    - create a redux store with user account
    
    
## bug fixes
    - without login user shoud not have the access to browse page. and vice versa, so after onAuthStateChanged check , can redirect to browse or login page,but
    - we can only use navigate inside the component or child component of the routes.. for example body ,login ,hader. 
    - so better keep inside the header becuase header used in evrywhere.
    - create constants file to keep all constanst var
    
## TMDB api
    - register for an tmdb api and create an application && get access token 
    -make an api call for movies 
    - 



### Notes
    React.StrictMode is a development tool in React that helps identify potential problems in your application. It intentionally invokes certain lifecycle methods and effects twice in development mode to catch unexpected side effects or bugs. This behavior only occurs in development (local)and does not affect the production build.
