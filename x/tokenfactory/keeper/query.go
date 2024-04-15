package keeper

import (
	"bomb/x/tokenfactory/types"
)

var _ types.QueryServer = Keeper{}
