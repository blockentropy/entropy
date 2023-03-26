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

func CmdInpaint() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "inpaint [model] [image] [mask] [prompt] [negprompt] [seed] [machine]",
		Short: "Broadcast message inpaint",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argModel := args[0]
			argImage := args[1]
			argMask := args[2]
			argPrompt := args[3]
			argNegprompt := args[4]
			argSeed := args[5]
			argMachine := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgInpaint(
				clientCtx.GetFromAddress().String(),
				argModel,
				argImage,
				argMask,
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
