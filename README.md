# Yeoman Angular + Express Server 

Two separate generators used to scaffold this project:
> /client => created with yeoman using '$ yo angular'  
> /server => created by running '$ express'  

express server for TEST / PROD:  
* <http://localhost:3000>

grunt server for front end asset watch. 
You really only need this to verify the front end server is recompiling assets as they change:  
* <http://localhost:9000>

The express server can be run in develop or deploy environments 
from the '/server' directory:
```
$ npm test  		# express will serve angular app from /client
```
```
$ npm start  		# express will serve the compiled angular app from /server/dist
```

In TEST mode, there's two tasks available to keep the angular app current with 
any changes you make.  In the /client folder 
```
$ grunt serve
```
```
$ grunt watch
```

### Local Development
Build out your angular app using Yeoman scaffolding tools.  
For ex - to add a new route to the app, run the following command in '/client'  
```
$ yo angular:route [routename]  
```

That will add the required files in the right places includig: 
- controller
- view
- udpate app.js with the new route


There's a lot of short cut subgenerators to keep the scaffold clean.
For a list of available commands, see:
* <https://github.com/yeoman/generator-angular>


### Styles
If you just need to quickly compile the sass in the TEST environment, 
in the '/client' folder, run  
```
$ grunt styles
```

### Build
To run a full build process on the front end code, and copy files into 
the '/server/dist' folder for deploy, from '/client' run  
```
$ grunt
```



## Testing
Running `grunt test` from the '/client' folder will run the unit tests with karma.

