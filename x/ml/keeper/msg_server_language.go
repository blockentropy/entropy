package keeper

import (
	"context"

	"github.com/blockentropy/entropy/x/ml/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) Language(goCtx context.Context, msg *types.MsgLanguage) (*types.MsgLanguageResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgLanguageResponse{}, nil
}
