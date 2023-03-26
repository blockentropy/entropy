/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "blockentropy.entropy.ml";

export interface MsgGenerate {
  creator: string;
  modality: string;
  model: string;
  prompt: string;
  negprompt: string;
  seed: string;
  machine: string;
}

export interface MsgGenerateResponse {
}

export interface MsgInpaint {
  creator: string;
  model: string;
  image: string;
  mask: string;
  prompt: string;
  negprompt: string;
  seed: string;
  machine: string;
}

export interface MsgInpaintResponse {
}

export interface MsgCtrl {
  creator: string;
  model: string;
  ctrlmodel: string;
  image: string;
  prompt: string;
  negprompt: string;
  seed: string;
  machine: string;
}

export interface MsgCtrlResponse {
}

function createBaseMsgGenerate(): MsgGenerate {
  return { creator: "", modality: "", model: "", prompt: "", negprompt: "", seed: "", machine: "" };
}

export const MsgGenerate = {
  encode(message: MsgGenerate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.modality !== "") {
      writer.uint32(18).string(message.modality);
    }
    if (message.model !== "") {
      writer.uint32(26).string(message.model);
    }
    if (message.prompt !== "") {
      writer.uint32(34).string(message.prompt);
    }
    if (message.negprompt !== "") {
      writer.uint32(42).string(message.negprompt);
    }
    if (message.seed !== "") {
      writer.uint32(50).string(message.seed);
    }
    if (message.machine !== "") {
      writer.uint32(58).string(message.machine);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGenerate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGenerate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.modality = reader.string();
          break;
        case 3:
          message.model = reader.string();
          break;
        case 4:
          message.prompt = reader.string();
          break;
        case 5:
          message.negprompt = reader.string();
          break;
        case 6:
          message.seed = reader.string();
          break;
        case 7:
          message.machine = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgGenerate {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      modality: isSet(object.modality) ? String(object.modality) : "",
      model: isSet(object.model) ? String(object.model) : "",
      prompt: isSet(object.prompt) ? String(object.prompt) : "",
      negprompt: isSet(object.negprompt) ? String(object.negprompt) : "",
      seed: isSet(object.seed) ? String(object.seed) : "",
      machine: isSet(object.machine) ? String(object.machine) : "",
    };
  },

  toJSON(message: MsgGenerate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.modality !== undefined && (obj.modality = message.modality);
    message.model !== undefined && (obj.model = message.model);
    message.prompt !== undefined && (obj.prompt = message.prompt);
    message.negprompt !== undefined && (obj.negprompt = message.negprompt);
    message.seed !== undefined && (obj.seed = message.seed);
    message.machine !== undefined && (obj.machine = message.machine);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGenerate>, I>>(object: I): MsgGenerate {
    const message = createBaseMsgGenerate();
    message.creator = object.creator ?? "";
    message.modality = object.modality ?? "";
    message.model = object.model ?? "";
    message.prompt = object.prompt ?? "";
    message.negprompt = object.negprompt ?? "";
    message.seed = object.seed ?? "";
    message.machine = object.machine ?? "";
    return message;
  },
};

function createBaseMsgGenerateResponse(): MsgGenerateResponse {
  return {};
}

export const MsgGenerateResponse = {
  encode(_: MsgGenerateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGenerateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGenerateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgGenerateResponse {
    return {};
  },

  toJSON(_: MsgGenerateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGenerateResponse>, I>>(_: I): MsgGenerateResponse {
    const message = createBaseMsgGenerateResponse();
    return message;
  },
};

function createBaseMsgInpaint(): MsgInpaint {
  return { creator: "", model: "", image: "", mask: "", prompt: "", negprompt: "", seed: "", machine: "" };
}

export const MsgInpaint = {
  encode(message: MsgInpaint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.model !== "") {
      writer.uint32(18).string(message.model);
    }
    if (message.image !== "") {
      writer.uint32(26).string(message.image);
    }
    if (message.mask !== "") {
      writer.uint32(34).string(message.mask);
    }
    if (message.prompt !== "") {
      writer.uint32(42).string(message.prompt);
    }
    if (message.negprompt !== "") {
      writer.uint32(50).string(message.negprompt);
    }
    if (message.seed !== "") {
      writer.uint32(58).string(message.seed);
    }
    if (message.machine !== "") {
      writer.uint32(66).string(message.machine);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInpaint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInpaint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.model = reader.string();
          break;
        case 3:
          message.image = reader.string();
          break;
        case 4:
          message.mask = reader.string();
          break;
        case 5:
          message.prompt = reader.string();
          break;
        case 6:
          message.negprompt = reader.string();
          break;
        case 7:
          message.seed = reader.string();
          break;
        case 8:
          message.machine = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInpaint {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      model: isSet(object.model) ? String(object.model) : "",
      image: isSet(object.image) ? String(object.image) : "",
      mask: isSet(object.mask) ? String(object.mask) : "",
      prompt: isSet(object.prompt) ? String(object.prompt) : "",
      negprompt: isSet(object.negprompt) ? String(object.negprompt) : "",
      seed: isSet(object.seed) ? String(object.seed) : "",
      machine: isSet(object.machine) ? String(object.machine) : "",
    };
  },

  toJSON(message: MsgInpaint): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.model !== undefined && (obj.model = message.model);
    message.image !== undefined && (obj.image = message.image);
    message.mask !== undefined && (obj.mask = message.mask);
    message.prompt !== undefined && (obj.prompt = message.prompt);
    message.negprompt !== undefined && (obj.negprompt = message.negprompt);
    message.seed !== undefined && (obj.seed = message.seed);
    message.machine !== undefined && (obj.machine = message.machine);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgInpaint>, I>>(object: I): MsgInpaint {
    const message = createBaseMsgInpaint();
    message.creator = object.creator ?? "";
    message.model = object.model ?? "";
    message.image = object.image ?? "";
    message.mask = object.mask ?? "";
    message.prompt = object.prompt ?? "";
    message.negprompt = object.negprompt ?? "";
    message.seed = object.seed ?? "";
    message.machine = object.machine ?? "";
    return message;
  },
};

function createBaseMsgInpaintResponse(): MsgInpaintResponse {
  return {};
}

export const MsgInpaintResponse = {
  encode(_: MsgInpaintResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInpaintResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInpaintResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgInpaintResponse {
    return {};
  },

  toJSON(_: MsgInpaintResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgInpaintResponse>, I>>(_: I): MsgInpaintResponse {
    const message = createBaseMsgInpaintResponse();
    return message;
  },
};

function createBaseMsgCtrl(): MsgCtrl {
  return { creator: "", model: "", ctrlmodel: "", image: "", prompt: "", negprompt: "", seed: "", machine: "" };
}

export const MsgCtrl = {
  encode(message: MsgCtrl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.model !== "") {
      writer.uint32(18).string(message.model);
    }
    if (message.ctrlmodel !== "") {
      writer.uint32(26).string(message.ctrlmodel);
    }
    if (message.image !== "") {
      writer.uint32(34).string(message.image);
    }
    if (message.prompt !== "") {
      writer.uint32(42).string(message.prompt);
    }
    if (message.negprompt !== "") {
      writer.uint32(50).string(message.negprompt);
    }
    if (message.seed !== "") {
      writer.uint32(58).string(message.seed);
    }
    if (message.machine !== "") {
      writer.uint32(66).string(message.machine);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCtrl {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCtrl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.model = reader.string();
          break;
        case 3:
          message.ctrlmodel = reader.string();
          break;
        case 4:
          message.image = reader.string();
          break;
        case 5:
          message.prompt = reader.string();
          break;
        case 6:
          message.negprompt = reader.string();
          break;
        case 7:
          message.seed = reader.string();
          break;
        case 8:
          message.machine = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCtrl {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      model: isSet(object.model) ? String(object.model) : "",
      ctrlmodel: isSet(object.ctrlmodel) ? String(object.ctrlmodel) : "",
      image: isSet(object.image) ? String(object.image) : "",
      prompt: isSet(object.prompt) ? String(object.prompt) : "",
      negprompt: isSet(object.negprompt) ? String(object.negprompt) : "",
      seed: isSet(object.seed) ? String(object.seed) : "",
      machine: isSet(object.machine) ? String(object.machine) : "",
    };
  },

  toJSON(message: MsgCtrl): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.model !== undefined && (obj.model = message.model);
    message.ctrlmodel !== undefined && (obj.ctrlmodel = message.ctrlmodel);
    message.image !== undefined && (obj.image = message.image);
    message.prompt !== undefined && (obj.prompt = message.prompt);
    message.negprompt !== undefined && (obj.negprompt = message.negprompt);
    message.seed !== undefined && (obj.seed = message.seed);
    message.machine !== undefined && (obj.machine = message.machine);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCtrl>, I>>(object: I): MsgCtrl {
    const message = createBaseMsgCtrl();
    message.creator = object.creator ?? "";
    message.model = object.model ?? "";
    message.ctrlmodel = object.ctrlmodel ?? "";
    message.image = object.image ?? "";
    message.prompt = object.prompt ?? "";
    message.negprompt = object.negprompt ?? "";
    message.seed = object.seed ?? "";
    message.machine = object.machine ?? "";
    return message;
  },
};

function createBaseMsgCtrlResponse(): MsgCtrlResponse {
  return {};
}

export const MsgCtrlResponse = {
  encode(_: MsgCtrlResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCtrlResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCtrlResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCtrlResponse {
    return {};
  },

  toJSON(_: MsgCtrlResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCtrlResponse>, I>>(_: I): MsgCtrlResponse {
    const message = createBaseMsgCtrlResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  Generate(request: MsgGenerate): Promise<MsgGenerateResponse>;
  Inpaint(request: MsgInpaint): Promise<MsgInpaintResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Ctrl(request: MsgCtrl): Promise<MsgCtrlResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Generate = this.Generate.bind(this);
    this.Inpaint = this.Inpaint.bind(this);
    this.Ctrl = this.Ctrl.bind(this);
  }
  Generate(request: MsgGenerate): Promise<MsgGenerateResponse> {
    const data = MsgGenerate.encode(request).finish();
    const promise = this.rpc.request("blockentropy.entropy.ml.Msg", "Generate", data);
    return promise.then((data) => MsgGenerateResponse.decode(new _m0.Reader(data)));
  }

  Inpaint(request: MsgInpaint): Promise<MsgInpaintResponse> {
    const data = MsgInpaint.encode(request).finish();
    const promise = this.rpc.request("blockentropy.entropy.ml.Msg", "Inpaint", data);
    return promise.then((data) => MsgInpaintResponse.decode(new _m0.Reader(data)));
  }

  Ctrl(request: MsgCtrl): Promise<MsgCtrlResponse> {
    const data = MsgCtrl.encode(request).finish();
    const promise = this.rpc.request("blockentropy.entropy.ml.Msg", "Ctrl", data);
    return promise.then((data) => MsgCtrlResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
