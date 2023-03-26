package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgLanguage = "language"

var _ sdk.Msg = &MsgLanguage{}

func NewMsgLanguage(creator string, model string, body string) *MsgLanguage {
	return &MsgLanguage{
		Creator: creator,
		Model:   model,
		Body:    body,
	}
}

func (msg *MsgLanguage) Route() string {
	return RouterKey
}

func (msg *MsgLanguage) Type() string {
	return TypeMsgLanguage
}

func (msg *MsgLanguage) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgLanguage) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgLanguage) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
