package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgInpaint = "inpaint"

var _ sdk.Msg = &MsgInpaint{}

func NewMsgInpaint(creator string, model string, image string, mask string, prompt string, negprompt string, seed string, machine string) *MsgInpaint {
	return &MsgInpaint{
		Creator:   creator,
		Model:     model,
		Image:     image,
		Mask:      mask,
		Prompt:    prompt,
		Negprompt: negprompt,
		Seed:      seed,
		Machine:   machine,
	}
}

func (msg *MsgInpaint) Route() string {
	return RouterKey
}

func (msg *MsgInpaint) Type() string {
	return TypeMsgInpaint
}

func (msg *MsgInpaint) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgInpaint) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgInpaint) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
