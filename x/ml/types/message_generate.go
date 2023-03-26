package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgGenerate = "generate"

var _ sdk.Msg = &MsgGenerate{}

func NewMsgGenerate(creator string, modality string, model string, prompt string, negprompt string, seed string, machine string) *MsgGenerate {
	return &MsgGenerate{
		Creator:   creator,
		Modality:  modality,
		Model:     model,
		Prompt:    prompt,
		Negprompt: negprompt,
		Seed:      seed,
		Machine:   machine,
	}
}

func (msg *MsgGenerate) Route() string {
	return RouterKey
}

func (msg *MsgGenerate) Type() string {
	return TypeMsgGenerate
}

func (msg *MsgGenerate) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgGenerate) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgGenerate) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
