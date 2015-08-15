var q = require('q');
var defer = q.defer();

defer.promise
.then(console.log)
.catch(function(err){ console.log(err.message); });

setTimeout(defer.reject, 300, (new Error('REJECTED!')));