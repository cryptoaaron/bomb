import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryInterchainAccountResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/query";
import { QueryParamsRequest } from "./types/ibc/applications/interchain_accounts/controller/v1/query";
import { Params } from "./types/ibc/applications/interchain_accounts/controller/v1/controller";
import { MsgRegisterInterchainAccount } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { MsgUpdateParams } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { MsgUpdateParamsResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { QueryInterchainAccountRequest } from "./types/ibc/applications/interchain_accounts/controller/v1/query";
import { MsgSendTx } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { MsgRegisterInterchainAccountResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { MsgSendTxResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { QueryParamsResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/query";
export { QueryInterchainAccountResponse, QueryParamsRequest, Params, MsgRegisterInterchainAccount, MsgUpdateParams, MsgUpdateParamsResponse, QueryInterchainAccountRequest, MsgSendTx, MsgRegisterInterchainAccountResponse, MsgSendTxResponse, QueryParamsResponse };
type sendQueryInterchainAccountResponseParams = {
    value: QueryInterchainAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterInterchainAccountParams = {
    value: MsgRegisterInterchainAccount;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryInterchainAccountRequestParams = {
    value: QueryInterchainAccountRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendTxParams = {
    value: MsgSendTx;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterInterchainAccountResponseParams = {
    value: MsgRegisterInterchainAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendTxResponseParams = {
    value: MsgSendTxResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type queryInterchainAccountResponseParams = {
    value: QueryInterchainAccountResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type paramsParams = {
    value: Params;
};
type msgRegisterInterchainAccountParams = {
    value: MsgRegisterInterchainAccount;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryInterchainAccountRequestParams = {
    value: QueryInterchainAccountRequest;
};
type msgSendTxParams = {
    value: MsgSendTx;
};
type msgRegisterInterchainAccountResponseParams = {
    value: MsgRegisterInterchainAccountResponse;
};
type msgSendTxResponseParams = {
    value: MsgSendTxResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryInterchainAccountResponse({ value, fee, memo }: sendQueryInterchainAccountResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgRegisterInterchainAccount({ value, fee, memo }: sendMsgRegisterInterchainAccountParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryInterchainAccountRequest({ value, fee, memo }: sendQueryInterchainAccountRequestParams): Promise<DeliverTxResponse>;
    sendMsgSendTx({ value, fee, memo }: sendMsgSendTxParams): Promise<DeliverTxResponse>;
    sendMsgRegisterInterchainAccountResponse({ value, fee, memo }: sendMsgRegisterInterchainAccountResponseParams): Promise<DeliverTxResponse>;
    sendMsgSendTxResponse({ value, fee, memo }: sendMsgSendTxResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    queryInterchainAccountResponse({ value }: queryInterchainAccountResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgRegisterInterchainAccount({ value }: msgRegisterInterchainAccountParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryInterchainAccountRequest({ value }: queryInterchainAccountRequestParams): EncodeObject;
    msgSendTx({ value }: msgSendTxParams): EncodeObject;
    msgRegisterInterchainAccountResponse({ value }: msgRegisterInterchainAccountResponseParams): EncodeObject;
    msgSendTxResponse({ value }: msgSendTxResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
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
        IbcApplicationsInterchainAccountsControllerV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
