// initialize server

var express = require('express');   // include express.js
	io = require('socket'io),   // include socket.io
	app = express(), 	    // make an instance of express
	server = app.listen(8000),  // start a server with the express instance
	socketServer = io(server);  // make a socket server using the express server

// initialize the serial port

var serialport = require('serialport')		// include the serialport library
	SerialPort = serialport.SerialPort,	// make a local instance of serial
	portName = process.argv[2],		// get the port name from the command line
	portConfig = {
		baudRate: 9600,
