// Generated by Ignite ignite.com/cli

import { SigningStargateClient, DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { Module } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetValidatorSetByHeightResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetBlockByHeightRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetLatestBlockRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { ABCIQueryResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { ProofOp } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetNodeInfoRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { Block } from "./types/cosmos/base/tendermint/v1beta1/types";
import { GetBlockByHeightResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetLatestBlockResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetSyncingRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetValidatorSetByHeightRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetLatestValidatorSetResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { VersionInfo } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetNodeInfoResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { ABCIQueryRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { Header } from "./types/cosmos/base/tendermint/v1beta1/types";
import { ProofOps } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetLatestValidatorSetRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { Validator } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetSyncingResponse } from "./types/cosmos/base/tendermint/v1beta1/query";


export { Module, GetValidatorSetByHeightResponse, GetBlockByHeightRequest, GetLatestBlockRequest, ABCIQueryResponse, ProofOp, GetNodeInfoRequest, Block, GetBlockByHeightResponse, GetLatestBlockResponse, GetSyncingRequest, GetValidatorSetByHeightRequest, GetLatestValidatorSetResponse, VersionInfo, GetNodeInfoResponse, ABCIQueryRequest, Header, ProofOps, GetLatestValidatorSetRequest, Validator, GetSyncingResponse };

type sendModuleParams = {
  value: Module,
  fee?: StdFee,
  memo?: string
};

type sendGetValidatorSetByHeightResponseParams = {
  value: GetValidatorSetByHeightResponse,
  fee?: StdFee,
  memo?: string
};

type sendGetBlockByHeightRequestParams = {
  value: GetBlockByHeightRequest,
  fee?: StdFee,
  memo?: string
};

type sendGetLatestBlockRequestParams = {
  value: GetLatestBlockRequest,
  fee?: StdFee,
  memo?: string
};

type sendABCIQueryResponseParams = {
  value: ABCIQueryResponse,
  fee?: StdFee,
  memo?: string
};

type sendProofOpParams = {
  value: ProofOp,
  fee?: StdFee,
  memo?: string
};

type sendGetNodeInfoRequestParams = {
  value: GetNodeInfoRequest,
  fee?: StdFee,
  memo?: string
};

type sendBlockParams = {
  value: Block,
  fee?: StdFee,
  memo?: string
};

type sendGetBlockByHeightResponseParams = {
  value: GetBlockByHeightResponse,
  fee?: StdFee,
  memo?: string
};

type sendGetLatestBlockResponseParams = {
  value: GetLatestBlockResponse,
  fee?: StdFee,
  memo?: string
};

type sendGetSyncingRequestParams = {
  value: GetSyncingRequest,
  fee?: StdFee,
  memo?: string
};

type sendGetValidatorSetByHeightRequestParams = {
  value: GetValidatorSetByHeightRequest,
  fee?: StdFee,
  memo?: string
};

type sendGetLatestValidatorSetResponseParams = {
  value: GetLatestValidatorSetResponse,
  fee?: StdFee,
  memo?: string
};

type sendVersionInfoParams = {
  value: VersionInfo,
  fee?: StdFee,
  memo?: string
};

type sendGetNodeInfoResponseParams = {
  value: GetNodeInfoResponse,
  fee?: StdFee,
  memo?: string
};

type sendABCIQueryRequestParams = {
  value: ABCIQueryRequest,
  fee?: StdFee,
  memo?: string
};

type sendHeaderParams = {
  value: Header,
  fee?: StdFee,
  memo?: string
};

type sendProofOpsParams = {
  value: ProofOps,
  fee?: StdFee,
  memo?: string
};

type sendGetLatestValidatorSetRequestParams = {
  value: GetLatestValidatorSetRequest,
  fee?: StdFee,
  memo?: string
};

type sendValidatorParams = {
  value: Validator,
  fee?: StdFee,
  memo?: string
};

type sendGetSyncingResponseParams = {
  value: GetSyncingResponse,
  fee?: StdFee,
  memo?: string
};


type moduleParams = {
  value: Module,
};

type getValidatorSetByHeightResponseParams = {
  value: GetValidatorSetByHeightResponse,
};

type getBlockByHeightRequestParams = {
  value: GetBlockByHeightRequest,
};

type getLatestBlockRequestParams = {
  value: GetLatestBlockRequest,
};

type abciqueryResponseParams = {
  value: ABCIQueryResponse,
};

type proofOpParams = {
  value: ProofOp,
};

type getNodeInfoRequestParams = {
  value: GetNodeInfoRequest,
};

type blockParams = {
  value: Block,
};

type getBlockByHeightResponseParams = {
  value: GetBlockByHeightResponse,
};

type getLatestBlockResponseParams = {
  value: GetLatestBlockResponse,
};

type getSyncingRequestParams = {
  value: GetSyncingRequest,
};

type getValidatorSetByHeightRequestParams = {
  value: GetValidatorSetByHeightRequest,
};

type getLatestValidatorSetResponseParams = {
  value: GetLatestValidatorSetResponse,
};

type versionInfoParams = {
  value: VersionInfo,
};

type getNodeInfoResponseParams = {
  value: GetNodeInfoResponse,
};

type abciqueryRequestParams = {
  value: ABCIQueryRequest,
};

type headerParams = {
  value: Header,
};

type proofOpsParams = {
  value: ProofOps,
};

type getLatestValidatorSetRequestParams = {
  value: GetLatestValidatorSetRequest,
};

type validatorParams = {
  value: Validator,
};

type getSyncingResponseParams = {
  value: GetSyncingResponse,
};


export const registry = new Registry(msgTypes);

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	const structure: {fields: Field[]} = { fields: [] }
	for (let [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendModule({ value, fee, memo }: sendModuleParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendModule: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.module({ value: Module.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendModule: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendGetValidatorSetByHeightResponse({ value, fee, memo }: sendGetValidatorSetByHeightResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendGetValidatorSetByHeightResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.getValidatorSetByHeightResponse({ value: GetValidatorSetByHeightResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendGetValidatorSetByHeightResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendGetBlockByHeightRequest({ value, fee, memo }: sendGetBlockByHeightRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendGetBlockByHeightRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.getBlockByHeightRequest({ value: GetBlockByHeightRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendGetBlockByHeightRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendGetLatestBlockRequest({ value, fee, memo }: sendGetLatestBlockRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendGetLatestBlockRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.getLatestBlockRequest({ value: GetLatestBlockRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendGetLatestBlockRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendABCIQueryResponse({ value, fee, memo }: sendABCIQueryResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendABCIQueryResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.abciqueryResponse({ value: ABCIQueryResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendABCIQueryResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendProofOp({ value, fee, memo }: sendProofOpParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendProofOp: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.proofOp({ value: ProofOp.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendProofOp: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendGetNodeInfoRequest({ value, fee, memo }: sendGetNodeInfoRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendGetNodeInfoRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.getNodeInfoRequest({ value: GetNodeInfoRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendGetNodeInfoRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendBlock({ value, fee, memo }: sendBlockParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendBlock: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.block({ value: Block.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendBlock: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendGetBlockByHeightResponse({ value, fee, memo }: sendGetBlockByHeightResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendGetBlockByHeightResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.getBlockByHeightResponse({ value: GetBlockByHeightResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendGetBlockByHeightResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendGetLatestBlockResponse({ value, fee, memo }: sendGetLatestBlockResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendGetLatestBlockResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.getLatestBlockResponse({ value: GetLatestBlockResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendGetLatestBlockResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendGetSyncingRequest({ value, fee, memo }: sendGetSyncingRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendGetSyncingRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.getSyncingRequest({ value: GetSyncingRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendGetSyncingRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendGetValidatorSetByHeightRequest({ value, fee, memo }: sendGetValidatorSetByHeightRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendGetValidatorSetByHeightRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.getValidatorSetByHeightRequest({ value: GetValidatorSetByHeightRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendGetValidatorSetByHeightRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendGetLatestValidatorSetResponse({ value, fee, memo }: sendGetLatestValidatorSetResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendGetLatestValidatorSetResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.getLatestValidatorSetResponse({ value: GetLatestValidatorSetResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendGetLatestValidatorSetResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendVersionInfo({ value, fee, memo }: sendVersionInfoParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendVersionInfo: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.versionInfo({ value: VersionInfo.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendVersionInfo: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendGetNodeInfoResponse({ value, fee, memo }: sendGetNodeInfoResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendGetNodeInfoResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.getNodeInfoResponse({ value: GetNodeInfoResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendGetNodeInfoResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendABCIQueryRequest({ value, fee, memo }: sendABCIQueryRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendABCIQueryRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.abciqueryRequest({ value: ABCIQueryRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendABCIQueryRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendHeader({ value, fee, memo }: sendHeaderParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendHeader: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.header({ value: Header.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendHeader: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendProofOps({ value, fee, memo }: sendProofOpsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendProofOps: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.proofOps({ value: ProofOps.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendProofOps: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendGetLatestValidatorSetRequest({ value, fee, memo }: sendGetLatestValidatorSetRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendGetLatestValidatorSetRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.getLatestValidatorSetRequest({ value: GetLatestValidatorSetRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendGetLatestValidatorSetRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendValidator({ value, fee, memo }: sendValidatorParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendValidator: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.validator({ value: Validator.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendValidator: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendGetSyncingResponse({ value, fee, memo }: sendGetSyncingResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendGetSyncingResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.getSyncingResponse({ value: GetSyncingResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendGetSyncingResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		module({ value }: moduleParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.base.tendermint.v1beta1.Module", value: Module.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:Module: Could not create message: ' + e.message)
			}
		},
		
		getValidatorSetByHeightResponse({ value }: getValidatorSetByHeightResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse", value: GetValidatorSetByHeightResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:GetValidatorSetByHeightResponse: Could not create message: ' + e.message)
			}
		},
		
		getBlockByHeightRequest({ value }: getBlockByHeightRequestParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest", value: GetBlockByHeightRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:GetBlockByHeightRequest: Could not create message: ' + e.message)
			}
		},
		
		getLatestBlockRequest({ value }: getLatestBlockRequestParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest", value: GetLatestBlockRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:GetLatestBlockRequest: Could not create message: ' + e.message)
			}
		},
		
		abciqueryResponse({ value }: abciqueryResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.base.tendermint.v1beta1.ABCIQueryResponse", value: ABCIQueryResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:ABCIQueryResponse: Could not create message: ' + e.message)
			}
		},
		
		proofOp({ value }: proofOpParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.base.tendermint.v1beta1.ProofOp", value: ProofOp.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:ProofOp: Could not create message: ' + e.message)
			}
		},
		
		getNodeInfoRequest({ value }: getNodeInfoRequestParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest", value: GetNodeInfoRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:GetNodeInfoRequest: Could not create message: ' + e.message)
			}
		},
		
		block({ value }: blockParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.base.tendermint.v1beta1.Block", value: Block.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:Block: Could not create message: ' + e.message)
			}
		},
		
		getBlockByHeightResponse({ value }: getBlockByHeightResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse", value: GetBlockByHeightResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:GetBlockByHeightResponse: Could not create message: ' + e.message)
			}
		},
		
		getLatestBlockResponse({ value }: getLatestBlockResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse", value: GetLatestBlockResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:GetLatestBlockResponse: Could not create message: ' + e.message)
			}
		},
		
		getSyncingRequest({ value }: getSyncingRequestParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest", value: GetSyncingRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:GetSyncingRequest: Could not create message: ' + e.message)
			}
		},
		
		getValidatorSetByHeightRequest({ value }: getValidatorSetByHeightRequestParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest", value: GetValidatorSetByHeightRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:GetValidatorSetByHeightRequest: Could not create message: ' + e.message)
			}
		},
		
		getLatestValidatorSetResponse({ value }: getLatestValidatorSetResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse", value: GetLatestValidatorSetResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:GetLatestValidatorSetResponse: Could not create message: ' + e.message)
			}
		},
		
		versionInfo({ value }: versionInfoParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.base.tendermint.v1beta1.VersionInfo", value: VersionInfo.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:VersionInfo: Could not create message: ' + e.message)
			}
		},
		
		getNodeInfoResponse({ value }: getNodeInfoResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse", value: GetNodeInfoResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:GetNodeInfoResponse: Could not create message: ' + e.message)
			}
		},
		
		abciqueryRequest({ value }: abciqueryRequestParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.base.tendermint.v1beta1.ABCIQueryRequest", value: ABCIQueryRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:ABCIQueryRequest: Could not create message: ' + e.message)
			}
		},
		
		header({ value }: headerParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.base.tendermint.v1beta1.Header", value: Header.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:Header: Could not create message: ' + e.message)
			}
		},
		
		proofOps({ value }: proofOpsParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.base.tendermint.v1beta1.ProofOps", value: ProofOps.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:ProofOps: Could not create message: ' + e.message)
			}
		},
		
		getLatestValidatorSetRequest({ value }: getLatestValidatorSetRequestParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest", value: GetLatestValidatorSetRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:GetLatestValidatorSetRequest: Could not create message: ' + e.message)
			}
		},
		
		validator({ value }: validatorParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.base.tendermint.v1beta1.Validator", value: Validator.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:Validator: Could not create message: ' + e.message)
			}
		},
		
		getSyncingResponse({ value }: getSyncingResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse", value: GetSyncingResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:GetSyncingResponse: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	public structure: Record<string,unknown>;
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		this.structure =  {
						
		};
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const IgntModule = (test: IgniteClient) => {
	return {
		module: {
			CosmosBaseTendermintV1Beta1: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default IgntModule;