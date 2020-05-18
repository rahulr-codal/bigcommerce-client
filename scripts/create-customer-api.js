const axios = require("axios");
require('dotenv').config()

const BIG_COMMERCE_CLIENT_ID=process.env.BIG_COMMERCE_CLIENT_ID
const BIG_COMMERCE_ACCESS_TOKEN=process.env.BIG_COMMERCE_ACCESS_TOKEN
const BIG_COMMERCE_BASE_URL=process.env.BIG_COMMERCE_BASE_URL

const creatCustomer = async (data) => {
    const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-Auth-Client": BIG_COMMERCE_CLIENT_ID,
        "X-Auth-Token": BIG_COMMERCE_ACCESS_TOKEN
    }

    const options = {
        headers: headers,
        baseURL: BIG_COMMERCE_BASE_URL,
        data: data,
        method: "POST"
    }
    const url = "/customers"
    try {
        let response = await axios(url, options);
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        
    } catch (error) {
        console.log(error)
    }
};

let customers = [
    {
        email: "test2@gmail.com",
        first_name: "test",
        last_name: "1"
    },
];

function main(){
    creatCustomer(customers);
}

main();