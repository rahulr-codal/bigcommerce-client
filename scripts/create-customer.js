const BigCommerce = require("../index");

const bigcommerce = new BigCommerce({
    clientId: process.env.BIG_COMMERCE_CLIENT_ID,
    accessToken: process.env.BIG_COMMERCE_ACCESS_TOKEN,
    storeHash: process.env.BIG_COMMERCE_STORE_HASH,
    apiVersion: "v3"
})

let customersToCreate = [
    {
        email: "test4@gmail.com",
        first_name: "test",
        last_name: "1"
    },
];

async function main(){
    try {
        let customers = await bigcommerce.customer.create(customersToCreate);
        console.log(customers);
    } catch (error) {
        console.log(error);
    }
};

main()