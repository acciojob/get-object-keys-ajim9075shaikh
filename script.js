//your JS code here. If required.

const student = {
    name: 'John Doe'
};

// Add a method to the Object prototype called getKeys
Object.prototype.getKeys = function() {
    return Object.keys(this);
};