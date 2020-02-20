## Bears Game (Tamagotchi clone)
### Be forewarned
This site is not very attractive. But I felt it was worth showcasing due to the fact that it is able to call an API and pull images from it to add to a dynamic object.M
## Installation
* Clone repository
* Navigate in terminal and run `npm run build`
* next run `npm run start` to start the dev server
* If it does not open automatically navigate in your browser to __localhost:8080__

If you are getting issues with npm not finding the script 'build' change the `&` to a `;` after the script is called.

ie:   `"scripts": {   
    "start": "npm run build; webpack-dev-server --open --mode development",`
