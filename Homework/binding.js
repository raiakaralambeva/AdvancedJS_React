// Mock transport object
var transport = {
    on: function(event, callback) {
        setTimeout(callback, 1000);
    }
};

function MyConstructor(data, transport) {
    this.data = data;
    transport.on('data', () => {
        console.log(this.data); 
    });
}


// called as
var obj = new MyConstructor('foo', transport);


