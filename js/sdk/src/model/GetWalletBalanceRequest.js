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
 * The GetWalletBalanceRequest model module.
 * @module model/GetWalletBalanceRequest
 * @version 1.0.0
 */
class GetWalletBalanceRequest {
    /**
     * Constructs a new <code>GetWalletBalanceRequest</code>.
     * @alias module:model/GetWalletBalanceRequest
     * @param walletLabel {String} 
     */
    constructor(walletLabel) { 
        
        GetWalletBalanceRequest.initialize(this, walletLabel);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, walletLabel) { 
        obj['wallet_label'] = walletLabel;
    }

    /**
     * Constructs a <code>GetWalletBalanceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWalletBalanceRequest} obj Optional instance to populate.
     * @return {module:model/GetWalletBalanceRequest} The populated <code>GetWalletBalanceRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetWalletBalanceRequest();

            if (data.hasOwnProperty('wallet_label')) {
                obj['wallet_label'] = ApiClient.convertToType(data['wallet_label'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} wallet_label
 */
GetWalletBalanceRequest.prototype['wallet_label'] = undefined;






export default GetWalletBalanceRequest;

