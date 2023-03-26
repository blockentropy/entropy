package cli

import (
	"strconv"

	"github.com/blockentropy/entropy/x/ml/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdGenerate() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "generate [modality] [model] [prompt] [negprompt] [seed] [machine]",
		Short: "Broadcast message generate",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argModality := args[0]
			argModel := args[1]
			argPrompt := args[2]
			argNegprompt := args[3]
			argSeed := args[4]
			argMachine := args[5]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgGenerate(
				clientCtx.GetFromAddress().String(),
				argModality,
				argModel,
				argPrompt,
				argNegprompt,
				argSeed,
				argMachine,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
