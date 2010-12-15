var http = require("http");

var ips = [ '198.99.1.2', '198.99.9.1' ];

var debug = true;

if (debug) {
	console.log(JSON.stringify(ips));
}

var scan_server = http.createClient(8000, 'localhost');

var request = scan_server.request('PUT', '/', {'host' : 'localhost'});

request.write(JSON.stringify(ips));

request.end();

request.on('response', function(response) {
	response.setEncoding('utf8');
	response.on('data', function(chunk) {
		console.log(chunk);
	});
});

