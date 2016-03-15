var noop = function() {};

function Promise() {
    this.callbacks = [];
}

Promise.prototype = {
    constructor: Promise,

    resolve: function(result) {
        // TODO:
        this.complete('resolve', result);
    },

    reject: function(result) {
        // TODO:
        this.complete('reject', result);
    },

    complete: function(type, result) {
        while (this.callbacks[0]) {
            this.callbacks.shift()[type].call(this, result);
        }
    },

    then: function(successHandler, failureHandler) {
        this.callbacks.push({
            resolve: successHandler || noop,
            reject: failureHandler || noop
        });
    }
};

// 测试
var p = new Promise();

setTimeout(function() {
    console.log('setTimeout');
    p.resolve('test');
}, 2000);

p.then(function(result) {
    console.log(result);
});
