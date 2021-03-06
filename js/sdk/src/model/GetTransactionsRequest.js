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

import ApiClient from '../ApiClient';

/**
 * The GetTransactionsRequest model module.
 * @module model/GetTransactionsRequest
 * @version 1.0.0
 */
class GetTransactionsRequest {
    /**
     * Constructs a new <code>GetTransactionsRequest</code>.
     * @alias module:model/GetTransactionsRequest
     * @param walletLabel {String} 
     * @param startIndex {Number} 
     * @param numberOfResults {Number} 
     */
    constructor(walletLabel, startIndex, numberOfResults) { 
        
        GetTransactionsRequest.initialize(this, walletLabel, startIndex, numberOfResults);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, walletLabel, startIndex, numberOfResults) { 
        obj['wallet_label'] = walletLabel;
        obj['start_index'] = startIndex;
        obj['number_of_results'] = numberOfResults;
    }

    /**
     * Constructs a <code>GetTransactionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionsRequest} obj Optional instance to populate.
     * @return {module:model/GetTransactionsRequest} The populated <code>GetTransactionsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransactionsRequest();

            if (data.hasOwnProperty('wallet_label')) {
                obj['wallet_label'] = ApiClient.convertToType(data['wallet_label'], 'String');
            }
            if (data.hasOwnProperty('start_index')) {
                obj['start_index'] = ApiClient.convertToType(data['start_index'], 'Number');
            }
            if (data.hasOwnProperty('number_of_results')) {
                obj['number_of_results'] = ApiClient.convertToType(data['number_of_results'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} wallet_label
 */
GetTransactionsRequest.prototype['wallet_label'] = undefined;

/**
 * @member {Number} start_index
 */
GetTransactionsRequest.prototype['start_index'] = undefined;

/**
 * @member {Number} number_of_results
 */
GetTransactionsRequest.prototype['number_of_results'] = undefined;






export default GetTransactionsRequest;

