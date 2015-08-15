var q = require('q');
var defer = q.defer();
var promise = defer.promise;

promise
.then(function(res){
	console.log(res);
});

setTimeout(function(){
	defer.resolve('RESOLVED!');
},300);
