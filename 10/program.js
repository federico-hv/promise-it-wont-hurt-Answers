var qIo = require('q-io/http');


qIo.read('http://localhost:1337')
	.then(JSON.parse)
	.then(console.log)
	.catch(function(){
		console.log('Error!');
	});

