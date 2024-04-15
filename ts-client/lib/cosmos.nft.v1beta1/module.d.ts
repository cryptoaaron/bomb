import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryNFTsRequest } from "./types/cosmos/nft/v1beta1/query";
import { QueryClassResponse } from "./types/cosmos/nft/v1beta1/query";
import { Class } from "./types/cosmos/nft/v1beta1/nft";
import { QueryOwnerRequest } from "./types/cosmos/nft/v1beta1/query";
import { QueryOwnerResponse } from "./types/cosmos/nft/v1beta1/query";
import { EventSend } from "./types/cosmos/nft/v1beta1/event";
import { GenesisState } from "./types/cosmos/nft/v1beta1/genesis";
import { QueryClassesRequest } from "./types/cosmos/nft/v1beta1/query";
import { QueryNFTResponse } from "./types/cosmos/nft/v1beta1/query";
import { NFT } from "./types/cosmos/nft/v1beta1/nft";
import { QueryBalanceResponse } from "./types/cosmos/nft/v1beta1/query";
import { QueryNFTsResponse } from "./types/cosmos/nft/v1beta1/query";
import { EventMint } from "./types/cosmos/nft/v1beta1/event";
import { QuerySupplyRequest } from "./types/cosmos/nft/v1beta1/query";
import { QueryClassRequest } from "./types/cosmos/nft/v1beta1/query";
import { Entry } from "./types/cosmos/nft/v1beta1/genesis";
import { QuerySupplyResponse } from "./types/cosmos/nft/v1beta1/query";
import { QueryClassesResponse } from "./types/cosmos/nft/v1beta1/query";
import { MsgSendResponse } from "./types/cosmos/nft/v1beta1/tx";
import { MsgSend } from "./types/cosmos/nft/v1beta1/tx";
import { EventBurn } from "./types/cosmos/nft/v1beta1/event";
import { QueryBalanceRequest } from "./types/cosmos/nft/v1beta1/query";
import { QueryNFTRequest } from "./types/cosmos/nft/v1beta1/query";
export { QueryNFTsRequest, QueryClassResponse, Class, QueryOwnerRequest, QueryOwnerResponse, EventSend, GenesisState, QueryClassesRequest, QueryNFTResponse, NFT, QueryBalanceResponse, QueryNFTsResponse, EventMint, QuerySupplyRequest, QueryClassRequest, Entry, QuerySupplyResponse, QueryClassesResponse, MsgSendResponse, MsgSend, EventBurn, QueryBalanceRequest, QueryNFTRequest };
type sendQueryNFTsRequestParams = {
    value: QueryNFTsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClassResponseParams = {
    value: QueryClassResponse;
    fee?: StdFee;
    memo?: string;
};
type sendClassParams = {
    value: Class;
    fee?: StdFee;
    memo?: string;
};
type sendQueryOwnerRequestParams = {
    value: QueryOwnerRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryOwnerResponseParams = {
    value: QueryOwnerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendEventSendParams = {
    value: EventSend;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClassesRequestParams = {
    value: QueryClassesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNFTResponseParams = {
    value: QueryNFTResponse;
    fee?: StdFee;
    memo?: string;
};
type sendNFTParams = {
    value: NFT;
    fee?: StdFee;
    memo?: string;
};
type sendQueryBalanceResponseParams = {
    value: QueryBalanceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNFTsResponseParams = {
    value: QueryNFTsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendEventMintParams = {
    value: EventMint;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySupplyRequestParams = {
    value: QuerySupplyRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClassRequestParams = {
    value: QueryClassRequest;
    fee?: StdFee;
    memo?: string;
};
type sendEntryParams = {
    value: Entry;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySupplyResponseParams = {
    value: QuerySupplyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClassesResponseParams = {
    value: QueryClassesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendResponseParams = {
    value: MsgSendResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendParams = {
    value: MsgSend;
    fee?: StdFee;
    memo?: string;
};
type sendEventBurnParams = {
    value: EventBurn;
    fee?: StdFee;
    memo?: string;
};
type sendQueryBalanceRequestParams = {
    value: QueryBalanceRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNFTRequestParams = {
    value: QueryNFTRequest;
    fee?: StdFee;
    memo?: string;
};
type queryNftsRequestParams = {
    value: QueryNFTsRequest;
};
type queryClassResponseParams = {
    value: QueryClassResponse;
};
type classParams = {
    value: Class;
};
type queryOwnerRequestParams = {
    value: QueryOwnerRequest;
};
type queryOwnerResponseParams = {
    value: QueryOwnerResponse;
};
type eventSendParams = {
    value: EventSend;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryClassesRequestParams = {
    value: QueryClassesRequest;
};
type queryNftresponseParams = {
    value: QueryNFTResponse;
};
type nftParams = {
    value: NFT;
};
type queryBalanceResponseParams = {
    value: QueryBalanceResponse;
};
type queryNftsResponseParams = {
    value: QueryNFTsResponse;
};
type eventMintParams = {
    value: EventMint;
};
type querySupplyRequestParams = {
    value: QuerySupplyRequest;
};
type queryClassRequestParams = {
    value: QueryClassRequest;
};
type entryParams = {
    value: Entry;
};
type querySupplyResponseParams = {
    value: QuerySupplyResponse;
};
type queryClassesResponseParams = {
    value: QueryClassesResponse;
};
type msgSendResponseParams = {
    value: MsgSendResponse;
};
type msgSendParams = {
    value: MsgSend;
};
type eventBurnParams = {
    value: EventBurn;
};
type queryBalanceRequestParams = {
    value: QueryBalanceRequest;
};
type queryNftrequestParams = {
    value: QueryNFTRequest;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryNFTsRequest({ value, fee, memo }: sendQueryNFTsRequestParams): Promise<DeliverTxResponse>;
    sendQueryClassResponse({ value, fee, memo }: sendQueryClassResponseParams): Promise<DeliverTxResponse>;
    sendClass({ value, fee, memo }: sendClassParams): Promise<DeliverTxResponse>;
    sendQueryOwnerRequest({ value, fee, memo }: sendQueryOwnerRequestParams): Promise<DeliverTxResponse>;
    sendQueryOwnerResponse({ value, fee, memo }: sendQueryOwnerResponseParams): Promise<DeliverTxResponse>;
    sendEventSend({ value, fee, memo }: sendEventSendParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryClassesRequest({ value, fee, memo }: sendQueryClassesRequestParams): Promise<DeliverTxResponse>;
    sendQueryNFTResponse({ value, fee, memo }: sendQueryNFTResponseParams): Promise<DeliverTxResponse>;
    sendNFT({ value, fee, memo }: sendNFTParams): Promise<DeliverTxResponse>;
    sendQueryBalanceResponse({ value, fee, memo }: sendQueryBalanceResponseParams): Promise<DeliverTxResponse>;
    sendQueryNFTsResponse({ value, fee, memo }: sendQueryNFTsResponseParams): Promise<DeliverTxResponse>;
    sendEventMint({ value, fee, memo }: sendEventMintParams): Promise<DeliverTxResponse>;
    sendQuerySupplyRequest({ value, fee, memo }: sendQuerySupplyRequestParams): Promise<DeliverTxResponse>;
    sendQueryClassRequest({ value, fee, memo }: sendQueryClassRequestParams): Promise<DeliverTxResponse>;
    sendEntry({ value, fee, memo }: sendEntryParams): Promise<DeliverTxResponse>;
    sendQuerySupplyResponse({ value, fee, memo }: sendQuerySupplyResponseParams): Promise<DeliverTxResponse>;
    sendQueryClassesResponse({ value, fee, memo }: sendQueryClassesResponseParams): Promise<DeliverTxResponse>;
    sendMsgSendResponse({ value, fee, memo }: sendMsgSendResponseParams): Promise<DeliverTxResponse>;
    sendMsgSend({ value, fee, memo }: sendMsgSendParams): Promise<DeliverTxResponse>;
    sendEventBurn({ value, fee, memo }: sendEventBurnParams): Promise<DeliverTxResponse>;
    sendQueryBalanceRequest({ value, fee, memo }: sendQueryBalanceRequestParams): Promise<DeliverTxResponse>;
    sendQueryNFTRequest({ value, fee, memo }: sendQueryNFTRequestParams): Promise<DeliverTxResponse>;
    queryNftsRequest({ value }: queryNftsRequestParams): EncodeObject;
    queryClassResponse({ value }: queryClassResponseParams): EncodeObject;
    class({ value }: classParams): EncodeObject;
    queryOwnerRequest({ value }: queryOwnerRequestParams): EncodeObject;
    queryOwnerResponse({ value }: queryOwnerResponseParams): EncodeObject;
    eventSend({ value }: eventSendParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryClassesRequest({ value }: queryClassesRequestParams): EncodeObject;
    queryNftresponse({ value }: queryNftresponseParams): EncodeObject;
    nft({ value }: nftParams): EncodeObject;
    queryBalanceResponse({ value }: queryBalanceResponseParams): EncodeObject;
    queryNftsResponse({ value }: queryNftsResponseParams): EncodeObject;
    eventMint({ value }: eventMintParams): EncodeObject;
    querySupplyRequest({ value }: querySupplyRequestParams): EncodeObject;
    queryClassRequest({ value }: queryClassRequestParams): EncodeObject;
    entry({ value }: entryParams): EncodeObject;
    querySupplyResponse({ value }: querySupplyResponseParams): EncodeObject;
    queryClassesResponse({ value }: queryClassesResponseParams): EncodeObject;
    msgSendResponse({ value }: msgSendResponseParams): EncodeObject;
    msgSend({ value }: msgSendParams): EncodeObject;
    eventBurn({ value }: eventBurnParams): EncodeObject;
    queryBalanceRequest({ value }: queryBalanceRequestParams): EncodeObject;
    queryNftrequest({ value }: queryNftrequestParams): EncodeObject;
};
interface QueryClientOptions {
    addr: string;
}
export declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Api<unknown>;
declare class SDKModule {
    query: ReturnType<typeof queryClient>;
    tx: ReturnType<typeof txClient>;
    structure: Record<string, unknown>;
    registry: Array<[string, GeneratedType]>;
    constructor(client: IgniteClient);
    updateTX(client: IgniteClient): void;
}
declare const IgntModule: (test: IgniteClient) => {
    module: {
        CosmosNftV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
