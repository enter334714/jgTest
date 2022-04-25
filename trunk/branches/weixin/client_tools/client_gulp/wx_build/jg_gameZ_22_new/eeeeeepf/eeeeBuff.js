!function (C$99r) {
  var C$99i = {};function __webpack_require__(C$99e) {
    if (C$99i[C$99e]) return C$99i[C$99e].exports;var C$99t = C$99i[C$99e] = { i: C$99e, l: !1, exports: {} };return C$99r[C$99e].call(C$99t.exports, C$99t, C$99t.exports, __webpack_require__), C$99t.l = !0, C$99t.exports;
  }__webpack_require__.m = C$99r, __webpack_require__.c = C$99i, __webpack_require__.d = function (C$99e, C$99t, C$99r) {
    __webpack_require__.o(C$99e, C$99t) || Object.defineProperty(C$99e, C$99t, { enumerable: !0, get: C$99r });
  }, __webpack_require__.r = function (C$99e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(C$99e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(C$99e, "__esModule", { value: !0 });
  }, __webpack_require__.t = function (C$99t, C$99e) {
    if (1 & C$99e && (C$99t = __webpack_require__(C$99t)), 8 & C$99e) return C$99t;if (4 & C$99e && "object" == typeof C$99t && C$99t && C$99t.__esModule) return C$99t;var C$99r = Object.create(null);if (__webpack_require__.r(C$99r), Object.defineProperty(C$99r, "default", { enumerable: !0, value: C$99t }), 2 & C$99e && "string" != typeof C$99t) for (var C$99i in C$99t) __webpack_require__.d(C$99r, C$99i, function (C$99e) {
      return C$99t[C$99e];
    }.bind(null, C$99i));return C$99r;
  }, __webpack_require__.n = function (C$99e) {
    var C$99t = C$99e && C$99e.__esModule ? function () {
      return C$99e.default;
    } : function () {
      return C$99e;
    };return __webpack_require__.d(C$99t, "a", C$99t), C$99t;
  }, __webpack_require__.o = function (C$99e, C$99t) {
    return Object.prototype.hasOwnProperty.call(C$99e, C$99t);
  }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 28);
}([function (C$99e, C$99t, C$99r) {
  var C$99i = C$99e.exports;var C$99n = C$99r(16);C$99i.LongBits = C$99r(11), C$99i.Long = C$99r(29), C$99i.pool = C$99r(30), C$99i.float = C$99r(31), C$99i.asPromise = C$99r(32), C$99i.EventEmitter = C$99r(33), C$99i.path = C$99r(34), C$99i.base64 = C$99r(17), C$99i.utf8 = C$99r(8), C$99i.compareFieldsById = function (C$99e, C$99t) {
    return C$99e.id - C$99t.id;
  }, C$99i.toArray = function (C$99e) {
    if (C$99e) {
      var C$99t = Object.keys(C$99e),
          C$99r = new Array(C$99t.length),
          C$99i = 0;for (; C$99i < C$99t.length;) C$99r[C$99i] = C$99e[C$99t[C$99i++]];return C$99r;
    }return [];
  }, C$99i.toObject = function (C$99e) {
    var C$99t = {},
        C$99r = 0;for (; C$99r < C$99e.length;) {
      var C$99i = C$99e[C$99r++],
          C$99n = C$99e[C$99r++];void 0 !== C$99n && (C$99t[C$99i] = C$99n);
    }return C$99t;
  }, C$99i.isString = function (C$99e) {
    return "string" == typeof C$99e || C$99e instanceof String;
  };C$99i.isReserved = function (C$99e) {
    return (/^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(C$99e)
    );
  }, C$99i.isObject = function (C$99e) {
    return C$99e && "object" == typeof C$99e;
  }, C$99i.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, C$99i.oneOfGetter = function (C$99e) {
    var C$99r = {};for (var C$99t = 0; C$99t < C$99e.length; ++C$99t) C$99r[C$99e[C$99t]] = 1;return function () {
      for (var C$99e = Object.keys(this), C$99t = C$99e.length - 1; -1 < C$99t; --C$99t) if (1 === C$99r[C$99e[C$99t]] && void 0 !== this[C$99e[C$99t]] && null !== this[C$99e[C$99t]]) return C$99e[C$99t];
    };
  }, C$99i.oneOfSetter = function (C$99r) {
    return function (C$99e) {
      for (var C$99t = 0; C$99t < C$99r.length; ++C$99t) C$99r[C$99t] !== C$99e && delete this[C$99r[C$99t]];
    };
  }, C$99i.merge = function (C$99e, C$99t, C$99r) {
    for (var C$99i = Object.keys(C$99t), C$99n = 0; C$99n < C$99i.length; ++C$99n) void 0 !== C$99e[C$99i[C$99n]] && C$99r || (C$99e[C$99i[C$99n]] = C$99t[C$99i[C$99n]]);return C$99e;
  }, C$99i.decorateType = function (C$99e, C$99t) {
    if (C$99e.$type) return C$99t && C$99e.$type.name !== C$99t && (C$99i.decorateRoot.remove(C$99e.$type), C$99e.$type.name = C$99t, C$99i.decorateRoot.add(C$99e.$type)), C$99e.$type;C$99t = new (Type = Type || C$99r(3))(C$99t || C$99e.name);return C$99i.decorateRoot.add(C$99t), C$99t.ctor = C$99e, Object.defineProperty(C$99e, "$type", { value: C$99t, enumerable: !1 }), Object.defineProperty(C$99e.prototype, "$type", { value: C$99t, enumerable: !1 }), C$99t;
  }, C$99i.emptyArray = Object.freeze ? Object.freeze([]) : [], C$99i.emptyObject = Object.freeze ? Object.freeze({}) : {}, C$99i.longToHash = function (C$99e) {
    return C$99e ? C$99i.LongBits.from(C$99e).toHash() : C$99i.LongBits.zeroHash;
  }, C$99i.copy = function (C$99e) {
    if ("object" != typeof C$99e) return C$99e;var C$99t = {};for (var C$99r in C$99e) C$99t[C$99r] = C$99e[C$99r];return C$99t;
  }, C$99i.deepCopy = function deepCopy(C$99e) {
    if ("object" != typeof C$99e) return C$99e;var C$99t = {};for (var C$99r in C$99e) C$99t[C$99r] = deepCopy(C$99e[C$99r]);return C$99t;
  }, C$99i.ProtocolError = function (C$99e) {
    function CustomError(C$99e, C$99t) {
      if (!(this instanceof CustomError)) return new CustomError(C$99e, C$99t);Object.defineProperty(this, "message", { get: function () {
          return C$99e;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, CustomError) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), C$99t && merge(this, C$99t);
    }return (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError, Object.defineProperty(CustomError.prototype, "name", { get: function () {
        return C$99e;
      } }), CustomError.prototype.toString = function () {
      return this.name + ": " + this.message;
    }, CustomError;
  }, C$99i.toJSONOptions = { longs: String, enums: String, bytes: String, json: !0 }, C$99i.Buffer = null, C$99i.newBuffer = function (C$99e) {
    return "number" == typeof C$99e ? new C$99i.Array(C$99e) : "undefined" == typeof Uint8Array ? C$99e : new Uint8Array(C$99e);
  }, C$99i.stringToBytes = function (C$99e) {
    var C$99t = [];var C$99r, C$99i;C$99r = C$99e.length;for (var C$99n = 0; C$99n < C$99r; C$99n++) 65536 <= (C$99i = C$99e.charCodeAt(C$99n)) && C$99i <= 1114111 ? (C$99t.push(C$99i >> 18 & 7 | 240), C$99t.push(C$99i >> 12 & 63 | 128), C$99t.push(C$99i >> 6 & 63 | 128), C$99t.push(63 & C$99i | 128)) : 2048 <= C$99i && C$99i <= 65535 ? (C$99t.push(C$99i >> 12 & 15 | 224), C$99t.push(C$99i >> 6 & 63 | 128), C$99t.push(63 & C$99i | 128)) : 128 <= C$99i && C$99i <= 2047 ? (C$99t.push(C$99i >> 6 & 31 | 192), C$99t.push(63 & C$99i | 128)) : C$99t.push(255 & C$99i);return C$99t;
  }, C$99i.byteToString = function (C$99e) {
    if ("string" == typeof C$99e) return C$99e;var C$99t = "",
        C$99r = C$99e;for (var C$99i = 0; C$99i < C$99r.length; C$99i++) {
      var C$99n = C$99r[C$99i].toString(2),
          C$99o = C$99n.match(/^1+?(?=0)/);if (C$99o && 8 == C$99n.length) {
        var C$99s = C$99o[0].length;var C$99a = C$99r[C$99i].toString(2).slice(7 - C$99s);for (var C$99u = 1; C$99u < C$99s; C$99u++) C$99a += C$99r[C$99u + C$99i].toString(2).slice(2);C$99t += String.fromCharCode(parseInt(C$99a, 2)), C$99i += C$99s - 1;
      } else C$99t += String.fromCharCode(C$99r[C$99i]);
    }return C$99t;
  }, C$99i.isInteger = Number.isInteger || function (C$99e) {
    return "number" == typeof C$99e && isFinite(C$99e) && Math.floor(C$99e) === C$99e;
  }, Object.defineProperty(C$99i, "decorateRoot", { get: function () {
      return C$99n.decorated || (C$99n.decorated = new (C$99r(9))());
    } });
}, function (C$99e, C$99t, C$99r) {
  C$99e.exports = Enum;var C$99a = C$99r(4);((Enum.prototype = Object.create(C$99a.prototype)).constructor = Enum).className = "Enum";var C$99i = C$99r(6);function Enum(C$99e, C$99t, C$99r, C$99i, C$99n) {
    if (C$99a.call(this, C$99e, C$99r), C$99t && "object" != typeof C$99t) throw TypeError("values must be an object");if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = C$99i, this.comments = C$99n || {}, this.reserved = void 0, C$99t) for (var C$99o = Object.keys(C$99t), C$99s = 0; C$99s < C$99o.length; ++C$99s) "number" == typeof C$99t[C$99o[C$99s]] && (this.valuesById[this.values[C$99o[C$99s]] = C$99t[C$99o[C$99s]]] = C$99o[C$99s]);
  }Enum.fromJSON = function (C$99e, C$99t) {
    C$99e = new Enum(C$99e, C$99t.values, C$99t.options, C$99t.comment, C$99t.comments);return C$99e.reserved = C$99t.reserved, C$99e;
  }, Enum.prototype.toJSON = function (C$99e) {
    C$99e = !!C$99e && Boolean(C$99e.keepComments);return util.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", C$99e ? this.comment : void 0, "comments", C$99e ? this.comments : void 0]);
  }, Enum.prototype.add = function (C$99e, C$99t, C$99r) {
    if (!util.isString(C$99e)) throw TypeError("name must be a string");if (!util.isInteger(C$99t)) throw TypeError("id must be an integer");if (void 0 !== this.values[C$99e]) throw Error("duplicate name '" + C$99e + "' in " + this);if (this.isReservedId(C$99t)) throw Error("id " + C$99t + " is reserved in " + this);if (this.isReservedName(C$99e)) throw Error("name '" + C$99e + "' is reserved in " + this);if (void 0 !== this.valuesById[C$99t]) {
      if (!this.options || !this.options.allow_alias) throw Error("duplicate id " + C$99t + " in " + this);this.values[C$99e] = C$99t;
    } else this.valuesById[this.values[C$99e] = C$99t] = C$99e;return this.comments[C$99e] = C$99r || null, this;
  }, Enum.prototype.remove = function (C$99e) {
    if (!util.isString(C$99e)) throw TypeError("name must be a string");var C$99t = this.values[C$99e];if (null == C$99t) throw Error("name '" + C$99e + "' does not exist in " + this);return delete this.valuesById[C$99t], delete this.values[C$99e], delete this.comments[C$99e], this;
  }, Enum.prototype.isReservedId = function (C$99e) {
    return C$99i.isReservedId(this.reserved, C$99e);
  }, Enum.prototype.isReservedName = function (C$99e) {
    return C$99i.isReservedName(this.reserved, C$99e);
  };
}, function (C$99e, C$99n, C$99t) {
  C$99e.exports = Field;var C$99a = C$99t(4);var C$99r, C$99u, C$99f;var C$99i;((Field.prototype = Object.create(C$99a.prototype)).constructor = Field).className = "Field";var C$99l = /^required|optional|repeated$/;function Field(C$99e, C$99t, C$99r, C$99i, C$99n, C$99o, C$99s) {
    if (C$99f.isObject(C$99i) ? (C$99s = C$99n, C$99o = C$99i, C$99i = C$99n = void 0) : C$99f.isObject(C$99n) && (C$99s = C$99o, C$99o = C$99n, C$99n = void 0), C$99a.call(this, C$99e, C$99o), !C$99f.isInteger(C$99t) || C$99t < 0) throw TypeError("id must be a non-negative integer");if (!C$99f.isString(C$99r)) throw TypeError("type must be a string");if (void 0 !== C$99i && !C$99l.test(C$99i = C$99i.toString().toLowerCase())) throw TypeError("rule must be a string rule");if (void 0 !== C$99n && !C$99f.isString(C$99n)) throw TypeError("extend must be a string");this.rule = C$99i && "optional" !== C$99i ? C$99i : void 0, this.type = C$99r, this.id = C$99t, this.extend = C$99n || void 0, this.required = "required" === C$99i, this.optional = !this.required, this.repeated = "repeated" === C$99i, this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = !!C$99f.Long && void 0 !== C$99u.long[C$99r], this.bytes = "bytes" === C$99r, this.resolvedType = null, this.extensionField = null, this.declaringField = null, this._packed = null, this.comment = C$99s;
  }Field.fromJSON = function (C$99e, C$99t) {
    return new Field(C$99e, C$99t.id, C$99t.type, C$99t.rule, C$99t.extend, C$99t.options, C$99t.comment);
  }, Object.defineProperty(Field.prototype, "packed", { get: function () {
      return null === this._packed && (this._packed = !1 !== this.getOption("packed")), this._packed;
    } }), Field.prototype.setOption = function (C$99e, C$99t, C$99r) {
    return "packed" === C$99e && (this._packed = null), C$99a.prototype.setOption.call(this, C$99e, C$99t, C$99r);
  }, Field.prototype.toJSON = function (C$99e) {
    C$99e = !!C$99e && Boolean(C$99e.keepComments);return C$99f.toObject(["rule", "optional" !== this.rule && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", C$99e ? this.comment : void 0]);
  }, Field.prototype.resolve = function () {
    return this.resolved ? this : (void 0 === (this.typeDefault = C$99u.defaults[this.type]) && (this.resolvedType = (this.declaringField || this).parent.lookupTypeOrEnum(this.type), this.resolvedType instanceof C$99i ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]), this.options && null != this.options.default && (this.typeDefault = this.options.default, this.resolvedType instanceof C$99r && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (!0 !== this.options.packed && (void 0 === this.options.packed || !this.resolvedType || this.resolvedType instanceof C$99r) || delete this.options.packed, Object.keys(this.options).length || (this.options = void 0)), this.long ? (this.typeDefault = C$99f.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0)), Object.freeze && Object.freeze(this.typeDefault)) : this.bytes && "string" == typeof this.typeDefault && (C$99f.utf8.write(this.typeDefault, C$99e = C$99f.newBuffer(C$99f.utf8.length(this.typeDefault)), 0), this.typeDefault = C$99e), this.map ? this.defaultValue = C$99f.emptyObject : this.repeated ? this.defaultValue = C$99f.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof C$99i && (this.parent.ctor.prototype[this.name] = this.defaultValue), C$99a.prototype.resolve.call(this));var C$99e;
  }, Field.d = function (C$99r, C$99i, C$99n, C$99o) {
    return "function" == typeof C$99i ? C$99i = C$99f.decorateType(C$99i).name : C$99i && "object" == typeof C$99i && (C$99i = C$99f.decorateEnum(C$99i).name), function (C$99e, C$99t) {
      C$99f.decorateType(C$99e.constructor).add(new Field(C$99t, C$99r, C$99i, C$99n, { default: C$99o }));
    };
  }, Field._configure = function () {
    C$99i = C$99t(3), C$99r = C$99t(1), C$99u = C$99t(5), C$99f = C$99t(0);
  };
}, function (C$99t, C$99r, C$99e) {
  C$99t.exports = Type;var C$99s = C$99e(6);var C$99h, C$99a, C$99u, C$99f, C$99c, C$99n, C$99l, C$99p, C$99d, C$99y, C$99v, C$99g, C$99o, C$99m;function Type(C$99e, C$99t) {
    C$99s.call(this, C$99e, C$99t), this.fields = {}, this.oneofs = void 0, this.extensions = void 0, this.reserved = void 0, this.group = void 0, this._fieldsById = null, this._fieldsArray = null, this._oneofsArray = null, this._ctor = null;
  }function clearCache(C$99e) {
    return C$99e._fieldsById = C$99e._fieldsArray = C$99e._oneofsArray = null, delete C$99e.encode, delete C$99e.decode, delete C$99e.verify, C$99e;
  }((Type.prototype = Object.create(C$99s.prototype)).constructor = Type).className = "Type", Object.defineProperties(Type.prototype, { fieldsById: { get: function () {
        if (this._fieldsById) return this._fieldsById;this._fieldsById = {};for (var C$99e = Object.keys(this.fields), C$99t = 0; C$99t < C$99e.length; ++C$99t) {
          var C$99r = this.fields[C$99e[C$99t]],
              C$99i = C$99r.id;if (this._fieldsById[C$99i]) throw Error("duplicate id " + C$99i + " in " + this);this._fieldsById[C$99i] = C$99r;
        }return this._fieldsById;
      } }, fieldsArray: { get: function () {
        return this._fieldsArray || (this._fieldsArray = C$99l.toArray(this.fields));
      } }, oneofsArray: { get: function () {
        return this._oneofsArray || (this._oneofsArray = C$99l.toArray(this.oneofs));
      } }, ctor: { get: function () {
        return this._ctor || (this.ctor = Type.generateConstructor(this));
      }, set: function (C$99e) {
        var C$99t = C$99e.prototype;C$99t instanceof C$99u || ((C$99e.prototype = new C$99u()).constructor = C$99e, C$99l.merge(C$99e.prototype, C$99t)), C$99e.$type = C$99e.prototype.$type = this, C$99l.merge(C$99e, C$99u, !0), C$99l.merge(C$99e.prototype, C$99u, !0), this._ctor = C$99e;var C$99r = 0;for (; C$99r < this.fieldsArray.length; ++C$99r) this._fieldsArray[C$99r].resolve();var C$99i = {};for (C$99r = 0; C$99r < this.oneofsArray.length; ++C$99r) {
          var C$99n = this._oneofsArray[C$99r].resolve().name;var C$99o = function (C$99r) {
            var C$99i = {};for (var C$99e = 0; C$99e < C$99r.length; ++C$99e) C$99i[C$99r[C$99e]] = 0;return { setter: function (C$99e) {
                if (!(C$99r.indexOf(C$99e) < 0)) {
                  C$99i[C$99e] = 1;for (var C$99t = 0; C$99t < C$99r.length; ++C$99t) C$99r[C$99t] !== C$99e && delete this[C$99r[C$99t]];
                }
              }, getter: function () {
                for (var C$99e = Object.keys(this), C$99t = C$99e.length - 1; -1 < C$99t; --C$99t) if (1 === C$99i[C$99e[C$99t]] && void 0 !== this[C$99e[C$99t]] && null !== this[C$99e[C$99t]]) return C$99e[C$99t];
              } };
          }(this._oneofsArray[C$99r].oneof);C$99i[C$99n] = { get: C$99o.getter, set: C$99o.setter };
        }C$99r && Object.defineProperties(C$99e.prototype, C$99i);
      } } }), Type.generateConstructor = function (C$99o) {
    return function (C$99e) {
      for (var C$99t, C$99r = 0; C$99r < C$99o.fieldsArray.length; C$99r++) (C$99t = C$99o._fieldsArray[C$99r]).map ? this[C$99t.name] = {} : C$99t.repeated && (this[C$99t.name] = []);if (C$99e) for (var C$99i = Object.keys(C$99e), C$99n = 0; C$99n < C$99i.length; ++C$99n) null != C$99e[C$99i[C$99n]] && (this[C$99i[C$99n]] = C$99e[C$99i[C$99n]]);
    };
  }, Type.fromJSON = function (C$99e, C$99t) {
    var C$99r = new Type(C$99e, C$99t.options);C$99r.extensions = C$99t.extensions, C$99r.reserved = C$99t.reserved;var C$99i = Object.keys(C$99t.fields),
        C$99n = 0;for (; C$99n < C$99i.length; ++C$99n) C$99r.add((void 0 !== C$99t.fields[C$99i[C$99n]].keyType ? C$99m : C$99a).fromJSON(C$99i[C$99n], C$99t.fields[C$99i[C$99n]]));if (C$99t.oneofs) for (C$99i = Object.keys(C$99t.oneofs), C$99n = 0; C$99n < C$99i.length; ++C$99n) C$99r.add(C$99f.fromJSON(C$99i[C$99n], C$99t.oneofs[C$99i[C$99n]]));if (C$99t.nested) for (C$99i = Object.keys(C$99t.nested), C$99n = 0; C$99n < C$99i.length; ++C$99n) {
      var C$99o = C$99t.nested[C$99i[C$99n]];C$99r.add((void 0 !== C$99o.id ? C$99a : void 0 !== C$99o.fields ? Type : void 0 !== C$99o.values ? C$99h : void 0 !== C$99o.methods ? C$99v : C$99s).fromJSON(C$99i[C$99n], C$99o));
    }return C$99t.extensions && C$99t.extensions.length && (C$99r.extensions = C$99t.extensions), C$99t.reserved && C$99t.reserved.length && (C$99r.reserved = C$99t.reserved), C$99t.group && (C$99r.group = !0), C$99t.comment && (C$99r.comment = C$99t.comment), C$99r;
  }, Type.prototype.toJSON = function (C$99e) {
    var C$99t = C$99s.prototype.toJSON.call(this, C$99e);var C$99r = !!C$99e && Boolean(C$99e.keepComments);return { options: C$99t && C$99t.options || void 0, oneofs: C$99s.arrayToJSON(this.oneofsArray, C$99e), fields: C$99s.arrayToJSON(this.fieldsArray.filter(function (C$99e) {
        return !C$99e.declaringField;
      }), C$99e) || {}, extensions: this.extensions && this.extensions.length ? this.extensions : void 0, reserved: this.reserved && this.reserved.length ? this.reserved : void 0, group: this.group || void 0, nested: C$99t && C$99t.nested || void 0, comment: C$99r ? this.comment : void 0 };
  }, Type.prototype.resolveAll = function () {
    var C$99e = this.fieldsArray,
        C$99t = 0;for (; C$99t < C$99e.length;) C$99e[C$99t++].resolve();var C$99r = this.oneofsArray;for (C$99t = 0; C$99t < C$99r.length;) C$99r[C$99t++].resolve();return C$99s.prototype.resolveAll.call(this);
  }, Type.prototype.get = function (C$99e) {
    return this.fields[C$99e] || this.oneofs && this.oneofs[C$99e] || this.nested && this.nested[C$99e] || null;
  }, Type.prototype.add = function (C$99e) {
    if (this.get(C$99e.name)) throw Error("duplicate name '" + C$99e.name + "' in " + this);if (C$99e instanceof C$99a && void 0 === C$99e.extend) {
      if (this._fieldsById && this._fieldsById[C$99e.id]) throw Error("duplicate id " + C$99e.id + " in " + this);if (this.isReservedId(C$99e.id)) throw Error("id " + C$99e.id + " is reserved in " + this);if (this.isReservedName(C$99e.name)) throw Error("name '" + C$99e.name + "' is reserved in " + this);return C$99e.parent && C$99e.parent.remove(C$99e), (this.fields[C$99e.name] = C$99e).message = this, C$99e.onAdd(this), clearCache(this);
    }return C$99e instanceof C$99f ? (this.oneofs || (this.oneofs = {}), (this.oneofs[C$99e.name] = C$99e).onAdd(this), clearCache(this)) : C$99s.prototype.add.call(this, C$99e);
  }, Type.prototype.remove = function (C$99e) {
    if (C$99e instanceof C$99a && void 0 === C$99e.extend) {
      if (!this.fields || this.fields[C$99e.name] !== C$99e) throw Error(C$99e + " is not a member of " + this);return delete this.fields[C$99e.name], C$99e.parent = null, C$99e.onRemove(this), clearCache(this);
    }if (C$99e instanceof C$99f) {
      if (!this.oneofs || this.oneofs[C$99e.name] !== C$99e) throw Error(C$99e + " is not a member of " + this);return delete this.oneofs[C$99e.name], C$99e.parent = null, C$99e.onRemove(this), clearCache(this);
    }return C$99s.prototype.remove.call(this, C$99e);
  }, Type.prototype.isReservedId = function (C$99e) {
    return C$99s.isReservedId(this.reserved, C$99e);
  }, Type.prototype.isReservedName = function (C$99e) {
    return C$99s.isReservedName(this.reserved, C$99e);
  }, Type.prototype.create = function (C$99e) {
    return new this.ctor(C$99e);
  }, Type.prototype.setup = function () {
    var C$99e = this.fullName,
        C$99t = [];for (var C$99r = 0; C$99r < this.fieldsArray.length; ++C$99r) C$99t.push(this._fieldsArray[C$99r].resolve().resolvedType);this.encode = C$99d(this)({ Writer: C$99c, types: C$99t, util: C$99l }), this.decode = C$99y(this)({ Reader: C$99n, types: C$99t, util: C$99l }), this.verify = C$99p(this)({ types: C$99t, util: C$99l }), this.fromObject = C$99o.fromObject(this)({ types: C$99t, util: C$99l }), this.toObject = C$99o.toObject(this)({ types: C$99t, util: C$99l });C$99e = C$99g[C$99e];var C$99i;return C$99e && ((C$99i = Object.create(this)).fromObject = this.fromObject, this.fromObject = C$99e.fromObject.bind(C$99i), C$99i.toObject = this.toObject, this.toObject = C$99e.toObject.bind(C$99i)), this;
  }, Type.prototype.encode = function (C$99e, C$99t) {
    return this.setup().encode(C$99e, C$99t);
  }, Type.prototype.encodeDelimited = function (C$99e, C$99t) {
    return this.encode(C$99e, C$99t && C$99t.len ? C$99t.fork() : C$99t).ldelim();
  }, Type.prototype.decode = function (C$99e, C$99t) {
    return this.setup().decode(C$99e, C$99t);
  }, Type.prototype.decodeDelimited = function (C$99e) {
    return C$99e instanceof C$99n || (C$99e = C$99n.create(C$99e)), this.decode(C$99e, C$99e.uint32());
  }, Type.prototype.verify = function (C$99e) {
    return this.setup().verify(C$99e);
  }, Type.prototype.fromObject = function (C$99e) {
    return this.setup().fromObject(C$99e);
  }, Type.prototype.toObject = function (C$99e, C$99t) {
    return this.setup().toObject(C$99e, C$99t);
  }, Type.d = function (C$99t) {
    return function (C$99e) {
      C$99l.decorateType(C$99e, C$99t);
    };
  }, Type._configure = function () {
    C$99h = C$99e(1), C$99a = C$99e(2), C$99u = C$99e(14), C$99f = C$99e(7), C$99c = C$99e(15), C$99n = C$99e(22), C$99l = C$99e(0), C$99p = C$99e(23), C$99d = C$99e(24), C$99y = C$99e(25), C$99v = C$99e(10), C$99g = C$99e(26), C$99o = C$99e(27), C$99m = C$99e(12);
  };
}, function (C$99e, C$99t, C$99r) {
  "use strict";
  var C$99i;var C$99n;function ReflectionObject(C$99e, C$99t) {
    if (!C$99i.isString(C$99e)) throw TypeError("name must be a string");if (C$99t && !C$99i.isObject(C$99t)) throw TypeError("options must be an object");this.options = C$99t, this.name = C$99e, this.parent = null, this.resolved = !1, this.comment = null, this.filename = null;
  }(C$99e.exports = ReflectionObject).className = "ReflectionObject", Object.defineProperties(ReflectionObject.prototype, { root: { get: function () {
        var C$99e = this;for (; null !== C$99e.parent;) C$99e = C$99e.parent;return C$99e;
      } }, fullName: { get: function () {
        var C$99e = [this.name],
            C$99t = this.parent;for (; C$99t;) C$99e.unshift(C$99t.name), C$99t = C$99t.parent;return C$99e.join(".");
      } } }), ReflectionObject.prototype.toJSON = function () {
    throw Error();
  }, ReflectionObject.prototype.onAdd = function (C$99e) {
    this.parent && this.parent !== C$99e && this.parent.remove(this), this.parent = C$99e, this.resolved = !1;C$99e = C$99e.root;C$99e instanceof C$99n && C$99e._handleAdd(this);
  }, ReflectionObject.prototype.onRemove = function (C$99e) {
    C$99e = C$99e.root;C$99e instanceof C$99n && C$99e._handleRemove(this), this.parent = null, this.resolved = !1;
  }, ReflectionObject.prototype.resolve = function () {
    return this.resolved || this.root instanceof C$99n && (this.resolved = !0), this;
  }, ReflectionObject.prototype.getOption = function (C$99e) {
    if (this.options) return this.options[C$99e];
  }, ReflectionObject.prototype.setOption = function (C$99e, C$99t, C$99r) {
    return C$99r && this.options && void 0 !== this.options[C$99e] || ((this.options || (this.options = {}))[C$99e] = C$99t), this;
  }, ReflectionObject.prototype.setOptions = function (C$99e, C$99t) {
    if (C$99e) for (var C$99r = Object.keys(C$99e), C$99i = 0; C$99i < C$99r.length; ++C$99i) this.setOption(C$99r[C$99i], C$99e[C$99r[C$99i]], C$99t);return this;
  }, ReflectionObject.prototype.toString = function () {
    var C$99e = this.constructor.className,
        C$99t = this.fullName;return C$99t.length ? C$99e + " " + C$99t : C$99e;
  }, ReflectionObject._configure = function (C$99e) {
    C$99n = C$99r(9), C$99i = C$99r(0);
  };
}, function (C$99e, C$99t, C$99r) {
  "use strict";
  C$99e = C$99e.exports;var C$99i = C$99r(0);var C$99n = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];function bake(C$99e, C$99t) {
    var C$99r = 0,
        C$99i = {};for (C$99t |= 0; C$99r < C$99e.length;) C$99i[C$99n[C$99r + C$99t]] = C$99e[C$99r++];return C$99i;
  }C$99e.basic = bake([1, 5, 0, 0, 0, 5, 5, 0, 4, 0, 1, 1, 0, 2, 2]), C$99e.defaults = bake([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", C$99i.emptyArray, null]), C$99e.long = bake([0, 0, 0, 1, 1], 7), C$99e.mapKey = bake([0, 0, 0, 5, 5, 0, 4, 0, 1, 1, 0, 2], 2), C$99e.packed = bake([1, 5, 0, 0, 0, 5, 5, 0, 4, 0, 1, 1, 0]), C$99e._configure = function () {
    C$99r(0);
  };
}, function (C$99t, C$99i, C$99e) {
  C$99t.exports = Namespace;var C$99r = C$99e(4);var C$99n, C$99o, C$99s;var C$99a;var C$99u;function arrayToJSON(C$99e, C$99t) {
    if (C$99e && C$99e.length) {
      var C$99r = {};for (var C$99i = 0; C$99i < C$99e.length; ++C$99i) C$99r[C$99e[C$99i].name] = C$99e[C$99i].toJSON(C$99t);return C$99r;
    }
  }function Namespace(C$99e, C$99t) {
    C$99r.call(this, C$99e, C$99t), this.nested = void 0, this._nestedArray = null;
  }function clearCache(C$99e) {
    return C$99e._nestedArray = null, C$99e;
  }((Namespace.prototype = Object.create(C$99r.prototype)).constructor = Namespace).className = "Namespace", Namespace.fromJSON = function (C$99e, C$99t) {
    return new Namespace(C$99e, C$99t.options).addJSON(C$99t.nested);
  }, Namespace.arrayToJSON = arrayToJSON, Namespace.isReservedId = function (C$99e, C$99t) {
    if (C$99e) for (var C$99r = 0; C$99r < C$99e.length; ++C$99r) if ("string" != typeof C$99e[C$99r] && C$99e[C$99r][0] <= C$99t && C$99e[C$99r][1] >= C$99t) return !0;return !1;
  }, Namespace.isReservedName = function (C$99e, C$99t) {
    if (C$99e) for (var C$99r = 0; C$99r < C$99e.length; ++C$99r) if (C$99e[C$99r] === C$99t) return !0;return !1;
  }, Object.defineProperty(Namespace.prototype, "nestedArray", { get: function () {
      return this._nestedArray || (this._nestedArray = C$99s.toArray(this.nested));
    } }), Namespace.prototype.toJSON = function (C$99e) {
    return C$99s.toObject(["options", this.options, "nested", arrayToJSON(this.nestedArray, C$99e)]);
  }, Namespace.prototype.addJSON = function (C$99e) {
    if (C$99e) for (var C$99t, C$99r = Object.keys(C$99e), C$99i = 0; C$99i < C$99r.length; ++C$99i) C$99t = C$99e[C$99r[C$99i]], this.add((void 0 !== C$99t.fields ? C$99a : void 0 !== C$99t.values ? C$99n : void 0 !== C$99t.methods ? C$99u : void 0 !== C$99t.id ? C$99o : Namespace).fromJSON(C$99r[C$99i], C$99t));return this;
  }, Namespace.prototype.get = function (C$99e) {
    return this.nested && this.nested[C$99e] || null;
  }, Namespace.prototype.getEnum = function (C$99e) {
    if (this.nested && this.nested[C$99e] instanceof C$99n) return this.nested[C$99e].values;throw Error("no such enum: " + C$99e);
  }, Namespace.prototype.add = function (C$99e) {
    if (!(C$99e instanceof C$99o && void 0 !== C$99e.extend || C$99e instanceof C$99a || C$99e instanceof C$99n || C$99e instanceof C$99u || C$99e instanceof Namespace)) throw TypeError("object must be a valid nested object");if (this.nested) {
      var C$99t = this.get(C$99e.name);if (C$99t) {
        if (!(C$99t instanceof Namespace && C$99e instanceof Namespace) || C$99t instanceof C$99a || C$99t instanceof C$99u) throw Error("duplicate name '" + C$99e.name + "' in " + this);var C$99r = C$99t.nestedArray;for (var C$99i = 0; C$99i < C$99r.length; ++C$99i) C$99e.add(C$99r[C$99i]);this.remove(C$99t), this.nested || (this.nested = {}), C$99e.setOptions(C$99t.options, !0);
      }
    } else this.nested = {};return (this.nested[C$99e.name] = C$99e).onAdd(this), clearCache(this);
  }, Namespace.prototype.remove = function (C$99e) {
    if (!(C$99e instanceof C$99r)) throw TypeError("object must be a ReflectionObject");if (C$99e.parent !== this) throw Error(C$99e + " is not a member of " + this);return delete this.nested[C$99e.name], Object.keys(this.nested).length || (this.nested = void 0), C$99e.onRemove(this), clearCache(this);
  }, Namespace.prototype.define = function (C$99e, C$99t) {
    if (C$99s.isString(C$99e)) C$99e = C$99e.split(".");else if (!Array.isArray(C$99e)) throw TypeError("illegal path");if (C$99e && C$99e.length && "" === C$99e[0]) throw Error("path must be relative");var C$99r = this;for (; 0 < C$99e.length;) {
      var C$99i = C$99e.shift();if (C$99r.nested && C$99r.nested[C$99i]) {
        if (!((C$99r = C$99r.nested[C$99i]) instanceof Namespace)) throw Error("path conflicts with non-namespace objects");
      } else C$99r.add(C$99r = new Namespace(C$99i));
    }return C$99t && C$99r.addJSON(C$99t), C$99r;
  }, Namespace.prototype.resolveAll = function () {
    var C$99e = this.nestedArray,
        C$99t = 0;for (; C$99t < C$99e.length;) C$99e[C$99t] instanceof Namespace ? C$99e[C$99t++].resolveAll() : C$99e[C$99t++].resolve();return this.resolve();
  }, Namespace.prototype.lookup = function (C$99e, C$99t, C$99r) {
    if ("boolean" == typeof C$99t ? (C$99r = C$99t, C$99t = void 0) : C$99t && !Array.isArray(C$99t) && (C$99t = [C$99t]), C$99s.isString(C$99e) && C$99e.length) {
      if ("." === C$99e) return this.root;C$99e = C$99e.split(".");
    } else if (!C$99e.length) return this;if ("" === C$99e[0]) return this.root.lookup(C$99e.slice(1), C$99t);var C$99i = this.get(C$99e[0]);if (C$99i) {
      if (1 === C$99e.length) {
        if (!C$99t || -1 < C$99t.indexOf(C$99i.constructor)) return C$99i;
      } else if (C$99i instanceof Namespace && (C$99i = C$99i.lookup(C$99e.slice(1), C$99t, !0))) return C$99i;
    } else for (var C$99n = 0; C$99n < this.nestedArray.length; ++C$99n) if (this._nestedArray[C$99n] instanceof Namespace && (C$99i = this._nestedArray[C$99n].lookup(C$99e, C$99t, !0))) return C$99i;return null === this.parent || C$99r ? null : this.parent.lookup(C$99e, C$99t);
  }, Namespace.prototype.lookupType = function (C$99e) {
    var C$99t = this.lookup(C$99e, [C$99a]);if (!C$99t) throw Error("no such type: " + C$99e);return C$99t;
  }, Namespace.prototype.lookupEnum = function (C$99e) {
    var C$99t = this.lookup(C$99e, [C$99n]);if (!C$99t) throw Error("no such Enum '" + C$99e + "' in " + this);return C$99t;
  }, Namespace.prototype.lookupTypeOrEnum = function (C$99e) {
    var C$99t = this.lookup(C$99e, [C$99a, C$99n]);if (!C$99t) throw Error("no such Type or Enum '" + C$99e + "' in " + this);return C$99t;
  }, Namespace.prototype.lookupService = function (C$99e) {
    var C$99t = this.lookup(C$99e, [C$99u]);if (!C$99t) throw Error("no such Service '" + C$99e + "' in " + this);return C$99t;
  }, Namespace._configure = function () {
    C$99n = C$99e(1), C$99o = C$99e(2), C$99s = C$99e(0), C$99a = C$99e(3), C$99u = C$99e(10);
  };
}, function (C$99e, C$99t, C$99r) {
  C$99e.exports = OneOf;var C$99n = C$99r(4);var C$99i;var C$99o;function OneOf(C$99e, C$99t, C$99r, C$99i) {
    if (Array.isArray(C$99t) || (C$99r = C$99t, C$99t = void 0), C$99n.call(this, C$99e, C$99r), void 0 !== C$99t && !Array.isArray(C$99t)) throw TypeError("fieldNames must be an Array");this.oneof = C$99t || [], this.fieldsArray = [], this.comment = C$99i;
  }function addFieldsToParent(C$99e) {
    if (C$99e.parent) for (var C$99t = 0; C$99t < C$99e.fieldsArray.length; ++C$99t) C$99e.fieldsArray[C$99t].parent || C$99e.parent.add(C$99e.fieldsArray[C$99t]);
  }((OneOf.prototype = Object.create(C$99n.prototype)).constructor = OneOf).className = "OneOf", OneOf.fromJSON = function (C$99e, C$99t) {
    return new OneOf(C$99e, C$99t.oneof, C$99t.options, C$99t.comment);
  }, OneOf.prototype.toJSON = function (C$99e) {
    C$99e = !!C$99e && Boolean(C$99e.keepComments);return C$99o.toObject(["options", this.options, "oneof", this.oneof, "comment", C$99e ? this.comment : void 0]);
  }, OneOf.prototype.add = function (C$99e) {
    if (!(C$99e instanceof C$99i)) throw TypeError("field must be a Field");return C$99e.parent && C$99e.parent !== this.parent && C$99e.parent.remove(C$99e), this.oneof.push(C$99e.name), this.fieldsArray.push(C$99e), addFieldsToParent(C$99e.partOf = this), this;
  }, OneOf.prototype.remove = function (C$99e) {
    if (!(C$99e instanceof C$99i)) throw TypeError("field must be a Field");var C$99t = this.fieldsArray.indexOf(C$99e);if (C$99t < 0) throw Error(C$99e + " is not a member of " + this);return this.fieldsArray.splice(C$99t, 1), -1 < (C$99t = this.oneof.indexOf(C$99e.name)) && this.oneof.splice(C$99t, 1), C$99e.partOf = null, this;
  }, OneOf.prototype.onAdd = function (C$99e) {
    C$99n.prototype.onAdd.call(this, C$99e);for (var C$99t = 0; C$99t < this.oneof.length; ++C$99t) {
      var C$99r = C$99e.get(this.oneof[C$99t]);C$99r && !C$99r.partOf && (C$99r.partOf = this).fieldsArray.push(C$99r);
    }addFieldsToParent(this);
  }, OneOf.prototype.onRemove = function (C$99e) {
    for (var C$99t, C$99r = 0; C$99r < this.fieldsArray.length; ++C$99r) (C$99t = this.fieldsArray[C$99r]).parent && C$99t.parent.remove(C$99t);C$99n.prototype.onRemove.call(this, C$99e);
  }, OneOf.d = function () {
    var C$99r = new Array(arguments.length),
        C$99e = 0;for (; C$99e < arguments.length;) C$99r[C$99e] = arguments[C$99e++];return function (C$99e, C$99t) {
      C$99o.decorateType(C$99e.constructor).add(new OneOf(C$99t, C$99r)), Object.defineProperty(C$99e, C$99t, { get: C$99o.oneOfGetter(C$99r), set: C$99o.oneOfSetter(C$99r) });
    };
  }, OneOf._configure = function () {
    C$99i = C$99r(2), C$99o = C$99r(0);
  };
}, function (C$99e, C$99t, C$99r) {
  "use strict";
  C$99e = C$99e.exports;C$99e.length = function (C$99e) {
    var C$99t,
        C$99r = 0;for (var C$99i = 0; C$99i < C$99e.length; ++C$99i) (C$99t = C$99e.charCodeAt(C$99i)) < 128 ? C$99r += 1 : C$99t < 2048 ? C$99r += 2 : 55296 == (64512 & C$99t) && 56320 == (64512 & C$99e.charCodeAt(C$99i + 1)) ? (++C$99i, C$99r += 4) : C$99r += 3;return C$99r;
  }, C$99e.read = function (C$99e, C$99t, C$99r) {
    if (C$99r - C$99t < 1) return "";var C$99i,
        C$99n = null,
        C$99o = [],
        C$99s = 0;for (; C$99t < C$99r;) (C$99i = C$99e[C$99t++]) < 128 ? C$99o[C$99s++] = C$99i : 191 < C$99i && C$99i < 224 ? C$99o[C$99s++] = (31 & C$99i) << 6 | 63 & C$99e[C$99t++] : 239 < C$99i && C$99i < 365 ? (C$99i = ((7 & C$99i) << 18 | (63 & C$99e[C$99t++]) << 12 | (63 & C$99e[C$99t++]) << 6 | 63 & C$99e[C$99t++]) - 65536, C$99o[C$99s++] = 55296 + (C$99i >> 10), C$99o[C$99s++] = 56320 + (1023 & C$99i)) : C$99o[C$99s++] = (15 & C$99i) << 12 | (63 & C$99e[C$99t++]) << 6 | 63 & C$99e[C$99t++], 8191 < C$99s && ((C$99n = C$99n || []).push(String.fromCharCode.apply(String, C$99o)), C$99s = 0);return C$99n ? (C$99s && C$99n.push(String.fromCharCode.apply(String, C$99o.slice(0, C$99s))), C$99n.join("")) : String.fromCharCode.apply(String, C$99o.slice(0, C$99s));
  }, C$99e.write = function (C$99e, C$99t, C$99r) {
    var C$99i,
        C$99n,
        C$99o = C$99r;for (var C$99s = 0; C$99s < C$99e.length; ++C$99s) (C$99i = C$99e.charCodeAt(C$99s)) < 128 ? C$99t[C$99r++] = C$99i : (C$99i < 2048 ? C$99t[C$99r++] = C$99i >> 6 | 192 : (55296 == (64512 & C$99i) && 56320 == (64512 & (C$99n = C$99e.charCodeAt(C$99s + 1))) ? (++C$99s, C$99t[C$99r++] = (C$99i = 65536 + ((1023 & C$99i) << 10) + (1023 & C$99n)) >> 18 | 240, C$99t[C$99r++] = C$99i >> 12 & 63 | 128) : C$99t[C$99r++] = C$99i >> 12 | 224, C$99t[C$99r++] = C$99i >> 6 & 63 | 128), C$99t[C$99r++] = 63 & C$99i | 128);return C$99r - C$99o;
  };
}, function (C$99t, C$99r, C$99e) {
  C$99t.exports = Root;var C$99i = C$99e(6);((Root.prototype = Object.create(C$99i.prototype)).constructor = Root).className = "Root";var C$99n = C$99e(2),
      C$99o = C$99e(1),
      C$99s = C$99e(7),
      C$99f = C$99e(0);var C$99u, C$99l, C$99h;function Root(C$99e) {
    C$99i.call(this, "", C$99e), this.deferred = [], this.files = [], this.names = [];
  }function SYNC() {}Root.fromJSON = function (C$99e, C$99t) {
    return C$99e = "string" == typeof C$99e ? JSON.parse(C$99e) : C$99e, C$99t = C$99t || new Root(), C$99e.options && C$99t.setOptions(C$99e.options), C$99t.addJSON(C$99e.nested);
  }, Root.prototype.resolvePath = C$99f.path.resolve, Root.prototype.parseFromPbString = function parseFromPbString(C$99e, C$99o, C$99i) {
    "function" == typeof C$99o && (C$99i = C$99o, C$99o = void 0);var C$99s = this;if (!C$99i) return C$99f.asPromise(parseFromPbString, C$99s, C$99e, C$99o);var C$99t = null;if ("string" == typeof C$99e) C$99t = JSON.parse(C$99e);else {
      if ("object" != typeof C$99e) return void console.log("pb\u683c\u5f0f\u8f6c\u5316\u5931\u8d25");C$99t = C$99e;
    }function finish(C$99e, C$99t) {
      var C$99r;C$99i && (C$99r = C$99i, C$99i = null, C$99r(C$99e, C$99t));
    }function process(C$99e, C$99t) {
      try {
        if (C$99f.isString(C$99t) && "{" === C$99t.charAt(0) && (C$99t = JSON.parse(C$99t)), C$99f.isString(C$99t)) {
          C$99l.filename = C$99e;var C$99r,
              C$99i = C$99l(C$99t, C$99s, C$99o);var C$99n = 0;if (C$99i.imports) for (; C$99n < C$99i.imports.length; ++C$99n) fetch(C$99r = C$99i.imports[C$99n]);if (C$99i.weakImports) {
            for (C$99n = 0; C$99n < C$99i.weakImports.length; ++C$99n) C$99r = C$99i.weakImports[C$99n];fetch(C$99r);
          }
        } else C$99s.setOptions(C$99t.options).addJSON(C$99t.nested);
      } catch (C$99e) {
        finish(C$99e);
      }finish(null, C$99s);
    }function fetch(C$99e) {
      -1 < C$99s.names.indexOf(C$99e) || (C$99s.names.push(C$99e), C$99e in C$99h && process(C$99e, C$99h[C$99e]));
    }process(C$99t.name, C$99t.pbJsonStr);
  }, Root.prototype.load = function load(C$99e, C$99o, C$99n) {
    "function" == typeof C$99o && (C$99n = C$99o, C$99o = void 0);var C$99s = this;if (!C$99n) return C$99f.asPromise(load, C$99s, C$99e, C$99o);var C$99a = C$99n === SYNC;function finish(C$99e, C$99t) {
      if (C$99n) {
        var C$99r = C$99n;if (C$99n = null, C$99a) throw C$99e;C$99r(C$99e, C$99t);
      }
    }function process(C$99e, C$99t) {
      try {
        if (C$99f.isString(C$99t) && "{" === C$99t.charAt(0) && (C$99t = JSON.parse(C$99t)), C$99f.isString(C$99t)) {
          C$99l.filename = C$99e;var C$99r,
              C$99i = C$99l(C$99t, C$99s, C$99o),
              C$99n = 0;if (C$99i.imports) for (; C$99n < C$99i.imports.length; ++C$99n) (C$99r = C$99s.resolvePath(C$99e, C$99i.imports[C$99n])) && fetch(C$99r);if (C$99i.weakImports) for (C$99n = 0; C$99n < C$99i.weakImports.length; ++C$99n) (C$99r = C$99s.resolvePath(C$99e, C$99i.weakImports[C$99n])) && fetch(C$99r, !0);
        } else C$99s.setOptions(C$99t.options).addJSON(C$99t.nested);
      } catch (C$99e) {
        finish(C$99e);
      }C$99a || C$99u || finish(null, C$99s);
    }function fetch(C$99r, C$99i) {
      var C$99e = C$99r.lastIndexOf("google/protobuf/");if (-1 < C$99e && (C$99e = C$99r.substring(C$99e)) in C$99h && (C$99r = C$99e), !(-1 < C$99s.files.indexOf(C$99r))) if (C$99s.files.push(C$99r), C$99r in C$99h) C$99a ? process(C$99r, C$99h[C$99r]) : (++C$99u, setTimeout(function () {
        --C$99u, process(C$99r, C$99h[C$99r]);
      }));else if (C$99a) {
        var C$99t;try {
          C$99t = C$99f.fs.readFileSync(C$99r).toString("utf8");
        } catch (C$99e) {
          return void (C$99i || finish(C$99e));
        }process(C$99r, C$99t);
      } else ++C$99u, C$99f.fetch(C$99r, function (C$99e, C$99t) {
        --C$99u, C$99n && (C$99e ? C$99i ? C$99u || finish(null, C$99s) : finish(C$99e) : process(C$99r, C$99t));
      });
    }var C$99u = 0;C$99f.isString(C$99e) && (C$99e = [C$99e]);for (var C$99r, C$99t = 0; C$99t < C$99e.length; ++C$99t) (C$99r = C$99s.resolvePath("", C$99e[C$99t])) && fetch(C$99r);if (C$99a) return C$99s;C$99u || finish(null, C$99s);
  }, Root.prototype.loadSync = function (C$99e, C$99t) {
    if (!C$99f.isNode) throw Error("not supported");return this.load(C$99e, C$99t, SYNC);
  }, Root.prototype.resolveAll = function () {
    if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map(function (C$99e) {
      return "'extend " + C$99e.extend + "' in " + C$99e.parent.fullName;
    }).join(", "));return C$99i.prototype.resolveAll.call(this);
  };var C$99a = /^[A-Z]/;function tryHandleExtension(C$99e, C$99t) {
    var C$99r = C$99t.parent.lookup(C$99t.extend);var C$99i;if (C$99r) return ((C$99i = new C$99n(C$99t.fullName, C$99t.id, C$99t.type, C$99t.rule, void 0, C$99t.options)).declaringField = C$99t).extensionField = C$99i, C$99r.add(C$99i), 1;
  }Root.prototype._handleAdd = function (C$99e) {
    if (C$99e instanceof C$99n) void 0 === C$99e.extend || C$99e.extensionField || tryHandleExtension(0, C$99e) || this.deferred.push(C$99e);else if (C$99e instanceof C$99o) C$99a.test(C$99e.name) && (C$99e.parent[C$99e.name] = C$99e.values);else if (!(C$99e instanceof C$99s)) {
      if (C$99e instanceof C$99u) for (var C$99t = 0; C$99t < this.deferred.length;) tryHandleExtension(0, this.deferred[C$99t]) ? this.deferred.splice(C$99t, 1) : ++C$99t;for (var C$99r = 0; C$99r < C$99e.nestedArray.length; ++C$99r) this._handleAdd(C$99e._nestedArray[C$99r]);C$99a.test(C$99e.name) && (C$99e.parent[C$99e.name] = C$99e);
    }
  }, Root.prototype._handleRemove = function (C$99e) {
    var C$99t;if (C$99e instanceof C$99n) void 0 !== C$99e.extend && (C$99e.extensionField ? (C$99e.extensionField.parent.remove(C$99e.extensionField), C$99e.extensionField = null) : -1 < (C$99t = this.deferred.indexOf(C$99e)) && this.deferred.splice(C$99t, 1));else if (C$99e instanceof C$99o) C$99a.test(C$99e.name) && delete C$99e.parent[C$99e.name];else if (C$99e instanceof C$99i) {
      for (var C$99r = 0; C$99r < C$99e.nestedArray.length; ++C$99r) this._handleRemove(C$99e._nestedArray[C$99r]);C$99a.test(C$99e.name) && delete C$99e.parent[C$99e.name];
    }
  }, Root._configure = function () {
    C$99u = C$99e(3), C$99l = C$99e(18), C$99h = C$99e(21), C$99n = C$99e(2), C$99o = C$99e(1), C$99s = C$99e(7), C$99f = C$99e(0);
  };
}, function (C$99e, C$99t, C$99r) {
  "use strict";
  C$99e.exports = Service;var C$99i = C$99r(6);var C$99o, C$99a, C$99u;function Service(C$99e, C$99t) {
    C$99i.call(this, C$99e, C$99t), this.methods = {}, this._methodsArray = null;
  }function clearCache(C$99e) {
    return C$99e._methodsArray = null, C$99e;
  }((Service.prototype = Object.create(C$99i.prototype)).constructor = Service).className = "Service", Service.fromJSON = function (C$99e, C$99t) {
    var C$99r = new Service(C$99e, C$99t.options);if (C$99t.methods) for (var C$99i = Object.keys(C$99t.methods), C$99n = 0; C$99n < C$99i.length; ++C$99n) C$99r.add(C$99o.fromJSON(C$99i[C$99n], C$99t.methods[C$99i[C$99n]]));return C$99t.nested && C$99r.addJSON(C$99t.nested), C$99r.comment = C$99t.comment, C$99r;
  }, Service.prototype.toJSON = function (C$99e) {
    var C$99t = C$99i.prototype.toJSON.call(this, C$99e);var C$99r = !!C$99e && Boolean(C$99e.keepComments);return C$99a.toObject(["options", C$99t && C$99t.options || void 0, "methods", C$99i.arrayToJSON(this.methodsArray, C$99e) || {}, "nested", C$99t && C$99t.nested || void 0, "comment", C$99r ? this.comment : void 0]);
  }, Object.defineProperty(Service.prototype, "methodsArray", { get: function () {
      return this._methodsArray || (this._methodsArray = C$99a.toArray(this.methods));
    } }), Service.prototype.get = function (C$99e) {
    return this.methods[C$99e] || C$99i.prototype.get.call(this, C$99e);
  }, Service.prototype.resolveAll = function () {
    var C$99e = this.methodsArray;for (var C$99t = 0; C$99t < C$99e.length; ++C$99t) C$99e[C$99t].resolve();return C$99i.prototype.resolve.call(this);
  }, Service.prototype.add = function (C$99e) {
    if (this.get(C$99e.name)) throw Error("duplicate name '" + C$99e.name + "' in " + this);return C$99e instanceof C$99o ? clearCache((this.methods[C$99e.name] = C$99e).parent = this) : C$99i.prototype.add.call(this, C$99e);
  }, Service.prototype.remove = function (C$99e) {
    if (C$99e instanceof C$99o) {
      if (this.methods[C$99e.name] !== C$99e) throw Error(C$99e + " is not a member of " + this);return delete this.methods[C$99e.name], C$99e.parent = null, clearCache(this);
    }return C$99i.prototype.remove.call(this, C$99e);
  }, Service.prototype.create = function (C$99e, C$99t, C$99r) {
    var C$99i = new C$99u.Service(C$99e, C$99t, C$99r);for (var C$99n, C$99o = 0; C$99o < this.methodsArray.length; ++C$99o) {
      var C$99s = C$99a.lcFirst((C$99n = this._methodsArray[C$99o]).resolve().name).replace(/[^$\w_]/g, "");C$99i[C$99s] = C$99a.codegen(["r", "c"], C$99a.isReserved(C$99s) ? C$99s + "_" : C$99s)("return this.rpcCall(m,q,s,r,c)")({ m: C$99n, q: C$99n.resolvedRequestType.ctor, s: C$99n.resolvedResponseType.ctor });
    }return C$99i;
  }, Service._configure = function () {
    C$99o = C$99r(13), C$99a = C$99r(0), C$99u = C$99r(20);
  };
}, function (C$99e, C$99t) {
  function LongBits(C$99e, C$99t) {
    this.lo = C$99e >>> 0, this.hi = C$99t >>> 0;
  }var C$99i = (C$99e.exports = LongBits).zero = new LongBits(0, 0);C$99i.toNumber = function () {
    return 0;
  }, C$99i.zzEncode = C$99i.zzDecode = function () {
    return this;
  }, C$99i.length = function () {
    return 1;
  };LongBits.zeroHash = "\0\0\0\0\0\0\0\0";LongBits.fromNumber = function (C$99e) {
    if (0 === C$99e) return C$99i;var C$99t = C$99e < 0;var C$99r = (C$99e = C$99t ? -C$99e : C$99e) >>> 0,
        C$99e = (C$99e - C$99r) / 4294967296 >>> 0;return C$99t && (C$99e = ~C$99e >>> 0, C$99r = ~C$99r >>> 0, 4294967295 < ++C$99r && (C$99r = 0, 4294967295 < ++C$99e && (C$99e = 0))), new LongBits(C$99r, C$99e);
  }, LongBits.from = function (C$99e) {
    return "number" == typeof C$99e ? LongBits.fromNumber(C$99e) : "string" == typeof C$99e || C$99e instanceof String ? LongBits.fromNumber(parseInt(C$99e, 10)) : C$99e.low || C$99e.high ? new LongBits(C$99e.low >>> 0, C$99e.high >>> 0) : C$99i;
  }, LongBits.prototype.toNumber = function (C$99e) {
    var C$99t;return !C$99e && this.hi >>> 31 ? (C$99e = 1 + ~this.lo >>> 0, C$99t = ~this.hi >>> 0, -(C$99e + 4294967296 * (C$99t = C$99e ? C$99t : C$99t + 1 >>> 0))) : this.lo + 4294967296 * this.hi;
  }, LongBits.prototype.toLong = function (C$99e) {
    return { low: 0 | this.lo, high: 0 | this.hi, unsigned: Boolean(C$99e) };
  };var C$99r = String.prototype.charCodeAt;LongBits.fromHash = function (C$99e) {
    return "\0\0\0\0\0\0\0\0" === C$99e ? C$99i : new LongBits((C$99r.call(C$99e, 0) | C$99r.call(C$99e, 1) << 8 | C$99r.call(C$99e, 2) << 16 | C$99r.call(C$99e, 3) << 24) >>> 0, (C$99r.call(C$99e, 4) | C$99r.call(C$99e, 5) << 8 | C$99r.call(C$99e, 6) << 16 | C$99r.call(C$99e, 7) << 24) >>> 0);
  }, LongBits.prototype.toHash = function () {
    return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
  }, LongBits.prototype.zzEncode = function () {
    var C$99e = this.hi >> 31;return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ C$99e) >>> 0, this.lo = (this.lo << 1 ^ C$99e) >>> 0, this;
  }, LongBits.prototype.zzDecode = function () {
    var C$99e = -(1 & this.lo);return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ C$99e) >>> 0, this.hi = (this.hi >>> 1 ^ C$99e) >>> 0, this;
  }, LongBits.prototype.length = function () {
    var C$99e = this.lo,
        C$99t = (this.lo >>> 28 | this.hi << 4) >>> 0,
        C$99r = this.hi >>> 24;return 0 == C$99r ? 0 == C$99t ? C$99e < 16384 ? C$99e < 128 ? 1 : 2 : C$99e < 2097152 ? 3 : 4 : C$99t < 16384 ? C$99t < 128 ? 5 : 6 : C$99t < 2097152 ? 7 : 8 : C$99r < 128 ? 9 : 10;
  };
}, function (C$99e, C$99t, C$99r) {
  C$99e.exports = MapField;var C$99s = C$99r(2);var C$99i, C$99a;function MapField(C$99e, C$99t, C$99r, C$99i, C$99n, C$99o) {
    if (C$99s.call(this, C$99e, C$99t, C$99i, void 0, void 0, C$99n, C$99o), !C$99a.isString(C$99r)) throw TypeError("keyType must be a string");this.keyType = C$99r, this.resolvedKeyType = null, this.map = !0;
  }((MapField.prototype = Object.create(C$99s.prototype)).constructor = MapField).className = "MapField", MapField.fromJSON = function (C$99e, C$99t) {
    return new MapField(C$99e, C$99t.id, C$99t.keyType, C$99t.type, C$99t.options, C$99t.comment);
  }, MapField.prototype.toJSON = function (C$99e) {
    C$99e = !!C$99e && Boolean(C$99e.keepComments);return C$99a.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", C$99e ? this.comment : void 0]);
  }, MapField.prototype.resolve = function () {
    if (this.resolved) return this;if (void 0 === C$99i.mapKey[this.keyType]) throw Error("invalid key type: " + this.keyType);return C$99s.prototype.resolve.call(this);
  }, MapField.d = function (C$99r, C$99i, C$99n) {
    return "function" == typeof C$99n ? C$99n = C$99a.decorateType(C$99n).name : C$99n && "object" == typeof C$99n && (C$99n = C$99a.decorateEnum(C$99n).name), function (C$99e, C$99t) {
      C$99a.decorateType(C$99e.constructor).add(new MapField(C$99t, C$99r, C$99i, C$99n));
    };
  }, MapField._configure = function () {
    C$99i = C$99r(5), C$99a = C$99r(0);
  };
}, function (C$99e, C$99t, C$99r) {
  "use strict";
  C$99e.exports = Method;var C$99u = C$99r(4);var C$99f;function Method(C$99e, C$99t, C$99r, C$99i, C$99n, C$99o, C$99s, C$99a) {
    if (C$99f.isObject(C$99n) ? (C$99s = C$99n, C$99n = C$99o = void 0) : C$99f.isObject(C$99o) && (C$99s = C$99o, C$99o = void 0), void 0 !== C$99t && !C$99f.isString(C$99t)) throw TypeError("type must be a string");if (!C$99f.isString(C$99r)) throw TypeError("requestType must be a string");if (!C$99f.isString(C$99i)) throw TypeError("responseType must be a string");C$99u.call(this, C$99e, C$99s), this.type = C$99t || "rpc", this.requestType = C$99r, this.requestStream = !!C$99n || void 0, this.responseType = C$99i, this.responseStream = !!C$99o || void 0, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = C$99a;
  }((Method.prototype = Object.create(C$99u.prototype)).constructor = Method).className = "Method", Method.fromJSON = function (C$99e, C$99t) {
    return new Method(C$99e, C$99t.type, C$99t.requestType, C$99t.responseType, C$99t.requestStream, C$99t.responseStream, C$99t.options, C$99t.comment);
  }, Method.prototype.toJSON = function (C$99e) {
    C$99e = !!C$99e && Boolean(C$99e.keepComments);return C$99f.toObject(["type", "rpc" !== this.type && this.type || void 0, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", C$99e ? this.comment : void 0]);
  }, Method.prototype.resolve = function () {
    return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), C$99u.prototype.resolve.call(this));
  }, Method._configure = function () {
    C$99f = C$99r(0);
  };
}, function (C$99e, C$99t, C$99r) {
  "use strict";
  var C$99i;function Message(C$99e) {
    if (C$99e) for (var C$99t = Object.keys(C$99e), C$99r = 0; C$99r < C$99t.length; ++C$99r) this[C$99t[C$99r]] = C$99e[C$99t[C$99r]];
  }(C$99e.exports = Message).create = function (C$99e) {
    return this.$type.create(C$99e);
  }, Message.encode = function (C$99e, C$99t) {
    return arguments.length ? 1 == arguments.length ? this.$type.encode(C$99e) : this.$type.encode(C$99e, C$99t) : this.$type.encode(this);
  }, Message.encodeDelimited = function (C$99e, C$99t) {
    return this.$type.encodeDelimited(C$99e, C$99t);
  }, Message.decode = function (C$99e) {
    return this.$type.decode(C$99e);
  }, Message.decodeDelimited = function (C$99e) {
    return this.$type.decodeDelimited(C$99e);
  }, Message.verify = function (C$99e) {
    return this.$type.verify(C$99e);
  }, Message.fromObject = function (C$99e) {
    return this.$type.fromObject(C$99e);
  }, Message.toObject = function (C$99e, C$99t) {
    return this.$type.toObject(C$99e = C$99e || this, C$99t);
  }, Message.prototype.toJSON = function () {
    return this.$type.toObject(this, C$99i.toJSONOptions);
  }, Message.set = function (C$99e, C$99t) {
    Message[C$99e] = C$99t;
  }, Message.get = function (C$99e) {
    return Message[C$99e];
  }, Message._configure = function () {
    C$99i = C$99r(0);
  };
}, function (C$99r, C$99o, C$99e) {
  C$99r.exports = Writer;var C$99i = C$99e(0);var C$99t;var C$99n = C$99e(8);function Op(C$99e, C$99t, C$99r) {
    this.fn = C$99e, this.len = C$99t, this.next = void 0, this.val = C$99r;
  }function noop() {}function State(C$99e) {
    this.head = C$99e.head, this.tail = C$99e.tail, this.len = C$99e.len, this.next = C$99e.states;
  }function Writer() {
    this.len = 0, this.head = new Op(noop, 0, 0), this.tail = this.head, this.states = null;
  }function writeByte(C$99e, C$99t, C$99r) {
    C$99t[C$99r] = 255 & C$99e;
  }function VarintOp(C$99e, C$99t) {
    this.len = C$99e, this.next = void 0, this.val = C$99t;
  }function writeVarint64(C$99e, C$99t, C$99r) {
    for (; C$99e.hi;) C$99t[C$99r++] = 127 & C$99e.lo | 128, C$99e.lo = (C$99e.lo >>> 7 | C$99e.hi << 25) >>> 0, C$99e.hi >>>= 7;for (; 127 < C$99e.lo;) C$99t[C$99r++] = 127 & C$99e.lo | 128, C$99e.lo = C$99e.lo >>> 7;C$99t[C$99r++] = C$99e.lo;
  }function writeFloat(C$99e, C$99t, C$99r) {
    C$99t[C$99r++] = 0, C$99i.float.writeFloatLE(C$99e, C$99t, C$99r);
  }function writeDouble(C$99e, C$99t, C$99r) {
    C$99t[C$99r++] = 16, C$99i.float.writeDoubleLE(C$99e, C$99t, C$99r);
  }function writeUMine(C$99e, C$99t, C$99r) {
    C$99t[C$99r++] = 0 <= C$99e ? 32 | C$99e : 112 | -C$99e;
  }function writeUInt8(C$99e, C$99t, C$99r) {
    0 <= C$99e ? (C$99t[C$99r++] = 48, C$99t[C$99r++] = C$99e) : (C$99t[C$99r++] = 128, C$99t[C$99r++] = -C$99e);
  }function writeUInt16(C$99e, C$99t, C$99r) {
    0 <= C$99e ? C$99t[C$99r++] = 64 : (C$99t[C$99r++] = 144, C$99e = -C$99e), C$99t[C$99r++] = 255 & C$99e, C$99t[C$99r++] = C$99e >>> 8;
  }function write32data(C$99e, C$99t, C$99r) {
    C$99t[C$99r++] = 255 & C$99e, C$99t[C$99r++] = C$99e >> 8 & 255, C$99t[C$99r++] = C$99e >> 16 & 255, C$99t[C$99r++] = C$99e / 16777216 & 255;
  }function writeUInt32(C$99e, C$99t, C$99r) {
    0 <= C$99e ? C$99t[C$99r++] = 80 : (C$99t[C$99r++] = 160, C$99e = -C$99e), write32data(C$99e, C$99t, C$99r);
  }function writeUInt64(C$99e, C$99t, C$99r) {
    0 <= C$99e ? C$99t[C$99r++] = 96 : (C$99t[C$99r++] = 176, C$99e = -C$99e);var C$99i = Math.floor(C$99e / 4294967296);write32data(C$99e - 4294967296 * C$99i, C$99t, C$99r), write32data(C$99i, C$99t, C$99r + 4);
  }function writeFixed32(C$99e, C$99t, C$99r) {
    C$99t[C$99r] = 255 & C$99e, C$99t[C$99r + 1] = C$99e >>> 8 & 255, C$99t[C$99r + 2] = C$99e >>> 16 & 255, C$99t[C$99r + 3] = C$99e >>> 24;
  }Writer.create = C$99i.Buffer ? function () {
    return (Writer.create = function () {
      return new (void 0)();
    })();
  } : function () {
    return new Writer();
  }, Writer.alloc = function (C$99e) {
    return new C$99i.Array(C$99e);
  }, C$99i.Array !== Array && (Writer.alloc = C$99i.pool(Writer.alloc, C$99i.Array.prototype.subarray)), Writer.prototype._push = function (C$99e, C$99t, C$99r) {
    return this.tail = this.tail.next = new Op(C$99e, C$99t, C$99r), this.len += C$99t, this;
  }, (VarintOp.prototype = Object.create(Op.prototype)).fn = function (C$99e, C$99t, C$99r) {
    for (; 127 < C$99e;) C$99t[C$99r++] = 127 & C$99e | 128, C$99e >>>= 7;C$99t[C$99r] = C$99e;
  }, Writer.prototype.uint32 = function (C$99e) {
    return this.len += (this.tail = this.tail.next = new VarintOp((C$99e >>>= 0) < 128 ? 1 : C$99e < 16384 ? 2 : C$99e < 2097152 ? 3 : C$99e < 268435456 ? 4 : 5, C$99e)).len, this;
  }, Writer.prototype.int32 = function (C$99e) {
    return C$99e < 0 ? this._push(writeVarint64, 10, C$99t.fromNumber(C$99e)) : this.uint32(C$99e);
  }, Writer.prototype.sint32 = function (C$99e) {
    return this.uint32((C$99e << 1 ^ C$99e >> 31) >>> 0);
  }, Writer.prototype.int64 = Writer.prototype.uint64 = function (C$99e) {
    var C$99t;return Number.isSafeInteger(C$99e) ? (C$99t = 0 <= C$99e ? C$99e : -C$99e) < 16 ? this._push(writeUMine, 1, C$99e) : C$99t < 256 ? this._push(writeUInt8, 2, C$99e) : C$99t < 65536 ? this._push(writeUInt16, 3, C$99e) : C$99t < 4294967296 ? this._push(writeUInt32, 5, C$99e) : this._push(writeUInt64, 9, C$99e) : -99999 < C$99e && C$99e < 99999 ? this._push(writeFloat, 5, C$99e) : this._push(writeDouble, 9, C$99e);
  }, Writer.prototype.sint64 = function (C$99e) {
    C$99e = C$99t.from(C$99e).zzEncode();return this._push(writeVarint64, C$99e.length(), C$99e);
  }, Writer.prototype.bool = function (C$99e) {
    return this._push(writeByte, 1, C$99e ? 1 : 0);
  }, Writer.prototype.sfixed32 = Writer.prototype.fixed32 = function (C$99e) {
    return this._push(writeFixed32, 4, C$99e >>> 0);
  }, Writer.prototype.sfixed64 = Writer.prototype.fixed64 = function (C$99e) {
    C$99e = C$99t.from(C$99e);return this._push(writeFixed32, 4, C$99e.lo)._push(writeFixed32, 4, C$99e.hi);
  }, Writer.prototype.float = function (C$99e) {
    return this._push(C$99i.float.writeFloatLE, 4, C$99e);
  }, Writer.prototype.double = function (C$99e) {
    return this._push(C$99i.float.writeDoubleLE, 8, C$99e);
  };var C$99s = C$99i.Array.prototype.set ? function (C$99e, C$99t, C$99r) {
    C$99t.set(C$99e, C$99r);
  } : function (C$99e, C$99t, C$99r) {
    for (var C$99i = 0; C$99i < C$99e.length; ++C$99i) C$99t[C$99r + C$99i] = C$99e[C$99i];
  };Writer.prototype.bytes = function (C$99e) {
    var C$99t = C$99e.length >>> 0;return C$99t ? (C$99i.isString(C$99e) && (C$99r = Writer.alloc(C$99t = C$99n.length(C$99e)), C$99n.write(C$99e, C$99r, 0), C$99e = C$99r), this.uint32(C$99t)._push(C$99s, C$99t, C$99e)) : this._push(writeByte, 1, 0);var C$99r;
  }, Writer.prototype.string = function (C$99e) {
    var C$99t = C$99n.length(C$99e);return C$99t ? this.uint32(C$99t)._push(C$99n.write, C$99t, C$99e) : this._push(writeByte, 1, 0);
  }, Writer.prototype.fork = function () {
    return this.states = new State(this), this.head = this.tail = new Op(noop, 0, 0), this.len = 0, this;
  }, Writer.prototype.reset = function () {
    return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Op(noop, 0, 0), this.len = 0), this;
  }, Writer.prototype.ldelim = function () {
    var C$99e = this.head,
        C$99t = this.tail,
        C$99r = this.len;return this.reset().uint32(C$99r), C$99r && (this.tail.next = C$99e.next, this.tail = C$99t, this.len += C$99r), this;
  }, Writer.prototype.finish = function () {
    var C$99e = this.head.next,
        C$99t = this.constructor.alloc(this.len),
        C$99r = 0;for (; C$99e;) C$99e.fn(C$99e.val, C$99t, C$99r), C$99r += C$99e.len, C$99e = C$99e.next;return C$99t;
  }, Writer._configure = function () {
    C$99t = C$99e(11), C$99e(17), C$99n = C$99e(8);
  };
}, function (C$99e, C$99t) {
  C$99e.exports = {};
}, function (C$99e, C$99t, C$99r) {
  "use strict";
  C$99e = C$99e.exports;C$99e.length = function (C$99e) {
    var C$99t = C$99e.length;if (!C$99t) return 0;var C$99r = 0;for (; 1 < --C$99t % 4 && "=" === C$99e.charAt(C$99t);) ++C$99r;return Math.ceil(3 * C$99e.length) / 4 - C$99r;
  };var C$99f = new Array(64);var C$99u = new Array(123);for (var C$99i = 0; C$99i < 64;) C$99u[C$99f[C$99i] = C$99i < 26 ? C$99i + 65 : C$99i < 52 ? C$99i + 71 : C$99i < 62 ? C$99i - 4 : C$99i - 59 | 43] = C$99i++;C$99e.encode = function (C$99e, C$99t, C$99r) {
    var C$99i = null,
        C$99n = [];var C$99o,
        C$99s = 0,
        C$99a = 0;for (; C$99t < C$99r;) {
      var C$99u = C$99e[C$99t++];switch (C$99a) {case 0:
          C$99n[C$99s++] = C$99f[C$99u >> 2], C$99o = (3 & C$99u) << 4, C$99a = 1;break;case 1:
          C$99n[C$99s++] = C$99f[C$99o | C$99u >> 4], C$99o = (15 & C$99u) << 2, C$99a = 2;break;case 2:
          C$99n[C$99s++] = C$99f[C$99o | C$99u >> 6], C$99n[C$99s++] = C$99f[63 & C$99u], C$99a = 0;}8191 < C$99s && ((C$99i = C$99i || []).push(String.fromCharCode.apply(String, C$99n)), C$99s = 0);
    }return C$99a && (C$99n[C$99s++] = C$99f[C$99o], C$99n[C$99s++] = 61, 1 === C$99a && (C$99n[C$99s++] = 61)), C$99i ? (C$99s && C$99i.push(String.fromCharCode.apply(String, C$99n.slice(0, C$99s))), C$99i.join("")) : String.fromCharCode.apply(String, C$99n.slice(0, C$99s));
  };C$99e.decode = function (C$99e, C$99t, C$99r) {
    var C$99i = C$99r;var C$99n,
        C$99o = 0;for (var C$99s = 0; C$99s < C$99e.length;) {
      var C$99a = C$99e.charCodeAt(C$99s++);if (61 === C$99a && 1 < C$99o) break;if (void 0 === (C$99a = C$99u[C$99a])) throw Error("invalid encoding");switch (C$99o) {case 0:
          C$99n = C$99a, C$99o = 1;break;case 1:
          C$99t[C$99r++] = C$99n << 2 | (48 & C$99a) >> 4, C$99n = C$99a, C$99o = 2;break;case 2:
          C$99t[C$99r++] = (15 & C$99n) << 4 | (60 & C$99a) >> 2, C$99n = C$99a, C$99o = 3;break;case 3:
          C$99t[C$99r++] = (3 & C$99n) << 6 | C$99a, C$99o = 0;}
    }if (1 === C$99o) throw Error("invalid encoding");return C$99r - C$99i;
  }, C$99e.test = function (C$99e) {
    return (/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(C$99e)
    );
  };
}, function (C$99t, C$99r, C$99e) {
  "use strict";
  var C$99w, C$99O, C$99_, C$99k, C$99x, C$99j, C$99T, C$99B, C$99L, C$99S, C$99A;(C$99t.exports = parse).filename = null, parse.defaults = { keepCase: !1 };var C$99R = /^[1-9][0-9]*$/,
      C$99F = /^-?[1-9][0-9]*$/,
      C$99I = /^0[x][0-9a-fA-F]+$/,
      C$99M = /^-?0[x][0-9a-fA-F]+$/,
      C$99C = /^0[0-7]+$/,
      C$99D = /^-?0[0-7]+$/,
      C$99q = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,
      C$99N = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
      C$99E = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)+$/,
      C$99V = /^(?:\.[a-zA-Z][a-zA-Z_0-9]*)+$/;function parse(C$99t, C$99r, C$99i) {
    C$99r instanceof C$99O || (C$99i = C$99r, C$99r = new C$99O()), C$99i = C$99i || parse.defaults;var C$99o = C$99w(C$99t, C$99i.alternateCommentMode || !1),
        C$99h = C$99o.next,
        C$99p = C$99o.push,
        C$99n = C$99o.peek,
        C$99c = C$99o.skip,
        C$99a = C$99o.cmnt;var C$99e,
        C$99u,
        C$99f,
        C$99l,
        C$99d = !0,
        C$99y = !1;var C$99v = C$99r;var C$99g = C$99i.keepCase ? function (C$99e) {
      return C$99e;
    } : C$99A.camelCase;function illegal(C$99e, C$99t, C$99r) {
      var C$99i = parse.filename;return C$99r || (parse.filename = null), Error("illegal " + (C$99t || "token") + " '" + C$99e + "' (" + (C$99i ? C$99i + ", " : "") + "line " + C$99o.line + ")");
    }function readString() {
      var C$99e,
          C$99t = [];do {
        if ('"' !== (C$99e = C$99h()) && "'" !== C$99e) throw illegal(C$99e);
      } while ((C$99t.push(C$99h()), C$99c(C$99e), '"' === (C$99e = C$99n()) || "'" === C$99e));return C$99t.join("");
    }function readValue(C$99t) {
      var C$99r = C$99h();switch (C$99r) {case "'":case '"':
          return C$99p(C$99r), readString();case "true":case "TRUE":
          return !0;case "false":case "FALSE":
          return !1;}try {
        var C$99e = C$99r;var C$99i = !0;var C$99n = 1;switch ("-" === C$99e.charAt(0) && (C$99n = -1, C$99e = C$99e.substring(1)), C$99e) {case "inf":case "INF":case "Inf":
            return C$99n * (1 / 0);case "nan":case "NAN":case "Nan":case "NaN":
            return NaN;case "0":
            return 0;}if (C$99R.test(C$99e)) return C$99n * parseInt(C$99e, 10);if (C$99I.test(C$99e)) return C$99n * parseInt(C$99e, 16);if (C$99C.test(C$99e)) return C$99n * parseInt(C$99e, 8);if (C$99q.test(C$99e)) return C$99n * parseFloat(C$99e);throw illegal(C$99e, "number", C$99i);
      } catch (C$99e) {
        if (C$99t && C$99E.test(C$99r)) return C$99r;throw illegal(C$99r, "value");
      }
    }function readRanges(C$99e, C$99t) {
      var C$99r;for (; !C$99t || '"' !== (C$99r = C$99n()) && "'" !== C$99r ? C$99e.push([C$99r = parseId(C$99h()), C$99c("to", !0) ? parseId(C$99h()) : C$99r]) : C$99e.push(readString()), C$99c(",", !0););C$99c(";");
    }function parseId(C$99e, C$99t) {
      switch (C$99e) {case "max":case "MAX":case "Max":
          return 536870911;case "0":
          return 0;}if (!C$99t && "-" === C$99e.charAt(0)) throw illegal(C$99e, "id");if (C$99F.test(C$99e)) return parseInt(C$99e, 10);if (C$99M.test(C$99e)) return parseInt(C$99e, 16);if (C$99D.test(C$99e)) return parseInt(C$99e, 8);throw illegal(C$99e, "id");
    }function parseCommon(C$99e, C$99t) {
      switch (C$99t) {case "option":
          return parseOption(C$99e, C$99t), C$99c(";"), 1;case "message":
          var C$99r = C$99e;var C$99i = C$99t;if (!C$99N.test(C$99i = C$99h())) throw illegal(C$99i, "type name");var C$99a = new C$99_(C$99i);return ifBlock(C$99a, function (C$99e) {
            if (!parseCommon(C$99a, C$99e)) switch (C$99e) {case "map":
                var C$99t = C$99a;C$99c("<");var C$99r = C$99h();if (void 0 === C$99S.mapKey[C$99r]) throw illegal(C$99r, "type");C$99c(",");var C$99i = C$99h();if (!C$99E.test(C$99i)) throw illegal(C$99i, "type");C$99c(">");var C$99n = C$99h();if (!C$99N.test(C$99n)) throw illegal(C$99n, "name");C$99c("=");var C$99o = new C$99x(C$99g(C$99n), parseId(C$99h()), C$99r, C$99i);ifBlock(C$99o, function (C$99e) {
                  if ("option" !== C$99e) throw illegal(C$99e);parseOption(C$99o, C$99e), C$99c(";");
                }, function () {
                  parseInlineOptions(C$99o);
                }), C$99t.add(C$99o);break;case "required":case "optional":case "repeated":
                parseField(C$99a, C$99e);break;case "oneof":
                C$99n = C$99a;C$99r = C$99e;if (!C$99N.test(C$99r = C$99h())) throw illegal(C$99r, "name");var C$99s = new C$99j(C$99g(C$99r));ifBlock(C$99s, function (C$99e) {
                  "option" === C$99e ? (parseOption(C$99s, C$99e), C$99c(";")) : (C$99p(C$99e), parseField(C$99s, "optional"));
                }), C$99n.add(C$99s);break;case "extensions":
                readRanges(C$99a.extensions || (C$99a.extensions = []));break;case "reserved":
                readRanges(C$99a.reserved || (C$99a.reserved = []), !0);break;default:
                if (!C$99y || !C$99E.test(C$99e)) throw illegal(C$99e);C$99p(C$99e), parseField(C$99a, "optional");}
          }), C$99r.add(C$99a), 1;case "enum":
          C$99i = C$99e;C$99r = C$99t;if (!C$99N.test(C$99r = C$99h())) throw illegal(C$99r, "name");var C$99o = new C$99T(C$99r);return ifBlock(C$99o, function (C$99e) {
            switch (C$99e) {case "option":
                parseOption(C$99o, C$99e), C$99c(";");break;case "reserved":
                readRanges(C$99o.reserved || (C$99o.reserved = []), !0);break;default:
                var C$99t = C$99o;var C$99r = C$99e;if (!C$99N.test(C$99r)) throw illegal(C$99r, "name");C$99c("=");var C$99i = parseId(C$99h(), !0),
                    C$99n = {};ifBlock(C$99n, function (C$99e) {
                  if ("option" !== C$99e) throw illegal(C$99e);parseOption(C$99n, C$99e), C$99c(";");
                }, function () {
                  parseInlineOptions(C$99n);
                }), C$99t.add(C$99r, C$99i, C$99n.comment);}
          }), C$99i.add(C$99o), 1;case "service":
          var C$99l = C$99e;var C$99n = C$99t;if (!C$99N.test(C$99n = C$99h())) throw illegal(C$99n, "service name");var C$99u = new C$99B(C$99n);return ifBlock(C$99u, function (C$99e) {
            if (!parseCommon(C$99u, C$99e)) {
              if ("rpc" !== C$99e) throw illegal(C$99e);var C$99t = C$99u;var C$99r = C$99e;if (!C$99N.test(C$99e = C$99h())) throw illegal(C$99e, "name");var C$99i,
                  C$99n,
                  C$99o,
                  C$99s = C$99e;if (C$99c("("), C$99c("stream", !0) && (C$99n = !0), !C$99E.test(C$99e = C$99h())) throw illegal(C$99e);if (C$99i = C$99e, C$99c(")"), C$99c("returns"), C$99c("("), C$99c("stream", !0) && (C$99o = !0), !C$99E.test(C$99e = C$99h())) throw illegal(C$99e);C$99e = C$99e, C$99c(")");var C$99a = new C$99L(C$99s, C$99r, C$99i, C$99e, C$99n, C$99o);ifBlock(C$99a, function (C$99e) {
                if ("option" !== C$99e) throw illegal(C$99e);parseOption(C$99a, C$99e), C$99c(";");
              }), C$99t.add(C$99a);
            }
          }), C$99l.add(C$99u), 1;case "extend":
          var C$99s = C$99e;C$99n = C$99t;if (!C$99E.test(C$99n = C$99h())) throw illegal(C$99n, "reference");var C$99f = C$99n;return ifBlock(null, function (C$99e) {
            switch (C$99e) {case "required":case "repeated":case "optional":
                parseField(C$99s, C$99e, C$99f);break;default:
                if (!C$99y || !C$99E.test(C$99e)) throw illegal(C$99e);C$99p(C$99e), parseField(C$99s, "optional", C$99f);}
          }), 1;}
    }function ifBlock(C$99e, C$99t, C$99r) {
      var C$99i = C$99o.line;if (C$99e && (C$99e.comment = C$99a(), C$99e.filename = parse.filename), C$99c("{", !0)) {
        var C$99n;for (; "}" !== (C$99n = C$99h());) C$99t(C$99n);C$99c(";", !0);
      } else C$99r && C$99r(), C$99c(";"), C$99e && "string" != typeof C$99e.comment && (C$99e.comment = C$99a(C$99i));
    }function parseField(C$99e, C$99t, C$99r) {
      var C$99i = C$99h();if ("group" === C$99i) {
        var C$99n = C$99e;var C$99l = C$99t;var C$99o = C$99h();if (!C$99N.test(C$99o)) throw illegal(C$99o, "name");var C$99s = C$99A.lcFirst(C$99o);C$99o === C$99s && (C$99o = C$99A.ucFirst(C$99o)), C$99c("=");var C$99a = parseId(C$99h());var C$99u = new C$99_(C$99o);return C$99u.group = !0, (C$99s = new C$99k(C$99s, C$99a, C$99o, C$99l)).filename = parse.filename, ifBlock(C$99u, function (C$99e) {
          switch (C$99e) {case "option":
              parseOption(C$99u, C$99e), C$99c(";");break;case "required":case "optional":case "repeated":
              parseField(C$99u, C$99e);break;default:
              throw illegal(C$99e);}
        }), void C$99n.add(C$99u).add(C$99s);
      }if (!C$99E.test(C$99i)) throw illegal(C$99i, "type");C$99a = C$99h();if (!C$99N.test(C$99a)) throw illegal(C$99a, "name");C$99a = C$99g(C$99a), C$99c("=");var C$99f = new C$99k(C$99a, parseId(C$99h()), C$99i, C$99t, C$99r);ifBlock(C$99f, function (C$99e) {
        if ("option" !== C$99e) throw illegal(C$99e);parseOption(C$99f, C$99e), C$99c(";");
      }, function () {
        parseInlineOptions(C$99f);
      }), C$99e.add(C$99f), C$99y || !C$99f.repeated || void 0 === C$99S.packed[C$99i] && void 0 !== C$99S.basic[C$99i] || C$99f.setOption("packed", !1, !0);
    }function parseOption(C$99e, C$99t) {
      var C$99r = C$99c("(", !0);if (!C$99E.test(C$99t = C$99h())) throw illegal(C$99t, "name");var C$99i = C$99t;C$99r && (C$99c(")"), C$99i = "(" + C$99i + ")", C$99t = C$99n(), C$99V.test(C$99t) && (C$99i += C$99t, C$99h())), C$99c("="), function parseOptionValue(C$99e, C$99t) {
        if (C$99c("{", !0)) do {
          if (!C$99N.test(C$99s = C$99h())) throw illegal(C$99s, "name");"{" === C$99n() ? parseOptionValue(C$99e, C$99t + "." + C$99s) : (C$99c(":"), "{" === C$99n() ? parseOptionValue(C$99e, C$99t + "." + C$99s) : setOption(C$99e, C$99t + "." + C$99s, readValue(!0)));
        } while (!C$99c("}", !0));else setOption(C$99e, C$99t, readValue(!0));
      }(C$99e, C$99i);
    }function setOption(C$99e, C$99t, C$99r) {
      C$99e.setOption && C$99e.setOption(C$99t, C$99r);
    }function parseInlineOptions(C$99e) {
      if (C$99c("[", !0)) {
        for (; parseOption(C$99e, "option"), C$99c(",", !0););C$99c("]");
      }return C$99e;
    }var C$99s;for (; null !== (C$99s = C$99h());) switch (C$99s) {case "package":
        if (!C$99d) throw illegal(C$99s);if (void 0 !== C$99e) throw illegal("package");if (C$99e = C$99h(), !C$99E.test(C$99e)) throw illegal(C$99e, "name");C$99v = C$99v.define(C$99e), C$99c(";");break;case "import":
        if (!C$99d) throw illegal(C$99s);var C$99m;var C$99b;switch (C$99b = C$99m = void 0, C$99n()) {case "weak":
            C$99b = C$99f = C$99f || [], C$99h();break;case "public":
            C$99h();default:
            C$99b = C$99u = C$99u || [];}C$99m = readString(), C$99c(";"), C$99b.push(C$99m);break;case "syntax":
        if (!C$99d) throw illegal(C$99s);if (C$99c("="), C$99l = readString(), !(C$99y = "proto3" === C$99l) && "proto2" !== C$99l) throw illegal(C$99l, "syntax");C$99c(";");break;case "option":
        if (!C$99d) throw illegal(C$99s);parseOption(C$99v, C$99s), C$99c(";");break;default:
        if (parseCommon(C$99v, C$99s)) {
          C$99d = !1;continue;
        }throw illegal(C$99s);}return parse.filename = null, { package: C$99e, imports: C$99u, weakImports: C$99f, syntax: C$99l, root: C$99r };
  }parse._configure = function () {
    C$99w = C$99e(19), C$99O = C$99e(9), C$99_ = C$99e(3), C$99k = C$99e(2), C$99x = C$99e(12), C$99j = C$99e(7), C$99T = C$99e(1), C$99B = C$99e(10), C$99L = C$99e(13), C$99S = C$99e(5), C$99A = C$99e(0);
  };
}, function (C$99e, C$99t) {
  C$99e.exports = tokenize;var C$99g = /[\s{}=;:[\],'"()<>]/g,
      C$99m = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
      C$99b = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;var C$99w = /^ *[*/]+ */,
      C$99O = /^\s*\*?\/*/,
      C$99_ = /\n/g,
      C$99k = /\s/,
      C$99r = /\\(.?)/g;var C$99i = { 0: "\0", r: "\r", n: "\n", t: "\t" };function unescape(C$99e) {
    return C$99e.replace(C$99r, function (C$99e, C$99t) {
      switch (C$99t) {case "\\":case "":
          return C$99t;default:
          return C$99i[C$99t] || "";}
    });
  }function tokenize(C$99u, C$99f) {
    C$99u = C$99u.toString();var C$99l = 0,
        C$99h = C$99u.length,
        C$99c = 1,
        C$99y = null,
        C$99v = null,
        C$99s = 0,
        C$99a = !1;var C$99p = [];var C$99d = null;function illegal(C$99e) {
      return Error("illegal " + C$99e + " (line " + C$99c + ")");
    }function charAt(C$99e) {
      return C$99u.charAt(C$99e);
    }function setComment(C$99e, C$99t) {
      C$99y = C$99u.charAt(C$99e++), C$99s = C$99c, C$99a = !1;var C$99r,
          C$99i = C$99e - (C$99f ? 2 : 3);do {
        if (--C$99i < 0 || "\n" === (C$99r = C$99u.charAt(C$99i))) {
          C$99a = !0;break;
        }
      } while (" " === C$99r || "\t" === C$99r);var C$99n = C$99u.substring(C$99e, C$99t).split(C$99_);for (var C$99o = 0; C$99o < C$99n.length; ++C$99o) C$99n[C$99o] = C$99n[C$99o].replace(C$99f ? C$99O : C$99w, "").trim();C$99v = C$99n.join("\n").trim();
    }function isDoubleSlashCommentLine(C$99e) {
      var C$99t = findEndOfLine(C$99e);C$99e = C$99u.substring(C$99e, C$99t);return (/^\s*\/{1,2}/.test(C$99e)
      );
    }function findEndOfLine(C$99e) {
      var C$99t = C$99e;for (; C$99t < C$99h && "\n" !== charAt(C$99t);) C$99t++;return C$99t;
    }function next() {
      if (0 < C$99p.length) return C$99p.shift();if (C$99d) {
        var C$99e = "'" === C$99d ? C$99b : C$99m;C$99e.lastIndex = C$99l - 1;var C$99t = C$99e.exec(C$99u);if (!C$99t) throw illegal("string");return C$99l = C$99e.lastIndex, push(C$99d), C$99d = null, unescape(C$99t[1]);
      }var C$99r, C$99i, C$99n, C$99o, C$99s;do {
        if (C$99l === C$99h) return null;for (C$99r = !1; C$99k.test(C$99n = charAt(C$99l));) if ("\n" === C$99n && ++C$99c, ++C$99l === C$99h) return null;if ("/" === charAt(C$99l)) {
          if (++C$99l === C$99h) throw illegal("comment");if ("/" === charAt(C$99l)) {
            if (C$99f) {
              if (C$99s = !1, isDoubleSlashCommentLine(C$99o = C$99l)) for (C$99s = !0; (C$99l = findEndOfLine(C$99l)) !== C$99h && isDoubleSlashCommentLine(++C$99l););else C$99l = Math.min(C$99h, findEndOfLine(C$99l) + 1);C$99s && setComment(C$99o, C$99l), C$99c++, C$99r = !0;
            } else {
              for (C$99s = "/" === charAt(C$99o = C$99l + 1); "\n" !== charAt(++C$99l);) if (C$99l === C$99h) return null;++C$99l, C$99s && setComment(C$99o, C$99l - 1), ++C$99c, C$99r = !0;
            }
          } else {
            if ("*" !== (C$99n = charAt(C$99l))) return "/";C$99o = C$99l + 1, C$99s = C$99f || "*" === charAt(C$99o);do {
              if ("\n" === C$99n && ++C$99c, ++C$99l === C$99h) throw illegal("comment");
            } while ((C$99i = C$99n, C$99n = charAt(C$99l), "*" !== C$99i || "/" !== C$99n));++C$99l, C$99s && setComment(C$99o, C$99l - 2), C$99r = !0;
          }
        }
      } while (C$99r);var C$99a = C$99l;if (C$99g.lastIndex = 0, !C$99g.test(charAt(C$99a++))) for (; C$99a < C$99h && !C$99g.test(charAt(C$99a));) ++C$99a;C$99e = C$99u.substring(C$99l, C$99l = C$99a);return '"' !== C$99e && "'" !== C$99e || (C$99d = C$99e), C$99e;
    }function push(C$99e) {
      C$99p.push(C$99e);
    }function peek() {
      if (!C$99p.length) {
        var C$99e = next();if (null === C$99e) return null;push(C$99e);
      }return C$99p[0];
    }return Object.defineProperty({ next: next, peek: peek, push: push, skip: function (C$99e, C$99t) {
        var C$99r = peek();if (C$99r === C$99e) return next(), !0;if (!C$99t) throw illegal("token '" + C$99r + "', '" + C$99e + "' expected");return !1;
      }, cmnt: function (C$99e) {
        var C$99t = null;return void 0 === C$99e ? C$99s === C$99c - 1 && (C$99f || "*" === C$99y || C$99a) && (C$99t = C$99v) : (C$99s < C$99e && peek(), C$99s !== C$99e || C$99a || !C$99f && "/" !== C$99y || (C$99t = C$99v)), C$99t;
      } }, "line", { get: function () {
        return C$99c;
      } });
  }tokenize.unescape = unescape;
}, function (C$99e, C$99t, C$99r) {
  "use strict";
  C$99e.exports = Service;var C$99s = C$99r(0);function Service(C$99e, C$99t, C$99r) {
    if ("function" != typeof C$99e) throw TypeError("rpcImpl must be a function");C$99s.EventEmitter.call(this), this.rpcImpl = C$99e, this.requestDelimited = Boolean(C$99t), this.responseDelimited = Boolean(C$99r);
  }((Service.prototype = Object.create(C$99s.EventEmitter.prototype)).constructor = Service).prototype.rpcCall = function rpcCall(C$99r, C$99e, C$99i, C$99t, C$99n) {
    if (!C$99t) throw TypeError("request must be specified");var C$99o = this;if (!C$99n) return C$99s.asPromise(rpcCall, C$99o, C$99r, C$99e, C$99i, C$99t);if (C$99o.rpcImpl) try {
      return C$99o.rpcImpl(C$99r, C$99e[C$99o.requestDelimited ? "encodeDelimited" : "encode"](C$99t).finish(), function (C$99e, C$99t) {
        if (C$99e) return C$99o.emit("error", C$99e, C$99r), C$99n(C$99e);if (null !== C$99t) {
          if (!(C$99t instanceof C$99i)) try {
            C$99t = C$99i[C$99o.responseDelimited ? "decodeDelimited" : "decode"](C$99t);
          } catch (C$99e) {
            return C$99o.emit("error", C$99e, C$99r), C$99n(C$99e);
          }return C$99o.emit("data", C$99t, C$99r), C$99n(null, C$99t);
        }C$99o.end(!0);
      });
    } catch (C$99e) {
      return C$99o.emit("error", C$99e, C$99r), void setTimeout(function () {
        C$99n(C$99e);
      }, 0);
    } else setTimeout(function () {
      C$99n(Error("already ended"));
    }, 0);
  }, Service.prototype.end = function (C$99e) {
    return this.rpcImpl && (C$99e || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
  };
}, function (C$99e, C$99t) {
  C$99e.exports = common;var C$99r = /\/|\./;function common(C$99e, C$99t) {
    C$99r.test(C$99e) || (C$99e = "google/protobuf/" + C$99e + ".proto", C$99t = { nested: { google: { nested: { protobuf: { nested: C$99t } } } } }), common[C$99e] = C$99t;
  }common("any", { Any: { fields: { type_url: { type: "string", id: 1 }, value: { type: "bytes", id: 2 } } } }), common("duration", { Duration: C$99e = { fields: { seconds: { type: "int64", id: 1 }, nanos: { type: "int32", id: 2 } } } }), common("timestamp", { Timestamp: C$99e }), common("empty", { Empty: { fields: {} } }), common("struct", { Struct: { fields: { fields: { keyType: "string", type: "Value", id: 1 } } }, Value: { oneofs: { kind: { oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"] } }, fields: { nullValue: { type: "NullValue", id: 1 }, numberValue: { type: "double", id: 2 }, stringValue: { type: "string", id: 3 }, boolValue: { type: "bool", id: 4 }, structValue: { type: "Struct", id: 5 }, listValue: { type: "ListValue", id: 6 } } }, NullValue: { values: { NULL_VALUE: 0 } }, ListValue: { fields: { values: { rule: "repeated", type: "Value", id: 1 } } } }), common("wrappers", { DoubleValue: { fields: { value: { type: "double", id: 1 } } }, FloatValue: { fields: { value: { type: "float", id: 1 } } }, Int64Value: { fields: { value: { type: "int64", id: 1 } } }, UInt64Value: { fields: { value: { type: "uint64", id: 1 } } }, Int32Value: { fields: { value: { type: "int32", id: 1 } } }, UInt32Value: { fields: { value: { type: "uint32", id: 1 } } }, BoolValue: { fields: { value: { type: "bool", id: 1 } } }, StringValue: { fields: { value: { type: "string", id: 1 } } }, BytesValue: { fields: { value: { type: "bytes", id: 1 } } } }), common("field_mask", { FieldMask: { fields: { paths: { rule: "repeated", type: "string", id: 1 } } } }), common.get = function (C$99e) {
    return common[C$99e] || null;
  };
}, function (C$99s, C$99a, C$99t) {
  C$99s.exports = Reader;var C$99n = C$99t(0);var C$99r;var C$99i;function indexOutOfRange(C$99e, C$99t) {
    return RangeError("index out of range: " + C$99e.pos + " + " + (C$99t || 1) + " > " + C$99e.len);
  }function Reader(C$99e) {
    this.buf = C$99e, this.pos = 0, this.len = C$99e.length;
  }var C$99o = "undefined" != typeof Uint8Array ? function (C$99e) {
    if (C$99e instanceof Uint8Array || Array.isArray(C$99e)) return new Reader(C$99e);if ("undefined" != typeof ArrayBuffer && C$99e instanceof ArrayBuffer) return new Reader(new Uint8Array(C$99e));throw Error("illegal buffer");
  } : function (C$99e) {
    if (Array.isArray(C$99e)) return new Reader(C$99e);throw Error("illegal buffer");
  };var C$99e;function readLongVarint() {
    var C$99e = new C$99r(0, 0);var C$99t = 0;if (!(4 < this.len - this.pos)) {
      for (; C$99t < 3; ++C$99t) {
        if (this.pos >= this.len) throw indexOutOfRange(this);if (C$99e.lo = (C$99e.lo | (127 & this.buf[this.pos]) << 7 * C$99t) >>> 0, this.buf[this.pos++] < 128) return C$99e;
      }return C$99e.lo = (C$99e.lo | (127 & this.buf[this.pos++]) << 7 * C$99t) >>> 0, C$99e;
    }for (; C$99t < 4; ++C$99t) if (C$99e.lo = (C$99e.lo | (127 & this.buf[this.pos]) << 7 * C$99t) >>> 0, this.buf[this.pos++] < 128) return C$99e;if (C$99e.lo = (C$99e.lo | (127 & this.buf[this.pos]) << 28) >>> 0, C$99e.hi = (C$99e.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return C$99e;if (C$99t = 0, 4 < this.len - this.pos) {
      for (; C$99t < 5; ++C$99t) if (C$99e.hi = (C$99e.hi | (127 & this.buf[this.pos]) << 7 * C$99t + 3) >>> 0, this.buf[this.pos++] < 128) return C$99e;
    } else for (; C$99t < 5; ++C$99t) {
      if (this.pos >= this.len) throw indexOutOfRange(this);if (C$99e.hi = (C$99e.hi | (127 & this.buf[this.pos]) << 7 * C$99t + 3) >>> 0, this.buf[this.pos++] < 128) return C$99e;
    }throw Error("invalid varint encoding");
  }function readFixed32_end(C$99e, C$99t) {
    return (C$99e[C$99t - 4] | C$99e[C$99t - 3] << 8 | C$99e[C$99t - 2] << 16 | C$99e[C$99t - 1] << 24) >>> 0;
  }function readFixed64() {
    if (this.pos + 8 > this.len) throw indexOutOfRange(this, 8);return new C$99r(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
  }Reader.create = C$99n.Buffer ? function (C$99e) {
    return (Reader.create = function (C$99e) {
      return C$99n.Buffer.isBuffer(C$99e) ? new (void 0)(C$99e) : C$99o(C$99e);
    })(C$99e);
  } : C$99o, Reader.prototype._slice = C$99n.Array.prototype.subarray || C$99n.Array.prototype.slice, Reader.prototype.uint32 = (C$99e = 4294967295, function () {
    if (C$99e = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return C$99e;if (C$99e = (C$99e | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return C$99e;if (C$99e = (C$99e | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return C$99e;if (C$99e = (C$99e | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return C$99e;if (C$99e = (C$99e | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return C$99e;if ((this.pos += 5) > this.len) throw this.pos = this.len, indexOutOfRange(this, 10);return C$99e;
  }), Reader.prototype.int32 = function () {
    return 0 | this.uint32();
  }, Reader.prototype.sint32 = function () {
    var C$99e = this.uint32();return C$99e >>> 1 ^ -(1 & C$99e) | 0;
  }, Reader.prototype.bool = function () {
    return 0 !== this.uint32();
  }, Reader.prototype.fixed32 = function () {
    if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);return readFixed32_end(this.buf, this.pos += 4);
  }, Reader.prototype.sfixed32 = function () {
    if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);return 0 | readFixed32_end(this.buf, this.pos += 4);
  }, Reader.prototype.uint64 = function () {
    if (this.pos + 1 > this.len) throw indexOutOfRange(this, 1);var C$99e = 0;var C$99t = this.buf[this.pos];switch (C$99t >> 4) {case 0:
        if (this.pos + 5 > this.len) throw indexOutOfRange(this, 5);C$99e = C$99n.float.readFloatLE(this.buf, this.pos + 1), this.pos += 5;break;case 1:
        if (this.pos + 9 > this.len) throw indexOutOfRange(this, 9);C$99e = C$99n.float.readDoubleLE(this.buf, this.pos + 1), this.pos += 9;break;case 2:case 7:
        C$99e = 15 & C$99t, this.pos += 1;break;case 3:case 8:
        if (this.pos + 2 > this.len) throw indexOutOfRange(this, 2);C$99e = this.buf[this.pos + 1], this.pos += 2;break;case 4:case 9:
        if (this.pos + 3 > this.len) throw indexOutOfRange(this, 3);C$99e = (this.buf[this.pos + 2] << 8 | this.buf[this.pos + 1]) >>> 0, this.pos += 3;break;case 5:case 10:
        if (this.pos + 5 > this.len) throw indexOutOfRange(this, 5);C$99e = Math.floor(16777216 * this.buf[this.pos + 4] + 65536 * this.buf[this.pos + 3] + 256 * this.buf[this.pos + 2] + this.buf[this.pos + 1]), this.pos += 5;break;case 6:case 11:
        if (this.pos + 9 > this.len) throw indexOutOfRange(this, 9);var C$99r = Math.floor(16777216 * this.buf[this.pos + 4] + 65536 * this.buf[this.pos + 3] + 256 * this.buf[this.pos + 2] + this.buf[this.pos + 1]);var C$99i = Math.floor(16777216 * this.buf[this.pos + 8] + 65536 * this.buf[this.pos + 7] + 256 * this.buf[this.pos + 6] + this.buf[this.pos + 5]);C$99e = Math.floor(4294967296 * C$99i + C$99r), this.pos += 9;}return C$99e = 7 <= C$99t >> 4 ? -C$99e : C$99e;
  }, Reader.prototype.float = function () {
    if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);var C$99e = C$99n.float.readFloatLE(this.buf, this.pos);return this.pos += 4, C$99e;
  }, Reader.prototype.double = function () {
    if (this.pos + 8 > this.len) throw indexOutOfRange(this, 4);var C$99e = C$99n.float.readDoubleLE(this.buf, this.pos);return this.pos += 8, C$99e;
  }, Reader.prototype.bytes = function () {
    var C$99e = this.uint32(),
        C$99t = this.pos,
        C$99r = this.pos + C$99e;if (C$99r > this.len) throw indexOutOfRange(this, C$99e);return this.pos += C$99e, Array.isArray(this.buf) ? this.buf.slice(C$99t, C$99r) : C$99t === C$99r ? new this.buf.constructor(0) : this._slice.call(this.buf, C$99t, C$99r);
  }, Reader.prototype.string = function () {
    var C$99e = this.bytes();return C$99i.read(C$99e, 0, C$99e.length);
  }, Reader.prototype.skip = function (C$99e) {
    if ("number" == typeof C$99e) {
      if (this.pos + C$99e > this.len) throw indexOutOfRange(this, C$99e);this.pos += C$99e;
    } else do {
      if (this.pos >= this.len) throw indexOutOfRange(this);
    } while (128 & this.buf[this.pos++]);return this;
  }, Reader.prototype.skipType = function (C$99e) {
    switch (C$99e) {case 0:
        this.skip();break;case 4:
        var C$99t = this.buf[this.pos] >> 4;var C$99r = 0;0 == C$99t ? C$99r = 5 : 1 == C$99t ? C$99r = 9 : 2 == C$99t || 7 == C$99t ? C$99r = 1 : 3 == C$99t || 8 == C$99t ? C$99r = 2 : 4 == C$99t || 9 == C$99t ? C$99r = 3 : 5 == C$99t || 10 == C$99t ? C$99r = 5 : 6 != C$99t && 11 != C$99t || (C$99r = 9), this.skip(C$99r);break;case 1:
        this.skip(8);break;case 2:
        this.skip(this.uint32());break;case 3:
        for (;;) {
          if (4 == (C$99e = 7 & this.uint32())) break;this.skipType(C$99e);
        }break;case 5:
        this.skip(4);break;default:
        throw Error("invalid wire type " + C$99e + " at offset " + this.pos);}return this;
  }, Reader._configure = function () {
    C$99r = C$99t(11), C$99i = C$99t(8);var C$99e = C$99n.Long ? "toLong" : "toNumber";C$99n.merge(Reader.prototype, { int64: function () {
        return readLongVarint.call(this)[C$99e](!1);
      }, sint64: function () {
        return readLongVarint.call(this).zzDecode()[C$99e](!1);
      }, fixed64: function () {
        return readFixed64.call(this)[C$99e](!0);
      }, sfixed64: function () {
        return readFixed64.call(this)[C$99e](!1);
      } });
  };
}, function (C$99e, C$99t, C$99r) {
  var C$99n;var C$99c;function invalid(C$99e, C$99t) {
    return C$99e.name + ": " + C$99t + (C$99e.repeated && "array" !== C$99t ? "[]" : C$99e.map && "object" !== C$99t ? "{k:" + C$99e.keyType + "}" : "") + " expected";
  }function verifyValue(C$99e, C$99t, C$99r, C$99i) {
    C$99i = C$99i.types;if (C$99e.resolvedType) {
      if (C$99e.resolvedType instanceof C$99n) {
        if (Object.keys(C$99e.resolvedType.values).indexOf(C$99r) < 0) return invalid(C$99e, "enum value");
      } else {
        C$99i = C$99i[C$99t].verify(C$99r);if (C$99i) return C$99e.name + "." + C$99i;
      }
    } else switch (C$99e.type) {case "int32":case "uint32":case "sint32":case "fixed32":case "sfixed32":
        if (!C$99c.isInteger(C$99r)) return invalid(C$99e, "integer");break;case "int64":case "uint64":case "sint64":case "fixed64":case "sfixed64":
        if (!(C$99c.isInteger(C$99r) || C$99r && C$99c.isInteger(C$99r.low) && C$99c.isInteger(C$99r.high))) return invalid(C$99e, "integer|Long");break;case "float":case "double":
        if ("number" != typeof C$99r) return invalid(C$99e, "number");break;case "bool":
        if ("boolean" != typeof C$99r) return invalid(C$99e, "boolean");break;case "string":
        if (!C$99c.isString(C$99r)) return invalid(C$99e, "string");break;case "bytes":
        if (!(C$99r && "number" == typeof C$99r.length || C$99c.isString(C$99r))) return invalid(C$99e, "buffer");}
  }function verifier(C$99h) {
    return function (C$99l) {
      return function (C$99e) {
        var C$99t;if ("object" != typeof C$99e || null === C$99e) return "object expected";var C$99r = {};var C$99i;C$99h.oneofsArray.length && (C$99i = {});for (var C$99n = 0; C$99n < C$99h.fieldsArray.length; ++C$99n) {
          var C$99o = C$99h._fieldsArray[C$99n].resolve(),
              C$99s = C$99e[C$99o.name];var C$99a;if (!C$99o.optional || null != C$99s && C$99e.hasOwnProperty(C$99o.name)) if (C$99o.map) {
            if (!C$99c.isObject(C$99s)) return invalid(C$99o, "object");var C$99u = Object.keys(C$99s);for (C$99a = 0; C$99a < C$99u.length; ++C$99a) {
              if (C$99t = function (C$99e, C$99t) {
                switch (C$99e.keyType) {case "int32":case "uint32":case "sint32":case "fixed32":case "sfixed32":
                    if (!C$99c.key32Re.test(C$99t)) return invalid(C$99e, "integer key");break;case "int64":case "uint64":case "sint64":case "fixed64":case "sfixed64":
                    if (!C$99c.key64Re.test(C$99t)) return invalid(C$99e, "integer|Long key");break;case "bool":
                    if (!C$99c.key2Re.test(C$99t)) return invalid(C$99e, "boolean key");}
              }(C$99o, C$99u[C$99a])) return C$99t;if (C$99t = verifyValue(C$99o, C$99n, C$99s[C$99u[C$99a]], C$99l)) return C$99t;
            }
          } else if (C$99o.repeated) {
            if (!Array.isArray(C$99s)) return invalid(C$99o, "array");for (C$99a = 0; C$99a < C$99s.length; ++C$99a) if (C$99t = verifyValue(C$99o, C$99n, C$99s[C$99a], C$99l)) return C$99t;
          } else {
            if (C$99o.partOf) {
              var C$99f = C$99o.partOf.name;if (1 === C$99r[C$99o.partOf.name] && 1 === C$99i[C$99f]) return C$99o.partOf.name + ": multiple values";C$99i[C$99f] = 1;
            }if (C$99t = verifyValue(C$99o, C$99n, C$99s, C$99l)) return C$99t;
          }
        }
      };
    };
  }(C$99e.exports = verifier)._configure = function () {
    C$99n = C$99r(1), C$99c = C$99r(0);
  };
}, function (C$99e, C$99t, C$99r) {
  var C$99g;var C$99m;function encoder(C$99v) {
    return function (C$99e) {
      var C$99p = C$99e.Writer;var C$99d = C$99e.types;var C$99y = C$99e.util;return function (C$99e, C$99t) {
        C$99t = C$99t || C$99p.create();var C$99l = C$99v.fieldsArray.slice().sort(C$99y.compareFieldsById);for (var C$99h = 0; C$99h < C$99l.length; C$99h++) {
          var C$99r = C$99l[C$99h];var C$99i = C$99v._fieldsArray.indexOf(C$99r);var C$99n = C$99r.resolvedType instanceof C$99g ? "uint32" : C$99r.type;var C$99o = C$99m.basic[C$99n];var C$99s = C$99e[C$99r.name];if (C$99r.resolvedType instanceof C$99g && "string" == typeof C$99s && (C$99s = C$99d[C$99i].values[C$99s]), C$99r.map) {
            if (null != C$99s && C$99e.hasOwnProperty(C$99r.name)) for (var C$99a = Object.keys(C$99s), C$99u = 0; C$99u < C$99a.length; ++C$99u) C$99t.uint32((C$99r.id << 3 | 2) >>> 0).fork().uint32(8 | C$99m.mapKey[C$99r.keyType])[C$99r.keyType](C$99a[C$99u]), (void 0 === C$99o ? C$99d[C$99i].encode(C$99s[C$99a[C$99u]], C$99t.uint32(18).fork()).ldelim() : C$99t.uint32(16 | C$99o)[C$99n](C$99s[C$99a[C$99u]])).ldelim();
          } else if (C$99r.repeated) {
            if (C$99s && C$99s.length) if (C$99r.packed && void 0 !== C$99m.packed[C$99n]) {
              C$99t.uint32((C$99r.id << 3 | 2) >>> 0).fork();for (var C$99c = 0; C$99c < C$99s.length; C$99c++) C$99t[C$99n](C$99s[C$99c]);C$99t.ldelim();
            } else for (var C$99f = 0; C$99f < C$99s.length; C$99f++) void 0 === C$99o ? C$99r.resolvedType.group ? C$99d[C$99i].encode(C$99s[C$99f], C$99t.uint32((C$99r.id << 3 | 3) >>> 0)).uint32((C$99r.id << 3 | 4) >>> 0) : C$99d[C$99i].encode(C$99s[C$99f], C$99t.uint32((C$99r.id << 3 | 2) >>> 0).fork()).ldelim() : C$99t.uint32((C$99r.id << 3 | C$99o) >>> 0)[C$99n](C$99s[C$99f]);
          } else (!C$99r.optional || null != C$99s && C$99e.hasOwnProperty(C$99r.name)) && (C$99r.optional || null != C$99s && C$99e.hasOwnProperty(C$99r.name) || console.warn("\u6ce8\u610f\u5566!!!\u5f88\u5927\u6982\u7387\u4f1a\u62a5\u9519 \u7c7b\u578b:", C$99e.$type ? C$99e.$type.name : "\u4e0d\u6653\u5f97", "\u6ca1\u6709\u8bbe\u7f6e\u5bf9\u5e94\u7684\u5c5e\u6027:", C$99r.name, "\u68c0\u67e5\u662f\u4e0d\u662fproto\u6587\u4ef6\u5c5e\u6027\u8bbe\u7f6e\u4e3a\u4e86required"), void 0 === C$99o ? C$99r.resolvedType.group ? C$99d[C$99i].encode(C$99s, C$99t.uint32((C$99r.id << 3 | 3) >>> 0)).uint32((C$99r.id << 3 | 4) >>> 0) : C$99d[C$99i].encode(C$99s, C$99t.uint32((C$99r.id << 3 | 2) >>> 0).fork()).ldelim() : C$99t.uint32((C$99r.id << 3 | C$99o) >>> 0)[C$99n](C$99s));
        }return C$99t;
      };
    };
  }(C$99e.exports = encoder)._configure = function () {
    C$99g = C$99r(1), C$99m = C$99r(5);
  };
}, function (C$99e, C$99t, C$99r) {
  var C$99m, C$99b, C$99w;function decoder(C$99g) {
    return function (C$99e) {
      var C$99d = C$99e.Reader;var C$99y = C$99e.types;var C$99v = C$99e.util;return function (C$99e, C$99t) {
        C$99e instanceof C$99d || (C$99e = C$99d.create(C$99e));var C$99l = void 0 === C$99t ? C$99e.len : C$99e.pos + C$99t,
            C$99r = new this.ctor();var C$99i;for (; C$99e.pos < C$99l;) {
          var C$99n = C$99e.uint32();if (C$99g.group && 4 == (7 & C$99n)) break;var C$99h = C$99n >>> 3;var C$99o = 0;var C$99c = !1;for (; C$99o < C$99g.fieldsArray.length; ++C$99o) {
            var C$99s = C$99g._fieldsArray[C$99o].resolve(),
                C$99a = C$99s.name,
                C$99u = C$99s.resolvedType instanceof C$99m ? "int32" : C$99s.type;if (C$99h == C$99s.id) {
              if (C$99c = !0, C$99s.map) C$99e.skip().pos++, C$99r[C$99a] === C$99v.emptyObject && (C$99r[C$99a] = {}), C$99i = C$99e[C$99s.keyType](), C$99e.pos++, null != C$99b.long[C$99s.keyType] ? null == C$99b.basic[C$99u] ? C$99r[C$99a]["object" == typeof C$99i ? C$99v.longToHash(C$99i) : C$99i] = C$99y[C$99o].decode(C$99e, C$99e.uint32()) : C$99r[C$99a]["object" == typeof C$99i ? C$99v.longToHash(C$99i) : C$99i] = C$99e[C$99u]() : null == C$99b.basic[C$99u] ? C$99r[C$99a] = C$99y[C$99o].decode(C$99e, C$99e.uint32()) : C$99r[C$99a] = C$99e[C$99u]();else if (C$99s.repeated) {
                if (C$99r[C$99a] && C$99r[C$99a].length || (C$99r[C$99a] = []), null != C$99b.packed[C$99u] && 2 == (7 & C$99n)) {
                  var C$99p = C$99e.uint32() + C$99e.pos;for (; C$99e.pos < C$99p;) C$99r[C$99a].push(C$99e[C$99u]());
                } else null == C$99b.basic[C$99u] ? C$99s.resolvedType.group ? C$99r[C$99a].push(C$99y[C$99o].decode(C$99e)) : C$99r[C$99a].push(C$99y[C$99o].decode(C$99e, C$99e.uint32())) : C$99r[C$99a].push(C$99e[C$99u]());
              } else null == C$99b.basic[C$99u] ? C$99s.resolvedType.group ? C$99r[C$99a] = C$99y[C$99o].decode(C$99e) : C$99r[C$99a] = C$99y[C$99o].decode(C$99e, C$99e.uint32()) : C$99r[C$99a] = C$99e[C$99u]();break;
            }
          }C$99c || (console.log("t", C$99n), C$99e.skipType(7 & C$99n));
        }for (C$99o = 0; C$99o < C$99g._fieldsArray.length; ++C$99o) {
          var C$99f = C$99g._fieldsArray[C$99o];if (C$99f.required && !C$99r.hasOwnProperty(C$99f.name)) throw C$99w.ProtocolError("missing required '" + C$99f.name + "'", { instance: C$99r });
        }return C$99r;
      };
    };
  }(C$99e.exports = decoder)._configure = function () {
    C$99m = C$99r(1), C$99b = C$99r(5), C$99w = C$99r(0);
  };
}, function (C$99e, C$99t, C$99r) {
  var C$99i;C$99t[".google.protobuf.Any"] = { fromObject: function (C$99e) {
      if (C$99e && C$99e["@type"]) {
        var C$99t = this.lookup(C$99e["@type"]);var C$99r;if (C$99t) return C$99r = "." === C$99e["@type"].charAt(0) ? C$99e["@type"].substr(1) : C$99e["@type"], this.create({ type_url: "/" + C$99r, value: C$99t.encode(C$99t.fromObject(C$99e)).finish() });
      }return this.fromObject(C$99e);
    }, toObject: function (C$99e, C$99t) {
      var C$99r;return C$99t && C$99t.json && C$99e.type_url && C$99e.value && (C$99r = C$99e.type_url.substring(C$99e.type_url.lastIndexOf("/") + 1), (C$99r = this.lookup(C$99r)) && (C$99e = C$99r.decode(C$99e.value))), !(C$99e instanceof this.ctor) && C$99e instanceof C$99i ? ((C$99r = C$99e.$type.toObject(C$99e, C$99t))["@type"] = C$99e.$type.fullName, C$99r) : this.toObject(C$99e, C$99t);
    } }, C$99t._configure = function () {
    C$99i = C$99r(14);
  };
}, function (C$99e, C$99t, C$99r) {
  C$99e = C$99e.exports;var C$99v, C$99g;function valuePartial_fromObject(C$99e, C$99l, C$99t, C$99h) {
    var C$99r = C$99h.m;var C$99i = C$99h.d;var C$99c = C$99h.types;var C$99n = C$99h.ksi;var C$99o = void 0 !== C$99n;if (C$99e.resolvedType) {
      if (C$99e.resolvedType instanceof C$99v) {
        var C$99p = C$99o ? C$99i[C$99t][C$99n] : C$99i[C$99t];var C$99s = C$99e.resolvedType.values,
            C$99a = Object.keys(C$99s);for (var C$99u = 0; C$99u < C$99a.length; C$99u++) if (!(C$99e.repeated && C$99s[C$99a[C$99u]] === C$99e.typeDefault || C$99a[C$99u] != C$99p && C$99s[C$99a[C$99u]] != C$99p)) {
          C$99o ? C$99r[C$99t][C$99n] = C$99s[C$99a[C$99u]] : C$99r[C$99t] = C$99s[C$99a[C$99u]];break;
        }
      } else {
        if ("object" != typeof (C$99o ? C$99i[C$99t][C$99n] : C$99i[C$99t])) throw TypeError(C$99e.fullName + ": object expected");C$99o ? C$99r[C$99t][C$99n] = C$99c[C$99l].fromObject(C$99i[C$99t][C$99n]) : C$99r[C$99t] = C$99c[C$99l].fromObject(C$99i[C$99t]);
      }
    } else {
      var C$99f = !1;switch (C$99e.type) {case "double":case "float":
          C$99o ? C$99r[C$99t][C$99n] = Number(C$99i[C$99t][C$99n]) : C$99r[C$99t] = Number(C$99i[C$99t]);break;case "uint32":case "fixed32":
          C$99o ? C$99r[C$99t][C$99n] = C$99i[C$99t][C$99n] >>> 0 : C$99r[C$99t] = C$99i[C$99t] >>> 0;break;case "int32":case "sint32":case "sfixed32":
          C$99o ? C$99r[C$99t][C$99n] = 0 | C$99i[C$99t][C$99n] : C$99r[C$99t] = 0 | C$99i[C$99t];break;case "uint64":
          C$99f = !0;case "int64":case "sint64":case "fixed64":case "sfixed64":
          C$99g.Long ? C$99o ? C$99r[C$99t][C$99n] = C$99g.Long.fromValue(C$99i[C$99t][C$99n]).unsigned = C$99f : C$99r[C$99t] = C$99g.Long.fromValue(C$99i[C$99t]).unsigned = C$99f : "string" == typeof (C$99o ? C$99i[C$99t][C$99n] : C$99i[C$99t]) ? C$99o ? C$99r[C$99t][C$99n] = parseInt(C$99i[C$99t][C$99n], 10) : C$99r[C$99t] = parseInt(C$99i[C$99t], 10) : "number" == typeof (C$99o ? C$99i[C$99t][C$99n] : C$99i[C$99t]) ? C$99o ? C$99r[C$99t][C$99n] = C$99i[C$99t][C$99n] : C$99r[C$99t] = C$99i[C$99t] : "object" == typeof (C$99o ? C$99i[C$99t][C$99n] : C$99i[C$99t]) && (C$99o ? C$99r[C$99t][C$99n] = new C$99g.LongBits(C$99i[C$99t][C$99n].low >>> 0, C$99i[C$99t][C$99n].high >>> 0).toNumber(C$99f) : C$99r[C$99t] = new C$99g.LongBits(C$99i[C$99t].low >>> 0, C$99i[C$99t].high >>> 0).toNumber(C$99f));break;case "bytes":
          "string" == typeof (C$99o ? C$99i[C$99t][C$99n] : C$99i[C$99t]) ? C$99o ? C$99g.base64.decode(C$99i[C$99t][C$99n], C$99r[C$99t][C$99n] = C$99g.newBuffer(C$99g.base64.length(C$99i[C$99t][C$99n])), 0) : C$99g.base64.decode(C$99i[C$99t], C$99r[C$99t] = C$99g.newBuffer(C$99g.base64.length(C$99i[C$99t])), 0) : (C$99o ? C$99i[C$99t][C$99n] : C$99i[C$99t]).length && (C$99o ? C$99r[C$99t][C$99n] = C$99i[C$99t][C$99n] : C$99r[C$99t] = C$99i[C$99t]);break;case "string":
          C$99o ? C$99r[C$99t][C$99n] = String(C$99i[C$99t][C$99n]) : C$99r[C$99t] = String(C$99i[C$99t]);break;case "bool":
          C$99o ? C$99r[C$99t][C$99n] = Boolean(C$99i[C$99t][C$99n]) : C$99r[C$99t] = Boolean(C$99i[C$99t]);}
    }
  }function valuePartial_toObject(C$99e, C$99t, C$99r, C$99i) {
    var C$99n = C$99i.m;var C$99o = C$99i.d;var C$99s = C$99i.types;var C$99a = C$99i.ksi;var C$99u = C$99i.o;var C$99f = void 0 !== C$99a;if (C$99e.resolvedType) C$99e.resolvedType instanceof C$99v ? C$99f ? C$99o[C$99r][C$99a] = C$99u.enums === String ? C$99s[C$99t].values[C$99n[C$99r][C$99a]] : C$99n[C$99r][C$99a] : C$99o[C$99r] = C$99u.enums === String ? C$99s[C$99t].values[C$99n[C$99r]] : C$99n[C$99r] : C$99f ? C$99o[C$99r][C$99a] = C$99s[C$99t].toObject(C$99n[C$99r][C$99a], C$99u) : C$99o[C$99r] = C$99s[C$99t].toObject(C$99n[C$99r], C$99u);else {
      var C$99l = !1;switch (C$99e.type) {case "double":case "float":
          C$99f ? C$99o[C$99r][C$99a] = C$99u.json && !isFinite(C$99n[C$99r][C$99a]) ? String(C$99n[C$99r][C$99a]) : C$99n[C$99r][C$99a] : C$99o[C$99r] = C$99u.json && !isFinite(C$99n[C$99r]) ? String(C$99n[C$99r]) : C$99n[C$99r];break;case "uint64":
          C$99l = !0;case "int64":case "sint64":case "fixed64":case "sfixed64":
          "number" == typeof C$99n[C$99r][C$99a] ? C$99f ? C$99o[C$99r][C$99a] = C$99u.longs === String ? String(C$99n[C$99r][C$99a]) : C$99n[C$99r][C$99a] : C$99o[C$99r] = C$99u.longs === String ? String(C$99n[C$99r]) : C$99n[C$99r] : C$99f ? C$99o[C$99r][C$99a] = C$99u.longs === String ? C$99g.Long.prototype.toString.call(C$99n[C$99r][C$99a]) : C$99u.longs === Number ? new C$99g.LongBits(C$99n[C$99r][C$99a].low >>> 0, C$99n[C$99r][C$99a].high >>> 0).toNumber(C$99l) : C$99n[C$99r][C$99a] : C$99o[C$99r] = C$99u.longs === String ? C$99g.Long.prototype.toString.call(C$99n[C$99r]) : C$99u.longs === Number ? new C$99g.LongBits(C$99n[C$99r].low >>> 0, C$99n[C$99r].high >>> 0).toNumber(C$99l) : C$99n[C$99r];break;case "bytes":
          C$99f ? C$99o[C$99r][C$99a] = C$99u.bytes === String ? C$99g.base64.encode(C$99n[C$99r][C$99a], 0, C$99n[C$99r][C$99a].length) : C$99u.bytes === Array ? Array.prototype.slice.call(C$99n[C$99r][C$99a]) : C$99n[C$99r][C$99a] : C$99o[C$99r] = C$99u.bytes === String ? C$99g.base64.encode(C$99n[C$99r], 0, C$99n[C$99r].length) : C$99u.bytes === Array ? Array.prototype.slice.call(C$99n[C$99r]) : C$99n[C$99r];break;default:
          C$99f ? C$99o[C$99r][C$99a] = C$99n[C$99r][C$99a] : C$99o[C$99r] = C$99n[C$99r];}
    }
  }C$99e._configure = function () {
    C$99v = C$99r(1), C$99g = C$99r(0);
  }, C$99e.fromObject = function (C$99e) {
    var C$99u = C$99e.fieldsArray;return function (C$99a) {
      return function (C$99e) {
        if (C$99e instanceof this.ctor) return C$99e;if (!C$99u.length) return new this.ctor();var C$99t = new this.ctor();for (var C$99r = 0; C$99r < C$99u.length; ++C$99r) {
          var C$99i = C$99u[C$99r].resolve();var C$99n = C$99i.name;var C$99o;if (C$99i.map) {
            if (C$99e[C$99n]) {
              if ("object" != typeof C$99e[C$99n]) throw TypeError(C$99i.fullName + ": object expected");C$99t[C$99n] = {};
            }var C$99s = Object.keys(C$99e[C$99n]);for (C$99o = 0; C$99o < C$99s.length; ++C$99o) valuePartial_fromObject(C$99i, C$99r, C$99n, C$99g.merge(C$99g.copy(C$99a), { m: C$99t, d: C$99e, ksi: C$99s[C$99o] }));
          } else if (C$99i.repeated) {
            if (C$99e[C$99n]) {
              if (!Array.isArray(C$99e[C$99n])) throw TypeError(C$99i.fullName + ": array expected");for (C$99t[C$99n] = [], C$99o = 0; C$99o < C$99e[C$99n].length; ++C$99o) valuePartial_fromObject(C$99i, C$99r, C$99n, C$99g.merge(C$99g.copy(C$99a), { m: C$99t, d: C$99e, ksi: C$99o }));
            }
          } else (C$99i.resolvedType instanceof C$99v || null != C$99e[C$99n]) && valuePartial_fromObject(C$99i, C$99r, C$99n, C$99g.merge(C$99g.copy(C$99a), { m: C$99t, d: C$99e }));
        }return C$99t;
      };
    };
  }, C$99e.toObject = function (C$99d) {
    var C$99y = C$99d.fieldsArray.slice().sort(C$99g.compareFieldsById);return function (C$99p) {
      return C$99y.length ? function (C$99e, C$99t) {
        C$99t = C$99t || {};var C$99r = {};var C$99i,
            C$99n,
            C$99o = [],
            C$99s = [],
            C$99a = [],
            C$99u = 0;for (; C$99u < C$99y.length; ++C$99u) C$99y[C$99u].partOf || (C$99y[C$99u].resolve().repeated ? C$99o : C$99y[C$99u].map ? C$99s : C$99a).push(C$99y[C$99u]);if (C$99o.length && (C$99t.arrays || C$99t.defaults)) for (C$99u = 0; C$99u < C$99o.length; ++C$99u) C$99r[C$99o[C$99u].name] = [];if (C$99s.length && (C$99t.objects || C$99t.defaults)) for (C$99u = 0; C$99u < C$99s.length; ++C$99u) C$99r[C$99s[C$99u].name] = {};if (C$99a.length && C$99t.defaults) for (C$99u = 0; C$99u < C$99a.length; ++C$99u) {
          var C$99l;C$99n = (C$99i = C$99a[C$99u]).name, C$99i.resolvedType instanceof C$99v ? C$99r[C$99n] = C$99t.enums = String ? C$99i.resolvedType.valuesById[C$99i.typeDefault] : C$99i.typeDefault : C$99i.long ? C$99g.Long ? (C$99l = new C$99g.Long(C$99i.typeDefault.low, C$99i.typeDefault.high, C$99i.typeDefault.unsigned), C$99r[C$99n] = C$99t.longs === String ? C$99l.toString() : C$99t.longs === Number ? C$99l.toNumber() : C$99l) : C$99r[C$99n] = C$99t.longs === String ? C$99i.typeDefault.toString() : C$99i.typeDefault.toNumber() : C$99i.bytes ? C$99r[C$99n] = C$99t.bytes === String ? String.fromCharCode.apply(String, C$99i.typeDefault) : Array.prototype.slice.call(C$99i.typeDefault).join("*..*").split("*..*") : C$99r[C$99n] = C$99i.typeDefault;
        }for (C$99u = 0; C$99u < C$99y.length; ++C$99u) {
          C$99n = (C$99i = C$99y[C$99u]).name;var C$99h = C$99d._fieldsArray.indexOf(C$99i);var C$99c;var C$99f;if (C$99i.map) {
            if (C$99e[C$99n] && (C$99c = Object.keys(C$99e[C$99n]).length)) for (C$99r[C$99n] = {}, C$99f = 0; C$99f < C$99c.length; ++C$99f) valuePartial_toObject(C$99i, C$99h, C$99n, C$99g.merge(C$99g.copy(C$99p), { m: C$99e, d: C$99r, ksi: C$99c[C$99f], o: C$99t }));
          } else if (C$99i.repeated) {
            if (C$99e[C$99n] && C$99e[C$99n].length) for (C$99r[C$99n] = [], C$99f = 0; C$99f < C$99e[C$99n].length; ++C$99f) valuePartial_toObject(C$99i, C$99h, C$99n, C$99g.merge(C$99g.copy(C$99p), { m: C$99e, d: C$99r, ksi: C$99f, o: C$99t }));
          } else null != C$99e[C$99n] && C$99e.hasOwnProperty(C$99n) && valuePartial_toObject(C$99i, C$99h, C$99n, C$99g.merge(C$99g.copy(C$99p), { m: C$99e, d: C$99r, o: C$99t })), C$99i.partOf && C$99t.oneofs && (C$99r[C$99i.partOf.name] = C$99n);
        }return C$99r;
      } : function () {
        return {};
      };
    };
  };
}, function (C$99e, C$99t, C$99r) {
  C$99e.exports = function () {
    var C$99i = {};function load(C$99e, C$99t, C$99r) {
      if (typeof C$99t === "function") {
        C$99r = C$99t;C$99t = new C$99i.Root();
      } else if (!C$99t) C$99t = new C$99i.Root();return C$99t.load(C$99e, C$99r);
    }function loadSync(C$99e, C$99t) {
      if (!C$99t) C$99t = new C$99i.Root();return C$99t.loadSync(C$99e);
    }function parseFromPbString(C$99e, C$99t, C$99r) {
      if (typeof C$99t === "function") {
        C$99r = C$99t;C$99t = new C$99i.Root();
      } else if (!C$99t) C$99t = new C$99i.Root();return C$99t.parseFromPbString(C$99e, C$99r);
    }function configure() {
      C$99i.converter._configure();C$99i.decoder._configure();C$99i.encoder._configure();C$99i.Field._configure();C$99i.MapField._configure();C$99i.Message._configure();C$99i.Namespace._configure();C$99i.Method._configure();C$99i.ReflectionObject._configure();C$99i.OneOf._configure();C$99i.parse._configure();C$99i.Reader._configure();C$99i.Root._configure();C$99i.Service._configure();C$99i.verifier._configure();C$99i.Type._configure();C$99i.types._configure();C$99i.wrappers._configure();C$99i.Writer._configure();
    }if ((window.protobuf = C$99i).build = "minimal", C$99i.Writer = C$99r(15), C$99i.encoder = C$99r(24), C$99i.Reader = C$99r(22), C$99i.util = C$99r(0), C$99i.rpc = C$99r(20), C$99i.roots = C$99r(16), C$99i.verifier = C$99r(23), C$99i.tokenize = C$99r(19), C$99i.parse = C$99r(18), C$99i.common = C$99r(21), C$99i.ReflectionObject = C$99r(4), C$99i.Namespace = C$99r(6), C$99i.Root = C$99r(9), C$99i.Enum = C$99r(1), C$99i.Type = C$99r(3), C$99i.Field = C$99r(2), C$99i.OneOf = C$99r(7), C$99i.MapField = C$99r(12), C$99i.Service = C$99r(10), C$99i.Method = C$99r(13), C$99i.converter = C$99r(27), C$99i.decoder = C$99r(25), C$99i.Message = C$99r(14), C$99i.wrappers = C$99r(26), C$99i.types = C$99r(5), C$99i.util = C$99r(0), C$99i.configure = configure, C$99i.load = load, C$99i.loadSync = loadSync, C$99i.parseFromPbString = parseFromPbString, configure(), arguments && arguments.length) for (var C$99e = 0; C$99e < arguments.length; C$99e++) {
      var C$99t = arguments[C$99e];if (C$99t.hasOwnProperty("exports")) {
        C$99t.exports = C$99i;return;
      }
    }return C$99i;
  }();
}, function (C$99e, C$99t) {
  C$99e.exports = Long;var C$99c = null;try {
    C$99c = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
  } catch (C$99e) {}function Long(C$99e, C$99t, C$99r) {
    this.low = 0 | C$99e, this.high = 0 | C$99t, this.unsigned = !!C$99r;
  }function isLong(C$99e) {
    return !0 === (C$99e && C$99e.__isLong__);
  }Object.defineProperty(Long.prototype, "__isLong__", { value: !0 }), Long.isLong = isLong;var C$99o = {};var C$99s = {};function fromInt(C$99e, C$99t) {
    var C$99r, C$99i, C$99n;return C$99t ? (C$99n = 0 <= (C$99e >>>= 0) && C$99e < 256) && (C$99i = C$99s[C$99e]) ? C$99i : (C$99r = fromBits(C$99e, (0 | C$99e) < 0 ? -1 : 0, !0), C$99n && (C$99s[C$99e] = C$99r), C$99r) : (C$99n = -128 <= (C$99e |= 0) && C$99e < 128) && (C$99i = C$99o[C$99e]) ? C$99i : (C$99r = fromBits(C$99e, C$99e < 0 ? -1 : 0, !1), C$99n && (C$99o[C$99e] = C$99r), C$99r);
  }function fromNumber(C$99e, C$99t) {
    if (isNaN(C$99e)) return C$99t ? C$99u : C$99p;if (C$99t) {
      if (C$99e < 0) return C$99u;if (C$99i <= C$99e) return C$99g;
    } else {
      if (C$99e <= -C$99n) return C$99d;if (C$99n <= C$99e + 1) return C$99a;
    }return C$99e < 0 ? fromNumber(-C$99e, C$99t).neg() : fromBits(C$99e % C$99r | 0, C$99e / C$99r | 0, C$99t);
  }function fromBits(C$99e, C$99t, C$99r) {
    return new Long(C$99e, C$99t, C$99r);
  }Long.fromInt = fromInt, Long.fromNumber = fromNumber, Long.fromBits = fromBits;var C$99f = Math.pow;function fromString(C$99e, C$99t, C$99r) {
    if (0 === C$99e.length) throw Error("empty string");if ("NaN" === C$99e || "Infinity" === C$99e || "+Infinity" === C$99e || "-Infinity" === C$99e) return C$99p;if (C$99t = "number" == typeof C$99t ? (C$99r = C$99t, !1) : !!C$99t, (C$99r = C$99r || 10) < 2 || 36 < C$99r) throw RangeError("radix");var C$99i;if (0 < (C$99i = C$99e.indexOf("-"))) throw Error("interior hyphen");if (0 === C$99i) return fromString(C$99e.substring(1), C$99t, C$99r).neg();var C$99n = fromNumber(C$99f(C$99r, 8));var C$99o = C$99p;for (var C$99s = 0; C$99s < C$99e.length; C$99s += 8) {
      var C$99a = Math.min(8, C$99e.length - C$99s),
          C$99u = parseInt(C$99e.substring(C$99s, C$99s + C$99a), C$99r);C$99o = C$99a < 8 ? (C$99a = fromNumber(C$99f(C$99r, C$99a)), C$99o.mul(C$99a).add(fromNumber(C$99u))) : (C$99o = C$99o.mul(C$99n)).add(fromNumber(C$99u));
    }return C$99o.unsigned = C$99t, C$99o;
  }function fromValue(C$99e, C$99t) {
    return "number" == typeof C$99e ? fromNumber(C$99e, C$99t) : "string" == typeof C$99e ? fromString(C$99e, C$99t) : fromBits(C$99e.low, C$99e.high, "boolean" == typeof C$99t ? C$99t : C$99e.unsigned);
  }Long.fromString = fromString, Long.fromValue = fromValue;var C$99r = 4294967296;var C$99i = C$99r * C$99r;var C$99n = C$99i / 2;var C$99y = fromInt(1 << 24);var C$99p = fromInt(0);Long.ZERO = C$99p;var C$99u = fromInt(0, !0);Long.UZERO = C$99u;var C$99l = fromInt(1);Long.ONE = C$99l;var C$99h = fromInt(1, !0);Long.UONE = C$99h;var C$99v = fromInt(-1);Long.NEG_ONE = C$99v;var C$99a = new Long(-1, 2147483647, !1);Long.MAX_VALUE = C$99a;var C$99g = new Long(-1, -1, !0);Long.MAX_UNSIGNED_VALUE = C$99g;var C$99d = new Long(0, -2147483648, !1);Long.MIN_VALUE = C$99d;C$99e = Long.prototype;C$99e.toInt = function () {
    return this.unsigned ? this.low >>> 0 : this.low;
  }, C$99e.toNumber = function () {
    return this.unsigned ? (this.high >>> 0) * C$99r + (this.low >>> 0) : this.high * C$99r + (this.low >>> 0);
  }, C$99e.toString = function (C$99e) {
    if ((C$99e = C$99e || 10) < 2 || 36 < C$99e) throw RangeError("radix");if (this.isZero()) return "0";var C$99t, C$99r;if (this.isNegative()) return this.eq(C$99d) ? (C$99r = fromNumber(C$99e), C$99r = (C$99t = this.div(C$99r)).mul(C$99r).sub(this), C$99t.toString(C$99e) + C$99r.toInt().toString(C$99e)) : "-" + this.neg().toString(C$99e);var C$99i = fromNumber(C$99f(C$99e, 6), this.unsigned),
        C$99n = this;var C$99o = "";for (;;) {
      var C$99s = C$99n.div(C$99i),
          C$99a = (C$99n.sub(C$99s.mul(C$99i)).toInt() >>> 0).toString(C$99e);if ((C$99n = C$99s).isZero()) return C$99a + C$99o;for (; C$99a.length < 6;) C$99a = "0" + C$99a;C$99o = "" + C$99a + C$99o;
    }
  }, C$99e.getHighBits = function () {
    return this.high;
  }, C$99e.getHighBitsUnsigned = function () {
    return this.high >>> 0;
  }, C$99e.getLowBits = function () {
    return this.low;
  }, C$99e.getLowBitsUnsigned = function () {
    return this.low >>> 0;
  }, C$99e.getNumBitsAbs = function () {
    if (this.isNegative()) return this.eq(C$99d) ? 64 : this.neg().getNumBitsAbs();var C$99e = 0 != this.high ? this.high : this.low;for (var C$99t = 31; 0 < C$99t && 0 == (C$99e & 1 << C$99t); C$99t--);return 0 != this.high ? C$99t + 33 : C$99t + 1;
  }, C$99e.isZero = function () {
    return 0 === this.high && 0 === this.low;
  }, C$99e.eqz = C$99e.isZero, C$99e.isNegative = function () {
    return !this.unsigned && this.high < 0;
  }, C$99e.isPositive = function () {
    return this.unsigned || 0 <= this.high;
  }, C$99e.isOdd = function () {
    return 1 == (1 & this.low);
  }, C$99e.isEven = function () {
    return 0 == (1 & this.low);
  }, C$99e.equals = function (C$99e) {
    return isLong(C$99e) || (C$99e = fromValue(C$99e)), (this.unsigned === C$99e.unsigned || this.high >>> 31 != 1 || C$99e.high >>> 31 != 1) && this.high === C$99e.high && this.low === C$99e.low;
  }, C$99e.eq = C$99e.equals, C$99e.notEquals = function (C$99e) {
    return !this.eq(C$99e);
  }, C$99e.neq = C$99e.notEquals, C$99e.ne = C$99e.notEquals, C$99e.lessThan = function (C$99e) {
    return this.comp(C$99e) < 0;
  }, C$99e.lt = C$99e.lessThan, C$99e.lessThanOrEqual = function (C$99e) {
    return this.comp(C$99e) <= 0;
  }, C$99e.lte = C$99e.lessThanOrEqual, C$99e.le = C$99e.lessThanOrEqual, C$99e.greaterThan = function (C$99e) {
    return 0 < this.comp(C$99e);
  }, C$99e.gt = C$99e.greaterThan, C$99e.greaterThanOrEqual = function (C$99e) {
    return 0 <= this.comp(C$99e);
  }, C$99e.gte = C$99e.greaterThanOrEqual, C$99e.ge = C$99e.greaterThanOrEqual, C$99e.compare = function (C$99e) {
    if (isLong(C$99e) || (C$99e = fromValue(C$99e)), this.eq(C$99e)) return 0;var C$99t = this.isNegative(),
        C$99r = C$99e.isNegative();return C$99t && !C$99r ? -1 : !C$99t && C$99r ? 1 : this.unsigned ? C$99e.high >>> 0 > this.high >>> 0 || C$99e.high === this.high && C$99e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(C$99e).isNegative() ? -1 : 1;
  }, C$99e.comp = C$99e.compare, C$99e.negate = function () {
    return !this.unsigned && this.eq(C$99d) ? C$99d : this.not().add(C$99l);
  }, C$99e.neg = C$99e.negate, C$99e.add = function (C$99e) {
    isLong(C$99e) || (C$99e = fromValue(C$99e));var C$99t = this.high >>> 16;var C$99r = 65535 & this.high;var C$99i = this.low >>> 16;var C$99n = 65535 & this.low;var C$99o = C$99e.high >>> 16;var C$99s = 65535 & C$99e.high;var C$99l = C$99e.low >>> 16;var C$99h = 0,
        C$99a = 0,
        C$99u = 0,
        C$99f = 0;return C$99a += (C$99u = C$99u + ((C$99f += C$99n + (65535 & C$99e.low)) >>> 16) + (C$99i + C$99l)) >>> 16, fromBits((C$99u &= 65535) << 16 | (C$99f &= 65535), ((C$99h += (C$99a += C$99r + C$99s) >>> 16) + (C$99t + C$99o) & 65535) << 16 | (C$99a &= 65535), this.unsigned);
  }, C$99e.subtract = function (C$99e) {
    return isLong(C$99e) || (C$99e = fromValue(C$99e)), this.add(C$99e.neg());
  }, C$99e.sub = C$99e.subtract, C$99e.multiply = function (C$99e) {
    if (this.isZero()) return C$99p;if (isLong(C$99e) || (C$99e = fromValue(C$99e)), C$99c) return fromBits(C$99c.mul(this.low, this.high, C$99e.low, C$99e.high), C$99c.get_high(), this.unsigned);if (C$99e.isZero()) return C$99p;if (this.eq(C$99d)) return C$99e.isOdd() ? C$99d : C$99p;if (C$99e.eq(C$99d)) return this.isOdd() ? C$99d : C$99p;if (this.isNegative()) return C$99e.isNegative() ? this.neg().mul(C$99e.neg()) : this.neg().mul(C$99e).neg();if (C$99e.isNegative()) return this.mul(C$99e.neg()).neg();if (this.lt(C$99y) && C$99e.lt(C$99y)) return fromNumber(this.toNumber() * C$99e.toNumber(), this.unsigned);var C$99t = this.high >>> 16;var C$99r = 65535 & this.high;var C$99i = this.low >>> 16;var C$99n = 65535 & this.low;var C$99l = C$99e.high >>> 16;var C$99o = 65535 & C$99e.high;var C$99s = C$99e.low >>> 16;C$99e = 65535 & C$99e.low;var C$99h = 0,
        C$99a = 0,
        C$99u = 0,
        C$99f = 0;return C$99a = C$99a + ((C$99u = C$99u + ((C$99f += C$99n * C$99e) >>> 16) + C$99i * C$99e) >>> 16) + ((C$99u = (C$99u & 65535) + C$99n * C$99s) >>> 16), fromBits((C$99u &= 65535) << 16 | (C$99f &= 65535), ((C$99h += (C$99a += C$99r * C$99e) >>> 16) + ((C$99a = (C$99a & 65535) + C$99i * C$99s) >>> 16) + ((C$99a = (C$99a & 65535) + C$99n * C$99o) >>> 16) + (C$99t * C$99e + C$99r * C$99s + C$99i * C$99o + C$99n * C$99l) & 65535) << 16 | (C$99a &= 65535), this.unsigned);
  }, C$99e.mul = C$99e.multiply, C$99e.divide = function (C$99e) {
    if ((C$99e = isLong(C$99e) ? C$99e : fromValue(C$99e)).isZero()) throw Error("division by zero");if (C$99c) return this.unsigned || -2147483648 !== this.high || -1 !== C$99e.low || -1 !== C$99e.high ? fromBits((this.unsigned ? C$99c.div_u : C$99c.div_s)(this.low, this.high, C$99e.low, C$99e.high), C$99c.get_high(), this.unsigned) : this;if (this.isZero()) return this.unsigned ? C$99u : C$99p;var C$99t, C$99r, C$99i;if (this.unsigned) {
      if ((C$99e = C$99e.unsigned ? C$99e : C$99e.toUnsigned()).gt(this)) return C$99u;if (C$99e.gt(this.shru(1))) return C$99h;C$99i = C$99u;
    } else {
      if (this.eq(C$99d)) return C$99e.eq(C$99l) || C$99e.eq(C$99v) ? C$99d : C$99e.eq(C$99d) ? C$99l : (C$99t = this.shr(1).div(C$99e).shl(1)).eq(C$99p) ? C$99e.isNegative() ? C$99l : C$99v : (C$99r = this.sub(C$99e.mul(C$99t)), C$99t.add(C$99r.div(C$99e)));else if (C$99e.eq(C$99d)) return this.unsigned ? C$99u : C$99p;if (this.isNegative()) return C$99e.isNegative() ? this.neg().div(C$99e.neg()) : this.neg().div(C$99e).neg();if (C$99e.isNegative()) return this.div(C$99e.neg()).neg();C$99i = C$99p;
    }for (C$99r = this; C$99r.gte(C$99e);) {
      C$99t = Math.max(1, Math.floor(C$99r.toNumber() / C$99e.toNumber()));var C$99n = Math.ceil(Math.log(C$99t) / Math.LN2),
          C$99o = C$99n <= 48 ? 1 : C$99f(2, C$99n - 48),
          C$99s = fromNumber(C$99t),
          C$99a = C$99s.mul(C$99e);for (; C$99a.isNegative() || C$99a.gt(C$99r);) C$99a = (C$99s = fromNumber(C$99t -= C$99o, this.unsigned)).mul(C$99e);C$99s.isZero() && (C$99s = C$99l), C$99i = C$99i.add(C$99s), C$99r = C$99r.sub(C$99a);
    }return C$99i;
  }, C$99e.div = C$99e.divide, C$99e.modulo = function (C$99e) {
    return isLong(C$99e) || (C$99e = fromValue(C$99e)), C$99c ? fromBits((this.unsigned ? C$99c.rem_u : C$99c.rem_s)(this.low, this.high, C$99e.low, C$99e.high), C$99c.get_high(), this.unsigned) : this.sub(this.div(C$99e).mul(C$99e));
  }, C$99e.mod = C$99e.modulo, C$99e.rem = C$99e.modulo, C$99e.not = function () {
    return fromBits(~this.low, ~this.high, this.unsigned);
  }, C$99e.and = function (C$99e) {
    return isLong(C$99e) || (C$99e = fromValue(C$99e)), fromBits(this.low & C$99e.low, this.high & C$99e.high, this.unsigned);
  }, C$99e.or = function (C$99e) {
    return isLong(C$99e) || (C$99e = fromValue(C$99e)), fromBits(this.low | C$99e.low, this.high | C$99e.high, this.unsigned);
  }, C$99e.xor = function (C$99e) {
    return isLong(C$99e) || (C$99e = fromValue(C$99e)), fromBits(this.low ^ C$99e.low, this.high ^ C$99e.high, this.unsigned);
  }, C$99e.shiftLeft = function (C$99e) {
    return isLong(C$99e) && (C$99e = C$99e.toInt()), 0 == (C$99e &= 63) ? this : C$99e < 32 ? fromBits(this.low << C$99e, this.high << C$99e | this.low >>> 32 - C$99e, this.unsigned) : fromBits(0, this.low << C$99e - 32, this.unsigned);
  }, C$99e.shl = C$99e.shiftLeft, C$99e.shiftRight = function (C$99e) {
    return isLong(C$99e) && (C$99e = C$99e.toInt()), 0 == (C$99e &= 63) ? this : C$99e < 32 ? fromBits(this.low >>> C$99e | this.high << 32 - C$99e, this.high >> C$99e, this.unsigned) : fromBits(this.high >> C$99e - 32, 0 <= this.high ? 0 : -1, this.unsigned);
  }, C$99e.shr = C$99e.shiftRight, C$99e.shiftRightUnsigned = function (C$99e) {
    var C$99t;return isLong(C$99e) && (C$99e = C$99e.toInt()), 0 === (C$99e &= 63) ? this : (C$99t = this.high, C$99e < 32 ? fromBits(this.low >>> C$99e | C$99t << 32 - C$99e, C$99t >>> C$99e, this.unsigned) : fromBits(32 === C$99e ? C$99t : C$99t >>> C$99e - 32, 0, this.unsigned));
  }, C$99e.shru = C$99e.shiftRightUnsigned, C$99e.shr_u = C$99e.shiftRightUnsigned, C$99e.toSigned = function () {
    return this.unsigned ? fromBits(this.low, this.high, !1) : this;
  }, C$99e.toUnsigned = function () {
    return this.unsigned ? this : fromBits(this.low, this.high, !0);
  }, C$99e.toBytes = function (C$99e) {
    return C$99e ? this.toBytesLE() : this.toBytesBE();
  }, C$99e.toBytesLE = function () {
    var C$99e = this.high,
        C$99t = this.low;return [255 & C$99t, C$99t >>> 8 & 255, C$99t >>> 16 & 255, C$99t >>> 24, 255 & C$99e, C$99e >>> 8 & 255, C$99e >>> 16 & 255, C$99e >>> 24];
  }, C$99e.toBytesBE = function () {
    var C$99e = this.high,
        C$99t = this.low;return [C$99e >>> 24, C$99e >>> 16 & 255, C$99e >>> 8 & 255, 255 & C$99e, C$99t >>> 24, C$99t >>> 16 & 255, C$99t >>> 8 & 255, 255 & C$99t];
  }, Long.fromBytes = function (C$99e, C$99t, C$99r) {
    return C$99r ? Long.fromBytesLE(C$99e, C$99t) : Long.fromBytesBE(C$99e, C$99t);
  }, Long.fromBytesLE = function (C$99e, C$99t) {
    return new Long(C$99e[0] | C$99e[1] << 8 | C$99e[2] << 16 | C$99e[3] << 24, C$99e[4] | C$99e[5] << 8 | C$99e[6] << 16 | C$99e[7] << 24, C$99t);
  }, Long.fromBytesBE = function (C$99e, C$99t) {
    return new Long(C$99e[4] << 24 | C$99e[5] << 16 | C$99e[6] << 8 | C$99e[7], C$99e[0] << 24 | C$99e[1] << 16 | C$99e[2] << 8 | C$99e[3], C$99t);
  };
}, function (C$99e, C$99t) {
  C$99e.exports = function (C$99t, C$99r, C$99e) {
    var C$99i = C$99e || 8192;var C$99n = C$99i >>> 1;var C$99o = null;var C$99s = C$99i;return function (C$99e) {
      if (C$99e < 1 || C$99n < C$99e) return C$99t(C$99e);C$99i < C$99s + C$99e && (C$99o = C$99t(C$99i), C$99s = 0);C$99e = C$99r.call(C$99o, C$99s, C$99s += C$99e);return 7 & C$99s && (C$99s = 1 + (7 | C$99s)), C$99e;
    };
  };
}, function (C$99e, C$99t) {
  function factory(C$99e) {
    function writeFloat_ieee754(C$99e, C$99t, C$99r, C$99i) {
      var C$99n = C$99t < 0 ? 1 : 0;0 === (C$99t = C$99n ? -C$99t : C$99t) ? C$99e(0 < 1 / C$99t ? 0 : 2147483648, C$99r, C$99i) : isNaN(C$99t) ? C$99e(2143289344, C$99r, C$99i) : C$99e(34028234663852886e22 < C$99t ? (C$99n << 31 | 2139095040) >>> 0 : C$99t < 11754943508222875e-54 ? (C$99n << 31 | Math.round(C$99t / 1401298464324817e-60)) >>> 0 : (C$99n << 31 | (C$99e = Math.floor(Math.log(C$99t) / Math.LN2)) + 127 << 23 | 8388607 & Math.round(C$99t * Math.pow(2, -C$99e) * 8388608)) >>> 0, C$99r, C$99i);
    }function readFloat_ieee754(C$99e, C$99t, C$99r) {
      C$99e = C$99e(C$99t, C$99r), C$99t = 2 * (C$99e >> 31) + 1, C$99r = C$99e >>> 23 & 255, C$99e &= 8388607;return 255 == C$99r ? C$99e ? NaN : 1 / 0 * C$99t : 0 == C$99r ? 1401298464324817e-60 * C$99t * C$99e : C$99t * Math.pow(2, C$99r - 150) * (8388608 + C$99e);
    }function writeFloat_f32_cpy(C$99e, C$99t, C$99r) {
      C$99i[0] = C$99e, C$99t[C$99r] = C$99n[0], C$99t[C$99r + 1] = C$99n[1], C$99t[C$99r + 2] = C$99n[2], C$99t[C$99r + 3] = C$99n[3];
    }function writeFloat_f32_rev(C$99e, C$99t, C$99r) {
      C$99i[0] = C$99e, C$99t[C$99r] = C$99n[3], C$99t[C$99r + 1] = C$99n[2], C$99t[C$99r + 2] = C$99n[1], C$99t[C$99r + 3] = C$99n[0];
    }function readFloat_f32_cpy(C$99e, C$99t) {
      return C$99n[0] = C$99e[C$99t], C$99n[1] = C$99e[C$99t + 1], C$99n[2] = C$99e[C$99t + 2], C$99n[3] = C$99e[C$99t + 3], C$99i[0];
    }function readFloat_f32_rev(C$99e, C$99t) {
      return C$99n[3] = C$99e[C$99t], C$99n[2] = C$99e[C$99t + 1], C$99n[1] = C$99e[C$99t + 2], C$99n[0] = C$99e[C$99t + 3], C$99i[0];
    }var C$99i, C$99n;function writeDouble_ieee754(C$99e, C$99t, C$99r, C$99i, C$99n, C$99o) {
      var C$99s = C$99i < 0 ? 1 : 0;var C$99a, C$99u;0 === (C$99i = C$99s ? -C$99i : C$99i) ? (C$99e(0, C$99n, C$99o + C$99t), C$99e(0 < 1 / C$99i ? 0 : 2147483648, C$99n, C$99o + C$99r)) : isNaN(C$99i) ? (C$99e(0, C$99n, C$99o + C$99t), C$99e(2146959360, C$99n, C$99o + C$99r)) : 17976931348623157e292 < C$99i ? (C$99e(0, C$99n, C$99o + C$99t), C$99e((C$99s << 31 | 2146435072) >>> 0, C$99n, C$99o + C$99r)) : C$99i < 22250738585072014e-324 ? (C$99e((C$99a = C$99i / 5e-324) >>> 0, C$99n, C$99o + C$99t), C$99e((C$99s << 31 | C$99a / 4294967296) >>> 0, C$99n, C$99o + C$99r)) : (1024 === (C$99u = Math.floor(Math.log(C$99i) / Math.LN2)) && (C$99u = 1023), C$99e(4503599627370496 * (C$99a = C$99i * Math.pow(2, -C$99u)) >>> 0, C$99n, C$99o + C$99t), C$99e((C$99s << 31 | C$99u + 1023 << 20 | 1048576 * C$99a & 1048575) >>> 0, C$99n, C$99o + C$99r));
    }function readDouble_ieee754(C$99e, C$99t, C$99r, C$99i, C$99n) {
      C$99t = C$99e(C$99i, C$99n + C$99t), C$99e = C$99e(C$99i, C$99n + C$99r);C$99i = 2 * (C$99e >> 31) + 1, C$99n = C$99e >>> 20 & 2047, C$99r = 4294967296 * (1048575 & C$99e) + C$99t;return 2047 == C$99n ? C$99r ? NaN : 1 / 0 * C$99i : 0 == C$99n ? 5e-324 * C$99i * C$99r : C$99i * Math.pow(2, C$99n - 1075) * (C$99r + 4503599627370496);
    }function writeDouble_f64_cpy(C$99e, C$99t, C$99r) {
      C$99o[0] = C$99e, C$99t[C$99r] = C$99s[0], C$99t[C$99r + 1] = C$99s[1], C$99t[C$99r + 2] = C$99s[2], C$99t[C$99r + 3] = C$99s[3], C$99t[C$99r + 4] = C$99s[4], C$99t[C$99r + 5] = C$99s[5], C$99t[C$99r + 6] = C$99s[6], C$99t[C$99r + 7] = C$99s[7];
    }function writeDouble_f64_rev(C$99e, C$99t, C$99r) {
      C$99o[0] = C$99e, C$99t[C$99r] = C$99s[7], C$99t[C$99r + 1] = C$99s[6], C$99t[C$99r + 2] = C$99s[5], C$99t[C$99r + 3] = C$99s[4], C$99t[C$99r + 4] = C$99s[3], C$99t[C$99r + 5] = C$99s[2], C$99t[C$99r + 6] = C$99s[1], C$99t[C$99r + 7] = C$99s[0];
    }function readDouble_f64_cpy(C$99e, C$99t) {
      return C$99s[0] = C$99e[C$99t], C$99s[1] = C$99e[C$99t + 1], C$99s[2] = C$99e[C$99t + 2], C$99s[3] = C$99e[C$99t + 3], C$99s[4] = C$99e[C$99t + 4], C$99s[5] = C$99e[C$99t + 5], C$99s[6] = C$99e[C$99t + 6], C$99s[7] = C$99e[C$99t + 7], C$99o[0];
    }function readDouble_f64_rev(C$99e, C$99t) {
      return C$99s[7] = C$99e[C$99t], C$99s[6] = C$99e[C$99t + 1], C$99s[5] = C$99e[C$99t + 2], C$99s[4] = C$99e[C$99t + 3], C$99s[3] = C$99e[C$99t + 4], C$99s[2] = C$99e[C$99t + 5], C$99s[1] = C$99e[C$99t + 6], C$99s[0] = C$99e[C$99t + 7], C$99o[0];
    }var C$99o, C$99s, C$99t;return "undefined" != typeof Float32Array ? (C$99i = new Float32Array([-0]), C$99n = new Uint8Array(C$99i.buffer), C$99t = 128 === C$99n[3], C$99e.writeFloatLE = C$99t ? writeFloat_f32_cpy : writeFloat_f32_rev, C$99e.writeFloatBE = C$99t ? writeFloat_f32_rev : writeFloat_f32_cpy, C$99e.readFloatLE = C$99t ? readFloat_f32_cpy : readFloat_f32_rev, C$99e.readFloatBE = C$99t ? readFloat_f32_rev : readFloat_f32_cpy) : (C$99e.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE), C$99e.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE), C$99e.readFloatLE = readFloat_ieee754.bind(null, readUintLE), C$99e.readFloatBE = readFloat_ieee754.bind(null, readUintBE)), "undefined" != typeof Float64Array ? (C$99o = new Float64Array([-0]), C$99s = new Uint8Array(C$99o.buffer), C$99t = 128 === C$99s[7], C$99e.writeDoubleLE = C$99t ? writeDouble_f64_cpy : writeDouble_f64_rev, C$99e.writeDoubleBE = C$99t ? writeDouble_f64_rev : writeDouble_f64_cpy, C$99e.readDoubleLE = C$99t ? readDouble_f64_cpy : readDouble_f64_rev, C$99e.readDoubleBE = C$99t ? readDouble_f64_rev : readDouble_f64_cpy) : (C$99e.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4), C$99e.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0), C$99e.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4), C$99e.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0)), C$99e;
  }function writeUintLE(C$99e, C$99t, C$99r) {
    C$99t[C$99r] = 255 & C$99e, C$99t[C$99r + 1] = C$99e >>> 8 & 255, C$99t[C$99r + 2] = C$99e >>> 16 & 255, C$99t[C$99r + 3] = C$99e >>> 24;
  }function writeUintBE(C$99e, C$99t, C$99r) {
    C$99t[C$99r] = C$99e >>> 24, C$99t[C$99r + 1] = C$99e >>> 16 & 255, C$99t[C$99r + 2] = C$99e >>> 8 & 255, C$99t[C$99r + 3] = 255 & C$99e;
  }function readUintLE(C$99e, C$99t) {
    return (C$99e[C$99t] | C$99e[C$99t + 1] << 8 | C$99e[C$99t + 2] << 16 | C$99e[C$99t + 3] << 24) >>> 0;
  }function readUintBE(C$99e, C$99t) {
    return (C$99e[C$99t] << 24 | C$99e[C$99t + 1] << 16 | C$99e[C$99t + 2] << 8 | C$99e[C$99t + 3]) >>> 0;
  }C$99e.exports = factory(factory);
}, function (C$99e, C$99t, C$99r) {
  "use strict";
  C$99e.exports = function (C$99e, C$99t) {
    var C$99r = new Array(arguments.length - 1),
        C$99o = 0,
        C$99i = 2,
        C$99s = !0;for (; C$99i < arguments.length;) C$99r[C$99o++] = arguments[C$99i++];return new Promise(function (C$99i, C$99n) {
      C$99r[C$99o] = function (C$99e) {
        if (C$99s) if (C$99s = !1, C$99e) C$99n(C$99e);else {
          var C$99t = new Array(arguments.length - 1),
              C$99r = 0;for (; C$99r < C$99t.length;) C$99t[C$99r++] = arguments[C$99r];C$99i.apply(null, C$99t);
        }
      };try {
        C$99e.apply(C$99t || null, C$99r);
      } catch (C$99e) {
        C$99s && (C$99s = !1, C$99n(C$99e));
      }
    });
  };
}, function (C$99e, C$99t, C$99r) {
  "use strict";
  function EventEmitter() {
    this._listeners = {};
  }(C$99e.exports = EventEmitter).prototype.on = function (C$99e, C$99t, C$99r) {
    return (this._listeners[C$99e] || (this._listeners[C$99e] = [])).push({ fn: C$99t, ctx: C$99r || this }), this;
  }, EventEmitter.prototype.off = function (C$99e, C$99t) {
    if (void 0 === C$99e) this._listeners = {};else if (void 0 === C$99t) this._listeners[C$99e] = [];else {
      var C$99r = this._listeners[C$99e];for (var C$99i = 0; C$99i < C$99r.length;) C$99r[C$99i].fn === C$99t ? C$99r.splice(C$99i, 1) : ++C$99i;
    }return this;
  }, EventEmitter.prototype.emit = function (C$99e) {
    var C$99t = this._listeners[C$99e];if (C$99t) {
      var C$99r = [],
          C$99i = 1;for (; C$99i < arguments.length;) C$99r.push(arguments[C$99i++]);for (C$99i = 0; C$99i < C$99t.length;) C$99t[C$99i].fn.apply(C$99t[C$99i++].ctx, C$99r);
    }return this;
  };
}, function (C$99e, C$99t) {
  C$99e = C$99e.exports;var C$99n = C$99e.isAbsolute = function (C$99e) {
    return (/^(?:\/|\w+:)/.test(C$99e)
    );
  };var C$99i = C$99e.normalize = function (C$99e) {
    var C$99t = (C$99e = C$99e.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/"),
        C$99r = C$99n(C$99e),
        C$99e = "";C$99r && (C$99e = C$99t.shift() + "/");for (var C$99i = 0; C$99i < C$99t.length;) ".." === C$99t[C$99i] ? 0 < C$99i && ".." !== C$99t[C$99i - 1] ? C$99t.splice(--C$99i, 2) : C$99r ? C$99t.splice(C$99i, 1) : ++C$99i : "." === C$99t[C$99i] ? C$99t.splice(C$99i, 1) : ++C$99i;return C$99e + C$99t.join("/");
  };C$99e.resolve = function (C$99e, C$99t, C$99r) {
    return C$99r || (C$99t = C$99i(C$99t)), !C$99n(C$99t) && (C$99e = (C$99e = C$99r ? C$99e : C$99i(C$99e)).replace(/(?:\/|^)[^/]+$/, "")).length ? C$99i(C$99e + "/" + C$99t) : C$99t;
  };
}]);