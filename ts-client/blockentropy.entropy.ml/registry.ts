import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgLanguage } from "./types/entropy/ml/tx";
import { MsgCtrl } from "./types/entropy/ml/tx";
import { MsgGenerate } from "./types/entropy/ml/tx";
import { MsgInpaint } from "./types/entropy/ml/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/blockentropy.entropy.ml.MsgLanguage", MsgLanguage],
    ["/blockentropy.entropy.ml.MsgCtrl", MsgCtrl],
    ["/blockentropy.entropy.ml.MsgGenerate", MsgGenerate],
    ["/blockentropy.entropy.ml.MsgInpaint", MsgInpaint],
    
];

export { msgTypes }