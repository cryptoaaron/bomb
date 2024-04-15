import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateParamsResponse } from "./types/bomb/tokenfactory/tx";
import { GenesisState } from "./types/bomb/tokenfactory/genesis";
import { QueryParamsRequest } from "./types/bomb/tokenfactory/query";
import { Params } from "./types/bomb/tokenfactory/params";
import { QueryParamsResponse } from "./types/bomb/tokenfactory/query";
import { MsgUpdateParams } from "./types/bomb/tokenfactory/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/bomb.tokenfactory.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/bomb.tokenfactory.GenesisState", GenesisState],
    ["/bomb.tokenfactory.QueryParamsRequest", QueryParamsRequest],
    ["/bomb.tokenfactory.Params", Params],
    ["/bomb.tokenfactory.QueryParamsResponse", QueryParamsResponse],
    ["/bomb.tokenfactory.MsgUpdateParams", MsgUpdateParams],
    
];

export { msgTypes }