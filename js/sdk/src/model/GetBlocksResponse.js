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
import Block from './Block';

/**
 * The GetBlocksResponse model module.
 * @module model/GetBlocksResponse
 * @version 1.0.0
 */
class GetBlocksResponse {
    /**
     * Constructs a new <code>GetBlocksResponse</code>.
     * @alias module:model/GetBlocksResponse
     * @param blocks {Array.<module:model/Block>} 
     */
    constructor(blocks) { 
        
        GetBlocksResponse.initialize(this, blocks);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blocks) { 
        obj['blocks'] = blocks;
    }

    /**
     * Constructs a <code>GetBlocksResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlocksResponse} obj Optional instance to populate.
     * @return {module:model/GetBlocksResponse} The populated <code>GetBlocksResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetBlocksResponse();

            if (data.hasOwnProperty('blocks')) {
                obj['blocks'] = ApiClient.convertToType(data['blocks'], [Block]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Block>} blocks
 */
GetBlocksResponse.prototype['blocks'] = undefined;






export default GetBlocksResponse;

