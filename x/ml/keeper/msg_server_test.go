package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/blockentropy/entropy/testutil/keeper"
	"github.com/blockentropy/entropy/x/ml/keeper"
	"github.com/blockentropy/entropy/x/ml/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.MlKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
