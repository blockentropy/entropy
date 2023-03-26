package keeper

import (
	"github.com/blockentropy/entropy/x/entropy/types"
)

var _ types.QueryServer = Keeper{}
