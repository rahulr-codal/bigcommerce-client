const BigCommerce = require("../index");

const bigcommerce = new BigCommerce({
    clientId: process.env.BIG_COMMERCE_CLIENT_ID,
    accessToken: process.env.BIG_COMMERCE_ACCESS_TOKEN,
    storeHash: process.env.BIG_COMMERCE_STORE_HASH,
    apiVersion: "v3"
})

const customerAddressesToCreate = [
    {
      "first_name": "John",
      "last_name": "Doe",
      "address1": "111 E West Street",
      "address2": "654",
      "city": "Akron",
      "state_or_province": "Ohio",
      "postal_code": "44325",
      "country_code": "US",
      "phone": "1234567890",
      "address_type": "residential",
      "customer_id": 2
    }
]

async function main(){
    try {
        let customerAddresses = await bigcommerce.customerAddress.create(customerAddressesToCreate);
        console.log(customerAddresses);
    } catch (error) {
        console.log(error);
    }
};

main()