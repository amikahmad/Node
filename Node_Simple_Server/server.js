// load the module "http" and specify the port we want the server to run on -  http://localhost:1234
var http = require("http"),
    port = 1234;

// creates a new server and a callback function
// this is an anonymous function that takes in the request and response object
// request = data sent up to server
// response = data sent down from server
var server = http.createServer(function(request,response){
    // response header descibes the content we dispatch
    // the next three lines only run when you navigate to the local host - you cause an event - so the event loop initiates - then node goes back to what it was doing before  and stays lean and mean.
    response.writeHeader(200, {"Content-Type": "text/plain"});
    // write the response to the client
    response.write("Hello HTTP!");
    // response.end() method notifies server that the operation is completed
    response.end();
});

// initialize the server and ask it to listen to the specified port
server.listen(port);
// display a nice console message
console.log("Server Running on "+port+".\nLaunch http://localhost:"+port);
