/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const pb = $root.pb = (() => {

    /**
     * Namespace pb.
     * @exports pb
     * @namespace
     */
    const pb = {};

    /**
     * ConnectRetCode enum.
     * @name pb.ConnectRetCode
     * @enum {number}
     * @property {number} CR_Unknow=0 CR_Unknow value
     * @property {number} CR_Success=2001 CR_Success value
     * @property {number} CR_Offline=2002 CR_Offline value
     * @property {number} CR_Error=5001 CR_Error value
     */
    pb.ConnectRetCode = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CR_Unknow"] = 0;
        values[valuesById[2001] = "CR_Success"] = 2001;
        values[valuesById[2002] = "CR_Offline"] = 2002;
        values[valuesById[5001] = "CR_Error"] = 5001;
        return values;
    })();

    pb.ConnectSendClientReq = (function() {

        /**
         * Properties of a ConnectSendClientReq.
         * @memberof pb
         * @interface IConnectSendClientReq
         * @property {string|null} [sessionId] ConnectSendClientReq sessionId
         * @property {number|null} [serverId] ConnectSendClientReq serverId
         * @property {pb.Packet|null} [command] ConnectSendClientReq command
         * @property {Uint8Array|null} [payload] ConnectSendClientReq payload
         */

        /**
         * Constructs a new ConnectSendClientReq.
         * @memberof pb
         * @classdesc Represents a ConnectSendClientReq.
         * @implements IConnectSendClientReq
         * @constructor
         * @param {pb.IConnectSendClientReq=} [properties] Properties to set
         */
        function ConnectSendClientReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConnectSendClientReq sessionId.
         * @member {string} sessionId
         * @memberof pb.ConnectSendClientReq
         * @instance
         */
        ConnectSendClientReq.prototype.sessionId = "";

        /**
         * ConnectSendClientReq serverId.
         * @member {number} serverId
         * @memberof pb.ConnectSendClientReq
         * @instance
         */
        ConnectSendClientReq.prototype.serverId = 0;

        /**
         * ConnectSendClientReq command.
         * @member {pb.Packet} command
         * @memberof pb.ConnectSendClientReq
         * @instance
         */
        ConnectSendClientReq.prototype.command = 0;

        /**
         * ConnectSendClientReq payload.
         * @member {Uint8Array} payload
         * @memberof pb.ConnectSendClientReq
         * @instance
         */
        ConnectSendClientReq.prototype.payload = $util.newBuffer([]);

        /**
         * Creates a new ConnectSendClientReq instance using the specified properties.
         * @function create
         * @memberof pb.ConnectSendClientReq
         * @static
         * @param {pb.IConnectSendClientReq=} [properties] Properties to set
         * @returns {pb.ConnectSendClientReq} ConnectSendClientReq instance
         */
        ConnectSendClientReq.create = function create(properties) {
            return new ConnectSendClientReq(properties);
        };

        /**
         * Encodes the specified ConnectSendClientReq message. Does not implicitly {@link pb.ConnectSendClientReq.verify|verify} messages.
         * @function encode
         * @memberof pb.ConnectSendClientReq
         * @static
         * @param {pb.IConnectSendClientReq} message ConnectSendClientReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectSendClientReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sessionId);
            if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.serverId);
            if (message.command != null && Object.hasOwnProperty.call(message, "command"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.command);
            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.payload);
            return writer;
        };

        /**
         * Encodes the specified ConnectSendClientReq message, length delimited. Does not implicitly {@link pb.ConnectSendClientReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ConnectSendClientReq
         * @static
         * @param {pb.IConnectSendClientReq} message ConnectSendClientReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectSendClientReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConnectSendClientReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ConnectSendClientReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ConnectSendClientReq} ConnectSendClientReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectSendClientReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ConnectSendClientReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.sessionId = reader.string();
                        break;
                    }
                case 2: {
                        message.serverId = reader.uint32();
                        break;
                    }
                case 3: {
                        message.command = reader.int32();
                        break;
                    }
                case 4: {
                        message.payload = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConnectSendClientReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ConnectSendClientReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ConnectSendClientReq} ConnectSendClientReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectSendClientReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConnectSendClientReq message.
         * @function verify
         * @memberof pb.ConnectSendClientReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConnectSendClientReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isString(message.sessionId))
                    return "sessionId: string expected";
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isInteger(message.serverId))
                    return "serverId: integer expected";
            if (message.command != null && message.hasOwnProperty("command"))
                switch (message.command) {
                default:
                    return "command: enum value expected";
                case 0:
                case 500:
                case 403:
                case 1001:
                case 2001:
                case 2002:
                case 3001:
                case 4001:
                case 4002:
                case 4003:
                case 4004:
                case 4005:
                case 8001:
                case 8002:
                case 8003:
                case 8010:
                case 9001:
                case 9002:
                    break;
                }
            if (message.payload != null && message.hasOwnProperty("payload"))
                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                    return "payload: buffer expected";
            return null;
        };

        /**
         * Creates a ConnectSendClientReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ConnectSendClientReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ConnectSendClientReq} ConnectSendClientReq
         */
        ConnectSendClientReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ConnectSendClientReq)
                return object;
            let message = new $root.pb.ConnectSendClientReq();
            if (object.sessionId != null)
                message.sessionId = String(object.sessionId);
            if (object.serverId != null)
                message.serverId = object.serverId >>> 0;
            switch (object.command) {
            default:
                if (typeof object.command === "number") {
                    message.command = object.command;
                    break;
                }
                break;
            case "PacketNone":
            case 0:
                message.command = 0;
                break;
            case "SystemError":
            case 500:
                message.command = 500;
                break;
            case "UserNotLogin":
            case 403:
                message.command = 403;
                break;
            case "Login":
            case 1001:
                message.command = 1001;
                break;
            case "GetProfile":
            case 2001:
                message.command = 2001;
                break;
            case "ModifyProfile":
            case 2002:
                message.command = 2002;
                break;
            case "GetUser":
            case 3001:
                message.command = 3001;
                break;
            case "GetFriendList":
            case 4001:
                message.command = 4001;
                break;
            case "GetFriend":
            case 4002:
                message.command = 4002;
                break;
            case "RemoveFriend":
            case 4003:
                message.command = 4003;
                break;
            case "FriendApply":
            case 4004:
                message.command = 4004;
                break;
            case "FriendHandle":
            case 4005:
                message.command = 4005;
                break;
            case "PrivateMsg":
            case 8001:
                message.command = 8001;
                break;
            case "PrivateMsgAck":
            case 8002:
                message.command = 8002;
                break;
            case "PrivateMsgRead":
            case 8003:
                message.command = 8003;
                break;
            case "PrivateMsgList":
            case 8010:
                message.command = 8010;
                break;
            case "EventFriendRequest":
            case 9001:
                message.command = 9001;
                break;
            case "EventFriendChange":
            case 9002:
                message.command = 9002;
                break;
            }
            if (object.payload != null)
                if (typeof object.payload === "string")
                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                else if (object.payload.length >= 0)
                    message.payload = object.payload;
            return message;
        };

        /**
         * Creates a plain object from a ConnectSendClientReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ConnectSendClientReq
         * @static
         * @param {pb.ConnectSendClientReq} message ConnectSendClientReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConnectSendClientReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.sessionId = "";
                object.serverId = 0;
                object.command = options.enums === String ? "PacketNone" : 0;
                if (options.bytes === String)
                    object.payload = "";
                else {
                    object.payload = [];
                    if (options.bytes !== Array)
                        object.payload = $util.newBuffer(object.payload);
                }
            }
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                object.sessionId = message.sessionId;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.command != null && message.hasOwnProperty("command"))
                object.command = options.enums === String ? $root.pb.Packet[message.command] === undefined ? message.command : $root.pb.Packet[message.command] : message.command;
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
            return object;
        };

        /**
         * Converts this ConnectSendClientReq to JSON.
         * @function toJSON
         * @memberof pb.ConnectSendClientReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConnectSendClientReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ConnectSendClientReq
         * @function getTypeUrl
         * @memberof pb.ConnectSendClientReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ConnectSendClientReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.ConnectSendClientReq";
        };

        return ConnectSendClientReq;
    })();

    pb.ConnectSendClientRes = (function() {

        /**
         * Properties of a ConnectSendClientRes.
         * @memberof pb
         * @interface IConnectSendClientRes
         * @property {pb.ConnectRetCode|null} [retCode] ConnectSendClientRes retCode
         * @property {string|null} [msg] ConnectSendClientRes msg
         */

        /**
         * Constructs a new ConnectSendClientRes.
         * @memberof pb
         * @classdesc Represents a ConnectSendClientRes.
         * @implements IConnectSendClientRes
         * @constructor
         * @param {pb.IConnectSendClientRes=} [properties] Properties to set
         */
        function ConnectSendClientRes(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConnectSendClientRes retCode.
         * @member {pb.ConnectRetCode} retCode
         * @memberof pb.ConnectSendClientRes
         * @instance
         */
        ConnectSendClientRes.prototype.retCode = 0;

        /**
         * ConnectSendClientRes msg.
         * @member {string} msg
         * @memberof pb.ConnectSendClientRes
         * @instance
         */
        ConnectSendClientRes.prototype.msg = "";

        /**
         * Creates a new ConnectSendClientRes instance using the specified properties.
         * @function create
         * @memberof pb.ConnectSendClientRes
         * @static
         * @param {pb.IConnectSendClientRes=} [properties] Properties to set
         * @returns {pb.ConnectSendClientRes} ConnectSendClientRes instance
         */
        ConnectSendClientRes.create = function create(properties) {
            return new ConnectSendClientRes(properties);
        };

        /**
         * Encodes the specified ConnectSendClientRes message. Does not implicitly {@link pb.ConnectSendClientRes.verify|verify} messages.
         * @function encode
         * @memberof pb.ConnectSendClientRes
         * @static
         * @param {pb.IConnectSendClientRes} message ConnectSendClientRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectSendClientRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.retCode != null && Object.hasOwnProperty.call(message, "retCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified ConnectSendClientRes message, length delimited. Does not implicitly {@link pb.ConnectSendClientRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ConnectSendClientRes
         * @static
         * @param {pb.IConnectSendClientRes} message ConnectSendClientRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectSendClientRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConnectSendClientRes message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ConnectSendClientRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ConnectSendClientRes} ConnectSendClientRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectSendClientRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ConnectSendClientRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.retCode = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConnectSendClientRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ConnectSendClientRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ConnectSendClientRes} ConnectSendClientRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectSendClientRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConnectSendClientRes message.
         * @function verify
         * @memberof pb.ConnectSendClientRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConnectSendClientRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                switch (message.retCode) {
                default:
                    return "retCode: enum value expected";
                case 0:
                case 2001:
                case 2002:
                case 5001:
                    break;
                }
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a ConnectSendClientRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ConnectSendClientRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ConnectSendClientRes} ConnectSendClientRes
         */
        ConnectSendClientRes.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ConnectSendClientRes)
                return object;
            let message = new $root.pb.ConnectSendClientRes();
            switch (object.retCode) {
            default:
                if (typeof object.retCode === "number") {
                    message.retCode = object.retCode;
                    break;
                }
                break;
            case "CR_Unknow":
            case 0:
                message.retCode = 0;
                break;
            case "CR_Success":
            case 2001:
                message.retCode = 2001;
                break;
            case "CR_Offline":
            case 2002:
                message.retCode = 2002;
                break;
            case "CR_Error":
            case 5001:
                message.retCode = 5001;
                break;
            }
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a ConnectSendClientRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ConnectSendClientRes
         * @static
         * @param {pb.ConnectSendClientRes} message ConnectSendClientRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConnectSendClientRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.retCode = options.enums === String ? "CR_Unknow" : 0;
                object.msg = "";
            }
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = options.enums === String ? $root.pb.ConnectRetCode[message.retCode] === undefined ? message.retCode : $root.pb.ConnectRetCode[message.retCode] : message.retCode;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this ConnectSendClientRes to JSON.
         * @function toJSON
         * @memberof pb.ConnectSendClientRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConnectSendClientRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ConnectSendClientRes
         * @function getTypeUrl
         * @memberof pb.ConnectSendClientRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ConnectSendClientRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.ConnectSendClientRes";
        };

        return ConnectSendClientRes;
    })();

    pb.ConnectKickClientReq = (function() {

        /**
         * Properties of a ConnectKickClientReq.
         * @memberof pb
         * @interface IConnectKickClientReq
         * @property {string|null} [sessionId] ConnectKickClientReq sessionId
         * @property {number|null} [serverId] ConnectKickClientReq serverId
         */

        /**
         * Constructs a new ConnectKickClientReq.
         * @memberof pb
         * @classdesc Represents a ConnectKickClientReq.
         * @implements IConnectKickClientReq
         * @constructor
         * @param {pb.IConnectKickClientReq=} [properties] Properties to set
         */
        function ConnectKickClientReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConnectKickClientReq sessionId.
         * @member {string} sessionId
         * @memberof pb.ConnectKickClientReq
         * @instance
         */
        ConnectKickClientReq.prototype.sessionId = "";

        /**
         * ConnectKickClientReq serverId.
         * @member {number} serverId
         * @memberof pb.ConnectKickClientReq
         * @instance
         */
        ConnectKickClientReq.prototype.serverId = 0;

        /**
         * Creates a new ConnectKickClientReq instance using the specified properties.
         * @function create
         * @memberof pb.ConnectKickClientReq
         * @static
         * @param {pb.IConnectKickClientReq=} [properties] Properties to set
         * @returns {pb.ConnectKickClientReq} ConnectKickClientReq instance
         */
        ConnectKickClientReq.create = function create(properties) {
            return new ConnectKickClientReq(properties);
        };

        /**
         * Encodes the specified ConnectKickClientReq message. Does not implicitly {@link pb.ConnectKickClientReq.verify|verify} messages.
         * @function encode
         * @memberof pb.ConnectKickClientReq
         * @static
         * @param {pb.IConnectKickClientReq} message ConnectKickClientReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectKickClientReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sessionId);
            if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.serverId);
            return writer;
        };

        /**
         * Encodes the specified ConnectKickClientReq message, length delimited. Does not implicitly {@link pb.ConnectKickClientReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ConnectKickClientReq
         * @static
         * @param {pb.IConnectKickClientReq} message ConnectKickClientReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectKickClientReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConnectKickClientReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ConnectKickClientReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ConnectKickClientReq} ConnectKickClientReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectKickClientReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ConnectKickClientReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.sessionId = reader.string();
                        break;
                    }
                case 2: {
                        message.serverId = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConnectKickClientReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ConnectKickClientReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ConnectKickClientReq} ConnectKickClientReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectKickClientReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConnectKickClientReq message.
         * @function verify
         * @memberof pb.ConnectKickClientReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConnectKickClientReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isString(message.sessionId))
                    return "sessionId: string expected";
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isInteger(message.serverId))
                    return "serverId: integer expected";
            return null;
        };

        /**
         * Creates a ConnectKickClientReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ConnectKickClientReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ConnectKickClientReq} ConnectKickClientReq
         */
        ConnectKickClientReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ConnectKickClientReq)
                return object;
            let message = new $root.pb.ConnectKickClientReq();
            if (object.sessionId != null)
                message.sessionId = String(object.sessionId);
            if (object.serverId != null)
                message.serverId = object.serverId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a ConnectKickClientReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ConnectKickClientReq
         * @static
         * @param {pb.ConnectKickClientReq} message ConnectKickClientReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConnectKickClientReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.sessionId = "";
                object.serverId = 0;
            }
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                object.sessionId = message.sessionId;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            return object;
        };

        /**
         * Converts this ConnectKickClientReq to JSON.
         * @function toJSON
         * @memberof pb.ConnectKickClientReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConnectKickClientReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ConnectKickClientReq
         * @function getTypeUrl
         * @memberof pb.ConnectKickClientReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ConnectKickClientReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.ConnectKickClientReq";
        };

        return ConnectKickClientReq;
    })();

    pb.ConnectKickClientRes = (function() {

        /**
         * Properties of a ConnectKickClientRes.
         * @memberof pb
         * @interface IConnectKickClientRes
         * @property {pb.ConnectRetCode|null} [retCode] ConnectKickClientRes retCode
         */

        /**
         * Constructs a new ConnectKickClientRes.
         * @memberof pb
         * @classdesc Represents a ConnectKickClientRes.
         * @implements IConnectKickClientRes
         * @constructor
         * @param {pb.IConnectKickClientRes=} [properties] Properties to set
         */
        function ConnectKickClientRes(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConnectKickClientRes retCode.
         * @member {pb.ConnectRetCode} retCode
         * @memberof pb.ConnectKickClientRes
         * @instance
         */
        ConnectKickClientRes.prototype.retCode = 0;

        /**
         * Creates a new ConnectKickClientRes instance using the specified properties.
         * @function create
         * @memberof pb.ConnectKickClientRes
         * @static
         * @param {pb.IConnectKickClientRes=} [properties] Properties to set
         * @returns {pb.ConnectKickClientRes} ConnectKickClientRes instance
         */
        ConnectKickClientRes.create = function create(properties) {
            return new ConnectKickClientRes(properties);
        };

        /**
         * Encodes the specified ConnectKickClientRes message. Does not implicitly {@link pb.ConnectKickClientRes.verify|verify} messages.
         * @function encode
         * @memberof pb.ConnectKickClientRes
         * @static
         * @param {pb.IConnectKickClientRes} message ConnectKickClientRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectKickClientRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.retCode != null && Object.hasOwnProperty.call(message, "retCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            return writer;
        };

        /**
         * Encodes the specified ConnectKickClientRes message, length delimited. Does not implicitly {@link pb.ConnectKickClientRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ConnectKickClientRes
         * @static
         * @param {pb.IConnectKickClientRes} message ConnectKickClientRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectKickClientRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConnectKickClientRes message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ConnectKickClientRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ConnectKickClientRes} ConnectKickClientRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectKickClientRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ConnectKickClientRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.retCode = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConnectKickClientRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ConnectKickClientRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ConnectKickClientRes} ConnectKickClientRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectKickClientRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConnectKickClientRes message.
         * @function verify
         * @memberof pb.ConnectKickClientRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConnectKickClientRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                switch (message.retCode) {
                default:
                    return "retCode: enum value expected";
                case 0:
                case 2001:
                case 2002:
                case 5001:
                    break;
                }
            return null;
        };

        /**
         * Creates a ConnectKickClientRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ConnectKickClientRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ConnectKickClientRes} ConnectKickClientRes
         */
        ConnectKickClientRes.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ConnectKickClientRes)
                return object;
            let message = new $root.pb.ConnectKickClientRes();
            switch (object.retCode) {
            default:
                if (typeof object.retCode === "number") {
                    message.retCode = object.retCode;
                    break;
                }
                break;
            case "CR_Unknow":
            case 0:
                message.retCode = 0;
                break;
            case "CR_Success":
            case 2001:
                message.retCode = 2001;
                break;
            case "CR_Offline":
            case 2002:
                message.retCode = 2002;
                break;
            case "CR_Error":
            case 5001:
                message.retCode = 5001;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ConnectKickClientRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ConnectKickClientRes
         * @static
         * @param {pb.ConnectKickClientRes} message ConnectKickClientRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConnectKickClientRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.retCode = options.enums === String ? "CR_Unknow" : 0;
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = options.enums === String ? $root.pb.ConnectRetCode[message.retCode] === undefined ? message.retCode : $root.pb.ConnectRetCode[message.retCode] : message.retCode;
            return object;
        };

        /**
         * Converts this ConnectKickClientRes to JSON.
         * @function toJSON
         * @memberof pb.ConnectKickClientRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConnectKickClientRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ConnectKickClientRes
         * @function getTypeUrl
         * @memberof pb.ConnectKickClientRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ConnectKickClientRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.ConnectKickClientRes";
        };

        return ConnectKickClientRes;
    })();

    pb.LogicDataReq = (function() {

        /**
         * Properties of a LogicDataReq.
         * @memberof pb
         * @interface ILogicDataReq
         * @property {pb.Packet|null} [command] LogicDataReq command
         * @property {Uint8Array|null} [data] LogicDataReq data
         * @property {string|null} [sessionId] LogicDataReq sessionId
         * @property {number|null} [serverId] LogicDataReq serverId
         * @property {number|Long|null} [userId] LogicDataReq userId
         */

        /**
         * Constructs a new LogicDataReq.
         * @memberof pb
         * @classdesc Represents a LogicDataReq.
         * @implements ILogicDataReq
         * @constructor
         * @param {pb.ILogicDataReq=} [properties] Properties to set
         */
        function LogicDataReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LogicDataReq command.
         * @member {pb.Packet} command
         * @memberof pb.LogicDataReq
         * @instance
         */
        LogicDataReq.prototype.command = 0;

        /**
         * LogicDataReq data.
         * @member {Uint8Array} data
         * @memberof pb.LogicDataReq
         * @instance
         */
        LogicDataReq.prototype.data = $util.newBuffer([]);

        /**
         * LogicDataReq sessionId.
         * @member {string} sessionId
         * @memberof pb.LogicDataReq
         * @instance
         */
        LogicDataReq.prototype.sessionId = "";

        /**
         * LogicDataReq serverId.
         * @member {number} serverId
         * @memberof pb.LogicDataReq
         * @instance
         */
        LogicDataReq.prototype.serverId = 0;

        /**
         * LogicDataReq userId.
         * @member {number|Long} userId
         * @memberof pb.LogicDataReq
         * @instance
         */
        LogicDataReq.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new LogicDataReq instance using the specified properties.
         * @function create
         * @memberof pb.LogicDataReq
         * @static
         * @param {pb.ILogicDataReq=} [properties] Properties to set
         * @returns {pb.LogicDataReq} LogicDataReq instance
         */
        LogicDataReq.create = function create(properties) {
            return new LogicDataReq(properties);
        };

        /**
         * Encodes the specified LogicDataReq message. Does not implicitly {@link pb.LogicDataReq.verify|verify} messages.
         * @function encode
         * @memberof pb.LogicDataReq
         * @static
         * @param {pb.ILogicDataReq} message LogicDataReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogicDataReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.command != null && Object.hasOwnProperty.call(message, "command"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.command);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.sessionId);
            if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.serverId);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.userId);
            return writer;
        };

        /**
         * Encodes the specified LogicDataReq message, length delimited. Does not implicitly {@link pb.LogicDataReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.LogicDataReq
         * @static
         * @param {pb.ILogicDataReq} message LogicDataReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogicDataReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LogicDataReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.LogicDataReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.LogicDataReq} LogicDataReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogicDataReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.LogicDataReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.command = reader.int32();
                        break;
                    }
                case 2: {
                        message.data = reader.bytes();
                        break;
                    }
                case 3: {
                        message.sessionId = reader.string();
                        break;
                    }
                case 4: {
                        message.serverId = reader.uint32();
                        break;
                    }
                case 5: {
                        message.userId = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LogicDataReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.LogicDataReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.LogicDataReq} LogicDataReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogicDataReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LogicDataReq message.
         * @function verify
         * @memberof pb.LogicDataReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LogicDataReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.command != null && message.hasOwnProperty("command"))
                switch (message.command) {
                default:
                    return "command: enum value expected";
                case 0:
                case 500:
                case 403:
                case 1001:
                case 2001:
                case 2002:
                case 3001:
                case 4001:
                case 4002:
                case 4003:
                case 4004:
                case 4005:
                case 8001:
                case 8002:
                case 8003:
                case 8010:
                case 9001:
                case 9002:
                    break;
                }
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isString(message.sessionId))
                    return "sessionId: string expected";
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isInteger(message.serverId))
                    return "serverId: integer expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            return null;
        };

        /**
         * Creates a LogicDataReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.LogicDataReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.LogicDataReq} LogicDataReq
         */
        LogicDataReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.LogicDataReq)
                return object;
            let message = new $root.pb.LogicDataReq();
            switch (object.command) {
            default:
                if (typeof object.command === "number") {
                    message.command = object.command;
                    break;
                }
                break;
            case "PacketNone":
            case 0:
                message.command = 0;
                break;
            case "SystemError":
            case 500:
                message.command = 500;
                break;
            case "UserNotLogin":
            case 403:
                message.command = 403;
                break;
            case "Login":
            case 1001:
                message.command = 1001;
                break;
            case "GetProfile":
            case 2001:
                message.command = 2001;
                break;
            case "ModifyProfile":
            case 2002:
                message.command = 2002;
                break;
            case "GetUser":
            case 3001:
                message.command = 3001;
                break;
            case "GetFriendList":
            case 4001:
                message.command = 4001;
                break;
            case "GetFriend":
            case 4002:
                message.command = 4002;
                break;
            case "RemoveFriend":
            case 4003:
                message.command = 4003;
                break;
            case "FriendApply":
            case 4004:
                message.command = 4004;
                break;
            case "FriendHandle":
            case 4005:
                message.command = 4005;
                break;
            case "PrivateMsg":
            case 8001:
                message.command = 8001;
                break;
            case "PrivateMsgAck":
            case 8002:
                message.command = 8002;
                break;
            case "PrivateMsgRead":
            case 8003:
                message.command = 8003;
                break;
            case "PrivateMsgList":
            case 8010:
                message.command = 8010;
                break;
            case "EventFriendRequest":
            case 9001:
                message.command = 9001;
                break;
            case "EventFriendChange":
            case 9002:
                message.command = 9002;
                break;
            }
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            if (object.sessionId != null)
                message.sessionId = String(object.sessionId);
            if (object.serverId != null)
                message.serverId = object.serverId >>> 0;
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a LogicDataReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.LogicDataReq
         * @static
         * @param {pb.LogicDataReq} message LogicDataReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LogicDataReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.command = options.enums === String ? "PacketNone" : 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.sessionId = "";
                object.serverId = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
            }
            if (message.command != null && message.hasOwnProperty("command"))
                object.command = options.enums === String ? $root.pb.Packet[message.command] === undefined ? message.command : $root.pb.Packet[message.command] : message.command;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                object.sessionId = message.sessionId;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
            return object;
        };

        /**
         * Converts this LogicDataReq to JSON.
         * @function toJSON
         * @memberof pb.LogicDataReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LogicDataReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LogicDataReq
         * @function getTypeUrl
         * @memberof pb.LogicDataReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LogicDataReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.LogicDataReq";
        };

        return LogicDataReq;
    })();

    pb.LogicDataRes = (function() {

        /**
         * Properties of a LogicDataRes.
         * @memberof pb
         * @interface ILogicDataRes
         * @property {pb.Packet|null} [command] LogicDataRes command
         * @property {Uint8Array|null} [data] LogicDataRes data
         * @property {boolean|null} [isSend] LogicDataRes isSend
         * @property {number|Long|null} [userId] LogicDataRes userId
         */

        /**
         * Constructs a new LogicDataRes.
         * @memberof pb
         * @classdesc Represents a LogicDataRes.
         * @implements ILogicDataRes
         * @constructor
         * @param {pb.ILogicDataRes=} [properties] Properties to set
         */
        function LogicDataRes(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LogicDataRes command.
         * @member {pb.Packet} command
         * @memberof pb.LogicDataRes
         * @instance
         */
        LogicDataRes.prototype.command = 0;

        /**
         * LogicDataRes data.
         * @member {Uint8Array} data
         * @memberof pb.LogicDataRes
         * @instance
         */
        LogicDataRes.prototype.data = $util.newBuffer([]);

        /**
         * LogicDataRes isSend.
         * @member {boolean} isSend
         * @memberof pb.LogicDataRes
         * @instance
         */
        LogicDataRes.prototype.isSend = false;

        /**
         * LogicDataRes userId.
         * @member {number|Long} userId
         * @memberof pb.LogicDataRes
         * @instance
         */
        LogicDataRes.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new LogicDataRes instance using the specified properties.
         * @function create
         * @memberof pb.LogicDataRes
         * @static
         * @param {pb.ILogicDataRes=} [properties] Properties to set
         * @returns {pb.LogicDataRes} LogicDataRes instance
         */
        LogicDataRes.create = function create(properties) {
            return new LogicDataRes(properties);
        };

        /**
         * Encodes the specified LogicDataRes message. Does not implicitly {@link pb.LogicDataRes.verify|verify} messages.
         * @function encode
         * @memberof pb.LogicDataRes
         * @static
         * @param {pb.ILogicDataRes} message LogicDataRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogicDataRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.command != null && Object.hasOwnProperty.call(message, "command"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.command);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            if (message.isSend != null && Object.hasOwnProperty.call(message, "isSend"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isSend);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.userId);
            return writer;
        };

        /**
         * Encodes the specified LogicDataRes message, length delimited. Does not implicitly {@link pb.LogicDataRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.LogicDataRes
         * @static
         * @param {pb.ILogicDataRes} message LogicDataRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogicDataRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LogicDataRes message from the specified reader or buffer.
         * @function decode
         * @memberof pb.LogicDataRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.LogicDataRes} LogicDataRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogicDataRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.LogicDataRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.command = reader.int32();
                        break;
                    }
                case 2: {
                        message.data = reader.bytes();
                        break;
                    }
                case 3: {
                        message.isSend = reader.bool();
                        break;
                    }
                case 4: {
                        message.userId = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LogicDataRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.LogicDataRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.LogicDataRes} LogicDataRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogicDataRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LogicDataRes message.
         * @function verify
         * @memberof pb.LogicDataRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LogicDataRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.command != null && message.hasOwnProperty("command"))
                switch (message.command) {
                default:
                    return "command: enum value expected";
                case 0:
                case 500:
                case 403:
                case 1001:
                case 2001:
                case 2002:
                case 3001:
                case 4001:
                case 4002:
                case 4003:
                case 4004:
                case 4005:
                case 8001:
                case 8002:
                case 8003:
                case 8010:
                case 9001:
                case 9002:
                    break;
                }
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.isSend != null && message.hasOwnProperty("isSend"))
                if (typeof message.isSend !== "boolean")
                    return "isSend: boolean expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            return null;
        };

        /**
         * Creates a LogicDataRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.LogicDataRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.LogicDataRes} LogicDataRes
         */
        LogicDataRes.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.LogicDataRes)
                return object;
            let message = new $root.pb.LogicDataRes();
            switch (object.command) {
            default:
                if (typeof object.command === "number") {
                    message.command = object.command;
                    break;
                }
                break;
            case "PacketNone":
            case 0:
                message.command = 0;
                break;
            case "SystemError":
            case 500:
                message.command = 500;
                break;
            case "UserNotLogin":
            case 403:
                message.command = 403;
                break;
            case "Login":
            case 1001:
                message.command = 1001;
                break;
            case "GetProfile":
            case 2001:
                message.command = 2001;
                break;
            case "ModifyProfile":
            case 2002:
                message.command = 2002;
                break;
            case "GetUser":
            case 3001:
                message.command = 3001;
                break;
            case "GetFriendList":
            case 4001:
                message.command = 4001;
                break;
            case "GetFriend":
            case 4002:
                message.command = 4002;
                break;
            case "RemoveFriend":
            case 4003:
                message.command = 4003;
                break;
            case "FriendApply":
            case 4004:
                message.command = 4004;
                break;
            case "FriendHandle":
            case 4005:
                message.command = 4005;
                break;
            case "PrivateMsg":
            case 8001:
                message.command = 8001;
                break;
            case "PrivateMsgAck":
            case 8002:
                message.command = 8002;
                break;
            case "PrivateMsgRead":
            case 8003:
                message.command = 8003;
                break;
            case "PrivateMsgList":
            case 8010:
                message.command = 8010;
                break;
            case "EventFriendRequest":
            case 9001:
                message.command = 9001;
                break;
            case "EventFriendChange":
            case 9002:
                message.command = 9002;
                break;
            }
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            if (object.isSend != null)
                message.isSend = Boolean(object.isSend);
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a LogicDataRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.LogicDataRes
         * @static
         * @param {pb.LogicDataRes} message LogicDataRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LogicDataRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.command = options.enums === String ? "PacketNone" : 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.isSend = false;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
            }
            if (message.command != null && message.hasOwnProperty("command"))
                object.command = options.enums === String ? $root.pb.Packet[message.command] === undefined ? message.command : $root.pb.Packet[message.command] : message.command;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.isSend != null && message.hasOwnProperty("isSend"))
                object.isSend = message.isSend;
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
            return object;
        };

        /**
         * Converts this LogicDataRes to JSON.
         * @function toJSON
         * @memberof pb.LogicDataRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LogicDataRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LogicDataRes
         * @function getTypeUrl
         * @memberof pb.LogicDataRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LogicDataRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.LogicDataRes";
        };

        return LogicDataRes;
    })();

    pb.MqMsg = (function() {

        /**
         * Properties of a MqMsg.
         * @memberof pb
         * @interface IMqMsg
         * @property {Uint8Array|null} [data] MqMsg data
         * @property {string|null} [sessionId] MqMsg sessionId
         * @property {number|Long|null} [fromId] MqMsg fromId
         * @property {number|Long|null} [receiveId] MqMsg receiveId
         */

        /**
         * Constructs a new MqMsg.
         * @memberof pb
         * @classdesc Represents a MqMsg.
         * @implements IMqMsg
         * @constructor
         * @param {pb.IMqMsg=} [properties] Properties to set
         */
        function MqMsg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MqMsg data.
         * @member {Uint8Array} data
         * @memberof pb.MqMsg
         * @instance
         */
        MqMsg.prototype.data = $util.newBuffer([]);

        /**
         * MqMsg sessionId.
         * @member {string} sessionId
         * @memberof pb.MqMsg
         * @instance
         */
        MqMsg.prototype.sessionId = "";

        /**
         * MqMsg fromId.
         * @member {number|Long} fromId
         * @memberof pb.MqMsg
         * @instance
         */
        MqMsg.prototype.fromId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MqMsg receiveId.
         * @member {number|Long} receiveId
         * @memberof pb.MqMsg
         * @instance
         */
        MqMsg.prototype.receiveId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new MqMsg instance using the specified properties.
         * @function create
         * @memberof pb.MqMsg
         * @static
         * @param {pb.IMqMsg=} [properties] Properties to set
         * @returns {pb.MqMsg} MqMsg instance
         */
        MqMsg.create = function create(properties) {
            return new MqMsg(properties);
        };

        /**
         * Encodes the specified MqMsg message. Does not implicitly {@link pb.MqMsg.verify|verify} messages.
         * @function encode
         * @memberof pb.MqMsg
         * @static
         * @param {pb.IMqMsg} message MqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MqMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sessionId);
            if (message.fromId != null && Object.hasOwnProperty.call(message, "fromId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.fromId);
            if (message.receiveId != null && Object.hasOwnProperty.call(message, "receiveId"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.receiveId);
            return writer;
        };

        /**
         * Encodes the specified MqMsg message, length delimited. Does not implicitly {@link pb.MqMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.MqMsg
         * @static
         * @param {pb.IMqMsg} message MqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MqMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MqMsg message from the specified reader or buffer.
         * @function decode
         * @memberof pb.MqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.MqMsg} MqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MqMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.MqMsg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.data = reader.bytes();
                        break;
                    }
                case 2: {
                        message.sessionId = reader.string();
                        break;
                    }
                case 3: {
                        message.fromId = reader.uint64();
                        break;
                    }
                case 4: {
                        message.receiveId = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MqMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.MqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.MqMsg} MqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MqMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MqMsg message.
         * @function verify
         * @memberof pb.MqMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MqMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isString(message.sessionId))
                    return "sessionId: string expected";
            if (message.fromId != null && message.hasOwnProperty("fromId"))
                if (!$util.isInteger(message.fromId) && !(message.fromId && $util.isInteger(message.fromId.low) && $util.isInteger(message.fromId.high)))
                    return "fromId: integer|Long expected";
            if (message.receiveId != null && message.hasOwnProperty("receiveId"))
                if (!$util.isInteger(message.receiveId) && !(message.receiveId && $util.isInteger(message.receiveId.low) && $util.isInteger(message.receiveId.high)))
                    return "receiveId: integer|Long expected";
            return null;
        };

        /**
         * Creates a MqMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.MqMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.MqMsg} MqMsg
         */
        MqMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.MqMsg)
                return object;
            let message = new $root.pb.MqMsg();
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            if (object.sessionId != null)
                message.sessionId = String(object.sessionId);
            if (object.fromId != null)
                if ($util.Long)
                    (message.fromId = $util.Long.fromValue(object.fromId)).unsigned = true;
                else if (typeof object.fromId === "string")
                    message.fromId = parseInt(object.fromId, 10);
                else if (typeof object.fromId === "number")
                    message.fromId = object.fromId;
                else if (typeof object.fromId === "object")
                    message.fromId = new $util.LongBits(object.fromId.low >>> 0, object.fromId.high >>> 0).toNumber(true);
            if (object.receiveId != null)
                if ($util.Long)
                    (message.receiveId = $util.Long.fromValue(object.receiveId)).unsigned = true;
                else if (typeof object.receiveId === "string")
                    message.receiveId = parseInt(object.receiveId, 10);
                else if (typeof object.receiveId === "number")
                    message.receiveId = object.receiveId;
                else if (typeof object.receiveId === "object")
                    message.receiveId = new $util.LongBits(object.receiveId.low >>> 0, object.receiveId.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a MqMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.MqMsg
         * @static
         * @param {pb.MqMsg} message MqMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MqMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.sessionId = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.fromId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fromId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.receiveId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.receiveId = options.longs === String ? "0" : 0;
            }
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                object.sessionId = message.sessionId;
            if (message.fromId != null && message.hasOwnProperty("fromId"))
                if (typeof message.fromId === "number")
                    object.fromId = options.longs === String ? String(message.fromId) : message.fromId;
                else
                    object.fromId = options.longs === String ? $util.Long.prototype.toString.call(message.fromId) : options.longs === Number ? new $util.LongBits(message.fromId.low >>> 0, message.fromId.high >>> 0).toNumber(true) : message.fromId;
            if (message.receiveId != null && message.hasOwnProperty("receiveId"))
                if (typeof message.receiveId === "number")
                    object.receiveId = options.longs === String ? String(message.receiveId) : message.receiveId;
                else
                    object.receiveId = options.longs === String ? $util.Long.prototype.toString.call(message.receiveId) : options.longs === Number ? new $util.LongBits(message.receiveId.low >>> 0, message.receiveId.high >>> 0).toNumber(true) : message.receiveId;
            return object;
        };

        /**
         * Converts this MqMsg to JSON.
         * @function toJSON
         * @memberof pb.MqMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MqMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MqMsg
         * @function getTypeUrl
         * @memberof pb.MqMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MqMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.MqMsg";
        };

        return MqMsg;
    })();

    pb.SelfUser = (function() {

        /**
         * Properties of a SelfUser.
         * @memberof pb
         * @interface ISelfUser
         * @property {number|Long|null} [userId] SelfUser userId
         * @property {string|null} [nickname] SelfUser nickname
         * @property {string|null} [username] SelfUser username
         * @property {string|null} [note] SelfUser note
         * @property {number|null} [age] SelfUser age
         * @property {number|null} [sex] SelfUser sex
         * @property {string|null} [email] SelfUser email
         */

        /**
         * Constructs a new SelfUser.
         * @memberof pb
         * @classdesc Represents a SelfUser.
         * @implements ISelfUser
         * @constructor
         * @param {pb.ISelfUser=} [properties] Properties to set
         */
        function SelfUser(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SelfUser userId.
         * @member {number|Long} userId
         * @memberof pb.SelfUser
         * @instance
         */
        SelfUser.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SelfUser nickname.
         * @member {string} nickname
         * @memberof pb.SelfUser
         * @instance
         */
        SelfUser.prototype.nickname = "";

        /**
         * SelfUser username.
         * @member {string} username
         * @memberof pb.SelfUser
         * @instance
         */
        SelfUser.prototype.username = "";

        /**
         * SelfUser note.
         * @member {string} note
         * @memberof pb.SelfUser
         * @instance
         */
        SelfUser.prototype.note = "";

        /**
         * SelfUser age.
         * @member {number} age
         * @memberof pb.SelfUser
         * @instance
         */
        SelfUser.prototype.age = 0;

        /**
         * SelfUser sex.
         * @member {number} sex
         * @memberof pb.SelfUser
         * @instance
         */
        SelfUser.prototype.sex = 0;

        /**
         * SelfUser email.
         * @member {string} email
         * @memberof pb.SelfUser
         * @instance
         */
        SelfUser.prototype.email = "";

        /**
         * Creates a new SelfUser instance using the specified properties.
         * @function create
         * @memberof pb.SelfUser
         * @static
         * @param {pb.ISelfUser=} [properties] Properties to set
         * @returns {pb.SelfUser} SelfUser instance
         */
        SelfUser.create = function create(properties) {
            return new SelfUser(properties);
        };

        /**
         * Encodes the specified SelfUser message. Does not implicitly {@link pb.SelfUser.verify|verify} messages.
         * @function encode
         * @memberof pb.SelfUser
         * @static
         * @param {pb.ISelfUser} message SelfUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelfUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.userId);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.username);
            if (message.note != null && Object.hasOwnProperty.call(message, "note"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.note);
            if (message.age != null && Object.hasOwnProperty.call(message, "age"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.age);
            if (message.sex != null && Object.hasOwnProperty.call(message, "sex"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.sex);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.email);
            return writer;
        };

        /**
         * Encodes the specified SelfUser message, length delimited. Does not implicitly {@link pb.SelfUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SelfUser
         * @static
         * @param {pb.ISelfUser} message SelfUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelfUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SelfUser message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SelfUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SelfUser} SelfUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelfUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SelfUser();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.uint64();
                        break;
                    }
                case 2: {
                        message.nickname = reader.string();
                        break;
                    }
                case 3: {
                        message.username = reader.string();
                        break;
                    }
                case 4: {
                        message.note = reader.string();
                        break;
                    }
                case 5: {
                        message.age = reader.uint32();
                        break;
                    }
                case 6: {
                        message.sex = reader.uint32();
                        break;
                    }
                case 7: {
                        message.email = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SelfUser message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SelfUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SelfUser} SelfUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelfUser.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SelfUser message.
         * @function verify
         * @memberof pb.SelfUser
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SelfUser.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.note != null && message.hasOwnProperty("note"))
                if (!$util.isString(message.note))
                    return "note: string expected";
            if (message.age != null && message.hasOwnProperty("age"))
                if (!$util.isInteger(message.age))
                    return "age: integer expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            return null;
        };

        /**
         * Creates a SelfUser message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SelfUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SelfUser} SelfUser
         */
        SelfUser.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SelfUser)
                return object;
            let message = new $root.pb.SelfUser();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.username != null)
                message.username = String(object.username);
            if (object.note != null)
                message.note = String(object.note);
            if (object.age != null)
                message.age = object.age >>> 0;
            if (object.sex != null)
                message.sex = object.sex >>> 0;
            if (object.email != null)
                message.email = String(object.email);
            return message;
        };

        /**
         * Creates a plain object from a SelfUser message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SelfUser
         * @static
         * @param {pb.SelfUser} message SelfUser
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SelfUser.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.nickname = "";
                object.username = "";
                object.note = "";
                object.age = 0;
                object.sex = 0;
                object.email = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.note != null && message.hasOwnProperty("note"))
                object.note = message.note;
            if (message.age != null && message.hasOwnProperty("age"))
                object.age = message.age;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            return object;
        };

        /**
         * Converts this SelfUser to JSON.
         * @function toJSON
         * @memberof pb.SelfUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SelfUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SelfUser
         * @function getTypeUrl
         * @memberof pb.SelfUser
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SelfUser.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SelfUser";
        };

        return SelfUser;
    })();

    pb.User = (function() {

        /**
         * Properties of a User.
         * @memberof pb
         * @interface IUser
         * @property {number|Long|null} [userId] User userId
         * @property {string|null} [nickname] User nickname
         * @property {string|null} [username] User username
         * @property {string|null} [note] User note
         * @property {number|null} [age] User age
         * @property {number|null} [sex] User sex
         */

        /**
         * Constructs a new User.
         * @memberof pb
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {pb.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User userId.
         * @member {number|Long} userId
         * @memberof pb.User
         * @instance
         */
        User.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * User nickname.
         * @member {string} nickname
         * @memberof pb.User
         * @instance
         */
        User.prototype.nickname = "";

        /**
         * User username.
         * @member {string} username
         * @memberof pb.User
         * @instance
         */
        User.prototype.username = "";

        /**
         * User note.
         * @member {string} note
         * @memberof pb.User
         * @instance
         */
        User.prototype.note = "";

        /**
         * User age.
         * @member {number} age
         * @memberof pb.User
         * @instance
         */
        User.prototype.age = 0;

        /**
         * User sex.
         * @member {number} sex
         * @memberof pb.User
         * @instance
         */
        User.prototype.sex = 0;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof pb.User
         * @static
         * @param {pb.IUser=} [properties] Properties to set
         * @returns {pb.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link pb.User.verify|verify} messages.
         * @function encode
         * @memberof pb.User
         * @static
         * @param {pb.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.userId);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.username);
            if (message.note != null && Object.hasOwnProperty.call(message, "note"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.note);
            if (message.age != null && Object.hasOwnProperty.call(message, "age"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.age);
            if (message.sex != null && Object.hasOwnProperty.call(message, "sex"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.sex);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link pb.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.User
         * @static
         * @param {pb.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof pb.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.User();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.uint64();
                        break;
                    }
                case 2: {
                        message.nickname = reader.string();
                        break;
                    }
                case 3: {
                        message.username = reader.string();
                        break;
                    }
                case 4: {
                        message.note = reader.string();
                        break;
                    }
                case 5: {
                        message.age = reader.uint32();
                        break;
                    }
                case 6: {
                        message.sex = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof pb.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.note != null && message.hasOwnProperty("note"))
                if (!$util.isString(message.note))
                    return "note: string expected";
            if (message.age != null && message.hasOwnProperty("age"))
                if (!$util.isInteger(message.age))
                    return "age: integer expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.User)
                return object;
            let message = new $root.pb.User();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.username != null)
                message.username = String(object.username);
            if (object.note != null)
                message.note = String(object.note);
            if (object.age != null)
                message.age = object.age >>> 0;
            if (object.sex != null)
                message.sex = object.sex >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.User
         * @static
         * @param {pb.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.nickname = "";
                object.username = "";
                object.note = "";
                object.age = 0;
                object.sex = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.note != null && message.hasOwnProperty("note"))
                object.note = message.note;
            if (message.age != null && message.hasOwnProperty("age"))
                object.age = message.age;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof pb.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for User
         * @function getTypeUrl
         * @memberof pb.User
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        User.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.User";
        };

        return User;
    })();

    pb.Friend = (function() {

        /**
         * Properties of a Friend.
         * @memberof pb
         * @interface IFriend
         * @property {number|Long|null} [friendId] Friend friendId
         * @property {number|Long|null} [userId] Friend userId
         * @property {string|null} [nickname] Friend nickname
         * @property {string|null} [username] Friend username
         * @property {string|null} [remark] Friend remark
         * @property {string|null} [note] Friend note
         * @property {number|null} [age] Friend age
         * @property {number|null} [sex] Friend sex
         */

        /**
         * Constructs a new Friend.
         * @memberof pb
         * @classdesc Represents a Friend.
         * @implements IFriend
         * @constructor
         * @param {pb.IFriend=} [properties] Properties to set
         */
        function Friend(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Friend friendId.
         * @member {number|Long} friendId
         * @memberof pb.Friend
         * @instance
         */
        Friend.prototype.friendId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Friend userId.
         * @member {number|Long} userId
         * @memberof pb.Friend
         * @instance
         */
        Friend.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Friend nickname.
         * @member {string} nickname
         * @memberof pb.Friend
         * @instance
         */
        Friend.prototype.nickname = "";

        /**
         * Friend username.
         * @member {string} username
         * @memberof pb.Friend
         * @instance
         */
        Friend.prototype.username = "";

        /**
         * Friend remark.
         * @member {string} remark
         * @memberof pb.Friend
         * @instance
         */
        Friend.prototype.remark = "";

        /**
         * Friend note.
         * @member {string} note
         * @memberof pb.Friend
         * @instance
         */
        Friend.prototype.note = "";

        /**
         * Friend age.
         * @member {number} age
         * @memberof pb.Friend
         * @instance
         */
        Friend.prototype.age = 0;

        /**
         * Friend sex.
         * @member {number} sex
         * @memberof pb.Friend
         * @instance
         */
        Friend.prototype.sex = 0;

        /**
         * Creates a new Friend instance using the specified properties.
         * @function create
         * @memberof pb.Friend
         * @static
         * @param {pb.IFriend=} [properties] Properties to set
         * @returns {pb.Friend} Friend instance
         */
        Friend.create = function create(properties) {
            return new Friend(properties);
        };

        /**
         * Encodes the specified Friend message. Does not implicitly {@link pb.Friend.verify|verify} messages.
         * @function encode
         * @memberof pb.Friend
         * @static
         * @param {pb.IFriend} message Friend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Friend.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.friendId != null && Object.hasOwnProperty.call(message, "friendId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.friendId);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.userId);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.username);
            if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.remark);
            if (message.note != null && Object.hasOwnProperty.call(message, "note"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.note);
            if (message.age != null && Object.hasOwnProperty.call(message, "age"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.age);
            if (message.sex != null && Object.hasOwnProperty.call(message, "sex"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.sex);
            return writer;
        };

        /**
         * Encodes the specified Friend message, length delimited. Does not implicitly {@link pb.Friend.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Friend
         * @static
         * @param {pb.IFriend} message Friend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Friend.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Friend message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Friend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Friend} Friend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Friend.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Friend();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.friendId = reader.uint64();
                        break;
                    }
                case 2: {
                        message.userId = reader.uint64();
                        break;
                    }
                case 3: {
                        message.nickname = reader.string();
                        break;
                    }
                case 4: {
                        message.username = reader.string();
                        break;
                    }
                case 5: {
                        message.remark = reader.string();
                        break;
                    }
                case 6: {
                        message.note = reader.string();
                        break;
                    }
                case 7: {
                        message.age = reader.int32();
                        break;
                    }
                case 8: {
                        message.sex = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Friend message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Friend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Friend} Friend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Friend.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Friend message.
         * @function verify
         * @memberof pb.Friend
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Friend.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.friendId != null && message.hasOwnProperty("friendId"))
                if (!$util.isInteger(message.friendId) && !(message.friendId && $util.isInteger(message.friendId.low) && $util.isInteger(message.friendId.high)))
                    return "friendId: integer|Long expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            if (message.note != null && message.hasOwnProperty("note"))
                if (!$util.isString(message.note))
                    return "note: string expected";
            if (message.age != null && message.hasOwnProperty("age"))
                if (!$util.isInteger(message.age))
                    return "age: integer expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            return null;
        };

        /**
         * Creates a Friend message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Friend
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Friend} Friend
         */
        Friend.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Friend)
                return object;
            let message = new $root.pb.Friend();
            if (object.friendId != null)
                if ($util.Long)
                    (message.friendId = $util.Long.fromValue(object.friendId)).unsigned = true;
                else if (typeof object.friendId === "string")
                    message.friendId = parseInt(object.friendId, 10);
                else if (typeof object.friendId === "number")
                    message.friendId = object.friendId;
                else if (typeof object.friendId === "object")
                    message.friendId = new $util.LongBits(object.friendId.low >>> 0, object.friendId.high >>> 0).toNumber(true);
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.username != null)
                message.username = String(object.username);
            if (object.remark != null)
                message.remark = String(object.remark);
            if (object.note != null)
                message.note = String(object.note);
            if (object.age != null)
                message.age = object.age | 0;
            if (object.sex != null)
                message.sex = object.sex | 0;
            return message;
        };

        /**
         * Creates a plain object from a Friend message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Friend
         * @static
         * @param {pb.Friend} message Friend
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Friend.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.friendId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.friendId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.nickname = "";
                object.username = "";
                object.remark = "";
                object.note = "";
                object.age = 0;
                object.sex = 0;
            }
            if (message.friendId != null && message.hasOwnProperty("friendId"))
                if (typeof message.friendId === "number")
                    object.friendId = options.longs === String ? String(message.friendId) : message.friendId;
                else
                    object.friendId = options.longs === String ? $util.Long.prototype.toString.call(message.friendId) : options.longs === Number ? new $util.LongBits(message.friendId.low >>> 0, message.friendId.high >>> 0).toNumber(true) : message.friendId;
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            if (message.note != null && message.hasOwnProperty("note"))
                object.note = message.note;
            if (message.age != null && message.hasOwnProperty("age"))
                object.age = message.age;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            return object;
        };

        /**
         * Converts this Friend to JSON.
         * @function toJSON
         * @memberof pb.Friend
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Friend.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Friend
         * @function getTypeUrl
         * @memberof pb.Friend
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Friend.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Friend";
        };

        return Friend;
    })();

    pb.Nav = (function() {

        /**
         * Properties of a Nav.
         * @memberof pb
         * @interface INav
         * @property {number|Long|null} [total] Nav total
         * @property {number|Long|null} [currentPage] Nav currentPage
         * @property {number|Long|null} [maxPage] Nav maxPage
         */

        /**
         * Constructs a new Nav.
         * @memberof pb
         * @classdesc Represents a Nav.
         * @implements INav
         * @constructor
         * @param {pb.INav=} [properties] Properties to set
         */
        function Nav(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Nav total.
         * @member {number|Long} total
         * @memberof pb.Nav
         * @instance
         */
        Nav.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Nav currentPage.
         * @member {number|Long} currentPage
         * @memberof pb.Nav
         * @instance
         */
        Nav.prototype.currentPage = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Nav maxPage.
         * @member {number|Long} maxPage
         * @memberof pb.Nav
         * @instance
         */
        Nav.prototype.maxPage = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Nav instance using the specified properties.
         * @function create
         * @memberof pb.Nav
         * @static
         * @param {pb.INav=} [properties] Properties to set
         * @returns {pb.Nav} Nav instance
         */
        Nav.create = function create(properties) {
            return new Nav(properties);
        };

        /**
         * Encodes the specified Nav message. Does not implicitly {@link pb.Nav.verify|verify} messages.
         * @function encode
         * @memberof pb.Nav
         * @static
         * @param {pb.INav} message Nav message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Nav.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.total);
            if (message.currentPage != null && Object.hasOwnProperty.call(message, "currentPage"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.currentPage);
            if (message.maxPage != null && Object.hasOwnProperty.call(message, "maxPage"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.maxPage);
            return writer;
        };

        /**
         * Encodes the specified Nav message, length delimited. Does not implicitly {@link pb.Nav.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Nav
         * @static
         * @param {pb.INav} message Nav message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Nav.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Nav message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Nav
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Nav} Nav
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Nav.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Nav();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.total = reader.int64();
                        break;
                    }
                case 2: {
                        message.currentPage = reader.int64();
                        break;
                    }
                case 3: {
                        message.maxPage = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Nav message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Nav
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Nav} Nav
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Nav.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Nav message.
         * @function verify
         * @memberof pb.Nav
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Nav.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                    return "total: integer|Long expected";
            if (message.currentPage != null && message.hasOwnProperty("currentPage"))
                if (!$util.isInteger(message.currentPage) && !(message.currentPage && $util.isInteger(message.currentPage.low) && $util.isInteger(message.currentPage.high)))
                    return "currentPage: integer|Long expected";
            if (message.maxPage != null && message.hasOwnProperty("maxPage"))
                if (!$util.isInteger(message.maxPage) && !(message.maxPage && $util.isInteger(message.maxPage.low) && $util.isInteger(message.maxPage.high)))
                    return "maxPage: integer|Long expected";
            return null;
        };

        /**
         * Creates a Nav message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Nav
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Nav} Nav
         */
        Nav.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Nav)
                return object;
            let message = new $root.pb.Nav();
            if (object.total != null)
                if ($util.Long)
                    (message.total = $util.Long.fromValue(object.total)).unsigned = false;
                else if (typeof object.total === "string")
                    message.total = parseInt(object.total, 10);
                else if (typeof object.total === "number")
                    message.total = object.total;
                else if (typeof object.total === "object")
                    message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber();
            if (object.currentPage != null)
                if ($util.Long)
                    (message.currentPage = $util.Long.fromValue(object.currentPage)).unsigned = false;
                else if (typeof object.currentPage === "string")
                    message.currentPage = parseInt(object.currentPage, 10);
                else if (typeof object.currentPage === "number")
                    message.currentPage = object.currentPage;
                else if (typeof object.currentPage === "object")
                    message.currentPage = new $util.LongBits(object.currentPage.low >>> 0, object.currentPage.high >>> 0).toNumber();
            if (object.maxPage != null)
                if ($util.Long)
                    (message.maxPage = $util.Long.fromValue(object.maxPage)).unsigned = false;
                else if (typeof object.maxPage === "string")
                    message.maxPage = parseInt(object.maxPage, 10);
                else if (typeof object.maxPage === "number")
                    message.maxPage = object.maxPage;
                else if (typeof object.maxPage === "object")
                    message.maxPage = new $util.LongBits(object.maxPage.low >>> 0, object.maxPage.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Nav message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Nav
         * @static
         * @param {pb.Nav} message Nav
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Nav.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.total = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.total = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.currentPage = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.currentPage = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.maxPage = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.maxPage = options.longs === String ? "0" : 0;
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            if (message.currentPage != null && message.hasOwnProperty("currentPage"))
                if (typeof message.currentPage === "number")
                    object.currentPage = options.longs === String ? String(message.currentPage) : message.currentPage;
                else
                    object.currentPage = options.longs === String ? $util.Long.prototype.toString.call(message.currentPage) : options.longs === Number ? new $util.LongBits(message.currentPage.low >>> 0, message.currentPage.high >>> 0).toNumber() : message.currentPage;
            if (message.maxPage != null && message.hasOwnProperty("maxPage"))
                if (typeof message.maxPage === "number")
                    object.maxPage = options.longs === String ? String(message.maxPage) : message.maxPage;
                else
                    object.maxPage = options.longs === String ? $util.Long.prototype.toString.call(message.maxPage) : options.longs === Number ? new $util.LongBits(message.maxPage.low >>> 0, message.maxPage.high >>> 0).toNumber() : message.maxPage;
            return object;
        };

        /**
         * Converts this Nav to JSON.
         * @function toJSON
         * @memberof pb.Nav
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Nav.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Nav
         * @function getTypeUrl
         * @memberof pb.Nav
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Nav.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Nav";
        };

        return Nav;
    })();

    pb.FriendRequestEvent = (function() {

        /**
         * Properties of a FriendRequestEvent.
         * @memberof pb
         * @interface IFriendRequestEvent
         * @property {number|null} [id] FriendRequestEvent id
         * @property {number|Long|null} [fromUid] FriendRequestEvent fromUid
         * @property {number|Long|null} [toUid] FriendRequestEvent toUid
         * @property {number|Long|null} [requestTime] FriendRequestEvent requestTime
         * @property {string|null} [reason] FriendRequestEvent reason
         * @property {number|null} [status] FriendRequestEvent status
         * @property {number|Long|null} [responseTime] FriendRequestEvent responseTime
         * @property {string|null} [rejectReason] FriendRequestEvent rejectReason
         */

        /**
         * Constructs a new FriendRequestEvent.
         * @memberof pb
         * @classdesc Represents a FriendRequestEvent.
         * @implements IFriendRequestEvent
         * @constructor
         * @param {pb.IFriendRequestEvent=} [properties] Properties to set
         */
        function FriendRequestEvent(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FriendRequestEvent id.
         * @member {number} id
         * @memberof pb.FriendRequestEvent
         * @instance
         */
        FriendRequestEvent.prototype.id = 0;

        /**
         * FriendRequestEvent fromUid.
         * @member {number|Long} fromUid
         * @memberof pb.FriendRequestEvent
         * @instance
         */
        FriendRequestEvent.prototype.fromUid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * FriendRequestEvent toUid.
         * @member {number|Long} toUid
         * @memberof pb.FriendRequestEvent
         * @instance
         */
        FriendRequestEvent.prototype.toUid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * FriendRequestEvent requestTime.
         * @member {number|Long} requestTime
         * @memberof pb.FriendRequestEvent
         * @instance
         */
        FriendRequestEvent.prototype.requestTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FriendRequestEvent reason.
         * @member {string} reason
         * @memberof pb.FriendRequestEvent
         * @instance
         */
        FriendRequestEvent.prototype.reason = "";

        /**
         * FriendRequestEvent status.
         * @member {number} status
         * @memberof pb.FriendRequestEvent
         * @instance
         */
        FriendRequestEvent.prototype.status = 0;

        /**
         * FriendRequestEvent responseTime.
         * @member {number|Long} responseTime
         * @memberof pb.FriendRequestEvent
         * @instance
         */
        FriendRequestEvent.prototype.responseTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FriendRequestEvent rejectReason.
         * @member {string} rejectReason
         * @memberof pb.FriendRequestEvent
         * @instance
         */
        FriendRequestEvent.prototype.rejectReason = "";

        /**
         * Creates a new FriendRequestEvent instance using the specified properties.
         * @function create
         * @memberof pb.FriendRequestEvent
         * @static
         * @param {pb.IFriendRequestEvent=} [properties] Properties to set
         * @returns {pb.FriendRequestEvent} FriendRequestEvent instance
         */
        FriendRequestEvent.create = function create(properties) {
            return new FriendRequestEvent(properties);
        };

        /**
         * Encodes the specified FriendRequestEvent message. Does not implicitly {@link pb.FriendRequestEvent.verify|verify} messages.
         * @function encode
         * @memberof pb.FriendRequestEvent
         * @static
         * @param {pb.IFriendRequestEvent} message FriendRequestEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendRequestEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.fromUid != null && Object.hasOwnProperty.call(message, "fromUid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.fromUid);
            if (message.toUid != null && Object.hasOwnProperty.call(message, "toUid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.toUid);
            if (message.requestTime != null && Object.hasOwnProperty.call(message, "requestTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.requestTime);
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.reason);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.status);
            if (message.responseTime != null && Object.hasOwnProperty.call(message, "responseTime"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.responseTime);
            if (message.rejectReason != null && Object.hasOwnProperty.call(message, "rejectReason"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.rejectReason);
            return writer;
        };

        /**
         * Encodes the specified FriendRequestEvent message, length delimited. Does not implicitly {@link pb.FriendRequestEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.FriendRequestEvent
         * @static
         * @param {pb.IFriendRequestEvent} message FriendRequestEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendRequestEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FriendRequestEvent message from the specified reader or buffer.
         * @function decode
         * @memberof pb.FriendRequestEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.FriendRequestEvent} FriendRequestEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendRequestEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.FriendRequestEvent();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.fromUid = reader.uint64();
                        break;
                    }
                case 3: {
                        message.toUid = reader.uint64();
                        break;
                    }
                case 4: {
                        message.requestTime = reader.int64();
                        break;
                    }
                case 5: {
                        message.reason = reader.string();
                        break;
                    }
                case 6: {
                        message.status = reader.int32();
                        break;
                    }
                case 7: {
                        message.responseTime = reader.int64();
                        break;
                    }
                case 8: {
                        message.rejectReason = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FriendRequestEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.FriendRequestEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.FriendRequestEvent} FriendRequestEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendRequestEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FriendRequestEvent message.
         * @function verify
         * @memberof pb.FriendRequestEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FriendRequestEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.fromUid != null && message.hasOwnProperty("fromUid"))
                if (!$util.isInteger(message.fromUid) && !(message.fromUid && $util.isInteger(message.fromUid.low) && $util.isInteger(message.fromUid.high)))
                    return "fromUid: integer|Long expected";
            if (message.toUid != null && message.hasOwnProperty("toUid"))
                if (!$util.isInteger(message.toUid) && !(message.toUid && $util.isInteger(message.toUid.low) && $util.isInteger(message.toUid.high)))
                    return "toUid: integer|Long expected";
            if (message.requestTime != null && message.hasOwnProperty("requestTime"))
                if (!$util.isInteger(message.requestTime) && !(message.requestTime && $util.isInteger(message.requestTime.low) && $util.isInteger(message.requestTime.high)))
                    return "requestTime: integer|Long expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isString(message.reason))
                    return "reason: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.responseTime != null && message.hasOwnProperty("responseTime"))
                if (!$util.isInteger(message.responseTime) && !(message.responseTime && $util.isInteger(message.responseTime.low) && $util.isInteger(message.responseTime.high)))
                    return "responseTime: integer|Long expected";
            if (message.rejectReason != null && message.hasOwnProperty("rejectReason"))
                if (!$util.isString(message.rejectReason))
                    return "rejectReason: string expected";
            return null;
        };

        /**
         * Creates a FriendRequestEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.FriendRequestEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.FriendRequestEvent} FriendRequestEvent
         */
        FriendRequestEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.FriendRequestEvent)
                return object;
            let message = new $root.pb.FriendRequestEvent();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.fromUid != null)
                if ($util.Long)
                    (message.fromUid = $util.Long.fromValue(object.fromUid)).unsigned = true;
                else if (typeof object.fromUid === "string")
                    message.fromUid = parseInt(object.fromUid, 10);
                else if (typeof object.fromUid === "number")
                    message.fromUid = object.fromUid;
                else if (typeof object.fromUid === "object")
                    message.fromUid = new $util.LongBits(object.fromUid.low >>> 0, object.fromUid.high >>> 0).toNumber(true);
            if (object.toUid != null)
                if ($util.Long)
                    (message.toUid = $util.Long.fromValue(object.toUid)).unsigned = true;
                else if (typeof object.toUid === "string")
                    message.toUid = parseInt(object.toUid, 10);
                else if (typeof object.toUid === "number")
                    message.toUid = object.toUid;
                else if (typeof object.toUid === "object")
                    message.toUid = new $util.LongBits(object.toUid.low >>> 0, object.toUid.high >>> 0).toNumber(true);
            if (object.requestTime != null)
                if ($util.Long)
                    (message.requestTime = $util.Long.fromValue(object.requestTime)).unsigned = false;
                else if (typeof object.requestTime === "string")
                    message.requestTime = parseInt(object.requestTime, 10);
                else if (typeof object.requestTime === "number")
                    message.requestTime = object.requestTime;
                else if (typeof object.requestTime === "object")
                    message.requestTime = new $util.LongBits(object.requestTime.low >>> 0, object.requestTime.high >>> 0).toNumber();
            if (object.reason != null)
                message.reason = String(object.reason);
            if (object.status != null)
                message.status = object.status | 0;
            if (object.responseTime != null)
                if ($util.Long)
                    (message.responseTime = $util.Long.fromValue(object.responseTime)).unsigned = false;
                else if (typeof object.responseTime === "string")
                    message.responseTime = parseInt(object.responseTime, 10);
                else if (typeof object.responseTime === "number")
                    message.responseTime = object.responseTime;
                else if (typeof object.responseTime === "object")
                    message.responseTime = new $util.LongBits(object.responseTime.low >>> 0, object.responseTime.high >>> 0).toNumber();
            if (object.rejectReason != null)
                message.rejectReason = String(object.rejectReason);
            return message;
        };

        /**
         * Creates a plain object from a FriendRequestEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.FriendRequestEvent
         * @static
         * @param {pb.FriendRequestEvent} message FriendRequestEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FriendRequestEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.fromUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fromUid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.toUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.toUid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.requestTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.requestTime = options.longs === String ? "0" : 0;
                object.reason = "";
                object.status = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.responseTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.responseTime = options.longs === String ? "0" : 0;
                object.rejectReason = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.fromUid != null && message.hasOwnProperty("fromUid"))
                if (typeof message.fromUid === "number")
                    object.fromUid = options.longs === String ? String(message.fromUid) : message.fromUid;
                else
                    object.fromUid = options.longs === String ? $util.Long.prototype.toString.call(message.fromUid) : options.longs === Number ? new $util.LongBits(message.fromUid.low >>> 0, message.fromUid.high >>> 0).toNumber(true) : message.fromUid;
            if (message.toUid != null && message.hasOwnProperty("toUid"))
                if (typeof message.toUid === "number")
                    object.toUid = options.longs === String ? String(message.toUid) : message.toUid;
                else
                    object.toUid = options.longs === String ? $util.Long.prototype.toString.call(message.toUid) : options.longs === Number ? new $util.LongBits(message.toUid.low >>> 0, message.toUid.high >>> 0).toNumber(true) : message.toUid;
            if (message.requestTime != null && message.hasOwnProperty("requestTime"))
                if (typeof message.requestTime === "number")
                    object.requestTime = options.longs === String ? String(message.requestTime) : message.requestTime;
                else
                    object.requestTime = options.longs === String ? $util.Long.prototype.toString.call(message.requestTime) : options.longs === Number ? new $util.LongBits(message.requestTime.low >>> 0, message.requestTime.high >>> 0).toNumber() : message.requestTime;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.responseTime != null && message.hasOwnProperty("responseTime"))
                if (typeof message.responseTime === "number")
                    object.responseTime = options.longs === String ? String(message.responseTime) : message.responseTime;
                else
                    object.responseTime = options.longs === String ? $util.Long.prototype.toString.call(message.responseTime) : options.longs === Number ? new $util.LongBits(message.responseTime.low >>> 0, message.responseTime.high >>> 0).toNumber() : message.responseTime;
            if (message.rejectReason != null && message.hasOwnProperty("rejectReason"))
                object.rejectReason = message.rejectReason;
            return object;
        };

        /**
         * Converts this FriendRequestEvent to JSON.
         * @function toJSON
         * @memberof pb.FriendRequestEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FriendRequestEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FriendRequestEvent
         * @function getTypeUrl
         * @memberof pb.FriendRequestEvent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FriendRequestEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.FriendRequestEvent";
        };

        return FriendRequestEvent;
    })();

    pb.FriendChangeEvent = (function() {

        /**
         * Properties of a FriendChangeEvent.
         * @memberof pb
         * @interface IFriendChangeEvent
         * @property {number|Long|null} [friendId] FriendChangeEvent friendId
         * @property {pb.IFriend|null} [friend] FriendChangeEvent friend
         * @property {boolean|null} [isFriend] FriendChangeEvent isFriend
         * @property {number|Long|null} [time] FriendChangeEvent time
         */

        /**
         * Constructs a new FriendChangeEvent.
         * @memberof pb
         * @classdesc Represents a FriendChangeEvent.
         * @implements IFriendChangeEvent
         * @constructor
         * @param {pb.IFriendChangeEvent=} [properties] Properties to set
         */
        function FriendChangeEvent(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FriendChangeEvent friendId.
         * @member {number|Long} friendId
         * @memberof pb.FriendChangeEvent
         * @instance
         */
        FriendChangeEvent.prototype.friendId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * FriendChangeEvent friend.
         * @member {pb.IFriend|null|undefined} friend
         * @memberof pb.FriendChangeEvent
         * @instance
         */
        FriendChangeEvent.prototype.friend = null;

        /**
         * FriendChangeEvent isFriend.
         * @member {boolean} isFriend
         * @memberof pb.FriendChangeEvent
         * @instance
         */
        FriendChangeEvent.prototype.isFriend = false;

        /**
         * FriendChangeEvent time.
         * @member {number|Long} time
         * @memberof pb.FriendChangeEvent
         * @instance
         */
        FriendChangeEvent.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FriendChangeEvent instance using the specified properties.
         * @function create
         * @memberof pb.FriendChangeEvent
         * @static
         * @param {pb.IFriendChangeEvent=} [properties] Properties to set
         * @returns {pb.FriendChangeEvent} FriendChangeEvent instance
         */
        FriendChangeEvent.create = function create(properties) {
            return new FriendChangeEvent(properties);
        };

        /**
         * Encodes the specified FriendChangeEvent message. Does not implicitly {@link pb.FriendChangeEvent.verify|verify} messages.
         * @function encode
         * @memberof pb.FriendChangeEvent
         * @static
         * @param {pb.IFriendChangeEvent} message FriendChangeEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendChangeEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.friendId != null && Object.hasOwnProperty.call(message, "friendId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.friendId);
            if (message.friend != null && Object.hasOwnProperty.call(message, "friend"))
                $root.pb.Friend.encode(message.friend, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.isFriend != null && Object.hasOwnProperty.call(message, "isFriend"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isFriend);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.time);
            return writer;
        };

        /**
         * Encodes the specified FriendChangeEvent message, length delimited. Does not implicitly {@link pb.FriendChangeEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.FriendChangeEvent
         * @static
         * @param {pb.IFriendChangeEvent} message FriendChangeEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendChangeEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FriendChangeEvent message from the specified reader or buffer.
         * @function decode
         * @memberof pb.FriendChangeEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.FriendChangeEvent} FriendChangeEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendChangeEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.FriendChangeEvent();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.friendId = reader.uint64();
                        break;
                    }
                case 2: {
                        message.friend = $root.pb.Friend.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.isFriend = reader.bool();
                        break;
                    }
                case 4: {
                        message.time = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FriendChangeEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.FriendChangeEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.FriendChangeEvent} FriendChangeEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendChangeEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FriendChangeEvent message.
         * @function verify
         * @memberof pb.FriendChangeEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FriendChangeEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.friendId != null && message.hasOwnProperty("friendId"))
                if (!$util.isInteger(message.friendId) && !(message.friendId && $util.isInteger(message.friendId.low) && $util.isInteger(message.friendId.high)))
                    return "friendId: integer|Long expected";
            if (message.friend != null && message.hasOwnProperty("friend")) {
                let error = $root.pb.Friend.verify(message.friend);
                if (error)
                    return "friend." + error;
            }
            if (message.isFriend != null && message.hasOwnProperty("isFriend"))
                if (typeof message.isFriend !== "boolean")
                    return "isFriend: boolean expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            return null;
        };

        /**
         * Creates a FriendChangeEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.FriendChangeEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.FriendChangeEvent} FriendChangeEvent
         */
        FriendChangeEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.FriendChangeEvent)
                return object;
            let message = new $root.pb.FriendChangeEvent();
            if (object.friendId != null)
                if ($util.Long)
                    (message.friendId = $util.Long.fromValue(object.friendId)).unsigned = true;
                else if (typeof object.friendId === "string")
                    message.friendId = parseInt(object.friendId, 10);
                else if (typeof object.friendId === "number")
                    message.friendId = object.friendId;
                else if (typeof object.friendId === "object")
                    message.friendId = new $util.LongBits(object.friendId.low >>> 0, object.friendId.high >>> 0).toNumber(true);
            if (object.friend != null) {
                if (typeof object.friend !== "object")
                    throw TypeError(".pb.FriendChangeEvent.friend: object expected");
                message.friend = $root.pb.Friend.fromObject(object.friend);
            }
            if (object.isFriend != null)
                message.isFriend = Boolean(object.isFriend);
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = false;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FriendChangeEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.FriendChangeEvent
         * @static
         * @param {pb.FriendChangeEvent} message FriendChangeEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FriendChangeEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.friendId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.friendId = options.longs === String ? "0" : 0;
                object.friend = null;
                object.isFriend = false;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
            }
            if (message.friendId != null && message.hasOwnProperty("friendId"))
                if (typeof message.friendId === "number")
                    object.friendId = options.longs === String ? String(message.friendId) : message.friendId;
                else
                    object.friendId = options.longs === String ? $util.Long.prototype.toString.call(message.friendId) : options.longs === Number ? new $util.LongBits(message.friendId.low >>> 0, message.friendId.high >>> 0).toNumber(true) : message.friendId;
            if (message.friend != null && message.hasOwnProperty("friend"))
                object.friend = $root.pb.Friend.toObject(message.friend, options);
            if (message.isFriend != null && message.hasOwnProperty("isFriend"))
                object.isFriend = message.isFriend;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
            return object;
        };

        /**
         * Converts this FriendChangeEvent to JSON.
         * @function toJSON
         * @memberof pb.FriendChangeEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FriendChangeEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FriendChangeEvent
         * @function getTypeUrl
         * @memberof pb.FriendChangeEvent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FriendChangeEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.FriendChangeEvent";
        };

        return FriendChangeEvent;
    })();

    pb.PacketGetFriendListReq = (function() {

        /**
         * Properties of a PacketGetFriendListReq.
         * @memberof pb
         * @interface IPacketGetFriendListReq
         * @property {number|Long|null} [page] PacketGetFriendListReq page
         * @property {number|Long|null} [size] PacketGetFriendListReq size
         */

        /**
         * Constructs a new PacketGetFriendListReq.
         * @memberof pb
         * @classdesc Represents a PacketGetFriendListReq.
         * @implements IPacketGetFriendListReq
         * @constructor
         * @param {pb.IPacketGetFriendListReq=} [properties] Properties to set
         */
        function PacketGetFriendListReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketGetFriendListReq page.
         * @member {number|Long} page
         * @memberof pb.PacketGetFriendListReq
         * @instance
         */
        PacketGetFriendListReq.prototype.page = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PacketGetFriendListReq size.
         * @member {number|Long} size
         * @memberof pb.PacketGetFriendListReq
         * @instance
         */
        PacketGetFriendListReq.prototype.size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PacketGetFriendListReq instance using the specified properties.
         * @function create
         * @memberof pb.PacketGetFriendListReq
         * @static
         * @param {pb.IPacketGetFriendListReq=} [properties] Properties to set
         * @returns {pb.PacketGetFriendListReq} PacketGetFriendListReq instance
         */
        PacketGetFriendListReq.create = function create(properties) {
            return new PacketGetFriendListReq(properties);
        };

        /**
         * Encodes the specified PacketGetFriendListReq message. Does not implicitly {@link pb.PacketGetFriendListReq.verify|verify} messages.
         * @function encode
         * @memberof pb.PacketGetFriendListReq
         * @static
         * @param {pb.IPacketGetFriendListReq} message PacketGetFriendListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketGetFriendListReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.page);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.size);
            return writer;
        };

        /**
         * Encodes the specified PacketGetFriendListReq message, length delimited. Does not implicitly {@link pb.PacketGetFriendListReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PacketGetFriendListReq
         * @static
         * @param {pb.IPacketGetFriendListReq} message PacketGetFriendListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketGetFriendListReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketGetFriendListReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PacketGetFriendListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PacketGetFriendListReq} PacketGetFriendListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketGetFriendListReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PacketGetFriendListReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.page = reader.int64();
                        break;
                    }
                case 2: {
                        message.size = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PacketGetFriendListReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PacketGetFriendListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PacketGetFriendListReq} PacketGetFriendListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketGetFriendListReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketGetFriendListReq message.
         * @function verify
         * @memberof pb.PacketGetFriendListReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketGetFriendListReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page) && !(message.page && $util.isInteger(message.page.low) && $util.isInteger(message.page.high)))
                    return "page: integer|Long expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size) && !(message.size && $util.isInteger(message.size.low) && $util.isInteger(message.size.high)))
                    return "size: integer|Long expected";
            return null;
        };

        /**
         * Creates a PacketGetFriendListReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PacketGetFriendListReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PacketGetFriendListReq} PacketGetFriendListReq
         */
        PacketGetFriendListReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PacketGetFriendListReq)
                return object;
            let message = new $root.pb.PacketGetFriendListReq();
            if (object.page != null)
                if ($util.Long)
                    (message.page = $util.Long.fromValue(object.page)).unsigned = false;
                else if (typeof object.page === "string")
                    message.page = parseInt(object.page, 10);
                else if (typeof object.page === "number")
                    message.page = object.page;
                else if (typeof object.page === "object")
                    message.page = new $util.LongBits(object.page.low >>> 0, object.page.high >>> 0).toNumber();
            if (object.size != null)
                if ($util.Long)
                    (message.size = $util.Long.fromValue(object.size)).unsigned = false;
                else if (typeof object.size === "string")
                    message.size = parseInt(object.size, 10);
                else if (typeof object.size === "number")
                    message.size = object.size;
                else if (typeof object.size === "object")
                    message.size = new $util.LongBits(object.size.low >>> 0, object.size.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PacketGetFriendListReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PacketGetFriendListReq
         * @static
         * @param {pb.PacketGetFriendListReq} message PacketGetFriendListReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketGetFriendListReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.page = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.page = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.size = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.size = options.longs === String ? "0" : 0;
            }
            if (message.page != null && message.hasOwnProperty("page"))
                if (typeof message.page === "number")
                    object.page = options.longs === String ? String(message.page) : message.page;
                else
                    object.page = options.longs === String ? $util.Long.prototype.toString.call(message.page) : options.longs === Number ? new $util.LongBits(message.page.low >>> 0, message.page.high >>> 0).toNumber() : message.page;
            if (message.size != null && message.hasOwnProperty("size"))
                if (typeof message.size === "number")
                    object.size = options.longs === String ? String(message.size) : message.size;
                else
                    object.size = options.longs === String ? $util.Long.prototype.toString.call(message.size) : options.longs === Number ? new $util.LongBits(message.size.low >>> 0, message.size.high >>> 0).toNumber() : message.size;
            return object;
        };

        /**
         * Converts this PacketGetFriendListReq to JSON.
         * @function toJSON
         * @memberof pb.PacketGetFriendListReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketGetFriendListReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PacketGetFriendListReq
         * @function getTypeUrl
         * @memberof pb.PacketGetFriendListReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PacketGetFriendListReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PacketGetFriendListReq";
        };

        return PacketGetFriendListReq;
    })();

    pb.PacketGetFriendListRes = (function() {

        /**
         * Properties of a PacketGetFriendListRes.
         * @memberof pb
         * @interface IPacketGetFriendListRes
         * @property {pb.RetCode|null} [retCode] PacketGetFriendListRes retCode
         * @property {Array.<pb.IFriend>|null} [list] PacketGetFriendListRes list
         * @property {pb.INav|null} [nav] PacketGetFriendListRes nav
         */

        /**
         * Constructs a new PacketGetFriendListRes.
         * @memberof pb
         * @classdesc Represents a PacketGetFriendListRes.
         * @implements IPacketGetFriendListRes
         * @constructor
         * @param {pb.IPacketGetFriendListRes=} [properties] Properties to set
         */
        function PacketGetFriendListRes(properties) {
            this.list = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketGetFriendListRes retCode.
         * @member {pb.RetCode} retCode
         * @memberof pb.PacketGetFriendListRes
         * @instance
         */
        PacketGetFriendListRes.prototype.retCode = 0;

        /**
         * PacketGetFriendListRes list.
         * @member {Array.<pb.IFriend>} list
         * @memberof pb.PacketGetFriendListRes
         * @instance
         */
        PacketGetFriendListRes.prototype.list = $util.emptyArray;

        /**
         * PacketGetFriendListRes nav.
         * @member {pb.INav|null|undefined} nav
         * @memberof pb.PacketGetFriendListRes
         * @instance
         */
        PacketGetFriendListRes.prototype.nav = null;

        /**
         * Creates a new PacketGetFriendListRes instance using the specified properties.
         * @function create
         * @memberof pb.PacketGetFriendListRes
         * @static
         * @param {pb.IPacketGetFriendListRes=} [properties] Properties to set
         * @returns {pb.PacketGetFriendListRes} PacketGetFriendListRes instance
         */
        PacketGetFriendListRes.create = function create(properties) {
            return new PacketGetFriendListRes(properties);
        };

        /**
         * Encodes the specified PacketGetFriendListRes message. Does not implicitly {@link pb.PacketGetFriendListRes.verify|verify} messages.
         * @function encode
         * @memberof pb.PacketGetFriendListRes
         * @static
         * @param {pb.IPacketGetFriendListRes} message PacketGetFriendListRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketGetFriendListRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.retCode != null && Object.hasOwnProperty.call(message, "retCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            if (message.list != null && message.list.length)
                for (let i = 0; i < message.list.length; ++i)
                    $root.pb.Friend.encode(message.list[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.nav != null && Object.hasOwnProperty.call(message, "nav"))
                $root.pb.Nav.encode(message.nav, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PacketGetFriendListRes message, length delimited. Does not implicitly {@link pb.PacketGetFriendListRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PacketGetFriendListRes
         * @static
         * @param {pb.IPacketGetFriendListRes} message PacketGetFriendListRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketGetFriendListRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketGetFriendListRes message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PacketGetFriendListRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PacketGetFriendListRes} PacketGetFriendListRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketGetFriendListRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PacketGetFriendListRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.retCode = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.pb.Friend.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.nav = $root.pb.Nav.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PacketGetFriendListRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PacketGetFriendListRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PacketGetFriendListRes} PacketGetFriendListRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketGetFriendListRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketGetFriendListRes message.
         * @function verify
         * @memberof pb.PacketGetFriendListRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketGetFriendListRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                switch (message.retCode) {
                default:
                    return "retCode: enum value expected";
                case 0:
                case 200:
                case 500:
                case 3001:
                case 4001:
                case 4002:
                case 1001:
                    break;
                }
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (let i = 0; i < message.list.length; ++i) {
                    let error = $root.pb.Friend.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            if (message.nav != null && message.hasOwnProperty("nav")) {
                let error = $root.pb.Nav.verify(message.nav);
                if (error)
                    return "nav." + error;
            }
            return null;
        };

        /**
         * Creates a PacketGetFriendListRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PacketGetFriendListRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PacketGetFriendListRes} PacketGetFriendListRes
         */
        PacketGetFriendListRes.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PacketGetFriendListRes)
                return object;
            let message = new $root.pb.PacketGetFriendListRes();
            switch (object.retCode) {
            default:
                if (typeof object.retCode === "number") {
                    message.retCode = object.retCode;
                    break;
                }
                break;
            case "Unknown":
            case 0:
                message.retCode = 0;
                break;
            case "Success":
            case 200:
                message.retCode = 200;
                break;
            case "Error":
            case 500:
                message.retCode = 500;
                break;
            case "UserNotFound":
            case 3001:
                message.retCode = 3001;
                break;
            case "FriendNotFound":
            case 4001:
                message.retCode = 4001;
                break;
            case "FriendAlready":
            case 4002:
                message.retCode = 4002;
                break;
            case "NotRecord":
            case 1001:
                message.retCode = 1001;
                break;
            }
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".pb.PacketGetFriendListRes.list: array expected");
                message.list = [];
                for (let i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".pb.PacketGetFriendListRes.list: object expected");
                    message.list[i] = $root.pb.Friend.fromObject(object.list[i]);
                }
            }
            if (object.nav != null) {
                if (typeof object.nav !== "object")
                    throw TypeError(".pb.PacketGetFriendListRes.nav: object expected");
                message.nav = $root.pb.Nav.fromObject(object.nav);
            }
            return message;
        };

        /**
         * Creates a plain object from a PacketGetFriendListRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PacketGetFriendListRes
         * @static
         * @param {pb.PacketGetFriendListRes} message PacketGetFriendListRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketGetFriendListRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults) {
                object.retCode = options.enums === String ? "Unknown" : 0;
                object.nav = null;
            }
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = options.enums === String ? $root.pb.RetCode[message.retCode] === undefined ? message.retCode : $root.pb.RetCode[message.retCode] : message.retCode;
            if (message.list && message.list.length) {
                object.list = [];
                for (let j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.pb.Friend.toObject(message.list[j], options);
            }
            if (message.nav != null && message.hasOwnProperty("nav"))
                object.nav = $root.pb.Nav.toObject(message.nav, options);
            return object;
        };

        /**
         * Converts this PacketGetFriendListRes to JSON.
         * @function toJSON
         * @memberof pb.PacketGetFriendListRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketGetFriendListRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PacketGetFriendListRes
         * @function getTypeUrl
         * @memberof pb.PacketGetFriendListRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PacketGetFriendListRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PacketGetFriendListRes";
        };

        return PacketGetFriendListRes;
    })();

    pb.PacketGetFriendReq = (function() {

        /**
         * Properties of a PacketGetFriendReq.
         * @memberof pb
         * @interface IPacketGetFriendReq
         * @property {number|Long|null} [userId] PacketGetFriendReq userId
         */

        /**
         * Constructs a new PacketGetFriendReq.
         * @memberof pb
         * @classdesc Represents a PacketGetFriendReq.
         * @implements IPacketGetFriendReq
         * @constructor
         * @param {pb.IPacketGetFriendReq=} [properties] Properties to set
         */
        function PacketGetFriendReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketGetFriendReq userId.
         * @member {number|Long} userId
         * @memberof pb.PacketGetFriendReq
         * @instance
         */
        PacketGetFriendReq.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new PacketGetFriendReq instance using the specified properties.
         * @function create
         * @memberof pb.PacketGetFriendReq
         * @static
         * @param {pb.IPacketGetFriendReq=} [properties] Properties to set
         * @returns {pb.PacketGetFriendReq} PacketGetFriendReq instance
         */
        PacketGetFriendReq.create = function create(properties) {
            return new PacketGetFriendReq(properties);
        };

        /**
         * Encodes the specified PacketGetFriendReq message. Does not implicitly {@link pb.PacketGetFriendReq.verify|verify} messages.
         * @function encode
         * @memberof pb.PacketGetFriendReq
         * @static
         * @param {pb.IPacketGetFriendReq} message PacketGetFriendReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketGetFriendReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.userId);
            return writer;
        };

        /**
         * Encodes the specified PacketGetFriendReq message, length delimited. Does not implicitly {@link pb.PacketGetFriendReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PacketGetFriendReq
         * @static
         * @param {pb.IPacketGetFriendReq} message PacketGetFriendReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketGetFriendReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketGetFriendReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PacketGetFriendReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PacketGetFriendReq} PacketGetFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketGetFriendReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PacketGetFriendReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PacketGetFriendReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PacketGetFriendReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PacketGetFriendReq} PacketGetFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketGetFriendReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketGetFriendReq message.
         * @function verify
         * @memberof pb.PacketGetFriendReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketGetFriendReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            return null;
        };

        /**
         * Creates a PacketGetFriendReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PacketGetFriendReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PacketGetFriendReq} PacketGetFriendReq
         */
        PacketGetFriendReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PacketGetFriendReq)
                return object;
            let message = new $root.pb.PacketGetFriendReq();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a PacketGetFriendReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PacketGetFriendReq
         * @static
         * @param {pb.PacketGetFriendReq} message PacketGetFriendReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketGetFriendReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
            return object;
        };

        /**
         * Converts this PacketGetFriendReq to JSON.
         * @function toJSON
         * @memberof pb.PacketGetFriendReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketGetFriendReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PacketGetFriendReq
         * @function getTypeUrl
         * @memberof pb.PacketGetFriendReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PacketGetFriendReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PacketGetFriendReq";
        };

        return PacketGetFriendReq;
    })();

    pb.PacketGetFriendRes = (function() {

        /**
         * Properties of a PacketGetFriendRes.
         * @memberof pb
         * @interface IPacketGetFriendRes
         * @property {pb.RetCode|null} [retCode] PacketGetFriendRes retCode
         * @property {pb.IFriend|null} [friend] PacketGetFriendRes friend
         */

        /**
         * Constructs a new PacketGetFriendRes.
         * @memberof pb
         * @classdesc Represents a PacketGetFriendRes.
         * @implements IPacketGetFriendRes
         * @constructor
         * @param {pb.IPacketGetFriendRes=} [properties] Properties to set
         */
        function PacketGetFriendRes(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketGetFriendRes retCode.
         * @member {pb.RetCode} retCode
         * @memberof pb.PacketGetFriendRes
         * @instance
         */
        PacketGetFriendRes.prototype.retCode = 0;

        /**
         * PacketGetFriendRes friend.
         * @member {pb.IFriend|null|undefined} friend
         * @memberof pb.PacketGetFriendRes
         * @instance
         */
        PacketGetFriendRes.prototype.friend = null;

        /**
         * Creates a new PacketGetFriendRes instance using the specified properties.
         * @function create
         * @memberof pb.PacketGetFriendRes
         * @static
         * @param {pb.IPacketGetFriendRes=} [properties] Properties to set
         * @returns {pb.PacketGetFriendRes} PacketGetFriendRes instance
         */
        PacketGetFriendRes.create = function create(properties) {
            return new PacketGetFriendRes(properties);
        };

        /**
         * Encodes the specified PacketGetFriendRes message. Does not implicitly {@link pb.PacketGetFriendRes.verify|verify} messages.
         * @function encode
         * @memberof pb.PacketGetFriendRes
         * @static
         * @param {pb.IPacketGetFriendRes} message PacketGetFriendRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketGetFriendRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.retCode != null && Object.hasOwnProperty.call(message, "retCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            if (message.friend != null && Object.hasOwnProperty.call(message, "friend"))
                $root.pb.Friend.encode(message.friend, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PacketGetFriendRes message, length delimited. Does not implicitly {@link pb.PacketGetFriendRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PacketGetFriendRes
         * @static
         * @param {pb.IPacketGetFriendRes} message PacketGetFriendRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketGetFriendRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketGetFriendRes message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PacketGetFriendRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PacketGetFriendRes} PacketGetFriendRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketGetFriendRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PacketGetFriendRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.retCode = reader.int32();
                        break;
                    }
                case 2: {
                        message.friend = $root.pb.Friend.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PacketGetFriendRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PacketGetFriendRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PacketGetFriendRes} PacketGetFriendRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketGetFriendRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketGetFriendRes message.
         * @function verify
         * @memberof pb.PacketGetFriendRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketGetFriendRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                switch (message.retCode) {
                default:
                    return "retCode: enum value expected";
                case 0:
                case 200:
                case 500:
                case 3001:
                case 4001:
                case 4002:
                case 1001:
                    break;
                }
            if (message.friend != null && message.hasOwnProperty("friend")) {
                let error = $root.pb.Friend.verify(message.friend);
                if (error)
                    return "friend." + error;
            }
            return null;
        };

        /**
         * Creates a PacketGetFriendRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PacketGetFriendRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PacketGetFriendRes} PacketGetFriendRes
         */
        PacketGetFriendRes.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PacketGetFriendRes)
                return object;
            let message = new $root.pb.PacketGetFriendRes();
            switch (object.retCode) {
            default:
                if (typeof object.retCode === "number") {
                    message.retCode = object.retCode;
                    break;
                }
                break;
            case "Unknown":
            case 0:
                message.retCode = 0;
                break;
            case "Success":
            case 200:
                message.retCode = 200;
                break;
            case "Error":
            case 500:
                message.retCode = 500;
                break;
            case "UserNotFound":
            case 3001:
                message.retCode = 3001;
                break;
            case "FriendNotFound":
            case 4001:
                message.retCode = 4001;
                break;
            case "FriendAlready":
            case 4002:
                message.retCode = 4002;
                break;
            case "NotRecord":
            case 1001:
                message.retCode = 1001;
                break;
            }
            if (object.friend != null) {
                if (typeof object.friend !== "object")
                    throw TypeError(".pb.PacketGetFriendRes.friend: object expected");
                message.friend = $root.pb.Friend.fromObject(object.friend);
            }
            return message;
        };

        /**
         * Creates a plain object from a PacketGetFriendRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PacketGetFriendRes
         * @static
         * @param {pb.PacketGetFriendRes} message PacketGetFriendRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketGetFriendRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.retCode = options.enums === String ? "Unknown" : 0;
                object.friend = null;
            }
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = options.enums === String ? $root.pb.RetCode[message.retCode] === undefined ? message.retCode : $root.pb.RetCode[message.retCode] : message.retCode;
            if (message.friend != null && message.hasOwnProperty("friend"))
                object.friend = $root.pb.Friend.toObject(message.friend, options);
            return object;
        };

        /**
         * Converts this PacketGetFriendRes to JSON.
         * @function toJSON
         * @memberof pb.PacketGetFriendRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketGetFriendRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PacketGetFriendRes
         * @function getTypeUrl
         * @memberof pb.PacketGetFriendRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PacketGetFriendRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PacketGetFriendRes";
        };

        return PacketGetFriendRes;
    })();

    pb.PacketPrivateMsg = (function() {

        /**
         * Properties of a PacketPrivateMsg.
         * @memberof pb
         * @interface IPacketPrivateMsg
         * @property {number|Long|null} [msgSeq] PacketPrivateMsg msgSeq
         * @property {number|Long|null} [msgRand] PacketPrivateMsg msgRand
         * @property {number|Long|null} [fromId] PacketPrivateMsg fromId
         * @property {number|Long|null} [receiveId] PacketPrivateMsg receiveId
         * @property {pb.PacketMsgType|null} [msgType] PacketPrivateMsg msgType
         * @property {Uint8Array|null} [payload] PacketPrivateMsg payload
         * @property {number|Long|null} [clientTime] PacketPrivateMsg clientTime
         * @property {number|Long|null} [serverTime] PacketPrivateMsg serverTime
         * @property {Uint8Array|null} ["extends"] PacketPrivateMsg extends
         * @property {number|Long|null} [msgId] PacketPrivateMsg msgId
         * @property {number|Long|null} [seq] PacketPrivateMsg seq
         */

        /**
         * Constructs a new PacketPrivateMsg.
         * @memberof pb
         * @classdesc Represents a PacketPrivateMsg.
         * @implements IPacketPrivateMsg
         * @constructor
         * @param {pb.IPacketPrivateMsg=} [properties] Properties to set
         */
        function PacketPrivateMsg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketPrivateMsg msgSeq.
         * @member {number|Long} msgSeq
         * @memberof pb.PacketPrivateMsg
         * @instance
         */
        PacketPrivateMsg.prototype.msgSeq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PacketPrivateMsg msgRand.
         * @member {number|Long} msgRand
         * @memberof pb.PacketPrivateMsg
         * @instance
         */
        PacketPrivateMsg.prototype.msgRand = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PacketPrivateMsg fromId.
         * @member {number|Long} fromId
         * @memberof pb.PacketPrivateMsg
         * @instance
         */
        PacketPrivateMsg.prototype.fromId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * PacketPrivateMsg receiveId.
         * @member {number|Long} receiveId
         * @memberof pb.PacketPrivateMsg
         * @instance
         */
        PacketPrivateMsg.prototype.receiveId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * PacketPrivateMsg msgType.
         * @member {pb.PacketMsgType} msgType
         * @memberof pb.PacketPrivateMsg
         * @instance
         */
        PacketPrivateMsg.prototype.msgType = 0;

        /**
         * PacketPrivateMsg payload.
         * @member {Uint8Array} payload
         * @memberof pb.PacketPrivateMsg
         * @instance
         */
        PacketPrivateMsg.prototype.payload = $util.newBuffer([]);

        /**
         * PacketPrivateMsg clientTime.
         * @member {number|Long} clientTime
         * @memberof pb.PacketPrivateMsg
         * @instance
         */
        PacketPrivateMsg.prototype.clientTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PacketPrivateMsg serverTime.
         * @member {number|Long} serverTime
         * @memberof pb.PacketPrivateMsg
         * @instance
         */
        PacketPrivateMsg.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PacketPrivateMsg extends.
         * @member {Uint8Array} extends
         * @memberof pb.PacketPrivateMsg
         * @instance
         */
        PacketPrivateMsg.prototype["extends"] = $util.newBuffer([]);

        /**
         * PacketPrivateMsg msgId.
         * @member {number|Long} msgId
         * @memberof pb.PacketPrivateMsg
         * @instance
         */
        PacketPrivateMsg.prototype.msgId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PacketPrivateMsg seq.
         * @member {number|Long} seq
         * @memberof pb.PacketPrivateMsg
         * @instance
         */
        PacketPrivateMsg.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PacketPrivateMsg instance using the specified properties.
         * @function create
         * @memberof pb.PacketPrivateMsg
         * @static
         * @param {pb.IPacketPrivateMsg=} [properties] Properties to set
         * @returns {pb.PacketPrivateMsg} PacketPrivateMsg instance
         */
        PacketPrivateMsg.create = function create(properties) {
            return new PacketPrivateMsg(properties);
        };

        /**
         * Encodes the specified PacketPrivateMsg message. Does not implicitly {@link pb.PacketPrivateMsg.verify|verify} messages.
         * @function encode
         * @memberof pb.PacketPrivateMsg
         * @static
         * @param {pb.IPacketPrivateMsg} message PacketPrivateMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketPrivateMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgSeq != null && Object.hasOwnProperty.call(message, "msgSeq"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.msgSeq);
            if (message.msgRand != null && Object.hasOwnProperty.call(message, "msgRand"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.msgRand);
            if (message.fromId != null && Object.hasOwnProperty.call(message, "fromId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.fromId);
            if (message.receiveId != null && Object.hasOwnProperty.call(message, "receiveId"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.receiveId);
            if (message.msgType != null && Object.hasOwnProperty.call(message, "msgType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.msgType);
            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.payload);
            if (message.clientTime != null && Object.hasOwnProperty.call(message, "clientTime"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.clientTime);
            if (message.serverTime != null && Object.hasOwnProperty.call(message, "serverTime"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.serverTime);
            if (message["extends"] != null && Object.hasOwnProperty.call(message, "extends"))
                writer.uint32(/* id 10, wireType 2 =*/82).bytes(message["extends"]);
            if (message.msgId != null && Object.hasOwnProperty.call(message, "msgId"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.msgId);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.seq);
            return writer;
        };

        /**
         * Encodes the specified PacketPrivateMsg message, length delimited. Does not implicitly {@link pb.PacketPrivateMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PacketPrivateMsg
         * @static
         * @param {pb.IPacketPrivateMsg} message PacketPrivateMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketPrivateMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketPrivateMsg message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PacketPrivateMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PacketPrivateMsg} PacketPrivateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketPrivateMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PacketPrivateMsg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.msgSeq = reader.int64();
                        break;
                    }
                case 2: {
                        message.msgRand = reader.int64();
                        break;
                    }
                case 3: {
                        message.fromId = reader.uint64();
                        break;
                    }
                case 4: {
                        message.receiveId = reader.uint64();
                        break;
                    }
                case 5: {
                        message.msgType = reader.int32();
                        break;
                    }
                case 6: {
                        message.payload = reader.bytes();
                        break;
                    }
                case 7: {
                        message.clientTime = reader.int64();
                        break;
                    }
                case 8: {
                        message.serverTime = reader.int64();
                        break;
                    }
                case 10: {
                        message["extends"] = reader.bytes();
                        break;
                    }
                case 11: {
                        message.msgId = reader.int64();
                        break;
                    }
                case 12: {
                        message.seq = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PacketPrivateMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PacketPrivateMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PacketPrivateMsg} PacketPrivateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketPrivateMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketPrivateMsg message.
         * @function verify
         * @memberof pb.PacketPrivateMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketPrivateMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msgSeq != null && message.hasOwnProperty("msgSeq"))
                if (!$util.isInteger(message.msgSeq) && !(message.msgSeq && $util.isInteger(message.msgSeq.low) && $util.isInteger(message.msgSeq.high)))
                    return "msgSeq: integer|Long expected";
            if (message.msgRand != null && message.hasOwnProperty("msgRand"))
                if (!$util.isInteger(message.msgRand) && !(message.msgRand && $util.isInteger(message.msgRand.low) && $util.isInteger(message.msgRand.high)))
                    return "msgRand: integer|Long expected";
            if (message.fromId != null && message.hasOwnProperty("fromId"))
                if (!$util.isInteger(message.fromId) && !(message.fromId && $util.isInteger(message.fromId.low) && $util.isInteger(message.fromId.high)))
                    return "fromId: integer|Long expected";
            if (message.receiveId != null && message.hasOwnProperty("receiveId"))
                if (!$util.isInteger(message.receiveId) && !(message.receiveId && $util.isInteger(message.receiveId.low) && $util.isInteger(message.receiveId.high)))
                    return "receiveId: integer|Long expected";
            if (message.msgType != null && message.hasOwnProperty("msgType"))
                switch (message.msgType) {
                default:
                    return "msgType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.payload != null && message.hasOwnProperty("payload"))
                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                    return "payload: buffer expected";
            if (message.clientTime != null && message.hasOwnProperty("clientTime"))
                if (!$util.isInteger(message.clientTime) && !(message.clientTime && $util.isInteger(message.clientTime.low) && $util.isInteger(message.clientTime.high)))
                    return "clientTime: integer|Long expected";
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                if (!$util.isInteger(message.serverTime) && !(message.serverTime && $util.isInteger(message.serverTime.low) && $util.isInteger(message.serverTime.high)))
                    return "serverTime: integer|Long expected";
            if (message["extends"] != null && message.hasOwnProperty("extends"))
                if (!(message["extends"] && typeof message["extends"].length === "number" || $util.isString(message["extends"])))
                    return "extends: buffer expected";
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                if (!$util.isInteger(message.msgId) && !(message.msgId && $util.isInteger(message.msgId.low) && $util.isInteger(message.msgId.high)))
                    return "msgId: integer|Long expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq) && !(message.seq && $util.isInteger(message.seq.low) && $util.isInteger(message.seq.high)))
                    return "seq: integer|Long expected";
            return null;
        };

        /**
         * Creates a PacketPrivateMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PacketPrivateMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PacketPrivateMsg} PacketPrivateMsg
         */
        PacketPrivateMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PacketPrivateMsg)
                return object;
            let message = new $root.pb.PacketPrivateMsg();
            if (object.msgSeq != null)
                if ($util.Long)
                    (message.msgSeq = $util.Long.fromValue(object.msgSeq)).unsigned = false;
                else if (typeof object.msgSeq === "string")
                    message.msgSeq = parseInt(object.msgSeq, 10);
                else if (typeof object.msgSeq === "number")
                    message.msgSeq = object.msgSeq;
                else if (typeof object.msgSeq === "object")
                    message.msgSeq = new $util.LongBits(object.msgSeq.low >>> 0, object.msgSeq.high >>> 0).toNumber();
            if (object.msgRand != null)
                if ($util.Long)
                    (message.msgRand = $util.Long.fromValue(object.msgRand)).unsigned = false;
                else if (typeof object.msgRand === "string")
                    message.msgRand = parseInt(object.msgRand, 10);
                else if (typeof object.msgRand === "number")
                    message.msgRand = object.msgRand;
                else if (typeof object.msgRand === "object")
                    message.msgRand = new $util.LongBits(object.msgRand.low >>> 0, object.msgRand.high >>> 0).toNumber();
            if (object.fromId != null)
                if ($util.Long)
                    (message.fromId = $util.Long.fromValue(object.fromId)).unsigned = true;
                else if (typeof object.fromId === "string")
                    message.fromId = parseInt(object.fromId, 10);
                else if (typeof object.fromId === "number")
                    message.fromId = object.fromId;
                else if (typeof object.fromId === "object")
                    message.fromId = new $util.LongBits(object.fromId.low >>> 0, object.fromId.high >>> 0).toNumber(true);
            if (object.receiveId != null)
                if ($util.Long)
                    (message.receiveId = $util.Long.fromValue(object.receiveId)).unsigned = true;
                else if (typeof object.receiveId === "string")
                    message.receiveId = parseInt(object.receiveId, 10);
                else if (typeof object.receiveId === "number")
                    message.receiveId = object.receiveId;
                else if (typeof object.receiveId === "object")
                    message.receiveId = new $util.LongBits(object.receiveId.low >>> 0, object.receiveId.high >>> 0).toNumber(true);
            switch (object.msgType) {
            default:
                if (typeof object.msgType === "number") {
                    message.msgType = object.msgType;
                    break;
                }
                break;
            case "None":
            case 0:
                message.msgType = 0;
                break;
            case "Text":
            case 1:
                message.msgType = 1;
                break;
            case "Image":
            case 2:
                message.msgType = 2;
                break;
            case "Audio":
            case 3:
                message.msgType = 3;
                break;
            case "Video":
            case 4:
                message.msgType = 4;
                break;
            case "File":
            case 5:
                message.msgType = 5;
                break;
            }
            if (object.payload != null)
                if (typeof object.payload === "string")
                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                else if (object.payload.length >= 0)
                    message.payload = object.payload;
            if (object.clientTime != null)
                if ($util.Long)
                    (message.clientTime = $util.Long.fromValue(object.clientTime)).unsigned = false;
                else if (typeof object.clientTime === "string")
                    message.clientTime = parseInt(object.clientTime, 10);
                else if (typeof object.clientTime === "number")
                    message.clientTime = object.clientTime;
                else if (typeof object.clientTime === "object")
                    message.clientTime = new $util.LongBits(object.clientTime.low >>> 0, object.clientTime.high >>> 0).toNumber();
            if (object.serverTime != null)
                if ($util.Long)
                    (message.serverTime = $util.Long.fromValue(object.serverTime)).unsigned = false;
                else if (typeof object.serverTime === "string")
                    message.serverTime = parseInt(object.serverTime, 10);
                else if (typeof object.serverTime === "number")
                    message.serverTime = object.serverTime;
                else if (typeof object.serverTime === "object")
                    message.serverTime = new $util.LongBits(object.serverTime.low >>> 0, object.serverTime.high >>> 0).toNumber();
            if (object["extends"] != null)
                if (typeof object["extends"] === "string")
                    $util.base64.decode(object["extends"], message["extends"] = $util.newBuffer($util.base64.length(object["extends"])), 0);
                else if (object["extends"].length >= 0)
                    message["extends"] = object["extends"];
            if (object.msgId != null)
                if ($util.Long)
                    (message.msgId = $util.Long.fromValue(object.msgId)).unsigned = false;
                else if (typeof object.msgId === "string")
                    message.msgId = parseInt(object.msgId, 10);
                else if (typeof object.msgId === "number")
                    message.msgId = object.msgId;
                else if (typeof object.msgId === "object")
                    message.msgId = new $util.LongBits(object.msgId.low >>> 0, object.msgId.high >>> 0).toNumber();
            if (object.seq != null)
                if ($util.Long)
                    (message.seq = $util.Long.fromValue(object.seq)).unsigned = false;
                else if (typeof object.seq === "string")
                    message.seq = parseInt(object.seq, 10);
                else if (typeof object.seq === "number")
                    message.seq = object.seq;
                else if (typeof object.seq === "object")
                    message.seq = new $util.LongBits(object.seq.low >>> 0, object.seq.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PacketPrivateMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PacketPrivateMsg
         * @static
         * @param {pb.PacketPrivateMsg} message PacketPrivateMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketPrivateMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.msgSeq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.msgSeq = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.msgRand = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.msgRand = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.fromId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fromId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.receiveId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.receiveId = options.longs === String ? "0" : 0;
                object.msgType = options.enums === String ? "None" : 0;
                if (options.bytes === String)
                    object.payload = "";
                else {
                    object.payload = [];
                    if (options.bytes !== Array)
                        object.payload = $util.newBuffer(object.payload);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.clientTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.clientTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.serverTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.serverTime = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object["extends"] = "";
                else {
                    object["extends"] = [];
                    if (options.bytes !== Array)
                        object["extends"] = $util.newBuffer(object["extends"]);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.msgId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.msgId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seq = options.longs === String ? "0" : 0;
            }
            if (message.msgSeq != null && message.hasOwnProperty("msgSeq"))
                if (typeof message.msgSeq === "number")
                    object.msgSeq = options.longs === String ? String(message.msgSeq) : message.msgSeq;
                else
                    object.msgSeq = options.longs === String ? $util.Long.prototype.toString.call(message.msgSeq) : options.longs === Number ? new $util.LongBits(message.msgSeq.low >>> 0, message.msgSeq.high >>> 0).toNumber() : message.msgSeq;
            if (message.msgRand != null && message.hasOwnProperty("msgRand"))
                if (typeof message.msgRand === "number")
                    object.msgRand = options.longs === String ? String(message.msgRand) : message.msgRand;
                else
                    object.msgRand = options.longs === String ? $util.Long.prototype.toString.call(message.msgRand) : options.longs === Number ? new $util.LongBits(message.msgRand.low >>> 0, message.msgRand.high >>> 0).toNumber() : message.msgRand;
            if (message.fromId != null && message.hasOwnProperty("fromId"))
                if (typeof message.fromId === "number")
                    object.fromId = options.longs === String ? String(message.fromId) : message.fromId;
                else
                    object.fromId = options.longs === String ? $util.Long.prototype.toString.call(message.fromId) : options.longs === Number ? new $util.LongBits(message.fromId.low >>> 0, message.fromId.high >>> 0).toNumber(true) : message.fromId;
            if (message.receiveId != null && message.hasOwnProperty("receiveId"))
                if (typeof message.receiveId === "number")
                    object.receiveId = options.longs === String ? String(message.receiveId) : message.receiveId;
                else
                    object.receiveId = options.longs === String ? $util.Long.prototype.toString.call(message.receiveId) : options.longs === Number ? new $util.LongBits(message.receiveId.low >>> 0, message.receiveId.high >>> 0).toNumber(true) : message.receiveId;
            if (message.msgType != null && message.hasOwnProperty("msgType"))
                object.msgType = options.enums === String ? $root.pb.PacketMsgType[message.msgType] === undefined ? message.msgType : $root.pb.PacketMsgType[message.msgType] : message.msgType;
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
            if (message.clientTime != null && message.hasOwnProperty("clientTime"))
                if (typeof message.clientTime === "number")
                    object.clientTime = options.longs === String ? String(message.clientTime) : message.clientTime;
                else
                    object.clientTime = options.longs === String ? $util.Long.prototype.toString.call(message.clientTime) : options.longs === Number ? new $util.LongBits(message.clientTime.low >>> 0, message.clientTime.high >>> 0).toNumber() : message.clientTime;
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                if (typeof message.serverTime === "number")
                    object.serverTime = options.longs === String ? String(message.serverTime) : message.serverTime;
                else
                    object.serverTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverTime) : options.longs === Number ? new $util.LongBits(message.serverTime.low >>> 0, message.serverTime.high >>> 0).toNumber() : message.serverTime;
            if (message["extends"] != null && message.hasOwnProperty("extends"))
                object["extends"] = options.bytes === String ? $util.base64.encode(message["extends"], 0, message["extends"].length) : options.bytes === Array ? Array.prototype.slice.call(message["extends"]) : message["extends"];
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                if (typeof message.msgId === "number")
                    object.msgId = options.longs === String ? String(message.msgId) : message.msgId;
                else
                    object.msgId = options.longs === String ? $util.Long.prototype.toString.call(message.msgId) : options.longs === Number ? new $util.LongBits(message.msgId.low >>> 0, message.msgId.high >>> 0).toNumber() : message.msgId;
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (typeof message.seq === "number")
                    object.seq = options.longs === String ? String(message.seq) : message.seq;
                else
                    object.seq = options.longs === String ? $util.Long.prototype.toString.call(message.seq) : options.longs === Number ? new $util.LongBits(message.seq.low >>> 0, message.seq.high >>> 0).toNumber() : message.seq;
            return object;
        };

        /**
         * Converts this PacketPrivateMsg to JSON.
         * @function toJSON
         * @memberof pb.PacketPrivateMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketPrivateMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PacketPrivateMsg
         * @function getTypeUrl
         * @memberof pb.PacketPrivateMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PacketPrivateMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PacketPrivateMsg";
        };

        return PacketPrivateMsg;
    })();

    /**
     * PacketMsgStatus enum.
     * @name pb.PacketMsgStatus
     * @enum {number}
     * @property {number} MsgError=0 MsgError value
     * @property {number} MsgAck=1 MsgAck value
     * @property {number} MsgRead=2 MsgRead value
     */
    pb.PacketMsgStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MsgError"] = 0;
        values[valuesById[1] = "MsgAck"] = 1;
        values[valuesById[2] = "MsgRead"] = 2;
        return values;
    })();

    pb.PacketPrivateMsgAck = (function() {

        /**
         * Properties of a PacketPrivateMsgAck.
         * @memberof pb
         * @interface IPacketPrivateMsgAck
         * @property {number|Long|null} [msgSeq] PacketPrivateMsgAck msgSeq
         * @property {number|Long|null} [msgRand] PacketPrivateMsgAck msgRand
         * @property {pb.PacketMsgStatus|null} [retCode] PacketPrivateMsgAck retCode
         * @property {number|Long|null} [msgId] PacketPrivateMsgAck msgId
         * @property {number|Long|null} [seq] PacketPrivateMsgAck seq
         */

        /**
         * Constructs a new PacketPrivateMsgAck.
         * @memberof pb
         * @classdesc Represents a PacketPrivateMsgAck.
         * @implements IPacketPrivateMsgAck
         * @constructor
         * @param {pb.IPacketPrivateMsgAck=} [properties] Properties to set
         */
        function PacketPrivateMsgAck(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketPrivateMsgAck msgSeq.
         * @member {number|Long} msgSeq
         * @memberof pb.PacketPrivateMsgAck
         * @instance
         */
        PacketPrivateMsgAck.prototype.msgSeq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PacketPrivateMsgAck msgRand.
         * @member {number|Long} msgRand
         * @memberof pb.PacketPrivateMsgAck
         * @instance
         */
        PacketPrivateMsgAck.prototype.msgRand = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PacketPrivateMsgAck retCode.
         * @member {pb.PacketMsgStatus} retCode
         * @memberof pb.PacketPrivateMsgAck
         * @instance
         */
        PacketPrivateMsgAck.prototype.retCode = 0;

        /**
         * PacketPrivateMsgAck msgId.
         * @member {number|Long} msgId
         * @memberof pb.PacketPrivateMsgAck
         * @instance
         */
        PacketPrivateMsgAck.prototype.msgId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PacketPrivateMsgAck seq.
         * @member {number|Long} seq
         * @memberof pb.PacketPrivateMsgAck
         * @instance
         */
        PacketPrivateMsgAck.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PacketPrivateMsgAck instance using the specified properties.
         * @function create
         * @memberof pb.PacketPrivateMsgAck
         * @static
         * @param {pb.IPacketPrivateMsgAck=} [properties] Properties to set
         * @returns {pb.PacketPrivateMsgAck} PacketPrivateMsgAck instance
         */
        PacketPrivateMsgAck.create = function create(properties) {
            return new PacketPrivateMsgAck(properties);
        };

        /**
         * Encodes the specified PacketPrivateMsgAck message. Does not implicitly {@link pb.PacketPrivateMsgAck.verify|verify} messages.
         * @function encode
         * @memberof pb.PacketPrivateMsgAck
         * @static
         * @param {pb.IPacketPrivateMsgAck} message PacketPrivateMsgAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketPrivateMsgAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgSeq != null && Object.hasOwnProperty.call(message, "msgSeq"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.msgSeq);
            if (message.msgRand != null && Object.hasOwnProperty.call(message, "msgRand"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.msgRand);
            if (message.retCode != null && Object.hasOwnProperty.call(message, "retCode"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.retCode);
            if (message.msgId != null && Object.hasOwnProperty.call(message, "msgId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.msgId);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.seq);
            return writer;
        };

        /**
         * Encodes the specified PacketPrivateMsgAck message, length delimited. Does not implicitly {@link pb.PacketPrivateMsgAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PacketPrivateMsgAck
         * @static
         * @param {pb.IPacketPrivateMsgAck} message PacketPrivateMsgAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketPrivateMsgAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketPrivateMsgAck message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PacketPrivateMsgAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PacketPrivateMsgAck} PacketPrivateMsgAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketPrivateMsgAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PacketPrivateMsgAck();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.msgSeq = reader.int64();
                        break;
                    }
                case 2: {
                        message.msgRand = reader.int64();
                        break;
                    }
                case 3: {
                        message.retCode = reader.int32();
                        break;
                    }
                case 4: {
                        message.msgId = reader.int64();
                        break;
                    }
                case 5: {
                        message.seq = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PacketPrivateMsgAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PacketPrivateMsgAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PacketPrivateMsgAck} PacketPrivateMsgAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketPrivateMsgAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketPrivateMsgAck message.
         * @function verify
         * @memberof pb.PacketPrivateMsgAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketPrivateMsgAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msgSeq != null && message.hasOwnProperty("msgSeq"))
                if (!$util.isInteger(message.msgSeq) && !(message.msgSeq && $util.isInteger(message.msgSeq.low) && $util.isInteger(message.msgSeq.high)))
                    return "msgSeq: integer|Long expected";
            if (message.msgRand != null && message.hasOwnProperty("msgRand"))
                if (!$util.isInteger(message.msgRand) && !(message.msgRand && $util.isInteger(message.msgRand.low) && $util.isInteger(message.msgRand.high)))
                    return "msgRand: integer|Long expected";
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                switch (message.retCode) {
                default:
                    return "retCode: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                if (!$util.isInteger(message.msgId) && !(message.msgId && $util.isInteger(message.msgId.low) && $util.isInteger(message.msgId.high)))
                    return "msgId: integer|Long expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq) && !(message.seq && $util.isInteger(message.seq.low) && $util.isInteger(message.seq.high)))
                    return "seq: integer|Long expected";
            return null;
        };

        /**
         * Creates a PacketPrivateMsgAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PacketPrivateMsgAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PacketPrivateMsgAck} PacketPrivateMsgAck
         */
        PacketPrivateMsgAck.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PacketPrivateMsgAck)
                return object;
            let message = new $root.pb.PacketPrivateMsgAck();
            if (object.msgSeq != null)
                if ($util.Long)
                    (message.msgSeq = $util.Long.fromValue(object.msgSeq)).unsigned = false;
                else if (typeof object.msgSeq === "string")
                    message.msgSeq = parseInt(object.msgSeq, 10);
                else if (typeof object.msgSeq === "number")
                    message.msgSeq = object.msgSeq;
                else if (typeof object.msgSeq === "object")
                    message.msgSeq = new $util.LongBits(object.msgSeq.low >>> 0, object.msgSeq.high >>> 0).toNumber();
            if (object.msgRand != null)
                if ($util.Long)
                    (message.msgRand = $util.Long.fromValue(object.msgRand)).unsigned = false;
                else if (typeof object.msgRand === "string")
                    message.msgRand = parseInt(object.msgRand, 10);
                else if (typeof object.msgRand === "number")
                    message.msgRand = object.msgRand;
                else if (typeof object.msgRand === "object")
                    message.msgRand = new $util.LongBits(object.msgRand.low >>> 0, object.msgRand.high >>> 0).toNumber();
            switch (object.retCode) {
            default:
                if (typeof object.retCode === "number") {
                    message.retCode = object.retCode;
                    break;
                }
                break;
            case "MsgError":
            case 0:
                message.retCode = 0;
                break;
            case "MsgAck":
            case 1:
                message.retCode = 1;
                break;
            case "MsgRead":
            case 2:
                message.retCode = 2;
                break;
            }
            if (object.msgId != null)
                if ($util.Long)
                    (message.msgId = $util.Long.fromValue(object.msgId)).unsigned = false;
                else if (typeof object.msgId === "string")
                    message.msgId = parseInt(object.msgId, 10);
                else if (typeof object.msgId === "number")
                    message.msgId = object.msgId;
                else if (typeof object.msgId === "object")
                    message.msgId = new $util.LongBits(object.msgId.low >>> 0, object.msgId.high >>> 0).toNumber();
            if (object.seq != null)
                if ($util.Long)
                    (message.seq = $util.Long.fromValue(object.seq)).unsigned = false;
                else if (typeof object.seq === "string")
                    message.seq = parseInt(object.seq, 10);
                else if (typeof object.seq === "number")
                    message.seq = object.seq;
                else if (typeof object.seq === "object")
                    message.seq = new $util.LongBits(object.seq.low >>> 0, object.seq.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PacketPrivateMsgAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PacketPrivateMsgAck
         * @static
         * @param {pb.PacketPrivateMsgAck} message PacketPrivateMsgAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketPrivateMsgAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.msgSeq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.msgSeq = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.msgRand = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.msgRand = options.longs === String ? "0" : 0;
                object.retCode = options.enums === String ? "MsgError" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.msgId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.msgId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seq = options.longs === String ? "0" : 0;
            }
            if (message.msgSeq != null && message.hasOwnProperty("msgSeq"))
                if (typeof message.msgSeq === "number")
                    object.msgSeq = options.longs === String ? String(message.msgSeq) : message.msgSeq;
                else
                    object.msgSeq = options.longs === String ? $util.Long.prototype.toString.call(message.msgSeq) : options.longs === Number ? new $util.LongBits(message.msgSeq.low >>> 0, message.msgSeq.high >>> 0).toNumber() : message.msgSeq;
            if (message.msgRand != null && message.hasOwnProperty("msgRand"))
                if (typeof message.msgRand === "number")
                    object.msgRand = options.longs === String ? String(message.msgRand) : message.msgRand;
                else
                    object.msgRand = options.longs === String ? $util.Long.prototype.toString.call(message.msgRand) : options.longs === Number ? new $util.LongBits(message.msgRand.low >>> 0, message.msgRand.high >>> 0).toNumber() : message.msgRand;
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = options.enums === String ? $root.pb.PacketMsgStatus[message.retCode] === undefined ? message.retCode : $root.pb.PacketMsgStatus[message.retCode] : message.retCode;
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                if (typeof message.msgId === "number")
                    object.msgId = options.longs === String ? String(message.msgId) : message.msgId;
                else
                    object.msgId = options.longs === String ? $util.Long.prototype.toString.call(message.msgId) : options.longs === Number ? new $util.LongBits(message.msgId.low >>> 0, message.msgId.high >>> 0).toNumber() : message.msgId;
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (typeof message.seq === "number")
                    object.seq = options.longs === String ? String(message.seq) : message.seq;
                else
                    object.seq = options.longs === String ? $util.Long.prototype.toString.call(message.seq) : options.longs === Number ? new $util.LongBits(message.seq.low >>> 0, message.seq.high >>> 0).toNumber() : message.seq;
            return object;
        };

        /**
         * Converts this PacketPrivateMsgAck to JSON.
         * @function toJSON
         * @memberof pb.PacketPrivateMsgAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketPrivateMsgAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PacketPrivateMsgAck
         * @function getTypeUrl
         * @memberof pb.PacketPrivateMsgAck
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PacketPrivateMsgAck.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PacketPrivateMsgAck";
        };

        return PacketPrivateMsgAck;
    })();

    pb.PacketPrivateMsgListReq = (function() {

        /**
         * Properties of a PacketPrivateMsgListReq.
         * @memberof pb
         * @interface IPacketPrivateMsgListReq
         * @property {number|Long|null} [lastMsgId] PacketPrivateMsgListReq lastMsgId
         * @property {number|Long|null} [size] PacketPrivateMsgListReq size
         * @property {number|Long|null} [userId] PacketPrivateMsgListReq userId
         */

        /**
         * Constructs a new PacketPrivateMsgListReq.
         * @memberof pb
         * @classdesc Represents a PacketPrivateMsgListReq.
         * @implements IPacketPrivateMsgListReq
         * @constructor
         * @param {pb.IPacketPrivateMsgListReq=} [properties] Properties to set
         */
        function PacketPrivateMsgListReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketPrivateMsgListReq lastMsgId.
         * @member {number|Long} lastMsgId
         * @memberof pb.PacketPrivateMsgListReq
         * @instance
         */
        PacketPrivateMsgListReq.prototype.lastMsgId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PacketPrivateMsgListReq size.
         * @member {number|Long} size
         * @memberof pb.PacketPrivateMsgListReq
         * @instance
         */
        PacketPrivateMsgListReq.prototype.size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PacketPrivateMsgListReq userId.
         * @member {number|Long} userId
         * @memberof pb.PacketPrivateMsgListReq
         * @instance
         */
        PacketPrivateMsgListReq.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new PacketPrivateMsgListReq instance using the specified properties.
         * @function create
         * @memberof pb.PacketPrivateMsgListReq
         * @static
         * @param {pb.IPacketPrivateMsgListReq=} [properties] Properties to set
         * @returns {pb.PacketPrivateMsgListReq} PacketPrivateMsgListReq instance
         */
        PacketPrivateMsgListReq.create = function create(properties) {
            return new PacketPrivateMsgListReq(properties);
        };

        /**
         * Encodes the specified PacketPrivateMsgListReq message. Does not implicitly {@link pb.PacketPrivateMsgListReq.verify|verify} messages.
         * @function encode
         * @memberof pb.PacketPrivateMsgListReq
         * @static
         * @param {pb.IPacketPrivateMsgListReq} message PacketPrivateMsgListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketPrivateMsgListReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lastMsgId != null && Object.hasOwnProperty.call(message, "lastMsgId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.lastMsgId);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.size);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.userId);
            return writer;
        };

        /**
         * Encodes the specified PacketPrivateMsgListReq message, length delimited. Does not implicitly {@link pb.PacketPrivateMsgListReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PacketPrivateMsgListReq
         * @static
         * @param {pb.IPacketPrivateMsgListReq} message PacketPrivateMsgListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketPrivateMsgListReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketPrivateMsgListReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PacketPrivateMsgListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PacketPrivateMsgListReq} PacketPrivateMsgListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketPrivateMsgListReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PacketPrivateMsgListReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.lastMsgId = reader.int64();
                        break;
                    }
                case 2: {
                        message.size = reader.int64();
                        break;
                    }
                case 3: {
                        message.userId = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PacketPrivateMsgListReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PacketPrivateMsgListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PacketPrivateMsgListReq} PacketPrivateMsgListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketPrivateMsgListReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketPrivateMsgListReq message.
         * @function verify
         * @memberof pb.PacketPrivateMsgListReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketPrivateMsgListReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.lastMsgId != null && message.hasOwnProperty("lastMsgId"))
                if (!$util.isInteger(message.lastMsgId) && !(message.lastMsgId && $util.isInteger(message.lastMsgId.low) && $util.isInteger(message.lastMsgId.high)))
                    return "lastMsgId: integer|Long expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size) && !(message.size && $util.isInteger(message.size.low) && $util.isInteger(message.size.high)))
                    return "size: integer|Long expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            return null;
        };

        /**
         * Creates a PacketPrivateMsgListReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PacketPrivateMsgListReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PacketPrivateMsgListReq} PacketPrivateMsgListReq
         */
        PacketPrivateMsgListReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PacketPrivateMsgListReq)
                return object;
            let message = new $root.pb.PacketPrivateMsgListReq();
            if (object.lastMsgId != null)
                if ($util.Long)
                    (message.lastMsgId = $util.Long.fromValue(object.lastMsgId)).unsigned = false;
                else if (typeof object.lastMsgId === "string")
                    message.lastMsgId = parseInt(object.lastMsgId, 10);
                else if (typeof object.lastMsgId === "number")
                    message.lastMsgId = object.lastMsgId;
                else if (typeof object.lastMsgId === "object")
                    message.lastMsgId = new $util.LongBits(object.lastMsgId.low >>> 0, object.lastMsgId.high >>> 0).toNumber();
            if (object.size != null)
                if ($util.Long)
                    (message.size = $util.Long.fromValue(object.size)).unsigned = false;
                else if (typeof object.size === "string")
                    message.size = parseInt(object.size, 10);
                else if (typeof object.size === "number")
                    message.size = object.size;
                else if (typeof object.size === "object")
                    message.size = new $util.LongBits(object.size.low >>> 0, object.size.high >>> 0).toNumber();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a PacketPrivateMsgListReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PacketPrivateMsgListReq
         * @static
         * @param {pb.PacketPrivateMsgListReq} message PacketPrivateMsgListReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketPrivateMsgListReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.lastMsgId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastMsgId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.size = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.size = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
            }
            if (message.lastMsgId != null && message.hasOwnProperty("lastMsgId"))
                if (typeof message.lastMsgId === "number")
                    object.lastMsgId = options.longs === String ? String(message.lastMsgId) : message.lastMsgId;
                else
                    object.lastMsgId = options.longs === String ? $util.Long.prototype.toString.call(message.lastMsgId) : options.longs === Number ? new $util.LongBits(message.lastMsgId.low >>> 0, message.lastMsgId.high >>> 0).toNumber() : message.lastMsgId;
            if (message.size != null && message.hasOwnProperty("size"))
                if (typeof message.size === "number")
                    object.size = options.longs === String ? String(message.size) : message.size;
                else
                    object.size = options.longs === String ? $util.Long.prototype.toString.call(message.size) : options.longs === Number ? new $util.LongBits(message.size.low >>> 0, message.size.high >>> 0).toNumber() : message.size;
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
            return object;
        };

        /**
         * Converts this PacketPrivateMsgListReq to JSON.
         * @function toJSON
         * @memberof pb.PacketPrivateMsgListReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketPrivateMsgListReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PacketPrivateMsgListReq
         * @function getTypeUrl
         * @memberof pb.PacketPrivateMsgListReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PacketPrivateMsgListReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PacketPrivateMsgListReq";
        };

        return PacketPrivateMsgListReq;
    })();

    pb.PacketPrivateMsgListResp = (function() {

        /**
         * Properties of a PacketPrivateMsgListResp.
         * @memberof pb
         * @interface IPacketPrivateMsgListResp
         * @property {pb.RetCode|null} [retCode] PacketPrivateMsgListResp retCode
         * @property {Array.<pb.IPacketPrivateMsg>|null} [list] PacketPrivateMsgListResp list
         * @property {boolean|null} [isCompleted] PacketPrivateMsgListResp isCompleted
         */

        /**
         * Constructs a new PacketPrivateMsgListResp.
         * @memberof pb
         * @classdesc Represents a PacketPrivateMsgListResp.
         * @implements IPacketPrivateMsgListResp
         * @constructor
         * @param {pb.IPacketPrivateMsgListResp=} [properties] Properties to set
         */
        function PacketPrivateMsgListResp(properties) {
            this.list = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketPrivateMsgListResp retCode.
         * @member {pb.RetCode} retCode
         * @memberof pb.PacketPrivateMsgListResp
         * @instance
         */
        PacketPrivateMsgListResp.prototype.retCode = 0;

        /**
         * PacketPrivateMsgListResp list.
         * @member {Array.<pb.IPacketPrivateMsg>} list
         * @memberof pb.PacketPrivateMsgListResp
         * @instance
         */
        PacketPrivateMsgListResp.prototype.list = $util.emptyArray;

        /**
         * PacketPrivateMsgListResp isCompleted.
         * @member {boolean} isCompleted
         * @memberof pb.PacketPrivateMsgListResp
         * @instance
         */
        PacketPrivateMsgListResp.prototype.isCompleted = false;

        /**
         * Creates a new PacketPrivateMsgListResp instance using the specified properties.
         * @function create
         * @memberof pb.PacketPrivateMsgListResp
         * @static
         * @param {pb.IPacketPrivateMsgListResp=} [properties] Properties to set
         * @returns {pb.PacketPrivateMsgListResp} PacketPrivateMsgListResp instance
         */
        PacketPrivateMsgListResp.create = function create(properties) {
            return new PacketPrivateMsgListResp(properties);
        };

        /**
         * Encodes the specified PacketPrivateMsgListResp message. Does not implicitly {@link pb.PacketPrivateMsgListResp.verify|verify} messages.
         * @function encode
         * @memberof pb.PacketPrivateMsgListResp
         * @static
         * @param {pb.IPacketPrivateMsgListResp} message PacketPrivateMsgListResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketPrivateMsgListResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.retCode != null && Object.hasOwnProperty.call(message, "retCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            if (message.list != null && message.list.length)
                for (let i = 0; i < message.list.length; ++i)
                    $root.pb.PacketPrivateMsg.encode(message.list[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.isCompleted != null && Object.hasOwnProperty.call(message, "isCompleted"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isCompleted);
            return writer;
        };

        /**
         * Encodes the specified PacketPrivateMsgListResp message, length delimited. Does not implicitly {@link pb.PacketPrivateMsgListResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PacketPrivateMsgListResp
         * @static
         * @param {pb.IPacketPrivateMsgListResp} message PacketPrivateMsgListResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketPrivateMsgListResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketPrivateMsgListResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PacketPrivateMsgListResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PacketPrivateMsgListResp} PacketPrivateMsgListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketPrivateMsgListResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PacketPrivateMsgListResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.retCode = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.pb.PacketPrivateMsg.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.isCompleted = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PacketPrivateMsgListResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PacketPrivateMsgListResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PacketPrivateMsgListResp} PacketPrivateMsgListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketPrivateMsgListResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketPrivateMsgListResp message.
         * @function verify
         * @memberof pb.PacketPrivateMsgListResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketPrivateMsgListResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                switch (message.retCode) {
                default:
                    return "retCode: enum value expected";
                case 0:
                case 200:
                case 500:
                case 3001:
                case 4001:
                case 4002:
                case 1001:
                    break;
                }
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (let i = 0; i < message.list.length; ++i) {
                    let error = $root.pb.PacketPrivateMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            if (message.isCompleted != null && message.hasOwnProperty("isCompleted"))
                if (typeof message.isCompleted !== "boolean")
                    return "isCompleted: boolean expected";
            return null;
        };

        /**
         * Creates a PacketPrivateMsgListResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PacketPrivateMsgListResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PacketPrivateMsgListResp} PacketPrivateMsgListResp
         */
        PacketPrivateMsgListResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PacketPrivateMsgListResp)
                return object;
            let message = new $root.pb.PacketPrivateMsgListResp();
            switch (object.retCode) {
            default:
                if (typeof object.retCode === "number") {
                    message.retCode = object.retCode;
                    break;
                }
                break;
            case "Unknown":
            case 0:
                message.retCode = 0;
                break;
            case "Success":
            case 200:
                message.retCode = 200;
                break;
            case "Error":
            case 500:
                message.retCode = 500;
                break;
            case "UserNotFound":
            case 3001:
                message.retCode = 3001;
                break;
            case "FriendNotFound":
            case 4001:
                message.retCode = 4001;
                break;
            case "FriendAlready":
            case 4002:
                message.retCode = 4002;
                break;
            case "NotRecord":
            case 1001:
                message.retCode = 1001;
                break;
            }
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".pb.PacketPrivateMsgListResp.list: array expected");
                message.list = [];
                for (let i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".pb.PacketPrivateMsgListResp.list: object expected");
                    message.list[i] = $root.pb.PacketPrivateMsg.fromObject(object.list[i]);
                }
            }
            if (object.isCompleted != null)
                message.isCompleted = Boolean(object.isCompleted);
            return message;
        };

        /**
         * Creates a plain object from a PacketPrivateMsgListResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PacketPrivateMsgListResp
         * @static
         * @param {pb.PacketPrivateMsgListResp} message PacketPrivateMsgListResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketPrivateMsgListResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults) {
                object.retCode = options.enums === String ? "Unknown" : 0;
                object.isCompleted = false;
            }
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = options.enums === String ? $root.pb.RetCode[message.retCode] === undefined ? message.retCode : $root.pb.RetCode[message.retCode] : message.retCode;
            if (message.list && message.list.length) {
                object.list = [];
                for (let j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.pb.PacketPrivateMsg.toObject(message.list[j], options);
            }
            if (message.isCompleted != null && message.hasOwnProperty("isCompleted"))
                object.isCompleted = message.isCompleted;
            return object;
        };

        /**
         * Converts this PacketPrivateMsgListResp to JSON.
         * @function toJSON
         * @memberof pb.PacketPrivateMsgListResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketPrivateMsgListResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PacketPrivateMsgListResp
         * @function getTypeUrl
         * @memberof pb.PacketPrivateMsgListResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PacketPrivateMsgListResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PacketPrivateMsgListResp";
        };

        return PacketPrivateMsgListResp;
    })();

    pb.PacketRemoveFriendReq = (function() {

        /**
         * Properties of a PacketRemoveFriendReq.
         * @memberof pb
         * @interface IPacketRemoveFriendReq
         * @property {number|Long|null} [userId] PacketRemoveFriendReq userId
         */

        /**
         * Constructs a new PacketRemoveFriendReq.
         * @memberof pb
         * @classdesc Represents a PacketRemoveFriendReq.
         * @implements IPacketRemoveFriendReq
         * @constructor
         * @param {pb.IPacketRemoveFriendReq=} [properties] Properties to set
         */
        function PacketRemoveFriendReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketRemoveFriendReq userId.
         * @member {number|Long} userId
         * @memberof pb.PacketRemoveFriendReq
         * @instance
         */
        PacketRemoveFriendReq.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new PacketRemoveFriendReq instance using the specified properties.
         * @function create
         * @memberof pb.PacketRemoveFriendReq
         * @static
         * @param {pb.IPacketRemoveFriendReq=} [properties] Properties to set
         * @returns {pb.PacketRemoveFriendReq} PacketRemoveFriendReq instance
         */
        PacketRemoveFriendReq.create = function create(properties) {
            return new PacketRemoveFriendReq(properties);
        };

        /**
         * Encodes the specified PacketRemoveFriendReq message. Does not implicitly {@link pb.PacketRemoveFriendReq.verify|verify} messages.
         * @function encode
         * @memberof pb.PacketRemoveFriendReq
         * @static
         * @param {pb.IPacketRemoveFriendReq} message PacketRemoveFriendReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketRemoveFriendReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.userId);
            return writer;
        };

        /**
         * Encodes the specified PacketRemoveFriendReq message, length delimited. Does not implicitly {@link pb.PacketRemoveFriendReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PacketRemoveFriendReq
         * @static
         * @param {pb.IPacketRemoveFriendReq} message PacketRemoveFriendReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketRemoveFriendReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketRemoveFriendReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PacketRemoveFriendReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PacketRemoveFriendReq} PacketRemoveFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketRemoveFriendReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PacketRemoveFriendReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PacketRemoveFriendReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PacketRemoveFriendReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PacketRemoveFriendReq} PacketRemoveFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketRemoveFriendReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketRemoveFriendReq message.
         * @function verify
         * @memberof pb.PacketRemoveFriendReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketRemoveFriendReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            return null;
        };

        /**
         * Creates a PacketRemoveFriendReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PacketRemoveFriendReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PacketRemoveFriendReq} PacketRemoveFriendReq
         */
        PacketRemoveFriendReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PacketRemoveFriendReq)
                return object;
            let message = new $root.pb.PacketRemoveFriendReq();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a PacketRemoveFriendReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PacketRemoveFriendReq
         * @static
         * @param {pb.PacketRemoveFriendReq} message PacketRemoveFriendReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketRemoveFriendReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
            return object;
        };

        /**
         * Converts this PacketRemoveFriendReq to JSON.
         * @function toJSON
         * @memberof pb.PacketRemoveFriendReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketRemoveFriendReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PacketRemoveFriendReq
         * @function getTypeUrl
         * @memberof pb.PacketRemoveFriendReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PacketRemoveFriendReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PacketRemoveFriendReq";
        };

        return PacketRemoveFriendReq;
    })();

    pb.PacketRemoveFriendResp = (function() {

        /**
         * Properties of a PacketRemoveFriendResp.
         * @memberof pb
         * @interface IPacketRemoveFriendResp
         * @property {pb.RetCode|null} [retCode] PacketRemoveFriendResp retCode
         */

        /**
         * Constructs a new PacketRemoveFriendResp.
         * @memberof pb
         * @classdesc Represents a PacketRemoveFriendResp.
         * @implements IPacketRemoveFriendResp
         * @constructor
         * @param {pb.IPacketRemoveFriendResp=} [properties] Properties to set
         */
        function PacketRemoveFriendResp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketRemoveFriendResp retCode.
         * @member {pb.RetCode} retCode
         * @memberof pb.PacketRemoveFriendResp
         * @instance
         */
        PacketRemoveFriendResp.prototype.retCode = 0;

        /**
         * Creates a new PacketRemoveFriendResp instance using the specified properties.
         * @function create
         * @memberof pb.PacketRemoveFriendResp
         * @static
         * @param {pb.IPacketRemoveFriendResp=} [properties] Properties to set
         * @returns {pb.PacketRemoveFriendResp} PacketRemoveFriendResp instance
         */
        PacketRemoveFriendResp.create = function create(properties) {
            return new PacketRemoveFriendResp(properties);
        };

        /**
         * Encodes the specified PacketRemoveFriendResp message. Does not implicitly {@link pb.PacketRemoveFriendResp.verify|verify} messages.
         * @function encode
         * @memberof pb.PacketRemoveFriendResp
         * @static
         * @param {pb.IPacketRemoveFriendResp} message PacketRemoveFriendResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketRemoveFriendResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.retCode != null && Object.hasOwnProperty.call(message, "retCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            return writer;
        };

        /**
         * Encodes the specified PacketRemoveFriendResp message, length delimited. Does not implicitly {@link pb.PacketRemoveFriendResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PacketRemoveFriendResp
         * @static
         * @param {pb.IPacketRemoveFriendResp} message PacketRemoveFriendResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketRemoveFriendResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketRemoveFriendResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PacketRemoveFriendResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PacketRemoveFriendResp} PacketRemoveFriendResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketRemoveFriendResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PacketRemoveFriendResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.retCode = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PacketRemoveFriendResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PacketRemoveFriendResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PacketRemoveFriendResp} PacketRemoveFriendResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketRemoveFriendResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketRemoveFriendResp message.
         * @function verify
         * @memberof pb.PacketRemoveFriendResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketRemoveFriendResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                switch (message.retCode) {
                default:
                    return "retCode: enum value expected";
                case 0:
                case 200:
                case 500:
                case 3001:
                case 4001:
                case 4002:
                case 1001:
                    break;
                }
            return null;
        };

        /**
         * Creates a PacketRemoveFriendResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PacketRemoveFriendResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PacketRemoveFriendResp} PacketRemoveFriendResp
         */
        PacketRemoveFriendResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PacketRemoveFriendResp)
                return object;
            let message = new $root.pb.PacketRemoveFriendResp();
            switch (object.retCode) {
            default:
                if (typeof object.retCode === "number") {
                    message.retCode = object.retCode;
                    break;
                }
                break;
            case "Unknown":
            case 0:
                message.retCode = 0;
                break;
            case "Success":
            case 200:
                message.retCode = 200;
                break;
            case "Error":
            case 500:
                message.retCode = 500;
                break;
            case "UserNotFound":
            case 3001:
                message.retCode = 3001;
                break;
            case "FriendNotFound":
            case 4001:
                message.retCode = 4001;
                break;
            case "FriendAlready":
            case 4002:
                message.retCode = 4002;
                break;
            case "NotRecord":
            case 1001:
                message.retCode = 1001;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a PacketRemoveFriendResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PacketRemoveFriendResp
         * @static
         * @param {pb.PacketRemoveFriendResp} message PacketRemoveFriendResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketRemoveFriendResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.retCode = options.enums === String ? "Unknown" : 0;
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = options.enums === String ? $root.pb.RetCode[message.retCode] === undefined ? message.retCode : $root.pb.RetCode[message.retCode] : message.retCode;
            return object;
        };

        /**
         * Converts this PacketRemoveFriendResp to JSON.
         * @function toJSON
         * @memberof pb.PacketRemoveFriendResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketRemoveFriendResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PacketRemoveFriendResp
         * @function getTypeUrl
         * @memberof pb.PacketRemoveFriendResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PacketRemoveFriendResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PacketRemoveFriendResp";
        };

        return PacketRemoveFriendResp;
    })();

    pb.PacketFriendApplyReq = (function() {

        /**
         * Properties of a PacketFriendApplyReq.
         * @memberof pb
         * @interface IPacketFriendApplyReq
         * @property {number|Long|null} [userId] PacketFriendApplyReq userId
         * @property {string|null} [reason] PacketFriendApplyReq reason
         */

        /**
         * Constructs a new PacketFriendApplyReq.
         * @memberof pb
         * @classdesc Represents a PacketFriendApplyReq.
         * @implements IPacketFriendApplyReq
         * @constructor
         * @param {pb.IPacketFriendApplyReq=} [properties] Properties to set
         */
        function PacketFriendApplyReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketFriendApplyReq userId.
         * @member {number|Long} userId
         * @memberof pb.PacketFriendApplyReq
         * @instance
         */
        PacketFriendApplyReq.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * PacketFriendApplyReq reason.
         * @member {string} reason
         * @memberof pb.PacketFriendApplyReq
         * @instance
         */
        PacketFriendApplyReq.prototype.reason = "";

        /**
         * Creates a new PacketFriendApplyReq instance using the specified properties.
         * @function create
         * @memberof pb.PacketFriendApplyReq
         * @static
         * @param {pb.IPacketFriendApplyReq=} [properties] Properties to set
         * @returns {pb.PacketFriendApplyReq} PacketFriendApplyReq instance
         */
        PacketFriendApplyReq.create = function create(properties) {
            return new PacketFriendApplyReq(properties);
        };

        /**
         * Encodes the specified PacketFriendApplyReq message. Does not implicitly {@link pb.PacketFriendApplyReq.verify|verify} messages.
         * @function encode
         * @memberof pb.PacketFriendApplyReq
         * @static
         * @param {pb.IPacketFriendApplyReq} message PacketFriendApplyReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketFriendApplyReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.userId);
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
            return writer;
        };

        /**
         * Encodes the specified PacketFriendApplyReq message, length delimited. Does not implicitly {@link pb.PacketFriendApplyReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PacketFriendApplyReq
         * @static
         * @param {pb.IPacketFriendApplyReq} message PacketFriendApplyReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketFriendApplyReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketFriendApplyReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PacketFriendApplyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PacketFriendApplyReq} PacketFriendApplyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketFriendApplyReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PacketFriendApplyReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.uint64();
                        break;
                    }
                case 2: {
                        message.reason = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PacketFriendApplyReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PacketFriendApplyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PacketFriendApplyReq} PacketFriendApplyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketFriendApplyReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketFriendApplyReq message.
         * @function verify
         * @memberof pb.PacketFriendApplyReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketFriendApplyReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isString(message.reason))
                    return "reason: string expected";
            return null;
        };

        /**
         * Creates a PacketFriendApplyReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PacketFriendApplyReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PacketFriendApplyReq} PacketFriendApplyReq
         */
        PacketFriendApplyReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PacketFriendApplyReq)
                return object;
            let message = new $root.pb.PacketFriendApplyReq();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
            if (object.reason != null)
                message.reason = String(object.reason);
            return message;
        };

        /**
         * Creates a plain object from a PacketFriendApplyReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PacketFriendApplyReq
         * @static
         * @param {pb.PacketFriendApplyReq} message PacketFriendApplyReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketFriendApplyReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.reason = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            return object;
        };

        /**
         * Converts this PacketFriendApplyReq to JSON.
         * @function toJSON
         * @memberof pb.PacketFriendApplyReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketFriendApplyReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PacketFriendApplyReq
         * @function getTypeUrl
         * @memberof pb.PacketFriendApplyReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PacketFriendApplyReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PacketFriendApplyReq";
        };

        return PacketFriendApplyReq;
    })();

    pb.PacketFriendApplyResp = (function() {

        /**
         * Properties of a PacketFriendApplyResp.
         * @memberof pb
         * @interface IPacketFriendApplyResp
         * @property {pb.RetCode|null} [retCode] PacketFriendApplyResp retCode
         * @property {boolean|null} [isCompleteFriend] PacketFriendApplyResp isCompleteFriend
         * @property {number|null} [id] PacketFriendApplyResp id
         */

        /**
         * Constructs a new PacketFriendApplyResp.
         * @memberof pb
         * @classdesc Represents a PacketFriendApplyResp.
         * @implements IPacketFriendApplyResp
         * @constructor
         * @param {pb.IPacketFriendApplyResp=} [properties] Properties to set
         */
        function PacketFriendApplyResp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketFriendApplyResp retCode.
         * @member {pb.RetCode} retCode
         * @memberof pb.PacketFriendApplyResp
         * @instance
         */
        PacketFriendApplyResp.prototype.retCode = 0;

        /**
         * PacketFriendApplyResp isCompleteFriend.
         * @member {boolean} isCompleteFriend
         * @memberof pb.PacketFriendApplyResp
         * @instance
         */
        PacketFriendApplyResp.prototype.isCompleteFriend = false;

        /**
         * PacketFriendApplyResp id.
         * @member {number} id
         * @memberof pb.PacketFriendApplyResp
         * @instance
         */
        PacketFriendApplyResp.prototype.id = 0;

        /**
         * Creates a new PacketFriendApplyResp instance using the specified properties.
         * @function create
         * @memberof pb.PacketFriendApplyResp
         * @static
         * @param {pb.IPacketFriendApplyResp=} [properties] Properties to set
         * @returns {pb.PacketFriendApplyResp} PacketFriendApplyResp instance
         */
        PacketFriendApplyResp.create = function create(properties) {
            return new PacketFriendApplyResp(properties);
        };

        /**
         * Encodes the specified PacketFriendApplyResp message. Does not implicitly {@link pb.PacketFriendApplyResp.verify|verify} messages.
         * @function encode
         * @memberof pb.PacketFriendApplyResp
         * @static
         * @param {pb.IPacketFriendApplyResp} message PacketFriendApplyResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketFriendApplyResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.retCode != null && Object.hasOwnProperty.call(message, "retCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            if (message.isCompleteFriend != null && Object.hasOwnProperty.call(message, "isCompleteFriend"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isCompleteFriend);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified PacketFriendApplyResp message, length delimited. Does not implicitly {@link pb.PacketFriendApplyResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PacketFriendApplyResp
         * @static
         * @param {pb.IPacketFriendApplyResp} message PacketFriendApplyResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketFriendApplyResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketFriendApplyResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PacketFriendApplyResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PacketFriendApplyResp} PacketFriendApplyResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketFriendApplyResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PacketFriendApplyResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.retCode = reader.int32();
                        break;
                    }
                case 2: {
                        message.isCompleteFriend = reader.bool();
                        break;
                    }
                case 3: {
                        message.id = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PacketFriendApplyResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PacketFriendApplyResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PacketFriendApplyResp} PacketFriendApplyResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketFriendApplyResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketFriendApplyResp message.
         * @function verify
         * @memberof pb.PacketFriendApplyResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketFriendApplyResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                switch (message.retCode) {
                default:
                    return "retCode: enum value expected";
                case 0:
                case 200:
                case 500:
                case 3001:
                case 4001:
                case 4002:
                case 1001:
                    break;
                }
            if (message.isCompleteFriend != null && message.hasOwnProperty("isCompleteFriend"))
                if (typeof message.isCompleteFriend !== "boolean")
                    return "isCompleteFriend: boolean expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            return null;
        };

        /**
         * Creates a PacketFriendApplyResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PacketFriendApplyResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PacketFriendApplyResp} PacketFriendApplyResp
         */
        PacketFriendApplyResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PacketFriendApplyResp)
                return object;
            let message = new $root.pb.PacketFriendApplyResp();
            switch (object.retCode) {
            default:
                if (typeof object.retCode === "number") {
                    message.retCode = object.retCode;
                    break;
                }
                break;
            case "Unknown":
            case 0:
                message.retCode = 0;
                break;
            case "Success":
            case 200:
                message.retCode = 200;
                break;
            case "Error":
            case 500:
                message.retCode = 500;
                break;
            case "UserNotFound":
            case 3001:
                message.retCode = 3001;
                break;
            case "FriendNotFound":
            case 4001:
                message.retCode = 4001;
                break;
            case "FriendAlready":
            case 4002:
                message.retCode = 4002;
                break;
            case "NotRecord":
            case 1001:
                message.retCode = 1001;
                break;
            }
            if (object.isCompleteFriend != null)
                message.isCompleteFriend = Boolean(object.isCompleteFriend);
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from a PacketFriendApplyResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PacketFriendApplyResp
         * @static
         * @param {pb.PacketFriendApplyResp} message PacketFriendApplyResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketFriendApplyResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.retCode = options.enums === String ? "Unknown" : 0;
                object.isCompleteFriend = false;
                object.id = 0;
            }
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = options.enums === String ? $root.pb.RetCode[message.retCode] === undefined ? message.retCode : $root.pb.RetCode[message.retCode] : message.retCode;
            if (message.isCompleteFriend != null && message.hasOwnProperty("isCompleteFriend"))
                object.isCompleteFriend = message.isCompleteFriend;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this PacketFriendApplyResp to JSON.
         * @function toJSON
         * @memberof pb.PacketFriendApplyResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketFriendApplyResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PacketFriendApplyResp
         * @function getTypeUrl
         * @memberof pb.PacketFriendApplyResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PacketFriendApplyResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PacketFriendApplyResp";
        };

        return PacketFriendApplyResp;
    })();

    pb.PacketFriendHandleReq = (function() {

        /**
         * Properties of a PacketFriendHandleReq.
         * @memberof pb
         * @interface IPacketFriendHandleReq
         * @property {number|null} [id] PacketFriendHandleReq id
         * @property {boolean|null} [flag] PacketFriendHandleReq flag
         * @property {string|null} [rejectReason] PacketFriendHandleReq rejectReason
         */

        /**
         * Constructs a new PacketFriendHandleReq.
         * @memberof pb
         * @classdesc Represents a PacketFriendHandleReq.
         * @implements IPacketFriendHandleReq
         * @constructor
         * @param {pb.IPacketFriendHandleReq=} [properties] Properties to set
         */
        function PacketFriendHandleReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketFriendHandleReq id.
         * @member {number} id
         * @memberof pb.PacketFriendHandleReq
         * @instance
         */
        PacketFriendHandleReq.prototype.id = 0;

        /**
         * PacketFriendHandleReq flag.
         * @member {boolean} flag
         * @memberof pb.PacketFriendHandleReq
         * @instance
         */
        PacketFriendHandleReq.prototype.flag = false;

        /**
         * PacketFriendHandleReq rejectReason.
         * @member {string} rejectReason
         * @memberof pb.PacketFriendHandleReq
         * @instance
         */
        PacketFriendHandleReq.prototype.rejectReason = "";

        /**
         * Creates a new PacketFriendHandleReq instance using the specified properties.
         * @function create
         * @memberof pb.PacketFriendHandleReq
         * @static
         * @param {pb.IPacketFriendHandleReq=} [properties] Properties to set
         * @returns {pb.PacketFriendHandleReq} PacketFriendHandleReq instance
         */
        PacketFriendHandleReq.create = function create(properties) {
            return new PacketFriendHandleReq(properties);
        };

        /**
         * Encodes the specified PacketFriendHandleReq message. Does not implicitly {@link pb.PacketFriendHandleReq.verify|verify} messages.
         * @function encode
         * @memberof pb.PacketFriendHandleReq
         * @static
         * @param {pb.IPacketFriendHandleReq} message PacketFriendHandleReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketFriendHandleReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.flag != null && Object.hasOwnProperty.call(message, "flag"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.flag);
            if (message.rejectReason != null && Object.hasOwnProperty.call(message, "rejectReason"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.rejectReason);
            return writer;
        };

        /**
         * Encodes the specified PacketFriendHandleReq message, length delimited. Does not implicitly {@link pb.PacketFriendHandleReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PacketFriendHandleReq
         * @static
         * @param {pb.IPacketFriendHandleReq} message PacketFriendHandleReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketFriendHandleReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketFriendHandleReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PacketFriendHandleReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PacketFriendHandleReq} PacketFriendHandleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketFriendHandleReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PacketFriendHandleReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.flag = reader.bool();
                        break;
                    }
                case 3: {
                        message.rejectReason = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PacketFriendHandleReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PacketFriendHandleReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PacketFriendHandleReq} PacketFriendHandleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketFriendHandleReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketFriendHandleReq message.
         * @function verify
         * @memberof pb.PacketFriendHandleReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketFriendHandleReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.flag != null && message.hasOwnProperty("flag"))
                if (typeof message.flag !== "boolean")
                    return "flag: boolean expected";
            if (message.rejectReason != null && message.hasOwnProperty("rejectReason"))
                if (!$util.isString(message.rejectReason))
                    return "rejectReason: string expected";
            return null;
        };

        /**
         * Creates a PacketFriendHandleReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PacketFriendHandleReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PacketFriendHandleReq} PacketFriendHandleReq
         */
        PacketFriendHandleReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PacketFriendHandleReq)
                return object;
            let message = new $root.pb.PacketFriendHandleReq();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.flag != null)
                message.flag = Boolean(object.flag);
            if (object.rejectReason != null)
                message.rejectReason = String(object.rejectReason);
            return message;
        };

        /**
         * Creates a plain object from a PacketFriendHandleReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PacketFriendHandleReq
         * @static
         * @param {pb.PacketFriendHandleReq} message PacketFriendHandleReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketFriendHandleReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.flag = false;
                object.rejectReason = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.flag != null && message.hasOwnProperty("flag"))
                object.flag = message.flag;
            if (message.rejectReason != null && message.hasOwnProperty("rejectReason"))
                object.rejectReason = message.rejectReason;
            return object;
        };

        /**
         * Converts this PacketFriendHandleReq to JSON.
         * @function toJSON
         * @memberof pb.PacketFriendHandleReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketFriendHandleReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PacketFriendHandleReq
         * @function getTypeUrl
         * @memberof pb.PacketFriendHandleReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PacketFriendHandleReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PacketFriendHandleReq";
        };

        return PacketFriendHandleReq;
    })();

    pb.PacketFriendHandleResp = (function() {

        /**
         * Properties of a PacketFriendHandleResp.
         * @memberof pb
         * @interface IPacketFriendHandleResp
         * @property {pb.RetCode|null} [retCode] PacketFriendHandleResp retCode
         */

        /**
         * Constructs a new PacketFriendHandleResp.
         * @memberof pb
         * @classdesc Represents a PacketFriendHandleResp.
         * @implements IPacketFriendHandleResp
         * @constructor
         * @param {pb.IPacketFriendHandleResp=} [properties] Properties to set
         */
        function PacketFriendHandleResp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketFriendHandleResp retCode.
         * @member {pb.RetCode} retCode
         * @memberof pb.PacketFriendHandleResp
         * @instance
         */
        PacketFriendHandleResp.prototype.retCode = 0;

        /**
         * Creates a new PacketFriendHandleResp instance using the specified properties.
         * @function create
         * @memberof pb.PacketFriendHandleResp
         * @static
         * @param {pb.IPacketFriendHandleResp=} [properties] Properties to set
         * @returns {pb.PacketFriendHandleResp} PacketFriendHandleResp instance
         */
        PacketFriendHandleResp.create = function create(properties) {
            return new PacketFriendHandleResp(properties);
        };

        /**
         * Encodes the specified PacketFriendHandleResp message. Does not implicitly {@link pb.PacketFriendHandleResp.verify|verify} messages.
         * @function encode
         * @memberof pb.PacketFriendHandleResp
         * @static
         * @param {pb.IPacketFriendHandleResp} message PacketFriendHandleResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketFriendHandleResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.retCode != null && Object.hasOwnProperty.call(message, "retCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            return writer;
        };

        /**
         * Encodes the specified PacketFriendHandleResp message, length delimited. Does not implicitly {@link pb.PacketFriendHandleResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PacketFriendHandleResp
         * @static
         * @param {pb.IPacketFriendHandleResp} message PacketFriendHandleResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketFriendHandleResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketFriendHandleResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PacketFriendHandleResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PacketFriendHandleResp} PacketFriendHandleResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketFriendHandleResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PacketFriendHandleResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.retCode = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PacketFriendHandleResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PacketFriendHandleResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PacketFriendHandleResp} PacketFriendHandleResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketFriendHandleResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketFriendHandleResp message.
         * @function verify
         * @memberof pb.PacketFriendHandleResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketFriendHandleResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                switch (message.retCode) {
                default:
                    return "retCode: enum value expected";
                case 0:
                case 200:
                case 500:
                case 3001:
                case 4001:
                case 4002:
                case 1001:
                    break;
                }
            return null;
        };

        /**
         * Creates a PacketFriendHandleResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PacketFriendHandleResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PacketFriendHandleResp} PacketFriendHandleResp
         */
        PacketFriendHandleResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PacketFriendHandleResp)
                return object;
            let message = new $root.pb.PacketFriendHandleResp();
            switch (object.retCode) {
            default:
                if (typeof object.retCode === "number") {
                    message.retCode = object.retCode;
                    break;
                }
                break;
            case "Unknown":
            case 0:
                message.retCode = 0;
                break;
            case "Success":
            case 200:
                message.retCode = 200;
                break;
            case "Error":
            case 500:
                message.retCode = 500;
                break;
            case "UserNotFound":
            case 3001:
                message.retCode = 3001;
                break;
            case "FriendNotFound":
            case 4001:
                message.retCode = 4001;
                break;
            case "FriendAlready":
            case 4002:
                message.retCode = 4002;
                break;
            case "NotRecord":
            case 1001:
                message.retCode = 1001;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a PacketFriendHandleResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PacketFriendHandleResp
         * @static
         * @param {pb.PacketFriendHandleResp} message PacketFriendHandleResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketFriendHandleResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.retCode = options.enums === String ? "Unknown" : 0;
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = options.enums === String ? $root.pb.RetCode[message.retCode] === undefined ? message.retCode : $root.pb.RetCode[message.retCode] : message.retCode;
            return object;
        };

        /**
         * Converts this PacketFriendHandleResp to JSON.
         * @function toJSON
         * @memberof pb.PacketFriendHandleResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketFriendHandleResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PacketFriendHandleResp
         * @function getTypeUrl
         * @memberof pb.PacketFriendHandleResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PacketFriendHandleResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PacketFriendHandleResp";
        };

        return PacketFriendHandleResp;
    })();

    pb.PacketLoginReq = (function() {

        /**
         * Properties of a PacketLoginReq.
         * @memberof pb
         * @interface IPacketLoginReq
         * @property {string|null} [token] PacketLoginReq token
         */

        /**
         * Constructs a new PacketLoginReq.
         * @memberof pb
         * @classdesc Represents a PacketLoginReq.
         * @implements IPacketLoginReq
         * @constructor
         * @param {pb.IPacketLoginReq=} [properties] Properties to set
         */
        function PacketLoginReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketLoginReq token.
         * @member {string} token
         * @memberof pb.PacketLoginReq
         * @instance
         */
        PacketLoginReq.prototype.token = "";

        /**
         * Creates a new PacketLoginReq instance using the specified properties.
         * @function create
         * @memberof pb.PacketLoginReq
         * @static
         * @param {pb.IPacketLoginReq=} [properties] Properties to set
         * @returns {pb.PacketLoginReq} PacketLoginReq instance
         */
        PacketLoginReq.create = function create(properties) {
            return new PacketLoginReq(properties);
        };

        /**
         * Encodes the specified PacketLoginReq message. Does not implicitly {@link pb.PacketLoginReq.verify|verify} messages.
         * @function encode
         * @memberof pb.PacketLoginReq
         * @static
         * @param {pb.IPacketLoginReq} message PacketLoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketLoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified PacketLoginReq message, length delimited. Does not implicitly {@link pb.PacketLoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PacketLoginReq
         * @static
         * @param {pb.IPacketLoginReq} message PacketLoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketLoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketLoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PacketLoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PacketLoginReq} PacketLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketLoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PacketLoginReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.token = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PacketLoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PacketLoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PacketLoginReq} PacketLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketLoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketLoginReq message.
         * @function verify
         * @memberof pb.PacketLoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketLoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a PacketLoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PacketLoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PacketLoginReq} PacketLoginReq
         */
        PacketLoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PacketLoginReq)
                return object;
            let message = new $root.pb.PacketLoginReq();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a PacketLoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PacketLoginReq
         * @static
         * @param {pb.PacketLoginReq} message PacketLoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketLoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.token = "";
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this PacketLoginReq to JSON.
         * @function toJSON
         * @memberof pb.PacketLoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketLoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PacketLoginReq
         * @function getTypeUrl
         * @memberof pb.PacketLoginReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PacketLoginReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PacketLoginReq";
        };

        return PacketLoginReq;
    })();

    pb.PacketLoginRes = (function() {

        /**
         * Properties of a PacketLoginRes.
         * @memberof pb
         * @interface IPacketLoginRes
         * @property {pb.RetCode|null} [retCode] PacketLoginRes retCode
         * @property {number|Long|null} [uid] PacketLoginRes uid
         */

        /**
         * Constructs a new PacketLoginRes.
         * @memberof pb
         * @classdesc Represents a PacketLoginRes.
         * @implements IPacketLoginRes
         * @constructor
         * @param {pb.IPacketLoginRes=} [properties] Properties to set
         */
        function PacketLoginRes(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketLoginRes retCode.
         * @member {pb.RetCode} retCode
         * @memberof pb.PacketLoginRes
         * @instance
         */
        PacketLoginRes.prototype.retCode = 0;

        /**
         * PacketLoginRes uid.
         * @member {number|Long} uid
         * @memberof pb.PacketLoginRes
         * @instance
         */
        PacketLoginRes.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new PacketLoginRes instance using the specified properties.
         * @function create
         * @memberof pb.PacketLoginRes
         * @static
         * @param {pb.IPacketLoginRes=} [properties] Properties to set
         * @returns {pb.PacketLoginRes} PacketLoginRes instance
         */
        PacketLoginRes.create = function create(properties) {
            return new PacketLoginRes(properties);
        };

        /**
         * Encodes the specified PacketLoginRes message. Does not implicitly {@link pb.PacketLoginRes.verify|verify} messages.
         * @function encode
         * @memberof pb.PacketLoginRes
         * @static
         * @param {pb.IPacketLoginRes} message PacketLoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketLoginRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.retCode != null && Object.hasOwnProperty.call(message, "retCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.uid);
            return writer;
        };

        /**
         * Encodes the specified PacketLoginRes message, length delimited. Does not implicitly {@link pb.PacketLoginRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PacketLoginRes
         * @static
         * @param {pb.IPacketLoginRes} message PacketLoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketLoginRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketLoginRes message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PacketLoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PacketLoginRes} PacketLoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketLoginRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PacketLoginRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.retCode = reader.int32();
                        break;
                    }
                case 2: {
                        message.uid = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PacketLoginRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PacketLoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PacketLoginRes} PacketLoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketLoginRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketLoginRes message.
         * @function verify
         * @memberof pb.PacketLoginRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketLoginRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                switch (message.retCode) {
                default:
                    return "retCode: enum value expected";
                case 0:
                case 200:
                case 500:
                case 3001:
                case 4001:
                case 4002:
                case 1001:
                    break;
                }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            return null;
        };

        /**
         * Creates a PacketLoginRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PacketLoginRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PacketLoginRes} PacketLoginRes
         */
        PacketLoginRes.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PacketLoginRes)
                return object;
            let message = new $root.pb.PacketLoginRes();
            switch (object.retCode) {
            default:
                if (typeof object.retCode === "number") {
                    message.retCode = object.retCode;
                    break;
                }
                break;
            case "Unknown":
            case 0:
                message.retCode = 0;
                break;
            case "Success":
            case 200:
                message.retCode = 200;
                break;
            case "Error":
            case 500:
                message.retCode = 500;
                break;
            case "UserNotFound":
            case 3001:
                message.retCode = 3001;
                break;
            case "FriendNotFound":
            case 4001:
                message.retCode = 4001;
                break;
            case "FriendAlready":
            case 4002:
                message.retCode = 4002;
                break;
            case "NotRecord":
            case 1001:
                message.retCode = 1001;
                break;
            }
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = true;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a PacketLoginRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PacketLoginRes
         * @static
         * @param {pb.PacketLoginRes} message PacketLoginRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketLoginRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.retCode = options.enums === String ? "Unknown" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
            }
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = options.enums === String ? $root.pb.RetCode[message.retCode] === undefined ? message.retCode : $root.pb.RetCode[message.retCode] : message.retCode;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber(true) : message.uid;
            return object;
        };

        /**
         * Converts this PacketLoginRes to JSON.
         * @function toJSON
         * @memberof pb.PacketLoginRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketLoginRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PacketLoginRes
         * @function getTypeUrl
         * @memberof pb.PacketLoginRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PacketLoginRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PacketLoginRes";
        };

        return PacketLoginRes;
    })();

    /**
     * PacketMsgType enum.
     * @name pb.PacketMsgType
     * @enum {number}
     * @property {number} None=0 None value
     * @property {number} Text=1 Text value
     * @property {number} Image=2 Image value
     * @property {number} Audio=3 Audio value
     * @property {number} Video=4 Video value
     * @property {number} File=5 File value
     */
    pb.PacketMsgType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "None"] = 0;
        values[valuesById[1] = "Text"] = 1;
        values[valuesById[2] = "Image"] = 2;
        values[valuesById[3] = "Audio"] = 3;
        values[valuesById[4] = "Video"] = 4;
        values[valuesById[5] = "File"] = 5;
        return values;
    })();

    pb.TextMsg = (function() {

        /**
         * Properties of a TextMsg.
         * @memberof pb
         * @interface ITextMsg
         * @property {string|null} [content] TextMsg content
         */

        /**
         * Constructs a new TextMsg.
         * @memberof pb
         * @classdesc Represents a TextMsg.
         * @implements ITextMsg
         * @constructor
         * @param {pb.ITextMsg=} [properties] Properties to set
         */
        function TextMsg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TextMsg content.
         * @member {string} content
         * @memberof pb.TextMsg
         * @instance
         */
        TextMsg.prototype.content = "";

        /**
         * Creates a new TextMsg instance using the specified properties.
         * @function create
         * @memberof pb.TextMsg
         * @static
         * @param {pb.ITextMsg=} [properties] Properties to set
         * @returns {pb.TextMsg} TextMsg instance
         */
        TextMsg.create = function create(properties) {
            return new TextMsg(properties);
        };

        /**
         * Encodes the specified TextMsg message. Does not implicitly {@link pb.TextMsg.verify|verify} messages.
         * @function encode
         * @memberof pb.TextMsg
         * @static
         * @param {pb.ITextMsg} message TextMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TextMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified TextMsg message, length delimited. Does not implicitly {@link pb.TextMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.TextMsg
         * @static
         * @param {pb.ITextMsg} message TextMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TextMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TextMsg message from the specified reader or buffer.
         * @function decode
         * @memberof pb.TextMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.TextMsg} TextMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TextMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.TextMsg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.content = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TextMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.TextMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.TextMsg} TextMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TextMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TextMsg message.
         * @function verify
         * @memberof pb.TextMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TextMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            return null;
        };

        /**
         * Creates a TextMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.TextMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.TextMsg} TextMsg
         */
        TextMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.TextMsg)
                return object;
            let message = new $root.pb.TextMsg();
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a TextMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.TextMsg
         * @static
         * @param {pb.TextMsg} message TextMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TextMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.content = "";
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this TextMsg to JSON.
         * @function toJSON
         * @memberof pb.TextMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TextMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TextMsg
         * @function getTypeUrl
         * @memberof pb.TextMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TextMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.TextMsg";
        };

        return TextMsg;
    })();

    pb.ImageMsg = (function() {

        /**
         * Properties of an ImageMsg.
         * @memberof pb
         * @interface IImageMsg
         * @property {string|null} [url] ImageMsg url
         * @property {string|null} [md5] ImageMsg md5
         * @property {number|null} [width] ImageMsg width
         * @property {number|null} [height] ImageMsg height
         * @property {number|null} [size] ImageMsg size
         */

        /**
         * Constructs a new ImageMsg.
         * @memberof pb
         * @classdesc Represents an ImageMsg.
         * @implements IImageMsg
         * @constructor
         * @param {pb.IImageMsg=} [properties] Properties to set
         */
        function ImageMsg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ImageMsg url.
         * @member {string} url
         * @memberof pb.ImageMsg
         * @instance
         */
        ImageMsg.prototype.url = "";

        /**
         * ImageMsg md5.
         * @member {string} md5
         * @memberof pb.ImageMsg
         * @instance
         */
        ImageMsg.prototype.md5 = "";

        /**
         * ImageMsg width.
         * @member {number} width
         * @memberof pb.ImageMsg
         * @instance
         */
        ImageMsg.prototype.width = 0;

        /**
         * ImageMsg height.
         * @member {number} height
         * @memberof pb.ImageMsg
         * @instance
         */
        ImageMsg.prototype.height = 0;

        /**
         * ImageMsg size.
         * @member {number} size
         * @memberof pb.ImageMsg
         * @instance
         */
        ImageMsg.prototype.size = 0;

        /**
         * Creates a new ImageMsg instance using the specified properties.
         * @function create
         * @memberof pb.ImageMsg
         * @static
         * @param {pb.IImageMsg=} [properties] Properties to set
         * @returns {pb.ImageMsg} ImageMsg instance
         */
        ImageMsg.create = function create(properties) {
            return new ImageMsg(properties);
        };

        /**
         * Encodes the specified ImageMsg message. Does not implicitly {@link pb.ImageMsg.verify|verify} messages.
         * @function encode
         * @memberof pb.ImageMsg
         * @static
         * @param {pb.IImageMsg} message ImageMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImageMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
            if (message.md5 != null && Object.hasOwnProperty.call(message, "md5"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.md5);
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.width);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.height);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.size);
            return writer;
        };

        /**
         * Encodes the specified ImageMsg message, length delimited. Does not implicitly {@link pb.ImageMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ImageMsg
         * @static
         * @param {pb.IImageMsg} message ImageMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImageMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ImageMsg message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ImageMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ImageMsg} ImageMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImageMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ImageMsg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.url = reader.string();
                        break;
                    }
                case 2: {
                        message.md5 = reader.string();
                        break;
                    }
                case 3: {
                        message.width = reader.int32();
                        break;
                    }
                case 4: {
                        message.height = reader.int32();
                        break;
                    }
                case 5: {
                        message.size = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ImageMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ImageMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ImageMsg} ImageMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImageMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ImageMsg message.
         * @function verify
         * @memberof pb.ImageMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ImageMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.md5 != null && message.hasOwnProperty("md5"))
                if (!$util.isString(message.md5))
                    return "md5: string expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size))
                    return "size: integer expected";
            return null;
        };

        /**
         * Creates an ImageMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ImageMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ImageMsg} ImageMsg
         */
        ImageMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ImageMsg)
                return object;
            let message = new $root.pb.ImageMsg();
            if (object.url != null)
                message.url = String(object.url);
            if (object.md5 != null)
                message.md5 = String(object.md5);
            if (object.width != null)
                message.width = object.width | 0;
            if (object.height != null)
                message.height = object.height | 0;
            if (object.size != null)
                message.size = object.size | 0;
            return message;
        };

        /**
         * Creates a plain object from an ImageMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ImageMsg
         * @static
         * @param {pb.ImageMsg} message ImageMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ImageMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.url = "";
                object.md5 = "";
                object.width = 0;
                object.height = 0;
                object.size = 0;
            }
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.md5 != null && message.hasOwnProperty("md5"))
                object.md5 = message.md5;
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = message.size;
            return object;
        };

        /**
         * Converts this ImageMsg to JSON.
         * @function toJSON
         * @memberof pb.ImageMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ImageMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ImageMsg
         * @function getTypeUrl
         * @memberof pb.ImageMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ImageMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.ImageMsg";
        };

        return ImageMsg;
    })();

    pb.AudioMsg = (function() {

        /**
         * Properties of an AudioMsg.
         * @memberof pb
         * @interface IAudioMsg
         * @property {string|null} [url] AudioMsg url
         * @property {number|null} [duration] AudioMsg duration
         * @property {number|null} [size] AudioMsg size
         * @property {string|null} [md5] AudioMsg md5
         */

        /**
         * Constructs a new AudioMsg.
         * @memberof pb
         * @classdesc Represents an AudioMsg.
         * @implements IAudioMsg
         * @constructor
         * @param {pb.IAudioMsg=} [properties] Properties to set
         */
        function AudioMsg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AudioMsg url.
         * @member {string} url
         * @memberof pb.AudioMsg
         * @instance
         */
        AudioMsg.prototype.url = "";

        /**
         * AudioMsg duration.
         * @member {number} duration
         * @memberof pb.AudioMsg
         * @instance
         */
        AudioMsg.prototype.duration = 0;

        /**
         * AudioMsg size.
         * @member {number} size
         * @memberof pb.AudioMsg
         * @instance
         */
        AudioMsg.prototype.size = 0;

        /**
         * AudioMsg md5.
         * @member {string} md5
         * @memberof pb.AudioMsg
         * @instance
         */
        AudioMsg.prototype.md5 = "";

        /**
         * Creates a new AudioMsg instance using the specified properties.
         * @function create
         * @memberof pb.AudioMsg
         * @static
         * @param {pb.IAudioMsg=} [properties] Properties to set
         * @returns {pb.AudioMsg} AudioMsg instance
         */
        AudioMsg.create = function create(properties) {
            return new AudioMsg(properties);
        };

        /**
         * Encodes the specified AudioMsg message. Does not implicitly {@link pb.AudioMsg.verify|verify} messages.
         * @function encode
         * @memberof pb.AudioMsg
         * @static
         * @param {pb.IAudioMsg} message AudioMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AudioMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
            if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.duration);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.size);
            if (message.md5 != null && Object.hasOwnProperty.call(message, "md5"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.md5);
            return writer;
        };

        /**
         * Encodes the specified AudioMsg message, length delimited. Does not implicitly {@link pb.AudioMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.AudioMsg
         * @static
         * @param {pb.IAudioMsg} message AudioMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AudioMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AudioMsg message from the specified reader or buffer.
         * @function decode
         * @memberof pb.AudioMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.AudioMsg} AudioMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AudioMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.AudioMsg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.url = reader.string();
                        break;
                    }
                case 2: {
                        message.duration = reader.uint32();
                        break;
                    }
                case 3: {
                        message.size = reader.int32();
                        break;
                    }
                case 4: {
                        message.md5 = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AudioMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.AudioMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.AudioMsg} AudioMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AudioMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AudioMsg message.
         * @function verify
         * @memberof pb.AudioMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AudioMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (!$util.isInteger(message.duration))
                    return "duration: integer expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size))
                    return "size: integer expected";
            if (message.md5 != null && message.hasOwnProperty("md5"))
                if (!$util.isString(message.md5))
                    return "md5: string expected";
            return null;
        };

        /**
         * Creates an AudioMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.AudioMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.AudioMsg} AudioMsg
         */
        AudioMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.AudioMsg)
                return object;
            let message = new $root.pb.AudioMsg();
            if (object.url != null)
                message.url = String(object.url);
            if (object.duration != null)
                message.duration = object.duration >>> 0;
            if (object.size != null)
                message.size = object.size | 0;
            if (object.md5 != null)
                message.md5 = String(object.md5);
            return message;
        };

        /**
         * Creates a plain object from an AudioMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.AudioMsg
         * @static
         * @param {pb.AudioMsg} message AudioMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AudioMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.url = "";
                object.duration = 0;
                object.size = 0;
                object.md5 = "";
            }
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.duration != null && message.hasOwnProperty("duration"))
                object.duration = message.duration;
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = message.size;
            if (message.md5 != null && message.hasOwnProperty("md5"))
                object.md5 = message.md5;
            return object;
        };

        /**
         * Converts this AudioMsg to JSON.
         * @function toJSON
         * @memberof pb.AudioMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AudioMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AudioMsg
         * @function getTypeUrl
         * @memberof pb.AudioMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AudioMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.AudioMsg";
        };

        return AudioMsg;
    })();

    pb.VideoMsg = (function() {

        /**
         * Properties of a VideoMsg.
         * @memberof pb
         * @interface IVideoMsg
         * @property {string|null} [url] VideoMsg url
         * @property {number|null} [duration] VideoMsg duration
         * @property {number|null} [size] VideoMsg size
         * @property {string|null} [md5] VideoMsg md5
         */

        /**
         * Constructs a new VideoMsg.
         * @memberof pb
         * @classdesc Represents a VideoMsg.
         * @implements IVideoMsg
         * @constructor
         * @param {pb.IVideoMsg=} [properties] Properties to set
         */
        function VideoMsg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VideoMsg url.
         * @member {string} url
         * @memberof pb.VideoMsg
         * @instance
         */
        VideoMsg.prototype.url = "";

        /**
         * VideoMsg duration.
         * @member {number} duration
         * @memberof pb.VideoMsg
         * @instance
         */
        VideoMsg.prototype.duration = 0;

        /**
         * VideoMsg size.
         * @member {number} size
         * @memberof pb.VideoMsg
         * @instance
         */
        VideoMsg.prototype.size = 0;

        /**
         * VideoMsg md5.
         * @member {string} md5
         * @memberof pb.VideoMsg
         * @instance
         */
        VideoMsg.prototype.md5 = "";

        /**
         * Creates a new VideoMsg instance using the specified properties.
         * @function create
         * @memberof pb.VideoMsg
         * @static
         * @param {pb.IVideoMsg=} [properties] Properties to set
         * @returns {pb.VideoMsg} VideoMsg instance
         */
        VideoMsg.create = function create(properties) {
            return new VideoMsg(properties);
        };

        /**
         * Encodes the specified VideoMsg message. Does not implicitly {@link pb.VideoMsg.verify|verify} messages.
         * @function encode
         * @memberof pb.VideoMsg
         * @static
         * @param {pb.IVideoMsg} message VideoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VideoMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
            if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.duration);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.size);
            if (message.md5 != null && Object.hasOwnProperty.call(message, "md5"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.md5);
            return writer;
        };

        /**
         * Encodes the specified VideoMsg message, length delimited. Does not implicitly {@link pb.VideoMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.VideoMsg
         * @static
         * @param {pb.IVideoMsg} message VideoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VideoMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VideoMsg message from the specified reader or buffer.
         * @function decode
         * @memberof pb.VideoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.VideoMsg} VideoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VideoMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.VideoMsg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.url = reader.string();
                        break;
                    }
                case 2: {
                        message.duration = reader.uint32();
                        break;
                    }
                case 3: {
                        message.size = reader.int32();
                        break;
                    }
                case 4: {
                        message.md5 = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VideoMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.VideoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.VideoMsg} VideoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VideoMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VideoMsg message.
         * @function verify
         * @memberof pb.VideoMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VideoMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (!$util.isInteger(message.duration))
                    return "duration: integer expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size))
                    return "size: integer expected";
            if (message.md5 != null && message.hasOwnProperty("md5"))
                if (!$util.isString(message.md5))
                    return "md5: string expected";
            return null;
        };

        /**
         * Creates a VideoMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.VideoMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.VideoMsg} VideoMsg
         */
        VideoMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.VideoMsg)
                return object;
            let message = new $root.pb.VideoMsg();
            if (object.url != null)
                message.url = String(object.url);
            if (object.duration != null)
                message.duration = object.duration >>> 0;
            if (object.size != null)
                message.size = object.size | 0;
            if (object.md5 != null)
                message.md5 = String(object.md5);
            return message;
        };

        /**
         * Creates a plain object from a VideoMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.VideoMsg
         * @static
         * @param {pb.VideoMsg} message VideoMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VideoMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.url = "";
                object.duration = 0;
                object.size = 0;
                object.md5 = "";
            }
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.duration != null && message.hasOwnProperty("duration"))
                object.duration = message.duration;
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = message.size;
            if (message.md5 != null && message.hasOwnProperty("md5"))
                object.md5 = message.md5;
            return object;
        };

        /**
         * Converts this VideoMsg to JSON.
         * @function toJSON
         * @memberof pb.VideoMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VideoMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VideoMsg
         * @function getTypeUrl
         * @memberof pb.VideoMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VideoMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.VideoMsg";
        };

        return VideoMsg;
    })();

    pb.FileMsg = (function() {

        /**
         * Properties of a FileMsg.
         * @memberof pb
         * @interface IFileMsg
         * @property {string|null} [url] FileMsg url
         * @property {string|null} [name] FileMsg name
         * @property {number|null} [size] FileMsg size
         * @property {string|null} [md5] FileMsg md5
         */

        /**
         * Constructs a new FileMsg.
         * @memberof pb
         * @classdesc Represents a FileMsg.
         * @implements IFileMsg
         * @constructor
         * @param {pb.IFileMsg=} [properties] Properties to set
         */
        function FileMsg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FileMsg url.
         * @member {string} url
         * @memberof pb.FileMsg
         * @instance
         */
        FileMsg.prototype.url = "";

        /**
         * FileMsg name.
         * @member {string} name
         * @memberof pb.FileMsg
         * @instance
         */
        FileMsg.prototype.name = "";

        /**
         * FileMsg size.
         * @member {number} size
         * @memberof pb.FileMsg
         * @instance
         */
        FileMsg.prototype.size = 0;

        /**
         * FileMsg md5.
         * @member {string} md5
         * @memberof pb.FileMsg
         * @instance
         */
        FileMsg.prototype.md5 = "";

        /**
         * Creates a new FileMsg instance using the specified properties.
         * @function create
         * @memberof pb.FileMsg
         * @static
         * @param {pb.IFileMsg=} [properties] Properties to set
         * @returns {pb.FileMsg} FileMsg instance
         */
        FileMsg.create = function create(properties) {
            return new FileMsg(properties);
        };

        /**
         * Encodes the specified FileMsg message. Does not implicitly {@link pb.FileMsg.verify|verify} messages.
         * @function encode
         * @memberof pb.FileMsg
         * @static
         * @param {pb.IFileMsg} message FileMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.size);
            if (message.md5 != null && Object.hasOwnProperty.call(message, "md5"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.md5);
            return writer;
        };

        /**
         * Encodes the specified FileMsg message, length delimited. Does not implicitly {@link pb.FileMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.FileMsg
         * @static
         * @param {pb.IFileMsg} message FileMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileMsg message from the specified reader or buffer.
         * @function decode
         * @memberof pb.FileMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.FileMsg} FileMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.FileMsg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.url = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.size = reader.int32();
                        break;
                    }
                case 4: {
                        message.md5 = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FileMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.FileMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.FileMsg} FileMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FileMsg message.
         * @function verify
         * @memberof pb.FileMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FileMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size))
                    return "size: integer expected";
            if (message.md5 != null && message.hasOwnProperty("md5"))
                if (!$util.isString(message.md5))
                    return "md5: string expected";
            return null;
        };

        /**
         * Creates a FileMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.FileMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.FileMsg} FileMsg
         */
        FileMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.FileMsg)
                return object;
            let message = new $root.pb.FileMsg();
            if (object.url != null)
                message.url = String(object.url);
            if (object.name != null)
                message.name = String(object.name);
            if (object.size != null)
                message.size = object.size | 0;
            if (object.md5 != null)
                message.md5 = String(object.md5);
            return message;
        };

        /**
         * Creates a plain object from a FileMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.FileMsg
         * @static
         * @param {pb.FileMsg} message FileMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FileMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.url = "";
                object.name = "";
                object.size = 0;
                object.md5 = "";
            }
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = message.size;
            if (message.md5 != null && message.hasOwnProperty("md5"))
                object.md5 = message.md5;
            return object;
        };

        /**
         * Converts this FileMsg to JSON.
         * @function toJSON
         * @memberof pb.FileMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FileMsg
         * @function getTypeUrl
         * @memberof pb.FileMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FileMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.FileMsg";
        };

        return FileMsg;
    })();

    /**
     * Packet enum.
     * @name pb.Packet
     * @enum {number}
     * @property {number} PacketNone=0 PacketNone value
     * @property {number} SystemError=500 SystemError value
     * @property {number} UserNotLogin=403 UserNotLogin value
     * @property {number} Login=1001 Login value
     * @property {number} GetProfile=2001 GetProfile value
     * @property {number} ModifyProfile=2002 ModifyProfile value
     * @property {number} GetUser=3001 GetUser value
     * @property {number} GetFriendList=4001 GetFriendList value
     * @property {number} GetFriend=4002 GetFriend value
     * @property {number} RemoveFriend=4003 RemoveFriend value
     * @property {number} FriendApply=4004 FriendApply value
     * @property {number} FriendHandle=4005 FriendHandle value
     * @property {number} PrivateMsg=8001 PrivateMsg value
     * @property {number} PrivateMsgAck=8002 PrivateMsgAck value
     * @property {number} PrivateMsgRead=8003 PrivateMsgRead value
     * @property {number} PrivateMsgList=8010 PrivateMsgList value
     * @property {number} EventFriendRequest=9001 EventFriendRequest value
     * @property {number} EventFriendChange=9002 EventFriendChange value
     */
    pb.Packet = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PacketNone"] = 0;
        values[valuesById[500] = "SystemError"] = 500;
        values[valuesById[403] = "UserNotLogin"] = 403;
        values[valuesById[1001] = "Login"] = 1001;
        values[valuesById[2001] = "GetProfile"] = 2001;
        values[valuesById[2002] = "ModifyProfile"] = 2002;
        values[valuesById[3001] = "GetUser"] = 3001;
        values[valuesById[4001] = "GetFriendList"] = 4001;
        values[valuesById[4002] = "GetFriend"] = 4002;
        values[valuesById[4003] = "RemoveFriend"] = 4003;
        values[valuesById[4004] = "FriendApply"] = 4004;
        values[valuesById[4005] = "FriendHandle"] = 4005;
        values[valuesById[8001] = "PrivateMsg"] = 8001;
        values[valuesById[8002] = "PrivateMsgAck"] = 8002;
        values[valuesById[8003] = "PrivateMsgRead"] = 8003;
        values[valuesById[8010] = "PrivateMsgList"] = 8010;
        values[valuesById[9001] = "EventFriendRequest"] = 9001;
        values[valuesById[9002] = "EventFriendChange"] = 9002;
        return values;
    })();

    /**
     * RetCode enum.
     * @name pb.RetCode
     * @enum {number}
     * @property {number} Unknown=0 Unknown value
     * @property {number} Success=200 Success value
     * @property {number} Error=500 Error value
     * @property {number} UserNotFound=3001 UserNotFound value
     * @property {number} FriendNotFound=4001 FriendNotFound value
     * @property {number} FriendAlready=4002 FriendAlready value
     * @property {number} NotRecord=1001 NotRecord value
     */
    pb.RetCode = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Unknown"] = 0;
        values[valuesById[200] = "Success"] = 200;
        values[valuesById[500] = "Error"] = 500;
        values[valuesById[3001] = "UserNotFound"] = 3001;
        values[valuesById[4001] = "FriendNotFound"] = 4001;
        values[valuesById[4002] = "FriendAlready"] = 4002;
        values[valuesById[1001] = "NotRecord"] = 1001;
        return values;
    })();

    pb.PacketGetProfileReq = (function() {

        /**
         * Properties of a PacketGetProfileReq.
         * @memberof pb
         * @interface IPacketGetProfileReq
         */

        /**
         * Constructs a new PacketGetProfileReq.
         * @memberof pb
         * @classdesc Represents a PacketGetProfileReq.
         * @implements IPacketGetProfileReq
         * @constructor
         * @param {pb.IPacketGetProfileReq=} [properties] Properties to set
         */
        function PacketGetProfileReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new PacketGetProfileReq instance using the specified properties.
         * @function create
         * @memberof pb.PacketGetProfileReq
         * @static
         * @param {pb.IPacketGetProfileReq=} [properties] Properties to set
         * @returns {pb.PacketGetProfileReq} PacketGetProfileReq instance
         */
        PacketGetProfileReq.create = function create(properties) {
            return new PacketGetProfileReq(properties);
        };

        /**
         * Encodes the specified PacketGetProfileReq message. Does not implicitly {@link pb.PacketGetProfileReq.verify|verify} messages.
         * @function encode
         * @memberof pb.PacketGetProfileReq
         * @static
         * @param {pb.IPacketGetProfileReq} message PacketGetProfileReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketGetProfileReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified PacketGetProfileReq message, length delimited. Does not implicitly {@link pb.PacketGetProfileReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PacketGetProfileReq
         * @static
         * @param {pb.IPacketGetProfileReq} message PacketGetProfileReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketGetProfileReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketGetProfileReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PacketGetProfileReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PacketGetProfileReq} PacketGetProfileReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketGetProfileReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PacketGetProfileReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PacketGetProfileReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PacketGetProfileReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PacketGetProfileReq} PacketGetProfileReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketGetProfileReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketGetProfileReq message.
         * @function verify
         * @memberof pb.PacketGetProfileReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketGetProfileReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a PacketGetProfileReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PacketGetProfileReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PacketGetProfileReq} PacketGetProfileReq
         */
        PacketGetProfileReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PacketGetProfileReq)
                return object;
            return new $root.pb.PacketGetProfileReq();
        };

        /**
         * Creates a plain object from a PacketGetProfileReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PacketGetProfileReq
         * @static
         * @param {pb.PacketGetProfileReq} message PacketGetProfileReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketGetProfileReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this PacketGetProfileReq to JSON.
         * @function toJSON
         * @memberof pb.PacketGetProfileReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketGetProfileReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PacketGetProfileReq
         * @function getTypeUrl
         * @memberof pb.PacketGetProfileReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PacketGetProfileReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PacketGetProfileReq";
        };

        return PacketGetProfileReq;
    })();

    pb.PacketGetProfileRes = (function() {

        /**
         * Properties of a PacketGetProfileRes.
         * @memberof pb
         * @interface IPacketGetProfileRes
         * @property {pb.ISelfUser|null} [user] PacketGetProfileRes user
         */

        /**
         * Constructs a new PacketGetProfileRes.
         * @memberof pb
         * @classdesc Represents a PacketGetProfileRes.
         * @implements IPacketGetProfileRes
         * @constructor
         * @param {pb.IPacketGetProfileRes=} [properties] Properties to set
         */
        function PacketGetProfileRes(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketGetProfileRes user.
         * @member {pb.ISelfUser|null|undefined} user
         * @memberof pb.PacketGetProfileRes
         * @instance
         */
        PacketGetProfileRes.prototype.user = null;

        /**
         * Creates a new PacketGetProfileRes instance using the specified properties.
         * @function create
         * @memberof pb.PacketGetProfileRes
         * @static
         * @param {pb.IPacketGetProfileRes=} [properties] Properties to set
         * @returns {pb.PacketGetProfileRes} PacketGetProfileRes instance
         */
        PacketGetProfileRes.create = function create(properties) {
            return new PacketGetProfileRes(properties);
        };

        /**
         * Encodes the specified PacketGetProfileRes message. Does not implicitly {@link pb.PacketGetProfileRes.verify|verify} messages.
         * @function encode
         * @memberof pb.PacketGetProfileRes
         * @static
         * @param {pb.IPacketGetProfileRes} message PacketGetProfileRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketGetProfileRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.pb.SelfUser.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PacketGetProfileRes message, length delimited. Does not implicitly {@link pb.PacketGetProfileRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PacketGetProfileRes
         * @static
         * @param {pb.IPacketGetProfileRes} message PacketGetProfileRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketGetProfileRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketGetProfileRes message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PacketGetProfileRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PacketGetProfileRes} PacketGetProfileRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketGetProfileRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PacketGetProfileRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.user = $root.pb.SelfUser.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PacketGetProfileRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PacketGetProfileRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PacketGetProfileRes} PacketGetProfileRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketGetProfileRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketGetProfileRes message.
         * @function verify
         * @memberof pb.PacketGetProfileRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketGetProfileRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                let error = $root.pb.SelfUser.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a PacketGetProfileRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PacketGetProfileRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PacketGetProfileRes} PacketGetProfileRes
         */
        PacketGetProfileRes.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PacketGetProfileRes)
                return object;
            let message = new $root.pb.PacketGetProfileRes();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".pb.PacketGetProfileRes.user: object expected");
                message.user = $root.pb.SelfUser.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a PacketGetProfileRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PacketGetProfileRes
         * @static
         * @param {pb.PacketGetProfileRes} message PacketGetProfileRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketGetProfileRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.user = null;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.pb.SelfUser.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this PacketGetProfileRes to JSON.
         * @function toJSON
         * @memberof pb.PacketGetProfileRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketGetProfileRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PacketGetProfileRes
         * @function getTypeUrl
         * @memberof pb.PacketGetProfileRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PacketGetProfileRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PacketGetProfileRes";
        };

        return PacketGetProfileRes;
    })();

    pb.PacketModfiyProfileReq = (function() {

        /**
         * Properties of a PacketModfiyProfileReq.
         * @memberof pb
         * @interface IPacketModfiyProfileReq
         * @property {string|null} [nickName] PacketModfiyProfileReq nickName
         * @property {string|null} [note] PacketModfiyProfileReq note
         * @property {number|null} [age] PacketModfiyProfileReq age
         * @property {number|null} [sex] PacketModfiyProfileReq sex
         */

        /**
         * Constructs a new PacketModfiyProfileReq.
         * @memberof pb
         * @classdesc Represents a PacketModfiyProfileReq.
         * @implements IPacketModfiyProfileReq
         * @constructor
         * @param {pb.IPacketModfiyProfileReq=} [properties] Properties to set
         */
        function PacketModfiyProfileReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketModfiyProfileReq nickName.
         * @member {string} nickName
         * @memberof pb.PacketModfiyProfileReq
         * @instance
         */
        PacketModfiyProfileReq.prototype.nickName = "";

        /**
         * PacketModfiyProfileReq note.
         * @member {string} note
         * @memberof pb.PacketModfiyProfileReq
         * @instance
         */
        PacketModfiyProfileReq.prototype.note = "";

        /**
         * PacketModfiyProfileReq age.
         * @member {number} age
         * @memberof pb.PacketModfiyProfileReq
         * @instance
         */
        PacketModfiyProfileReq.prototype.age = 0;

        /**
         * PacketModfiyProfileReq sex.
         * @member {number} sex
         * @memberof pb.PacketModfiyProfileReq
         * @instance
         */
        PacketModfiyProfileReq.prototype.sex = 0;

        /**
         * Creates a new PacketModfiyProfileReq instance using the specified properties.
         * @function create
         * @memberof pb.PacketModfiyProfileReq
         * @static
         * @param {pb.IPacketModfiyProfileReq=} [properties] Properties to set
         * @returns {pb.PacketModfiyProfileReq} PacketModfiyProfileReq instance
         */
        PacketModfiyProfileReq.create = function create(properties) {
            return new PacketModfiyProfileReq(properties);
        };

        /**
         * Encodes the specified PacketModfiyProfileReq message. Does not implicitly {@link pb.PacketModfiyProfileReq.verify|verify} messages.
         * @function encode
         * @memberof pb.PacketModfiyProfileReq
         * @static
         * @param {pb.IPacketModfiyProfileReq} message PacketModfiyProfileReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketModfiyProfileReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nickName != null && Object.hasOwnProperty.call(message, "nickName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickName);
            if (message.note != null && Object.hasOwnProperty.call(message, "note"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.note);
            if (message.age != null && Object.hasOwnProperty.call(message, "age"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.age);
            if (message.sex != null && Object.hasOwnProperty.call(message, "sex"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.sex);
            return writer;
        };

        /**
         * Encodes the specified PacketModfiyProfileReq message, length delimited. Does not implicitly {@link pb.PacketModfiyProfileReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PacketModfiyProfileReq
         * @static
         * @param {pb.IPacketModfiyProfileReq} message PacketModfiyProfileReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketModfiyProfileReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketModfiyProfileReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PacketModfiyProfileReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PacketModfiyProfileReq} PacketModfiyProfileReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketModfiyProfileReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PacketModfiyProfileReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.nickName = reader.string();
                        break;
                    }
                case 2: {
                        message.note = reader.string();
                        break;
                    }
                case 3: {
                        message.age = reader.uint32();
                        break;
                    }
                case 4: {
                        message.sex = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PacketModfiyProfileReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PacketModfiyProfileReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PacketModfiyProfileReq} PacketModfiyProfileReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketModfiyProfileReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketModfiyProfileReq message.
         * @function verify
         * @memberof pb.PacketModfiyProfileReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketModfiyProfileReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                if (!$util.isString(message.nickName))
                    return "nickName: string expected";
            if (message.note != null && message.hasOwnProperty("note"))
                if (!$util.isString(message.note))
                    return "note: string expected";
            if (message.age != null && message.hasOwnProperty("age"))
                if (!$util.isInteger(message.age))
                    return "age: integer expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            return null;
        };

        /**
         * Creates a PacketModfiyProfileReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PacketModfiyProfileReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PacketModfiyProfileReq} PacketModfiyProfileReq
         */
        PacketModfiyProfileReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PacketModfiyProfileReq)
                return object;
            let message = new $root.pb.PacketModfiyProfileReq();
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.note != null)
                message.note = String(object.note);
            if (object.age != null)
                message.age = object.age >>> 0;
            if (object.sex != null)
                message.sex = object.sex >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a PacketModfiyProfileReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PacketModfiyProfileReq
         * @static
         * @param {pb.PacketModfiyProfileReq} message PacketModfiyProfileReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketModfiyProfileReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.nickName = "";
                object.note = "";
                object.age = 0;
                object.sex = 0;
            }
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.note != null && message.hasOwnProperty("note"))
                object.note = message.note;
            if (message.age != null && message.hasOwnProperty("age"))
                object.age = message.age;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            return object;
        };

        /**
         * Converts this PacketModfiyProfileReq to JSON.
         * @function toJSON
         * @memberof pb.PacketModfiyProfileReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketModfiyProfileReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PacketModfiyProfileReq
         * @function getTypeUrl
         * @memberof pb.PacketModfiyProfileReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PacketModfiyProfileReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PacketModfiyProfileReq";
        };

        return PacketModfiyProfileReq;
    })();

    pb.PacketModfiyProfileRes = (function() {

        /**
         * Properties of a PacketModfiyProfileRes.
         * @memberof pb
         * @interface IPacketModfiyProfileRes
         * @property {pb.RetCode|null} [retCode] PacketModfiyProfileRes retCode
         */

        /**
         * Constructs a new PacketModfiyProfileRes.
         * @memberof pb
         * @classdesc Represents a PacketModfiyProfileRes.
         * @implements IPacketModfiyProfileRes
         * @constructor
         * @param {pb.IPacketModfiyProfileRes=} [properties] Properties to set
         */
        function PacketModfiyProfileRes(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketModfiyProfileRes retCode.
         * @member {pb.RetCode} retCode
         * @memberof pb.PacketModfiyProfileRes
         * @instance
         */
        PacketModfiyProfileRes.prototype.retCode = 0;

        /**
         * Creates a new PacketModfiyProfileRes instance using the specified properties.
         * @function create
         * @memberof pb.PacketModfiyProfileRes
         * @static
         * @param {pb.IPacketModfiyProfileRes=} [properties] Properties to set
         * @returns {pb.PacketModfiyProfileRes} PacketModfiyProfileRes instance
         */
        PacketModfiyProfileRes.create = function create(properties) {
            return new PacketModfiyProfileRes(properties);
        };

        /**
         * Encodes the specified PacketModfiyProfileRes message. Does not implicitly {@link pb.PacketModfiyProfileRes.verify|verify} messages.
         * @function encode
         * @memberof pb.PacketModfiyProfileRes
         * @static
         * @param {pb.IPacketModfiyProfileRes} message PacketModfiyProfileRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketModfiyProfileRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.retCode != null && Object.hasOwnProperty.call(message, "retCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            return writer;
        };

        /**
         * Encodes the specified PacketModfiyProfileRes message, length delimited. Does not implicitly {@link pb.PacketModfiyProfileRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PacketModfiyProfileRes
         * @static
         * @param {pb.IPacketModfiyProfileRes} message PacketModfiyProfileRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketModfiyProfileRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketModfiyProfileRes message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PacketModfiyProfileRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PacketModfiyProfileRes} PacketModfiyProfileRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketModfiyProfileRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PacketModfiyProfileRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.retCode = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PacketModfiyProfileRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PacketModfiyProfileRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PacketModfiyProfileRes} PacketModfiyProfileRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketModfiyProfileRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketModfiyProfileRes message.
         * @function verify
         * @memberof pb.PacketModfiyProfileRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketModfiyProfileRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                switch (message.retCode) {
                default:
                    return "retCode: enum value expected";
                case 0:
                case 200:
                case 500:
                case 3001:
                case 4001:
                case 4002:
                case 1001:
                    break;
                }
            return null;
        };

        /**
         * Creates a PacketModfiyProfileRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PacketModfiyProfileRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PacketModfiyProfileRes} PacketModfiyProfileRes
         */
        PacketModfiyProfileRes.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PacketModfiyProfileRes)
                return object;
            let message = new $root.pb.PacketModfiyProfileRes();
            switch (object.retCode) {
            default:
                if (typeof object.retCode === "number") {
                    message.retCode = object.retCode;
                    break;
                }
                break;
            case "Unknown":
            case 0:
                message.retCode = 0;
                break;
            case "Success":
            case 200:
                message.retCode = 200;
                break;
            case "Error":
            case 500:
                message.retCode = 500;
                break;
            case "UserNotFound":
            case 3001:
                message.retCode = 3001;
                break;
            case "FriendNotFound":
            case 4001:
                message.retCode = 4001;
                break;
            case "FriendAlready":
            case 4002:
                message.retCode = 4002;
                break;
            case "NotRecord":
            case 1001:
                message.retCode = 1001;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a PacketModfiyProfileRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PacketModfiyProfileRes
         * @static
         * @param {pb.PacketModfiyProfileRes} message PacketModfiyProfileRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketModfiyProfileRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.retCode = options.enums === String ? "Unknown" : 0;
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = options.enums === String ? $root.pb.RetCode[message.retCode] === undefined ? message.retCode : $root.pb.RetCode[message.retCode] : message.retCode;
            return object;
        };

        /**
         * Converts this PacketModfiyProfileRes to JSON.
         * @function toJSON
         * @memberof pb.PacketModfiyProfileRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketModfiyProfileRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PacketModfiyProfileRes
         * @function getTypeUrl
         * @memberof pb.PacketModfiyProfileRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PacketModfiyProfileRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PacketModfiyProfileRes";
        };

        return PacketModfiyProfileRes;
    })();

    pb.PacketGetUserInfoReq = (function() {

        /**
         * Properties of a PacketGetUserInfoReq.
         * @memberof pb
         * @interface IPacketGetUserInfoReq
         * @property {string|null} [username] PacketGetUserInfoReq username
         */

        /**
         * Constructs a new PacketGetUserInfoReq.
         * @memberof pb
         * @classdesc Represents a PacketGetUserInfoReq.
         * @implements IPacketGetUserInfoReq
         * @constructor
         * @param {pb.IPacketGetUserInfoReq=} [properties] Properties to set
         */
        function PacketGetUserInfoReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketGetUserInfoReq username.
         * @member {string} username
         * @memberof pb.PacketGetUserInfoReq
         * @instance
         */
        PacketGetUserInfoReq.prototype.username = "";

        /**
         * Creates a new PacketGetUserInfoReq instance using the specified properties.
         * @function create
         * @memberof pb.PacketGetUserInfoReq
         * @static
         * @param {pb.IPacketGetUserInfoReq=} [properties] Properties to set
         * @returns {pb.PacketGetUserInfoReq} PacketGetUserInfoReq instance
         */
        PacketGetUserInfoReq.create = function create(properties) {
            return new PacketGetUserInfoReq(properties);
        };

        /**
         * Encodes the specified PacketGetUserInfoReq message. Does not implicitly {@link pb.PacketGetUserInfoReq.verify|verify} messages.
         * @function encode
         * @memberof pb.PacketGetUserInfoReq
         * @static
         * @param {pb.IPacketGetUserInfoReq} message PacketGetUserInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketGetUserInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            return writer;
        };

        /**
         * Encodes the specified PacketGetUserInfoReq message, length delimited. Does not implicitly {@link pb.PacketGetUserInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PacketGetUserInfoReq
         * @static
         * @param {pb.IPacketGetUserInfoReq} message PacketGetUserInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketGetUserInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketGetUserInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PacketGetUserInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PacketGetUserInfoReq} PacketGetUserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketGetUserInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PacketGetUserInfoReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.username = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PacketGetUserInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PacketGetUserInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PacketGetUserInfoReq} PacketGetUserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketGetUserInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketGetUserInfoReq message.
         * @function verify
         * @memberof pb.PacketGetUserInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketGetUserInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            return null;
        };

        /**
         * Creates a PacketGetUserInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PacketGetUserInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PacketGetUserInfoReq} PacketGetUserInfoReq
         */
        PacketGetUserInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PacketGetUserInfoReq)
                return object;
            let message = new $root.pb.PacketGetUserInfoReq();
            if (object.username != null)
                message.username = String(object.username);
            return message;
        };

        /**
         * Creates a plain object from a PacketGetUserInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PacketGetUserInfoReq
         * @static
         * @param {pb.PacketGetUserInfoReq} message PacketGetUserInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketGetUserInfoReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.username = "";
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            return object;
        };

        /**
         * Converts this PacketGetUserInfoReq to JSON.
         * @function toJSON
         * @memberof pb.PacketGetUserInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketGetUserInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PacketGetUserInfoReq
         * @function getTypeUrl
         * @memberof pb.PacketGetUserInfoReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PacketGetUserInfoReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PacketGetUserInfoReq";
        };

        return PacketGetUserInfoReq;
    })();

    pb.PacketGetUserInfoResp = (function() {

        /**
         * Properties of a PacketGetUserInfoResp.
         * @memberof pb
         * @interface IPacketGetUserInfoResp
         * @property {pb.RetCode|null} [retCode] PacketGetUserInfoResp retCode
         * @property {pb.IUser|null} [user] PacketGetUserInfoResp user
         */

        /**
         * Constructs a new PacketGetUserInfoResp.
         * @memberof pb
         * @classdesc Represents a PacketGetUserInfoResp.
         * @implements IPacketGetUserInfoResp
         * @constructor
         * @param {pb.IPacketGetUserInfoResp=} [properties] Properties to set
         */
        function PacketGetUserInfoResp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketGetUserInfoResp retCode.
         * @member {pb.RetCode} retCode
         * @memberof pb.PacketGetUserInfoResp
         * @instance
         */
        PacketGetUserInfoResp.prototype.retCode = 0;

        /**
         * PacketGetUserInfoResp user.
         * @member {pb.IUser|null|undefined} user
         * @memberof pb.PacketGetUserInfoResp
         * @instance
         */
        PacketGetUserInfoResp.prototype.user = null;

        /**
         * Creates a new PacketGetUserInfoResp instance using the specified properties.
         * @function create
         * @memberof pb.PacketGetUserInfoResp
         * @static
         * @param {pb.IPacketGetUserInfoResp=} [properties] Properties to set
         * @returns {pb.PacketGetUserInfoResp} PacketGetUserInfoResp instance
         */
        PacketGetUserInfoResp.create = function create(properties) {
            return new PacketGetUserInfoResp(properties);
        };

        /**
         * Encodes the specified PacketGetUserInfoResp message. Does not implicitly {@link pb.PacketGetUserInfoResp.verify|verify} messages.
         * @function encode
         * @memberof pb.PacketGetUserInfoResp
         * @static
         * @param {pb.IPacketGetUserInfoResp} message PacketGetUserInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketGetUserInfoResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.retCode != null && Object.hasOwnProperty.call(message, "retCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.pb.User.encode(message.user, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PacketGetUserInfoResp message, length delimited. Does not implicitly {@link pb.PacketGetUserInfoResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PacketGetUserInfoResp
         * @static
         * @param {pb.IPacketGetUserInfoResp} message PacketGetUserInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketGetUserInfoResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketGetUserInfoResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PacketGetUserInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PacketGetUserInfoResp} PacketGetUserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketGetUserInfoResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PacketGetUserInfoResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.retCode = reader.int32();
                        break;
                    }
                case 2: {
                        message.user = $root.pb.User.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PacketGetUserInfoResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PacketGetUserInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PacketGetUserInfoResp} PacketGetUserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketGetUserInfoResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketGetUserInfoResp message.
         * @function verify
         * @memberof pb.PacketGetUserInfoResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketGetUserInfoResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                switch (message.retCode) {
                default:
                    return "retCode: enum value expected";
                case 0:
                case 200:
                case 500:
                case 3001:
                case 4001:
                case 4002:
                case 1001:
                    break;
                }
            if (message.user != null && message.hasOwnProperty("user")) {
                let error = $root.pb.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a PacketGetUserInfoResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PacketGetUserInfoResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PacketGetUserInfoResp} PacketGetUserInfoResp
         */
        PacketGetUserInfoResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PacketGetUserInfoResp)
                return object;
            let message = new $root.pb.PacketGetUserInfoResp();
            switch (object.retCode) {
            default:
                if (typeof object.retCode === "number") {
                    message.retCode = object.retCode;
                    break;
                }
                break;
            case "Unknown":
            case 0:
                message.retCode = 0;
                break;
            case "Success":
            case 200:
                message.retCode = 200;
                break;
            case "Error":
            case 500:
                message.retCode = 500;
                break;
            case "UserNotFound":
            case 3001:
                message.retCode = 3001;
                break;
            case "FriendNotFound":
            case 4001:
                message.retCode = 4001;
                break;
            case "FriendAlready":
            case 4002:
                message.retCode = 4002;
                break;
            case "NotRecord":
            case 1001:
                message.retCode = 1001;
                break;
            }
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".pb.PacketGetUserInfoResp.user: object expected");
                message.user = $root.pb.User.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a PacketGetUserInfoResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PacketGetUserInfoResp
         * @static
         * @param {pb.PacketGetUserInfoResp} message PacketGetUserInfoResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketGetUserInfoResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.retCode = options.enums === String ? "Unknown" : 0;
                object.user = null;
            }
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = options.enums === String ? $root.pb.RetCode[message.retCode] === undefined ? message.retCode : $root.pb.RetCode[message.retCode] : message.retCode;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.pb.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this PacketGetUserInfoResp to JSON.
         * @function toJSON
         * @memberof pb.PacketGetUserInfoResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketGetUserInfoResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PacketGetUserInfoResp
         * @function getTypeUrl
         * @memberof pb.PacketGetUserInfoResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PacketGetUserInfoResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PacketGetUserInfoResp";
        };

        return PacketGetUserInfoResp;
    })();

    return pb;
})();

export { $root as default };
