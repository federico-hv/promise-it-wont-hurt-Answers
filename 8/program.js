var q = require('q');

var throwMyGod = function(){
	throw Error('OH NOES');
}

var iterate = function(num){
	console.log(num);
	return num+1;
}

var promise = q.fcall(iterate,1);

promise
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(throwMyGod)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(console.log)
.done();