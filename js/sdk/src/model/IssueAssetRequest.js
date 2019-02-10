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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.QedItAssetTransfers) {
      root.QedItAssetTransfers = {};
    }
    root.QedItAssetTransfers.IssueAssetRequest = factory(root.QedItAssetTransfers.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The IssueAssetRequest model module.
   * @module model/IssueAssetRequest
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>IssueAssetRequest</code>.
   * @alias module:model/IssueAssetRequest
   * @class
   * @param walletLabel {String} 
   * @param authorization {String} 
   * @param recipientAddress {String} 
   * @param amount {Number} 
   * @param assetId {Number} 
   * @param clearValue {Boolean} 
   * @param memo {String} 
   */
  var exports = function(walletLabel, authorization, recipientAddress, amount, assetId, clearValue, memo) {
    var _this = this;

    _this['wallet_label'] = walletLabel;
    _this['authorization'] = authorization;
    _this['recipient_address'] = recipientAddress;
    _this['amount'] = amount;
    _this['asset_id'] = assetId;
    _this['clear_value'] = clearValue;
    _this['memo'] = memo;
  };

  /**
   * Constructs a <code>IssueAssetRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IssueAssetRequest} obj Optional instance to populate.
   * @return {module:model/IssueAssetRequest} The populated <code>IssueAssetRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('wallet_label')) {
        obj['wallet_label'] = ApiClient.convertToType(data['wallet_label'], 'String');
      }
      if (data.hasOwnProperty('authorization')) {
        obj['authorization'] = ApiClient.convertToType(data['authorization'], 'String');
      }
      if (data.hasOwnProperty('recipient_address')) {
        obj['recipient_address'] = ApiClient.convertToType(data['recipient_address'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('asset_id')) {
        obj['asset_id'] = ApiClient.convertToType(data['asset_id'], 'Number');
      }
      if (data.hasOwnProperty('clear_value')) {
        obj['clear_value'] = ApiClient.convertToType(data['clear_value'], 'Boolean');
      }
      if (data.hasOwnProperty('memo')) {
        obj['memo'] = ApiClient.convertToType(data['memo'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} wallet_label
   */
  exports.prototype['wallet_label'] = undefined;
  /**
   * @member {String} authorization
   */
  exports.prototype['authorization'] = undefined;
  /**
   * @member {String} recipient_address
   */
  exports.prototype['recipient_address'] = undefined;
  /**
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {Number} asset_id
   */
  exports.prototype['asset_id'] = undefined;
  /**
   * @member {Boolean} clear_value
   */
  exports.prototype['clear_value'] = undefined;
  /**
   * @member {String} memo
   */
  exports.prototype['memo'] = undefined;



  return exports;
}));


