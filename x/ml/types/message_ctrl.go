package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCtrl = "ctrl"

var _ sdk.Msg = &MsgCtrl{}

func NewMsgCtrl(creator string, model string, ctrlmodel string, image string, prompt string, negprompt string, seed string, machine string) *MsgCtrl {
	return &MsgCtrl{
		Creator:   creator,
		Model:     model,
		Ctrlmodel: ctrlmodel,
		Image:     image,
		Prompt:    prompt,
		Negprompt: negprompt,
		Seed:      seed,
		Machine:   machine,
	}
}

func (msg *MsgCtrl) Route() string {
	return RouterKey
}

func (msg *MsgCtrl) Type() string {
	return TypeMsgCtrl
}

func (msg *MsgCtrl) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCtrl) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCtrl) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
