(function(window) {
    'use strict';
    var App = window.App || {};

    function Truck(truckId, db) {
        this.truckId = truckId;
        this.db = db;
    }

    Truck.prototype.createOrder = function(order) {
        console.log('Adding order for ' + order.emailAddress);
        this.db.add(order.emailAddress, order);
    };

    Truck.prototype.deliverOrder = function(customerId) {
        console.log('Delivering order for ' + customerId);
        this.db.remove(customerId);
    };

    Truck.prototype.printOrders = function() {
        var customerIdArray = Object.keys(this.db.getAll());

        console.log('Truck #' + this.truckId + ' has pending orders:');
        customerIdArray.forEach(function(id) {
            console.log(this.db.get(id));
        }.bind(this));
    };


    //extra functions for testing aid
    Truck.prototype.createOrderTest = function(order) {
        this.db.add(order.emailAddress, order);
        return this.db.data[order.emailAddress];
    };

    Truck.prototype.printOrdersTest = function() {
        var customerIdArray = Object.keys(this.db.getAll());
        return customerIdArray.length;
    };

    Truck.prototype.deliverOrderTest = function(customerId) {
        this.db.remove(customerId);
        return this.db.data[customerId];
    };



    App.Truck = Truck;
    window.App = App;
})(window);
