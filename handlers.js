function start() {
  console.log("Request handler 'start' was called.");
}

function upload() {
  console.log("Request handler 'upload' was called.");
}

exports.start = start;
exports.upload = upload;

/*exports.routes = {
	index: function(pathname) {
		console.log("Index page. About to route a request for " + pathname);
	},

	send: function(pathname) {
		console.log("Send message. About to route a request for " + pathname);
	},
}*/