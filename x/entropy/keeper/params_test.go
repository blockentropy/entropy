package keeper_test

import (
	"testing"

	testkeeper "github.com/blockentropy/entropy/testutil/keeper"
	"github.com/blockentropy/entropy/x/entropy/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.EntropyKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
