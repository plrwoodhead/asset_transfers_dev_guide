/*
 * QED-it - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.0.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

type UnlockWalletRequest struct {
	WalletLabel string `json:"wallet_label"`
	Authorization string `json:"authorization"`
	Seconds int32 `json:"seconds"`
}
