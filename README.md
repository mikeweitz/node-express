# Yeoman Angular + Express Server 

Two separate generators used to scaffold this project:
/client => created with yeoman using '$ yo angular'
/server => created by running '$ express'

express server for TEST / PROD:
http://localhost:3000

grunt server for front end asset watch. 
You really only need this to verify the front end server is recompiling assets as they change:
http://localhost:9000

The express server can be run in develop or deploy environments 
from the '/server' directory:
$ npm test  		# express will serve angular app from the /client folder
$ npm start  		# express will serve the compiled angular app from the /server/dist folder

In TEST mode, you might also want the grunt webserver running the /client folder 
to keep an eye on sass files, etc... run the following in '/client' 
$ grunt serve


### Local Development
Build out your angular app using Yeoman scaffolding tools.
For ex - to add a new route to the app, run the following command in '/client'
$ yo angular:route [routename]

That will add the required files in the right places includig:
- controller
- view
- udpate app.js with the new route


There's a lot of short cut subgenerators to keep the scaffold clean.
For a list of available commands, see:
* https://github.com/yeoman/generator-angular


### Styles
If you just need to quickly compile the sass in the TEST environment, 
in the '/client' folder, run
$ grunt styles

### Build
To run a full build process on the front end code, and copy files into 
the '/server/dist' folder for deploy, from '/client' run
$ grunt



## Testing
Running `grunt test` from the '/client' folder will run the unit tests with karma.

