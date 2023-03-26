/* eslint-disable */
export const protobufPackage = "blockentropy.entropy.entropy";

/** Msg defines the Msg service. */
export interface Msg {
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
