 
'use strict';


/**
 * This provides methods used by resources that have no relationships with
 * other resources. It's not meant to be used directly.
 *
 * @mixin
 */

class Base {
  
    constructor(){
        
    }

    /**
     * Creates a new record.
     *
     * @param {Object} params Record properties
     * @return {Promise} Promise that resolves with the result
     * @public
     */
    create(data) {
        const url = this.buildUrl();
        return this.bigcommerce.request(url, 'POST', data);
    }

    /**
     * Deletes a record.
     *
     * @param {Number} id Record ID
     * @return {Promise} Promise that resolves with the result
     * @public
     */
    // delete(id) {
    //     const url = this.buildUrl(id);
    //     return this.bigcommerce.request(url, 'DELETE');
    // },

    /**
     * Gets a single record by its ID.
     *
     * @param {Number} id Record ID
     * @param {Object} [params] Query parameters
     * @return {Promise} Promise that resolves with the result
     * @public
     */
    // get(params) {
    // const url = this.buildUrl(params);
    // return this.bigcommerce.request(url, 'GET');
    // },

    /**
     * Gets a list of records.
     *
     * @param {Object} params Query parameters
     * @return {Promise} Promise that resolves with the result
     * @public
     */
    list(params) {
        const url = this.buildUrl(params);
        return this.bigcommerce.request(url, 'GET');
    }

    /**
     * Updates a record.
     *
     * @param {Number} id Record ID
     * @param {Object} params Record properties
     * @return {Promise} Promise that resolves with the result
     * @public
     */
    // update(id, params) {
    //     const url = this.buildUrl(id);
    //     return this.bigcommerce.request(url, 'PUT', this.key, params);
    // },

    /**
     * Builds the request URL.
     *
     * @param {Number|String} [id] Record ID
     * @param {Object} [query] Query parameters
     * @return {Object} URL object
     * @private
     */
    buildUrl(query) {

        let pathname = `${this.urlPath}`;

        const url = { pathname };

        if (query) {
            url.queryParams = query;
        }

        return url;
    }
};

module.exports = Base;