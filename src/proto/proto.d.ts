import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace pb. */
export namespace pb {

    /** ConnectRetCode enum. */
    enum ConnectRetCode {
        CR_Unknow = 0,
        CR_Success = 2001,
        CR_Offline = 2002,
        CR_Error = 5001
    }

    /** Properties of a ConnectSendClientReq. */
    interface IConnectSendClientReq {

        /** ConnectSendClientReq sessionId */
        sessionId?: (string|null);

        /** ConnectSendClientReq serverId */
        serverId?: (number|null);

        /** ConnectSendClientReq command */
        command?: (pb.Packet|null);

        /** ConnectSendClientReq payload */
        payload?: (Uint8Array|null);
    }

    /** Represents a ConnectSendClientReq. */
    class ConnectSendClientReq implements IConnectSendClientReq {

        /**
         * Constructs a new ConnectSendClientReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IConnectSendClientReq);

        /** ConnectSendClientReq sessionId. */
        public sessionId: string;

        /** ConnectSendClientReq serverId. */
        public serverId: number;

        /** ConnectSendClientReq command. */
        public command: pb.Packet;

        /** ConnectSendClientReq payload. */
        public payload: Uint8Array;

        /**
         * Creates a new ConnectSendClientReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConnectSendClientReq instance
         */
        public static create(properties?: pb.IConnectSendClientReq): pb.ConnectSendClientReq;

        /**
         * Encodes the specified ConnectSendClientReq message. Does not implicitly {@link pb.ConnectSendClientReq.verify|verify} messages.
         * @param message ConnectSendClientReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IConnectSendClientReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConnectSendClientReq message, length delimited. Does not implicitly {@link pb.ConnectSendClientReq.verify|verify} messages.
         * @param message ConnectSendClientReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IConnectSendClientReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConnectSendClientReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConnectSendClientReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ConnectSendClientReq;

        /**
         * Decodes a ConnectSendClientReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConnectSendClientReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ConnectSendClientReq;

        /**
         * Verifies a ConnectSendClientReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConnectSendClientReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConnectSendClientReq
         */
        public static fromObject(object: { [k: string]: any }): pb.ConnectSendClientReq;

        /**
         * Creates a plain object from a ConnectSendClientReq message. Also converts values to other types if specified.
         * @param message ConnectSendClientReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ConnectSendClientReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConnectSendClientReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ConnectSendClientReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ConnectSendClientRes. */
    interface IConnectSendClientRes {

        /** ConnectSendClientRes retCode */
        retCode?: (pb.ConnectRetCode|null);

        /** ConnectSendClientRes msg */
        msg?: (string|null);
    }

    /** Represents a ConnectSendClientRes. */
    class ConnectSendClientRes implements IConnectSendClientRes {

        /**
         * Constructs a new ConnectSendClientRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IConnectSendClientRes);

        /** ConnectSendClientRes retCode. */
        public retCode: pb.ConnectRetCode;

        /** ConnectSendClientRes msg. */
        public msg: string;

        /**
         * Creates a new ConnectSendClientRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConnectSendClientRes instance
         */
        public static create(properties?: pb.IConnectSendClientRes): pb.ConnectSendClientRes;

        /**
         * Encodes the specified ConnectSendClientRes message. Does not implicitly {@link pb.ConnectSendClientRes.verify|verify} messages.
         * @param message ConnectSendClientRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IConnectSendClientRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConnectSendClientRes message, length delimited. Does not implicitly {@link pb.ConnectSendClientRes.verify|verify} messages.
         * @param message ConnectSendClientRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IConnectSendClientRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConnectSendClientRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConnectSendClientRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ConnectSendClientRes;

        /**
         * Decodes a ConnectSendClientRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConnectSendClientRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ConnectSendClientRes;

        /**
         * Verifies a ConnectSendClientRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConnectSendClientRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConnectSendClientRes
         */
        public static fromObject(object: { [k: string]: any }): pb.ConnectSendClientRes;

        /**
         * Creates a plain object from a ConnectSendClientRes message. Also converts values to other types if specified.
         * @param message ConnectSendClientRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ConnectSendClientRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConnectSendClientRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ConnectSendClientRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ConnectKickClientReq. */
    interface IConnectKickClientReq {

        /** ConnectKickClientReq sessionId */
        sessionId?: (string|null);

        /** ConnectKickClientReq serverId */
        serverId?: (number|null);
    }

    /** Represents a ConnectKickClientReq. */
    class ConnectKickClientReq implements IConnectKickClientReq {

        /**
         * Constructs a new ConnectKickClientReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IConnectKickClientReq);

        /** ConnectKickClientReq sessionId. */
        public sessionId: string;

        /** ConnectKickClientReq serverId. */
        public serverId: number;

        /**
         * Creates a new ConnectKickClientReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConnectKickClientReq instance
         */
        public static create(properties?: pb.IConnectKickClientReq): pb.ConnectKickClientReq;

        /**
         * Encodes the specified ConnectKickClientReq message. Does not implicitly {@link pb.ConnectKickClientReq.verify|verify} messages.
         * @param message ConnectKickClientReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IConnectKickClientReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConnectKickClientReq message, length delimited. Does not implicitly {@link pb.ConnectKickClientReq.verify|verify} messages.
         * @param message ConnectKickClientReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IConnectKickClientReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConnectKickClientReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConnectKickClientReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ConnectKickClientReq;

        /**
         * Decodes a ConnectKickClientReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConnectKickClientReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ConnectKickClientReq;

        /**
         * Verifies a ConnectKickClientReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConnectKickClientReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConnectKickClientReq
         */
        public static fromObject(object: { [k: string]: any }): pb.ConnectKickClientReq;

        /**
         * Creates a plain object from a ConnectKickClientReq message. Also converts values to other types if specified.
         * @param message ConnectKickClientReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ConnectKickClientReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConnectKickClientReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ConnectKickClientReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ConnectKickClientRes. */
    interface IConnectKickClientRes {

        /** ConnectKickClientRes retCode */
        retCode?: (pb.ConnectRetCode|null);
    }

    /** Represents a ConnectKickClientRes. */
    class ConnectKickClientRes implements IConnectKickClientRes {

        /**
         * Constructs a new ConnectKickClientRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IConnectKickClientRes);

        /** ConnectKickClientRes retCode. */
        public retCode: pb.ConnectRetCode;

        /**
         * Creates a new ConnectKickClientRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConnectKickClientRes instance
         */
        public static create(properties?: pb.IConnectKickClientRes): pb.ConnectKickClientRes;

        /**
         * Encodes the specified ConnectKickClientRes message. Does not implicitly {@link pb.ConnectKickClientRes.verify|verify} messages.
         * @param message ConnectKickClientRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IConnectKickClientRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConnectKickClientRes message, length delimited. Does not implicitly {@link pb.ConnectKickClientRes.verify|verify} messages.
         * @param message ConnectKickClientRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IConnectKickClientRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConnectKickClientRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConnectKickClientRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ConnectKickClientRes;

        /**
         * Decodes a ConnectKickClientRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConnectKickClientRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ConnectKickClientRes;

        /**
         * Verifies a ConnectKickClientRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConnectKickClientRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConnectKickClientRes
         */
        public static fromObject(object: { [k: string]: any }): pb.ConnectKickClientRes;

        /**
         * Creates a plain object from a ConnectKickClientRes message. Also converts values to other types if specified.
         * @param message ConnectKickClientRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ConnectKickClientRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConnectKickClientRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ConnectKickClientRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LogicDataReq. */
    interface ILogicDataReq {

        /** LogicDataReq command */
        command?: (pb.Packet|null);

        /** LogicDataReq data */
        data?: (Uint8Array|null);

        /** LogicDataReq sessionId */
        sessionId?: (string|null);

        /** LogicDataReq serverId */
        serverId?: (number|null);

        /** LogicDataReq userId */
        userId?: (number|Long|null);
    }

    /** Represents a LogicDataReq. */
    class LogicDataReq implements ILogicDataReq {

        /**
         * Constructs a new LogicDataReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ILogicDataReq);

        /** LogicDataReq command. */
        public command: pb.Packet;

        /** LogicDataReq data. */
        public data: Uint8Array;

        /** LogicDataReq sessionId. */
        public sessionId: string;

        /** LogicDataReq serverId. */
        public serverId: number;

        /** LogicDataReq userId. */
        public userId: (number|Long);

        /**
         * Creates a new LogicDataReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LogicDataReq instance
         */
        public static create(properties?: pb.ILogicDataReq): pb.LogicDataReq;

        /**
         * Encodes the specified LogicDataReq message. Does not implicitly {@link pb.LogicDataReq.verify|verify} messages.
         * @param message LogicDataReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ILogicDataReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LogicDataReq message, length delimited. Does not implicitly {@link pb.LogicDataReq.verify|verify} messages.
         * @param message LogicDataReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ILogicDataReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LogicDataReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LogicDataReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.LogicDataReq;

        /**
         * Decodes a LogicDataReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LogicDataReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.LogicDataReq;

        /**
         * Verifies a LogicDataReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LogicDataReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LogicDataReq
         */
        public static fromObject(object: { [k: string]: any }): pb.LogicDataReq;

        /**
         * Creates a plain object from a LogicDataReq message. Also converts values to other types if specified.
         * @param message LogicDataReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.LogicDataReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LogicDataReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LogicDataReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LogicDataRes. */
    interface ILogicDataRes {

        /** LogicDataRes command */
        command?: (pb.Packet|null);

        /** LogicDataRes data */
        data?: (Uint8Array|null);

        /** LogicDataRes isSend */
        isSend?: (boolean|null);

        /** LogicDataRes userId */
        userId?: (number|Long|null);
    }

    /** Represents a LogicDataRes. */
    class LogicDataRes implements ILogicDataRes {

        /**
         * Constructs a new LogicDataRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ILogicDataRes);

        /** LogicDataRes command. */
        public command: pb.Packet;

        /** LogicDataRes data. */
        public data: Uint8Array;

        /** LogicDataRes isSend. */
        public isSend: boolean;

        /** LogicDataRes userId. */
        public userId: (number|Long);

        /**
         * Creates a new LogicDataRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LogicDataRes instance
         */
        public static create(properties?: pb.ILogicDataRes): pb.LogicDataRes;

        /**
         * Encodes the specified LogicDataRes message. Does not implicitly {@link pb.LogicDataRes.verify|verify} messages.
         * @param message LogicDataRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ILogicDataRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LogicDataRes message, length delimited. Does not implicitly {@link pb.LogicDataRes.verify|verify} messages.
         * @param message LogicDataRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ILogicDataRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LogicDataRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LogicDataRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.LogicDataRes;

        /**
         * Decodes a LogicDataRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LogicDataRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.LogicDataRes;

        /**
         * Verifies a LogicDataRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LogicDataRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LogicDataRes
         */
        public static fromObject(object: { [k: string]: any }): pb.LogicDataRes;

        /**
         * Creates a plain object from a LogicDataRes message. Also converts values to other types if specified.
         * @param message LogicDataRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.LogicDataRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LogicDataRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LogicDataRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MqMsg. */
    interface IMqMsg {

        /** MqMsg data */
        data?: (Uint8Array|null);

        /** MqMsg sessionId */
        sessionId?: (string|null);

        /** MqMsg fromId */
        fromId?: (number|Long|null);

        /** MqMsg receiveId */
        receiveId?: (number|Long|null);
    }

    /** Represents a MqMsg. */
    class MqMsg implements IMqMsg {

        /**
         * Constructs a new MqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMqMsg);

        /** MqMsg data. */
        public data: Uint8Array;

        /** MqMsg sessionId. */
        public sessionId: string;

        /** MqMsg fromId. */
        public fromId: (number|Long);

        /** MqMsg receiveId. */
        public receiveId: (number|Long);

        /**
         * Creates a new MqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MqMsg instance
         */
        public static create(properties?: pb.IMqMsg): pb.MqMsg;

        /**
         * Encodes the specified MqMsg message. Does not implicitly {@link pb.MqMsg.verify|verify} messages.
         * @param message MqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MqMsg message, length delimited. Does not implicitly {@link pb.MqMsg.verify|verify} messages.
         * @param message MqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IMqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MqMsg;

        /**
         * Decodes a MqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.MqMsg;

        /**
         * Verifies a MqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MqMsg
         */
        public static fromObject(object: { [k: string]: any }): pb.MqMsg;

        /**
         * Creates a plain object from a MqMsg message. Also converts values to other types if specified.
         * @param message MqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.MqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a User. */
    interface IUser {

        /** User userId */
        userId?: (number|Long|null);

        /** User nickname */
        nickname?: (string|null);

        /** User username */
        username?: (string|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IUser);

        /** User userId. */
        public userId: (number|Long);

        /** User nickname. */
        public nickname: string;

        /** User username. */
        public username: string;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: pb.IUser): pb.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link pb.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link pb.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): pb.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for User
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Friend. */
    interface IFriend {

        /** Friend friendId */
        friendId?: (number|Long|null);

        /** Friend userId */
        userId?: (number|Long|null);

        /** Friend nickname */
        nickname?: (string|null);

        /** Friend username */
        username?: (string|null);

        /** Friend remark */
        remark?: (string|null);
    }

    /** Represents a Friend. */
    class Friend implements IFriend {

        /**
         * Constructs a new Friend.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IFriend);

        /** Friend friendId. */
        public friendId: (number|Long);

        /** Friend userId. */
        public userId: (number|Long);

        /** Friend nickname. */
        public nickname: string;

        /** Friend username. */
        public username: string;

        /** Friend remark. */
        public remark: string;

        /**
         * Creates a new Friend instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Friend instance
         */
        public static create(properties?: pb.IFriend): pb.Friend;

        /**
         * Encodes the specified Friend message. Does not implicitly {@link pb.Friend.verify|verify} messages.
         * @param message Friend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IFriend, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Friend message, length delimited. Does not implicitly {@link pb.Friend.verify|verify} messages.
         * @param message Friend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IFriend, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Friend message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Friend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Friend;

        /**
         * Decodes a Friend message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Friend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Friend;

        /**
         * Verifies a Friend message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Friend message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Friend
         */
        public static fromObject(object: { [k: string]: any }): pb.Friend;

        /**
         * Creates a plain object from a Friend message. Also converts values to other types if specified.
         * @param message Friend
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Friend, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Friend to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Friend
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Nav. */
    interface INav {

        /** Nav total */
        total?: (number|Long|null);

        /** Nav currentPage */
        currentPage?: (number|Long|null);

        /** Nav maxPage */
        maxPage?: (number|Long|null);
    }

    /** Represents a Nav. */
    class Nav implements INav {

        /**
         * Constructs a new Nav.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INav);

        /** Nav total. */
        public total: (number|Long);

        /** Nav currentPage. */
        public currentPage: (number|Long);

        /** Nav maxPage. */
        public maxPage: (number|Long);

        /**
         * Creates a new Nav instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Nav instance
         */
        public static create(properties?: pb.INav): pb.Nav;

        /**
         * Encodes the specified Nav message. Does not implicitly {@link pb.Nav.verify|verify} messages.
         * @param message Nav message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INav, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Nav message, length delimited. Does not implicitly {@link pb.Nav.verify|verify} messages.
         * @param message Nav message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.INav, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Nav message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Nav
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Nav;

        /**
         * Decodes a Nav message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Nav
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Nav;

        /**
         * Verifies a Nav message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Nav message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Nav
         */
        public static fromObject(object: { [k: string]: any }): pb.Nav;

        /**
         * Creates a plain object from a Nav message. Also converts values to other types if specified.
         * @param message Nav
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Nav, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Nav to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Nav
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FriendRequestEvent. */
    interface IFriendRequestEvent {

        /** FriendRequestEvent id */
        id?: (number|null);

        /** FriendRequestEvent fromUid */
        fromUid?: (number|Long|null);

        /** FriendRequestEvent toUid */
        toUid?: (number|Long|null);

        /** FriendRequestEvent requestTime */
        requestTime?: (number|Long|null);

        /** FriendRequestEvent reason */
        reason?: (string|null);

        /** FriendRequestEvent status */
        status?: (number|null);

        /** FriendRequestEvent responseTime */
        responseTime?: (number|Long|null);

        /** FriendRequestEvent rejectReason */
        rejectReason?: (string|null);
    }

    /** Represents a FriendRequestEvent. */
    class FriendRequestEvent implements IFriendRequestEvent {

        /**
         * Constructs a new FriendRequestEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IFriendRequestEvent);

        /** FriendRequestEvent id. */
        public id: number;

        /** FriendRequestEvent fromUid. */
        public fromUid: (number|Long);

        /** FriendRequestEvent toUid. */
        public toUid: (number|Long);

        /** FriendRequestEvent requestTime. */
        public requestTime: (number|Long);

        /** FriendRequestEvent reason. */
        public reason: string;

        /** FriendRequestEvent status. */
        public status: number;

        /** FriendRequestEvent responseTime. */
        public responseTime: (number|Long);

        /** FriendRequestEvent rejectReason. */
        public rejectReason: string;

        /**
         * Creates a new FriendRequestEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendRequestEvent instance
         */
        public static create(properties?: pb.IFriendRequestEvent): pb.FriendRequestEvent;

        /**
         * Encodes the specified FriendRequestEvent message. Does not implicitly {@link pb.FriendRequestEvent.verify|verify} messages.
         * @param message FriendRequestEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IFriendRequestEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FriendRequestEvent message, length delimited. Does not implicitly {@link pb.FriendRequestEvent.verify|verify} messages.
         * @param message FriendRequestEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IFriendRequestEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FriendRequestEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendRequestEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.FriendRequestEvent;

        /**
         * Decodes a FriendRequestEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendRequestEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.FriendRequestEvent;

        /**
         * Verifies a FriendRequestEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FriendRequestEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendRequestEvent
         */
        public static fromObject(object: { [k: string]: any }): pb.FriendRequestEvent;

        /**
         * Creates a plain object from a FriendRequestEvent message. Also converts values to other types if specified.
         * @param message FriendRequestEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.FriendRequestEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendRequestEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FriendRequestEvent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FriendChangeEvent. */
    interface IFriendChangeEvent {

        /** FriendChangeEvent friendId */
        friendId?: (number|Long|null);

        /** FriendChangeEvent friend */
        friend?: (pb.IFriend|null);

        /** FriendChangeEvent isFriend */
        isFriend?: (boolean|null);

        /** FriendChangeEvent time */
        time?: (number|Long|null);
    }

    /** Represents a FriendChangeEvent. */
    class FriendChangeEvent implements IFriendChangeEvent {

        /**
         * Constructs a new FriendChangeEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IFriendChangeEvent);

        /** FriendChangeEvent friendId. */
        public friendId: (number|Long);

        /** FriendChangeEvent friend. */
        public friend?: (pb.IFriend|null);

        /** FriendChangeEvent isFriend. */
        public isFriend: boolean;

        /** FriendChangeEvent time. */
        public time: (number|Long);

        /**
         * Creates a new FriendChangeEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendChangeEvent instance
         */
        public static create(properties?: pb.IFriendChangeEvent): pb.FriendChangeEvent;

        /**
         * Encodes the specified FriendChangeEvent message. Does not implicitly {@link pb.FriendChangeEvent.verify|verify} messages.
         * @param message FriendChangeEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IFriendChangeEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FriendChangeEvent message, length delimited. Does not implicitly {@link pb.FriendChangeEvent.verify|verify} messages.
         * @param message FriendChangeEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IFriendChangeEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FriendChangeEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendChangeEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.FriendChangeEvent;

        /**
         * Decodes a FriendChangeEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendChangeEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.FriendChangeEvent;

        /**
         * Verifies a FriendChangeEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FriendChangeEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendChangeEvent
         */
        public static fromObject(object: { [k: string]: any }): pb.FriendChangeEvent;

        /**
         * Creates a plain object from a FriendChangeEvent message. Also converts values to other types if specified.
         * @param message FriendChangeEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.FriendChangeEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendChangeEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FriendChangeEvent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PacketGetFriendListReq. */
    interface IPacketGetFriendListReq {

        /** PacketGetFriendListReq page */
        page?: (number|Long|null);

        /** PacketGetFriendListReq size */
        size?: (number|Long|null);
    }

    /** Represents a PacketGetFriendListReq. */
    class PacketGetFriendListReq implements IPacketGetFriendListReq {

        /**
         * Constructs a new PacketGetFriendListReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPacketGetFriendListReq);

        /** PacketGetFriendListReq page. */
        public page: (number|Long);

        /** PacketGetFriendListReq size. */
        public size: (number|Long);

        /**
         * Creates a new PacketGetFriendListReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PacketGetFriendListReq instance
         */
        public static create(properties?: pb.IPacketGetFriendListReq): pb.PacketGetFriendListReq;

        /**
         * Encodes the specified PacketGetFriendListReq message. Does not implicitly {@link pb.PacketGetFriendListReq.verify|verify} messages.
         * @param message PacketGetFriendListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPacketGetFriendListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PacketGetFriendListReq message, length delimited. Does not implicitly {@link pb.PacketGetFriendListReq.verify|verify} messages.
         * @param message PacketGetFriendListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPacketGetFriendListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PacketGetFriendListReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PacketGetFriendListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PacketGetFriendListReq;

        /**
         * Decodes a PacketGetFriendListReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PacketGetFriendListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PacketGetFriendListReq;

        /**
         * Verifies a PacketGetFriendListReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PacketGetFriendListReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PacketGetFriendListReq
         */
        public static fromObject(object: { [k: string]: any }): pb.PacketGetFriendListReq;

        /**
         * Creates a plain object from a PacketGetFriendListReq message. Also converts values to other types if specified.
         * @param message PacketGetFriendListReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PacketGetFriendListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PacketGetFriendListReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PacketGetFriendListReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PacketGetFriendListRes. */
    interface IPacketGetFriendListRes {

        /** PacketGetFriendListRes retCode */
        retCode?: (pb.RetCode|null);

        /** PacketGetFriendListRes list */
        list?: (pb.IFriend[]|null);

        /** PacketGetFriendListRes nav */
        nav?: (pb.INav|null);
    }

    /** Represents a PacketGetFriendListRes. */
    class PacketGetFriendListRes implements IPacketGetFriendListRes {

        /**
         * Constructs a new PacketGetFriendListRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPacketGetFriendListRes);

        /** PacketGetFriendListRes retCode. */
        public retCode: pb.RetCode;

        /** PacketGetFriendListRes list. */
        public list: pb.IFriend[];

        /** PacketGetFriendListRes nav. */
        public nav?: (pb.INav|null);

        /**
         * Creates a new PacketGetFriendListRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PacketGetFriendListRes instance
         */
        public static create(properties?: pb.IPacketGetFriendListRes): pb.PacketGetFriendListRes;

        /**
         * Encodes the specified PacketGetFriendListRes message. Does not implicitly {@link pb.PacketGetFriendListRes.verify|verify} messages.
         * @param message PacketGetFriendListRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPacketGetFriendListRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PacketGetFriendListRes message, length delimited. Does not implicitly {@link pb.PacketGetFriendListRes.verify|verify} messages.
         * @param message PacketGetFriendListRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPacketGetFriendListRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PacketGetFriendListRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PacketGetFriendListRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PacketGetFriendListRes;

        /**
         * Decodes a PacketGetFriendListRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PacketGetFriendListRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PacketGetFriendListRes;

        /**
         * Verifies a PacketGetFriendListRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PacketGetFriendListRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PacketGetFriendListRes
         */
        public static fromObject(object: { [k: string]: any }): pb.PacketGetFriendListRes;

        /**
         * Creates a plain object from a PacketGetFriendListRes message. Also converts values to other types if specified.
         * @param message PacketGetFriendListRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PacketGetFriendListRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PacketGetFriendListRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PacketGetFriendListRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PacketGetFriendReq. */
    interface IPacketGetFriendReq {

        /** PacketGetFriendReq userId */
        userId?: (number|Long|null);
    }

    /** Represents a PacketGetFriendReq. */
    class PacketGetFriendReq implements IPacketGetFriendReq {

        /**
         * Constructs a new PacketGetFriendReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPacketGetFriendReq);

        /** PacketGetFriendReq userId. */
        public userId: (number|Long);

        /**
         * Creates a new PacketGetFriendReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PacketGetFriendReq instance
         */
        public static create(properties?: pb.IPacketGetFriendReq): pb.PacketGetFriendReq;

        /**
         * Encodes the specified PacketGetFriendReq message. Does not implicitly {@link pb.PacketGetFriendReq.verify|verify} messages.
         * @param message PacketGetFriendReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPacketGetFriendReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PacketGetFriendReq message, length delimited. Does not implicitly {@link pb.PacketGetFriendReq.verify|verify} messages.
         * @param message PacketGetFriendReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPacketGetFriendReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PacketGetFriendReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PacketGetFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PacketGetFriendReq;

        /**
         * Decodes a PacketGetFriendReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PacketGetFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PacketGetFriendReq;

        /**
         * Verifies a PacketGetFriendReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PacketGetFriendReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PacketGetFriendReq
         */
        public static fromObject(object: { [k: string]: any }): pb.PacketGetFriendReq;

        /**
         * Creates a plain object from a PacketGetFriendReq message. Also converts values to other types if specified.
         * @param message PacketGetFriendReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PacketGetFriendReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PacketGetFriendReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PacketGetFriendReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PacketGetFriendRes. */
    interface IPacketGetFriendRes {

        /** PacketGetFriendRes retCode */
        retCode?: (pb.RetCode|null);

        /** PacketGetFriendRes friend */
        friend?: (pb.IFriend|null);
    }

    /** Represents a PacketGetFriendRes. */
    class PacketGetFriendRes implements IPacketGetFriendRes {

        /**
         * Constructs a new PacketGetFriendRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPacketGetFriendRes);

        /** PacketGetFriendRes retCode. */
        public retCode: pb.RetCode;

        /** PacketGetFriendRes friend. */
        public friend?: (pb.IFriend|null);

        /**
         * Creates a new PacketGetFriendRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PacketGetFriendRes instance
         */
        public static create(properties?: pb.IPacketGetFriendRes): pb.PacketGetFriendRes;

        /**
         * Encodes the specified PacketGetFriendRes message. Does not implicitly {@link pb.PacketGetFriendRes.verify|verify} messages.
         * @param message PacketGetFriendRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPacketGetFriendRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PacketGetFriendRes message, length delimited. Does not implicitly {@link pb.PacketGetFriendRes.verify|verify} messages.
         * @param message PacketGetFriendRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPacketGetFriendRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PacketGetFriendRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PacketGetFriendRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PacketGetFriendRes;

        /**
         * Decodes a PacketGetFriendRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PacketGetFriendRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PacketGetFriendRes;

        /**
         * Verifies a PacketGetFriendRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PacketGetFriendRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PacketGetFriendRes
         */
        public static fromObject(object: { [k: string]: any }): pb.PacketGetFriendRes;

        /**
         * Creates a plain object from a PacketGetFriendRes message. Also converts values to other types if specified.
         * @param message PacketGetFriendRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PacketGetFriendRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PacketGetFriendRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PacketGetFriendRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PacketPrivateMsg. */
    interface IPacketPrivateMsg {

        /** PacketPrivateMsg msgSeq */
        msgSeq?: (number|Long|null);

        /** PacketPrivateMsg msgRand */
        msgRand?: (number|Long|null);

        /** PacketPrivateMsg fromId */
        fromId?: (number|Long|null);

        /** PacketPrivateMsg receiveId */
        receiveId?: (number|Long|null);

        /** PacketPrivateMsg msgType */
        msgType?: (pb.PacketMsgType|null);

        /** PacketPrivateMsg payload */
        payload?: (Uint8Array|null);

        /** PacketPrivateMsg clientTime */
        clientTime?: (number|Long|null);

        /** PacketPrivateMsg serverTime */
        serverTime?: (number|Long|null);

        /** PacketPrivateMsg extends */
        "extends"?: (Uint8Array|null);

        /** PacketPrivateMsg msgId */
        msgId?: (number|Long|null);

        /** PacketPrivateMsg seq */
        seq?: (number|Long|null);
    }

    /** Represents a PacketPrivateMsg. */
    class PacketPrivateMsg implements IPacketPrivateMsg {

        /**
         * Constructs a new PacketPrivateMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPacketPrivateMsg);

        /** PacketPrivateMsg msgSeq. */
        public msgSeq: (number|Long);

        /** PacketPrivateMsg msgRand. */
        public msgRand: (number|Long);

        /** PacketPrivateMsg fromId. */
        public fromId: (number|Long);

        /** PacketPrivateMsg receiveId. */
        public receiveId: (number|Long);

        /** PacketPrivateMsg msgType. */
        public msgType: pb.PacketMsgType;

        /** PacketPrivateMsg payload. */
        public payload: Uint8Array;

        /** PacketPrivateMsg clientTime. */
        public clientTime: (number|Long);

        /** PacketPrivateMsg serverTime. */
        public serverTime: (number|Long);

        /** PacketPrivateMsg extends. */
        public extends: Uint8Array;

        /** PacketPrivateMsg msgId. */
        public msgId: (number|Long);

        /** PacketPrivateMsg seq. */
        public seq: (number|Long);

        /**
         * Creates a new PacketPrivateMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PacketPrivateMsg instance
         */
        public static create(properties?: pb.IPacketPrivateMsg): pb.PacketPrivateMsg;

        /**
         * Encodes the specified PacketPrivateMsg message. Does not implicitly {@link pb.PacketPrivateMsg.verify|verify} messages.
         * @param message PacketPrivateMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPacketPrivateMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PacketPrivateMsg message, length delimited. Does not implicitly {@link pb.PacketPrivateMsg.verify|verify} messages.
         * @param message PacketPrivateMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPacketPrivateMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PacketPrivateMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PacketPrivateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PacketPrivateMsg;

        /**
         * Decodes a PacketPrivateMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PacketPrivateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PacketPrivateMsg;

        /**
         * Verifies a PacketPrivateMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PacketPrivateMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PacketPrivateMsg
         */
        public static fromObject(object: { [k: string]: any }): pb.PacketPrivateMsg;

        /**
         * Creates a plain object from a PacketPrivateMsg message. Also converts values to other types if specified.
         * @param message PacketPrivateMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PacketPrivateMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PacketPrivateMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PacketPrivateMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** PacketMsgStatus enum. */
    enum PacketMsgStatus {
        MsgError = 0,
        MsgAck = 1,
        MsgRead = 2
    }

    /** Properties of a PacketPrivateMsgAck. */
    interface IPacketPrivateMsgAck {

        /** PacketPrivateMsgAck msgSeq */
        msgSeq?: (number|Long|null);

        /** PacketPrivateMsgAck msgRand */
        msgRand?: (number|Long|null);

        /** PacketPrivateMsgAck retCode */
        retCode?: (pb.PacketMsgStatus|null);

        /** PacketPrivateMsgAck msgId */
        msgId?: (number|Long|null);

        /** PacketPrivateMsgAck seq */
        seq?: (number|Long|null);
    }

    /** Represents a PacketPrivateMsgAck. */
    class PacketPrivateMsgAck implements IPacketPrivateMsgAck {

        /**
         * Constructs a new PacketPrivateMsgAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPacketPrivateMsgAck);

        /** PacketPrivateMsgAck msgSeq. */
        public msgSeq: (number|Long);

        /** PacketPrivateMsgAck msgRand. */
        public msgRand: (number|Long);

        /** PacketPrivateMsgAck retCode. */
        public retCode: pb.PacketMsgStatus;

        /** PacketPrivateMsgAck msgId. */
        public msgId: (number|Long);

        /** PacketPrivateMsgAck seq. */
        public seq: (number|Long);

        /**
         * Creates a new PacketPrivateMsgAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PacketPrivateMsgAck instance
         */
        public static create(properties?: pb.IPacketPrivateMsgAck): pb.PacketPrivateMsgAck;

        /**
         * Encodes the specified PacketPrivateMsgAck message. Does not implicitly {@link pb.PacketPrivateMsgAck.verify|verify} messages.
         * @param message PacketPrivateMsgAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPacketPrivateMsgAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PacketPrivateMsgAck message, length delimited. Does not implicitly {@link pb.PacketPrivateMsgAck.verify|verify} messages.
         * @param message PacketPrivateMsgAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPacketPrivateMsgAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PacketPrivateMsgAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PacketPrivateMsgAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PacketPrivateMsgAck;

        /**
         * Decodes a PacketPrivateMsgAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PacketPrivateMsgAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PacketPrivateMsgAck;

        /**
         * Verifies a PacketPrivateMsgAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PacketPrivateMsgAck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PacketPrivateMsgAck
         */
        public static fromObject(object: { [k: string]: any }): pb.PacketPrivateMsgAck;

        /**
         * Creates a plain object from a PacketPrivateMsgAck message. Also converts values to other types if specified.
         * @param message PacketPrivateMsgAck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PacketPrivateMsgAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PacketPrivateMsgAck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PacketPrivateMsgAck
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PacketPrivateMsgListReq. */
    interface IPacketPrivateMsgListReq {

        /** PacketPrivateMsgListReq lastMsgId */
        lastMsgId?: (number|Long|null);

        /** PacketPrivateMsgListReq size */
        size?: (number|Long|null);

        /** PacketPrivateMsgListReq userId */
        userId?: (number|Long|null);
    }

    /** Represents a PacketPrivateMsgListReq. */
    class PacketPrivateMsgListReq implements IPacketPrivateMsgListReq {

        /**
         * Constructs a new PacketPrivateMsgListReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPacketPrivateMsgListReq);

        /** PacketPrivateMsgListReq lastMsgId. */
        public lastMsgId: (number|Long);

        /** PacketPrivateMsgListReq size. */
        public size: (number|Long);

        /** PacketPrivateMsgListReq userId. */
        public userId: (number|Long);

        /**
         * Creates a new PacketPrivateMsgListReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PacketPrivateMsgListReq instance
         */
        public static create(properties?: pb.IPacketPrivateMsgListReq): pb.PacketPrivateMsgListReq;

        /**
         * Encodes the specified PacketPrivateMsgListReq message. Does not implicitly {@link pb.PacketPrivateMsgListReq.verify|verify} messages.
         * @param message PacketPrivateMsgListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPacketPrivateMsgListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PacketPrivateMsgListReq message, length delimited. Does not implicitly {@link pb.PacketPrivateMsgListReq.verify|verify} messages.
         * @param message PacketPrivateMsgListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPacketPrivateMsgListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PacketPrivateMsgListReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PacketPrivateMsgListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PacketPrivateMsgListReq;

        /**
         * Decodes a PacketPrivateMsgListReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PacketPrivateMsgListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PacketPrivateMsgListReq;

        /**
         * Verifies a PacketPrivateMsgListReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PacketPrivateMsgListReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PacketPrivateMsgListReq
         */
        public static fromObject(object: { [k: string]: any }): pb.PacketPrivateMsgListReq;

        /**
         * Creates a plain object from a PacketPrivateMsgListReq message. Also converts values to other types if specified.
         * @param message PacketPrivateMsgListReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PacketPrivateMsgListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PacketPrivateMsgListReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PacketPrivateMsgListReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PacketPrivateMsgListResp. */
    interface IPacketPrivateMsgListResp {

        /** PacketPrivateMsgListResp retCode */
        retCode?: (pb.RetCode|null);

        /** PacketPrivateMsgListResp list */
        list?: (pb.IPacketPrivateMsg[]|null);

        /** PacketPrivateMsgListResp isCompleted */
        isCompleted?: (boolean|null);
    }

    /** Represents a PacketPrivateMsgListResp. */
    class PacketPrivateMsgListResp implements IPacketPrivateMsgListResp {

        /**
         * Constructs a new PacketPrivateMsgListResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPacketPrivateMsgListResp);

        /** PacketPrivateMsgListResp retCode. */
        public retCode: pb.RetCode;

        /** PacketPrivateMsgListResp list. */
        public list: pb.IPacketPrivateMsg[];

        /** PacketPrivateMsgListResp isCompleted. */
        public isCompleted: boolean;

        /**
         * Creates a new PacketPrivateMsgListResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PacketPrivateMsgListResp instance
         */
        public static create(properties?: pb.IPacketPrivateMsgListResp): pb.PacketPrivateMsgListResp;

        /**
         * Encodes the specified PacketPrivateMsgListResp message. Does not implicitly {@link pb.PacketPrivateMsgListResp.verify|verify} messages.
         * @param message PacketPrivateMsgListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPacketPrivateMsgListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PacketPrivateMsgListResp message, length delimited. Does not implicitly {@link pb.PacketPrivateMsgListResp.verify|verify} messages.
         * @param message PacketPrivateMsgListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPacketPrivateMsgListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PacketPrivateMsgListResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PacketPrivateMsgListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PacketPrivateMsgListResp;

        /**
         * Decodes a PacketPrivateMsgListResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PacketPrivateMsgListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PacketPrivateMsgListResp;

        /**
         * Verifies a PacketPrivateMsgListResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PacketPrivateMsgListResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PacketPrivateMsgListResp
         */
        public static fromObject(object: { [k: string]: any }): pb.PacketPrivateMsgListResp;

        /**
         * Creates a plain object from a PacketPrivateMsgListResp message. Also converts values to other types if specified.
         * @param message PacketPrivateMsgListResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PacketPrivateMsgListResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PacketPrivateMsgListResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PacketPrivateMsgListResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PacketRemoveFriendReq. */
    interface IPacketRemoveFriendReq {

        /** PacketRemoveFriendReq userId */
        userId?: (number|Long|null);
    }

    /** Represents a PacketRemoveFriendReq. */
    class PacketRemoveFriendReq implements IPacketRemoveFriendReq {

        /**
         * Constructs a new PacketRemoveFriendReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPacketRemoveFriendReq);

        /** PacketRemoveFriendReq userId. */
        public userId: (number|Long);

        /**
         * Creates a new PacketRemoveFriendReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PacketRemoveFriendReq instance
         */
        public static create(properties?: pb.IPacketRemoveFriendReq): pb.PacketRemoveFriendReq;

        /**
         * Encodes the specified PacketRemoveFriendReq message. Does not implicitly {@link pb.PacketRemoveFriendReq.verify|verify} messages.
         * @param message PacketRemoveFriendReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPacketRemoveFriendReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PacketRemoveFriendReq message, length delimited. Does not implicitly {@link pb.PacketRemoveFriendReq.verify|verify} messages.
         * @param message PacketRemoveFriendReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPacketRemoveFriendReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PacketRemoveFriendReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PacketRemoveFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PacketRemoveFriendReq;

        /**
         * Decodes a PacketRemoveFriendReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PacketRemoveFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PacketRemoveFriendReq;

        /**
         * Verifies a PacketRemoveFriendReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PacketRemoveFriendReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PacketRemoveFriendReq
         */
        public static fromObject(object: { [k: string]: any }): pb.PacketRemoveFriendReq;

        /**
         * Creates a plain object from a PacketRemoveFriendReq message. Also converts values to other types if specified.
         * @param message PacketRemoveFriendReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PacketRemoveFriendReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PacketRemoveFriendReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PacketRemoveFriendReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PacketRemoveFriendResp. */
    interface IPacketRemoveFriendResp {

        /** PacketRemoveFriendResp retCode */
        retCode?: (pb.RetCode|null);
    }

    /** Represents a PacketRemoveFriendResp. */
    class PacketRemoveFriendResp implements IPacketRemoveFriendResp {

        /**
         * Constructs a new PacketRemoveFriendResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPacketRemoveFriendResp);

        /** PacketRemoveFriendResp retCode. */
        public retCode: pb.RetCode;

        /**
         * Creates a new PacketRemoveFriendResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PacketRemoveFriendResp instance
         */
        public static create(properties?: pb.IPacketRemoveFriendResp): pb.PacketRemoveFriendResp;

        /**
         * Encodes the specified PacketRemoveFriendResp message. Does not implicitly {@link pb.PacketRemoveFriendResp.verify|verify} messages.
         * @param message PacketRemoveFriendResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPacketRemoveFriendResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PacketRemoveFriendResp message, length delimited. Does not implicitly {@link pb.PacketRemoveFriendResp.verify|verify} messages.
         * @param message PacketRemoveFriendResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPacketRemoveFriendResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PacketRemoveFriendResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PacketRemoveFriendResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PacketRemoveFriendResp;

        /**
         * Decodes a PacketRemoveFriendResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PacketRemoveFriendResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PacketRemoveFriendResp;

        /**
         * Verifies a PacketRemoveFriendResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PacketRemoveFriendResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PacketRemoveFriendResp
         */
        public static fromObject(object: { [k: string]: any }): pb.PacketRemoveFriendResp;

        /**
         * Creates a plain object from a PacketRemoveFriendResp message. Also converts values to other types if specified.
         * @param message PacketRemoveFriendResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PacketRemoveFriendResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PacketRemoveFriendResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PacketRemoveFriendResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PacketFriendApplyReq. */
    interface IPacketFriendApplyReq {

        /** PacketFriendApplyReq userId */
        userId?: (number|Long|null);

        /** PacketFriendApplyReq reason */
        reason?: (string|null);
    }

    /** Represents a PacketFriendApplyReq. */
    class PacketFriendApplyReq implements IPacketFriendApplyReq {

        /**
         * Constructs a new PacketFriendApplyReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPacketFriendApplyReq);

        /** PacketFriendApplyReq userId. */
        public userId: (number|Long);

        /** PacketFriendApplyReq reason. */
        public reason: string;

        /**
         * Creates a new PacketFriendApplyReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PacketFriendApplyReq instance
         */
        public static create(properties?: pb.IPacketFriendApplyReq): pb.PacketFriendApplyReq;

        /**
         * Encodes the specified PacketFriendApplyReq message. Does not implicitly {@link pb.PacketFriendApplyReq.verify|verify} messages.
         * @param message PacketFriendApplyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPacketFriendApplyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PacketFriendApplyReq message, length delimited. Does not implicitly {@link pb.PacketFriendApplyReq.verify|verify} messages.
         * @param message PacketFriendApplyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPacketFriendApplyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PacketFriendApplyReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PacketFriendApplyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PacketFriendApplyReq;

        /**
         * Decodes a PacketFriendApplyReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PacketFriendApplyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PacketFriendApplyReq;

        /**
         * Verifies a PacketFriendApplyReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PacketFriendApplyReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PacketFriendApplyReq
         */
        public static fromObject(object: { [k: string]: any }): pb.PacketFriendApplyReq;

        /**
         * Creates a plain object from a PacketFriendApplyReq message. Also converts values to other types if specified.
         * @param message PacketFriendApplyReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PacketFriendApplyReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PacketFriendApplyReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PacketFriendApplyReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PacketFriendApplyResp. */
    interface IPacketFriendApplyResp {

        /** PacketFriendApplyResp retCode */
        retCode?: (pb.RetCode|null);

        /** PacketFriendApplyResp isCompleteFriend */
        isCompleteFriend?: (boolean|null);

        /** PacketFriendApplyResp id */
        id?: (number|null);
    }

    /** Represents a PacketFriendApplyResp. */
    class PacketFriendApplyResp implements IPacketFriendApplyResp {

        /**
         * Constructs a new PacketFriendApplyResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPacketFriendApplyResp);

        /** PacketFriendApplyResp retCode. */
        public retCode: pb.RetCode;

        /** PacketFriendApplyResp isCompleteFriend. */
        public isCompleteFriend: boolean;

        /** PacketFriendApplyResp id. */
        public id: number;

        /**
         * Creates a new PacketFriendApplyResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PacketFriendApplyResp instance
         */
        public static create(properties?: pb.IPacketFriendApplyResp): pb.PacketFriendApplyResp;

        /**
         * Encodes the specified PacketFriendApplyResp message. Does not implicitly {@link pb.PacketFriendApplyResp.verify|verify} messages.
         * @param message PacketFriendApplyResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPacketFriendApplyResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PacketFriendApplyResp message, length delimited. Does not implicitly {@link pb.PacketFriendApplyResp.verify|verify} messages.
         * @param message PacketFriendApplyResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPacketFriendApplyResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PacketFriendApplyResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PacketFriendApplyResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PacketFriendApplyResp;

        /**
         * Decodes a PacketFriendApplyResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PacketFriendApplyResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PacketFriendApplyResp;

        /**
         * Verifies a PacketFriendApplyResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PacketFriendApplyResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PacketFriendApplyResp
         */
        public static fromObject(object: { [k: string]: any }): pb.PacketFriendApplyResp;

        /**
         * Creates a plain object from a PacketFriendApplyResp message. Also converts values to other types if specified.
         * @param message PacketFriendApplyResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PacketFriendApplyResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PacketFriendApplyResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PacketFriendApplyResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PacketFriendHandleReq. */
    interface IPacketFriendHandleReq {

        /** PacketFriendHandleReq id */
        id?: (number|null);

        /** PacketFriendHandleReq flag */
        flag?: (boolean|null);

        /** PacketFriendHandleReq rejectReason */
        rejectReason?: (string|null);
    }

    /** Represents a PacketFriendHandleReq. */
    class PacketFriendHandleReq implements IPacketFriendHandleReq {

        /**
         * Constructs a new PacketFriendHandleReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPacketFriendHandleReq);

        /** PacketFriendHandleReq id. */
        public id: number;

        /** PacketFriendHandleReq flag. */
        public flag: boolean;

        /** PacketFriendHandleReq rejectReason. */
        public rejectReason: string;

        /**
         * Creates a new PacketFriendHandleReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PacketFriendHandleReq instance
         */
        public static create(properties?: pb.IPacketFriendHandleReq): pb.PacketFriendHandleReq;

        /**
         * Encodes the specified PacketFriendHandleReq message. Does not implicitly {@link pb.PacketFriendHandleReq.verify|verify} messages.
         * @param message PacketFriendHandleReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPacketFriendHandleReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PacketFriendHandleReq message, length delimited. Does not implicitly {@link pb.PacketFriendHandleReq.verify|verify} messages.
         * @param message PacketFriendHandleReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPacketFriendHandleReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PacketFriendHandleReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PacketFriendHandleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PacketFriendHandleReq;

        /**
         * Decodes a PacketFriendHandleReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PacketFriendHandleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PacketFriendHandleReq;

        /**
         * Verifies a PacketFriendHandleReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PacketFriendHandleReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PacketFriendHandleReq
         */
        public static fromObject(object: { [k: string]: any }): pb.PacketFriendHandleReq;

        /**
         * Creates a plain object from a PacketFriendHandleReq message. Also converts values to other types if specified.
         * @param message PacketFriendHandleReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PacketFriendHandleReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PacketFriendHandleReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PacketFriendHandleReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PacketFriendHandleResp. */
    interface IPacketFriendHandleResp {

        /** PacketFriendHandleResp retCode */
        retCode?: (pb.RetCode|null);
    }

    /** Represents a PacketFriendHandleResp. */
    class PacketFriendHandleResp implements IPacketFriendHandleResp {

        /**
         * Constructs a new PacketFriendHandleResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPacketFriendHandleResp);

        /** PacketFriendHandleResp retCode. */
        public retCode: pb.RetCode;

        /**
         * Creates a new PacketFriendHandleResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PacketFriendHandleResp instance
         */
        public static create(properties?: pb.IPacketFriendHandleResp): pb.PacketFriendHandleResp;

        /**
         * Encodes the specified PacketFriendHandleResp message. Does not implicitly {@link pb.PacketFriendHandleResp.verify|verify} messages.
         * @param message PacketFriendHandleResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPacketFriendHandleResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PacketFriendHandleResp message, length delimited. Does not implicitly {@link pb.PacketFriendHandleResp.verify|verify} messages.
         * @param message PacketFriendHandleResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPacketFriendHandleResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PacketFriendHandleResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PacketFriendHandleResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PacketFriendHandleResp;

        /**
         * Decodes a PacketFriendHandleResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PacketFriendHandleResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PacketFriendHandleResp;

        /**
         * Verifies a PacketFriendHandleResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PacketFriendHandleResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PacketFriendHandleResp
         */
        public static fromObject(object: { [k: string]: any }): pb.PacketFriendHandleResp;

        /**
         * Creates a plain object from a PacketFriendHandleResp message. Also converts values to other types if specified.
         * @param message PacketFriendHandleResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PacketFriendHandleResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PacketFriendHandleResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PacketFriendHandleResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PacketLoginReq. */
    interface IPacketLoginReq {

        /** PacketLoginReq token */
        token?: (string|null);
    }

    /** Represents a PacketLoginReq. */
    class PacketLoginReq implements IPacketLoginReq {

        /**
         * Constructs a new PacketLoginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPacketLoginReq);

        /** PacketLoginReq token. */
        public token: string;

        /**
         * Creates a new PacketLoginReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PacketLoginReq instance
         */
        public static create(properties?: pb.IPacketLoginReq): pb.PacketLoginReq;

        /**
         * Encodes the specified PacketLoginReq message. Does not implicitly {@link pb.PacketLoginReq.verify|verify} messages.
         * @param message PacketLoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPacketLoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PacketLoginReq message, length delimited. Does not implicitly {@link pb.PacketLoginReq.verify|verify} messages.
         * @param message PacketLoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPacketLoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PacketLoginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PacketLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PacketLoginReq;

        /**
         * Decodes a PacketLoginReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PacketLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PacketLoginReq;

        /**
         * Verifies a PacketLoginReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PacketLoginReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PacketLoginReq
         */
        public static fromObject(object: { [k: string]: any }): pb.PacketLoginReq;

        /**
         * Creates a plain object from a PacketLoginReq message. Also converts values to other types if specified.
         * @param message PacketLoginReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PacketLoginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PacketLoginReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PacketLoginReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PacketLoginRes. */
    interface IPacketLoginRes {

        /** PacketLoginRes retCode */
        retCode?: (pb.RetCode|null);

        /** PacketLoginRes uid */
        uid?: (number|Long|null);
    }

    /** Represents a PacketLoginRes. */
    class PacketLoginRes implements IPacketLoginRes {

        /**
         * Constructs a new PacketLoginRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPacketLoginRes);

        /** PacketLoginRes retCode. */
        public retCode: pb.RetCode;

        /** PacketLoginRes uid. */
        public uid: (number|Long);

        /**
         * Creates a new PacketLoginRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PacketLoginRes instance
         */
        public static create(properties?: pb.IPacketLoginRes): pb.PacketLoginRes;

        /**
         * Encodes the specified PacketLoginRes message. Does not implicitly {@link pb.PacketLoginRes.verify|verify} messages.
         * @param message PacketLoginRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPacketLoginRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PacketLoginRes message, length delimited. Does not implicitly {@link pb.PacketLoginRes.verify|verify} messages.
         * @param message PacketLoginRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPacketLoginRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PacketLoginRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PacketLoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PacketLoginRes;

        /**
         * Decodes a PacketLoginRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PacketLoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PacketLoginRes;

        /**
         * Verifies a PacketLoginRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PacketLoginRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PacketLoginRes
         */
        public static fromObject(object: { [k: string]: any }): pb.PacketLoginRes;

        /**
         * Creates a plain object from a PacketLoginRes message. Also converts values to other types if specified.
         * @param message PacketLoginRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PacketLoginRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PacketLoginRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PacketLoginRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** PacketMsgType enum. */
    enum PacketMsgType {
        None = 0,
        Text = 1,
        Image = 2,
        Audio = 3,
        Video = 4,
        File = 5
    }

    /** Properties of a TextMsg. */
    interface ITextMsg {

        /** TextMsg content */
        content?: (string|null);
    }

    /** Represents a TextMsg. */
    class TextMsg implements ITextMsg {

        /**
         * Constructs a new TextMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ITextMsg);

        /** TextMsg content. */
        public content: string;

        /**
         * Creates a new TextMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TextMsg instance
         */
        public static create(properties?: pb.ITextMsg): pb.TextMsg;

        /**
         * Encodes the specified TextMsg message. Does not implicitly {@link pb.TextMsg.verify|verify} messages.
         * @param message TextMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ITextMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TextMsg message, length delimited. Does not implicitly {@link pb.TextMsg.verify|verify} messages.
         * @param message TextMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ITextMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TextMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TextMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.TextMsg;

        /**
         * Decodes a TextMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TextMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.TextMsg;

        /**
         * Verifies a TextMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TextMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TextMsg
         */
        public static fromObject(object: { [k: string]: any }): pb.TextMsg;

        /**
         * Creates a plain object from a TextMsg message. Also converts values to other types if specified.
         * @param message TextMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.TextMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TextMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TextMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ImageMsg. */
    interface IImageMsg {

        /** ImageMsg url */
        url?: (string|null);

        /** ImageMsg md5 */
        md5?: (string|null);

        /** ImageMsg width */
        width?: (number|null);

        /** ImageMsg height */
        height?: (number|null);

        /** ImageMsg size */
        size?: (number|null);
    }

    /** Represents an ImageMsg. */
    class ImageMsg implements IImageMsg {

        /**
         * Constructs a new ImageMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IImageMsg);

        /** ImageMsg url. */
        public url: string;

        /** ImageMsg md5. */
        public md5: string;

        /** ImageMsg width. */
        public width: number;

        /** ImageMsg height. */
        public height: number;

        /** ImageMsg size. */
        public size: number;

        /**
         * Creates a new ImageMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ImageMsg instance
         */
        public static create(properties?: pb.IImageMsg): pb.ImageMsg;

        /**
         * Encodes the specified ImageMsg message. Does not implicitly {@link pb.ImageMsg.verify|verify} messages.
         * @param message ImageMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IImageMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ImageMsg message, length delimited. Does not implicitly {@link pb.ImageMsg.verify|verify} messages.
         * @param message ImageMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IImageMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ImageMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ImageMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ImageMsg;

        /**
         * Decodes an ImageMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ImageMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ImageMsg;

        /**
         * Verifies an ImageMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ImageMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ImageMsg
         */
        public static fromObject(object: { [k: string]: any }): pb.ImageMsg;

        /**
         * Creates a plain object from an ImageMsg message. Also converts values to other types if specified.
         * @param message ImageMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ImageMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ImageMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ImageMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AudioMsg. */
    interface IAudioMsg {

        /** AudioMsg url */
        url?: (string|null);

        /** AudioMsg duration */
        duration?: (number|null);

        /** AudioMsg size */
        size?: (number|null);

        /** AudioMsg md5 */
        md5?: (string|null);
    }

    /** Represents an AudioMsg. */
    class AudioMsg implements IAudioMsg {

        /**
         * Constructs a new AudioMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IAudioMsg);

        /** AudioMsg url. */
        public url: string;

        /** AudioMsg duration. */
        public duration: number;

        /** AudioMsg size. */
        public size: number;

        /** AudioMsg md5. */
        public md5: string;

        /**
         * Creates a new AudioMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AudioMsg instance
         */
        public static create(properties?: pb.IAudioMsg): pb.AudioMsg;

        /**
         * Encodes the specified AudioMsg message. Does not implicitly {@link pb.AudioMsg.verify|verify} messages.
         * @param message AudioMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IAudioMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AudioMsg message, length delimited. Does not implicitly {@link pb.AudioMsg.verify|verify} messages.
         * @param message AudioMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IAudioMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AudioMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AudioMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.AudioMsg;

        /**
         * Decodes an AudioMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AudioMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.AudioMsg;

        /**
         * Verifies an AudioMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AudioMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AudioMsg
         */
        public static fromObject(object: { [k: string]: any }): pb.AudioMsg;

        /**
         * Creates a plain object from an AudioMsg message. Also converts values to other types if specified.
         * @param message AudioMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.AudioMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AudioMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AudioMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VideoMsg. */
    interface IVideoMsg {

        /** VideoMsg url */
        url?: (string|null);

        /** VideoMsg duration */
        duration?: (number|null);

        /** VideoMsg size */
        size?: (number|null);

        /** VideoMsg md5 */
        md5?: (string|null);
    }

    /** Represents a VideoMsg. */
    class VideoMsg implements IVideoMsg {

        /**
         * Constructs a new VideoMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IVideoMsg);

        /** VideoMsg url. */
        public url: string;

        /** VideoMsg duration. */
        public duration: number;

        /** VideoMsg size. */
        public size: number;

        /** VideoMsg md5. */
        public md5: string;

        /**
         * Creates a new VideoMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VideoMsg instance
         */
        public static create(properties?: pb.IVideoMsg): pb.VideoMsg;

        /**
         * Encodes the specified VideoMsg message. Does not implicitly {@link pb.VideoMsg.verify|verify} messages.
         * @param message VideoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IVideoMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VideoMsg message, length delimited. Does not implicitly {@link pb.VideoMsg.verify|verify} messages.
         * @param message VideoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IVideoMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VideoMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VideoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.VideoMsg;

        /**
         * Decodes a VideoMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VideoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.VideoMsg;

        /**
         * Verifies a VideoMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VideoMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VideoMsg
         */
        public static fromObject(object: { [k: string]: any }): pb.VideoMsg;

        /**
         * Creates a plain object from a VideoMsg message. Also converts values to other types if specified.
         * @param message VideoMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.VideoMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VideoMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VideoMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileMsg. */
    interface IFileMsg {

        /** FileMsg url */
        url?: (string|null);

        /** FileMsg name */
        name?: (string|null);

        /** FileMsg size */
        size?: (number|null);

        /** FileMsg md5 */
        md5?: (string|null);
    }

    /** Represents a FileMsg. */
    class FileMsg implements IFileMsg {

        /**
         * Constructs a new FileMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IFileMsg);

        /** FileMsg url. */
        public url: string;

        /** FileMsg name. */
        public name: string;

        /** FileMsg size. */
        public size: number;

        /** FileMsg md5. */
        public md5: string;

        /**
         * Creates a new FileMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileMsg instance
         */
        public static create(properties?: pb.IFileMsg): pb.FileMsg;

        /**
         * Encodes the specified FileMsg message. Does not implicitly {@link pb.FileMsg.verify|verify} messages.
         * @param message FileMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IFileMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileMsg message, length delimited. Does not implicitly {@link pb.FileMsg.verify|verify} messages.
         * @param message FileMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IFileMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.FileMsg;

        /**
         * Decodes a FileMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.FileMsg;

        /**
         * Verifies a FileMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileMsg
         */
        public static fromObject(object: { [k: string]: any }): pb.FileMsg;

        /**
         * Creates a plain object from a FileMsg message. Also converts values to other types if specified.
         * @param message FileMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.FileMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Packet enum. */
    enum Packet {
        PacketNone = 0,
        SystemError = 500,
        UserNotLogin = 403,
        Login = 1001,
        GetProfile = 2001,
        ModifyProfile = 2002,
        GetUser = 3001,
        GetFriendList = 4001,
        GetFriend = 4002,
        RemoveFriend = 4003,
        FriendApply = 4004,
        FriendHandle = 4005,
        PrivateMsg = 8001,
        PrivateMsgAck = 8002,
        PrivateMsgRead = 8003,
        PrivateMsgList = 8010,
        EventFriendRequest = 9001,
        EventFriendChange = 9002
    }

    /** RetCode enum. */
    enum RetCode {
        Unknown = 0,
        Success = 200,
        Error = 500,
        UserNotFound = 3001,
        FriendNotFound = 4001,
        FriendAlready = 4002,
        NotRecord = 1001
    }

    /** Properties of a PacketGetProfileReq. */
    interface IPacketGetProfileReq {
    }

    /** Represents a PacketGetProfileReq. */
    class PacketGetProfileReq implements IPacketGetProfileReq {

        /**
         * Constructs a new PacketGetProfileReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPacketGetProfileReq);

        /**
         * Creates a new PacketGetProfileReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PacketGetProfileReq instance
         */
        public static create(properties?: pb.IPacketGetProfileReq): pb.PacketGetProfileReq;

        /**
         * Encodes the specified PacketGetProfileReq message. Does not implicitly {@link pb.PacketGetProfileReq.verify|verify} messages.
         * @param message PacketGetProfileReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPacketGetProfileReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PacketGetProfileReq message, length delimited. Does not implicitly {@link pb.PacketGetProfileReq.verify|verify} messages.
         * @param message PacketGetProfileReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPacketGetProfileReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PacketGetProfileReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PacketGetProfileReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PacketGetProfileReq;

        /**
         * Decodes a PacketGetProfileReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PacketGetProfileReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PacketGetProfileReq;

        /**
         * Verifies a PacketGetProfileReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PacketGetProfileReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PacketGetProfileReq
         */
        public static fromObject(object: { [k: string]: any }): pb.PacketGetProfileReq;

        /**
         * Creates a plain object from a PacketGetProfileReq message. Also converts values to other types if specified.
         * @param message PacketGetProfileReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PacketGetProfileReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PacketGetProfileReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PacketGetProfileReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PacketGetProfileRes. */
    interface IPacketGetProfileRes {

        /** PacketGetProfileRes userId */
        userId?: (number|Long|null);

        /** PacketGetProfileRes nickName */
        nickName?: (string|null);

        /** PacketGetProfileRes email */
        email?: (string|null);

        /** PacketGetProfileRes note */
        note?: (string|null);

        /** PacketGetProfileRes age */
        age?: (number|null);

        /** PacketGetProfileRes sex */
        sex?: (number|null);
    }

    /** Represents a PacketGetProfileRes. */
    class PacketGetProfileRes implements IPacketGetProfileRes {

        /**
         * Constructs a new PacketGetProfileRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPacketGetProfileRes);

        /** PacketGetProfileRes userId. */
        public userId: (number|Long);

        /** PacketGetProfileRes nickName. */
        public nickName: string;

        /** PacketGetProfileRes email. */
        public email: string;

        /** PacketGetProfileRes note. */
        public note: string;

        /** PacketGetProfileRes age. */
        public age: number;

        /** PacketGetProfileRes sex. */
        public sex: number;

        /**
         * Creates a new PacketGetProfileRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PacketGetProfileRes instance
         */
        public static create(properties?: pb.IPacketGetProfileRes): pb.PacketGetProfileRes;

        /**
         * Encodes the specified PacketGetProfileRes message. Does not implicitly {@link pb.PacketGetProfileRes.verify|verify} messages.
         * @param message PacketGetProfileRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPacketGetProfileRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PacketGetProfileRes message, length delimited. Does not implicitly {@link pb.PacketGetProfileRes.verify|verify} messages.
         * @param message PacketGetProfileRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPacketGetProfileRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PacketGetProfileRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PacketGetProfileRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PacketGetProfileRes;

        /**
         * Decodes a PacketGetProfileRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PacketGetProfileRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PacketGetProfileRes;

        /**
         * Verifies a PacketGetProfileRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PacketGetProfileRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PacketGetProfileRes
         */
        public static fromObject(object: { [k: string]: any }): pb.PacketGetProfileRes;

        /**
         * Creates a plain object from a PacketGetProfileRes message. Also converts values to other types if specified.
         * @param message PacketGetProfileRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PacketGetProfileRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PacketGetProfileRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PacketGetProfileRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PacketModfiyProfileReq. */
    interface IPacketModfiyProfileReq {

        /** PacketModfiyProfileReq nickName */
        nickName?: (string|null);

        /** PacketModfiyProfileReq note */
        note?: (string|null);

        /** PacketModfiyProfileReq age */
        age?: (number|null);

        /** PacketModfiyProfileReq sex */
        sex?: (number|null);
    }

    /** Represents a PacketModfiyProfileReq. */
    class PacketModfiyProfileReq implements IPacketModfiyProfileReq {

        /**
         * Constructs a new PacketModfiyProfileReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPacketModfiyProfileReq);

        /** PacketModfiyProfileReq nickName. */
        public nickName: string;

        /** PacketModfiyProfileReq note. */
        public note: string;

        /** PacketModfiyProfileReq age. */
        public age: number;

        /** PacketModfiyProfileReq sex. */
        public sex: number;

        /**
         * Creates a new PacketModfiyProfileReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PacketModfiyProfileReq instance
         */
        public static create(properties?: pb.IPacketModfiyProfileReq): pb.PacketModfiyProfileReq;

        /**
         * Encodes the specified PacketModfiyProfileReq message. Does not implicitly {@link pb.PacketModfiyProfileReq.verify|verify} messages.
         * @param message PacketModfiyProfileReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPacketModfiyProfileReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PacketModfiyProfileReq message, length delimited. Does not implicitly {@link pb.PacketModfiyProfileReq.verify|verify} messages.
         * @param message PacketModfiyProfileReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPacketModfiyProfileReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PacketModfiyProfileReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PacketModfiyProfileReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PacketModfiyProfileReq;

        /**
         * Decodes a PacketModfiyProfileReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PacketModfiyProfileReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PacketModfiyProfileReq;

        /**
         * Verifies a PacketModfiyProfileReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PacketModfiyProfileReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PacketModfiyProfileReq
         */
        public static fromObject(object: { [k: string]: any }): pb.PacketModfiyProfileReq;

        /**
         * Creates a plain object from a PacketModfiyProfileReq message. Also converts values to other types if specified.
         * @param message PacketModfiyProfileReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PacketModfiyProfileReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PacketModfiyProfileReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PacketModfiyProfileReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PacketModfiyProfileRes. */
    interface IPacketModfiyProfileRes {

        /** PacketModfiyProfileRes retCode */
        retCode?: (pb.RetCode|null);
    }

    /** Represents a PacketModfiyProfileRes. */
    class PacketModfiyProfileRes implements IPacketModfiyProfileRes {

        /**
         * Constructs a new PacketModfiyProfileRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPacketModfiyProfileRes);

        /** PacketModfiyProfileRes retCode. */
        public retCode: pb.RetCode;

        /**
         * Creates a new PacketModfiyProfileRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PacketModfiyProfileRes instance
         */
        public static create(properties?: pb.IPacketModfiyProfileRes): pb.PacketModfiyProfileRes;

        /**
         * Encodes the specified PacketModfiyProfileRes message. Does not implicitly {@link pb.PacketModfiyProfileRes.verify|verify} messages.
         * @param message PacketModfiyProfileRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPacketModfiyProfileRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PacketModfiyProfileRes message, length delimited. Does not implicitly {@link pb.PacketModfiyProfileRes.verify|verify} messages.
         * @param message PacketModfiyProfileRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPacketModfiyProfileRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PacketModfiyProfileRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PacketModfiyProfileRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PacketModfiyProfileRes;

        /**
         * Decodes a PacketModfiyProfileRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PacketModfiyProfileRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PacketModfiyProfileRes;

        /**
         * Verifies a PacketModfiyProfileRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PacketModfiyProfileRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PacketModfiyProfileRes
         */
        public static fromObject(object: { [k: string]: any }): pb.PacketModfiyProfileRes;

        /**
         * Creates a plain object from a PacketModfiyProfileRes message. Also converts values to other types if specified.
         * @param message PacketModfiyProfileRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PacketModfiyProfileRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PacketModfiyProfileRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PacketModfiyProfileRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PacketGetUserInfoReq. */
    interface IPacketGetUserInfoReq {

        /** PacketGetUserInfoReq username */
        username?: (string|null);
    }

    /** Represents a PacketGetUserInfoReq. */
    class PacketGetUserInfoReq implements IPacketGetUserInfoReq {

        /**
         * Constructs a new PacketGetUserInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPacketGetUserInfoReq);

        /** PacketGetUserInfoReq username. */
        public username: string;

        /**
         * Creates a new PacketGetUserInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PacketGetUserInfoReq instance
         */
        public static create(properties?: pb.IPacketGetUserInfoReq): pb.PacketGetUserInfoReq;

        /**
         * Encodes the specified PacketGetUserInfoReq message. Does not implicitly {@link pb.PacketGetUserInfoReq.verify|verify} messages.
         * @param message PacketGetUserInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPacketGetUserInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PacketGetUserInfoReq message, length delimited. Does not implicitly {@link pb.PacketGetUserInfoReq.verify|verify} messages.
         * @param message PacketGetUserInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPacketGetUserInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PacketGetUserInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PacketGetUserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PacketGetUserInfoReq;

        /**
         * Decodes a PacketGetUserInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PacketGetUserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PacketGetUserInfoReq;

        /**
         * Verifies a PacketGetUserInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PacketGetUserInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PacketGetUserInfoReq
         */
        public static fromObject(object: { [k: string]: any }): pb.PacketGetUserInfoReq;

        /**
         * Creates a plain object from a PacketGetUserInfoReq message. Also converts values to other types if specified.
         * @param message PacketGetUserInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PacketGetUserInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PacketGetUserInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PacketGetUserInfoReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PacketGetUserInfoResp. */
    interface IPacketGetUserInfoResp {

        /** PacketGetUserInfoResp retCode */
        retCode?: (pb.RetCode|null);

        /** PacketGetUserInfoResp user */
        user?: (pb.IUser|null);
    }

    /** Represents a PacketGetUserInfoResp. */
    class PacketGetUserInfoResp implements IPacketGetUserInfoResp {

        /**
         * Constructs a new PacketGetUserInfoResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPacketGetUserInfoResp);

        /** PacketGetUserInfoResp retCode. */
        public retCode: pb.RetCode;

        /** PacketGetUserInfoResp user. */
        public user?: (pb.IUser|null);

        /**
         * Creates a new PacketGetUserInfoResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PacketGetUserInfoResp instance
         */
        public static create(properties?: pb.IPacketGetUserInfoResp): pb.PacketGetUserInfoResp;

        /**
         * Encodes the specified PacketGetUserInfoResp message. Does not implicitly {@link pb.PacketGetUserInfoResp.verify|verify} messages.
         * @param message PacketGetUserInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPacketGetUserInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PacketGetUserInfoResp message, length delimited. Does not implicitly {@link pb.PacketGetUserInfoResp.verify|verify} messages.
         * @param message PacketGetUserInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPacketGetUserInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PacketGetUserInfoResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PacketGetUserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PacketGetUserInfoResp;

        /**
         * Decodes a PacketGetUserInfoResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PacketGetUserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PacketGetUserInfoResp;

        /**
         * Verifies a PacketGetUserInfoResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PacketGetUserInfoResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PacketGetUserInfoResp
         */
        public static fromObject(object: { [k: string]: any }): pb.PacketGetUserInfoResp;

        /**
         * Creates a plain object from a PacketGetUserInfoResp message. Also converts values to other types if specified.
         * @param message PacketGetUserInfoResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PacketGetUserInfoResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PacketGetUserInfoResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PacketGetUserInfoResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
