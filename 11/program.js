var qIo = require('q-io/http');

qIo.read('http://localhost:7000')
.then(function(id){
	return qIo.read('http://localhost:7001/'+id);
})
.then(function(obj){
	console.log(JSON.parse(obj));
})
.catch(function(err){
	console.log('Error: ' + err);
});
