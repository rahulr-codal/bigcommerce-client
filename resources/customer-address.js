const Base = require("../mixins/base");

class CustomerAddress extends Base {
    constructor(bigcommerce){
        super(bigcommerce);
        this.bigcommerce = bigcommerce;
        this.name = "customer addresses";
        this.urlPath = "/customers/addresses"
    }
}

module.exports = CustomerAddress;