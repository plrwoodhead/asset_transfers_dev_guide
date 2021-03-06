# QedItAssetTransfers.NodeApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nodeDeleteWalletPost**](NodeApi.md#nodeDeleteWalletPost) | **POST** /node/delete_wallet | Delete a wallet
[**nodeExportWalletPost**](NodeApi.md#nodeExportWalletPost) | **POST** /node/export_wallet | Export wallet secret key
[**nodeGenerateWalletPost**](NodeApi.md#nodeGenerateWalletPost) | **POST** /node/generate_wallet | Generate a new wallet
[**nodeGetAllWalletsPost**](NodeApi.md#nodeGetAllWalletsPost) | **POST** /node/get_all_wallets | Get all wallet labels
[**nodeGetRulesPost**](NodeApi.md#nodeGetRulesPost) | **POST** /node/get_rules | Get node rules
[**nodeImportWalletPost**](NodeApi.md#nodeImportWalletPost) | **POST** /node/import_wallet | Import wallet from secret key
[**nodeUnlockWalletPost**](NodeApi.md#nodeUnlockWalletPost) | **POST** /node/unlock_wallet | Unlocks a wallet for a given amount of seconds


<a name="nodeDeleteWalletPost"></a>
# **nodeDeleteWalletPost**
> nodeDeleteWalletPost(deleteWalletRequest)

Delete a wallet

### Example
```javascript
import QedItAssetTransfers from 'qed_it___asset_transfers';
let defaultClient = QedItAssetTransfers.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new QedItAssetTransfers.NodeApi();
let deleteWalletRequest = new QedItAssetTransfers.DeleteWalletRequest(); // DeleteWalletRequest | 
apiInstance.nodeDeleteWalletPost(deleteWalletRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteWalletRequest** | [**DeleteWalletRequest**](DeleteWalletRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="nodeExportWalletPost"></a>
# **nodeExportWalletPost**
> ExportWalletResponse nodeExportWalletPost(exportWalletRequest)

Export wallet secret key

### Example
```javascript
import QedItAssetTransfers from 'qed_it___asset_transfers';
let defaultClient = QedItAssetTransfers.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new QedItAssetTransfers.NodeApi();
let exportWalletRequest = new QedItAssetTransfers.ExportWalletRequest(); // ExportWalletRequest | 
apiInstance.nodeExportWalletPost(exportWalletRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportWalletRequest** | [**ExportWalletRequest**](ExportWalletRequest.md)|  | 

### Return type

[**ExportWalletResponse**](ExportWalletResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="nodeGenerateWalletPost"></a>
# **nodeGenerateWalletPost**
> nodeGenerateWalletPost(generateWalletRequest)

Generate a new wallet

### Example
```javascript
import QedItAssetTransfers from 'qed_it___asset_transfers';
let defaultClient = QedItAssetTransfers.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new QedItAssetTransfers.NodeApi();
let generateWalletRequest = new QedItAssetTransfers.GenerateWalletRequest(); // GenerateWalletRequest | 
apiInstance.nodeGenerateWalletPost(generateWalletRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateWalletRequest** | [**GenerateWalletRequest**](GenerateWalletRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="nodeGetAllWalletsPost"></a>
# **nodeGetAllWalletsPost**
> GetAllWalletsResponse nodeGetAllWalletsPost()

Get all wallet labels

### Example
```javascript
import QedItAssetTransfers from 'qed_it___asset_transfers';
let defaultClient = QedItAssetTransfers.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new QedItAssetTransfers.NodeApi();
apiInstance.nodeGetAllWalletsPost((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetAllWalletsResponse**](GetAllWalletsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nodeGetRulesPost"></a>
# **nodeGetRulesPost**
> GetRulesResponse nodeGetRulesPost()

Get node rules

### Example
```javascript
import QedItAssetTransfers from 'qed_it___asset_transfers';
let defaultClient = QedItAssetTransfers.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new QedItAssetTransfers.NodeApi();
apiInstance.nodeGetRulesPost((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetRulesResponse**](GetRulesResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nodeImportWalletPost"></a>
# **nodeImportWalletPost**
> nodeImportWalletPost(importWalletRequest)

Import wallet from secret key

### Example
```javascript
import QedItAssetTransfers from 'qed_it___asset_transfers';
let defaultClient = QedItAssetTransfers.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new QedItAssetTransfers.NodeApi();
let importWalletRequest = new QedItAssetTransfers.ImportWalletRequest(); // ImportWalletRequest | 
apiInstance.nodeImportWalletPost(importWalletRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **importWalletRequest** | [**ImportWalletRequest**](ImportWalletRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="nodeUnlockWalletPost"></a>
# **nodeUnlockWalletPost**
> nodeUnlockWalletPost(unlockWalletRequest)

Unlocks a wallet for a given amount of seconds

### Example
```javascript
import QedItAssetTransfers from 'qed_it___asset_transfers';
let defaultClient = QedItAssetTransfers.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new QedItAssetTransfers.NodeApi();
let unlockWalletRequest = new QedItAssetTransfers.UnlockWalletRequest(); // UnlockWalletRequest | 
apiInstance.nodeUnlockWalletPost(unlockWalletRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unlockWalletRequest** | [**UnlockWalletRequest**](UnlockWalletRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

