import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryParamsRequest } from "./types/bomb/tokenfactory/query";
import { QueryAllDenomRequest } from "./types/bomb/tokenfactory/query";
import { Denom } from "./types/bomb/tokenfactory/denom";
import { MsgUpdateParams } from "./types/bomb/tokenfactory/tx";
import { MsgCreateDenom } from "./types/bomb/tokenfactory/tx";
import { QueryParamsResponse } from "./types/bomb/tokenfactory/query";
import { QueryGetDenomResponse } from "./types/bomb/tokenfactory/query";
import { GenesisState } from "./types/bomb/tokenfactory/genesis";
import { Params } from "./types/bomb/tokenfactory/params";
import { MsgUpdateDenom } from "./types/bomb/tokenfactory/tx";
import { MsgDeleteDenomResponse } from "./types/bomb/tokenfactory/tx";
import { QueryGetDenomRequest } from "./types/bomb/tokenfactory/query";
import { MsgCreateDenomResponse } from "./types/bomb/tokenfactory/tx";
import { MsgUpdateDenomResponse } from "./types/bomb/tokenfactory/tx";
import { MsgDeleteDenom } from "./types/bomb/tokenfactory/tx";
import { QueryAllDenomResponse } from "./types/bomb/tokenfactory/query";
import { MsgUpdateParamsResponse } from "./types/bomb/tokenfactory/tx";
export { QueryParamsRequest, QueryAllDenomRequest, Denom, MsgUpdateParams, MsgCreateDenom, QueryParamsResponse, QueryGetDenomResponse, GenesisState, Params, MsgUpdateDenom, MsgDeleteDenomResponse, QueryGetDenomRequest, MsgCreateDenomResponse, MsgUpdateDenomResponse, MsgDeleteDenom, QueryAllDenomResponse, MsgUpdateParamsResponse };
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllDenomRequestParams = {
    value: QueryAllDenomRequest;
    fee?: StdFee;
    memo?: string;
};
type sendDenomParams = {
    value: Denom;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateDenomParams = {
    value: MsgCreateDenom;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetDenomResponseParams = {
    value: QueryGetDenomResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateDenomParams = {
    value: MsgUpdateDenom;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDeleteDenomResponseParams = {
    value: MsgDeleteDenomResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetDenomRequestParams = {
    value: QueryGetDenomRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateDenomResponseParams = {
    value: MsgCreateDenomResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateDenomResponseParams = {
    value: MsgUpdateDenomResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDeleteDenomParams = {
    value: MsgDeleteDenom;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllDenomResponseParams = {
    value: QueryAllDenomResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryAllDenomRequestParams = {
    value: QueryAllDenomRequest;
};
type denomParams = {
    value: Denom;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgCreateDenomParams = {
    value: MsgCreateDenom;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryGetDenomResponseParams = {
    value: QueryGetDenomResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type paramsParams = {
    value: Params;
};
type msgUpdateDenomParams = {
    value: MsgUpdateDenom;
};
type msgDeleteDenomResponseParams = {
    value: MsgDeleteDenomResponse;
};
type queryGetDenomRequestParams = {
    value: QueryGetDenomRequest;
};
type msgCreateDenomResponseParams = {
    value: MsgCreateDenomResponse;
};
type msgUpdateDenomResponseParams = {
    value: MsgUpdateDenomResponse;
};
type msgDeleteDenomParams = {
    value: MsgDeleteDenom;
};
type queryAllDenomResponseParams = {
    value: QueryAllDenomResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryAllDenomRequest({ value, fee, memo }: sendQueryAllDenomRequestParams): Promise<DeliverTxResponse>;
    sendDenom({ value, fee, memo }: sendDenomParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgCreateDenom({ value, fee, memo }: sendMsgCreateDenomParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetDenomResponse({ value, fee, memo }: sendQueryGetDenomResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgUpdateDenom({ value, fee, memo }: sendMsgUpdateDenomParams): Promise<DeliverTxResponse>;
    sendMsgDeleteDenomResponse({ value, fee, memo }: sendMsgDeleteDenomResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetDenomRequest({ value, fee, memo }: sendQueryGetDenomRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateDenomResponse({ value, fee, memo }: sendMsgCreateDenomResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateDenomResponse({ value, fee, memo }: sendMsgUpdateDenomResponseParams): Promise<DeliverTxResponse>;
    sendMsgDeleteDenom({ value, fee, memo }: sendMsgDeleteDenomParams): Promise<DeliverTxResponse>;
    sendQueryAllDenomResponse({ value, fee, memo }: sendQueryAllDenomResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryAllDenomRequest({ value }: queryAllDenomRequestParams): EncodeObject;
    denom({ value }: denomParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgCreateDenom({ value }: msgCreateDenomParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryGetDenomResponse({ value }: queryGetDenomResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgUpdateDenom({ value }: msgUpdateDenomParams): EncodeObject;
    msgDeleteDenomResponse({ value }: msgDeleteDenomResponseParams): EncodeObject;
    queryGetDenomRequest({ value }: queryGetDenomRequestParams): EncodeObject;
    msgCreateDenomResponse({ value }: msgCreateDenomResponseParams): EncodeObject;
    msgUpdateDenomResponse({ value }: msgUpdateDenomResponseParams): EncodeObject;
    msgDeleteDenom({ value }: msgDeleteDenomParams): EncodeObject;
    queryAllDenomResponse({ value }: queryAllDenomResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
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
        BombTokenfactory: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
