import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgGenerate } from "./types/entropy/ml/tx";
import { MsgCtrl } from "./types/entropy/ml/tx";
import { MsgInpaint } from "./types/entropy/ml/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/blockentropy.entropy.ml.MsgGenerate", MsgGenerate],
    ["/blockentropy.entropy.ml.MsgCtrl", MsgCtrl],
    ["/blockentropy.entropy.ml.MsgInpaint", MsgInpaint],
    
];

export { msgTypes }