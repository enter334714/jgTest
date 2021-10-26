/******/(function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/var installedModules = {};
    /******/
    /******/ // The require function
    /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
            /******/return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/__webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/__webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
            /******/
        }
        /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/__webpack_require__.r = function (exports) {
        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/
        }
        /******/Object.defineProperty(exports, '__esModule', { value: true });
        /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/__webpack_require__.t = function (value, mode) {
        /******/if (mode & 1) value = __webpack_require__(value);
        /******/if (mode & 8) return value;
        /******/if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/var ns = Object.create(null);
        /******/__webpack_require__.r(ns);
        /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
            return value[key];
        }.bind(null, key));
        /******/return ns;
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
            return module['default'];
        } :
        /******/function getModuleExports() {
            return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/__webpack_require__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/return __webpack_require__(__webpack_require__.s = 28);
    /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

    /**
     * Created by zhangmiao on 2018/3/12.
     */
    var util = module.exports;

    var roots = __webpack_require__(16);
    util.LongBits = __webpack_require__(11);
    util.Long = __webpack_require__(29);
    util.pool = __webpack_require__(30);
    util.float = __webpack_require__(31);
    util.asPromise = __webpack_require__(32);
    util.EventEmitter = __webpack_require__(33);
    util.path = __webpack_require__(34);
    util.base64 = __webpack_require__(17);
    util.utf8 = __webpack_require__(8);

    util.compareFieldsById = function compareFieldsById(a, b) {
        return a.id - b.id;
    };

    util.toArray = function toArray(object) {
        if (object) {
            var keys = Object.keys(object),
                array = new Array(keys.length),
                index = 0;
            while (index < keys.length) array[index] = object[keys[index++]];
            return array;
        }
        return [];
    };

    util.toObject = function toObject(array) {
        var object = {},
            index = 0;
        while (index < array.length) {
            var key = array[index++],
                val = array[index++];
            if (val !== undefined) object[key] = val;
        }
        return object;
    };

    util.isString = function isString(value) {
        return typeof value === "string" || value instanceof String;
    };

    var safePropBackslashRe = /\\/g,
        safePropQuoteRe = /"/g;

    /**
     * Tests whether the specified name is a reserved word in JS.
     * @param {string} name Name to test
     * @returns {boolean} `true` if reserved, otherwise `false`
     */
    util.isReserved = function isReserved(name) {
        return (/^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(name)
        );
    };

    util.isObject = function isObject(value) {
        return value && typeof value === "object";
    };

    util.Array = typeof Uint8Array !== "undefined" ? Uint8Array /* istanbul ignore next */ : Array;

    util.oneOfGetter = function getOneOf(fieldNames) {
        var fieldMap = {};
        for (var i = 0; i < fieldNames.length; ++i) fieldMap[fieldNames[i]] = 1;

        /**
         * @returns {string|undefined} Set field name, if any
         * @this Object
         * @ignore
         */
        return function () {
            // eslint-disable-line consistent-return
            for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i) if (fieldMap[keys[i]] === 1 && this[keys[i]] !== undefined && this[keys[i]] !== null) return keys[i];
        };
    };

    util.oneOfSetter = function setOneOf(fieldNames) {

        /**
         * @param {string} name Field name
         * @returns {undefined}
         * @this Object
         * @ignore
         */
        return function (name) {
            for (var i = 0; i < fieldNames.length; ++i) if (fieldNames[i] !== name) delete this[/*"_"+*/fieldNames[i]]; //设置为私有属性
        };
    };

    util.merge = function merge(dst, src, ifNotSet) {
        // used by converters
        for (var keys = Object.keys(src), i = 0; i < keys.length; ++i) if (dst[keys[i]] === undefined || !ifNotSet) dst[keys[i]] = src[keys[i]];
        return dst;
    };

    util.decorateType = function decorateType(ctor, typeName) {

        /* istanbul ignore if */
        if (ctor.$type) {
            if (typeName && ctor.$type.name !== typeName) {
                util.decorateRoot.remove(ctor.$type);
                ctor.$type.name = typeName;
                util.decorateRoot.add(ctor.$type);
            }
            return ctor.$type;
        }

        /* istanbul ignore next */
        if (!Type) Type = __webpack_require__(3);

        var type = new Type(typeName || ctor.name);
        util.decorateRoot.add(type);
        type.ctor = ctor; // sets up .encode, .decode etc.
        Object.defineProperty(ctor, "$type", { value: type, enumerable: false });
        Object.defineProperty(ctor.prototype, "$type", { value: type, enumerable: false });
        return type;
    };

    util.emptyArray = Object.freeze ? Object.freeze([]) : /* istanbul ignore next */[]; // used on prototypes

    util.emptyObject = Object.freeze ? Object.freeze({}) : /* istanbul ignore next */{}; // used on prototypes

    util.longToHash = function longToHash(value) {
        return value ? util.LongBits.from(value).toHash() : util.LongBits.zeroHash;
    };

    util.copy = function (obj) {
        if (typeof obj != 'object') {
            return obj;
        }
        var newObj = {};
        for (var attr in obj) {
            newObj[attr] = obj[attr];
        }
        return newObj;
    };

    function deepCopy(obj) {
        if (typeof obj != 'object') {
            return obj;
        }
        var newobj = {};
        for (var attr in obj) {
            newobj[attr] = deepCopy(obj[attr]);
        }
        return newobj;
    }

    util.deepCopy = deepCopy;

    util.ProtocolError = function newError(name) {

        function CustomError(message, properties) {

            if (!(this instanceof CustomError)) return new CustomError(message, properties);

            // Error.call(this, message);
            // ^ just returns a new error instance because the ctor can be called as a function

            Object.defineProperty(this, "message", { get: function () {
                    return message;
                } });

            /* istanbul ignore next */
            if (Error.captureStackTrace) // node
                Error.captureStackTrace(this, CustomError);else Object.defineProperty(this, "stack", { value: new Error().stack || "" });

            if (properties) merge(this, properties);
        }

        (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;

        Object.defineProperty(CustomError.prototype, "name", { get: function () {
                return name;
            } });

        CustomError.prototype.toString = function toString() {
            return this.name + ": " + this.message;
        };

        return CustomError;
    };

    util.toJSONOptions = {
        longs: String,
        enums: String,
        bytes: String,
        json: true
    };

    util.Buffer = function () {
        return null;
    }();

    util.newBuffer = function newBuffer(sizeOrArray) {
        /* istanbul ignore next */
        return typeof sizeOrArray === "number" ? new util.Array(sizeOrArray) : typeof Uint8Array === "undefined" ? sizeOrArray : new Uint8Array(sizeOrArray);
    };

    util.stringToBytes = function stringToBytes(str) {
        var bytes = [];
        var len, c;
        len = str.length;
        for (var i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if (c >= 0x010000 && c <= 0x10FFFF) {
                bytes.push(c >> 18 & 0x07 | 0xF0);
                bytes.push(c >> 12 & 0x3F | 0x80);
                bytes.push(c >> 6 & 0x3F | 0x80);
                bytes.push(c & 0x3F | 0x80);
            } else if (c >= 0x000800 && c <= 0x00FFFF) {
                bytes.push(c >> 12 & 0x0F | 0xE0);
                bytes.push(c >> 6 & 0x3F | 0x80);
                bytes.push(c & 0x3F | 0x80);
            } else if (c >= 0x000080 && c <= 0x0007FF) {
                bytes.push(c >> 6 & 0x1F | 0xC0);
                bytes.push(c & 0x3F | 0x80);
            } else {
                bytes.push(c & 0xFF);
            }
        }
        return bytes;
    };

    util.byteToString = function byteToString(arr) {
        if (typeof arr === 'string') {
            return arr;
        }
        var str = '',
            _arr = arr;
        for (var i = 0; i < _arr.length; i++) {
            var one = _arr[i].toString(2),
                v = one.match(/^1+?(?=0)/);
            if (v && one.length == 8) {
                var bytesLength = v[0].length;
                var store = _arr[i].toString(2).slice(7 - bytesLength);
                for (var st = 1; st < bytesLength; st++) {
                    store += _arr[st + i].toString(2).slice(2);
                }
                str += String.fromCharCode(parseInt(store, 2));
                i += bytesLength - 1;
            } else {
                str += String.fromCharCode(_arr[i]);
            }
        }
        return str;
    };

    util.isInteger = Number.isInteger || /* istanbul ignore next */function isInteger(value) {
        return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    };

    Object.defineProperty(util, "decorateRoot", {
        get: function () {
            return roots["decorated"] || (roots["decorated"] = new (__webpack_require__(9))());
        }
    });

    /***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

    /**
     * Created by zhangmiao on 2018/3/12.
     */

    module.exports = Enum;

    var ReflectionObject = __webpack_require__(4);

    ((Enum.prototype = Object.create(ReflectionObject.prototype)).constructor = Enum).className = "Enum";
    var Namespace = __webpack_require__(6);

    function Enum(name, values, options, comment, comments) {
        ReflectionObject.call(this, name, options);

        if (values && typeof values !== "object") throw TypeError("values must be an object");

        /**
         * Enum values by id.
         * @type {Object.<number,string>}
         */
        this.valuesById = {};

        /**
         * Enum values by name.
         * @type {Object.<string,number>}
         */
        this.values = Object.create(this.valuesById); // toJSON, marker

        /**
         * Enum comment text.
         * @type {string|null}
         */
        this.comment = comment;

        /**
         * Value comment texts, if any.
         * @type {Object.<string,string>}
         */
        this.comments = comments || {};

        /**
         * Reserved ranges, if any.
         * @type {Array.<number[]|string>}
         */
        this.reserved = undefined; // toJSON

        // Note that values inherit valuesById on their prototype which makes them a TypeScript-
        // compatible enum. This is used by pbts to write actual enum definitions that work for
        // static and reflection code alike instead of emitting generic object definitions.

        if (values) for (var keys = Object.keys(values), i = 0; i < keys.length; ++i) if (typeof values[keys[i]] === "number") // use forward entries only
            this.valuesById[this.values[keys[i]] = values[keys[i]]] = keys[i];
    }

    /**
     * Enum descriptor.
     * @interface IEnum
     * @property {Object.<string,number>} values Enum values
     * @property {Object.<string,*>} [options] Enum options
     */

    /**
     * Constructs an enum from an enum descriptor.
     * @param {string} name Enum name
     * @param {IEnum} json Enum descriptor
     * @returns {Enum} Created enum
     * @throws {TypeError} If arguments are invalid
     */
    Enum.fromJSON = function fromJSON(name, json) {
        var enm = new Enum(name, json.values, json.options, json.comment, json.comments);
        enm.reserved = json.reserved;
        return enm;
    };

    /**
     * Converts this enum to an enum descriptor.
     * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
     * @returns {IEnum} Enum descriptor
     */
    Enum.prototype.toJSON = function toJSON(toJSONOptions) {
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", keepComments ? this.comment : undefined, "comments", keepComments ? this.comments : undefined]);
    };

    /**
     * Adds a value to this enum.
     * @param {string} name Value name
     * @param {number} id Value id
     * @param {string} [comment] Comment, if any
     * @returns {Enum} `this`
     * @throws {TypeError} If arguments are invalid
     * @throws {Error} If there is already a value with this name or id
     */
    Enum.prototype.add = function add(name, id, comment) {
        // utilized by the parser but not by .fromJSON

        if (!util.isString(name)) throw TypeError("name must be a string");

        if (!util.isInteger(id)) throw TypeError("id must be an integer");

        if (this.values[name] !== undefined) throw Error("duplicate name '" + name + "' in " + this);

        if (this.isReservedId(id)) throw Error("id " + id + " is reserved in " + this);

        if (this.isReservedName(name)) throw Error("name '" + name + "' is reserved in " + this);

        if (this.valuesById[id] !== undefined) {
            if (!(this.options && this.options.allow_alias)) throw Error("duplicate id " + id + " in " + this);
            this.values[name] = id;
        } else this.valuesById[this.values[name] = id] = name;

        this.comments[name] = comment || null;
        return this;
    };

    /**
     * Removes a value from this enum
     * @param {string} name Value name
     * @returns {Enum} `this`
     * @throws {TypeError} If arguments are invalid
     * @throws {Error} If `name` is not a name of this enum
     */
    Enum.prototype.remove = function remove(name) {

        if (!util.isString(name)) throw TypeError("name must be a string");

        var val = this.values[name];
        if (val == null) throw Error("name '" + name + "' does not exist in " + this);

        delete this.valuesById[val];
        delete this.values[name];
        delete this.comments[name];

        return this;
    };

    /**
     * Tests if the specified id is reserved.
     * @param {number} id Id to test
     * @returns {boolean} `true` if reserved, otherwise `false`
     */
    Enum.prototype.isReservedId = function isReservedId(id) {
        return Namespace.isReservedId(this.reserved, id);
    };

    /**
     * Tests if the specified name is reserved.
     * @param {string} name Name to test
     * @returns {boolean} `true` if reserved, otherwise `false`
     */
    Enum.prototype.isReservedName = function isReservedName(name) {
        return Namespace.isReservedName(this.reserved, name);
    };

    /***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

    /**
     * Created by zhangmiao on 2018/3/12.
     */

    module.exports = Field;

    // extends ReflectionObject
    var ReflectionObject = __webpack_require__(4);
    ((Field.prototype = Object.create(ReflectionObject.prototype)).constructor = Field).className = "Field";

    var Enum, types, util;

    var Type; // cyclic

    var ruleRe = /^required|optional|repeated$/;

    /**
     * Constructs a new message field instance. Note that {@link MapField|map fields} have their own class.
     * @name Field
     * @classdesc Reflected message field.
     * @extends FieldBase
     * @constructor
     * @param {string} name Unique name within its namespace
     * @param {number} id Unique id within its namespace
     * @param {string} type Value type
     * @param {string|Object.<string,*>} [rule="optional"] Field rule
     * @param {string|Object.<string,*>} [extend] Extended type if different from parent
     * @param {Object.<string,*>} [options] Declared options
     */

    /**
     * Constructs a field from a field descriptor.
     * @param {string} name Field name
     * @param {IField} json Field descriptor
     * @returns {Field} Created field
     * @throws {TypeError} If arguments are invalid
     */
    Field.fromJSON = function fromJSON(name, json) {
        return new Field(name, json.id, json.type, json.rule, json.extend, json.options, json.comment);
    };

    /**
     * Not an actual constructor. Use {@link Field} instead.
     * @classdesc Base class of all reflected message fields. This is not an actual class but here for the sake of having consistent type definitions.
     * @exports FieldBase
     * @extends ReflectionObject
     * @constructor
     * @param {string} name Unique name within its namespace
     * @param {number} id Unique id within its namespace
     * @param {string} type Value type
     * @param {string|Object.<string,*>} [rule="optional"] Field rule
     * @param {string|Object.<string,*>} [extend] Extended type if different from parent
     * @param {Object.<string,*>} [options] Declared options
     * @param {string} [comment] Comment associated with this field
     */
    function Field(name, id, type, rule, extend, options, comment) {

        if (util.isObject(rule)) {
            comment = extend;
            options = rule;
            rule = extend = undefined;
        } else if (util.isObject(extend)) {
            comment = options;
            options = extend;
            extend = undefined;
        }

        ReflectionObject.call(this, name, options);

        if (!util.isInteger(id) || id < 0) throw TypeError("id must be a non-negative integer");

        if (!util.isString(type)) throw TypeError("type must be a string");

        if (rule !== undefined && !ruleRe.test(rule = rule.toString().toLowerCase())) throw TypeError("rule must be a string rule");

        if (extend !== undefined && !util.isString(extend)) throw TypeError("extend must be a string");

        /**
         * Field rule, if any.
         * @type {string|undefined}
         */
        this.rule = rule && rule !== "optional" ? rule : undefined; // toJSON

        /**
         * Field type.
         * @type {string}
         */
        this.type = type; // toJSON

        /**
         * Unique field id.
         * @type {number}
         */
        this.id = id; // toJSON, marker

        /**
         * Extended type if different from parent.
         * @type {string|undefined}
         */
        this.extend = extend || undefined; // toJSON

        /**
         * Whether this field is required.
         * @type {boolean}
         */
        this.required = rule === "required";

        /**
         * Whether this field is optional.
         * @type {boolean}
         */
        this.optional = !this.required;

        /**
         * Whether this field is repeated.
         * @type {boolean}
         */
        this.repeated = rule === "repeated";

        /**
         * Whether this field is a map or not.
         * @type {boolean}
         */
        this.map = false;

        /**
         * Message this field belongs to.
         * @type {Type|null}
         */
        this.message = null;

        /**
         * OneOf this field belongs to, if any,
         * @type {OneOf|null}
         */
        this.partOf = null;

        /**
         * The field type's default value.
         * @type {*}
         */
        this.typeDefault = null;

        /**
         * The field's default value on prototypes.
         * @type {*}
         */
        this.defaultValue = null;

        /**
         * Whether this field's value should be treated as a long.
         * @type {boolean}
         */
        this.long = util.Long ? types.long[type] !== undefined : /* istanbul ignore next */false;

        /**
         * Whether this field's value is a buffer.
         * @type {boolean}
         */
        this.bytes = type === "bytes";

        /**
         * Resolved type if not a basic type.
         * @type {Type|Enum|null}
         */
        this.resolvedType = null;

        /**
         * Sister-field within the extended type if a declaring extension field.
         * @type {Field|null}
         */
        this.extensionField = null;

        /**
         * Sister-field within the declaring namespace if an extended field.
         * @type {Field|null}
         */
        this.declaringField = null;

        /**
         * Internally remembers whether this field is packed.
         * @type {boolean|null}
         * @private
         */
        this._packed = null;

        /**
         * Comment for this field.
         * @type {string|null}
         */
        this.comment = comment;
    }

    /**
     * Determines whether this field is packed. Only relevant when repeated and working with proto2.
     * @name Field#packed
     * @type {boolean}
     * @readonly
     */
    Object.defineProperty(Field.prototype, "packed", {
        get: function () {
            // defaults to packed=true if not explicity set to false
            if (this._packed === null) this._packed = this.getOption("packed") !== false;
            return this._packed;
        }
    });

    /**
     * @override
     */
    Field.prototype.setOption = function setOption(name, value, ifNotSet) {
        if (name === "packed") // clear cached before setting
            this._packed = null;
        return ReflectionObject.prototype.setOption.call(this, name, value, ifNotSet);
    };

    /**
     * Field descriptor.
     * @interface IField
     * @property {string} [rule="optional"] Field rule
     * @property {string} type Field type
     * @property {number} id Field id
     * @property {Object.<string,*>} [options] Field options
     */

    /**
     * Extension field descriptor.
     * @interface IExtensionField
     * @extends IField
     * @property {string} extend Extended type
     */

    /**
     * Converts this field to a field descriptor.
     * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
     * @returns {IField} Field descriptor
     */
    Field.prototype.toJSON = function toJSON(toJSONOptions) {
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject(["rule", this.rule !== "optional" && this.rule || undefined, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", keepComments ? this.comment : undefined]);
    };

    /**
     * Resolves this field's type references.
     * @returns {Field} `this`
     * @throws {Error} If any reference cannot be resolved
     */
    Field.prototype.resolve = function resolve() {

        if (this.resolved) return this;

        if ((this.typeDefault = types.defaults[this.type]) === undefined) {
            // if not a basic type, resolve it
            this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
            if (this.resolvedType instanceof Type) this.typeDefault = null;else // instanceof Enum
                this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]; // first defined
        }

        // use explicitly set default value if present
        if (this.options && this.options["default"] != null) {
            this.typeDefault = this.options["default"];
            if (this.resolvedType instanceof Enum && typeof this.typeDefault === "string") this.typeDefault = this.resolvedType.values[this.typeDefault];
        }

        // remove unnecessary options
        if (this.options) {
            if (this.options.packed === true || this.options.packed !== undefined && this.resolvedType && !(this.resolvedType instanceof Enum)) delete this.options.packed;
            if (!Object.keys(this.options).length) this.options = undefined;
        }

        // convert to internal data type if necesssary
        if (this.long) {
            this.typeDefault = util.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u");

            /* istanbul ignore else */
            if (Object.freeze) Object.freeze(this.typeDefault); // long instances are meant to be immutable anyway (i.e. use small int cache that even requires it)
        } else if (this.bytes && typeof this.typeDefault === "string") {
            var buf;
            //if (util.base64.test(this.typeDefault))
            //    util.base64.decode(this.typeDefault, buf = util.newBuffer(util.base64.length(this.typeDefault)), 0);
            //else
            util.utf8.write(this.typeDefault, buf = util.newBuffer(util.utf8.length(this.typeDefault)), 0);
            this.typeDefault = buf;
        }

        // take special care of maps and repeated fields
        if (this.map) this.defaultValue = util.emptyObject;else if (this.repeated) this.defaultValue = util.emptyArray;else this.defaultValue = this.typeDefault;

        // ensure proper value on prototype
        if (this.parent instanceof Type) {
            this.parent.ctor.prototype[this.name] = this.defaultValue;
        }
        return ReflectionObject.prototype.resolve.call(this);
    };

    /**
     * Decorator function as returned by {@link Field.d} and {@link MapField.d} (TypeScript).
     * @typedef FieldDecorator
     * @type {function}
     * @param {Object} prototype Target prototype
     * @param {string} fieldName Field name
     * @returns {undefined}
     */

    /**
     * Field decorator (TypeScript).
     * @name Field.d
     * @function
     * @param {number} fieldId Field id
     * @param {"double"|"float"|"int32"|"uint32"|"sint32"|"fixed32"|"sfixed32"|"int64"|"uint64"|"sint64"|"fixed64"|"sfixed64"|"string"|"bool"|"bytes"|Object} fieldType Field type
     * @param {"optional"|"required"|"repeated"} [fieldRule="optional"] Field rule
     * @param {T} [defaultValue] Default value
     * @returns {FieldDecorator} Decorator function
     * @template T extends number | number[] | Long | Long[] | string | string[] | boolean | boolean[] | Uint8Array | Uint8Array[] | Buffer | Buffer[]
     */
    Field.d = function decorateField(fieldId, fieldType, fieldRule, defaultValue) {

        // submessage: decorate the submessage and use its name as the type
        if (typeof fieldType === "function") fieldType = util.decorateType(fieldType).name;

        // enum reference: create a reflected copy of the enum and keep reuseing it
        else if (fieldType && typeof fieldType === "object") fieldType = util.decorateEnum(fieldType).name;

        return function fieldDecorator(prototype, fieldName) {
            util.decorateType(prototype.constructor).add(new Field(fieldName, fieldId, fieldType, fieldRule, { "default": defaultValue }));
        };
    };

    /**
     * Field decorator (TypeScript).
     * @name Field.d
     * @function
     * @param {number} fieldId Field id
     * @param {Constructor<T>|string} fieldType Field type
     * @param {"optional"|"required"|"repeated"} [fieldRule="optional"] Field rule
     * @returns {FieldDecorator} Decorator function
     * @template T extends Message<T>
     * @variation 2
     */
    // like Field.d but without a default value

    Field._configure = function configure() {
        Type = __webpack_require__(3);

        Enum = __webpack_require__(1);
        types = __webpack_require__(5);
        util = __webpack_require__(0);
    };

    /***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

    /**
     * Created by zhangmiao on 2018/3/13.
     */

    module.exports = Type;

    var Namespace = __webpack_require__(6);
    ((Type.prototype = Object.create(Namespace.prototype)).constructor = Type).className = "Type";

    var Enum, Field, Message, OneOf, Writer, Reader, util, verifier, encoder, decoder, Service, wrappers, converter, MapField;

    function Type(name, options) {
        Namespace.call(this, name, options);

        /**
         * Message fields.
         * @type {Object.<string,Field>}
         */
        this.fields = {}; // toJSON, marker

        /**
         * Oneofs declared within this namespace, if any.
         * @type {Object.<string,OneOf>}
         */
        this.oneofs = undefined; // toJSON

        /**
         * Extension ranges, if any.
         * @type {number[][]}
         */
        this.extensions = undefined; // toJSON

        /**
         * Reserved ranges, if any.
         * @type {Array.<number[]|string>}
         */
        this.reserved = undefined; // toJSON

        /*?
         * Whether this type is a legacy group.
         * @type {boolean|undefined}
         */
        this.group = undefined; // toJSON 这个可能不需要,因为不支持

        /**
         * Cached fields by id.
         * @type {Object.<number,Field>|null}
         * @private
         */
        this._fieldsById = null;

        /**
         * Cached fields as an array.
         * @type {Field[]|null}
         * @private
         */
        this._fieldsArray = null;

        /**
         * Cached oneofs as an array.
         * @type {OneOf[]|null}
         * @private
         */
        this._oneofsArray = null;

        /**
         * Cached constructor.
         * @type {Constructor<{}>}
         * @private
         */
        this._ctor = null;
    }

    Object.defineProperties(Type.prototype, {

        /**
         * Message fields by id.
         * @name Type#fieldsById
         * @type {Object.<number,Field>}
         * @readonly
         */
        fieldsById: {
            get: function () {

                /* istanbul ignore if */
                if (this._fieldsById) return this._fieldsById;

                this._fieldsById = {};
                for (var names = Object.keys(this.fields), i = 0; i < names.length; ++i) {
                    var field = this.fields[names[i]],
                        id = field.id;

                    /* istanbul ignore if */
                    if (this._fieldsById[id]) throw Error("duplicate id " + id + " in " + this);

                    this._fieldsById[id] = field;
                }
                return this._fieldsById;
            }
        },

        /**
         * Fields of this message as an array for iteration.
         * @name Type#fieldsArray
         * @type {Field[]}
         * @readonly
         */
        fieldsArray: {
            get: function () {
                return this._fieldsArray || (this._fieldsArray = util.toArray(this.fields));
            }
        },

        /**
         * Oneofs of this message as an array for iteration.
         * @name Type#oneofsArray
         * @type {OneOf[]}
         * @readonly
         */
        oneofsArray: {
            get: function () {
                return this._oneofsArray || (this._oneofsArray = util.toArray(this.oneofs));
            }
        },

        /**
         * The registered constructor, if any registered, otherwise a generic constructor.
         * Assigning a function replaces the internal constructor. If the function does not extend {@link Message} yet, its prototype will be setup accordingly and static methods will be populated. If it already extends {@link Message}, it will just replace the internal constructor.
         * @name Type#ctor
         * @type {Constructor<{}>}
         */
        ctor: {
            get: function () {
                return this._ctor || (this.ctor = Type.generateConstructor(this));
            },
            set: function (ctor) {

                // Ensure proper prototype
                var prototype = ctor.prototype;
                if (!(prototype instanceof Message)) {
                    (ctor.prototype = new Message()).constructor = ctor;
                    util.merge(ctor.prototype, prototype);
                }

                // Classes and messages reference their reflected type
                ctor.$type = ctor.prototype.$type = this;

                // Mix in static methods
                util.merge(ctor, Message, true);
                util.merge(ctor.prototype, Message, true);

                this._ctor = ctor;

                // Messages have non-enumerable default values on their prototype
                var i = 0;
                for (; i < /* initializes */this.fieldsArray.length; ++i) this._fieldsArray[i].resolve(); // ensures a proper value

                // Messages have non-enumerable getters and setters for each virtual oneof field
                var ctorProperties = {};
                for (i = 0; i < /* initializes */this.oneofsArray.length; ++i) {
                    var oneofName = this._oneofsArray[i].resolve().name;

                    var oneOfGetAndSet = function (fieldNames) {
                        var fieldMap = {};
                        for (var i = 0; i < fieldNames.length; ++i) fieldMap[fieldNames[i]] = 0;

                        return {
                            setter: function (name) {
                                if (fieldNames.indexOf(name) < 0) return;
                                fieldMap[name] = 1;
                                for (var i = 0; i < fieldNames.length; ++i) if (fieldNames[i] !== name) delete this[/*"_"+*/fieldNames[i]];
                            },

                            getter: function () {
                                for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i) if (fieldMap[keys[i]] === 1 && this[keys[i]] !== undefined && this[keys[i]] !== null) return keys[i];
                            }

                        };
                    }(this._oneofsArray[i].oneof);

                    ctorProperties[oneofName] = {
                        get: oneOfGetAndSet.getter,
                        set: oneOfGetAndSet.setter
                    };
                    //var fieldNames = this._oneofsArray[i].oneof;
                    //for (var  j = 0 ; j < fieldNames.length; j++){
                    //    var fieldName = fieldNames[j];
                    //    ctorProperties[fieldName] = {
                    //        set : (function(oneofName, fieldName){
                    //            return function (value){
                    //                this[oneofName] = fieldName;
                    //                this["_"+fieldName] = value;
                    //            }
                    //        })(oneofName , fieldName),
                    //        get : (function(fieldName){
                    //            return function (){
                    //                return this["_"+fieldName];
                    //            }
                    //        })(fieldName)
                    //    }
                    //}
                }

                if (i) {
                    //util.merge(ctor.prototype, ctorProperties, true);
                    Object.defineProperties(ctor.prototype, ctorProperties);
                }
            }
        }
    });

    //生成一个构造函数
    Type.generateConstructor = function generateConstructor(mtype) {
        return function (p) {
            for (var i = 0, field; i < mtype.fieldsArray.length; i++) {
                if ((field = mtype._fieldsArray[i]).map) {
                    this[field.name] = {};
                } else if (field.repeated) {
                    this[field.name] = [];
                }
            }

            if (p) {
                for (var ks = Object.keys(p), j = 0; j < ks.length; ++j) {
                    if (p[ks[j]] != null) {
                        this[ks[j]] = p[ks[j]];
                    }
                }
            }
        };
    };

    function clearCache(type) {
        type._fieldsById = type._fieldsArray = type._oneofsArray = null;
        delete type.encode;
        delete type.decode;
        delete type.verify;
        return type;
    }

    Type.fromJSON = function fromJSON(name, json) {
        var type = new Type(name, json.options);
        type.extensions = json.extensions;
        type.reserved = json.reserved;
        var names = Object.keys(json.fields),
            i = 0;
        for (; i < names.length; ++i) type.add((typeof json.fields[names[i]].keyType !== "undefined" ? MapField.fromJSON : Field.fromJSON)(names[i], json.fields[names[i]]));
        if (json.oneofs) for (names = Object.keys(json.oneofs), i = 0; i < names.length; ++i) type.add(OneOf.fromJSON(names[i], json.oneofs[names[i]]));
        if (json.nested) for (names = Object.keys(json.nested), i = 0; i < names.length; ++i) {
            var nested = json.nested[names[i]];
            type.add( // most to least likely
            (nested.id !== undefined ? Field.fromJSON : nested.fields !== undefined ? Type.fromJSON : nested.values !== undefined ? Enum.fromJSON : nested.methods !== undefined ? Service.fromJSON : Namespace.fromJSON)(names[i], nested));
        }
        if (json.extensions && json.extensions.length) type.extensions = json.extensions;
        if (json.reserved && json.reserved.length) type.reserved = json.reserved;
        if (json.group) type.group = true;
        if (json.comment) type.comment = json.comment;
        return type;
    };

    Type.prototype.toJSON = function toJSON(toJSONOptions) {
        var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;

        return {
            "options": inherited && inherited.options || undefined,
            "oneofs": Namespace.arrayToJSON(this.oneofsArray, toJSONOptions),
            "fields": Namespace.arrayToJSON(this.fieldsArray.filter(function (obj) {
                return !obj.declaringField;
            }), toJSONOptions) || {},
            "extensions": this.extensions && this.extensions.length ? this.extensions : undefined,
            "reserved": this.reserved && this.reserved.length ? this.reserved : undefined,
            "group": this.group || undefined,
            "nested": inherited && inherited.nested || undefined,
            "comment": keepComments ? this.comment : undefined
        };
    };

    Type.prototype.resolveAll = function resolveAll() {
        var fields = this.fieldsArray,
            i = 0;
        while (i < fields.length) fields[i++].resolve();
        var oneofs = this.oneofsArray;i = 0;
        while (i < oneofs.length) oneofs[i++].resolve();
        return Namespace.prototype.resolveAll.call(this);
    };

    Type.prototype.get = function get(name) {
        return this.fields[name] || this.oneofs && this.oneofs[name] || this.nested && this.nested[name] || null;
    };

    Type.prototype.add = function add(object) {

        if (this.get(object.name)) throw Error("duplicate name '" + object.name + "' in " + this);

        if (object instanceof Field && object.extend === undefined) {
            if (this._fieldsById && this._fieldsById[object.id]) throw Error("duplicate id " + object.id + " in " + this);
            if (this.isReservedId(object.id)) throw Error("id " + object.id + " is reserved in " + this);
            if (this.isReservedName(object.name)) throw Error("name '" + object.name + "' is reserved in " + this);

            if (object.parent) object.parent.remove(object);
            this.fields[object.name] = object;
            object.message = this;
            object.onAdd(this);
            return clearCache(this);
        }
        if (object instanceof OneOf) {
            if (!this.oneofs) this.oneofs = {};
            this.oneofs[object.name] = object;
            object.onAdd(this);
            return clearCache(this);
        }
        return Namespace.prototype.add.call(this, object);
    };

    Type.prototype.remove = function remove(object) {
        if (object instanceof Field && object.extend === undefined) {
            // See Type#add for the reason why extension fields are excluded here.

            /* istanbul ignore if */
            if (!this.fields || this.fields[object.name] !== object) throw Error(object + " is not a member of " + this);

            delete this.fields[object.name];
            object.parent = null;
            object.onRemove(this);
            return clearCache(this);
        }
        if (object instanceof OneOf) {

            /* istanbul ignore if */
            if (!this.oneofs || this.oneofs[object.name] !== object) throw Error(object + " is not a member of " + this);

            delete this.oneofs[object.name];
            object.parent = null;
            object.onRemove(this);
            return clearCache(this);
        }
        return Namespace.prototype.remove.call(this, object);
    };

    Type.prototype.isReservedId = function isReservedId(id) {
        return Namespace.isReservedId(this.reserved, id);
    };

    Type.prototype.isReservedName = function isReservedName(name) {
        return Namespace.isReservedName(this.reserved, name);
    };

    Type.prototype.create = function create(properties) {
        return new this.ctor(properties);
    };

    Type.prototype.setup = function setup() {
        // Sets up everything at once so that the prototype chain does not have to be re-evaluated
        // multiple times (V8, soft-deopt prototype-check).

        var fullName = this.fullName,
            types = [];
        for (var i = 0; i < /* initializes */this.fieldsArray.length; ++i) types.push(this._fieldsArray[i].resolve().resolvedType);

        // Replace setup methods with type-specific generated functions
        this.encode = encoder(this)({
            Writer: Writer,
            types: types,
            util: util
        });

        this.decode = decoder(this)({
            Reader: Reader,
            types: types,
            util: util
        });
        this.verify = verifier(this)({
            types: types,
            util: util
        });

        this.fromObject = converter.fromObject(this)({
            types: types,
            util: util
        });
        this.toObject = converter.toObject(this)({
            types: types,
            util: util
        });

        // Inject custom wrappers for common types
        var wrapper = wrappers[fullName];
        if (wrapper) {
            var originalThis = Object.create(this);
            // if (wrapper.fromObject) {
            originalThis.fromObject = this.fromObject;
            this.fromObject = wrapper.fromObject.bind(originalThis);
            // }
            // if (wrapper.toObject) {
            originalThis.toObject = this.toObject;
            this.toObject = wrapper.toObject.bind(originalThis);
            // }
        }

        return this;
    };

    /**
     * Encodes a message of this type. Does not implicitly {@link Type#verify|verify} messages.
     * @param {Message<{}>|Object.<string,*>} message Message instance or plain object
     * @param {Writer} [writer] Writer to encode to
     * @returns {Writer} writer
     */

    Type.prototype.encode = function encode_setup(message, writer) {
        return this.setup().encode(message, writer); // overrides this method
    };

    /**
     * Encodes a message of this type preceeded by its byte length as a varint. Does not implicitly {@link Type#verify|verify} messages.
     * @param {Message<{}>|Object.<string,*>} message Message instance or plain object
     * @param {Writer} [writer] Writer to encode to
     * @returns {Writer} writer
     */
    Type.prototype.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a message of this type.
     * @param {Reader|Uint8Array|ArrayBuffer} reader Reader or buffer to decode from
     * @param {number} [length] Length of the message, if known beforehand
     * @returns {Message<{}>} Decoded message
     * @throws {Error} If the payload is not a reader or valid buffer
     */

    Type.prototype.decode = function decode_setup(reader, length) {
        return this.setup().decode(reader, length); // overrides this method
    };
    /**
     * Decodes a message of this type preceeded by its byte length as a varint.
     * @param {Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Message<{}>} Decoded message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {util.ProtocolError} If required fields are missing
     */
    Type.prototype.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof Reader)) reader = Reader.create(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies that field values are valid and that required fields are present.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {null|string} `null` if valid, otherwise the reason why it is not
     */

    Type.prototype.verify = function verify_setup(message) {
        return this.setup().verify(message); // overrides this method
    };

    /**
     * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object to convert
     * @returns {Message<{}>} Message instance
     */
    Type.prototype.fromObject = function fromObject(object) {
        return this.setup().fromObject(object);
    };

    /**
     * Conversion options as used by {@link Type#toObject} and {@link Message.toObject}.
     * @interface IConversionOptions
     * @property {Function} [longs] Long conversion type.
     * Valid values are `String` and `Number` (the global types).
     * Defaults to copy the present value, which is a possibly unsafe number without and a {@link Long} with a long library.
     * @property {Function} [enums] Enum value conversion type.
     * Only valid value is `String` (the global type).
     * Defaults to copy the present value, which is the numeric id.
     * @property {Function} [bytes] Bytes value conversion type.
     * Valid values are `Array` and (a base64 encoded) `String` (the global types).
     * Defaults to copy the present value, which usually is a Buffer under node and an Uint8Array in the browser.
     * @property {boolean} [defaults=false] Also sets default values on the resulting object
     * @property {boolean} [arrays=false] Sets empty arrays for missing repeated fields even if `defaults=false`
     * @property {boolean} [objects=false] Sets empty objects for missing map fields even if `defaults=false`
     * @property {boolean} [oneofs=false] Includes virtual oneof properties set to the present field's name, if any
     * @property {boolean} [json=false] Performs additional JSON compatibility conversions, i.e. NaN and Infinity to strings
     */

    /**
     * Creates a plain object from a message of this type. Also converts values to other types if specified.
     * @param {Message<{}>} message Message instance
     * @param {IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Type.prototype.toObject = function toObject(message, options) {
        return this.setup().toObject(message, options);
    };

    Type.d = function decorateType(typeName) {
        return function typeDecorator(target) {
            util.decorateType(target, typeName);
        };
    };

    Type._configure = function () {
        Enum = __webpack_require__(1);
        Field = __webpack_require__(2);
        Message = __webpack_require__(14);
        OneOf = __webpack_require__(7);
        Writer = __webpack_require__(15);
        Reader = __webpack_require__(22);
        util = __webpack_require__(0);
        verifier = __webpack_require__(23);
        encoder = __webpack_require__(24);
        decoder = __webpack_require__(25);
        Service = __webpack_require__(10);
        wrappers = __webpack_require__(26);
        converter = __webpack_require__(27);
        MapField = __webpack_require__(12);
    };

    /***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    module.exports = ReflectionObject;

    ReflectionObject.className = "ReflectionObject";
    var util;

    var Root; // cyclic

    /**
     * Constructs a new reflection object instance.
     * @classdesc Base class of all reflection objects.
     * @constructor
     * @param {string} name Object name
     * @param {Object.<string,*>} [options] Declared options
     * @abstract
     */
    function ReflectionObject(name, options) {

        if (!util.isString(name)) throw TypeError("name must be a string");

        if (options && !util.isObject(options)) throw TypeError("options must be an object");

        /**
         * Options.
         * @type {Object.<string,*>|undefined}
         */
        this.options = options; // toJSON

        /**
         * Unique name within its namespace.
         * @type {string}
         */
        this.name = name;

        /**
         * Parent namespace.
         * @type {Namespace|null}
         */
        this.parent = null;

        /**
         * Whether already resolved or not.
         * @type {boolean}
         */
        this.resolved = false;

        /**
         * Comment text, if any.
         * @type {string|null}
         */
        this.comment = null;

        /**
         * Defining file name.
         * @type {string|null}
         */
        this.filename = null;
    }

    Object.defineProperties(ReflectionObject.prototype, {

        /**
         * Reference to the root namespace.
         * @name ReflectionObject#root
         * @type {Root}
         * @readonly
         */
        root: {
            get: function () {
                var ptr = this;
                while (ptr.parent !== null) ptr = ptr.parent;
                return ptr;
            }
        },

        /**
         * Full name including leading dot.
         * @name ReflectionObject#fullName
         * @type {string}
         * @readonly
         */
        fullName: {
            get: function () {
                var path = [this.name],
                    ptr = this.parent;
                while (ptr) {
                    path.unshift(ptr.name);
                    ptr = ptr.parent;
                }
                return path.join(".");
            }
        }
    });

    /**
     * Converts this reflection object to its descriptor representation.
     * @returns {Object.<string,*>} Descriptor
     * @abstract
     */
    ReflectionObject.prototype.toJSON = /* istanbul ignore next */function toJSON() {
        throw Error(); // not implemented, shouldn't happen
    };

    /**
     * Called when this object is added to a parent.
     * @param {ReflectionObject} parent Parent added to
     * @returns {undefined}
     */
    ReflectionObject.prototype.onAdd = function onAdd(parent) {
        if (this.parent && this.parent !== parent) this.parent.remove(this);
        this.parent = parent;
        this.resolved = false;
        var root = parent.root;
        if (root instanceof Root) root._handleAdd(this);
    };

    /**
     * Called when this object is removed from a parent.
     * @param {ReflectionObject} parent Parent removed from
     * @returns {undefined}
     */
    ReflectionObject.prototype.onRemove = function onRemove(parent) {
        var root = parent.root;
        if (root instanceof Root) root._handleRemove(this);
        this.parent = null;
        this.resolved = false;
    };

    /**
     * Resolves this objects type references.
     * @returns {ReflectionObject} `this`
     */
    ReflectionObject.prototype.resolve = function resolve() {
        if (this.resolved) return this;
        if (this.root instanceof Root) this.resolved = true; // only if part of a root
        return this;
    };

    /**
     * Gets an option value.
     * @param {string} name Option name
     * @returns {*} Option value or `undefined` if not set
     */
    ReflectionObject.prototype.getOption = function getOption(name) {
        if (this.options) return this.options[name];
        return undefined;
    };

    /**
     * Sets an option.
     * @param {string} name Option name
     * @param {*} value Option value
     * @param {boolean} [ifNotSet] Sets the option only if it isn't currently set
     * @returns {ReflectionObject} `this`
     */
    ReflectionObject.prototype.setOption = function setOption(name, value, ifNotSet) {
        if (!ifNotSet || !this.options || this.options[name] === undefined) (this.options || (this.options = {}))[name] = value;
        return this;
    };

    /**
     * Sets multiple options.
     * @param {Object.<string,*>} options Options to set
     * @param {boolean} [ifNotSet] Sets an option only if it isn't currently set
     * @returns {ReflectionObject} `this`
     */
    ReflectionObject.prototype.setOptions = function setOptions(options, ifNotSet) {
        if (options) for (var keys = Object.keys(options), i = 0; i < keys.length; ++i) this.setOption(keys[i], options[keys[i]], ifNotSet);
        return this;
    };

    /**
     * Converts this instance to its string representation.
     * @returns {string} Class name[, space, full name]
     */
    ReflectionObject.prototype.toString = function toString() {
        var className = this.constructor.className,
            fullName = this.fullName;
        if (fullName.length) return className + " " + fullName;
        return className;
    };

    ReflectionObject._configure = function (Root_) {
        Root = __webpack_require__(9);
        util = __webpack_require__(0);
    };

    /***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    /**
     * Common type constants.
     * @namespace
     */

    var types = module.exports;
    var util = __webpack_require__(0);

    var s = ["double", // 0
    "float", // 1
    "int32", // 2
    "uint32", // 3
    "sint32", // 4
    "fixed32", // 5
    "sfixed32", // 6
    "int64", // 7
    "uint64", // 8
    "sint64", // 9
    "fixed64", // 10
    "sfixed64", // 11
    "bool", // 12
    "string", // 13
    "bytes" // 14
    ];

    function bake(values, offset) {
        var i = 0,
            o = {};
        offset |= 0;
        while (i < values.length) o[s[i + offset]] = values[i++];
        return o;
    }

    /**
     * Basic type wire types.
     * @type {Object.<string,number>}
     * @const
     * @property {number} double=1 Fixed64 wire type
     * @property {number} float=5 Fixed32 wire type
     * @property {number} int32=0 Varint wire type
     * @property {number} uint32=0 Varint wire type
     * @property {number} sint32=0 Varint wire type
     * @property {number} fixed32=5 Fixed32 wire type
     * @property {number} sfixed32=5 Fixed32 wire type
     * @property {number} int64=0 Varint wire type
     * @property {number} uint64=0 Varint wire type
     * @property {number} sint64=0 Varint wire type
     * @property {number} fixed64=1 Fixed64 wire type
     * @property {number} sfixed64=1 Fixed64 wire type
     * @property {number} bool=0 Varint wire type
     * @property {number} string=2 Ldelim wire type
     * @property {number} bytes=2 Ldelim wire type
     */
    types.basic = bake([
    /* double   */1,
    /* float    */5,
    /* int32    */0,
    /* uint32   */0,
    /* sint32   */0,
    /* fixed32  */5,
    /* sfixed32 */5,
    /* int64    */0,
    /* uint64   */4,
    /* sint64   */0,
    /* fixed64  */1,
    /* sfixed64 */1,
    /* bool     */0,
    /* string   */2,
    /* bytes    */2]);

    /**
     * Basic type defaults.
     * @type {Object.<string,*>}
     * @const
     * @property {number} double=0 Double default
     * @property {number} float=0 Float default
     * @property {number} int32=0 Int32 default
     * @property {number} uint32=0 Uint32 default
     * @property {number} sint32=0 Sint32 default
     * @property {number} fixed32=0 Fixed32 default
     * @property {number} sfixed32=0 Sfixed32 default
     * @property {number} int64=0 Int64 default
     * @property {number} uint64=0 Uint64 default
     * @property {number} sint64=0 Sint32 default
     * @property {number} fixed64=0 Fixed64 default
     * @property {number} sfixed64=0 Sfixed64 default
     * @property {boolean} bool=false Bool default
     * @property {string} string="" String default
     * @property {Array.<number>} bytes=Array(0) Bytes default
     * @property {null} message=null Message default
     */
    types.defaults = bake([
    /* double   */0,
    /* float    */0,
    /* int32    */0,
    /* uint32   */0,
    /* sint32   */0,
    /* fixed32  */0,
    /* sfixed32 */0,
    /* int64    */0,
    /* uint64   */0,
    /* sint64   */0,
    /* fixed64  */0,
    /* sfixed64 */0,
    /* bool     */false,
    /* string   */"",
    /* bytes    */util.emptyArray,
    /* message  */null]);

    /**
     * Basic long type wire types.
     * @type {Object.<string,number>}
     * @const
     * @property {number} int64=0 Varint wire type
     * @property {number} uint64=0 Varint wire type
     * @property {number} sint64=0 Varint wire type
     * @property {number} fixed64=1 Fixed64 wire type
     * @property {number} sfixed64=1 Fixed64 wire type
     */
    types.long = bake([
    /* int64    */0,
    /* uint64   */0,
    /* sint64   */0,
    /* fixed64  */1,
    /* sfixed64 */1], 7);

    /**
     * Allowed types for map keys with their associated wire type.
     * @type {Object.<string,number>}
     * @const
     * @property {number} int32=0 Varint wire type
     * @property {number} uint32=0 Varint wire type
     * @property {number} sint32=0 Varint wire type
     * @property {number} fixed32=5 Fixed32 wire type
     * @property {number} sfixed32=5 Fixed32 wire type
     * @property {number} int64=0 Varint wire type
     * @property {number} uint64=0 Varint wire type
     * @property {number} sint64=0 Varint wire type
     * @property {number} fixed64=1 Fixed64 wire type
     * @property {number} sfixed64=1 Fixed64 wire type
     * @property {number} bool=0 Varint wire type
     * @property {number} string=2 Ldelim wire type
     */
    types.mapKey = bake([
    /* int32    */0,
    /* uint32   */0,
    /* sint32   */0,
    /* fixed32  */5,
    /* sfixed32 */5,
    /* int64    */0,
    /* uint64   */4,
    /* sint64   */0,
    /* fixed64  */1,
    /* sfixed64 */1,
    /* bool     */0,
    /* string   */2], 2);

    /**
     * Allowed types for packed repeated fields with their associated wire type.
     * @type {Object.<string,number>}
     * @const
     * @property {number} double=1 Fixed64 wire type
     * @property {number} float=5 Fixed32 wire type
     * @property {number} int32=0 Varint wire type
     * @property {number} uint32=0 Varint wire type
     * @property {number} sint32=0 Varint wire type
     * @property {number} fixed32=5 Fixed32 wire type
     * @property {number} sfixed32=5 Fixed32 wire type
     * @property {number} int64=0 Varint wire type
     * @property {number} uint64=0 Varint wire type
     * @property {number} sint64=0 Varint wire type
     * @property {number} fixed64=1 Fixed64 wire type
     * @property {number} sfixed64=1 Fixed64 wire type
     * @property {number} bool=0 Varint wire type
     */
    types.packed = bake([
    /* double   */1,
    /* float    */5,
    /* int32    */0,
    /* uint32   */0,
    /* sint32   */0,
    /* fixed32  */5,
    /* sfixed32 */5,
    /* int64    */0,
    /* uint64   */4,
    /* sint64   */0,
    /* fixed64  */1,
    /* sfixed64 */1,
    /* bool     */0]);

    types._configure = function () {
        util = __webpack_require__(0);
    };

    /***/
},
/* 6 */
/***/function (module, exports, __webpack_require__) {

    module.exports = Namespace;

    // extends ReflectionObject
    var ReflectionObject = __webpack_require__(4);
    ((Namespace.prototype = Object.create(ReflectionObject.prototype)).constructor = Namespace).className = "Namespace";

    var Enum, Field, util;

    var Type; // cyclic
    var Service;

    /**
     * Constructs a new namespace instance.
     * @name Namespace
     * @classdesc Reflected namespace.
     * @extends NamespaceBase
     * @constructor
     * @param {string} name Namespace name
     * @param {Object.<string,*>} [options] Declared options
     */

    /**
     * Constructs a namespace from JSON.
     * @memberof Namespace
     * @function
     * @param {string} name Namespace name
     * @param {Object.<string,*>} json JSON object
     * @returns {Namespace} Created namespace
     * @throws {TypeError} If arguments are invalid
     */
    Namespace.fromJSON = function fromJSON(name, json) {
        return new Namespace(name, json.options).addJSON(json.nested);
    };

    /**
     * Converts an array of reflection objects to JSON.
     * @memberof Namespace
     * @param {ReflectionObject[]} array Object array
     * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
     * @returns {Object.<string,*>|undefined} JSON object or `undefined` when array is empty
     */
    function arrayToJSON(array, toJSONOptions) {
        if (!(array && array.length)) return undefined;
        var obj = {};
        for (var i = 0; i < array.length; ++i) obj[array[i].name] = array[i].toJSON(toJSONOptions);
        return obj;
    }

    Namespace.arrayToJSON = arrayToJSON;

    /**
     * Tests if the specified id is reserved.
     * @param {Array.<number[]|string>|undefined} reserved Array of reserved ranges and names
     * @param {number} id Id to test
     * @returns {boolean} `true` if reserved, otherwise `false`
     */
    Namespace.isReservedId = function isReservedId(reserved, id) {
        if (reserved) for (var i = 0; i < reserved.length; ++i) if (typeof reserved[i] !== "string" && reserved[i][0] <= id && reserved[i][1] >= id) return true;
        return false;
    };

    /**
     * Tests if the specified name is reserved.
     * @param {Array.<number[]|string>|undefined} reserved Array of reserved ranges and names
     * @param {string} name Name to test
     * @returns {boolean} `true` if reserved, otherwise `false`
     */
    Namespace.isReservedName = function isReservedName(reserved, name) {
        if (reserved) for (var i = 0; i < reserved.length; ++i) if (reserved[i] === name) return true;
        return false;
    };

    /**
     * Not an actual constructor. Use {@link Namespace} instead.
     * @classdesc Base class of all reflection objects containing nested objects. This is not an actual class but here for the sake of having consistent type definitions.
     * @exports NamespaceBase
     * @extends ReflectionObject
     * @abstract
     * @constructor
     * @param {string} name Namespace name
     * @param {Object.<string,*>} [options] Declared options
     * @see {@link Namespace}
     */
    function Namespace(name, options) {
        ReflectionObject.call(this, name, options);

        /**
         * Nested objects by name.
         * @type {Object.<string,ReflectionObject>|undefined}
         */
        this.nested = undefined; // toJSON

        /**
         * Cached nested objects as an array.
         * @type {ReflectionObject[]|null}
         * @private
         */
        this._nestedArray = null;
    }

    function clearCache(namespace) {
        namespace._nestedArray = null;
        return namespace;
    }

    /**
     * Nested objects of this namespace as an array for iteration.
     * @name NamespaceBase#nestedArray
     * @type {ReflectionObject[]}
     * @readonly
     */
    Object.defineProperty(Namespace.prototype, "nestedArray", {
        get: function () {
            return this._nestedArray || (this._nestedArray = util.toArray(this.nested));
        }
    });

    /**
     * Namespace descriptor.
     * @interface INamespace
     * @property {Object.<string,*>} [options] Namespace options
     * @property {Object.<string,AnyNestedObject>} [nested] Nested object descriptors
     */

    /**
     * Any extension field descriptor.
     * @typedef AnyExtensionField
     * @type {IExtensionField|IExtensionMapField}
     */

    /**
     * Any nested object descriptor.
     * @typedef AnyNestedObject
     * @type {IEnum|IType|IService|AnyExtensionField|INamespace}
     */
    // ^ BEWARE: VSCode hangs forever when using more than 5 types (that's why AnyExtensionField exists in the first place)

    /**
     * Converts this namespace to a namespace descriptor.
     * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
     * @returns {INamespace} Namespace descriptor
     */
    Namespace.prototype.toJSON = function toJSON(toJSONOptions) {
        return util.toObject(["options", this.options, "nested", arrayToJSON(this.nestedArray, toJSONOptions)]);
    };

    /**
     * Adds nested objects to this namespace from nested object descriptors.
     * @param {Object.<string,AnyNestedObject>} nestedJson Any nested object descriptors
     * @returns {Namespace} `this`
     */
    Namespace.prototype.addJSON = function addJSON(nestedJson) {
        var ns = this;
        /* istanbul ignore else */
        if (nestedJson) {
            for (var names = Object.keys(nestedJson), i = 0, nested; i < names.length; ++i) {
                nested = nestedJson[names[i]];
                ns.add( // most to least likely
                (nested.fields !== undefined ? Type.fromJSON : nested.values !== undefined ? Enum.fromJSON : nested.methods !== undefined ? Service.fromJSON : nested.id !== undefined ? Field.fromJSON : Namespace.fromJSON)(names[i], nested));
            }
        }
        return this;
    };

    /**
     * Gets the nested object of the specified name.
     * @param {string} name Nested object name
     * @returns {ReflectionObject|null} The reflection object or `null` if it doesn't exist
     */
    Namespace.prototype.get = function get(name) {
        return this.nested && this.nested[name] || null;
    };

    /**
     * Gets the values of the nested {@link Enum|enum} of the specified name.
     * This methods differs from {@link Namespace#get|get} in that it returns an enum's values directly and throws instead of returning `null`.
     * @param {string} name Nested enum name
     * @returns {Object.<string,number>} Enum values
     * @throws {Error} If there is no such enum
     */
    Namespace.prototype.getEnum = function getEnum(name) {
        if (this.nested && this.nested[name] instanceof Enum) return this.nested[name].values;
        throw Error("no such enum: " + name);
    };

    /**
     * Adds a nested object to this namespace.
     * @param {ReflectionObject} object Nested object to add
     * @returns {Namespace} `this`
     * @throws {TypeError} If arguments are invalid
     * @throws {Error} If there is already a nested object with this name
     */
    Namespace.prototype.add = function add(object) {

        if (!(object instanceof Field && object.extend !== undefined || object instanceof Type || object instanceof Enum || object instanceof Service || object instanceof Namespace)) throw TypeError("object must be a valid nested object");

        if (!this.nested) this.nested = {};else {
            var prev = this.get(object.name);
            if (prev) {
                if (prev instanceof Namespace && object instanceof Namespace && !(prev instanceof Type || prev instanceof Service)) {
                    // replace plain namespace but keep existing nested elements and options
                    var nested = prev.nestedArray;
                    for (var i = 0; i < nested.length; ++i) object.add(nested[i]);
                    this.remove(prev);
                    if (!this.nested) this.nested = {};
                    object.setOptions(prev.options, true);
                } else throw Error("duplicate name '" + object.name + "' in " + this);
            }
        }
        this.nested[object.name] = object;
        object.onAdd(this);
        return clearCache(this);
    };

    /**
     * Removes a nested object from this namespace.
     * @param {ReflectionObject} object Nested object to remove
     * @returns {Namespace} `this`
     * @throws {TypeError} If arguments are invalid
     * @throws {Error} If `object` is not a member of this namespace
     */
    Namespace.prototype.remove = function remove(object) {

        if (!(object instanceof ReflectionObject)) throw TypeError("object must be a ReflectionObject");
        if (object.parent !== this) throw Error(object + " is not a member of " + this);

        delete this.nested[object.name];
        if (!Object.keys(this.nested).length) this.nested = undefined;

        object.onRemove(this);
        return clearCache(this);
    };

    /**
     * Defines additial namespaces within this one if not yet existing.
     * @param {string|string[]} path Path to create
     * @param {*} [json] Nested types to create from JSON
     * @returns {Namespace} Pointer to the last namespace created or `this` if path is empty
     */
    Namespace.prototype.define = function define(path, json) {

        if (util.isString(path)) path = path.split(".");else if (!Array.isArray(path)) throw TypeError("illegal path");
        if (path && path.length && path[0] === "") throw Error("path must be relative");

        var ptr = this;
        while (path.length > 0) {
            var part = path.shift();
            if (ptr.nested && ptr.nested[part]) {
                ptr = ptr.nested[part];
                if (!(ptr instanceof Namespace)) throw Error("path conflicts with non-namespace objects");
            } else ptr.add(ptr = new Namespace(part));
        }
        if (json) ptr.addJSON(json);
        return ptr;
    };

    /**
     * Resolves this namespace's and all its nested objects' type references. Useful to validate a reflection tree, but comes at a cost.
     * @returns {Namespace} `this`
     */
    Namespace.prototype.resolveAll = function resolveAll() {
        var nested = this.nestedArray,
            i = 0;
        while (i < nested.length) if (nested[i] instanceof Namespace) nested[i++].resolveAll();else nested[i++].resolve();
        return this.resolve();
    };

    /**
     * Recursively looks up the reflection object matching the specified path in the scope of this namespace.
     * @param {string|string[]} path Path to look up
     * @param {*|Array.<*>} filterTypes Filter types, any combination of the constructors of `protobuf.Type`, `protobuf.Enum`, `protobuf.Service` etc.
     * @param {boolean} [parentAlreadyChecked=false] If known, whether the parent has already been checked
     * @returns {ReflectionObject|null} Looked up object or `null` if none could be found
     */
    Namespace.prototype.lookup = function lookup(path, filterTypes, parentAlreadyChecked) {

        /* istanbul ignore next */
        if (typeof filterTypes === "boolean") {
            parentAlreadyChecked = filterTypes;
            filterTypes = undefined;
        } else if (filterTypes && !Array.isArray(filterTypes)) filterTypes = [filterTypes];

        if (util.isString(path) && path.length) {
            if (path === ".") return this.root;
            path = path.split(".");
        } else if (!path.length) return this;

        // Start at root if path is absolute
        if (path[0] === "") return this.root.lookup(path.slice(1), filterTypes);

        // Test if the first part matches any nested object, and if so, traverse if path contains more
        var found = this.get(path[0]);
        if (found) {
            if (path.length === 1) {
                if (!filterTypes || filterTypes.indexOf(found.constructor) > -1) return found;
            } else if (found instanceof Namespace && (found = found.lookup(path.slice(1), filterTypes, true))) return found;

            // Otherwise try each nested namespace
        } else for (var i = 0; i < this.nestedArray.length; ++i) if (this._nestedArray[i] instanceof Namespace && (found = this._nestedArray[i].lookup(path, filterTypes, true))) return found;

        // If there hasn't been a match, try again at the parent
        if (this.parent === null || parentAlreadyChecked) return null;
        return this.parent.lookup(path, filterTypes);
    };

    /**
     * Looks up the reflection object at the specified path, relative to this namespace.
     * @name NamespaceBase#lookup
     * @function
     * @param {string|string[]} path Path to look up
     * @param {boolean} [parentAlreadyChecked=false] Whether the parent has already been checked
     * @returns {ReflectionObject|null} Looked up object or `null` if none could be found
     * @variation 2
     */
    // lookup(path: string, [parentAlreadyChecked: boolean])

    /**
     * Looks up the {@link Type|type} at the specified path, relative to this namespace.
     * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
     * @param {string|string[]} path Path to look up
     * @returns {Type} Looked up type
     * @throws {Error} If `path` does not point to a type
     */
    Namespace.prototype.lookupType = function lookupType(path) {
        var found = this.lookup(path, [Type]);
        if (!found) throw Error("no such type: " + path);
        return found;
    };

    /**
     * Looks up the values of the {@link Enum|enum} at the specified path, relative to this namespace.
     * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
     * @param {string|string[]} path Path to look up
     * @returns {Enum} Looked up enum
     * @throws {Error} If `path` does not point to an enum
     */
    Namespace.prototype.lookupEnum = function lookupEnum(path) {
        var found = this.lookup(path, [Enum]);
        if (!found) throw Error("no such Enum '" + path + "' in " + this);
        return found;
    };

    /**
     * Looks up the {@link Type|type} or {@link Enum|enum} at the specified path, relative to this namespace.
     * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
     * @param {string|string[]} path Path to look up
     * @returns {Type} Looked up type or enum
     * @throws {Error} If `path` does not point to a type or enum
     */
    Namespace.prototype.lookupTypeOrEnum = function lookupTypeOrEnum(path) {
        var found = this.lookup(path, [Type, Enum]);
        if (!found) throw Error("no such Type or Enum '" + path + "' in " + this);
        return found;
    };

    /**
     * Looks up the {@link Service|service} at the specified path, relative to this namespace.
     * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
     * @param {string|string[]} path Path to look up
     * @returns {Service} Looked up service
     * @throws {Error} If `path` does not point to a service
     */
    Namespace.prototype.lookupService = function lookupService(path) {
        var found = this.lookup(path, [Service]);
        if (!found) throw Error("no such Service '" + path + "' in " + this);
        return found;
    };

    Namespace._configure = function () {
        Enum = __webpack_require__(1);
        Field = __webpack_require__(2);
        util = __webpack_require__(0);

        Type = __webpack_require__(3); // cyclic
        Service = __webpack_require__(10);
    };

    /***/
},
/* 7 */
/***/function (module, exports, __webpack_require__) {

    module.exports = OneOf;

    // extends ReflectionObject
    var ReflectionObject = __webpack_require__(4);
    ((OneOf.prototype = Object.create(ReflectionObject.prototype)).constructor = OneOf).className = "OneOf";

    var Field;
    var util;

    /**
     * Constructs a new oneof instance.
     * @classdesc Reflected oneof.
     * @extends ReflectionObject
     * @constructor
     * @param {string} name Oneof name
     * @param {string[]|Object.<string,*>} [fieldNames] Field names
     * @param {Object.<string,*>} [options] Declared options
     * @param {string} [comment] Comment associated with this field
     */
    function OneOf(name, fieldNames, options, comment) {
        if (!Array.isArray(fieldNames)) {
            options = fieldNames;
            fieldNames = undefined;
        }
        ReflectionObject.call(this, name, options);

        /* istanbul ignore if */
        if (!(fieldNames === undefined || Array.isArray(fieldNames))) throw TypeError("fieldNames must be an Array");

        /**
         * Field names that belong to this oneof.
         * @type {string[]}
         */
        this.oneof = fieldNames || []; // toJSON, marker

        /**
         * Fields that belong to this oneof as an array for iteration.
         * @type {Field[]}
         * @readonly
         */
        this.fieldsArray = []; // declared readonly for conformance, possibly not yet added to parent

        /**
         * Comment for this field.
         * @type {string|null}
         */
        this.comment = comment;
    }

    /**
     * Oneof descriptor.
     * @interface IOneOf
     * @property {Array.<string>} oneof Oneof field names
     * @property {Object.<string,*>} [options] Oneof options
     */

    /**
     * Constructs a oneof from a oneof descriptor.
     * @param {string} name Oneof name
     * @param {IOneOf} json Oneof descriptor
     * @returns {OneOf} Created oneof
     * @throws {TypeError} If arguments are invalid
     */
    OneOf.fromJSON = function fromJSON(name, json) {
        return new OneOf(name, json.oneof, json.options, json.comment);
    };

    /**
     * Converts this oneof to a oneof descriptor.
     * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
     * @returns {IOneOf} Oneof descriptor
     */
    OneOf.prototype.toJSON = function toJSON(toJSONOptions) {
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject(["options", this.options, "oneof", this.oneof, "comment", keepComments ? this.comment : undefined]);
    };

    /**
     * Adds the fields of the specified oneof to the parent if not already done so.
     * @param {OneOf} oneof The oneof
     * @returns {undefined}
     * @inner
     * @ignore
     */
    function addFieldsToParent(oneof) {
        if (oneof.parent) for (var i = 0; i < oneof.fieldsArray.length; ++i) if (!oneof.fieldsArray[i].parent) oneof.parent.add(oneof.fieldsArray[i]);
    }

    /**
     * Adds a field to this oneof and removes it from its current parent, if any.
     * @param {Field} field Field to add
     * @returns {OneOf} `this`
     */
    OneOf.prototype.add = function add(field) {

        /* istanbul ignore if */
        if (!(field instanceof Field)) throw TypeError("field must be a Field");

        if (field.parent && field.parent !== this.parent) field.parent.remove(field);
        this.oneof.push(field.name);
        this.fieldsArray.push(field);
        field.partOf = this; // field.parent remains null
        addFieldsToParent(this);
        return this;
    };

    /**
     * Removes a field from this oneof and puts it back to the oneof's parent.
     * @param {Field} field Field to remove
     * @returns {OneOf} `this`
     */
    OneOf.prototype.remove = function remove(field) {

        /* istanbul ignore if */
        if (!(field instanceof Field)) throw TypeError("field must be a Field");

        var index = this.fieldsArray.indexOf(field);

        /* istanbul ignore if */
        if (index < 0) throw Error(field + " is not a member of " + this);

        this.fieldsArray.splice(index, 1);
        index = this.oneof.indexOf(field.name);

        /* istanbul ignore else */
        if (index > -1) // theoretical
            this.oneof.splice(index, 1);

        field.partOf = null;
        return this;
    };

    /**
     * @override
     */
    OneOf.prototype.onAdd = function onAdd(parent) {
        ReflectionObject.prototype.onAdd.call(this, parent);
        var self = this;
        // Collect present fields
        for (var i = 0; i < this.oneof.length; ++i) {
            var field = parent.get(this.oneof[i]);
            if (field && !field.partOf) {
                field.partOf = self;
                self.fieldsArray.push(field);
            }
        }
        // Add not yet present fields
        addFieldsToParent(this);
    };

    /**
     * @override
     */
    OneOf.prototype.onRemove = function onRemove(parent) {
        for (var i = 0, field; i < this.fieldsArray.length; ++i) if ((field = this.fieldsArray[i]).parent) field.parent.remove(field);
        ReflectionObject.prototype.onRemove.call(this, parent);
    };

    /**
     * Decorator function as returned by {@link OneOf.d} (TypeScript).
     * @typedef OneOfDecorator
     * @type {function}
     * @param {Object} prototype Target prototype
     * @param {string} oneofName OneOf name
     * @returns {undefined}
     */

    /**
     * OneOf decorator (TypeScript).
     * @function
     * @param {...string} fieldNames Field names
     * @returns {OneOfDecorator} Decorator function
     * @template T extends string
     */
    OneOf.d = function decorateOneOf() {
        var fieldNames = new Array(arguments.length),
            index = 0;
        while (index < arguments.length) fieldNames[index] = arguments[index++];
        return function oneOfDecorator(prototype, oneofName) {
            util.decorateType(prototype.constructor).add(new OneOf(oneofName, fieldNames));
            Object.defineProperty(prototype, oneofName, {
                get: util.oneOfGetter(fieldNames),
                set: util.oneOfSetter(fieldNames)
            });
        };
    };

    OneOf._configure = function () {
        Field = __webpack_require__(2);
        util = __webpack_require__(0);
    };

    /***/
},
/* 8 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    /**
     * A minimal UTF8 implementation for number arrays.
     * @memberof util
     * @namespace
     */

    var utf8 = module.exports;

    /**
     * Calculates the UTF8 byte length of a string.
     * @param {string} string String
     * @returns {number} Byte length
     */
    utf8.length = function utf8_length(string) {
        var len = 0,
            c = 0;
        for (var i = 0; i < string.length; ++i) {
            c = string.charCodeAt(i);
            if (c < 128) len += 1;else if (c < 2048) len += 2;else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
                ++i;
                len += 4;
            } else len += 3;
        }
        return len;
    };

    /**
     * Reads UTF8 bytes as a string.
     * @param {Uint8Array} buffer Source buffer
     * @param {number} start Source start
     * @param {number} end Source end
     * @returns {string} String read
     */
    utf8.read = function utf8_read(buffer, start, end) {
        var len = end - start;
        if (len < 1) return "";
        var parts = null,
            chunk = [],
            i = 0,


        // char offset
        t; // temporary
        while (start < end) {
            t = buffer[start++];
            if (t < 128) chunk[i++] = t;else if (t > 191 && t < 224) chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;else if (t > 239 && t < 365) {
                t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 0x10000;
                chunk[i++] = 0xD800 + (t >> 10);
                chunk[i++] = 0xDC00 + (t & 1023);
            } else chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
            if (i > 8191) {
                (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
                i = 0;
            }
        }
        if (parts) {
            if (i) parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
            return parts.join("");
        }
        return String.fromCharCode.apply(String, chunk.slice(0, i));
    };

    /**
     * Writes a string as UTF8 bytes.
     * @param {string} string Source string
     * @param {Uint8Array} buffer Destination buffer
     * @param {number} offset Destination offset
     * @returns {number} Bytes written
     */
    utf8.write = function utf8_write(string, buffer, offset) {
        var start = offset,
            c1,


        // character 1
        c2; // character 2
        for (var i = 0; i < string.length; ++i) {
            c1 = string.charCodeAt(i);
            if (c1 < 128) {
                buffer[offset++] = c1;
            } else if (c1 < 2048) {
                buffer[offset++] = c1 >> 6 | 192;
                buffer[offset++] = c1 & 63 | 128;
            } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
                c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
                ++i;
                buffer[offset++] = c1 >> 18 | 240;
                buffer[offset++] = c1 >> 12 & 63 | 128;
                buffer[offset++] = c1 >> 6 & 63 | 128;
                buffer[offset++] = c1 & 63 | 128;
            } else {
                buffer[offset++] = c1 >> 12 | 224;
                buffer[offset++] = c1 >> 6 & 63 | 128;
                buffer[offset++] = c1 & 63 | 128;
            }
        }
        return offset - start;
    };

    /***/
},
/* 9 */
/***/function (module, exports, __webpack_require__) {

    module.exports = Root;

    // extends Namespace
    var Namespace = __webpack_require__(6);
    ((Root.prototype = Object.create(Namespace.prototype)).constructor = Root).className = "Root";

    var Field = __webpack_require__(2),
        Enum = __webpack_require__(1),
        OneOf = __webpack_require__(7),
        util = __webpack_require__(0);

    var Type, // cyclic
    parse, // might be excluded
    common; // "

    /**
     * Constructs a new root namespace instance.
     * @classdesc Root namespace wrapping all types, enums, services, sub-namespaces etc. that belong together.
     * @extends NamespaceBase
     * @constructor
     * @param {Object.<string,*>} [options] Top level options
     */
    function Root(options) {
        Namespace.call(this, "", options);

        /**
         * Deferred extension fields.
         * @type {Field[]}
         */
        this.deferred = [];

        /**
         * Resolved file names of loaded files.
         * @type {string[]}
         */
        this.files = [];

        /**
         * Resolved name of parsered pbString.
         * @type {string[]}
         */
        this.names = [];
    }

    /**
     * Loads a namespace descriptor into a root namespace.
     * @param {INamespace} json Nameespace descriptor
     * @param {Root} [root] Root namespace, defaults to create a new one if omitted
     * @returns {Root} Root namespace
     */
    Root.fromJSON = function fromJSON(json, root) {
        json = typeof json === 'string' ? JSON.parse(json) : json;
        if (!root) root = new Root();
        if (json.options) root.setOptions(json.options);
        return root.addJSON(json.nested);
    };

    /**
     * Resolves the path of an imported file, relative to the importing origin.
     * This method exists so you can override it with your own logic in case your imports are scattered over multiple directories.
     * @function
     * @param {string} origin The file name of the importing file
     * @param {string} target The file name being imported
     * @returns {string|null} Resolved path to `target` or `null` to skip the file
     */
    Root.prototype.resolvePath = util.path.resolve;

    // A symbol-like function to safely signal synchronous loading
    /* istanbul ignore next */
    function SYNC() {} // eslint-disable-line no-empty-function

    function parseFromPbString(pbString, options, callback) {

        if (typeof options === "function") {
            callback = options;
            options = undefined;
        }
        var self = this;
        if (!callback) {
            return util.asPromise(parseFromPbString, self, pbString, options);
        }

        var pbObj = null;
        if (typeof pbString === 'string') {
            pbObj = JSON.parse(pbString);
        } else if (typeof pbString === 'object') {
            pbObj = pbString;
        } else {
            //throw Error("pb格式转化失败");
            console.log("pb格式转化失败");
            return undefined;
        }

        var name = pbObj['name'];
        var pbJsonStr = pbObj['pbJsonStr'];

        function finish(err, root) {
            if (!callback) return;
            var cb = callback;
            callback = null;
            cb(err, root);
        }

        function process(name, source) {
            try {
                if (util.isString(source) && source.charAt(0) === "{") source = JSON.parse(source);
                if (!util.isString(source)) self.setOptions(source.options).addJSON(source.nested);else {
                    parse.filename = name;
                    var parsed = parse(source, self, options),
                        resolved;
                    var i = 0;
                    if (parsed.imports) {
                        for (; i < parsed.imports.length; ++i) {
                            resolved = parsed.imports[i];
                            fetch(resolved);
                        }
                    }
                    if (parsed.weakImports) {
                        for (i = 0; i < parsed.weakImports.length; ++i) resolved = parsed.weakImports[i];
                        fetch(resolved, true);
                    }
                }
            } catch (err) {
                finish(err);
            }

            finish(null, self); // only once anyway
        }

        function fetch(name) {
            if (self.names.indexOf(name) > -1) return;
            self.names.push(name);
            if (name in common) {
                process(name, common[name]);
            }
        }

        process(name, pbJsonStr);
        return undefined;
    }

    Root.prototype.parseFromPbString = parseFromPbString;

    /**
     * Loads one or multiple .proto or preprocessed .json files into this root namespace and calls the callback.
     * @param {string|string[]} filename Names of one or multiple files to load
     * @param {IParseOptions} options Parse options
     * @param {LoadCallback} callback Callback function
     * @returns {undefined}
     */
    Root.prototype.load = function load(filename, options, callback) {
        if (typeof options === "function") {
            callback = options;
            options = undefined;
        }
        var self = this;
        if (!callback) return util.asPromise(load, self, filename, options);

        var sync = callback === SYNC; // undocumented

        // Finishes loading by calling the callback (exactly once)
        function finish(err, root) {
            /* istanbul ignore if */
            if (!callback) return;
            var cb = callback;
            callback = null;
            if (sync) throw err;
            cb(err, root);
        }

        // Processes a single file
        function process(filename, source) {
            try {
                if (util.isString(source) && source.charAt(0) === "{") source = JSON.parse(source);
                if (!util.isString(source)) self.setOptions(source.options).addJSON(source.nested);else {
                    parse.filename = filename;
                    var parsed = parse(source, self, options),
                        resolved,
                        i = 0;
                    if (parsed.imports) for (; i < parsed.imports.length; ++i) if (resolved = self.resolvePath(filename, parsed.imports[i])) fetch(resolved);
                    if (parsed.weakImports) for (i = 0; i < parsed.weakImports.length; ++i) if (resolved = self.resolvePath(filename, parsed.weakImports[i])) fetch(resolved, true);
                }
            } catch (err) {
                finish(err);
            }
            if (!sync && !queued) finish(null, self); // only once anyway
        }

        // Fetches a single file
        function fetch(filename, weak) {

            // Strip path if this file references a bundled definition
            var idx = filename.lastIndexOf("google/protobuf/");
            if (idx > -1) {
                var altname = filename.substring(idx);
                if (altname in common) filename = altname;
            }

            // Skip if already loaded / attempted
            if (self.files.indexOf(filename) > -1) return;
            self.files.push(filename);

            // Shortcut bundled definitions
            if (filename in common) {
                if (sync) process(filename, common[filename]);else {
                    ++queued;
                    setTimeout(function () {
                        --queued;
                        process(filename, common[filename]);
                    });
                }
                return;
            }

            // Otherwise fetch from disk or network
            if (sync) {
                var source;
                try {
                    source = util.fs.readFileSync(filename).toString("utf8");
                } catch (err) {
                    if (!weak) finish(err);
                    return;
                }
                process(filename, source);
            } else {
                ++queued;
                util.fetch(filename, function (err, source) {
                    --queued;
                    /* istanbul ignore if */
                    if (!callback) return; // terminated meanwhile
                    if (err) {
                        /* istanbul ignore else */
                        if (!weak) finish(err);else if (!queued) // can't be covered reliably
                            finish(null, self);
                        return;
                    }
                    process(filename, source);
                });
            }
        }
        var queued = 0;

        // Assembling the root namespace doesn't require working type
        // references anymore, so we can load everything in parallel
        if (util.isString(filename)) filename = [filename];
        for (var i = 0, resolved; i < filename.length; ++i) if (resolved = self.resolvePath("", filename[i])) fetch(resolved);

        if (sync) return self;
        if (!queued) finish(null, self);
        return undefined;
    };
    // function load(filename:string, options:IParseOptions, callback:LoadCallback):undefined

    /**
     * Loads one or multiple .proto or preprocessed .json files into this root namespace and calls the callback.
     * @function Root#load
     * @param {string|string[]} filename Names of one or multiple files to load
     * @param {LoadCallback} callback Callback function
     * @returns {undefined}
     * @variation 2
     */
    // function load(filename:string, callback:LoadCallback):undefined

    /**
     * Loads one or multiple .proto or preprocessed .json files into this root namespace and returns a promise.
     * @function Root#load
     * @param {string|string[]} filename Names of one or multiple files to load
     * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
     * @returns {Promise<Root>} Promise
     * @variation 3
     */
    // function load(filename:string, [options:IParseOptions]):Promise<Root>

    /**
     * Synchronously loads one or multiple .proto or preprocessed .json files into this root namespace (node only).
     * @function Root#loadSync
     * @param {string|string[]} filename Names of one or multiple files to load
     * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
     * @returns {Root} Root namespace
     * @throws {Error} If synchronous fetching is not supported (i.e. in browsers) or if a file's syntax is invalid
     */
    Root.prototype.loadSync = function loadSync(filename, options) {
        if (!util.isNode) throw Error("not supported");
        return this.load(filename, options, SYNC);
    };

    /**
     * @override
     */
    Root.prototype.resolveAll = function resolveAll() {
        if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map(function (field) {
            return "'extend " + field.extend + "' in " + field.parent.fullName;
        }).join(", "));
        return Namespace.prototype.resolveAll.call(this);
    };

    // only uppercased (and thus conflict-free) children are exposed, see below
    var exposeRe = /^[A-Z]/;

    /**
     * Handles a deferred declaring extension field by creating a sister field to represent it within its extended type.
     * @param {Root} root Root instance
     * @param {Field} field Declaring extension field witin the declaring type
     * @returns {boolean} `true` if successfully added to the extended type, `false` otherwise
     * @inner
     * @ignore
     */
    function tryHandleExtension(root, field) {
        var extendedType = field.parent.lookup(field.extend);
        if (extendedType) {
            var sisterField = new Field(field.fullName, field.id, field.type, field.rule, undefined, field.options);
            sisterField.declaringField = field;
            field.extensionField = sisterField;
            extendedType.add(sisterField);
            return true;
        }
        return false;
    }

    /**
     * Called when any object is added to this root or its sub-namespaces.
     * @param {ReflectionObject} object Object added
     * @returns {undefined}
     * @private
     */
    Root.prototype._handleAdd = function _handleAdd(object) {
        if (object instanceof Field) {

            if ( /* an extension field (implies not part of a oneof) */object.extend !== undefined && /* not already handled */!object.extensionField) if (!tryHandleExtension(this, object)) this.deferred.push(object);
        } else if (object instanceof Enum) {

            if (exposeRe.test(object.name)) object.parent[object.name] = object.values; // expose enum values as property of its parent
        } else if (!(object instanceof OneOf)) /* everything else is a namespace */{

                if (object instanceof Type) // Try to handle any deferred extensions
                    for (var i = 0; i < this.deferred.length;) if (tryHandleExtension(this, this.deferred[i])) this.deferred.splice(i, 1);else ++i;
                for (var j = 0; j < /* initializes */object.nestedArray.length; ++j) // recurse into the namespace
                this._handleAdd(object._nestedArray[j]);
                if (exposeRe.test(object.name)) object.parent[object.name] = object; // expose namespace as property of its parent
            }

        // The above also adds uppercased (and thus conflict-free) nested types, services and enums as
        // properties of namespaces just like static code does. This allows using a .d.ts generated for
        // a static module with reflection-based solutions where the condition is met.
    };

    /**
     * Called when any object is removed from this root or its sub-namespaces.
     * @param {ReflectionObject} object Object removed
     * @returns {undefined}
     * @private
     */
    Root.prototype._handleRemove = function _handleRemove(object) {
        if (object instanceof Field) {

            if ( /* an extension field */object.extend !== undefined) {
                if ( /* already handled */object.extensionField) {
                    // remove its sister field
                    object.extensionField.parent.remove(object.extensionField);
                    object.extensionField = null;
                } else {
                    // cancel the extension
                    var index = this.deferred.indexOf(object);
                    /* istanbul ignore else */
                    if (index > -1) this.deferred.splice(index, 1);
                }
            }
        } else if (object instanceof Enum) {

            if (exposeRe.test(object.name)) delete object.parent[object.name]; // unexpose enum values
        } else if (object instanceof Namespace) {

            for (var i = 0; i < /* initializes */object.nestedArray.length; ++i) // recurse into the namespace
            this._handleRemove(object._nestedArray[i]);

            if (exposeRe.test(object.name)) delete object.parent[object.name]; // unexpose namespaces
        }
    };

    Root._configure = function () {
        Type = __webpack_require__(3);
        parse = __webpack_require__(18);
        common = __webpack_require__(21);

        Field = __webpack_require__(2);
        Enum = __webpack_require__(1);
        OneOf = __webpack_require__(7);
        util = __webpack_require__(0);
    };

    /***/
},
/* 10 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    module.exports = Service;

    // extends Namespace
    var Namespace = __webpack_require__(6);
    ((Service.prototype = Object.create(Namespace.prototype)).constructor = Service).className = "Service";

    var Method, util, rpc;

    /**
     * Constructs a new service instance.
     * @classdesc Reflected service.
     * @extends NamespaceBase
     * @constructor
     * @param {string} name Service name
     * @param {Object.<string,*>} [options] Service options
     * @throws {TypeError} If arguments are invalid
     */
    function Service(name, options) {
        Namespace.call(this, name, options);

        /**
         * Service methods.
         * @type {Object.<string,Method>}
         */
        this.methods = {}; // toJSON, marker

        /**
         * Cached methods as an array.
         * @type {Method[]|null}
         * @private
         */
        this._methodsArray = null;
    }

    /**
     * Service descriptor.
     * @interface IService
     * @extends INamespace
     * @property {Object.<string,IMethod>} methods Method descriptors
     */

    /**
     * Constructs a service from a service descriptor.
     * @param {string} name Service name
     * @param {IService} json Service descriptor
     * @returns {Service} Created service
     * @throws {TypeError} If arguments are invalid
     */
    Service.fromJSON = function fromJSON(name, json) {
        var service = new Service(name, json.options);
        /* istanbul ignore else */
        if (json.methods) for (var names = Object.keys(json.methods), i = 0; i < names.length; ++i) service.add(Method.fromJSON(names[i], json.methods[names[i]]));
        if (json.nested) service.addJSON(json.nested);
        service.comment = json.comment;
        return service;
    };

    /**
     * Converts this service to a service descriptor.
     * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
     * @returns {IService} Service descriptor
     */
    Service.prototype.toJSON = function toJSON(toJSONOptions) {
        var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject(["options", inherited && inherited.options || undefined, "methods", Namespace.arrayToJSON(this.methodsArray, toJSONOptions) || /* istanbul ignore next */{}, "nested", inherited && inherited.nested || undefined, "comment", keepComments ? this.comment : undefined]);
    };

    /**
     * Methods of this service as an array for iteration.
     * @name Service#methodsArray
     * @type {Method[]}
     * @readonly
     */
    Object.defineProperty(Service.prototype, "methodsArray", {
        get: function () {
            return this._methodsArray || (this._methodsArray = util.toArray(this.methods));
        }
    });

    function clearCache(service) {
        service._methodsArray = null;
        return service;
    }

    /**
     * @override
     */
    Service.prototype.get = function get(name) {
        return this.methods[name] || Namespace.prototype.get.call(this, name);
    };

    /**
     * @override
     */
    Service.prototype.resolveAll = function resolveAll() {
        var methods = this.methodsArray;
        for (var i = 0; i < methods.length; ++i) methods[i].resolve();
        return Namespace.prototype.resolve.call(this);
    };

    /**
     * @override
     */
    Service.prototype.add = function add(object) {

        /* istanbul ignore if */
        if (this.get(object.name)) throw Error("duplicate name '" + object.name + "' in " + this);

        if (object instanceof Method) {
            this.methods[object.name] = object;
            object.parent = this;
            return clearCache(this);
        }
        return Namespace.prototype.add.call(this, object);
    };

    /**
     * @override
     */
    Service.prototype.remove = function remove(object) {
        if (object instanceof Method) {

            /* istanbul ignore if */
            if (this.methods[object.name] !== object) throw Error(object + " is not a member of " + this);

            delete this.methods[object.name];
            object.parent = null;
            return clearCache(this);
        }
        return Namespace.prototype.remove.call(this, object);
    };

    /**
     * Creates a runtime service using the specified rpc implementation.
     * @param {RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {rpc.Service} RPC service. Useful where requests and/or responses are streamed.
     */
    Service.prototype.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        var rpcService = new rpc.Service(rpcImpl, requestDelimited, responseDelimited);
        for (var i = 0, method; i < /* initializes */this.methodsArray.length; ++i) {
            var methodName = util.lcFirst((method = this._methodsArray[i]).resolve().name).replace(/[^$\w_]/g, "");
            rpcService[methodName] = util.codegen(["r", "c"], util.isReserved(methodName) ? methodName + "_" : methodName)("return this.rpcCall(m,q,s,r,c)")({
                m: method,
                q: method.resolvedRequestType.ctor,
                s: method.resolvedResponseType.ctor
            });
        }
        return rpcService;
    };

    Service._configure = function () {
        Method = __webpack_require__(13);
        util = __webpack_require__(0);
        rpc = __webpack_require__(20);
    };

    /***/
},
/* 11 */
/***/function (module, exports) {

    module.exports = LongBits;

    function LongBits(lo, hi) {
        this.lo = lo >>> 0;
        this.hi = hi >>> 0;
    }

    var zero = LongBits.zero = new LongBits(0, 0);

    zero.toNumber = function () {
        return 0;
    };
    zero.zzEncode = zero.zzDecode = function () {
        return this;
    };
    zero.length = function () {
        return 1;
    };

    var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";

    LongBits.fromNumber = function fromNumber(value) {
        if (value === 0) return zero;
        var sign = value < 0; //如果sign为 1 ,表示为负数
        if (sign) value = -value;
        var lo = value >>> 0,


        //取出底32位
        hi = (value - lo) / 4294967296 >>> 0; //取出高32位
        if (sign) {
            //负数
            hi = ~hi >>> 0; //求取高32位的反码
            lo = ~lo >>> 0; //求取低32位的反码
            if (++lo > 4294967295) {
                //低32位大于Math.pow(2,31)-1
                lo = 0;
                if (++hi > 4294967295) //高32位大于Math.pow(2,31)-1
                    hi = 0;
            }
        }
        return new LongBits(lo, hi);
    };

    LongBits.from = function from(value) {
        if (typeof value === "number") return LongBits.fromNumber(value);
        if (typeof value === "string" || value instanceof String) {
            return LongBits.fromNumber(parseInt(value, 10));
        }
        return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
    };

    LongBits.prototype.toNumber = function toNumber(unsigned) {
        if (!unsigned && this.hi >>> 31) {
            var lo = ~this.lo + 1 >>> 0,
                hi = ~this.hi >>> 0;
            if (!lo) hi = hi + 1 >>> 0;
            return -(lo + hi * 4294967296);
        }
        return this.lo + this.hi * 4294967296;
    };
    LongBits.prototype.toLong = function toLong(unsigned) {
        //return util.Long
        //    ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned))
        //    /* istanbul ignore next */
        //    : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
        return { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
    };

    var charCodeAt = String.prototype.charCodeAt;

    LongBits.fromHash = function fromHash(hash) {
        if (hash === zeroHash) return zero;
        return new LongBits((charCodeAt.call(hash, 0) | charCodeAt.call(hash, 1) << 8 | charCodeAt.call(hash, 2) << 16 | charCodeAt.call(hash, 3) << 24) >>> 0, (charCodeAt.call(hash, 4) | charCodeAt.call(hash, 5) << 8 | charCodeAt.call(hash, 6) << 16 | charCodeAt.call(hash, 7) << 24) >>> 0);
    };

    LongBits.prototype.toHash = function toHash() {
        return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
    };

    LongBits.prototype.zzEncode = function zzEncode() {
        var mask = this.hi >> 31;
        this.hi = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
        this.lo = (this.lo << 1 ^ mask) >>> 0;
        return this;
    };

    LongBits.prototype.zzDecode = function zzDecode() {
        var mask = -(this.lo & 1);
        this.lo = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
        this.hi = (this.hi >>> 1 ^ mask) >>> 0;
        return this;
    };
    LongBits.prototype.length = function length() {
        var part0 = this.lo,
            part1 = (this.lo >>> 28 | this.hi << 4) >>> 0,
            part2 = this.hi >>> 24;
        return part2 === 0 ? part1 === 0 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
    };

    /***/
},
/* 12 */
/***/function (module, exports, __webpack_require__) {

    module.exports = MapField;

    // extends Field
    var Field = __webpack_require__(2);
    ((MapField.prototype = Object.create(Field.prototype)).constructor = MapField).className = "MapField";

    var types, util;

    /**
     * Constructs a new map field instance.
     * @classdesc Reflected map field.
     * @extends FieldBase
     * @constructor
     * @param {string} name Unique name within its namespace
     * @param {number} id Unique id within its namespace
     * @param {string} keyType Key type
     * @param {string} type Value type
     * @param {Object.<string,*>} [options] Declared options
     * @param {string} [comment] Comment associated with this field
     */
    function MapField(name, id, keyType, type, options, comment) {
        Field.call(this, name, id, type, undefined, undefined, options, comment);

        /* istanbul ignore if */
        if (!util.isString(keyType)) throw TypeError("keyType must be a string");

        /**
         * Key type.
         * @type {string}
         */
        this.keyType = keyType; // toJSON, marker

        /**
         * Resolved key type if not a basic type.
         * @type {ReflectionObject|null}
         */
        this.resolvedKeyType = null;

        // Overrides Field#map
        this.map = true;
    }

    /**
     * Map field descriptor.
     * @interface IMapField
     * @extends {IField}
     * @property {string} keyType Key type
     */

    /**
     * Extension map field descriptor.
     * @interface IExtensionMapField
     * @extends IMapField
     * @property {string} extend Extended type
     */

    /**
     * Constructs a map field from a map field descriptor.
     * @param {string} name Field name
     * @param {IMapField} json Map field descriptor
     * @returns {MapField} Created map field
     * @throws {TypeError} If arguments are invalid
     */
    MapField.fromJSON = function fromJSON(name, json) {
        return new MapField(name, json.id, json.keyType, json.type, json.options, json.comment);
    };

    /**
     * Converts this map field to a map field descriptor.
     * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
     * @returns {IMapField} Map field descriptor
     */
    MapField.prototype.toJSON = function toJSON(toJSONOptions) {
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", keepComments ? this.comment : undefined]);
    };

    /**
     * @override
     */
    MapField.prototype.resolve = function resolve() {
        if (this.resolved) return this;

        // Besides a value type, map fields have a key type that may be "any scalar type except for floating point types and bytes"
        if (types.mapKey[this.keyType] === undefined) throw Error("invalid key type: " + this.keyType);

        return Field.prototype.resolve.call(this);
    };

    /**
     * Map field decorator (TypeScript).
     * @name MapField.d
     * @function
     * @param {number} fieldId Field id
     * @param {"int32"|"uint32"|"sint32"|"fixed32"|"sfixed32"|"int64"|"uint64"|"sint64"|"fixed64"|"sfixed64"|"bool"|"string"} fieldKeyType Field key type
     * @param {"double"|"float"|"int32"|"uint32"|"sint32"|"fixed32"|"sfixed32"|"int64"|"uint64"|"sint64"|"fixed64"|"sfixed64"|"bool"|"string"|"bytes"|Object|Constructor<{}>} fieldValueType Field value type
     * @returns {FieldDecorator} Decorator function
     * @template T extends { [key: string]: number | Long | string | boolean | Uint8Array | Buffer | number[] | Message<{}> }
     */
    MapField.d = function decorateMapField(fieldId, fieldKeyType, fieldValueType) {

        // submessage value: decorate the submessage and use its name as the type
        if (typeof fieldValueType === "function") fieldValueType = util.decorateType(fieldValueType).name;

        // enum reference value: create a reflected copy of the enum and keep reuseing it
        else if (fieldValueType && typeof fieldValueType === "object") fieldValueType = util.decorateEnum(fieldValueType).name;

        return function mapFieldDecorator(prototype, fieldName) {
            util.decorateType(prototype.constructor).add(new MapField(fieldName, fieldId, fieldKeyType, fieldValueType));
        };
    };

    MapField._configure = function () {
        types = __webpack_require__(5);
        util = __webpack_require__(0);
    };

    /***/
},
/* 13 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    module.exports = Method;

    // extends ReflectionObject
    var ReflectionObject = __webpack_require__(4);
    ((Method.prototype = Object.create(ReflectionObject.prototype)).constructor = Method).className = "Method";

    var util;

    /**
     * Constructs a new service method instance.
     * @classdesc Reflected service method.
     * @extends ReflectionObject
     * @constructor
     * @param {string} name Method name
     * @param {string|undefined} type Method type, usually `"rpc"`
     * @param {string} requestType Request message type
     * @param {string} responseType Response message type
     * @param {boolean|Object.<string,*>} [requestStream] Whether the request is streamed
     * @param {boolean|Object.<string,*>} [responseStream] Whether the response is streamed
     * @param {Object.<string,*>} [options] Declared options
     * @param {string} [comment] The comment for this method
     */
    function Method(name, type, requestType, responseType, requestStream, responseStream, options, comment) {

        /* istanbul ignore next */
        if (util.isObject(requestStream)) {
            options = requestStream;
            requestStream = responseStream = undefined;
        } else if (util.isObject(responseStream)) {
            options = responseStream;
            responseStream = undefined;
        }

        /* istanbul ignore if */
        if (!(type === undefined || util.isString(type))) throw TypeError("type must be a string");

        /* istanbul ignore if */
        if (!util.isString(requestType)) throw TypeError("requestType must be a string");

        /* istanbul ignore if */
        if (!util.isString(responseType)) throw TypeError("responseType must be a string");

        ReflectionObject.call(this, name, options);

        /**
         * Method type.
         * @type {string}
         */
        this.type = type || "rpc"; // toJSON

        /**
         * Request type.
         * @type {string}
         */
        this.requestType = requestType; // toJSON, marker

        /**
         * Whether requests are streamed or not.
         * @type {boolean|undefined}
         */
        this.requestStream = requestStream ? true : undefined; // toJSON

        /**
         * Response type.
         * @type {string}
         */
        this.responseType = responseType; // toJSON

        /**
         * Whether responses are streamed or not.
         * @type {boolean|undefined}
         */
        this.responseStream = responseStream ? true : undefined; // toJSON

        /**
         * Resolved request type.
         * @type {Type|null}
         */
        this.resolvedRequestType = null;

        /**
         * Resolved response type.
         * @type {Type|null}
         */
        this.resolvedResponseType = null;

        /**
         * Comment for this method
         * @type {string|null}
         */
        this.comment = comment;
    }

    /**
     * Method descriptor.
     * @interface IMethod
     * @property {string} [type="rpc"] Method type
     * @property {string} requestType Request type
     * @property {string} responseType Response type
     * @property {boolean} [requestStream=false] Whether requests are streamed
     * @property {boolean} [responseStream=false] Whether responses are streamed
     * @property {Object.<string,*>} [options] Method options
     */

    /**
     * Constructs a method from a method descriptor.
     * @param {string} name Method name
     * @param {IMethod} json Method descriptor
     * @returns {Method} Created method
     * @throws {TypeError} If arguments are invalid
     */
    Method.fromJSON = function fromJSON(name, json) {
        return new Method(name, json.type, json.requestType, json.responseType, json.requestStream, json.responseStream, json.options, json.comment);
    };

    /**
     * Converts this method to a method descriptor.
     * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
     * @returns {IMethod} Method descriptor
     */
    Method.prototype.toJSON = function toJSON(toJSONOptions) {
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject(["type", this.type !== "rpc" && /* istanbul ignore next */this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", keepComments ? this.comment : undefined]);
    };

    /**
     * @override
     */
    Method.prototype.resolve = function resolve() {

        /* istanbul ignore if */
        if (this.resolved) return this;

        this.resolvedRequestType = this.parent.lookupType(this.requestType);
        this.resolvedResponseType = this.parent.lookupType(this.responseType);

        return ReflectionObject.prototype.resolve.call(this);
    };

    Method._configure = function () {
        util = __webpack_require__(0);
    };

    /***/
},
/* 14 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    module.exports = Message;

    var util;

    /**
     * Constructs a new message instance.
     * @classdesc Abstract runtime message.
     * @constructor
     * @param {Properties<T>} [properties] Properties to set
     * @template T extends object
     */
    function Message(properties) {
        // not used internally
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) this[keys[i]] = properties[keys[i]];
    }

    /**
     * Reference to the reflected type.
     * @name Message.$type
     * @type {Type}
     * @readonly
     */

    /**
     * Reference to the reflected type.
     * @name Message#$type
     * @type {Type}
     * @readonly
     */

    /*eslint-disable valid-jsdoc*/

    /**
     * Creates a new message of this type using the specified properties.
     * @param {Object.<string,*>} [properties] Properties to set
     * @returns {Message<T>} Message instance
     * @template T extends Message<T>
     * @this Constructor<T>
     */
    Message.create = function create(properties) {
        return this.$type.create(properties);
    };

    /**
     * Encodes a message of this type.
     * @param {T|Object.<string,*>} message Message to encode
     * @param {Writer} [writer] Writer to use
     * @returns {Writer} Writer
     * @template T extends Message<T>
     * @this Constructor<T>
     */
    Message.encode = function encode(message, writer) {
        if (!arguments.length) {
            return this.$type.encode(this);
        } else if (arguments.length == 1) {
            return this.$type.encode(arguments[0]);
        } else {
            return this.$type.encode(arguments[0], arguments[1]);
        }
        //return this.$type.encode(message, writer);
    };

    /**
     * Encodes a message of this type preceeded by its length as a varint.
     * @param {T|Object.<string,*>} message Message to encode
     * @param {Writer} [writer] Writer to use
     * @returns {Writer} Writer
     * @template T extends Message<T>
     * @this Constructor<T>
     */
    Message.encodeDelimited = function encodeDelimited(message, writer) {
        return this.$type.encodeDelimited(message, writer);
    };

    /**
     * Decodes a message of this type.
     * @name Message.decode
     * @function
     * @param {Reader|Uint8Array} reader Reader or buffer to decode
     * @returns {T} Decoded message
     * @template T extends Message<T>
     * @this Constructor<T>
     */
    Message.decode = function decode(reader) {
        return this.$type.decode(reader);
    };

    /**
     * Decodes a message of this type preceeded by its length as a varint.
     * @name Message.decodeDelimited
     * @function
     * @param {Reader|Uint8Array} reader Reader or buffer to decode
     * @returns {T} Decoded message
     * @template T extends Message<T>
     * @this Constructor<T>
     */
    Message.decodeDelimited = function decodeDelimited(reader) {
        return this.$type.decodeDelimited(reader);
    };

    /**
     * Verifies a message of this type.
     * @name Message.verify
     * @function
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Message.verify = function verify(message) {
        return this.$type.verify(message);
    };

    /**
     * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {T} Message instance
     * @template T extends Message<T>
     * @this Constructor<T>
     */
    Message.fromObject = function fromObject(object) {
        return this.$type.fromObject(object);
    };

    /**
     * Creates a plain object from a message of this type. Also converts values to other types if specified.
     * @param {T} message Message instance
     * @param {IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     * @template T extends Message<T>
     * @this Constructor<T>
     */
    Message.toObject = function toObject(message, options) {
        message = message || this;
        return this.$type.toObject(message, options);
    };

    /**
     * Converts this message to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    Message.prototype.toJSON = function toJSON() {
        return this.$type.toObject(this, util.toJSONOptions);
    };

    Message.set = function (key, value) {
        Message[key] = value;
    };

    Message.get = function (key) {
        return Message[key];
    };
    /*eslint-enable valid-jsdoc*/

    Message._configure = function () {
        util = __webpack_require__(0);
    };

    /***/
},
/* 15 */
/***/function (module, exports, __webpack_require__) {

    module.exports = Writer;

    var util = __webpack_require__(0);
    var LongBits;

    var BufferWriter; // cyclic

    var base64;
    var utf8 = __webpack_require__(8);

    /**
     * Constructs a new writer operation instance.
     * @classdesc Scheduled writer operation.
     * @constructor
     * @param {function(*, Uint8Array, number)} fn Function to call
     * @param {number} len Value byte length
     * @param {*} val Value to write
     * @ignore
     */
    function Op(fn, len, val) {

        /**
         * Function to call.
         * @type {function(Uint8Array, number, *)}
         */
        this.fn = fn;

        /**
         * Value byte length.
         * @type {number}
         */
        this.len = len;

        /**
         * Next operation.
         * @type {Writer.Op|undefined}
         */
        this.next = undefined;

        /**
         * Value to write.
         * @type {*}
         */
        this.val = val; // type varies
    }

    /* istanbul ignore next */
    function noop() {} // eslint-disable-line no-empty-function

    /**
     * Constructs a new writer state instance.
     * @classdesc Copied writer state.
     * @memberof Writer
     * @constructor
     * @param {Writer} writer Writer to copy state from
     * @ignore
     */
    function State(writer) {

        /**
         * Current head.
         * @type {Writer.Op}
         */
        this.head = writer.head;

        /**
         * Current tail.
         * @type {Writer.Op}
         */
        this.tail = writer.tail;

        /**
         * Current buffer length.
         * @type {number}
         */
        this.len = writer.len;

        /**
         * Next state.
         * @type {State|null}
         */
        this.next = writer.states;
    }

    /**
     * Constructs a new writer instance.
     * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
     * @constructor
     */
    function Writer() {

        /**
         * Current length.
         * @type {number}
         */
        this.len = 0;

        /**
         * Operations head.
         * @type {Object}
         */
        this.head = new Op(noop, 0, 0);

        /**
         * Operations tail
         * @type {Object}
         */
        this.tail = this.head;

        /**
         * Linked forked states.
         * @type {Object|null}
         */
        this.states = null;

        // When a value is written, the writer calculates its byte length and puts it into a linked
        // list of operations to perform when finish() is called. This both allows us to allocate
        // buffers of the exact required size and reduces the amount of work we have to do compared
        // to first calculating over objects and then encoding over objects. In our case, the encoding
        // part is just a linked list walk calling operations with already prepared values.
    }

    /**
     * Creates a new writer.
     * @function
     * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
     */
    Writer.create = util.Buffer ? function create_buffer_setup() {
        return (Writer.create = function create_buffer() {
            return new BufferWriter();
        })();
    }
    /* istanbul ignore next */
    : function create_array() {
        return new Writer();
    };

    /**
     * Allocates a buffer of the specified size.
     * @param {number} size Buffer size
     * @returns {Uint8Array} Buffer
     */
    Writer.alloc = function alloc(size) {
        return new util.Array(size);
    };

    // Use Uint8Array buffer pool in the browser, just like node does with buffers
    /* istanbul ignore else */
    if (util.Array !== Array) Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);

    /**
     * Pushes a new operation to the queue.
     * @param {function(Uint8Array, number, *)} fn Function to call
     * @param {number} len Value byte length
     * @param {number} val Value to write
     * @returns {Writer} `this`
     * @private
     */
    Writer.prototype._push = function push(fn, len, val) {
        this.tail = this.tail.next = new Op(fn, len, val);
        this.len += len;
        return this;
    };

    function writeByte(val, buf, pos) {
        buf[pos] = val & 255;
    }

    function writeVarint32(val, buf, pos) {
        while (val > 127) {
            buf[pos++] = val & 127 | 128;
            val >>>= 7;
        }
        buf[pos] = val;
    }

    /**
     * Constructs a new varint writer operation instance.
     * @classdesc Scheduled varint writer operation.
     * @extends Op
     * @constructor
     * @param {number} len Value byte length
     * @param {number} val Value to write
     * @ignore
     */
    function VarintOp(len, val) {
        this.len = len;
        this.next = undefined;
        this.val = val;
    }

    VarintOp.prototype = Object.create(Op.prototype);
    VarintOp.prototype.fn = writeVarint32;

    /**
     * Writes an unsigned 32 bit value as a varint.
     * @param {number} value Value to write
     * @returns {Writer} `this`
     */
    Writer.prototype.uint32 = function write_uint32(value) {
        // here, the call to this.push has been inlined and a varint specific Op subclass is used.
        // uint32 is by far the most frequently used operation and benefits significantly from this.
        this.len += (this.tail = this.tail.next = new VarintOp((value = value >>> 0) < //将有符号的数变为无符号的数
        128 ? 1 //2的7次方
        : value < 16384 ? 2 //2的14次方
        : value < 2097152 ? 3 //2的21次方
        : value < 268435456 ? 4 //2的28次方
        : 5, //2的35次方 最多32次方,所以最多是5
        value)).len;
        return this;
    };

    /**
     * Writes a signed 32 bit value as a varint.
     * @function
     * @param {number} value Value to write
     * @returns {Writer} `this`
     */
    Writer.prototype.int32 = function write_int32(value) {
        return value < 0 ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) // 10 bytes per spec
        : this.uint32(value);
    };

    /**
     * Writes a 32 bit value as a varint, zig-zag encoded.
     * @param {number} value Value to write
     * @returns {Writer} `this`
     */
    Writer.prototype.sint32 = function write_sint32(value) {
        return this.uint32((value << 1 ^ value >> 31) >>> 0);
    };

    function writeVarint64(val, buf, pos) {
        while (val.hi) {
            buf[pos++] = val.lo & 127 | 128;
            val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
            val.hi >>>= 7;
        }
        while (val.lo > 127) {
            buf[pos++] = val.lo & 127 | 128;
            val.lo = val.lo >>> 7;
        }
        buf[pos++] = val.lo;
    }

    /**
     * Writes an unsigned 64 bit value as a varint.
     * @param {Long|number|string} value Value to write
     * @returns {Writer} `this`
     * @throws {TypeError} If `value` is a string and no long library is present.
     */
    function writeFloat(val, buf, pos) {
        buf[pos++] = 0 << 4;
        util.float.writeFloatLE(val, buf, pos);
    }
    function writeDouble(val, buf, pos) {
        buf[pos++] = 1 << 4;
        util.float.writeDoubleLE(val, buf, pos);
    }
    function writeUMine(val, buf, pos) {
        if (val >= 0) {
            buf[pos++] = 2 << 4 | val;
        } else {
            buf[pos++] = 7 << 4 | -val;
        }
    }
    function writeUInt8(val, buf, pos) {
        if (val >= 0) {
            buf[pos++] = 3 << 4;
            buf[pos++] = val;
        } else {
            buf[pos++] = 8 << 4;
            buf[pos++] = -val;
        }
    }
    function writeUInt16(val, buf, pos) {
        if (val >= 0) {
            buf[pos++] = 4 << 4;
        } else {
            buf[pos++] = 9 << 4;
            val = -val;
        }
        buf[pos++] = val & 255;
        buf[pos++] = val >>> 8;
    }
    function write32data(val, buf, pos) {
        buf[pos++] = val & 0xff;
        buf[pos++] = val >> 8 & 0xff;
        buf[pos++] = val >> 16 & 0xff;
        buf[pos++] = val / 0x1000000 & 0xff;
    }
    function writeUInt32(val, buf, pos) {
        if (val >= 0) {
            buf[pos++] = 5 << 4;
        } else {
            buf[pos++] = 10 << 4;
            val = -val;
        }
        //buf.writeUInt32LE(val, pos)
        write32data(val, buf, pos);
    }
    function writeUInt64(val, buf, pos) {
        var pos_s = pos + 9;
        if (val >= 0) {
            buf[pos++] = 6 << 4;
        } else {
            buf[pos++] = 11 << 4;
            val = -val;
        }
        var hi = Math.floor(val / 0x100000000);
        var lo = val - hi * 0x100000000;
        //buf.writeUInt32LE(lo, pos)
        //buf.writeUInt32LE(hi, pos+4)
        write32data(lo, buf, pos);
        write32data(hi, buf, pos + 4);
    }
    Writer.prototype.uint64 = function write_uint64(value) {
        //var bits = LongBits.from(value);
        //return this._push(writeVarint64, bits.length(), bits);
        if (Number.isSafeInteger(value)) {
            var tmp_value = value >= 0 ? value : -value;

            if (tmp_value < 0x10) {
                return this._push(writeUMine, 1, value);
            } else if (tmp_value < 0x100) {
                return this._push(writeUInt8, 2, value);
            } else if (tmp_value < 0x10000) {
                return this._push(writeUInt16, 3, value);
            } else if (tmp_value < 0x100000000) {
                return this._push(writeUInt32, 5, value);
            } else {
                return this._push(writeUInt64, 9, value);
            }
        } else {
            if (value > -99999 && value < 99999) {
                return this._push(writeFloat, 5, value);
            } else {
                return this._push(writeDouble, 9, value);
            }
        }
    };

    /**
     * Writes a signed 64 bit value as a varint.
     * @function
     * @param {Long|number|string} value Value to write
     * @returns {Writer} `this`
     * @throws {TypeError} If `value` is a string and no long library is present.
     */
    Writer.prototype.int64 = Writer.prototype.uint64;

    /**
     * Writes a signed 64 bit value as a varint, zig-zag encoded.
     * @param {Long|number|string} value Value to write
     * @returns {Writer} `this`
     * @throws {TypeError} If `value` is a string and no long library is present.
     */
    Writer.prototype.sint64 = function write_sint64(value) {
        var bits = LongBits.from(value).zzEncode();
        return this._push(writeVarint64, bits.length(), bits);
    };

    /**
     * Writes a boolish value as a varint.
     * @param {boolean} value Value to write
     * @returns {Writer} `this`
     */
    Writer.prototype.bool = function write_bool(value) {
        return this._push(writeByte, 1, value ? 1 : 0);
    };

    function writeFixed32(val, buf, pos) {
        buf[pos] = val & 255;
        buf[pos + 1] = val >>> 8 & 255;
        buf[pos + 2] = val >>> 16 & 255;
        buf[pos + 3] = val >>> 24;
    }

    /**
     * Writes an unsigned 32 bit value as fixed 32 bits.
     * @param {number} value Value to write
     * @returns {Writer} `this`
     */
    Writer.prototype.fixed32 = function write_fixed32(value) {
        return this._push(writeFixed32, 4, value >>> 0);
    };

    /**
     * Writes a signed 32 bit value as fixed 32 bits.
     * @function
     * @param {number} value Value to write
     * @returns {Writer} `this`
     */
    Writer.prototype.sfixed32 = Writer.prototype.fixed32;

    /**
     * Writes an unsigned 64 bit value as fixed 64 bits.
     * @param {Long|number|string} value Value to write
     * @returns {Writer} `this`
     * @throws {TypeError} If `value` is a string and no long library is present.
     */
    Writer.prototype.fixed64 = function write_fixed64(value) {
        var bits = LongBits.from(value);
        return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
    };

    /**
     * Writes a signed 64 bit value as fixed 64 bits.
     * @function
     * @param {Long|number|string} value Value to write
     * @returns {Writer} `this`
     * @throws {TypeError} If `value` is a string and no long library is present.
     */
    Writer.prototype.sfixed64 = Writer.prototype.fixed64;

    /**
     * Writes a float (32 bit).
     * @function
     * @param {number} value Value to write
     * @returns {Writer} `this`
     */
    Writer.prototype.float = function write_float(value) {
        return this._push(util.float.writeFloatLE, 4, value);
    };

    /**
     * Writes a double (64 bit float).
     * @function
     * @param {number} value Value to write
     * @returns {Writer} `this`
     */
    Writer.prototype.double = function write_double(value) {
        return this._push(util.float.writeDoubleLE, 8, value);
    };

    var writeBytes = util.Array.prototype.set ? function writeBytes_set(val, buf, pos) {
        buf.set(val, pos); // also works for plain array values
    }
    /* istanbul ignore next */
    : function writeBytes_for(val, buf, pos) {
        for (var i = 0; i < val.length; ++i) buf[pos + i] = val[i];
    };

    /**
     * Writes a sequence of bytes.
     * @param {Uint8Array|string} value Buffer or string to write
     * @returns {Writer} `this`
     */
    Writer.prototype.bytes = function write_bytes(value) {
        var len = value.length >>> 0;
        if (!len) return this._push(writeByte, 1, 0);

        if (util.isString(value)) {
            //len = (value = util.stringToBytes(value)).length;
            //var buf = Writer.alloc(len = base64.length(value));
            //base64.decode(value, buf, 0);
            //value = buf;
            var buf = Writer.alloc(len = utf8.length(value));
            utf8.write(value, buf, 0);
            value = buf;
        }
        return this.uint32(len)._push(writeBytes, len, value);
    };

    /**
     * Writes a string.
     * @param {string} value Value to write
     * @returns {Writer} `this`
     */
    Writer.prototype.string = function write_string(value) {
        var len = utf8.length(value);
        return len ? this.uint32(len)._push(utf8.write, len, value) : this._push(writeByte, 1, 0);
    };

    /**
     * Forks this writer's state by pushing it to a stack.
     * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
     * @returns {Writer} `this`
     */
    Writer.prototype.fork = function fork() {
        this.states = new State(this);
        this.head = this.tail = new Op(noop, 0, 0);
        this.len = 0;
        return this;
    };

    /**
     * Resets this instance to the last state.
     * @returns {Writer} `this`
     */
    Writer.prototype.reset = function reset() {
        if (this.states) {
            this.head = this.states.head;
            this.tail = this.states.tail;
            this.len = this.states.len;
            this.states = this.states.next;
        } else {
            this.head = this.tail = new Op(noop, 0, 0);
            this.len = 0;
        }
        return this;
    };

    /**
     * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
     * @returns {Writer} `this`
     */
    Writer.prototype.ldelim = function ldelim() {
        var head = this.head,
            tail = this.tail,
            len = this.len;
        this.reset().uint32(len);
        if (len) {
            this.tail.next = head.next; // skip noop
            this.tail = tail;
            this.len += len;
        }
        return this;
    };

    /**
     * Finishes the write operation.
     * @returns {Uint8Array} Finished buffer
     */
    Writer.prototype.finish = function finish() {
        var head = this.head.next,


        // skip noop
        buf = this.constructor.alloc(this.len),
            pos = 0;
        while (head) {
            head.fn(head.val, buf, pos);
            pos += head.len;
            head = head.next;
        }
        // this.head = this.tail = null;
        return buf;
    };

    Writer._configure = function () {

        //util      = require("./util");
        LongBits = __webpack_require__(11);
        base64 = __webpack_require__(17);
        utf8 = __webpack_require__(8);
    };

    /***/
},
/* 16 */
/***/function (module, exports) {

    /**
     * Created by zhangmiao on 2018/3/13.
     */

    module.exports = {};

    /***/
},
/* 17 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    /**
     * A minimal base64 implementation for number arrays.
     * @memberof util
     * @namespace
     */

    var base64 = module.exports;

    /**
     * Calculates the byte length of a base64 encoded string.
     * @param {string} string Base64 encoded string
     * @returns {number} Byte length
     */
    base64.length = function length(string) {
        var p = string.length;
        if (!p) return 0;
        var n = 0;
        while (--p % 4 > 1 && string.charAt(p) === "=") ++n;
        return Math.ceil(string.length * 3) / 4 - n;
    };

    // Base64 encoding table
    var b64 = [];

    // Base64 decoding table
    var s64 = [];

    // 65..90, 97..122, 48..57, 43, 47
    for (var i = 0; i < 64;) s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;

    /**
     * Encodes a buffer to a base64 encoded string.
     * @param {Uint8Array} buffer Source buffer
     * @param {number} start Source start
     * @param {number} end Source end
     * @returns {string} Base64 encoded string
     */
    base64.encode = function encode(buffer, start, end) {
        var parts = null,
            chunk = [];
        var i = 0,


        // output index
        j = 0,


        // goto index
        t; // temporary
        while (start < end) {
            var b = buffer[start++];
            switch (j) {
                case 0:
                    chunk[i++] = b64[b >> 2];
                    t = (b & 3) << 4;
                    j = 1;
                    break;
                case 1:
                    chunk[i++] = b64[t | b >> 4];
                    t = (b & 15) << 2;
                    j = 2;
                    break;
                case 2:
                    chunk[i++] = b64[t | b >> 6];
                    chunk[i++] = b64[b & 63];
                    j = 0;
                    break;
            }
            if (i > 8191) {
                (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
                i = 0;
            }
        }
        if (j) {
            chunk[i++] = b64[t];
            chunk[i++] = 61;
            if (j === 1) chunk[i++] = 61;
        }
        if (parts) {
            if (i) parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
            return parts.join("");
        }
        return String.fromCharCode.apply(String, chunk.slice(0, i));
    };

    var invalidEncoding = "invalid encoding";

    /**
     * Decodes a base64 encoded string to a buffer.
     * @param {string} string Source string
     * @param {Uint8Array} buffer Destination buffer
     * @param {number} offset Destination offset
     * @returns {number} Number of bytes written
     * @throws {Error} If encoding is invalid
     */
    base64.decode = function decode(string, buffer, offset) {
        var start = offset;
        var j = 0,


        // goto index
        t; // temporary
        for (var i = 0; i < string.length;) {
            var c = string.charCodeAt(i++);
            if (c === 61 && j > 1) break;
            if ((c = s64[c]) === undefined) throw Error(invalidEncoding);
            switch (j) {
                case 0:
                    t = c;
                    j = 1;
                    break;
                case 1:
                    buffer[offset++] = t << 2 | (c & 48) >> 4;
                    t = c;
                    j = 2;
                    break;
                case 2:
                    buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
                    t = c;
                    j = 3;
                    break;
                case 3:
                    buffer[offset++] = (t & 3) << 6 | c;
                    j = 0;
                    break;
            }
        }
        if (j === 1) throw Error(invalidEncoding);
        return offset - start;
    };

    /**
     * Tests if the specified string appears to be base64 encoded.
     * @param {string} string String to test
     * @returns {boolean} `true` if probably base64 encoded, otherwise false
     */
    base64.test = function test(string) {
        return (/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string)
        );
    };

    /***/
},
/* 18 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    module.exports = parse;

    parse.filename = null;
    parse.defaults = { keepCase: false };

    var tokenize, Root, Type, Field, MapField, OneOf, Enum, Service, Method, types, util;

    var base10Re = /^[1-9][0-9]*$/,
        base10NegRe = /^-?[1-9][0-9]*$/,
        base16Re = /^0[x][0-9a-fA-F]+$/,
        base16NegRe = /^-?0[x][0-9a-fA-F]+$/,
        base8Re = /^0[0-7]+$/,
        base8NegRe = /^-?0[0-7]+$/,
        numberRe = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,
        nameRe = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
        typeRefRe = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)+$/,
        fqTypeRefRe = /^(?:\.[a-zA-Z][a-zA-Z_0-9]*)+$/;

    /**
     * Result object returned from {@link parse}.
     * @interface IParserResult
     * @property {string|undefined} package Package name, if declared
     * @property {string[]|undefined} imports Imports, if any
     * @property {string[]|undefined} weakImports Weak imports, if any
     * @property {string|undefined} syntax Syntax, if specified (either `"proto2"` or `"proto3"`)
     * @property {Root} root Populated root instance
     */

    /**
     * Options modifying the behavior of {@link parse}.
     * @interface IParseOptions
     * @property {boolean} [keepCase=false] Keeps field casing instead of converting to camel case
     * @property {boolean} [alternateCommentMode=false] Recognize double-slash comments in addition to doc-block comments.
     */

    /**
     * Options modifying the behavior of JSON serialization.
     * @interface IToJSONOptions
     * @property {boolean} [keepComments=false] Serializes comments.
     */

    /**
     * Parses the given .proto source and returns an object with the parsed contents.
     * @param {string} source Source contents
     * @param {Root} root Root to populate
     * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
     * @returns {IParserResult} Parser result
     * @property {string} filename=null Currently processing file name for error reporting, if known
     * @property {IParseOptions} defaults Default {@link IParseOptions}
     */
    function parse(source, root, options) {
        /* eslint-disable callback-return */
        if (!(root instanceof Root)) {
            options = root;
            root = new Root();
        }
        if (!options) options = parse.defaults;

        var tn = tokenize(source, options.alternateCommentMode || false),
            next = tn.next,
            push = tn.push,
            peek = tn.peek,
            skip = tn.skip,
            cmnt = tn.cmnt;

        var head = true,
            pkg,
            imports,
            weakImports,
            syntax,
            isProto3 = false;

        var ptr = root;

        var applyCase = options.keepCase ? function (name) {
            return name;
        } : util.camelCase;

        /* istanbul ignore next */
        function illegal(token, name, insideTryCatch) {
            var filename = parse.filename;
            if (!insideTryCatch) parse.filename = null;
            return Error("illegal " + (name || "token") + " '" + token + "' (" + (filename ? filename + ", " : "") + "line " + tn.line + ")");
        }

        function readString() {
            var values = [],
                token;
            do {
                /* istanbul ignore if */
                if ((token = next()) !== "\"" && token !== "'") throw illegal(token);

                values.push(next());
                skip(token);
                token = peek();
            } while (token === "\"" || token === "'");
            return values.join("");
        }

        function readValue(acceptTypeRef) {
            var token = next();
            switch (token) {
                case "'":
                case "\"":
                    push(token);
                    return readString();
                case "true":case "TRUE":
                    return true;
                case "false":case "FALSE":
                    return false;
            }
            try {
                return parseNumber(token, /* insideTryCatch */true);
            } catch (e) {

                /* istanbul ignore else */
                if (acceptTypeRef && typeRefRe.test(token)) return token;

                /* istanbul ignore next */
                throw illegal(token, "value");
            }
        }

        function readRanges(target, acceptStrings) {
            var token, start;
            do {
                if (acceptStrings && ((token = peek()) === "\"" || token === "'")) target.push(readString());else target.push([start = parseId(next()), skip("to", true) ? parseId(next()) : start]);
            } while (skip(",", true));
            skip(";");
        }

        function parseNumber(token, insideTryCatch) {
            var sign = 1;
            if (token.charAt(0) === "-") {
                sign = -1;
                token = token.substring(1);
            }
            switch (token) {
                case "inf":case "INF":case "Inf":
                    return sign * Infinity;
                case "nan":case "NAN":case "Nan":case "NaN":
                    return NaN;
                case "0":
                    return 0;
            }
            if (base10Re.test(token)) return sign * parseInt(token, 10);
            if (base16Re.test(token)) return sign * parseInt(token, 16);
            if (base8Re.test(token)) return sign * parseInt(token, 8);

            /* istanbul ignore else */
            if (numberRe.test(token)) return sign * parseFloat(token);

            /* istanbul ignore next */
            throw illegal(token, "number", insideTryCatch);
        }

        function parseId(token, acceptNegative) {
            switch (token) {
                case "max":case "MAX":case "Max":
                    return 536870911;
                case "0":
                    return 0;
            }

            /* istanbul ignore if */
            if (!acceptNegative && token.charAt(0) === "-") throw illegal(token, "id");

            if (base10NegRe.test(token)) return parseInt(token, 10);
            if (base16NegRe.test(token)) return parseInt(token, 16);

            /* istanbul ignore else */
            if (base8NegRe.test(token)) return parseInt(token, 8);

            /* istanbul ignore next */
            throw illegal(token, "id");
        }

        function parsePackage() {

            /* istanbul ignore if */
            if (pkg !== undefined) throw illegal("package");

            pkg = next();

            /* istanbul ignore if */
            if (!typeRefRe.test(pkg)) throw illegal(pkg, "name");

            ptr = ptr.define(pkg);
            skip(";");
        }

        function parseImport() {
            var token = peek();
            var whichImports;
            switch (token) {
                case "weak":
                    whichImports = weakImports || (weakImports = []);
                    next();
                    break;
                case "public":
                    next();
                // eslint-disable-line no-fallthrough
                default:
                    whichImports = imports || (imports = []);
                    break;
            }
            token = readString();
            skip(";");
            whichImports.push(token);
        }

        function parseSyntax() {
            skip("=");
            syntax = readString();
            isProto3 = syntax === "proto3";

            /* istanbul ignore if */
            if (!isProto3 && syntax !== "proto2") throw illegal(syntax, "syntax");

            skip(";");
        }

        function parseCommon(parent, token) {
            switch (token) {

                case "option":
                    parseOption(parent, token);
                    skip(";");
                    return true;

                case "message":
                    parseType(parent, token);
                    return true;

                case "enum":
                    parseEnum(parent, token);
                    return true;

                case "service":
                    parseService(parent, token);
                    return true;

                case "extend":
                    parseExtension(parent, token);
                    return true;
            }
            return false;
        }

        function ifBlock(obj, fnIf, fnElse) {
            var trailingLine = tn.line;
            if (obj) {
                obj.comment = cmnt(); // try block-type comment
                obj.filename = parse.filename;
            }
            if (skip("{", true)) {
                var token;
                while ((token = next()) !== "}") fnIf(token);
                skip(";", true);
            } else {
                if (fnElse) fnElse();
                skip(";");
                if (obj && typeof obj.comment !== "string") obj.comment = cmnt(trailingLine); // try line-type comment if no block
            }
        }

        function parseType(parent, token) {

            /* istanbul ignore if */
            if (!nameRe.test(token = next())) throw illegal(token, "type name");

            var type = new Type(token);
            ifBlock(type, function parseType_block(token) {
                if (parseCommon(type, token)) return;

                switch (token) {

                    case "map":
                        parseMapField(type, token);
                        break;

                    case "required":
                    case "optional":
                    case "repeated":
                        parseField(type, token);
                        break;

                    case "oneof":
                        parseOneOf(type, token);
                        break;

                    case "extensions":
                        readRanges(type.extensions || (type.extensions = []));
                        break;

                    case "reserved":
                        readRanges(type.reserved || (type.reserved = []), true);
                        break;

                    default:
                        /* istanbul ignore if */
                        if (!isProto3 || !typeRefRe.test(token)) throw illegal(token);

                        push(token);
                        parseField(type, "optional");
                        break;
                }
            });
            parent.add(type);
        }

        function parseField(parent, rule, extend) {
            var type = next();
            if (type === "group") {
                parseGroup(parent, rule);
                return;
            }

            /* istanbul ignore if */
            if (!typeRefRe.test(type)) throw illegal(type, "type");

            var name = next();

            /* istanbul ignore if */
            if (!nameRe.test(name)) throw illegal(name, "name");

            name = applyCase(name);
            skip("=");

            var field = new Field(name, parseId(next()), type, rule, extend);
            ifBlock(field, function parseField_block(token) {

                /* istanbul ignore else */
                if (token === "option") {
                    parseOption(field, token);
                    skip(";");
                } else throw illegal(token);
            }, function parseField_line() {
                parseInlineOptions(field);
            });
            parent.add(field);

            // JSON defaults to packed=true if not set so we have to set packed=false explicity when
            // parsing proto2 descriptors without the option, where applicable. This must be done for
            // all known packable types and anything that could be an enum (= is not a basic type).
            if (!isProto3 && field.repeated && (types.packed[type] !== undefined || types.basic[type] === undefined)) field.setOption("packed", false, /* ifNotSet */true);
        }

        function parseGroup(parent, rule) {
            var name = next();

            /* istanbul ignore if */
            if (!nameRe.test(name)) throw illegal(name, "name");

            var fieldName = util.lcFirst(name);
            if (name === fieldName) name = util.ucFirst(name);
            skip("=");
            var id = parseId(next());
            var type = new Type(name);
            type.group = true;
            var field = new Field(fieldName, id, name, rule);
            field.filename = parse.filename;
            ifBlock(type, function parseGroup_block(token) {
                switch (token) {

                    case "option":
                        parseOption(type, token);
                        skip(";");
                        break;

                    case "required":
                    case "optional":
                    case "repeated":
                        parseField(type, token);
                        break;

                    /* istanbul ignore next */
                    default:
                        throw illegal(token); // there are no groups with proto3 semantics
                }
            });
            parent.add(type).add(field);
        }

        function parseMapField(parent) {
            skip("<");
            var keyType = next();

            /* istanbul ignore if */
            if (types.mapKey[keyType] === undefined) throw illegal(keyType, "type");

            skip(",");
            var valueType = next();

            /* istanbul ignore if */
            if (!typeRefRe.test(valueType)) throw illegal(valueType, "type");

            skip(">");
            var name = next();

            /* istanbul ignore if */
            if (!nameRe.test(name)) throw illegal(name, "name");

            skip("=");
            var field = new MapField(applyCase(name), parseId(next()), keyType, valueType);
            ifBlock(field, function parseMapField_block(token) {

                /* istanbul ignore else */
                if (token === "option") {
                    parseOption(field, token);
                    skip(";");
                } else throw illegal(token);
            }, function parseMapField_line() {
                parseInlineOptions(field);
            });
            parent.add(field);
        }

        function parseOneOf(parent, token) {

            /* istanbul ignore if */
            if (!nameRe.test(token = next())) throw illegal(token, "name");

            var oneof = new OneOf(applyCase(token));
            ifBlock(oneof, function parseOneOf_block(token) {
                if (token === "option") {
                    parseOption(oneof, token);
                    skip(";");
                } else {
                    push(token);
                    parseField(oneof, "optional");
                }
            });
            parent.add(oneof);
        }

        function parseEnum(parent, token) {

            /* istanbul ignore if */
            if (!nameRe.test(token = next())) throw illegal(token, "name");

            var enm = new Enum(token);
            ifBlock(enm, function parseEnum_block(token) {
                switch (token) {
                    case "option":
                        parseOption(enm, token);
                        skip(";");
                        break;

                    case "reserved":
                        readRanges(enm.reserved || (enm.reserved = []), true);
                        break;

                    default:
                        parseEnumValue(enm, token);
                }
            });
            parent.add(enm);
        }

        function parseEnumValue(parent, token) {

            /* istanbul ignore if */
            if (!nameRe.test(token)) throw illegal(token, "name");

            skip("=");
            var value = parseId(next(), true),
                dummy = {};
            ifBlock(dummy, function parseEnumValue_block(token) {

                /* istanbul ignore else */
                if (token === "option") {
                    parseOption(dummy, token); // skip
                    skip(";");
                } else throw illegal(token);
            }, function parseEnumValue_line() {
                parseInlineOptions(dummy); // skip
            });
            parent.add(token, value, dummy.comment);
        }

        function parseOption(parent, token) {
            var isCustom = skip("(", true);

            /* istanbul ignore if */
            if (!typeRefRe.test(token = next())) throw illegal(token, "name");

            var name = token;
            if (isCustom) {
                skip(")");
                name = "(" + name + ")";
                token = peek();
                if (fqTypeRefRe.test(token)) {
                    name += token;
                    next();
                }
            }
            skip("=");
            parseOptionValue(parent, name);
        }

        function parseOptionValue(parent, name) {
            if (skip("{", true)) {
                // { a: "foo" b { c: "bar" } }
                do {
                    /* istanbul ignore if */
                    if (!nameRe.test(token = next())) throw illegal(token, "name");

                    if (peek() === "{") parseOptionValue(parent, name + "." + token);else {
                        skip(":");
                        if (peek() === "{") parseOptionValue(parent, name + "." + token);else setOption(parent, name + "." + token, readValue(true));
                    }
                } while (!skip("}", true));
            } else setOption(parent, name, readValue(true));
            // Does not enforce a delimiter to be universal
        }

        function setOption(parent, name, value) {
            if (parent.setOption) parent.setOption(name, value);
        }

        function parseInlineOptions(parent) {
            if (skip("[", true)) {
                do {
                    parseOption(parent, "option");
                } while (skip(",", true));
                skip("]");
            }
            return parent;
        }

        function parseService(parent, token) {

            /* istanbul ignore if */
            if (!nameRe.test(token = next())) throw illegal(token, "service name");

            var service = new Service(token);
            ifBlock(service, function parseService_block(token) {
                if (parseCommon(service, token)) return;

                /* istanbul ignore else */
                if (token === "rpc") parseMethod(service, token);else throw illegal(token);
            });
            parent.add(service);
        }

        function parseMethod(parent, token) {
            var type = token;

            /* istanbul ignore if */
            if (!nameRe.test(token = next())) throw illegal(token, "name");

            var name = token,
                requestType,
                requestStream,
                responseType,
                responseStream;

            skip("(");
            if (skip("stream", true)) requestStream = true;

            /* istanbul ignore if */
            if (!typeRefRe.test(token = next())) throw illegal(token);

            requestType = token;
            skip(")");skip("returns");skip("(");
            if (skip("stream", true)) responseStream = true;

            /* istanbul ignore if */
            if (!typeRefRe.test(token = next())) throw illegal(token);

            responseType = token;
            skip(")");

            var method = new Method(name, type, requestType, responseType, requestStream, responseStream);
            ifBlock(method, function parseMethod_block(token) {

                /* istanbul ignore else */
                if (token === "option") {
                    parseOption(method, token);
                    skip(";");
                } else throw illegal(token);
            });
            parent.add(method);
        }

        function parseExtension(parent, token) {

            /* istanbul ignore if */
            if (!typeRefRe.test(token = next())) throw illegal(token, "reference");

            var reference = token;
            ifBlock(null, function parseExtension_block(token) {
                switch (token) {

                    case "required":
                    case "repeated":
                    case "optional":
                        parseField(parent, token, reference);
                        break;

                    default:
                        /* istanbul ignore if */
                        if (!isProto3 || !typeRefRe.test(token)) throw illegal(token);
                        push(token);
                        parseField(parent, "optional", reference);
                        break;
                }
            });
        }

        var token;
        while ((token = next()) !== null) {
            switch (token) {

                case "package":

                    /* istanbul ignore if */
                    if (!head) throw illegal(token);

                    parsePackage();
                    break;

                case "import":

                    /* istanbul ignore if */
                    if (!head) throw illegal(token);

                    parseImport();
                    break;

                case "syntax":

                    /* istanbul ignore if */
                    if (!head) throw illegal(token);

                    parseSyntax();
                    break;

                case "option":

                    /* istanbul ignore if */
                    if (!head) throw illegal(token);

                    parseOption(ptr, token);
                    skip(";");
                    break;

                default:

                    /* istanbul ignore else */
                    if (parseCommon(ptr, token)) {
                        head = false;
                        continue;
                    }

                    /* istanbul ignore next */
                    throw illegal(token);
            }
        }

        parse.filename = null;
        return {
            "package": pkg,
            "imports": imports,
            weakImports: weakImports,
            syntax: syntax,
            root: root
        };
    }

    /**
     * Parses the given .proto source and returns an object with the parsed contents.
     * @name parse
     * @function
     * @param {string} source Source contents
     * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
     * @returns {IParserResult} Parser result
     * @property {string} filename=null Currently processing file name for error reporting, if known
     * @property {IParseOptions} defaults Default {@link IParseOptions}
     * @variation 2
     */
    parse._configure = function () {
        tokenize = __webpack_require__(19), Root = __webpack_require__(9), Type = __webpack_require__(3), Field = __webpack_require__(2), MapField = __webpack_require__(12), OneOf = __webpack_require__(7), Enum = __webpack_require__(1), Service = __webpack_require__(10), Method = __webpack_require__(13), types = __webpack_require__(5), util = __webpack_require__(0);
    };

    /***/
},
/* 19 */
/***/function (module, exports) {

    module.exports = tokenize;

    var delimRe = /[\s{}=;:[\],'"()<>]/g,
        stringDoubleRe = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
        stringSingleRe = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;

    var setCommentRe = /^ *[*/]+ */,
        setCommentAltRe = /^\s*\*?\/*/,
        setCommentSplitRe = /\n/g,
        whitespaceRe = /\s/,
        unescapeRe = /\\(.?)/g;

    var unescapeMap = {
        "0": "\0",
        "r": "\r",
        "n": "\n",
        "t": "\t"
    };

    /**
     * Unescapes a string.
     * @param {string} str String to unescape
     * @returns {string} Unescaped string
     * @property {Object.<string,string>} map Special characters map
     * @memberof tokenize
     */
    function unescape(str) {
        return str.replace(unescapeRe, function ($0, $1) {
            switch ($1) {
                case "\\":
                case "":
                    return $1;
                default:
                    return unescapeMap[$1] || "";
            }
        });
    }

    tokenize.unescape = unescape;

    /**
     * Gets the next token and advances.
     * @typedef TokenizerHandleNext
     * @type {function}
     * @returns {string|null} Next token or `null` on eof
     */

    /**
     * Peeks for the next token.
     * @typedef TokenizerHandlePeek
     * @type {function}
     * @returns {string|null} Next token or `null` on eof
     */

    /**
     * Pushes a token back to the stack.
     * @typedef TokenizerHandlePush
     * @type {function}
     * @param {string} token Token
     * @returns {undefined}
     */

    /**
     * Skips the next token.
     * @typedef TokenizerHandleSkip
     * @type {function}
     * @param {string} expected Expected token
     * @param {boolean} [optional=false] If optional
     * @returns {boolean} Whether the token matched
     * @throws {Error} If the token didn't match and is not optional
     */

    /**
     * Gets the comment on the previous line or, alternatively, the line comment on the specified line.
     * @typedef TokenizerHandleCmnt
     * @type {function}
     * @param {number} [line] Line number
     * @returns {string|null} Comment text or `null` if none
     */

    /**
     * Handle object returned from {@link tokenize}.
     * @interface ITokenizerHandle
     * @property {TokenizerHandleNext} next Gets the next token and advances (`null` on eof)
     * @property {TokenizerHandlePeek} peek Peeks for the next token (`null` on eof)
     * @property {TokenizerHandlePush} push Pushes a token back to the stack
     * @property {TokenizerHandleSkip} skip Skips a token, returns its presence and advances or, if non-optional and not present, throws
     * @property {TokenizerHandleCmnt} cmnt Gets the comment on the previous line or the line comment on the specified line, if any
     * @property {number} line Current line number
     */

    /**
     * Tokenizes the given .proto source and returns an object with useful utility functions.
     * @param {string} source Source contents
     * @param {boolean} alternateCommentMode Whether we should activate alternate comment parsing mode.
     * @returns {ITokenizerHandle} Tokenizer handle
     */
    function tokenize(source, alternateCommentMode) {
        /* eslint-disable callback-return */
        source = source.toString();

        var offset = 0,
            length = source.length,
            line = 1,
            commentType = null,
            commentText = null,
            commentLine = 0,
            commentLineEmpty = false;

        var stack = [];

        var stringDelim = null;

        /* istanbul ignore next */
        /**
         * Creates an error for illegal syntax.
         * @param {string} subject Subject
         * @returns {Error} Error created
         * @inner
         */
        function illegal(subject) {
            return Error("illegal " + subject + " (line " + line + ")");
        }

        /**
         * Reads a string till its end.
         * @returns {string} String read
         * @inner
         */
        function readString() {
            var re = stringDelim === "'" ? stringSingleRe : stringDoubleRe;
            re.lastIndex = offset - 1;
            var match = re.exec(source);
            if (!match) throw illegal("string");
            offset = re.lastIndex;
            push(stringDelim);
            stringDelim = null;
            return unescape(match[1]);
        }

        /**
         * Gets the character at `pos` within the source.
         * @param {number} pos Position
         * @returns {string} Character
         * @inner
         */
        function charAt(pos) {
            return source.charAt(pos);
        }

        /**
         * Sets the current comment text.
         * @param {number} start Start offset
         * @param {number} end End offset
         * @returns {undefined}
         * @inner
         */
        function setComment(start, end) {
            commentType = source.charAt(start++);
            commentLine = line;
            commentLineEmpty = false;
            var lookback;
            if (alternateCommentMode) {
                lookback = 2; // alternate comment parsing: "//" or "/*"
            } else {
                lookback = 3; // "///" or "/**"
            }
            var commentOffset = start - lookback,
                c;
            do {
                if (--commentOffset < 0 || (c = source.charAt(commentOffset)) === "\n") {
                    commentLineEmpty = true;
                    break;
                }
            } while (c === " " || c === "\t");
            var lines = source.substring(start, end).split(setCommentSplitRe);
            for (var i = 0; i < lines.length; ++i) lines[i] = lines[i].replace(alternateCommentMode ? setCommentAltRe : setCommentRe, "").trim();
            commentText = lines.join("\n").trim();
        }

        function isDoubleSlashCommentLine(startOffset) {
            var endOffset = findEndOfLine(startOffset);

            // see if remaining line matches comment pattern
            var lineText = source.substring(startOffset, endOffset);
            // look for 1 or 2 slashes since startOffset would already point past
            // the first slash that started the comment.
            var isComment = /^\s*\/{1,2}/.test(lineText);
            return isComment;
        }

        function findEndOfLine(cursor) {
            // find end of cursor's line
            var endOffset = cursor;
            while (endOffset < length && charAt(endOffset) !== "\n") {
                endOffset++;
            }
            return endOffset;
        }

        /**
         * Obtains the next token.
         * @returns {string|null} Next token or `null` on eof
         * @inner
         */
        function next() {
            if (stack.length > 0) return stack.shift();
            if (stringDelim) return readString();
            var repeat, prev, curr, start, isDoc;
            do {
                if (offset === length) return null;
                repeat = false;
                while (whitespaceRe.test(curr = charAt(offset))) {
                    if (curr === "\n") ++line;
                    if (++offset === length) return null;
                }

                if (charAt(offset) === "/") {
                    if (++offset === length) {
                        throw illegal("comment");
                    }
                    if (charAt(offset) === "/") {
                        // Line
                        if (!alternateCommentMode) {
                            // check for triple-slash comment
                            isDoc = charAt(start = offset + 1) === "/";

                            while (charAt(++offset) !== "\n") {
                                if (offset === length) {
                                    return null;
                                }
                            }
                            ++offset;
                            if (isDoc) {
                                setComment(start, offset - 1);
                            }
                            ++line;
                            repeat = true;
                        } else {
                            // check for double-slash comments, consolidating consecutive lines
                            start = offset;
                            isDoc = false;
                            if (isDoubleSlashCommentLine(offset)) {
                                isDoc = true;
                                do {
                                    offset = findEndOfLine(offset);
                                    if (offset === length) {
                                        break;
                                    }
                                    offset++;
                                } while (isDoubleSlashCommentLine(offset));
                            } else {
                                offset = Math.min(length, findEndOfLine(offset) + 1);
                            }
                            if (isDoc) {
                                setComment(start, offset);
                            }
                            line++;
                            repeat = true;
                        }
                    } else if ((curr = charAt(offset)) === "*") {
                        /* Block */
                        // check for /** (regular comment mode) or /* (alternate comment mode)
                        start = offset + 1;
                        isDoc = alternateCommentMode || charAt(start) === "*";
                        do {
                            if (curr === "\n") {
                                ++line;
                            }
                            if (++offset === length) {
                                throw illegal("comment");
                            }
                            prev = curr;
                            curr = charAt(offset);
                        } while (prev !== "*" || curr !== "/");
                        ++offset;
                        if (isDoc) {
                            setComment(start, offset - 2);
                        }
                        repeat = true;
                    } else {
                        return "/";
                    }
                }
            } while (repeat);

            // offset !== length if we got here

            var end = offset;
            delimRe.lastIndex = 0;
            var delim = delimRe.test(charAt(end++));
            if (!delim) while (end < length && !delimRe.test(charAt(end))) ++end;
            var token = source.substring(offset, offset = end);
            if (token === "\"" || token === "'") stringDelim = token;
            return token;
        }

        /**
         * Pushes a token back to the stack.
         * @param {string} token Token
         * @returns {undefined}
         * @inner
         */
        function push(token) {
            stack.push(token);
        }

        /**
         * Peeks for the next token.
         * @returns {string|null} Token or `null` on eof
         * @inner
         */
        function peek() {
            if (!stack.length) {
                var token = next();
                if (token === null) return null;
                push(token);
            }
            return stack[0];
        }

        /**
         * Skips a token.
         * @param {string} expected Expected token
         * @param {boolean} [optional=false] Whether the token is optional
         * @returns {boolean} `true` when skipped, `false` if not
         * @throws {Error} When a required token is not present
         * @inner
         */
        function skip(expected, optional) {
            var actual = peek(),
                equals = actual === expected;
            if (equals) {
                next();
                return true;
            }
            if (!optional) throw illegal("token '" + actual + "', '" + expected + "' expected");
            return false;
        }

        /**
         * Gets a comment.
         * @param {number} [trailingLine] Line number if looking for a trailing comment
         * @returns {string|null} Comment text
         * @inner
         */
        function cmnt(trailingLine) {
            var ret = null;
            if (trailingLine === undefined) {
                if (commentLine === line - 1 && (alternateCommentMode || commentType === "*" || commentLineEmpty)) {
                    ret = commentText;
                }
            } else {
                /* istanbul ignore else */
                if (commentLine < trailingLine) {
                    peek();
                }
                if (commentLine === trailingLine && !commentLineEmpty && (alternateCommentMode || commentType === "/")) {
                    ret = commentText;
                }
            }
            return ret;
        }

        return Object.defineProperty({
            next: next,
            peek: peek,
            push: push,
            skip: skip,
            cmnt: cmnt
        }, "line", {
            get: function () {
                return line;
            }
        });
        /* eslint-enable callback-return */
    }

    /***/
},
/* 20 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    module.exports = Service;
    var util = __webpack_require__(0);

    // Extends EventEmitter
    (Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;

    /**
     * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
     *
     * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
     * @typedef rpc.ServiceMethodCallback
     * @template TRes extends Message<TRes>
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {TRes} [response] Response message
     * @returns {undefined}
     */

    /**
     * A service method part of a {@link rpc.Service} as created by {@link Service.create}.
     * @typedef rpc.ServiceMethod
     * @template TReq extends Message<TReq>
     * @template TRes extends Message<TRes>
     * @type {function}
     * @param {TReq|Properties<TReq>} request Request message or plain object
     * @param {rpc.ServiceMethodCallback<TRes>} [callback] Node-style callback called with the error, if any, and the response message
     * @returns {Promise<Message<TRes>>} Promise if `callback` has been omitted, otherwise `undefined`
     */

    /**
     * Constructs a new RPC service instance.
     * @classdesc An RPC service as returned by {@link Service#create}.
     * @exports rpc.Service
     * @extends util.EventEmitter
     * @constructor
     * @param {RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function Service(rpcImpl, requestDelimited, responseDelimited) {

        if (typeof rpcImpl !== "function") throw TypeError("rpcImpl must be a function");

        util.EventEmitter.call(this);

        /**
         * RPC implementation. Becomes `null` once the service is ended.
         * @type {RPCImpl|null}
         */
        this.rpcImpl = rpcImpl;

        /**
         * Whether requests are length-delimited.
         * @type {boolean}
         */
        this.requestDelimited = Boolean(requestDelimited);

        /**
         * Whether responses are length-delimited.
         * @type {boolean}
         */
        this.responseDelimited = Boolean(responseDelimited);
    }

    /**
     * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
     * @param {Method|rpc.ServiceMethod<TReq,TRes>} method Reflected or static method
     * @param {Constructor<TReq>} requestCtor Request constructor
     * @param {Constructor<TRes>} responseCtor Response constructor
     * @param {TReq|Properties<TReq>} request Request message or plain object
     * @param {rpc.ServiceMethodCallback<TRes>} callback Service callback
     * @returns {undefined}
     * @template TReq extends Message<TReq>
     * @template TRes extends Message<TRes>
     */
    Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {

        if (!request) throw TypeError("request must be specified");

        var self = this;
        if (!callback) return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);

        if (!self.rpcImpl) {
            setTimeout(function () {
                callback(Error("already ended"));
            }, 0);
            return undefined;
        }

        try {
            return self.rpcImpl(method, requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(), function rpcCallback(err, response) {

                if (err) {
                    self.emit("error", err, method);
                    return callback(err);
                }

                if (response === null) {
                    self.end( /* endedByRPC */true);
                    return undefined;
                }

                if (!(response instanceof responseCtor)) {
                    try {
                        response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
                    } catch (err) {
                        self.emit("error", err, method);
                        return callback(err);
                    }
                }

                self.emit("data", response, method);
                return callback(null, response);
            });
        } catch (err) {
            self.emit("error", err, method);
            setTimeout(function () {
                callback(err);
            }, 0);
            return undefined;
        }
    };

    /**
     * Ends this service and emits the `end` event.
     * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
     * @returns {rpc.Service} `this`
     */
    Service.prototype.end = function end(endedByRPC) {
        if (this.rpcImpl) {
            if (!endedByRPC) // signal end to rpcImpl
                this.rpcImpl(null, null, null);
            this.rpcImpl = null;
            this.emit("end").off();
        }
        return this;
    };

    /***/
},
/* 21 */
/***/function (module, exports) {

    module.exports = common;

    var commonRe = /\/|\./;

    /**
     * Provides common type definitions.
     * Can also be used to provide additional google types or your own custom types.
     * @param {string} name Short name as in `google/protobuf/[name].proto` or full file name
     * @param {Object.<string,*>} json JSON definition within `google.protobuf` if a short name, otherwise the file's root definition
     * @returns {undefined}
     * @property {INamespace} google/protobuf/any.proto Any
     * @property {INamespace} google/protobuf/duration.proto Duration
     * @property {INamespace} google/protobuf/empty.proto Empty
     * @property {INamespace} google/protobuf/field_mask.proto FieldMask
     * @property {INamespace} google/protobuf/struct.proto Struct, Value, NullValue and ListValue
     * @property {INamespace} google/protobuf/timestamp.proto Timestamp
     * @property {INamespace} google/protobuf/wrappers.proto Wrappers
     * @example
     * // manually provides descriptor.proto (assumes google/protobuf/ namespace and .proto extension)
     * protobuf.common("descriptor", descriptorJson);
     *
     * // manually provides a custom definition (uses my.foo namespace)
     * protobuf.common("my/foo/bar.proto", myFooBarJson);
     */
    function common(name, json) {
        if (!commonRe.test(name)) {
            name = "google/protobuf/" + name + ".proto";
            json = { nested: { google: { nested: { protobuf: { nested: json } } } } };
        }
        common[name] = json;
    }

    // Not provided because of limited use (feel free to discuss or to provide yourself):
    //
    // google/protobuf/descriptor.proto
    // google/protobuf/source_context.proto
    // google/protobuf/type.proto
    //
    // Stripped and pre-parsed versions of these non-bundled files are instead available as part of
    // the repository or package within the google/protobuf directory.

    common("any", {

        /**
         * Properties of a google.protobuf.Any message.
         * @interface IAny
         * @type {Object}
         * @property {string} [typeUrl]
         * @property {Uint8Array} [bytes]
         * @memberof common
         */
        Any: {
            fields: {
                type_url: {
                    type: "string",
                    id: 1
                },
                value: {
                    type: "bytes",
                    id: 2
                }
            }
        }
    });

    var timeType;

    common("duration", {

        /**
         * Properties of a google.protobuf.Duration message.
         * @interface IDuration
         * @type {Object}
         * @property {number|Long} [seconds]
         * @property {number} [nanos]
         * @memberof common
         */
        Duration: timeType = {
            fields: {
                seconds: {
                    type: "int64",
                    id: 1
                },
                nanos: {
                    type: "int32",
                    id: 2
                }
            }
        }
    });

    common("timestamp", {

        /**
         * Properties of a google.protobuf.Timestamp message.
         * @interface ITimestamp
         * @type {Object}
         * @property {number|Long} [seconds]
         * @property {number} [nanos]
         * @memberof common
         */
        Timestamp: timeType
    });

    common("empty", {

        /**
         * Properties of a google.protobuf.Empty message.
         * @interface IEmpty
         * @memberof common
         */
        Empty: {
            fields: {}
        }
    });

    common("struct", {

        /**
         * Properties of a google.protobuf.Struct message.
         * @interface IStruct
         * @type {Object}
         * @property {Object.<string,IValue>} [fields]
         * @memberof common
         */
        Struct: {
            fields: {
                fields: {
                    keyType: "string",
                    type: "Value",
                    id: 1
                }
            }
        },

        /**
         * Properties of a google.protobuf.Value message.
         * @interface IValue
         * @type {Object}
         * @property {string} [kind]
         * @property {0} [nullValue]
         * @property {number} [numberValue]
         * @property {string} [stringValue]
         * @property {boolean} [boolValue]
         * @property {IStruct} [structValue]
         * @property {IListValue} [listValue]
         * @memberof common
         */
        Value: {
            oneofs: {
                kind: {
                    oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]
                }
            },
            fields: {
                nullValue: {
                    type: "NullValue",
                    id: 1
                },
                numberValue: {
                    type: "double",
                    id: 2
                },
                stringValue: {
                    type: "string",
                    id: 3
                },
                boolValue: {
                    type: "bool",
                    id: 4
                },
                structValue: {
                    type: "Struct",
                    id: 5
                },
                listValue: {
                    type: "ListValue",
                    id: 6
                }
            }
        },

        NullValue: {
            values: {
                NULL_VALUE: 0
            }
        },

        /**
         * Properties of a google.protobuf.ListValue message.
         * @interface IListValue
         * @type {Object}
         * @property {Array.<IValue>} [values]
         * @memberof common
         */
        ListValue: {
            fields: {
                values: {
                    rule: "repeated",
                    type: "Value",
                    id: 1
                }
            }
        }
    });

    common("wrappers", {

        /**
         * Properties of a google.protobuf.DoubleValue message.
         * @interface IDoubleValue
         * @type {Object}
         * @property {number} [value]
         * @memberof common
         */
        DoubleValue: {
            fields: {
                value: {
                    type: "double",
                    id: 1
                }
            }
        },

        /**
         * Properties of a google.protobuf.FloatValue message.
         * @interface IFloatValue
         * @type {Object}
         * @property {number} [value]
         * @memberof common
         */
        FloatValue: {
            fields: {
                value: {
                    type: "float",
                    id: 1
                }
            }
        },

        /**
         * Properties of a google.protobuf.Int64Value message.
         * @interface IInt64Value
         * @type {Object}
         * @property {number|Long} [value]
         * @memberof common
         */
        Int64Value: {
            fields: {
                value: {
                    type: "int64",
                    id: 1
                }
            }
        },

        /**
         * Properties of a google.protobuf.UInt64Value message.
         * @interface IUInt64Value
         * @type {Object}
         * @property {number|Long} [value]
         * @memberof common
         */
        UInt64Value: {
            fields: {
                value: {
                    type: "uint64",
                    id: 1
                }
            }
        },

        /**
         * Properties of a google.protobuf.Int32Value message.
         * @interface IInt32Value
         * @type {Object}
         * @property {number} [value]
         * @memberof common
         */
        Int32Value: {
            fields: {
                value: {
                    type: "int32",
                    id: 1
                }
            }
        },

        /**
         * Properties of a google.protobuf.UInt32Value message.
         * @interface IUInt32Value
         * @type {Object}
         * @property {number} [value]
         * @memberof common
         */
        UInt32Value: {
            fields: {
                value: {
                    type: "uint32",
                    id: 1
                }
            }
        },

        /**
         * Properties of a google.protobuf.BoolValue message.
         * @interface IBoolValue
         * @type {Object}
         * @property {boolean} [value]
         * @memberof common
         */
        BoolValue: {
            fields: {
                value: {
                    type: "bool",
                    id: 1
                }
            }
        },

        /**
         * Properties of a google.protobuf.StringValue message.
         * @interface IStringValue
         * @type {Object}
         * @property {string} [value]
         * @memberof common
         */
        StringValue: {
            fields: {
                value: {
                    type: "string",
                    id: 1
                }
            }
        },

        /**
         * Properties of a google.protobuf.BytesValue message.
         * @interface IBytesValue
         * @type {Object}
         * @property {Uint8Array} [value]
         * @memberof common
         */
        BytesValue: {
            fields: {
                value: {
                    type: "bytes",
                    id: 1
                }
            }
        }
    });

    common("field_mask", {

        /**
         * Properties of a google.protobuf.FieldMask message.
         * @interface IDoubleValue
         * @type {Object}
         * @property {number} [value]
         * @memberof common
         */
        FieldMask: {
            fields: {
                paths: {
                    rule: "repeated",
                    type: "string",
                    id: 1
                }
            }
        }
    });

    /**
     * Gets the root definition of the specified common proto file.
     *
     * Bundled definitions are:
     * - google/protobuf/any.proto
     * - google/protobuf/duration.proto
     * - google/protobuf/empty.proto
     * - google/protobuf/field_mask.proto
     * - google/protobuf/struct.proto
     * - google/protobuf/timestamp.proto
     * - google/protobuf/wrappers.proto
     *
     * @param {string} file Proto file name
     * @returns {INamespace|null} Root definition or `null` if not defined
     */
    common.get = function get(file) {
        return common[file] || null;
    };

    /***/
},
/* 22 */
/***/function (module, exports, __webpack_require__) {

    /**
     * Created by zhangmiao on 2018/3/13.
     */

    module.exports = Reader;

    var util = __webpack_require__(0);

    var LongBits;
    var utf8;

    var BufferReader;

    function indexOutOfRange(reader, writeLength) {
        return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
    }

    function Reader(buffer) {

        /**
         * Read buffer.
         * @type {Uint8Array}
         */
        this.buf = buffer;

        /**
         * Read buffer position.
         * @type {number}
         */
        this.pos = 0;

        /**
         * Read buffer length.
         * @type {number}
         */
        this.len = buffer.length;
    }

    var create_array = typeof Uint8Array !== "undefined" ? function create_typed_array(buffer) {
        if (buffer instanceof Uint8Array || Array.isArray(buffer)) return new Reader(buffer);
        if (typeof ArrayBuffer !== "undefined" && buffer instanceof ArrayBuffer) //增加ArrayBuffer构建
            return new Reader(new Uint8Array(buffer));
        throw Error("illegal buffer");
    }
    /* istanbul ignore next */
    : function create_array(buffer) {
        if (Array.isArray(buffer)) return new Reader(buffer);
        throw Error("illegal buffer");
    };

    Reader.create = util.Buffer ? function create_buffer_setup(buffer) {
        return (Reader.create = function create_buffer(buffer) {
            return util.Buffer.isBuffer(buffer) ? new BufferReader(buffer)
            /* istanbul ignore next */
            : create_array(buffer);
        })(buffer);
    }
    /* istanbul ignore next */
    : create_array;

    Reader.prototype._slice = util.Array.prototype.subarray || /* istanbul ignore next */util.Array.prototype.slice;

    Reader.prototype.uint32 = function read_uint32_setup() {
        var value = 4294967295; // optimizer type-hint, tends to deopt otherwise (?!)
        return function read_uint32() {
            value = (this.buf[this.pos] & 127) >>> 0;if (this.buf[this.pos++] < 128) return value;
            value = (value | (this.buf[this.pos] & 127) << 7) >>> 0;if (this.buf[this.pos++] < 128) return value;
            value = (value | (this.buf[this.pos] & 127) << 14) >>> 0;if (this.buf[this.pos++] < 128) return value;
            value = (value | (this.buf[this.pos] & 127) << 21) >>> 0;if (this.buf[this.pos++] < 128) return value;
            value = (value | (this.buf[this.pos] & 15) << 28) >>> 0;if (this.buf[this.pos++] < 128) return value;

            /* istanbul ignore if */
            if ((this.pos += 5) > this.len) {
                this.pos = this.len;
                throw indexOutOfRange(this, 10);
            }
            return value;
        };
    }();

    Reader.prototype.int32 = function read_int32() {
        return this.uint32() | 0;
    };

    Reader.prototype.sint32 = function read_sint32() {
        var value = this.uint32();
        return value >>> 1 ^ -(value & 1) | 0;
    };

    function readLongVarint() {
        // tends to deopt with local vars for octet etc.
        var bits = new LongBits(0, 0);
        var i = 0;
        if (this.len - this.pos > 4) {
            // fast route (lo)
            for (; i < 4; ++i) {
                // 1st..4th
                bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
                if (this.buf[this.pos++] < 128) return bits;
            }
            // 5th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
            if (this.buf[this.pos++] < 128) return bits;
            i = 0;
        } else {
            for (; i < 3; ++i) {
                /* istanbul ignore if */
                if (this.pos >= this.len) throw indexOutOfRange(this);
                // 1st..3th
                bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
                if (this.buf[this.pos++] < 128) return bits;
            }
            // 4th
            bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
            return bits;
        }
        if (this.len - this.pos > 4) {
            // fast route (hi)
            for (; i < 5; ++i) {
                // 6th..10th
                bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
                if (this.buf[this.pos++] < 128) return bits;
            }
        } else {
            for (; i < 5; ++i) {
                /* istanbul ignore if */
                if (this.pos >= this.len) throw indexOutOfRange(this);
                // 6th..10th
                bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
                if (this.buf[this.pos++] < 128) return bits;
            }
        }
        /* istanbul ignore next */
        throw Error("invalid varint encoding");
    }

    Reader.prototype.bool = function read_bool() {
        return this.uint32() !== 0;
    };

    function readFixed32_end(buf, end) {
        // note that this uses `end`, not `pos`
        return (buf[end - 4] | buf[end - 3] << 8 | buf[end - 2] << 16 | buf[end - 1] << 24) >>> 0;
    }

    Reader.prototype.fixed32 = function read_fixed32() {

        /* istanbul ignore if */
        if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);

        return readFixed32_end(this.buf, this.pos += 4);
    };

    Reader.prototype.sfixed32 = function read_sfixed32() {

        /* istanbul ignore if */
        if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);

        return readFixed32_end(this.buf, this.pos += 4) | 0;
    };

    /* eslint-disable no-invalid-this */

    function readFixed64() /* this: Reader */{

        /* istanbul ignore if */
        if (this.pos + 8 > this.len) throw indexOutOfRange(this, 8);

        return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
    }

    Reader.prototype.uint64 = function read_uint64() {
        if (this.pos + 1 > this.len) throw indexOutOfRange(this, 1);

        var v = 0;
        var t = this.buf[this.pos];
        switch (t >> 4) {
            case 0:
                if (this.pos + 5 > this.len) throw indexOutOfRange(this, 5);
                v = util.float.readFloatLE(this.buf, this.pos + 1);
                this.pos += 5;
                break;
            case 1:
                if (this.pos + 9 > this.len) throw indexOutOfRange(this, 9);
                v = util.float.readDoubleLE(this.buf, this.pos + 1);
                this.pos += 9;
                break;
            case 2:
            case 7:
                v = t & 0xf;
                this.pos += 1;
                break;
            case 3:
            case 8:
                if (this.pos + 2 > this.len) throw indexOutOfRange(this, 2);
                v = this.buf[this.pos + 1];
                this.pos += 2;
                break;
            case 4:
            case 9:
                if (this.pos + 3 > this.len) throw indexOutOfRange(this, 3);
                v = (this.buf[this.pos + 2] << 8 | this.buf[this.pos + 1]) >>> 0;
                this.pos += 3;
                break;
            case 5:
            case 10:
                if (this.pos + 5 > this.len) throw indexOutOfRange(this, 5);
                //v = this.buf.readUInt32LE(this.pos+1)
                v = Math.floor(this.buf[this.pos + 4] * 0x1000000 + this.buf[this.pos + 3] * 0x10000 + this.buf[this.pos + 2] * 0x100 + this.buf[this.pos + 1]);
                this.pos += 5;
                break;
            case 6:
            case 11:
                if (this.pos + 9 > this.len) throw indexOutOfRange(this, 9);

                var lo = Math.floor(this.buf[this.pos + 4] * 0x1000000 + this.buf[this.pos + 3] * 0x10000 + this.buf[this.pos + 2] * 0x100 + this.buf[this.pos + 1]);
                var hi = Math.floor(this.buf[this.pos + 8] * 0x1000000 + this.buf[this.pos + 7] * 0x10000 + this.buf[this.pos + 6] * 0x100 + this.buf[this.pos + 5]);
                //var lo = this.buf.readUInt32LE(this.pos+1)
                //var hi = this.buf.readUInt32LE(this.pos+5)
                v = Math.floor(hi * 0x100000000 + lo);

                this.pos += 9;
                break;
        }

        if (t >> 4 >= 7) {
            v = -v;
        }
        return v;
    };

    Reader.prototype.float = function read_float() {

        /* istanbul ignore if */
        if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);

        var value = util.float.readFloatLE(this.buf, this.pos);
        this.pos += 4;
        return value;
    };

    Reader.prototype.double = function read_double() {

        /* istanbul ignore if */
        if (this.pos + 8 > this.len) throw indexOutOfRange(this, 4);

        var value = util.float.readDoubleLE(this.buf, this.pos);
        this.pos += 8;
        return value;
    };

    Reader.prototype.bytes = function read_bytes() {
        var length = this.uint32(),
            start = this.pos,
            end = this.pos + length;

        /* istanbul ignore if */
        if (end > this.len) throw indexOutOfRange(this, length);
        this.pos += length;
        if (Array.isArray(this.buf)) // plain array
            return this.buf.slice(start, end);
        return start === end // fix for IE 10/Win8 and others' subarray returning array of size 1
        ? new this.buf.constructor(0) : this._slice.call(this.buf, start, end);
    };

    Reader.prototype.string = function read_string() {
        var bytes = this.bytes();
        return utf8.read(bytes, 0, bytes.length);
    };

    Reader.prototype.skip = function skip(length) {
        if (typeof length === "number") {
            /* istanbul ignore if */
            if (this.pos + length > this.len) throw indexOutOfRange(this, length);
            this.pos += length;
        } else {
            do {
                /* istanbul ignore if */
                if (this.pos >= this.len) throw indexOutOfRange(this);
            } while (this.buf[this.pos++] & 128);
        }
        return this;
    };

    Reader.prototype.skipType = function (wireType) {
        switch (wireType) {
            case 0:
                this.skip();
                break;
            case 4:
                var t = this.buf[this.pos] >> 4;
                var skip_amount = 0;
                if (t == 0) {
                    skip_amount = 5;
                } else if (t == 1) {
                    skip_amount = 9;
                } else if (t == 2 || t == 7) {
                    skip_amount = 1;
                } else if (t == 3 || t == 8) {
                    skip_amount = 2;
                } else if (t == 4 || t == 9) {
                    skip_amount = 3;
                } else if (t == 5 || t == 10) {
                    skip_amount = 5;
                } else if (t == 6 || t == 11) {
                    skip_amount = 9;
                }
                this.skip(skip_amount);
                break;
            case 1:
                this.skip(8);
                break;
            case 2:
                this.skip(this.uint32());
                break;
            case 3:
                do {
                    // eslint-disable-line no-constant-condition
                    if ((wireType = this.uint32() & 7) === 4) break;
                    this.skipType(wireType);
                } while (true);
                break;
            case 5:
                this.skip(4);
                break;

            /* istanbul ignore next */
            default:
                throw Error("invalid wire type " + wireType + " at offset " + this.pos);
        }
        return this;
    };

    //这部分可能用不到
    Reader._configure = function () {

        //util       = require('./util');
        LongBits = __webpack_require__(11);
        utf8 = __webpack_require__(8);

        var fn = util.Long ? "toLong" : /* istanbul ignore next */"toNumber";
        util.merge(Reader.prototype, {

            int64: function read_int64() {
                return readLongVarint.call(this)[fn](false);
            },

            // uint64: function read_uint64() {
            //     return readLongVarint.call(this)[fn](true);
            // },

            sint64: function read_sint64() {
                return readLongVarint.call(this).zzDecode()[fn](false);
            },

            fixed64: function read_fixed64() {
                return readFixed64.call(this)[fn](true);
            },

            sfixed64: function read_sfixed64() {
                return readFixed64.call(this)[fn](false);
            }

        });
    };

    /***/
},
/* 23 */
/***/function (module, exports, __webpack_require__) {

    /**
     * Created by zhangmiao on 2018/3/14.
     */
    module.exports = verifier;

    var Enum;
    var util;

    function invalid(field, expected) {
        return field.name + ": " + expected + (field.repeated && expected !== "array" ? "[]" : field.map && expected !== "object" ? "{k:" + field.keyType + "}" : "") + " expected";
    }

    function verifyValue(field, fieldIndex, ref, options) {
        var _types = options.types;
        if (field.resolvedType) {
            if (field.resolvedType instanceof Enum) {
                var keys = Object.keys(field.resolvedType.values);
                if (keys.indexOf(ref) < 0) {
                    //没有找到时候
                    return invalid(field, "enum value");
                }
            } else {
                var e = _types[fieldIndex].verify(ref);
                if (e) return field.name + "." + e;
            }
        } else {
            switch (field.type) {
                case "int32":
                case "uint32":
                case "sint32":
                case "fixed32":
                case "sfixed32":
                    if (!util.isInteger(ref)) return invalid(field, "integer");
                    break;
                case "int64":
                case "uint64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                    if (!util.isInteger(ref) && !(ref && util.isInteger(ref.low) && util.isInteger(ref.high))) return invalid(field, "integer|Long");
                    break;
                case "float":
                case "double":
                    if (typeof ref !== "number") return invalid(field, "number");
                    break;
                case "bool":
                    if (typeof ref !== "boolean") return invalid(field, "boolean");
                    break;
                case "string":
                    if (!util.isString(ref)) return invalid(field, "string");
                    break;
                case "bytes":
                    if (!(ref && typeof ref.length === "number" || util.isString(ref))) return invalid(field, "buffer");
                    break;
            }
        }
    }

    function verifyKey(field, ref) {
        switch (field.keyType) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
                if (!util.key32Re.test(ref)) return invalid(field, "integer key");
                break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
                if (!util.key64Re.test(ref)) return invalid(field, "integer|Long key");
                break;
            case "bool":
                if (!util.key2Re.test(ref)) return invalid(field, "boolean key");
                break;
        }
    }

    function verifier(mtype) {
        return function (options) {
            return function (m) {
                var invalidDes;
                if (typeof m !== 'object' || m === null) return "object expected";

                var oneofs = mtype.oneofsArray,
                    seenFirstField = {};
                var p;
                if (oneofs.length) p = {};
                for (var i = 0; i < mtype.fieldsArray.length; ++i) {
                    var field = mtype._fieldsArray[i].resolve(),
                        ref = m[field.name];
                    if (!field.optional || ref != null && m.hasOwnProperty(field.name)) {
                        var _i;
                        if (field.map) {
                            if (!util.isObject(ref)) return invalid(field, "object");
                            var k = Object.keys(ref);
                            for (_i = 0; _i < k.length; ++_i) {
                                //检查key值的合法性
                                invalidDes = verifyKey(field, k[_i]);
                                if (invalidDes) {
                                    return invalidDes;
                                }
                                //检查value值的合法性
                                invalidDes = verifyValue(field, i, ref[k[_i]], options);
                                if (invalidDes) {
                                    return invalidDes;
                                }
                            }
                        } else if (field.repeated) {
                            if (!Array.isArray(ref)) {
                                return invalid(field, "array");
                            }

                            for (_i = 0; _i < ref.length; ++_i) {
                                invalidDes = verifyValue(field, i, ref[_i], options);
                                if (invalidDes) {
                                    return invalidDes;
                                }
                            }
                        } else {
                            if (field.partOf) {
                                var oneofPropName = field.partOf.name;
                                if (seenFirstField[field.partOf.name] === 1) if (p[oneofPropName] === 1) return field.partOf.name + ": multiple values";
                                p[oneofPropName] = 1;
                            }
                            invalidDes = verifyValue(field, i, ref, options);
                            if (invalidDes) {
                                return invalidDes;
                            }
                        }
                    }
                }
            };
        };
    }

    verifier._configure = function () {
        Enum = __webpack_require__(1);
        util = __webpack_require__(0);
    };

    /***/
},
/* 24 */
/***/function (module, exports, __webpack_require__) {

    /**
     * Created by zhangmiao on 2018/3/13.
     * 改写原来的googleProtocolBuffer的encode,请不要告我侵犯版权;/(ㄒoㄒ)/~~
     */
    var Enum;
    var types;

    //得到一个编码过程
    function encoder(mtype) {
        return function (options) {
            var Writer = options.Writer;
            var _types = options.types;
            var util = options.util;
            return function (message, writer) {
                writer = writer || Writer.create();
                var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
                for (var i = 0; i < fields.length; i++) {
                    var field = fields[i];
                    var index = mtype._fieldsArray.indexOf(field);

                    var type = field.resolvedType instanceof Enum ? 'uint32' : field.type;
                    var wireType = types.basic[type];
                    var ref = message[field.name];
                    //此处增加枚举型替换,有可能外界传入的枚举是string,转换成number
                    if (field.resolvedType instanceof Enum && typeof ref === 'string') {
                        ref = _types[index]['values'][ref];
                    }

                    //正式进行序列化
                    if (field.map) {
                        //有待验证
                        if (ref != null && message.hasOwnProperty(field.name)) {
                            for (var ks = Object.keys(ref), l = 0; l < ks.length; ++l) {
                                writer.uint32((field.id << 3 | 2) >>> 0).fork().uint32(8 | types.mapKey[field.keyType])[field.keyType](ks[l]);
                                if (wireType === undefined) {
                                    _types[index].encode(ref[ks[l]], writer.uint32(18).fork()).ldelim().ldelim();
                                } else {
                                    writer.uint32(16 | wireType)[type](ref[ks[l]]).ldelim();
                                }
                            }
                        }
                    } else if (field.repeated) {
                        if (ref && ref.length) {
                            if (field.packed && types.packed[type] !== undefined) {
                                //如果数据可以被packed的话
                                writer.uint32((field.id << 3 | 2) >>> 0).fork();
                                for (var j = 0; j < ref.length; j++) {
                                    writer[type](ref[j]);
                                }
                                writer.ldelim();
                            } else {
                                //数据不能packed的话
                                for (var k = 0; k < ref.length; k++) {
                                    if (wireType === undefined) {
                                        //如果是一个自定义的数据类型
                                        if (field.resolvedType.group) {
                                            _types[index].encode(ref[k], writer.uint32((field.id << 3 | 3) >>> 0)).uint32((field.id << 3 | 4) >>> 0);
                                        } else {
                                            _types[index].encode(ref[k], writer.uint32((field.id << 3 | 2) >>> 0).fork()).ldelim();
                                        }
                                    } else {
                                        //如果是string 或者 bytes
                                        writer.uint32((field.id << 3 | wireType) >>> 0)[type](ref[k]);
                                    }
                                }
                            }
                        }
                    } else {
                        if (!field.optional || ref != null && message.hasOwnProperty(field.name) /*|| field.partOf*/) {
                                if (!field.optional && (ref == null || !message.hasOwnProperty(field.name))) {
                                    console.warn('注意啦!!!很大概率会报错 类型:', message.$type ? message.$type.name : "不晓得", '没有设置对应的属性:', field.name, '检查是不是proto文件属性设置为了required');
                                }
                                if (wireType === undefined) {
                                    if (field.resolvedType.group) {
                                        _types[index].encode(ref, writer.uint32((field.id << 3 | 3) >>> 0)).uint32((field.id << 3 | 4) >>> 0);
                                    } else {
                                        _types[index].encode(ref, writer.uint32((field.id << 3 | 2) >>> 0).fork()).ldelim();
                                    }
                                } else {
                                    writer.uint32((field.id << 3 | wireType) >>> 0)[type](ref);
                                }
                            }
                    }
                }
                return writer;
            };
        };
    }

    module.exports = encoder;

    encoder._configure = function () {
        Enum = __webpack_require__(1);
        types = __webpack_require__(5);
    };

    /***/
},
/* 25 */
/***/function (module, exports, __webpack_require__) {

    /**
     * Created by zhangmiao on 2018/3/13.
     */

    var Enum, types, util;

    function missing(field) {
        return "missing required '" + field.name + "'";
    }

    function decoder(mtype) {
        return function (options) {
            var Reader = options.Reader;
            var _types = options.types;
            var _util = options.util;
            return function (r, l) {
                if (!(r instanceof Reader)) r = Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l,
                    m = new this.ctor();
                var k;
                while (r.pos < c) {
                    var t = r.uint32();
                    if (mtype.group) {
                        if ((t & 7) === 4) break;
                    }
                    var fieldId = t >>> 3;
                    var i = 0;
                    var find = false;
                    for (; i < mtype.fieldsArray.length; ++i) {
                        var field = mtype._fieldsArray[i].resolve(),
                            name = field.name,
                            type = field.resolvedType instanceof Enum ? "int32" : field.type;
                        //ref   = m[field.name];
                        if (fieldId != field.id) continue;
                        find = true;
                        if (field.map) {
                            r.skip().pos++;
                            if (m[name] === _util.emptyObject) m[name] = {};
                            k = r[field.keyType]();
                            r.pos++;
                            if (types.long[field.keyType] != undefined) {
                                if (types.basic[type] == undefined) {
                                    m[name][typeof k === 'object' ? _util.longToHash(k) : k] = _types[i].decode(r, r.uint32());
                                } else {
                                    m[name][typeof k === 'object' ? _util.longToHash(k) : k] = r[type]();
                                }
                            } else {
                                if (types.basic[type] == undefined) {
                                    m[name] = _types[i].decode(r, r.uint32());
                                } else {
                                    m[name] = r[type]();
                                }
                            }
                        } else if (field.repeated) {
                            if (!(m[name] && m[name].length)) {
                                m[name] = [];
                            }

                            if (types.packed[type] != undefined && (t & 7) === 2) {
                                var c2 = r.uint32() + r.pos;
                                while (r.pos < c2) m[name].push(r[type]());
                            } else {
                                if (types.basic[type] == undefined) {
                                    field.resolvedType.group ? m[name].push(_types[i].decode(r)) : m[name].push(_types[i].decode(r, r.uint32()));
                                } else {
                                    m[name].push(r[type]());
                                }
                            }
                        } else if (types.basic[type] == undefined) {
                            if (field.resolvedType.group) {
                                m[name] = _types[i].decode(r);
                            } else {
                                m[name] = _types[i].decode(r, r.uint32());
                            }
                        } else {
                            //console.log("m",JSON.stringify(m),"type",type,"field",field);
                            m[name] = r[type]();
                        }
                        break;
                    }

                    if (!find) {
                        console.log("t", t);
                        r.skipType(t & 7);
                    }
                }

                for (i = 0; i < mtype._fieldsArray.length; ++i) {
                    var rfield = mtype._fieldsArray[i];
                    if (rfield.required) {
                        if (!m.hasOwnProperty(rfield.name)) {
                            throw util.ProtocolError(missing(rfield), { instance: m });
                        }
                    }
                }
                //mtype.fieldsArray.filter(function(field) { return field.map; }).length
                return m;
            };
        };
    }

    module.exports = decoder;
    decoder._configure = function () {
        Enum = __webpack_require__(1);
        types = __webpack_require__(5);
        util = __webpack_require__(0);
    };

    /***/
},
/* 26 */
/***/function (module, exports, __webpack_require__) {

    var wrappers = exports;

    var Message;

    /**
     * From object converter part of an {@link IWrapper}.
     * @typedef WrapperFromObjectConverter
     * @type {function}
     * @param {Object.<string,*>} object Plain object
     * @returns {Message<{}>} Message instance
     * @this Type
     */

    /**
     * To object converter part of an {@link IWrapper}.
     * @typedef WrapperToObjectConverter
     * @type {function}
     * @param {Message<{}>} message Message instance
     * @param {IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     * @this Type
     */

    /**
     * Common type wrapper part of {@link wrappers}.
     * @interface IWrapper
     * @property {WrapperFromObjectConverter} [fromObject] From object converter
     * @property {WrapperToObjectConverter} [toObject] To object converter
     */

    // Custom wrapper for Any
    wrappers[".google.protobuf.Any"] = {

        fromObject: function (object) {

            // unwrap value type if mapped
            if (object && object["@type"]) {
                var type = this.lookup(object["@type"]);
                /* istanbul ignore else */
                if (type) {
                    // type_url does not accept leading "."
                    var type_url = object["@type"].charAt(0) === "." ? object["@type"].substr(1) : object["@type"];
                    // type_url prefix is optional, but path seperator is required
                    return this.create({
                        type_url: "/" + type_url,
                        value: type.encode(type.fromObject(object)).finish()
                    });
                }
            }

            return this.fromObject(object);
        },

        toObject: function (message, options) {

            // decode value if requested and unmapped
            if (options && options.json && message.type_url && message.value) {
                // Only use fully qualified type name after the last '/'
                var name = message.type_url.substring(message.type_url.lastIndexOf("/") + 1);
                var type = this.lookup(name);
                /* istanbul ignore else */
                if (type) message = type.decode(message.value);
            }

            // wrap value if unmapped
            if (!(message instanceof this.ctor) && message instanceof Message) {
                var object = message.$type.toObject(message, options);
                object["@type"] = message.$type.fullName;
                return object;
            }

            return this.toObject(message, options);
        }
    };

    wrappers._configure = function () {
        Message = __webpack_require__(14);
    };

    /***/
},
/* 27 */
/***/function (module, exports, __webpack_require__) {

    /**
     * Created by zhangmiao on 2018/3/14.
     * 写这个,有点难;有错误请指出 ,微信中不能Function.Apply 和evl,所以去掉其中所有的gen()
     */
    var converter = module.exports;

    var Enum, util;

    converter._configure = function () {
        Enum = __webpack_require__(1);
        util = __webpack_require__(0);
    };

    function valuePartial_fromObject(field, fieldIndex, propName, options) {
        var m = options['m'];
        var d = options['d'];
        var _types = options['types'];
        var ksi = options['ksi'];
        var ksiFlag = typeof ksi != 'undefined';
        if (field.resolvedType) {
            if (field.resolvedType instanceof Enum) {
                var prop = ksiFlag ? d[propName][ksi] : d[propName];
                var values = field.resolvedType.values,
                    keys = Object.keys(values);
                for (var i = 0; i < keys.length; i++) {
                    if (field.repeated && values[keys[i]] === field.typeDefault) {
                        continue;
                    }
                    if (keys[i] == prop || values[keys[i]] == prop) {
                        ksiFlag ? m[propName][ksi] = values[keys[i]] : m[propName] = values[keys[i]];
                        break;
                    }
                }
            } else {
                if (typeof (ksiFlag ? d[propName][ksi] : d[propName]) !== 'object') throw TypeError(field.fullName + ": object expected");
                ksiFlag ? m[propName][ksi] = _types[fieldIndex].fromObject(d[propName][ksi]) : m[propName] = _types[fieldIndex].fromObject(d[propName]);
            }
        } else {
            var isUnsigned = false;
            switch (field.type) {
                case "double":
                case "float":
                    ksiFlag ? m[propName][ksi] = Number(d[propName][ksi]) : m[propName] = Number(d[propName]);
                    break;
                case "uint32":
                case "fixed32":
                    ksiFlag ? m[propName][ksi] = d[propName][ksi] >>> 0 : m[propName] = d[propName] >>> 0;
                    break;
                case "int32":
                case "sint32":
                case "sfixed32":
                    ksiFlag ? m[propName][ksi] = d[propName][ksi] | 0 : m[propName] = d[propName] | 0;
                    break;
                case "uint64":
                    isUnsigned = true;
                // eslint-disable-line no-fallthrough
                case "int64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                    if (util.Long) ksiFlag ? m[propName][ksi] = util.Long.fromValue(d[propName][ksi]).unsigned = isUnsigned : m[propName] = util.Long.fromValue(d[propName]).unsigned = isUnsigned;else if (typeof (ksiFlag ? d[propName][ksi] : d[propName]) === 'string') ksiFlag ? m[propName][ksi] = parseInt(d[propName][ksi], 10) : m[propName] = parseInt(d[propName], 10);else if (typeof (ksiFlag ? d[propName][ksi] : d[propName]) === 'number') ksiFlag ? m[propName][ksi] = d[propName][ksi] : m[propName] = d[propName];else if (typeof (ksiFlag ? d[propName][ksi] : d[propName]) === 'object') ksiFlag ? m[propName][ksi] = new util.LongBits(d[propName][ksi].low >>> 0, d[propName][ksi].high >>> 0).toNumber(isUnsigned) : m[propName] = new util.LongBits(d[propName].low >>> 0, d[propName].high >>> 0).toNumber(isUnsigned);
                    break;
                case "bytes":
                    if (typeof (ksiFlag ? d[propName][ksi] : d[propName]) === "string") ksiFlag ? util.base64.decode(d[propName][ksi], m[propName][ksi] = util.newBuffer(util.base64.length(d[propName][ksi])), 0) : util.base64.decode(d[propName], m[propName] = util.newBuffer(util.base64.length(d[propName])), 0);else if ((ksiFlag ? d[propName][ksi] : d[propName]).length) ksiFlag ? m[propName][ksi] = d[propName][ksi] : m[propName] = d[propName];
                    break;
                case "string":
                    ksiFlag ? m[propName][ksi] = String(d[propName][ksi]) : m[propName] = String(d[propName]);
                    break;
                case "bool":
                    ksiFlag ? m[propName][ksi] = Boolean(d[propName][ksi]) : m[propName] = Boolean(d[propName]);
                    break;
            }
        }
    }

    /*
    * @param {Type} mtype Message type
    * @returns {Function} Function instance
    */
    converter.fromObject = function fromObject(mtype) {
        var fields = mtype.fieldsArray;
        return function (options) {
            return function (d) {
                if (d instanceof this.ctor) return d;
                if (!fields.length) return new this.ctor();

                var m = new this.ctor();
                for (var i = 0; i < fields.length; ++i) {
                    var field = fields[i].resolve();
                    var propName = field.name;
                    var _i;
                    if (field.map) {
                        if (d[propName]) {
                            if (typeof d[propName] !== 'object') throw TypeError(field.fullName + ": object expected");
                            m[propName] = {};
                        }
                        var ks = Object.keys(d[propName]);
                        for (_i = 0; _i < ks.length; ++_i) valuePartial_fromObject(field, i, propName, util.merge(util.copy(options), { m: m, d: d, ksi: ks[_i] }));
                    } else if (field.repeated) {
                        if (d[propName]) {
                            if (!Array.isArray(d[propName])) throw TypeError(field.fullName + ": array expected");
                            m[propName] = [];
                            for (_i = 0; _i < d[propName].length; ++_i) {
                                valuePartial_fromObject(field, i, propName, util.merge(util.copy(options), {
                                    m: m,
                                    d: d,
                                    ksi: _i
                                }));
                            }
                        }
                    } else {
                        if (field.resolvedType instanceof Enum || d[propName] != null) {
                            valuePartial_fromObject(field, i, propName, util.merge(util.copy(options), { m: m, d: d }));
                        }
                    }
                }
                return m;
            };
        };
    };

    function valuePartial_toObject(field, fieldIndex, propName, options) {
        var m = options['m'];
        var d = options['d'];
        var _types = options['types'];
        var ksi = options['ksi'];
        var o = options['o'];
        var ksiFlag = typeof ksi != 'undefined';
        if (field.resolvedType) {
            if (field.resolvedType instanceof Enum) ksiFlag ? d[propName][ksi] = o.enums === String ? _types[fieldIndex].values[m[propName][ksi]] : m[propName][ksi] : d[propName] = o.enums === String ? _types[fieldIndex].values[m[propName]] : m[propName];else ksiFlag ? d[propName][ksi] = _types[fieldIndex].toObject(m[propName][ksi], o) : d[propName] = _types[fieldIndex].toObject(m[propName], o);
        } else {
            var isUnsigned = false;
            switch (field.type) {
                case "double":
                case "float":
                    ksiFlag ? d[propName][ksi] = o.json && !isFinite(m[propName][ksi]) ? String(m[propName][ksi]) : m[propName][ksi] : d[propName] = o.json && !isFinite(m[propName]) ? String(m[propName]) : m[propName];
                    break;
                case "uint64":
                    isUnsigned = true;
                // eslint-disable-line no-fallthrough
                case "int64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                    if (typeof m[propName][ksi] === 'number') ksiFlag ? d[propName][ksi] = o.longs === String ? String(m[propName][ksi]) : m[propName][ksi] : d[propName] = o.longs === String ? String(m[propName]) : m[propName];else ksiFlag ? d[propName][ksi] = o.longs === String ? util.Long.prototype.toString.call(m[propName][ksi]) : o.longs === Number ? new util.LongBits(m[propName][ksi].low >>> 0, m[propName][ksi].high >>> 0).toNumber(isUnsigned) : m[propName][ksi] : d[propName] = o.longs === String ? util.Long.prototype.toString.call(m[propName]) : o.longs === Number ? new util.LongBits(m[propName].low >>> 0, m[propName].high >>> 0).toNumber(isUnsigned) : m[propName];
                    break;
                case "bytes":
                    ksiFlag ? d[propName][ksi] = o.bytes === String ? util.base64.encode(m[propName][ksi], 0, m[propName][ksi].length) : o.bytes === Array ? Array.prototype.slice.call(m[propName][ksi]) : m[propName][ksi] : d[propName] = o.bytes === String ? util.base64.encode(m[propName], 0, m[propName].length) : o.bytes === Array ? Array.prototype.slice.call(m[propName]) : m[propName];
                    break;
                default:
                    ksiFlag ? d[propName][ksi] = m[propName][ksi] : d[propName] = m[propName];
                    break;
            }
        }
    }

    converter.toObject = function toObject(mtype) {
        var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
        return function (options) {
            if (!fields.length) return function () {
                return {};
            };
            return function (m, o) {
                o = o || {};
                var d = {};
                var repeatedFields = [],
                    mapFields = [],
                    normalFields = [],
                    field,
                    propName,
                    i = 0;
                for (; i < fields.length; ++i) if (!fields[i].partOf) (fields[i].resolve().repeated ? repeatedFields : fields[i].map ? mapFields : normalFields).push(fields[i]);

                if (repeatedFields.length) {
                    if (o.arrays || o.defaults) {
                        for (i = 0; i < repeatedFields.length; ++i) d[repeatedFields[i].name] = [];
                    }
                }

                if (mapFields.length) {
                    if (o.objects || o.defaults) {
                        for (i = 0; i < mapFields.length; ++i) d[mapFields[i].name] = {};
                    }
                }

                if (normalFields.length) {
                    if (o.defaults) {
                        for (i = 0; i < normalFields.length; ++i) {
                            field = normalFields[i], propName = field.name;
                            if (field.resolvedType instanceof Enum) d[propName] = o.enums = String ? field.resolvedType.valuesById[field.typeDefault] : field.typeDefault;else if (field.long) {
                                if (util.Long) {
                                    var n = new util.Long(field.typeDefault.low, field.typeDefault.high, field.typeDefault.unsigned);
                                    d[propName] = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                                } else {
                                    d[propName] = o.longs === String ? field.typeDefault.toString() : field.typeDefault.toNumber();
                                }
                            } else if (field.bytes) {
                                d[propName] = o.bytes === String ? String.fromCharCode.apply(String, field.typeDefault) : Array.prototype.slice.call(field.typeDefault).join('*..*').split("*..*");
                            } else {
                                d[propName] = field.typeDefault;
                            }
                        }
                    }
                }
                var hasKs2 = false;
                for (i = 0; i < fields.length; ++i) {
                    field = fields[i];
                    propName = field.name;
                    var index = mtype._fieldsArray.indexOf(field);
                    var ks2;
                    var j;
                    if (field.map) {
                        if (!hasKs2) {
                            hasKs2 = true;
                        }
                        if (m[propName] && (ks2 = Object.keys(m[propName]).length)) {
                            d[propName] = {};
                            for (j = 0; j < ks2.length; ++j) {
                                valuePartial_toObject(field, index, propName, util.merge(util.copy(options), { m: m, d: d, ksi: ks2[j], o: o }));
                            }
                        }
                    } else if (field.repeated) {
                        if (m[propName] && m[propName].length) {
                            d[propName] = [];
                            for (j = 0; j < m[propName].length; ++j) {
                                valuePartial_toObject(field, index, propName, util.merge(util.copy(options), { m: m, d: d, ksi: j, o: o }));
                            }
                        }
                    } else {
                        if (m[propName] != null && m.hasOwnProperty(propName) /*|| field.partOf*/) {
                                valuePartial_toObject(field, index, propName, util.merge(util.copy(options), { m: m, d: d, o: o }));
                            }
                        if (field.partOf) {
                            if (o.oneofs) d[field.partOf.name] = propName;
                        }
                    }
                }
                return d;
            };
        };
    };

    /***/
},
/* 28 */
/***/function (module, exports, __webpack_require__) {

    /**
     * Created by zhangmiao on 2018/3/13.
     */

    (function (protobufFactory) {
        //if (typeof define === 'function')//这里会不会定义重复呢?怎么去掉呢
        //    define('protobuf', protobufFactory);
        //else
        module.exports = protobufFactory();
    })(function () {
        var protobuf = {};
        window.protobuf = protobuf;

        /**
         * Build type, one of `"full"`, `"light"` or `"minimal"`.
         * @name build
         * @type {string}
         * @const
         */
        protobuf.build = "minimal";

        // Serialization
        protobuf.Writer = __webpack_require__(15);
        protobuf.encoder = __webpack_require__(24);
        protobuf.Reader = __webpack_require__(22);

        // Utility
        protobuf.util = __webpack_require__(0);
        protobuf.rpc = __webpack_require__(20);
        protobuf.roots = __webpack_require__(16);
        protobuf.verifier = __webpack_require__(23);

        protobuf.tokenize = __webpack_require__(19);
        protobuf.parse = __webpack_require__(18);
        protobuf.common = __webpack_require__(21);

        protobuf.ReflectionObject = __webpack_require__(4);
        protobuf.Namespace = __webpack_require__(6);
        protobuf.Root = __webpack_require__(9);
        protobuf.Enum = __webpack_require__(1);
        protobuf.Type = __webpack_require__(3);
        protobuf.Field = __webpack_require__(2);
        protobuf.OneOf = __webpack_require__(7);
        protobuf.MapField = __webpack_require__(12);
        protobuf.Service = __webpack_require__(10);
        protobuf.Method = __webpack_require__(13);
        protobuf.converter = __webpack_require__(27);
        protobuf.decoder = __webpack_require__(25);

        // Runtime
        protobuf.Message = __webpack_require__(14);
        protobuf.wrappers = __webpack_require__(26);

        // Utility
        protobuf.types = __webpack_require__(5);
        protobuf.util = __webpack_require__(0);

        protobuf.configure = configure;

        function load(filename, root, callback) {
            if (typeof root === "function") {
                callback = root;
                root = new protobuf.Root();
            } else if (!root) root = new protobuf.Root();
            return root.load(filename, callback);
        }

        protobuf.load = load;

        function loadSync(filename, root) {
            if (!root) root = new protobuf.Root();
            return root.loadSync(filename);
        }

        protobuf.loadSync = loadSync;

        //新增weichat支持的解析pbConfig接口
        function parseFromPbString(pbString, root, callback) {
            if (typeof root === "function") {
                callback = root;
                root = new protobuf.Root();
            } else if (!root) root = new protobuf.Root();
            return root.parseFromPbString(pbString, callback);
        }

        protobuf.parseFromPbString = parseFromPbString;

        /**
         * Reconfigures the library according to the environment.
         * @returns {undefined}
         */
        function configure() {

            protobuf.converter._configure();
            protobuf.decoder._configure();
            protobuf.encoder._configure();
            protobuf.Field._configure();
            protobuf.MapField._configure();
            protobuf.Message._configure();
            protobuf.Namespace._configure();
            protobuf.Method._configure();
            protobuf.ReflectionObject._configure();
            protobuf.OneOf._configure();
            protobuf.parse._configure();
            protobuf.Reader._configure();
            protobuf.Root._configure();
            protobuf.Service._configure();
            protobuf.verifier._configure();
            protobuf.Type._configure();
            protobuf.types._configure();
            protobuf.wrappers._configure();
            protobuf.Writer._configure();
        }
        configure();

        if (arguments && arguments.length) {
            for (var i = 0; i < arguments.length; i++) {
                var argument = arguments[i];
                if (argument.hasOwnProperty("exports")) {
                    argument.exports = protobuf;
                    return;
                }
            }
        }
        return protobuf;
    });

    /***/
},
/* 29 */
/***/function (module, exports) {

    module.exports = Long;

    /**
     * wasm optimizations, to do native i64 multiplication and divide
     */
    var wasm = null;

    try {
        wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
    } catch (e) {}
    // no wasm support :(


    /**
     * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
     *  See the from* functions below for more convenient ways of constructing Longs.
     * @exports Long
     * @class A Long class for representing a 64 bit two's-complement integer value.
     * @param {number} low The low (signed) 32 bits of the long
     * @param {number} high The high (signed) 32 bits of the long
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @constructor
     */
    function Long(low, high, unsigned) {

        /**
         * The low 32 bits as a signed value.
         * @type {number}
         */
        this.low = low | 0;

        /**
         * The high 32 bits as a signed value.
         * @type {number}
         */
        this.high = high | 0;

        /**
         * Whether unsigned or not.
         * @type {boolean}
         */
        this.unsigned = !!unsigned;
    }

    // The internal representation of a long is the two given signed, 32-bit values.
    // We use 32-bit pieces because these are the size of integers on which
    // Javascript performs bit-operations.  For operations like addition and
    // multiplication, we split each number into 16 bit pieces, which can easily be
    // multiplied within Javascript's floating-point representation without overflow
    // or change in sign.
    //
    // In the algorithms below, we frequently reduce the negative case to the
    // positive case by negating the input(s) and then post-processing the result.
    // Note that we must ALWAYS check specially whether those values are MIN_VALUE
    // (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
    // a positive number, it overflows back into a negative).  Not handling this
    // case would often result in infinite recursion.
    //
    // Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
    // methods on which they depend.

    /**
     * An indicator used to reliably determine if an object is a Long or not.
     * @type {boolean}
     * @const
     * @private
     */
    Long.prototype.__isLong__;

    Object.defineProperty(Long.prototype, "__isLong__", { value: true });

    /**
     * @function
     * @param {*} obj Object
     * @returns {boolean}
     * @inner
     */
    function isLong(obj) {
        return (obj && obj["__isLong__"]) === true;
    }

    /**
     * Tests if the specified object is a Long.
     * @function
     * @param {*} obj Object
     * @returns {boolean}
     */
    Long.isLong = isLong;

    /**
     * A cache of the Long representations of small integer values.
     * @type {!Object}
     * @inner
     */
    var INT_CACHE = {};

    /**
     * A cache of the Long representations of small unsigned integer values.
     * @type {!Object}
     * @inner
     */
    var UINT_CACHE = {};

    /**
     * @param {number} value
     * @param {boolean=} unsigned
     * @returns {!Long}
     * @inner
     */
    function fromInt(value, unsigned) {
        var obj, cachedObj, cache;
        if (unsigned) {
            value >>>= 0;
            if (cache = 0 <= value && value < 256) {
                cachedObj = UINT_CACHE[value];
                if (cachedObj) return cachedObj;
            }
            obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
            if (cache) UINT_CACHE[value] = obj;
            return obj;
        } else {
            value |= 0;
            if (cache = -128 <= value && value < 128) {
                cachedObj = INT_CACHE[value];
                if (cachedObj) return cachedObj;
            }
            obj = fromBits(value, value < 0 ? -1 : 0, false);
            if (cache) INT_CACHE[value] = obj;
            return obj;
        }
    }

    /**
     * Returns a Long representing the given 32 bit integer value.
     * @function
     * @param {number} value The 32 bit integer in question
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {!Long} The corresponding Long value
     */
    Long.fromInt = fromInt;

    /**
     * @param {number} value
     * @param {boolean=} unsigned
     * @returns {!Long}
     * @inner
     */
    function fromNumber(value, unsigned) {
        if (isNaN(value)) return unsigned ? UZERO : ZERO;
        if (unsigned) {
            if (value < 0) return UZERO;
            if (value >= TWO_PWR_64_DBL) return MAX_UNSIGNED_VALUE;
        } else {
            if (value <= -TWO_PWR_63_DBL) return MIN_VALUE;
            if (value + 1 >= TWO_PWR_63_DBL) return MAX_VALUE;
        }
        if (value < 0) return fromNumber(-value, unsigned).neg();
        return fromBits(value % TWO_PWR_32_DBL | 0, value / TWO_PWR_32_DBL | 0, unsigned);
    }

    /**
     * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
     * @function
     * @param {number} value The number in question
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {!Long} The corresponding Long value
     */
    Long.fromNumber = fromNumber;

    /**
     * @param {number} lowBits
     * @param {number} highBits
     * @param {boolean=} unsigned
     * @returns {!Long}
     * @inner
     */
    function fromBits(lowBits, highBits, unsigned) {
        return new Long(lowBits, highBits, unsigned);
    }

    /**
     * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
     *  assumed to use 32 bits.
     * @function
     * @param {number} lowBits The low 32 bits
     * @param {number} highBits The high 32 bits
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {!Long} The corresponding Long value
     */
    Long.fromBits = fromBits;

    /**
     * @function
     * @param {number} base
     * @param {number} exponent
     * @returns {number}
     * @inner
     */
    var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)

    /**
     * @param {string} str
     * @param {(boolean|number)=} unsigned
     * @param {number=} radix
     * @returns {!Long}
     * @inner
     */
    function fromString(str, unsigned, radix) {
        if (str.length === 0) throw Error('empty string');
        if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity") return ZERO;
        if (typeof unsigned === 'number') {
            // For goog.math.long compatibility
            radix = unsigned, unsigned = false;
        } else {
            unsigned = !!unsigned;
        }
        radix = radix || 10;
        if (radix < 2 || 36 < radix) throw RangeError('radix');

        var p;
        if ((p = str.indexOf('-')) > 0) throw Error('interior hyphen');else if (p === 0) {
            return fromString(str.substring(1), unsigned, radix).neg();
        }

        // Do several (8) digits each time through the loop, so as to
        // minimize the calls to the very expensive emulated div.
        var radixToPower = fromNumber(pow_dbl(radix, 8));

        var result = ZERO;
        for (var i = 0; i < str.length; i += 8) {
            var size = Math.min(8, str.length - i),
                value = parseInt(str.substring(i, i + size), radix);
            if (size < 8) {
                var power = fromNumber(pow_dbl(radix, size));
                result = result.mul(power).add(fromNumber(value));
            } else {
                result = result.mul(radixToPower);
                result = result.add(fromNumber(value));
            }
        }
        result.unsigned = unsigned;
        return result;
    }

    /**
     * Returns a Long representation of the given string, written using the specified radix.
     * @function
     * @param {string} str The textual representation of the Long
     * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed
     * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
     * @returns {!Long} The corresponding Long value
     */
    Long.fromString = fromString;

    /**
     * @function
     * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
     * @param {boolean=} unsigned
     * @returns {!Long}
     * @inner
     */
    function fromValue(val, unsigned) {
        if (typeof val === 'number') return fromNumber(val, unsigned);
        if (typeof val === 'string') return fromString(val, unsigned);
        // Throws for non-objects, converts non-instanceof Long:
        return fromBits(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
    }

    /**
     * Converts the specified value to a Long using the appropriate from* function for its type.
     * @function
     * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {!Long}
     */
    Long.fromValue = fromValue;

    // NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
    // no runtime penalty for these.

    /**
     * @type {number}
     * @const
     * @inner
     */
    var TWO_PWR_16_DBL = 1 << 16;

    /**
     * @type {number}
     * @const
     * @inner
     */
    var TWO_PWR_24_DBL = 1 << 24;

    /**
     * @type {number}
     * @const
     * @inner
     */
    var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;

    /**
     * @type {number}
     * @const
     * @inner
     */
    var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;

    /**
     * @type {number}
     * @const
     * @inner
     */
    var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;

    /**
     * @type {!Long}
     * @const
     * @inner
     */
    var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);

    /**
     * @type {!Long}
     * @inner
     */
    var ZERO = fromInt(0);

    /**
     * Signed zero.
     * @type {!Long}
     */
    Long.ZERO = ZERO;

    /**
     * @type {!Long}
     * @inner
     */
    var UZERO = fromInt(0, true);

    /**
     * Unsigned zero.
     * @type {!Long}
     */
    Long.UZERO = UZERO;

    /**
     * @type {!Long}
     * @inner
     */
    var ONE = fromInt(1);

    /**
     * Signed one.
     * @type {!Long}
     */
    Long.ONE = ONE;

    /**
     * @type {!Long}
     * @inner
     */
    var UONE = fromInt(1, true);

    /**
     * Unsigned one.
     * @type {!Long}
     */
    Long.UONE = UONE;

    /**
     * @type {!Long}
     * @inner
     */
    var NEG_ONE = fromInt(-1);

    /**
     * Signed negative one.
     * @type {!Long}
     */
    Long.NEG_ONE = NEG_ONE;

    /**
     * @type {!Long}
     * @inner
     */
    var MAX_VALUE = fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0, false);

    /**
     * Maximum signed value.
     * @type {!Long}
     */
    Long.MAX_VALUE = MAX_VALUE;

    /**
     * @type {!Long}
     * @inner
     */
    var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF | 0, 0xFFFFFFFF | 0, true);

    /**
     * Maximum unsigned value.
     * @type {!Long}
     */
    Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;

    /**
     * @type {!Long}
     * @inner
     */
    var MIN_VALUE = fromBits(0, 0x80000000 | 0, false);

    /**
     * Minimum signed value.
     * @type {!Long}
     */
    Long.MIN_VALUE = MIN_VALUE;

    /**
     * @alias Long.prototype
     * @inner
     */
    var LongPrototype = Long.prototype;

    /**
     * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
     * @returns {number}
     */
    LongPrototype.toInt = function toInt() {
        return this.unsigned ? this.low >>> 0 : this.low;
    };

    /**
     * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
     * @returns {number}
     */
    LongPrototype.toNumber = function toNumber() {
        if (this.unsigned) return (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0);
        return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
    };

    /**
     * Converts the Long to a string written in the specified radix.
     * @param {number=} radix Radix (2-36), defaults to 10
     * @returns {string}
     * @override
     * @throws {RangeError} If `radix` is out of range
     */
    LongPrototype.toString = function toString(radix) {
        radix = radix || 10;
        if (radix < 2 || 36 < radix) throw RangeError('radix');
        if (this.isZero()) return '0';
        if (this.isNegative()) {
            // Unsigned Longs are never negative
            if (this.eq(MIN_VALUE)) {
                // We need to change the Long value before it can be negated, so we remove
                // the bottom-most digit in this base and then recurse to do the rest.
                var radixLong = fromNumber(radix),
                    div = this.div(radixLong),
                    rem1 = div.mul(radixLong).sub(this);
                return div.toString(radix) + rem1.toInt().toString(radix);
            } else return '-' + this.neg().toString(radix);
        }

        // Do several (6) digits each time through the loop, so as to
        // minimize the calls to the very expensive emulated div.
        var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
            rem = this;
        var result = '';
        while (true) {
            var remDiv = rem.div(radixToPower),
                intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
                digits = intval.toString(radix);
            rem = remDiv;
            if (rem.isZero()) return digits + result;else {
                while (digits.length < 6) digits = '0' + digits;
                result = '' + digits + result;
            }
        }
    };

    /**
     * Gets the high 32 bits as a signed integer.
     * @returns {number} Signed high bits
     */
    LongPrototype.getHighBits = function getHighBits() {
        return this.high;
    };

    /**
     * Gets the high 32 bits as an unsigned integer.
     * @returns {number} Unsigned high bits
     */
    LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
        return this.high >>> 0;
    };

    /**
     * Gets the low 32 bits as a signed integer.
     * @returns {number} Signed low bits
     */
    LongPrototype.getLowBits = function getLowBits() {
        return this.low;
    };

    /**
     * Gets the low 32 bits as an unsigned integer.
     * @returns {number} Unsigned low bits
     */
    LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
        return this.low >>> 0;
    };

    /**
     * Gets the number of bits needed to represent the absolute value of this Long.
     * @returns {number}
     */
    LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
        if (this.isNegative()) // Unsigned Longs are never negative
            return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
        var val = this.high != 0 ? this.high : this.low;
        for (var bit = 31; bit > 0; bit--) if ((val & 1 << bit) != 0) break;
        return this.high != 0 ? bit + 33 : bit + 1;
    };

    /**
     * Tests if this Long's value equals zero.
     * @returns {boolean}
     */
    LongPrototype.isZero = function isZero() {
        return this.high === 0 && this.low === 0;
    };

    /**
     * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.
     * @returns {boolean}
     */
    LongPrototype.eqz = LongPrototype.isZero;

    /**
     * Tests if this Long's value is negative.
     * @returns {boolean}
     */
    LongPrototype.isNegative = function isNegative() {
        return !this.unsigned && this.high < 0;
    };

    /**
     * Tests if this Long's value is positive.
     * @returns {boolean}
     */
    LongPrototype.isPositive = function isPositive() {
        return this.unsigned || this.high >= 0;
    };

    /**
     * Tests if this Long's value is odd.
     * @returns {boolean}
     */
    LongPrototype.isOdd = function isOdd() {
        return (this.low & 1) === 1;
    };

    /**
     * Tests if this Long's value is even.
     * @returns {boolean}
     */
    LongPrototype.isEven = function isEven() {
        return (this.low & 1) === 0;
    };

    /**
     * Tests if this Long's value equals the specified's.
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.equals = function equals(other) {
        if (!isLong(other)) other = fromValue(other);
        if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1) return false;
        return this.high === other.high && this.low === other.low;
    };

    /**
     * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.eq = LongPrototype.equals;

    /**
     * Tests if this Long's value differs from the specified's.
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.notEquals = function notEquals(other) {
        return !this.eq( /* validates */other);
    };

    /**
     * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.neq = LongPrototype.notEquals;

    /**
     * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.ne = LongPrototype.notEquals;

    /**
     * Tests if this Long's value is less than the specified's.
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.lessThan = function lessThan(other) {
        return this.comp( /* validates */other) < 0;
    };

    /**
     * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.lt = LongPrototype.lessThan;

    /**
     * Tests if this Long's value is less than or equal the specified's.
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
        return this.comp( /* validates */other) <= 0;
    };

    /**
     * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.lte = LongPrototype.lessThanOrEqual;

    /**
     * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.le = LongPrototype.lessThanOrEqual;

    /**
     * Tests if this Long's value is greater than the specified's.
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.greaterThan = function greaterThan(other) {
        return this.comp( /* validates */other) > 0;
    };

    /**
     * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.gt = LongPrototype.greaterThan;

    /**
     * Tests if this Long's value is greater than or equal the specified's.
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
        return this.comp( /* validates */other) >= 0;
    };

    /**
     * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.gte = LongPrototype.greaterThanOrEqual;

    /**
     * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.ge = LongPrototype.greaterThanOrEqual;

    /**
     * Compares this Long's value with the specified's.
     * @param {!Long|number|string} other Other value
     * @returns {number} 0 if they are the same, 1 if the this is greater and -1
     *  if the given one is greater
     */
    LongPrototype.compare = function compare(other) {
        if (!isLong(other)) other = fromValue(other);
        if (this.eq(other)) return 0;
        var thisNeg = this.isNegative(),
            otherNeg = other.isNegative();
        if (thisNeg && !otherNeg) return -1;
        if (!thisNeg && otherNeg) return 1;
        // At this point the sign bits are the same
        if (!this.unsigned) return this.sub(other).isNegative() ? -1 : 1;
        // Both are positive if at least one is unsigned
        return other.high >>> 0 > this.high >>> 0 || other.high === this.high && other.low >>> 0 > this.low >>> 0 ? -1 : 1;
    };

    /**
     * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {number} 0 if they are the same, 1 if the this is greater and -1
     *  if the given one is greater
     */
    LongPrototype.comp = LongPrototype.compare;

    /**
     * Negates this Long's value.
     * @returns {!Long} Negated Long
     */
    LongPrototype.negate = function negate() {
        if (!this.unsigned && this.eq(MIN_VALUE)) return MIN_VALUE;
        return this.not().add(ONE);
    };

    /**
     * Negates this Long's value. This is an alias of {@link Long#negate}.
     * @function
     * @returns {!Long} Negated Long
     */
    LongPrototype.neg = LongPrototype.negate;

    /**
     * Returns the sum of this and the specified Long.
     * @param {!Long|number|string} addend Addend
     * @returns {!Long} Sum
     */
    LongPrototype.add = function add(addend) {
        if (!isLong(addend)) addend = fromValue(addend);

        // Divide each number into 4 chunks of 16 bits, and then sum the chunks.

        var a48 = this.high >>> 16;
        var a32 = this.high & 0xFFFF;
        var a16 = this.low >>> 16;
        var a00 = this.low & 0xFFFF;

        var b48 = addend.high >>> 16;
        var b32 = addend.high & 0xFFFF;
        var b16 = addend.low >>> 16;
        var b00 = addend.low & 0xFFFF;

        var c48 = 0,
            c32 = 0,
            c16 = 0,
            c00 = 0;
        c00 += a00 + b00;
        c16 += c00 >>> 16;
        c00 &= 0xFFFF;
        c16 += a16 + b16;
        c32 += c16 >>> 16;
        c16 &= 0xFFFF;
        c32 += a32 + b32;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c48 += a48 + b48;
        c48 &= 0xFFFF;
        return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
    };

    /**
     * Returns the difference of this and the specified Long.
     * @param {!Long|number|string} subtrahend Subtrahend
     * @returns {!Long} Difference
     */
    LongPrototype.subtract = function subtract(subtrahend) {
        if (!isLong(subtrahend)) subtrahend = fromValue(subtrahend);
        return this.add(subtrahend.neg());
    };

    /**
     * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
     * @function
     * @param {!Long|number|string} subtrahend Subtrahend
     * @returns {!Long} Difference
     */
    LongPrototype.sub = LongPrototype.subtract;

    /**
     * Returns the product of this and the specified Long.
     * @param {!Long|number|string} multiplier Multiplier
     * @returns {!Long} Product
     */
    LongPrototype.multiply = function multiply(multiplier) {
        if (this.isZero()) return ZERO;
        if (!isLong(multiplier)) multiplier = fromValue(multiplier);

        // use wasm support if present
        if (wasm) {
            var low = wasm.mul(this.low, this.high, multiplier.low, multiplier.high);
            return fromBits(low, wasm.get_high(), this.unsigned);
        }

        if (multiplier.isZero()) return ZERO;
        if (this.eq(MIN_VALUE)) return multiplier.isOdd() ? MIN_VALUE : ZERO;
        if (multiplier.eq(MIN_VALUE)) return this.isOdd() ? MIN_VALUE : ZERO;

        if (this.isNegative()) {
            if (multiplier.isNegative()) return this.neg().mul(multiplier.neg());else return this.neg().mul(multiplier).neg();
        } else if (multiplier.isNegative()) return this.mul(multiplier.neg()).neg();

        // If both longs are small, use float multiplication
        if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24)) return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);

        // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
        // We can skip products that would overflow.

        var a48 = this.high >>> 16;
        var a32 = this.high & 0xFFFF;
        var a16 = this.low >>> 16;
        var a00 = this.low & 0xFFFF;

        var b48 = multiplier.high >>> 16;
        var b32 = multiplier.high & 0xFFFF;
        var b16 = multiplier.low >>> 16;
        var b00 = multiplier.low & 0xFFFF;

        var c48 = 0,
            c32 = 0,
            c16 = 0,
            c00 = 0;
        c00 += a00 * b00;
        c16 += c00 >>> 16;
        c00 &= 0xFFFF;
        c16 += a16 * b00;
        c32 += c16 >>> 16;
        c16 &= 0xFFFF;
        c16 += a00 * b16;
        c32 += c16 >>> 16;
        c16 &= 0xFFFF;
        c32 += a32 * b00;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c32 += a16 * b16;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c32 += a00 * b32;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
        c48 &= 0xFFFF;
        return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
    };

    /**
     * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
     * @function
     * @param {!Long|number|string} multiplier Multiplier
     * @returns {!Long} Product
     */
    LongPrototype.mul = LongPrototype.multiply;

    /**
     * Returns this Long divided by the specified. The result is signed if this Long is signed or
     *  unsigned if this Long is unsigned.
     * @param {!Long|number|string} divisor Divisor
     * @returns {!Long} Quotient
     */
    LongPrototype.divide = function divide(divisor) {
        if (!isLong(divisor)) divisor = fromValue(divisor);
        if (divisor.isZero()) throw Error('division by zero');

        // use wasm support if present
        if (wasm) {
            // guard against signed division overflow: the largest
            // negative number / -1 would be 1 larger than the largest
            // positive number, due to two's complement.
            if (!this.unsigned && this.high === -0x80000000 && divisor.low === -1 && divisor.high === -1) {
                // be consistent with non-wasm code path
                return this;
            }
            var low = (this.unsigned ? wasm.div_u : wasm.div_s)(this.low, this.high, divisor.low, divisor.high);
            return fromBits(low, wasm.get_high(), this.unsigned);
        }

        if (this.isZero()) return this.unsigned ? UZERO : ZERO;
        var approx, rem, res;
        if (!this.unsigned) {
            // This section is only relevant for signed longs and is derived from the
            // closure library as a whole.
            if (this.eq(MIN_VALUE)) {
                if (divisor.eq(ONE) || divisor.eq(NEG_ONE)) return MIN_VALUE; // recall that -MIN_VALUE == MIN_VALUE
                else if (divisor.eq(MIN_VALUE)) return ONE;else {
                        // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
                        var halfThis = this.shr(1);
                        approx = halfThis.div(divisor).shl(1);
                        if (approx.eq(ZERO)) {
                            return divisor.isNegative() ? ONE : NEG_ONE;
                        } else {
                            rem = this.sub(divisor.mul(approx));
                            res = approx.add(rem.div(divisor));
                            return res;
                        }
                    }
            } else if (divisor.eq(MIN_VALUE)) return this.unsigned ? UZERO : ZERO;
            if (this.isNegative()) {
                if (divisor.isNegative()) return this.neg().div(divisor.neg());
                return this.neg().div(divisor).neg();
            } else if (divisor.isNegative()) return this.div(divisor.neg()).neg();
            res = ZERO;
        } else {
            // The algorithm below has not been made for unsigned longs. It's therefore
            // required to take special care of the MSB prior to running it.
            if (!divisor.unsigned) divisor = divisor.toUnsigned();
            if (divisor.gt(this)) return UZERO;
            if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
                return UONE;
            res = UZERO;
        }

        // Repeat the following until the remainder is less than other:  find a
        // floating-point that approximates remainder / other *from below*, add this
        // into the result, and subtract it from the remainder.  It is critical that
        // the approximate value is less than or equal to the real value so that the
        // remainder never becomes negative.
        rem = this;
        while (rem.gte(divisor)) {
            // Approximate the result of division. This may be a little greater or
            // smaller than the actual value.
            approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));

            // We will tweak the approximate result by changing it in the 48-th digit or
            // the smallest non-fractional digit, whichever is larger.
            var log2 = Math.ceil(Math.log(approx) / Math.LN2),
                delta = log2 <= 48 ? 1 : pow_dbl(2, log2 - 48),


            // Decrease the approximation until it is smaller than the remainder.  Note
            // that if it is too large, the product overflows and is negative.
            approxRes = fromNumber(approx),
                approxRem = approxRes.mul(divisor);
            while (approxRem.isNegative() || approxRem.gt(rem)) {
                approx -= delta;
                approxRes = fromNumber(approx, this.unsigned);
                approxRem = approxRes.mul(divisor);
            }

            // We know the answer can't be zero... and actually, zero would cause
            // infinite recursion since we would make no progress.
            if (approxRes.isZero()) approxRes = ONE;

            res = res.add(approxRes);
            rem = rem.sub(approxRem);
        }
        return res;
    };

    /**
     * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
     * @function
     * @param {!Long|number|string} divisor Divisor
     * @returns {!Long} Quotient
     */
    LongPrototype.div = LongPrototype.divide;

    /**
     * Returns this Long modulo the specified.
     * @param {!Long|number|string} divisor Divisor
     * @returns {!Long} Remainder
     */
    LongPrototype.modulo = function modulo(divisor) {
        if (!isLong(divisor)) divisor = fromValue(divisor);

        // use wasm support if present
        if (wasm) {
            var low = (this.unsigned ? wasm.rem_u : wasm.rem_s)(this.low, this.high, divisor.low, divisor.high);
            return fromBits(low, wasm.get_high(), this.unsigned);
        }

        return this.sub(this.div(divisor).mul(divisor));
    };

    /**
     * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
     * @function
     * @param {!Long|number|string} divisor Divisor
     * @returns {!Long} Remainder
     */
    LongPrototype.mod = LongPrototype.modulo;

    /**
     * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
     * @function
     * @param {!Long|number|string} divisor Divisor
     * @returns {!Long} Remainder
     */
    LongPrototype.rem = LongPrototype.modulo;

    /**
     * Returns the bitwise NOT of this Long.
     * @returns {!Long}
     */
    LongPrototype.not = function not() {
        return fromBits(~this.low, ~this.high, this.unsigned);
    };

    /**
     * Returns the bitwise AND of this Long and the specified.
     * @param {!Long|number|string} other Other Long
     * @returns {!Long}
     */
    LongPrototype.and = function and(other) {
        if (!isLong(other)) other = fromValue(other);
        return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
    };

    /**
     * Returns the bitwise OR of this Long and the specified.
     * @param {!Long|number|string} other Other Long
     * @returns {!Long}
     */
    LongPrototype.or = function or(other) {
        if (!isLong(other)) other = fromValue(other);
        return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
    };

    /**
     * Returns the bitwise XOR of this Long and the given one.
     * @param {!Long|number|string} other Other Long
     * @returns {!Long}
     */
    LongPrototype.xor = function xor(other) {
        if (!isLong(other)) other = fromValue(other);
        return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
    };

    /**
     * Returns this Long with bits shifted to the left by the given amount.
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shiftLeft = function shiftLeft(numBits) {
        if (isLong(numBits)) numBits = numBits.toInt();
        if ((numBits &= 63) === 0) return this;else if (numBits < 32) return fromBits(this.low << numBits, this.high << numBits | this.low >>> 32 - numBits, this.unsigned);else return fromBits(0, this.low << numBits - 32, this.unsigned);
    };

    /**
     * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shl = LongPrototype.shiftLeft;

    /**
     * Returns this Long with bits arithmetically shifted to the right by the given amount.
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shiftRight = function shiftRight(numBits) {
        if (isLong(numBits)) numBits = numBits.toInt();
        if ((numBits &= 63) === 0) return this;else if (numBits < 32) return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >> numBits, this.unsigned);else return fromBits(this.high >> numBits - 32, this.high >= 0 ? 0 : -1, this.unsigned);
    };

    /**
     * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shr = LongPrototype.shiftRight;

    /**
     * Returns this Long with bits logically shifted to the right by the given amount.
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
        if (isLong(numBits)) numBits = numBits.toInt();
        numBits &= 63;
        if (numBits === 0) return this;else {
            var high = this.high;
            if (numBits < 32) {
                var low = this.low;
                return fromBits(low >>> numBits | high << 32 - numBits, high >>> numBits, this.unsigned);
            } else if (numBits === 32) return fromBits(high, 0, this.unsigned);else return fromBits(high >>> numBits - 32, 0, this.unsigned);
        }
    };

    /**
     * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shru = LongPrototype.shiftRightUnsigned;

    /**
     * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;

    /**
     * Converts this Long to signed.
     * @returns {!Long} Signed long
     */
    LongPrototype.toSigned = function toSigned() {
        if (!this.unsigned) return this;
        return fromBits(this.low, this.high, false);
    };

    /**
     * Converts this Long to unsigned.
     * @returns {!Long} Unsigned long
     */
    LongPrototype.toUnsigned = function toUnsigned() {
        if (this.unsigned) return this;
        return fromBits(this.low, this.high, true);
    };

    /**
     * Converts this Long to its byte representation.
     * @param {boolean=} le Whether little or big endian, defaults to big endian
     * @returns {!Array.<number>} Byte representation
     */
    LongPrototype.toBytes = function toBytes(le) {
        return le ? this.toBytesLE() : this.toBytesBE();
    };

    /**
     * Converts this Long to its little endian byte representation.
     * @returns {!Array.<number>} Little endian byte representation
     */
    LongPrototype.toBytesLE = function toBytesLE() {
        var hi = this.high,
            lo = this.low;
        return [lo & 0xff, lo >>> 8 & 0xff, lo >>> 16 & 0xff, lo >>> 24, hi & 0xff, hi >>> 8 & 0xff, hi >>> 16 & 0xff, hi >>> 24];
    };

    /**
     * Converts this Long to its big endian byte representation.
     * @returns {!Array.<number>} Big endian byte representation
     */
    LongPrototype.toBytesBE = function toBytesBE() {
        var hi = this.high,
            lo = this.low;
        return [hi >>> 24, hi >>> 16 & 0xff, hi >>> 8 & 0xff, hi & 0xff, lo >>> 24, lo >>> 16 & 0xff, lo >>> 8 & 0xff, lo & 0xff];
    };

    /**
     * Creates a Long from its byte representation.
     * @param {!Array.<number>} bytes Byte representation
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @param {boolean=} le Whether little or big endian, defaults to big endian
     * @returns {Long} The corresponding Long value
     */
    Long.fromBytes = function fromBytes(bytes, unsigned, le) {
        return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
    };

    /**
     * Creates a Long from its little endian byte representation.
     * @param {!Array.<number>} bytes Little endian byte representation
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {Long} The corresponding Long value
     */
    Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
        return new Long(bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24, bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24, unsigned);
    };

    /**
     * Creates a Long from its big endian byte representation.
     * @param {!Array.<number>} bytes Big endian byte representation
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {Long} The corresponding Long value
     */
    Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
        return new Long(bytes[4] << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7], bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], unsigned);
    };

    /***/
},
/* 30 */
/***/function (module, exports) {

    module.exports = pool;

    /**
     * An allocator as used by {@link util.pool}.
     * @typedef PoolAllocator
     * @type {function}
     * @param {number} size Buffer size
     * @returns {Uint8Array} Buffer
     */

    /**
     * A slicer as used by {@link util.pool}.
     * @typedef PoolSlicer
     * @type {function}
     * @param {number} start Start offset
     * @param {number} end End offset
     * @returns {Uint8Array} Buffer slice
     * @this {Uint8Array}
     */

    /**
     * A general purpose buffer pool.
     * @memberof util
     * @function
     * @param {PoolAllocator} alloc Allocator
     * @param {PoolSlicer} slice Slicer
     * @param {number} [size=8192] Slab size
     * @returns {PoolAllocator} Pooled allocator
     */
    function pool(alloc, slice, size) {
        var SIZE = size || 8192;
        var MAX = SIZE >>> 1;
        var slab = null;
        var offset = SIZE;
        return function pool_alloc(size) {
            if (size < 1 || size > MAX) return alloc(size);
            if (offset + size > SIZE) {
                slab = alloc(SIZE);
                offset = 0;
            }
            var buf = slice.call(slab, offset, offset += size);
            if (offset & 7) // align to 32 bit
                offset = (offset | 7) + 1;
            return buf;
        };
    }

    /***/
},
/* 31 */
/***/function (module, exports) {

    module.exports = factory(factory);

    /**
     * Reads / writes floats / doubles from / to buffers.
     * @name util.float
     * @namespace
     */

    /**
     * Writes a 32 bit float to a buffer using little endian byte order.
     * @name util.float.writeFloatLE
     * @function
     * @param {number} val Value to write
     * @param {Uint8Array} buf Target buffer
     * @param {number} pos Target buffer offset
     * @returns {undefined}
     */

    /**
     * Writes a 32 bit float to a buffer using big endian byte order.
     * @name util.float.writeFloatBE
     * @function
     * @param {number} val Value to write
     * @param {Uint8Array} buf Target buffer
     * @param {number} pos Target buffer offset
     * @returns {undefined}
     */

    /**
     * Reads a 32 bit float from a buffer using little endian byte order.
     * @name util.float.readFloatLE
     * @function
     * @param {Uint8Array} buf Source buffer
     * @param {number} pos Source buffer offset
     * @returns {number} Value read
     */

    /**
     * Reads a 32 bit float from a buffer using big endian byte order.
     * @name util.float.readFloatBE
     * @function
     * @param {Uint8Array} buf Source buffer
     * @param {number} pos Source buffer offset
     * @returns {number} Value read
     */

    /**
     * Writes a 64 bit double to a buffer using little endian byte order.
     * @name util.float.writeDoubleLE
     * @function
     * @param {number} val Value to write
     * @param {Uint8Array} buf Target buffer
     * @param {number} pos Target buffer offset
     * @returns {undefined}
     */

    /**
     * Writes a 64 bit double to a buffer using big endian byte order.
     * @name util.float.writeDoubleBE
     * @function
     * @param {number} val Value to write
     * @param {Uint8Array} buf Target buffer
     * @param {number} pos Target buffer offset
     * @returns {undefined}
     */

    /**
     * Reads a 64 bit double from a buffer using little endian byte order.
     * @name util.float.readDoubleLE
     * @function
     * @param {Uint8Array} buf Source buffer
     * @param {number} pos Source buffer offset
     * @returns {number} Value read
     */

    /**
     * Reads a 64 bit double from a buffer using big endian byte order.
     * @name util.float.readDoubleBE
     * @function
     * @param {Uint8Array} buf Source buffer
     * @param {number} pos Source buffer offset
     * @returns {number} Value read
     */

    // Factory function for the purpose of node-based testing in modified global environments
    function factory(exports) {

        // float: typed array
        if (typeof Float32Array !== "undefined") (function () {

            var f32 = new Float32Array([-0]),
                f8b = new Uint8Array(f32.buffer),
                le = f8b[3] === 128;

            function writeFloat_f32_cpy(val, buf, pos) {
                f32[0] = val;
                buf[pos] = f8b[0];
                buf[pos + 1] = f8b[1];
                buf[pos + 2] = f8b[2];
                buf[pos + 3] = f8b[3];
            }

            function writeFloat_f32_rev(val, buf, pos) {
                f32[0] = val;
                buf[pos] = f8b[3];
                buf[pos + 1] = f8b[2];
                buf[pos + 2] = f8b[1];
                buf[pos + 3] = f8b[0];
            }

            /* istanbul ignore next */
            exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
            /* istanbul ignore next */
            exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;

            function readFloat_f32_cpy(buf, pos) {
                f8b[0] = buf[pos];
                f8b[1] = buf[pos + 1];
                f8b[2] = buf[pos + 2];
                f8b[3] = buf[pos + 3];
                return f32[0];
            }

            function readFloat_f32_rev(buf, pos) {
                f8b[3] = buf[pos];
                f8b[2] = buf[pos + 1];
                f8b[1] = buf[pos + 2];
                f8b[0] = buf[pos + 3];
                return f32[0];
            }

            /* istanbul ignore next */
            exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
            /* istanbul ignore next */
            exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;

            // float: ieee754
        })();else (function () {

            function writeFloat_ieee754(writeUint, val, buf, pos) {
                var sign = val < 0 ? 1 : 0;
                if (sign) val = -val;
                if (val === 0) writeUint(1 / val > 0 ? /* positive */0 : /* negative 0 */2147483648, buf, pos);else if (isNaN(val)) writeUint(2143289344, buf, pos);else if (val > 3.4028234663852886e+38) // +-Infinity
                    writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);else if (val < 1.1754943508222875e-38) // denormal
                    writeUint((sign << 31 | Math.round(val / 1.401298464324817e-45)) >>> 0, buf, pos);else {
                    var exponent = Math.floor(Math.log(val) / Math.LN2),
                        mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
                    writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
                }
            }

            exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
            exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);

            function readFloat_ieee754(readUint, buf, pos) {
                var uint = readUint(buf, pos),
                    sign = (uint >> 31) * 2 + 1,
                    exponent = uint >>> 23 & 255,
                    mantissa = uint & 8388607;
                return exponent === 255 ? mantissa ? NaN : sign * Infinity : exponent === 0 // denormal
                ? sign * 1.401298464324817e-45 * mantissa : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
            }

            exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
            exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);
        })();

        // double: typed array
        if (typeof Float64Array !== "undefined") (function () {

            var f64 = new Float64Array([-0]),
                f8b = new Uint8Array(f64.buffer),
                le = f8b[7] === 128;

            function writeDouble_f64_cpy(val, buf, pos) {
                f64[0] = val;
                buf[pos] = f8b[0];
                buf[pos + 1] = f8b[1];
                buf[pos + 2] = f8b[2];
                buf[pos + 3] = f8b[3];
                buf[pos + 4] = f8b[4];
                buf[pos + 5] = f8b[5];
                buf[pos + 6] = f8b[6];
                buf[pos + 7] = f8b[7];
            }

            function writeDouble_f64_rev(val, buf, pos) {
                f64[0] = val;
                buf[pos] = f8b[7];
                buf[pos + 1] = f8b[6];
                buf[pos + 2] = f8b[5];
                buf[pos + 3] = f8b[4];
                buf[pos + 4] = f8b[3];
                buf[pos + 5] = f8b[2];
                buf[pos + 6] = f8b[1];
                buf[pos + 7] = f8b[0];
            }

            /* istanbul ignore next */
            exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
            /* istanbul ignore next */
            exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;

            function readDouble_f64_cpy(buf, pos) {
                f8b[0] = buf[pos];
                f8b[1] = buf[pos + 1];
                f8b[2] = buf[pos + 2];
                f8b[3] = buf[pos + 3];
                f8b[4] = buf[pos + 4];
                f8b[5] = buf[pos + 5];
                f8b[6] = buf[pos + 6];
                f8b[7] = buf[pos + 7];
                return f64[0];
            }

            function readDouble_f64_rev(buf, pos) {
                f8b[7] = buf[pos];
                f8b[6] = buf[pos + 1];
                f8b[5] = buf[pos + 2];
                f8b[4] = buf[pos + 3];
                f8b[3] = buf[pos + 4];
                f8b[2] = buf[pos + 5];
                f8b[1] = buf[pos + 6];
                f8b[0] = buf[pos + 7];
                return f64[0];
            }

            /* istanbul ignore next */
            exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
            /* istanbul ignore next */
            exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;

            // double: ieee754
        })();else (function () {

            function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
                var sign = val < 0 ? 1 : 0;
                if (sign) val = -val;
                if (val === 0) {
                    writeUint(0, buf, pos + off0);
                    writeUint(1 / val > 0 ? /* positive */0 : /* negative 0 */2147483648, buf, pos + off1);
                } else if (isNaN(val)) {
                    writeUint(0, buf, pos + off0);
                    writeUint(2146959360, buf, pos + off1);
                } else if (val > 1.7976931348623157e+308) {
                    // +-Infinity
                    writeUint(0, buf, pos + off0);
                    writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
                } else {
                    var mantissa;
                    if (val < 2.2250738585072014e-308) {
                        // denormal
                        mantissa = val / 5e-324;
                        writeUint(mantissa >>> 0, buf, pos + off0);
                        writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
                    } else {
                        var exponent = Math.floor(Math.log(val) / Math.LN2);
                        if (exponent === 1024) exponent = 1023;
                        mantissa = val * Math.pow(2, -exponent);
                        writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
                        writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
                    }
                }
            }

            exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
            exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);

            function readDouble_ieee754(readUint, off0, off1, buf, pos) {
                var lo = readUint(buf, pos + off0),
                    hi = readUint(buf, pos + off1);
                var sign = (hi >> 31) * 2 + 1,
                    exponent = hi >>> 20 & 2047,
                    mantissa = 4294967296 * (hi & 1048575) + lo;
                return exponent === 2047 ? mantissa ? NaN : sign * Infinity : exponent === 0 // denormal
                ? sign * 5e-324 * mantissa : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
            }

            exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
            exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);
        })();

        return exports;
    }

    // uint helpers

    function writeUintLE(val, buf, pos) {
        buf[pos] = val & 255;
        buf[pos + 1] = val >>> 8 & 255;
        buf[pos + 2] = val >>> 16 & 255;
        buf[pos + 3] = val >>> 24;
    }

    function writeUintBE(val, buf, pos) {
        buf[pos] = val >>> 24;
        buf[pos + 1] = val >>> 16 & 255;
        buf[pos + 2] = val >>> 8 & 255;
        buf[pos + 3] = val & 255;
    }

    function readUintLE(buf, pos) {
        return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16 | buf[pos + 3] << 24) >>> 0;
    }

    function readUintBE(buf, pos) {
        return (buf[pos] << 24 | buf[pos + 1] << 16 | buf[pos + 2] << 8 | buf[pos + 3]) >>> 0;
    }

    /***/
},
/* 32 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    module.exports = asPromise;

    /**
     * Callback as used by {@link util.asPromise}.
     * @typedef asPromiseCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {...*} params Additional arguments
     * @returns {undefined}
     */

    /**
     * Returns a promise from a node-style callback function.
     * @memberof util
     * @param {asPromiseCallback} fn Function to call
     * @param {*} ctx Function context
     * @param {...*} params Function arguments
     * @returns {Promise<*>} Promisified function
     */
    function asPromise(fn, ctx /*, varargs */) {
        var params = new Array(arguments.length - 1),
            offset = 0,
            index = 2,
            pending = true;
        while (index < arguments.length) params[offset++] = arguments[index++];
        return new Promise(function executor(resolve, reject) {
            params[offset] = function callback(err /*, varargs */) {
                if (pending) {
                    pending = false;
                    if (err) reject(err);else {
                        var params = new Array(arguments.length - 1),
                            offset = 0;
                        while (offset < params.length) params[offset++] = arguments[offset];
                        resolve.apply(null, params);
                    }
                }
            };
            try {
                fn.apply(ctx || null, params);
            } catch (err) {
                if (pending) {
                    pending = false;
                    reject(err);
                }
            }
        });
    }

    /***/
},
/* 33 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    module.exports = EventEmitter;

    /**
     * Constructs a new event emitter instance.
     * @classdesc A minimal event emitter.
     * @memberof util
     * @constructor
     */
    function EventEmitter() {

        /**
         * Registered listeners.
         * @type {Object.<string,*>}
         * @private
         */
        this._listeners = {};
    }

    /**
     * Registers an event listener.
     * @param {string} evt Event name
     * @param {function} fn Listener
     * @param {*} [ctx] Listener context
     * @returns {util.EventEmitter} `this`
     */
    EventEmitter.prototype.on = function on(evt, fn, ctx) {
        (this._listeners[evt] || (this._listeners[evt] = [])).push({
            fn: fn,
            ctx: ctx || this
        });
        return this;
    };

    /**
     * Removes an event listener or any matching listeners if arguments are omitted.
     * @param {string} [evt] Event name. Removes all listeners if omitted.
     * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
     * @returns {util.EventEmitter} `this`
     */
    EventEmitter.prototype.off = function off(evt, fn) {
        if (evt === undefined) this._listeners = {};else {
            if (fn === undefined) this._listeners[evt] = [];else {
                var listeners = this._listeners[evt];
                for (var i = 0; i < listeners.length;) if (listeners[i].fn === fn) listeners.splice(i, 1);else ++i;
            }
        }
        return this;
    };

    /**
     * Emits an event by calling its listeners with the specified arguments.
     * @param {string} evt Event name
     * @param {...*} args Arguments
     * @returns {util.EventEmitter} `this`
     */
    EventEmitter.prototype.emit = function emit(evt) {
        var listeners = this._listeners[evt];
        if (listeners) {
            var args = [],
                i = 1;
            for (; i < arguments.length;) args.push(arguments[i++]);
            for (i = 0; i < listeners.length;) listeners[i].fn.apply(listeners[i++].ctx, args);
        }
        return this;
    };

    /***/
},
/* 34 */
/***/function (module, exports) {

    var path = module.exports;

    var isAbsolute =
    /**
     * Tests if the specified path is absolute.
     * @param {string} path Path to test
     * @returns {boolean} `true` if path is absolute
     */
    path.isAbsolute = function isAbsolute(path) {
        return (/^(?:\/|\w+:)/.test(path)
        );
    };

    var normalize =
    /**
     * Normalizes the specified path.
     * @param {string} path Path to normalize
     * @returns {string} Normalized path
     */
    path.normalize = function normalize(path) {
        path = path.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
        var parts = path.split("/"),
            absolute = isAbsolute(path),
            prefix = "";
        if (absolute) prefix = parts.shift() + "/";
        for (var i = 0; i < parts.length;) {
            if (parts[i] === "..") {
                if (i > 0 && parts[i - 1] !== "..") parts.splice(--i, 2);else if (absolute) parts.splice(i, 1);else ++i;
            } else if (parts[i] === ".") parts.splice(i, 1);else ++i;
        }
        return prefix + parts.join("/");
    };

    /**
     * Resolves the specified include path against the specified origin path.
     * @param {string} originPath Path to the origin file
     * @param {string} includePath Include path relative to origin path
     * @param {boolean} [alreadyNormalized=false] `true` if both paths are already known to be normalized
     * @returns {string} Path to the include file
     */
    path.resolve = function resolve(originPath, includePath, alreadyNormalized) {
        if (!alreadyNormalized) includePath = normalize(includePath);
        if (isAbsolute(includePath)) return includePath;
        if (!alreadyNormalized) originPath = normalize(originPath);
        return (originPath = originPath.replace(/(?:\/|^)[^/]+$/, "")).length ? normalize(originPath + "/" + includePath) : includePath;
    };

    /***/
}]
/******/);