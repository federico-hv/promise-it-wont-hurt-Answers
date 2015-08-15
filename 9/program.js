var q = require('q');
var promiseOne = q.defer();
var promiseTwo = q.defer();


function all(promOne,promTwo){
	var internal = q.defer();
	var counter = 0;
	var array = [];

	promOne
		.then(function(val){
			array.push(val);
			counter++;
			if(counter >= 2){
				internal.resolve(array);
			}
		});

	promTwo
		.then(function(val){
			array.push(val);
			counter++;
			if(counter >= 2){
				internal.resolve(array);
			}
		});

	return internal.promise;
}

all(promiseOne.promise, promiseTwo.promise)
	.then(console.log)
	.catch(function(){
		console.log('Error!');
	});


setTimeout(function(first,second){
	promiseOne.resolve(first);
	promiseTwo.resolve(second);
},200,'PROMISES','FTW');
