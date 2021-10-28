/* 
bind version 
*/

// Mock transport object
var transport = {
    on: function(event, callback) {
        setTimeout(callback, 1000);
    }
};

function MyConstructor(data, transport) {
    this.data = data;
    callbackFunction = function () {
        console.log(this.data); 
    }
    transport.on('data', callbackFunction.bind(this));
}

// called as
var obj = new MyConstructor('foo', transport);


/*
arrow version
*/

// Mock transport object
var transport2 = {
    on: function(event, callback) {
        setTimeout(callback, 1000);
    }
};

function MyConstructor2(data, transport2) {
    this.data = data;
    transport2.on('data', () => {
        console.log(this.data); 
    });
}


// called as
var obj2 = new MyConstructor2('goo', transport2);


