var q = require('q'),
	defer = q.defer();
	invalidJSON = process.argv[2];


function parsePromised(json){
	var promise = defer.promise;
	try{
		JSON.parse(json);
		defer.resolve('Json Parsed!');
	}
	catch(e){
		defer.reject(e);
	}
	return promise;
}


var promise = parsePromised(invalidJSON);

promise
.then(console.log)
.catch(console.log);
