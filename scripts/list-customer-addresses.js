const BigCommerce = require("../index");

const bigcommerce = new BigCommerce({
    clientId: process.env.BIG_COMMERCE_CLIENT_ID,
    accessToken: process.env.BIG_COMMERCE_ACCESS_TOKEN,
    storeHash: process.env.BIG_COMMERCE_STORE_HASH,
    apiVersion: "v3"
})

async function main(){
    try {
        let queryParams = {
            "customer_id:in": "1,2"
        }
        let customers = await bigcommerce.customerAddress.list(queryParams);
        console.log(customers);
    } catch (error) {
        console.log(error);
    }
};

main()