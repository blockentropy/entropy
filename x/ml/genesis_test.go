package ml_test

import (
	"testing"

	keepertest "github.com/blockentropy/entropy/testutil/keeper"
	"github.com/blockentropy/entropy/testutil/nullify"
	"github.com/blockentropy/entropy/x/ml"
	"github.com/blockentropy/entropy/x/ml/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MlKeeper(t)
	ml.InitGenesis(ctx, *k, genesisState)
	got := ml.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
