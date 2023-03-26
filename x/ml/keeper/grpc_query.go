package keeper

import (
	"github.com/blockentropy/entropy/x/ml/types"
)

var _ types.QueryServer = Keeper{}
