var Q = require('q');


var flow = function(name, callback){

    _flow = this;

    _flow.chain = [];
    _flow.promise = [];

    _flow.name = name;

    var func = {
        then: function(name, callback){
            _flow.chain.push(name);
            _flow.promise.push(callback);

            return func;
        },
        prepend: function(prepend, name, callback){
            var index = _flow.chain.indexOf(prepend);
            if(index < 0) index = 0;
            _flow.chain.splice(index, 0, name);
            _flow.promise.splice(index, 0, callback);

            return func;
        },
        append: function(append, name, callback){
            var index = _flow.chain.indexOf(append) + 1;
            if(index > _flow.chain.length) index = _flow.chain.length;
            _flow.chain.splice(index, 0, name);
            _flow.promise.splice(index, 0, callback);

            return func;
        },
        start: function(){
            var promise = Q(undefined);

            _flow.chain.forEach(function(name, index){
                promise = promise.then(function(){
                    promiseFunc = _flow.promise[index]();
                    return promiseFunc;
                });
            });

            return func;
        }
    };

    return func;

};

flow.resolve = function(){
    return Q.resolve();
}

module.exports = flow;
