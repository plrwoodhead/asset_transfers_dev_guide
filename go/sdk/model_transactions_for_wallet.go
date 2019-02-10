/*
 * QED-it - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.1.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

type TransactionsForWallet struct {
	IsIncoming bool `json:"is_incoming"`
	AssetId int32 `json:"asset_id"`
	Amount int32 `json:"amount"`
	RecipientAddress string `json:"recipient_address"`
	Memo string `json:"memo"`
}
