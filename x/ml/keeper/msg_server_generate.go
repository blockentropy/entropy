package keeper

import (
	"context"

	"github.com/blockentropy/entropy/x/ml/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) Generate(goCtx context.Context, msg *types.MsgGenerate) (*types.MsgGenerateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgGenerateResponse{}, nil
}
