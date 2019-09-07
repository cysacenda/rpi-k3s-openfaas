console.log("ok 1")
var http = require("http");
var server = http.createServer(function(req, res) {
	console.log("ok 2")
	res.end("TA MERE")
});

server.listen(3000);

