package keeper

import (
	"context"

	"github.com/blockentropy/entropy/x/ml/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) Inpaint(goCtx context.Context, msg *types.MsgInpaint) (*types.MsgInpaintResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgInpaintResponse{}, nil
}
