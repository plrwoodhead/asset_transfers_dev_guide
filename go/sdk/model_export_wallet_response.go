/*
 * QED-it - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.1.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

type ExportWalletResponse struct {
	WalletLabel string `json:"wallet_label"`
	EncryptedSk string `json:"encrypted_sk"`
	Salt string `json:"salt"`
}
