package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgGenerate{}, "ml/Generate", nil)
	cdc.RegisterConcrete(&MsgInpaint{}, "ml/Inpaint", nil)
	cdc.RegisterConcrete(&MsgCtrl{}, "ml/Ctrl", nil)
	cdc.RegisterConcrete(&MsgLanguage{}, "ml/Language", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgGenerate{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgInpaint{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCtrl{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgLanguage{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
