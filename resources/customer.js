const Base = require("../mixins/base");

class Customer extends Base {
    constructor(bigcommerce){
        super(bigcommerce);
        this.bigcommerce = bigcommerce;
        this.name = "customers";
        this.urlPath = "/customers"
    }
}

module.exports = Customer;