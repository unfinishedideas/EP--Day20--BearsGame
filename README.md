## Installation
* Clone repository
* Navigate in terminal and run `npm run build`
* next run `npm run start` to start the dev server
* in your browser navigate to __localhost:8080__

If you are getting issues with npm not finding the script 'build' change the `&` to a `;` after the script is called.

ie:   `"scripts": {   
    "start": "npm run build; webpack-dev-server --open --mode development",`
