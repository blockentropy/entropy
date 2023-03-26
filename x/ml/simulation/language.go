package simulation

import (
	"math/rand"

	"github.com/blockentropy/entropy/x/ml/keeper"
	"github.com/blockentropy/entropy/x/ml/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgLanguage(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgLanguage{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the Language simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "Language simulation not implemented"), nil, nil
	}
}
