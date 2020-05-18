const defaults = require('lodash/defaults');
const axios = require("axios");
const resources = require('./resources');
require('dotenv').config()


/**
 * @param {Object} options Configuration options
 * @param {String} [options.clientId=''] The store app client id
 * @param {String} [options.accessToken=''] The store app access token
 * @param {String} [options.storeHash=''] The store hash
 * @param {String} [options.apiVersion] The BigCommerce API version to use
 * @returns {BigCommerceClient}
 */

class BigCommerce {
    constructor(options={}){
        if( 
            !options ||
            !options.accessToken ||
            !options.clientId ||
            !options.storeHash
        ){
            throw new Error("Missing or invalid options");
        }

        this.options = defaults(options, { apiVersion: "v3" });
        this.baseURL = `https://api.bigcommerce.com/stores/${options.storeHash}/${options.apiVersion}/`;
    }

    async request(url, method, data, headers){
        const options = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "X-Auth-Client": this.options.clientId,
                "X-Auth-Token": this.options.accessToken,
                ...headers
            },
            baseURL: this.baseURL,
            method: method,
            url: url.pathname,
            params: url.queryParams,
            data: data,
        };
        try {
            const response = await axios(options);
            return response.data;
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

resources.registerAll(BigCommerce);

module.exports = BigCommerce