import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { EventGrant } from "./types/cosmos/authz/v1beta1/event";
import { MsgGrantResponse } from "./types/cosmos/authz/v1beta1/tx";
import { MsgRevoke } from "./types/cosmos/authz/v1beta1/tx";
import { GenericAuthorization } from "./types/cosmos/authz/v1beta1/authz";
import { GrantAuthorization } from "./types/cosmos/authz/v1beta1/authz";
import { EventRevoke } from "./types/cosmos/authz/v1beta1/event";
import { QueryGranterGrantsRequest } from "./types/cosmos/authz/v1beta1/query";
import { QueryGranteeGrantsResponse } from "./types/cosmos/authz/v1beta1/query";
import { QueryGranteeGrantsRequest } from "./types/cosmos/authz/v1beta1/query";
import { MsgGrant } from "./types/cosmos/authz/v1beta1/tx";
import { MsgExec } from "./types/cosmos/authz/v1beta1/tx";
import { MsgExecResponse } from "./types/cosmos/authz/v1beta1/tx";
import { MsgRevokeResponse } from "./types/cosmos/authz/v1beta1/tx";
import { QueryGrantsResponse } from "./types/cosmos/authz/v1beta1/query";
import { QueryGranterGrantsResponse } from "./types/cosmos/authz/v1beta1/query";
import { GenesisState } from "./types/cosmos/authz/v1beta1/genesis";
import { Grant } from "./types/cosmos/authz/v1beta1/authz";
import { GrantQueueItem } from "./types/cosmos/authz/v1beta1/authz";
import { QueryGrantsRequest } from "./types/cosmos/authz/v1beta1/query";
export { EventGrant, MsgGrantResponse, MsgRevoke, GenericAuthorization, GrantAuthorization, EventRevoke, QueryGranterGrantsRequest, QueryGranteeGrantsResponse, QueryGranteeGrantsRequest, MsgGrant, MsgExec, MsgExecResponse, MsgRevokeResponse, QueryGrantsResponse, QueryGranterGrantsResponse, GenesisState, Grant, GrantQueueItem, QueryGrantsRequest };
type sendEventGrantParams = {
    value: EventGrant;
    fee?: StdFee;
    memo?: string;
};
type sendMsgGrantResponseParams = {
    value: MsgGrantResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRevokeParams = {
    value: MsgRevoke;
    fee?: StdFee;
    memo?: string;
};
type sendGenericAuthorizationParams = {
    value: GenericAuthorization;
    fee?: StdFee;
    memo?: string;
};
type sendGrantAuthorizationParams = {
    value: GrantAuthorization;
    fee?: StdFee;
    memo?: string;
};
type sendEventRevokeParams = {
    value: EventRevoke;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGranterGrantsRequestParams = {
    value: QueryGranterGrantsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGranteeGrantsResponseParams = {
    value: QueryGranteeGrantsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGranteeGrantsRequestParams = {
    value: QueryGranteeGrantsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgGrantParams = {
    value: MsgGrant;
    fee?: StdFee;
    memo?: string;
};
type sendMsgExecParams = {
    value: MsgExec;
    fee?: StdFee;
    memo?: string;
};
type sendMsgExecResponseParams = {
    value: MsgExecResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRevokeResponseParams = {
    value: MsgRevokeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGrantsResponseParams = {
    value: QueryGrantsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGranterGrantsResponseParams = {
    value: QueryGranterGrantsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendGrantParams = {
    value: Grant;
    fee?: StdFee;
    memo?: string;
};
type sendGrantQueueItemParams = {
    value: GrantQueueItem;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGrantsRequestParams = {
    value: QueryGrantsRequest;
    fee?: StdFee;
    memo?: string;
};
type eventGrantParams = {
    value: EventGrant;
};
type msgGrantResponseParams = {
    value: MsgGrantResponse;
};
type msgRevokeParams = {
    value: MsgRevoke;
};
type genericAuthorizationParams = {
    value: GenericAuthorization;
};
type grantAuthorizationParams = {
    value: GrantAuthorization;
};
type eventRevokeParams = {
    value: EventRevoke;
};
type queryGranterGrantsRequestParams = {
    value: QueryGranterGrantsRequest;
};
type queryGranteeGrantsResponseParams = {
    value: QueryGranteeGrantsResponse;
};
type queryGranteeGrantsRequestParams = {
    value: QueryGranteeGrantsRequest;
};
type msgGrantParams = {
    value: MsgGrant;
};
type msgExecParams = {
    value: MsgExec;
};
type msgExecResponseParams = {
    value: MsgExecResponse;
};
type msgRevokeResponseParams = {
    value: MsgRevokeResponse;
};
type queryGrantsResponseParams = {
    value: QueryGrantsResponse;
};
type queryGranterGrantsResponseParams = {
    value: QueryGranterGrantsResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type grantParams = {
    value: Grant;
};
type grantQueueItemParams = {
    value: GrantQueueItem;
};
type queryGrantsRequestParams = {
    value: QueryGrantsRequest;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendEventGrant({ value, fee, memo }: sendEventGrantParams): Promise<DeliverTxResponse>;
    sendMsgGrantResponse({ value, fee, memo }: sendMsgGrantResponseParams): Promise<DeliverTxResponse>;
    sendMsgRevoke({ value, fee, memo }: sendMsgRevokeParams): Promise<DeliverTxResponse>;
    sendGenericAuthorization({ value, fee, memo }: sendGenericAuthorizationParams): Promise<DeliverTxResponse>;
    sendGrantAuthorization({ value, fee, memo }: sendGrantAuthorizationParams): Promise<DeliverTxResponse>;
    sendEventRevoke({ value, fee, memo }: sendEventRevokeParams): Promise<DeliverTxResponse>;
    sendQueryGranterGrantsRequest({ value, fee, memo }: sendQueryGranterGrantsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGranteeGrantsResponse({ value, fee, memo }: sendQueryGranteeGrantsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGranteeGrantsRequest({ value, fee, memo }: sendQueryGranteeGrantsRequestParams): Promise<DeliverTxResponse>;
    sendMsgGrant({ value, fee, memo }: sendMsgGrantParams): Promise<DeliverTxResponse>;
    sendMsgExec({ value, fee, memo }: sendMsgExecParams): Promise<DeliverTxResponse>;
    sendMsgExecResponse({ value, fee, memo }: sendMsgExecResponseParams): Promise<DeliverTxResponse>;
    sendMsgRevokeResponse({ value, fee, memo }: sendMsgRevokeResponseParams): Promise<DeliverTxResponse>;
    sendQueryGrantsResponse({ value, fee, memo }: sendQueryGrantsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGranterGrantsResponse({ value, fee, memo }: sendQueryGranterGrantsResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendGrant({ value, fee, memo }: sendGrantParams): Promise<DeliverTxResponse>;
    sendGrantQueueItem({ value, fee, memo }: sendGrantQueueItemParams): Promise<DeliverTxResponse>;
    sendQueryGrantsRequest({ value, fee, memo }: sendQueryGrantsRequestParams): Promise<DeliverTxResponse>;
    eventGrant({ value }: eventGrantParams): EncodeObject;
    msgGrantResponse({ value }: msgGrantResponseParams): EncodeObject;
    msgRevoke({ value }: msgRevokeParams): EncodeObject;
    genericAuthorization({ value }: genericAuthorizationParams): EncodeObject;
    grantAuthorization({ value }: grantAuthorizationParams): EncodeObject;
    eventRevoke({ value }: eventRevokeParams): EncodeObject;
    queryGranterGrantsRequest({ value }: queryGranterGrantsRequestParams): EncodeObject;
    queryGranteeGrantsResponse({ value }: queryGranteeGrantsResponseParams): EncodeObject;
    queryGranteeGrantsRequest({ value }: queryGranteeGrantsRequestParams): EncodeObject;
    msgGrant({ value }: msgGrantParams): EncodeObject;
    msgExec({ value }: msgExecParams): EncodeObject;
    msgExecResponse({ value }: msgExecResponseParams): EncodeObject;
    msgRevokeResponse({ value }: msgRevokeResponseParams): EncodeObject;
    queryGrantsResponse({ value }: queryGrantsResponseParams): EncodeObject;
    queryGranterGrantsResponse({ value }: queryGranterGrantsResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    grant({ value }: grantParams): EncodeObject;
    grantQueueItem({ value }: grantQueueItemParams): EncodeObject;
    queryGrantsRequest({ value }: queryGrantsRequestParams): EncodeObject;
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
        CosmosAuthzV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
