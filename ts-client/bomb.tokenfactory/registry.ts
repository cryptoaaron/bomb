import { GeneratedType } from "@cosmjs/proto-signing";
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

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/bomb.tokenfactory.QueryParamsRequest", QueryParamsRequest],
    ["/bomb.tokenfactory.QueryAllDenomRequest", QueryAllDenomRequest],
    ["/bomb.tokenfactory.Denom", Denom],
    ["/bomb.tokenfactory.MsgUpdateParams", MsgUpdateParams],
    ["/bomb.tokenfactory.MsgCreateDenom", MsgCreateDenom],
    ["/bomb.tokenfactory.QueryParamsResponse", QueryParamsResponse],
    ["/bomb.tokenfactory.QueryGetDenomResponse", QueryGetDenomResponse],
    ["/bomb.tokenfactory.GenesisState", GenesisState],
    ["/bomb.tokenfactory.Params", Params],
    ["/bomb.tokenfactory.MsgUpdateDenom", MsgUpdateDenom],
    ["/bomb.tokenfactory.MsgDeleteDenomResponse", MsgDeleteDenomResponse],
    ["/bomb.tokenfactory.QueryGetDenomRequest", QueryGetDenomRequest],
    ["/bomb.tokenfactory.MsgCreateDenomResponse", MsgCreateDenomResponse],
    ["/bomb.tokenfactory.MsgUpdateDenomResponse", MsgUpdateDenomResponse],
    ["/bomb.tokenfactory.MsgDeleteDenom", MsgDeleteDenom],
    ["/bomb.tokenfactory.QueryAllDenomResponse", QueryAllDenomResponse],
    ["/bomb.tokenfactory.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    
];

export { msgTypes }