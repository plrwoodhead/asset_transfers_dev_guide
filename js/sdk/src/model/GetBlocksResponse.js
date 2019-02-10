/**
 * QED-it - Asset Transfers
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.1.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Block'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Block'));
  } else {
    // Browser globals (root is window)
    if (!root.QedItAssetTransfers) {
      root.QedItAssetTransfers = {};
    }
    root.QedItAssetTransfers.GetBlocksResponse = factory(root.QedItAssetTransfers.ApiClient, root.QedItAssetTransfers.Block);
  }
}(this, function(ApiClient, Block) {
  'use strict';



  /**
   * The GetBlocksResponse model module.
   * @module model/GetBlocksResponse
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>GetBlocksResponse</code>.
   * @alias module:model/GetBlocksResponse
   * @class
   * @param blocks {Array.<module:model/Block>} 
   */
  var exports = function(blocks) {
    var _this = this;

    _this['blocks'] = blocks;
  };

  /**
   * Constructs a <code>GetBlocksResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBlocksResponse} obj Optional instance to populate.
   * @return {module:model/GetBlocksResponse} The populated <code>GetBlocksResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('blocks')) {
        obj['blocks'] = ApiClient.convertToType(data['blocks'], [Block]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Block>} blocks
   */
  exports.prototype['blocks'] = undefined;



  return exports;
}));


