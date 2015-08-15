var q = require('q'),
	invalidJSON = process.argv[2];



var promise = q.fcall(function(json){ JSON.parse(json); }, invalidJSON);

promise
.then(console.log)
.catch(console.log);