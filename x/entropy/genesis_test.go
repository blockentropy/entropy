package entropy_test

import (
	"testing"

	keepertest "github.com/blockentropy/entropy/testutil/keeper"
	"github.com/blockentropy/entropy/testutil/nullify"
	"github.com/blockentropy/entropy/x/entropy"
	"github.com/blockentropy/entropy/x/entropy/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.EntropyKeeper(t)
	entropy.InitGenesis(ctx, *k, genesisState)
	got := entropy.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
