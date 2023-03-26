package keeper

import (
	"context"

	"github.com/blockentropy/entropy/x/ml/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) Ctrl(goCtx context.Context, msg *types.MsgCtrl) (*types.MsgCtrlResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCtrlResponse{}, nil
}
