var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
	var fileContents = fs.readFile('data.txt', function(err,data){
		if (err) throw err;
		res.writeHead(200, {'Content-Type': 'text/html'});
 		res.end(data);

	});

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');