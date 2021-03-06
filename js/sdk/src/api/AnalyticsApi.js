/**
 * QED-it - Asset Transfers
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import GetBlocksRequest from '../model/GetBlocksRequest';
import GetBlocksResponse from '../model/GetBlocksResponse';
import GetTransactionsRequest from '../model/GetTransactionsRequest';
import GetTransactionsResponse from '../model/GetTransactionsResponse';

/**
* Analytics service.
* @module api/AnalyticsApi
* @version 1.0.0
*/
export default class AnalyticsApi {

    /**
    * Constructs a new AnalyticsApi. 
    * @alias module:api/AnalyticsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the analyticsGetBlocksPost operation.
     * @callback module:api/AnalyticsApi~analyticsGetBlocksPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetBlocksResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get details on past blocks
     * @param {module:model/GetBlocksRequest} getBlocksRequest 
     * @param {module:api/AnalyticsApi~analyticsGetBlocksPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetBlocksResponse}
     */
    analyticsGetBlocksPost(getBlocksRequest, callback) {
      let postBody = getBlocksRequest;

      // verify the required parameter 'getBlocksRequest' is set
      if (getBlocksRequest === undefined || getBlocksRequest === null) {
        throw new Error("Missing the required parameter 'getBlocksRequest' when calling analyticsGetBlocksPost");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetBlocksResponse;

      return this.apiClient.callApi(
        '/analytics/get_blocks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the analyticsGetTransactionsPost operation.
     * @callback module:api/AnalyticsApi~analyticsGetTransactionsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTransactionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get details on past transactions
     * @param {module:model/GetTransactionsRequest} getTransactionsRequest 
     * @param {module:api/AnalyticsApi~analyticsGetTransactionsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTransactionsResponse}
     */
    analyticsGetTransactionsPost(getTransactionsRequest, callback) {
      let postBody = getTransactionsRequest;

      // verify the required parameter 'getTransactionsRequest' is set
      if (getTransactionsRequest === undefined || getTransactionsRequest === null) {
        throw new Error("Missing the required parameter 'getTransactionsRequest' when calling analyticsGetTransactionsPost");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetTransactionsResponse;

      return this.apiClient.callApi(
        '/analytics/get_transactions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
