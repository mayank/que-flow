var flow = require('./index.js');

var chain = flow('_recharge')
            .then('apiCall', function(){
                console.log('apiCall');
                return flow.resolve();
            })
            .then('validateResponse', function(){
                console.log('validateResponse');
                return flow.resolve();
            });


chain.prepend('apiCall', 'decimalCheck', function(){
    console.log('decimalCheck');
    return flow.resolve();
});


chain.prepend('apiCall', 'prevalidateAmount', function(){
    console.log('prevalidateAmount');
    return flow.resolve();
});

chain.append('validateResponse', 'setUserInfo', function(){
    console.log('setUserInfo');
    return flow.resolve();
});

chain.append('apiCall', 'api2api', function(){
    console.log('api2api');
    return flow.resolve();
});

chain.start();







console.log('----------------------');
console.log('Will execute in 1,2 but ');
console.log('Appended 3 before 1 so 1,3,2');
console.log('Prepended 4 after 2 so 1,3,4,2');
console.log('Appended 5 after 2 so 1,3,4,2,5');
console.log('----------------------');
