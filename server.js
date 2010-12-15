
var 	sys = require('sys'),
	spawn = require('child_process').spawn,
	http = require('http');

var debug = false;

var ips = [ '129.99.2.3', '129.99.3.4' ];


http.createServer(function (request, response) {
  	response.writeHead(200, {'Content-Type': 'text/plain'});

	if (request.method == 'GET') {
		response.write("GET not working please use PUT with list of ips");
		response.end();
	} else {

		console.log(request.events);
		request.setEncoding('utf8');
		request.on('data', function(chunk) {
			console.log("chunk: " + chunk);
			ips = JSON.parse(chunk);

		for (var i = 0; i < ips.length; i++) {
			//response.write(ips[i]);

			console.log("about to scan: " + ips[i]);
			scan_response = scanny(ips[i]);
			console.log("scan_response: " + scan_response);
		}

		});
		response.write("done scanning\n");
		response.end();
	}

}).listen(8000);

function scanny(ip) {
	
	var scan_data = "";
	var	scan  = spawn('./scan', ['-i', ip]);

	scan.stdout.on('data', function(data) {
		sys.print('stdout: ' + data);
		scan_data += data;
	});

	/*
	scan.stderr.on('data', function(data) {
		sys.print('stderr: ' + data);
	});

	if (debug) {
		scan.on('exit', function(code) {
			console.log('child process exited with code ' + code);
		});
	}
	*/

	return scan_data;
}
