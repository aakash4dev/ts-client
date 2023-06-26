/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "airhub.airhub";

export interface Exelayer {
  validator: string[];
  votingPower: number[];
  latestBatch: number;
  latestMerkleRootHash: string;
  verificationKey: string;
  chainInfo: string;
  chainId: string;
  creator: string;
  id: number;
}

function createBaseExelayer(): Exelayer {
  return {
    validator: [],
    votingPower: [],
    latestBatch: 0,
    latestMerkleRootHash: "",
    verificationKey: "",
    chainInfo: "",
    chainId: "",
    creator: "",
    id: 0,
  };
}

export const Exelayer = {
  encode(message: Exelayer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validator) {
      writer.uint32(10).string(v!);
    }
    writer.uint32(18).fork();
    for (const v of message.votingPower) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.latestBatch !== 0) {
      writer.uint32(24).uint64(message.latestBatch);
    }
    if (message.latestMerkleRootHash !== "") {
      writer.uint32(34).string(message.latestMerkleRootHash);
    }
    if (message.verificationKey !== "") {
      writer.uint32(42).string(message.verificationKey);
    }
    if (message.chainInfo !== "") {
      writer.uint32(50).string(message.chainInfo);
    }
    if (message.chainId !== "") {
      writer.uint32(58).string(message.chainId);
    }
    if (message.creator !== "") {
      writer.uint32(66).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(72).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Exelayer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExelayer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator.push(reader.string());
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.votingPower.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.votingPower.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 3:
          message.latestBatch = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.latestMerkleRootHash = reader.string();
          break;
        case 5:
          message.verificationKey = reader.string();
          break;
        case 6:
          message.chainInfo = reader.string();
          break;
        case 7:
          message.chainId = reader.string();
          break;
        case 8:
          message.creator = reader.string();
          break;
        case 9:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Exelayer {
    return {
      validator: Array.isArray(object?.validator) ? object.validator.map((e: any) => String(e)) : [],
      votingPower: Array.isArray(object?.votingPower) ? object.votingPower.map((e: any) => Number(e)) : [],
      latestBatch: isSet(object.latestBatch) ? Number(object.latestBatch) : 0,
      latestMerkleRootHash: isSet(object.latestMerkleRootHash) ? String(object.latestMerkleRootHash) : "",
      verificationKey: isSet(object.verificationKey) ? String(object.verificationKey) : "",
      chainInfo: isSet(object.chainInfo) ? String(object.chainInfo) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: Exelayer): unknown {
    const obj: any = {};
    if (message.validator) {
      obj.validator = message.validator.map((e) => e);
    } else {
      obj.validator = [];
    }
    if (message.votingPower) {
      obj.votingPower = message.votingPower.map((e) => Math.round(e));
    } else {
      obj.votingPower = [];
    }
    message.latestBatch !== undefined && (obj.latestBatch = Math.round(message.latestBatch));
    message.latestMerkleRootHash !== undefined && (obj.latestMerkleRootHash = message.latestMerkleRootHash);
    message.verificationKey !== undefined && (obj.verificationKey = message.verificationKey);
    message.chainInfo !== undefined && (obj.chainInfo = message.chainInfo);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Exelayer>, I>>(object: I): Exelayer {
    const message = createBaseExelayer();
    message.validator = object.validator?.map((e) => e) || [];
    message.votingPower = object.votingPower?.map((e) => e) || [];
    message.latestBatch = object.latestBatch ?? 0;
    message.latestMerkleRootHash = object.latestMerkleRootHash ?? "";
    message.verificationKey = object.verificationKey ?? "";
    message.chainInfo = object.chainInfo ?? "";
    message.chainId = object.chainId ?? "";
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
