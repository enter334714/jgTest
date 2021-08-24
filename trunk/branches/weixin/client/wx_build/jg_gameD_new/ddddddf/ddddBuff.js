!function (r) {
  var i = {};function __webpack_require__(e) {
    if (i[e]) return i[e].exports;var t = i[e] = { i: e, l: !1, exports: {} };return r[e].call(t.exports, t, t.exports, __webpack_require__), t.l = !0, t.exports;
  }__webpack_require__.m = r, __webpack_require__.c = i, __webpack_require__.d = function (e, t, r) {
    __webpack_require__.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
  }, __webpack_require__.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
  }, __webpack_require__.t = function (t, e) {
    if (1 & e && (t = __webpack_require__(t)), 8 & e) return t;if (4 & e && "object" == typeof t && t && t.__esModule) return t;var r = Object.create(null);if (__webpack_require__.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var i in t) __webpack_require__.d(r, i, function (e) {
      return t[e];
    }.bind(null, i));return r;
  }, __webpack_require__.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return __webpack_require__.d(t, "a", t), t;
  }, __webpack_require__.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 28);
}([function (e, t, r) {
  var i = e.exports;var n = r(16);i.LongBits = r(11), i.Long = r(29), i.pool = r(30), i.float = r(31), i.asPromise = r(32), i.EventEmitter = r(33), i.path = r(34), i.base64 = r(17), i.utf8 = r(8), i.compareFieldsById = function (e, t) {
    return e.id - t.id;
  }, i.toArray = function (e) {
    if (e) {
      var t = Object.keys(e),
          r = new Array(t.length),
          i = 0;for (; i < t.length;) r[i] = e[t[i++]];return r;
    }return [];
  }, i.toObject = function (e) {
    var t = {},
        r = 0;for (; r < e.length;) {
      var i = e[r++],
          n = e[r++];void 0 !== n && (t[i] = n);
    }return t;
  }, i.isString = function (e) {
    return "string" == typeof e || e instanceof String;
  };i.isReserved = function (e) {
    return (/^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e)
    );
  }, i.isObject = function (e) {
    return e && "object" == typeof e;
  }, i.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, i.oneOfGetter = function (e) {
    var r = {};for (var t = 0; t < e.length; ++t) r[e[t]] = 1;return function () {
      for (var e = Object.keys(this), t = e.length - 1; -1 < t; --t) if (1 === r[e[t]] && void 0 !== this[e[t]] && null !== this[e[t]]) return e[t];
    };
  }, i.oneOfSetter = function (r) {
    return function (e) {
      for (var t = 0; t < r.length; ++t) r[t] !== e && delete this[r[t]];
    };
  }, i.merge = function (e, t, r) {
    for (var i = Object.keys(t), n = 0; n < i.length; ++n) void 0 !== e[i[n]] && r || (e[i[n]] = t[i[n]]);return e;
  }, i.decorateType = function (e, t) {
    if (e.$type) return t && e.$type.name !== t && (i.decorateRoot.remove(e.$type), e.$type.name = t, i.decorateRoot.add(e.$type)), e.$type;Type = Type || r(3);t = new Type(t || e.name);return i.decorateRoot.add(t), t.ctor = e, Object.defineProperty(e, "$type", { value: t, enumerable: !1 }), Object.defineProperty(e.prototype, "$type", { value: t, enumerable: !1 }), t;
  }, i.emptyArray = Object.freeze ? Object.freeze([]) : [], i.emptyObject = Object.freeze ? Object.freeze({}) : {}, i.longToHash = function (e) {
    return e ? i.LongBits.from(e).toHash() : i.LongBits.zeroHash;
  }, i.copy = function (e) {
    if ("object" != typeof e) return e;var t = {};for (var r in e) t[r] = e[r];return t;
  }, i.deepCopy = function deepCopy(e) {
    if ("object" != typeof e) return e;var t = {};for (var r in e) t[r] = deepCopy(e[r]);return t;
  }, i.ProtocolError = function (e) {
    function CustomError(e, t) {
      if (!(this instanceof CustomError)) return new CustomError(e, t);Object.defineProperty(this, "message", { get: function () {
          return e;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, CustomError) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), t && merge(this, t);
    }return (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError, Object.defineProperty(CustomError.prototype, "name", { get: function () {
        return e;
      } }), CustomError.prototype.toString = function () {
      return this.name + ": " + this.message;
    }, CustomError;
  }, i.toJSONOptions = { longs: String, enums: String, bytes: String, json: !0 }, i.Buffer = null, i.newBuffer = function (e) {
    return "number" == typeof e ? new i.Array(e) : "undefined" == typeof Uint8Array ? e : new Uint8Array(e);
  }, i.stringToBytes = function (e) {
    var t = [];var r, i;r = e.length;for (var n = 0; n < r; n++) 65536 <= (i = e.charCodeAt(n)) && i <= 1114111 ? (t.push(i >> 18 & 7 | 240), t.push(i >> 12 & 63 | 128), t.push(i >> 6 & 63 | 128), t.push(63 & i | 128)) : 2048 <= i && i <= 65535 ? (t.push(i >> 12 & 15 | 224), t.push(i >> 6 & 63 | 128), t.push(63 & i | 128)) : 128 <= i && i <= 2047 ? (t.push(i >> 6 & 31 | 192), t.push(63 & i | 128)) : t.push(255 & i);return t;
  }, i.byteToString = function (e) {
    if ("string" == typeof e) return e;var t = "",
        r = e;for (var i = 0; i < r.length; i++) {
      var n = r[i].toString(2),
          o = n.match(/^1+?(?=0)/);if (o && 8 == n.length) {
        var s = o[0].length;var a = r[i].toString(2).slice(7 - s);for (var u = 1; u < s; u++) a += r[u + i].toString(2).slice(2);t += String.fromCharCode(parseInt(a, 2)), i += s - 1;
      } else t += String.fromCharCode(r[i]);
    }return t;
  }, i.isInteger = Number.isInteger || function (e) {
    return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
  }, Object.defineProperty(i, "decorateRoot", { get: function () {
      return n.decorated || (n.decorated = new (r(9))());
    } });
}, function (e, t, r) {
  e.exports = Enum;var a = r(4);((Enum.prototype = Object.create(a.prototype)).constructor = Enum).className = "Enum";var i = r(6);function Enum(e, t, r, i, n) {
    if (a.call(this, e, r), t && "object" != typeof t) throw TypeError("values must be an object");if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = i, this.comments = n || {}, this.reserved = void 0, t) for (var o = Object.keys(t), s = 0; s < o.length; ++s) "number" == typeof t[o[s]] && (this.valuesById[this.values[o[s]] = t[o[s]]] = o[s]);
  }Enum.fromJSON = function (e, t) {
    e = new Enum(e, t.values, t.options, t.comment, t.comments);return e.reserved = t.reserved, e;
  }, Enum.prototype.toJSON = function (e) {
    e = !!e && Boolean(e.keepComments);return util.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", e ? this.comment : void 0, "comments", e ? this.comments : void 0]);
  }, Enum.prototype.add = function (e, t, r) {
    if (!util.isString(e)) throw TypeError("name must be a string");if (!util.isInteger(t)) throw TypeError("id must be an integer");if (void 0 !== this.values[e]) throw Error("duplicate name '" + e + "' in " + this);if (this.isReservedId(t)) throw Error("id " + t + " is reserved in " + this);if (this.isReservedName(e)) throw Error("name '" + e + "' is reserved in " + this);if (void 0 !== this.valuesById[t]) {
      if (!this.options || !this.options.allow_alias) throw Error("duplicate id " + t + " in " + this);this.values[e] = t;
    } else this.valuesById[this.values[e] = t] = e;return this.comments[e] = r || null, this;
  }, Enum.prototype.remove = function (e) {
    if (!util.isString(e)) throw TypeError("name must be a string");var t = this.values[e];if (null == t) throw Error("name '" + e + "' does not exist in " + this);return delete this.valuesById[t], delete this.values[e], delete this.comments[e], this;
  }, Enum.prototype.isReservedId = function (e) {
    return i.isReservedId(this.reserved, e);
  }, Enum.prototype.isReservedName = function (e) {
    return i.isReservedName(this.reserved, e);
  };
}, function (e, t, r) {
  e.exports = Field;var a = r(4);var i, u, f;var n;((Field.prototype = Object.create(a.prototype)).constructor = Field).className = "Field";var l = /^required|optional|repeated$/;function Field(e, t, r, i, n, o, s) {
    if (f.isObject(i) ? (s = n, o = i, i = n = void 0) : f.isObject(n) && (s = o, o = n, n = void 0), a.call(this, e, o), !f.isInteger(t) || t < 0) throw TypeError("id must be a non-negative integer");if (!f.isString(r)) throw TypeError("type must be a string");if (void 0 !== i && !l.test(i = i.toString().toLowerCase())) throw TypeError("rule must be a string rule");if (void 0 !== n && !f.isString(n)) throw TypeError("extend must be a string");this.rule = i && "optional" !== i ? i : void 0, this.type = r, this.id = t, this.extend = n || void 0, this.required = "required" === i, this.optional = !this.required, this.repeated = "repeated" === i, this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = !!f.Long && void 0 !== u.long[r], this.bytes = "bytes" === r, this.resolvedType = null, this.extensionField = null, this.declaringField = null, this._packed = null, this.comment = s;
  }Field.fromJSON = function (e, t) {
    return new Field(e, t.id, t.type, t.rule, t.extend, t.options, t.comment);
  }, Object.defineProperty(Field.prototype, "packed", { get: function () {
      return null === this._packed && (this._packed = !1 !== this.getOption("packed")), this._packed;
    } }), Field.prototype.setOption = function (e, t, r) {
    return "packed" === e && (this._packed = null), a.prototype.setOption.call(this, e, t, r);
  }, Field.prototype.toJSON = function (e) {
    e = !!e && Boolean(e.keepComments);return f.toObject(["rule", "optional" !== this.rule && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", e ? this.comment : void 0]);
  }, Field.prototype.resolve = function () {
    return this.resolved ? this : (void 0 === (this.typeDefault = u.defaults[this.type]) && (this.resolvedType = (this.declaringField || this).parent.lookupTypeOrEnum(this.type), this.resolvedType instanceof n ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]), this.options && null != this.options.default && (this.typeDefault = this.options.default, this.resolvedType instanceof i && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (!0 !== this.options.packed && (void 0 === this.options.packed || !this.resolvedType || this.resolvedType instanceof i) || delete this.options.packed, Object.keys(this.options).length || (this.options = void 0)), this.long ? (this.typeDefault = f.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0)), Object.freeze && Object.freeze(this.typeDefault)) : this.bytes && "string" == typeof this.typeDefault && (f.utf8.write(this.typeDefault, e = f.newBuffer(f.utf8.length(this.typeDefault)), 0), this.typeDefault = e), this.map ? this.defaultValue = f.emptyObject : this.repeated ? this.defaultValue = f.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof n && (this.parent.ctor.prototype[this.name] = this.defaultValue), a.prototype.resolve.call(this));var e;
  }, Field.d = function (r, i, n, o) {
    return "function" == typeof i ? i = f.decorateType(i).name : i && "object" == typeof i && (i = f.decorateEnum(i).name), function (e, t) {
      f.decorateType(e.constructor).add(new Field(t, r, i, n, { default: o }));
    };
  }, Field._configure = function () {
    n = r(3), i = r(1), u = r(5), f = r(0);
  };
}, function (e, t, r) {
  e.exports = Type;var s = r(6);var a, u, f, l, n, o, h, c, p, d, y, v, g, m;function Type(e, t) {
    s.call(this, e, t), this.fields = {}, this.oneofs = void 0, this.extensions = void 0, this.reserved = void 0, this.group = void 0, this._fieldsById = null, this._fieldsArray = null, this._oneofsArray = null, this._ctor = null;
  }function clearCache(e) {
    return e._fieldsById = e._fieldsArray = e._oneofsArray = null, delete e.encode, delete e.decode, delete e.verify, e;
  }((Type.prototype = Object.create(s.prototype)).constructor = Type).className = "Type", Object.defineProperties(Type.prototype, { fieldsById: { get: function () {
        if (this._fieldsById) return this._fieldsById;this._fieldsById = {};for (var e = Object.keys(this.fields), t = 0; t < e.length; ++t) {
          var r = this.fields[e[t]],
              i = r.id;if (this._fieldsById[i]) throw Error("duplicate id " + i + " in " + this);this._fieldsById[i] = r;
        }return this._fieldsById;
      } }, fieldsArray: { get: function () {
        return this._fieldsArray || (this._fieldsArray = h.toArray(this.fields));
      } }, oneofsArray: { get: function () {
        return this._oneofsArray || (this._oneofsArray = h.toArray(this.oneofs));
      } }, ctor: { get: function () {
        return this._ctor || (this.ctor = Type.generateConstructor(this));
      }, set: function (e) {
        var t = e.prototype;t instanceof f || ((e.prototype = new f()).constructor = e, h.merge(e.prototype, t)), e.$type = e.prototype.$type = this, h.merge(e, f, !0), h.merge(e.prototype, f, !0), this._ctor = e;var r = 0;for (; r < this.fieldsArray.length; ++r) this._fieldsArray[r].resolve();var i = {};for (r = 0; r < this.oneofsArray.length; ++r) {
          var n = this._oneofsArray[r].resolve().name;var o = function (r) {
            var i = {};for (var e = 0; e < r.length; ++e) i[r[e]] = 0;return { setter: function (e) {
                if (!(r.indexOf(e) < 0)) {
                  i[e] = 1;for (var t = 0; t < r.length; ++t) r[t] !== e && delete this[r[t]];
                }
              }, getter: function () {
                for (var e = Object.keys(this), t = e.length - 1; -1 < t; --t) if (1 === i[e[t]] && void 0 !== this[e[t]] && null !== this[e[t]]) return e[t];
              } };
          }(this._oneofsArray[r].oneof);i[n] = { get: o.getter, set: o.setter };
        }r && Object.defineProperties(e.prototype, i);
      } } }), Type.generateConstructor = function (o) {
    return function (e) {
      for (var t, r = 0; r < o.fieldsArray.length; r++) (t = o._fieldsArray[r]).map ? this[t.name] = {} : t.repeated && (this[t.name] = []);if (e) for (var i = Object.keys(e), n = 0; n < i.length; ++n) null != e[i[n]] && (this[i[n]] = e[i[n]]);
    };
  }, Type.fromJSON = function (e, t) {
    var r = new Type(e, t.options);r.extensions = t.extensions, r.reserved = t.reserved;var i = Object.keys(t.fields),
        n = 0;for (; n < i.length; ++n) r.add((void 0 !== t.fields[i[n]].keyType ? m : u).fromJSON(i[n], t.fields[i[n]]));if (t.oneofs) for (i = Object.keys(t.oneofs), n = 0; n < i.length; ++n) r.add(l.fromJSON(i[n], t.oneofs[i[n]]));if (t.nested) for (i = Object.keys(t.nested), n = 0; n < i.length; ++n) {
      var o = t.nested[i[n]];r.add((void 0 !== o.id ? u : void 0 !== o.fields ? Type : void 0 !== o.values ? a : void 0 !== o.methods ? y : s).fromJSON(i[n], o));
    }return t.extensions && t.extensions.length && (r.extensions = t.extensions), t.reserved && t.reserved.length && (r.reserved = t.reserved), t.group && (r.group = !0), t.comment && (r.comment = t.comment), r;
  }, Type.prototype.toJSON = function (e) {
    var t = s.prototype.toJSON.call(this, e);var r = !!e && Boolean(e.keepComments);return { options: t && t.options || void 0, oneofs: s.arrayToJSON(this.oneofsArray, e), fields: s.arrayToJSON(this.fieldsArray.filter(function (e) {
        return !e.declaringField;
      }), e) || {}, extensions: this.extensions && this.extensions.length ? this.extensions : void 0, reserved: this.reserved && this.reserved.length ? this.reserved : void 0, group: this.group || void 0, nested: t && t.nested || void 0, comment: r ? this.comment : void 0 };
  }, Type.prototype.resolveAll = function () {
    var e = this.fieldsArray,
        t = 0;for (; t < e.length;) e[t++].resolve();var r = this.oneofsArray;for (t = 0; t < r.length;) r[t++].resolve();return s.prototype.resolveAll.call(this);
  }, Type.prototype.get = function (e) {
    return this.fields[e] || this.oneofs && this.oneofs[e] || this.nested && this.nested[e] || null;
  }, Type.prototype.add = function (e) {
    if (this.get(e.name)) throw Error("duplicate name '" + e.name + "' in " + this);if (e instanceof u && void 0 === e.extend) {
      if (this._fieldsById && this._fieldsById[e.id]) throw Error("duplicate id " + e.id + " in " + this);if (this.isReservedId(e.id)) throw Error("id " + e.id + " is reserved in " + this);if (this.isReservedName(e.name)) throw Error("name '" + e.name + "' is reserved in " + this);return e.parent && e.parent.remove(e), (this.fields[e.name] = e).message = this, e.onAdd(this), clearCache(this);
    }return e instanceof l ? (this.oneofs || (this.oneofs = {}), (this.oneofs[e.name] = e).onAdd(this), clearCache(this)) : s.prototype.add.call(this, e);
  }, Type.prototype.remove = function (e) {
    if (e instanceof u && void 0 === e.extend) {
      if (!this.fields || this.fields[e.name] !== e) throw Error(e + " is not a member of " + this);return delete this.fields[e.name], e.parent = null, e.onRemove(this), clearCache(this);
    }if (e instanceof l) {
      if (!this.oneofs || this.oneofs[e.name] !== e) throw Error(e + " is not a member of " + this);return delete this.oneofs[e.name], e.parent = null, e.onRemove(this), clearCache(this);
    }return s.prototype.remove.call(this, e);
  }, Type.prototype.isReservedId = function (e) {
    return s.isReservedId(this.reserved, e);
  }, Type.prototype.isReservedName = function (e) {
    return s.isReservedName(this.reserved, e);
  }, Type.prototype.create = function (e) {
    return new this.ctor(e);
  }, Type.prototype.setup = function () {
    var e = this.fullName,
        t = [];for (var r = 0; r < this.fieldsArray.length; ++r) t.push(this._fieldsArray[r].resolve().resolvedType);this.encode = p(this)({ Writer: n, types: t, util: h }), this.decode = d(this)({ Reader: o, types: t, util: h }), this.verify = c(this)({ types: t, util: h }), this.fromObject = g.fromObject(this)({ types: t, util: h }), this.toObject = g.toObject(this)({ types: t, util: h });var i = v[e];return i && ((e = Object.create(this)).fromObject = this.fromObject, this.fromObject = i.fromObject.bind(e), e.toObject = this.toObject, this.toObject = i.toObject.bind(e)), this;
  }, Type.prototype.encode = function (e, t) {
    return this.setup().encode(e, t);
  }, Type.prototype.encodeDelimited = function (e, t) {
    return this.encode(e, t && t.len ? t.fork() : t).ldelim();
  }, Type.prototype.decode = function (e, t) {
    return this.setup().decode(e, t);
  }, Type.prototype.decodeDelimited = function (e) {
    return e instanceof o || (e = o.create(e)), this.decode(e, e.uint32());
  }, Type.prototype.verify = function (e) {
    return this.setup().verify(e);
  }, Type.prototype.fromObject = function (e) {
    return this.setup().fromObject(e);
  }, Type.prototype.toObject = function (e, t) {
    return this.setup().toObject(e, t);
  }, Type.d = function (t) {
    return function (e) {
      h.decorateType(e, t);
    };
  }, Type._configure = function () {
    a = r(1), u = r(2), f = r(14), l = r(7), n = r(15), o = r(22), h = r(0), c = r(23), p = r(24), d = r(25), y = r(10), v = r(26), g = r(27), m = r(12);
  };
}, function (e, t, r) {
  "use strict";
  var i;var n;function ReflectionObject(e, t) {
    if (!i.isString(e)) throw TypeError("name must be a string");if (t && !i.isObject(t)) throw TypeError("options must be an object");this.options = t, this.name = e, this.parent = null, this.resolved = !1, this.comment = null, this.filename = null;
  }(e.exports = ReflectionObject).className = "ReflectionObject", Object.defineProperties(ReflectionObject.prototype, { root: { get: function () {
        var e = this;for (; null !== e.parent;) e = e.parent;return e;
      } }, fullName: { get: function () {
        var e = [this.name],
            t = this.parent;for (; t;) e.unshift(t.name), t = t.parent;return e.join(".");
      } } }), ReflectionObject.prototype.toJSON = function () {
    throw Error();
  }, ReflectionObject.prototype.onAdd = function (e) {
    this.parent && this.parent !== e && this.parent.remove(this), this.parent = e, this.resolved = !1;e = e.root;e instanceof n && e._handleAdd(this);
  }, ReflectionObject.prototype.onRemove = function (e) {
    e = e.root;e instanceof n && e._handleRemove(this), this.parent = null, this.resolved = !1;
  }, ReflectionObject.prototype.resolve = function () {
    return this.resolved || this.root instanceof n && (this.resolved = !0), this;
  }, ReflectionObject.prototype.getOption = function (e) {
    if (this.options) return this.options[e];
  }, ReflectionObject.prototype.setOption = function (e, t, r) {
    return r && this.options && void 0 !== this.options[e] || ((this.options || (this.options = {}))[e] = t), this;
  }, ReflectionObject.prototype.setOptions = function (e, t) {
    if (e) for (var r = Object.keys(e), i = 0; i < r.length; ++i) this.setOption(r[i], e[r[i]], t);return this;
  }, ReflectionObject.prototype.toString = function () {
    var e = this.constructor.className,
        t = this.fullName;return t.length ? e + " " + t : e;
  }, ReflectionObject._configure = function (e) {
    n = r(9), i = r(0);
  };
}, function (e, t, r) {
  "use strict";
  e = e.exports;var i = r(0);var n = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];function bake(e, t) {
    var r = 0,
        i = {};for (t |= 0; r < e.length;) i[n[r + t]] = e[r++];return i;
  }e.basic = bake([1, 5, 0, 0, 0, 5, 5, 0, 4, 0, 1, 1, 0, 2, 2]), e.defaults = bake([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", i.emptyArray, null]), e.long = bake([0, 0, 0, 1, 1], 7), e.mapKey = bake([0, 0, 0, 5, 5, 0, 4, 0, 1, 1, 0, 2], 2), e.packed = bake([1, 5, 0, 0, 0, 5, 5, 0, 4, 0, 1, 1, 0]), e._configure = function () {
    r(0);
  };
}, function (e, t, r) {
  e.exports = Namespace;var i = r(4);var n, o, s;var a;var u;function arrayToJSON(e, t) {
    if (e && e.length) {
      var r = {};for (var i = 0; i < e.length; ++i) r[e[i].name] = e[i].toJSON(t);return r;
    }
  }function Namespace(e, t) {
    i.call(this, e, t), this.nested = void 0, this._nestedArray = null;
  }function clearCache(e) {
    return e._nestedArray = null, e;
  }((Namespace.prototype = Object.create(i.prototype)).constructor = Namespace).className = "Namespace", Namespace.fromJSON = function (e, t) {
    return new Namespace(e, t.options).addJSON(t.nested);
  }, Namespace.arrayToJSON = arrayToJSON, Namespace.isReservedId = function (e, t) {
    if (e) for (var r = 0; r < e.length; ++r) if ("string" != typeof e[r] && e[r][0] <= t && e[r][1] >= t) return !0;return !1;
  }, Namespace.isReservedName = function (e, t) {
    if (e) for (var r = 0; r < e.length; ++r) if (e[r] === t) return !0;return !1;
  }, Object.defineProperty(Namespace.prototype, "nestedArray", { get: function () {
      return this._nestedArray || (this._nestedArray = s.toArray(this.nested));
    } }), Namespace.prototype.toJSON = function (e) {
    return s.toObject(["options", this.options, "nested", arrayToJSON(this.nestedArray, e)]);
  }, Namespace.prototype.addJSON = function (e) {
    if (e) for (var t, r = Object.keys(e), i = 0; i < r.length; ++i) t = e[r[i]], this.add((void 0 !== t.fields ? a : void 0 !== t.values ? n : void 0 !== t.methods ? u : void 0 !== t.id ? o : Namespace).fromJSON(r[i], t));return this;
  }, Namespace.prototype.get = function (e) {
    return this.nested && this.nested[e] || null;
  }, Namespace.prototype.getEnum = function (e) {
    if (this.nested && this.nested[e] instanceof n) return this.nested[e].values;throw Error("no such enum: " + e);
  }, Namespace.prototype.add = function (e) {
    if (!(e instanceof o && void 0 !== e.extend || e instanceof a || e instanceof n || e instanceof u || e instanceof Namespace)) throw TypeError("object must be a valid nested object");if (this.nested) {
      var t = this.get(e.name);if (t) {
        if (!(t instanceof Namespace && e instanceof Namespace) || t instanceof a || t instanceof u) throw Error("duplicate name '" + e.name + "' in " + this);var r = t.nestedArray;for (var i = 0; i < r.length; ++i) e.add(r[i]);this.remove(t), this.nested || (this.nested = {}), e.setOptions(t.options, !0);
      }
    } else this.nested = {};return (this.nested[e.name] = e).onAdd(this), clearCache(this);
  }, Namespace.prototype.remove = function (e) {
    if (!(e instanceof i)) throw TypeError("object must be a ReflectionObject");if (e.parent !== this) throw Error(e + " is not a member of " + this);return delete this.nested[e.name], Object.keys(this.nested).length || (this.nested = void 0), e.onRemove(this), clearCache(this);
  }, Namespace.prototype.define = function (e, t) {
    if (s.isString(e)) e = e.split(".");else if (!Array.isArray(e)) throw TypeError("illegal path");if (e && e.length && "" === e[0]) throw Error("path must be relative");var r = this;for (; 0 < e.length;) {
      var i = e.shift();if (r.nested && r.nested[i]) {
        if (!((r = r.nested[i]) instanceof Namespace)) throw Error("path conflicts with non-namespace objects");
      } else r.add(r = new Namespace(i));
    }return t && r.addJSON(t), r;
  }, Namespace.prototype.resolveAll = function () {
    var e = this.nestedArray,
        t = 0;for (; t < e.length;) e[t] instanceof Namespace ? e[t++].resolveAll() : e[t++].resolve();return this.resolve();
  }, Namespace.prototype.lookup = function (e, t, r) {
    if ("boolean" == typeof t ? (r = t, t = void 0) : t && !Array.isArray(t) && (t = [t]), s.isString(e) && e.length) {
      if ("." === e) return this.root;e = e.split(".");
    } else if (!e.length) return this;if ("" === e[0]) return this.root.lookup(e.slice(1), t);var i = this.get(e[0]);if (i) {
      if (1 === e.length) {
        if (!t || -1 < t.indexOf(i.constructor)) return i;
      } else if (i instanceof Namespace && (i = i.lookup(e.slice(1), t, !0))) return i;
    } else for (var n = 0; n < this.nestedArray.length; ++n) if (this._nestedArray[n] instanceof Namespace && (i = this._nestedArray[n].lookup(e, t, !0))) return i;return null === this.parent || r ? null : this.parent.lookup(e, t);
  }, Namespace.prototype.lookupType = function (e) {
    var t = this.lookup(e, [a]);if (!t) throw Error("no such type: " + e);return t;
  }, Namespace.prototype.lookupEnum = function (e) {
    var t = this.lookup(e, [n]);if (!t) throw Error("no such Enum '" + e + "' in " + this);return t;
  }, Namespace.prototype.lookupTypeOrEnum = function (e) {
    var t = this.lookup(e, [a, n]);if (!t) throw Error("no such Type or Enum '" + e + "' in " + this);return t;
  }, Namespace.prototype.lookupService = function (e) {
    var t = this.lookup(e, [u]);if (!t) throw Error("no such Service '" + e + "' in " + this);return t;
  }, Namespace._configure = function () {
    n = r(1), o = r(2), s = r(0), a = r(3), u = r(10);
  };
}, function (e, t, r) {
  e.exports = OneOf;var n = r(4);var i;var o;function OneOf(e, t, r, i) {
    if (Array.isArray(t) || (r = t, t = void 0), n.call(this, e, r), void 0 !== t && !Array.isArray(t)) throw TypeError("fieldNames must be an Array");this.oneof = t || [], this.fieldsArray = [], this.comment = i;
  }function addFieldsToParent(e) {
    if (e.parent) for (var t = 0; t < e.fieldsArray.length; ++t) e.fieldsArray[t].parent || e.parent.add(e.fieldsArray[t]);
  }((OneOf.prototype = Object.create(n.prototype)).constructor = OneOf).className = "OneOf", OneOf.fromJSON = function (e, t) {
    return new OneOf(e, t.oneof, t.options, t.comment);
  }, OneOf.prototype.toJSON = function (e) {
    e = !!e && Boolean(e.keepComments);return o.toObject(["options", this.options, "oneof", this.oneof, "comment", e ? this.comment : void 0]);
  }, OneOf.prototype.add = function (e) {
    if (!(e instanceof i)) throw TypeError("field must be a Field");return e.parent && e.parent !== this.parent && e.parent.remove(e), this.oneof.push(e.name), this.fieldsArray.push(e), addFieldsToParent(e.partOf = this), this;
  }, OneOf.prototype.remove = function (e) {
    if (!(e instanceof i)) throw TypeError("field must be a Field");var t = this.fieldsArray.indexOf(e);if (t < 0) throw Error(e + " is not a member of " + this);return this.fieldsArray.splice(t, 1), -1 < (t = this.oneof.indexOf(e.name)) && this.oneof.splice(t, 1), e.partOf = null, this;
  }, OneOf.prototype.onAdd = function (e) {
    n.prototype.onAdd.call(this, e);for (var t = 0; t < this.oneof.length; ++t) {
      var r = e.get(this.oneof[t]);r && !r.partOf && (r.partOf = this).fieldsArray.push(r);
    }addFieldsToParent(this);
  }, OneOf.prototype.onRemove = function (e) {
    for (var t, r = 0; r < this.fieldsArray.length; ++r) (t = this.fieldsArray[r]).parent && t.parent.remove(t);n.prototype.onRemove.call(this, e);
  }, OneOf.d = function () {
    var r = new Array(arguments.length),
        e = 0;for (; e < arguments.length;) r[e] = arguments[e++];return function (e, t) {
      o.decorateType(e.constructor).add(new OneOf(t, r)), Object.defineProperty(e, t, { get: o.oneOfGetter(r), set: o.oneOfSetter(r) });
    };
  }, OneOf._configure = function () {
    i = r(2), o = r(0);
  };
}, function (e, t, r) {
  "use strict";
  e = e.exports;e.length = function (e) {
    var t,
        r = 0;for (var i = 0; i < e.length; ++i) (t = e.charCodeAt(i)) < 128 ? r += 1 : t < 2048 ? r += 2 : 55296 == (64512 & t) && 56320 == (64512 & e.charCodeAt(i + 1)) ? (++i, r += 4) : r += 3;return r;
  }, e.read = function (e, t, r) {
    if (r - t < 1) return "";var i,
        n = null,
        o = [],
        s = 0;for (; t < r;) (i = e[t++]) < 128 ? o[s++] = i : 191 < i && i < 224 ? o[s++] = (31 & i) << 6 | 63 & e[t++] : 239 < i && i < 365 ? (i = ((7 & i) << 18 | (63 & e[t++]) << 12 | (63 & e[t++]) << 6 | 63 & e[t++]) - 65536, o[s++] = 55296 + (i >> 10), o[s++] = 56320 + (1023 & i)) : o[s++] = (15 & i) << 12 | (63 & e[t++]) << 6 | 63 & e[t++], 8191 < s && ((n = n || []).push(String.fromCharCode.apply(String, o)), s = 0);return n ? (s && n.push(String.fromCharCode.apply(String, o.slice(0, s))), n.join("")) : String.fromCharCode.apply(String, o.slice(0, s));
  }, e.write = function (e, t, r) {
    var i,
        n,
        o = r;for (var s = 0; s < e.length; ++s) (i = e.charCodeAt(s)) < 128 ? t[r++] = i : (i < 2048 ? t[r++] = i >> 6 | 192 : (55296 == (64512 & i) && 56320 == (64512 & (n = e.charCodeAt(s + 1))) ? (++s, t[r++] = (i = 65536 + ((1023 & i) << 10) + (1023 & n)) >> 18 | 240, t[r++] = i >> 12 & 63 | 128) : t[r++] = i >> 12 | 224, t[r++] = i >> 6 & 63 | 128), t[r++] = 63 & i | 128);return r - o;
  };
}, function (e, t, r) {
  e.exports = Root;var i = r(6);((Root.prototype = Object.create(i.prototype)).constructor = Root).className = "Root";var n = r(2),
      o = r(1),
      s = r(7),
      f = r(0);var a, l, h;function Root(e) {
    i.call(this, "", e), this.deferred = [], this.files = [], this.names = [];
  }function SYNC() {}Root.fromJSON = function (e, t) {
    return e = "string" == typeof e ? JSON.parse(e) : e, t = t || new Root(), e.options && t.setOptions(e.options), t.addJSON(e.nested);
  }, Root.prototype.resolvePath = f.path.resolve, Root.prototype.parseFromPbString = function parseFromPbString(e, o, i) {
    "function" == typeof o && (i = o, o = void 0);var s = this;if (!i) return f.asPromise(parseFromPbString, s, e, o);var t = null;if ("string" == typeof e) t = JSON.parse(e);else {
      if ("object" != typeof e) return void console.log("pb\u683c\u5f0f\u8f6c\u5316\u5931\u8d25");t = e;
    }function finish(e, t) {
      var r;i && (r = i, i = null, r(e, t));
    }function process(e, t) {
      try {
        if (f.isString(t) && "{" === t.charAt(0) && (t = JSON.parse(t)), f.isString(t)) {
          l.filename = e;var r,
              i = l(t, s, o);var n = 0;if (i.imports) for (; n < i.imports.length; ++n) fetch(r = i.imports[n]);if (i.weakImports) {
            for (n = 0; n < i.weakImports.length; ++n) r = i.weakImports[n];fetch(r);
          }
        } else s.setOptions(t.options).addJSON(t.nested);
      } catch (e) {
        finish(e);
      }finish(null, s);
    }function fetch(e) {
      -1 < s.names.indexOf(e) || (s.names.push(e), e in h && process(e, h[e]));
    }process(t.name, t.pbJsonStr);
  }, Root.prototype.load = function load(e, o, n) {
    "function" == typeof o && (n = o, o = void 0);var s = this;if (!n) return f.asPromise(load, s, e, o);var a = n === SYNC;function finish(e, t) {
      if (n) {
        var r = n;if (n = null, a) throw e;r(e, t);
      }
    }function process(e, t) {
      try {
        if (f.isString(t) && "{" === t.charAt(0) && (t = JSON.parse(t)), f.isString(t)) {
          l.filename = e;var r,
              i = l(t, s, o),
              n = 0;if (i.imports) for (; n < i.imports.length; ++n) (r = s.resolvePath(e, i.imports[n])) && fetch(r);if (i.weakImports) for (n = 0; n < i.weakImports.length; ++n) (r = s.resolvePath(e, i.weakImports[n])) && fetch(r, !0);
        } else s.setOptions(t.options).addJSON(t.nested);
      } catch (e) {
        finish(e);
      }a || u || finish(null, s);
    }function fetch(r, i) {
      var e = r.lastIndexOf("google/protobuf/");if (-1 < e && (e = r.substring(e)) in h && (r = e), !(-1 < s.files.indexOf(r))) if (s.files.push(r), r in h) a ? process(r, h[r]) : (++u, setTimeout(function () {
        --u, process(r, h[r]);
      }));else if (a) {
        var t;try {
          t = f.fs.readFileSync(r).toString("utf8");
        } catch (e) {
          return void (i || finish(e));
        }process(r, t);
      } else ++u, f.fetch(r, function (e, t) {
        --u, n && (e ? i ? u || finish(null, s) : finish(e) : process(r, t));
      });
    }var u = 0;f.isString(e) && (e = [e]);for (var t, r = 0; r < e.length; ++r) (t = s.resolvePath("", e[r])) && fetch(t);if (a) return s;u || finish(null, s);
  }, Root.prototype.loadSync = function (e, t) {
    if (!f.isNode) throw Error("not supported");return this.load(e, t, SYNC);
  }, Root.prototype.resolveAll = function () {
    if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map(function (e) {
      return "'extend " + e.extend + "' in " + e.parent.fullName;
    }).join(", "));return i.prototype.resolveAll.call(this);
  };var u = /^[A-Z]/;function tryHandleExtension(e, t) {
    var r = t.parent.lookup(t.extend);if (r) {
      var i = new n(t.fullName, t.id, t.type, t.rule, void 0, t.options);return (i.declaringField = t).extensionField = i, r.add(i), 1;
    }
  }Root.prototype._handleAdd = function (e) {
    if (e instanceof n) void 0 === e.extend || e.extensionField || tryHandleExtension(0, e) || this.deferred.push(e);else if (e instanceof o) u.test(e.name) && (e.parent[e.name] = e.values);else if (!(e instanceof s)) {
      if (e instanceof a) for (var t = 0; t < this.deferred.length;) tryHandleExtension(0, this.deferred[t]) ? this.deferred.splice(t, 1) : ++t;for (var r = 0; r < e.nestedArray.length; ++r) this._handleAdd(e._nestedArray[r]);u.test(e.name) && (e.parent[e.name] = e);
    }
  }, Root.prototype._handleRemove = function (e) {
    var t;if (e instanceof n) void 0 !== e.extend && (e.extensionField ? (e.extensionField.parent.remove(e.extensionField), e.extensionField = null) : -1 < (t = this.deferred.indexOf(e)) && this.deferred.splice(t, 1));else if (e instanceof o) u.test(e.name) && delete e.parent[e.name];else if (e instanceof i) {
      for (var r = 0; r < e.nestedArray.length; ++r) this._handleRemove(e._nestedArray[r]);u.test(e.name) && delete e.parent[e.name];
    }
  }, Root._configure = function () {
    a = r(3), l = r(18), h = r(21), n = r(2), o = r(1), s = r(7), f = r(0);
  };
}, function (e, t, r) {
  "use strict";
  e.exports = Service;var i = r(6);var o, a, u;function Service(e, t) {
    i.call(this, e, t), this.methods = {}, this._methodsArray = null;
  }function clearCache(e) {
    return e._methodsArray = null, e;
  }((Service.prototype = Object.create(i.prototype)).constructor = Service).className = "Service", Service.fromJSON = function (e, t) {
    var r = new Service(e, t.options);if (t.methods) for (var i = Object.keys(t.methods), n = 0; n < i.length; ++n) r.add(o.fromJSON(i[n], t.methods[i[n]]));return t.nested && r.addJSON(t.nested), r.comment = t.comment, r;
  }, Service.prototype.toJSON = function (e) {
    var t = i.prototype.toJSON.call(this, e);var r = !!e && Boolean(e.keepComments);return a.toObject(["options", t && t.options || void 0, "methods", i.arrayToJSON(this.methodsArray, e) || {}, "nested", t && t.nested || void 0, "comment", r ? this.comment : void 0]);
  }, Object.defineProperty(Service.prototype, "methodsArray", { get: function () {
      return this._methodsArray || (this._methodsArray = a.toArray(this.methods));
    } }), Service.prototype.get = function (e) {
    return this.methods[e] || i.prototype.get.call(this, e);
  }, Service.prototype.resolveAll = function () {
    var e = this.methodsArray;for (var t = 0; t < e.length; ++t) e[t].resolve();return i.prototype.resolve.call(this);
  }, Service.prototype.add = function (e) {
    if (this.get(e.name)) throw Error("duplicate name '" + e.name + "' in " + this);return e instanceof o ? clearCache((this.methods[e.name] = e).parent = this) : i.prototype.add.call(this, e);
  }, Service.prototype.remove = function (e) {
    if (e instanceof o) {
      if (this.methods[e.name] !== e) throw Error(e + " is not a member of " + this);return delete this.methods[e.name], e.parent = null, clearCache(this);
    }return i.prototype.remove.call(this, e);
  }, Service.prototype.create = function (e, t, r) {
    var i = new u.Service(e, t, r);for (var n, o = 0; o < this.methodsArray.length; ++o) {
      var s = a.lcFirst((n = this._methodsArray[o]).resolve().name).replace(/[^$\w_]/g, "");i[s] = a.codegen(["r", "c"], a.isReserved(s) ? s + "_" : s)("return this.rpcCall(m,q,s,r,c)")({ m: n, q: n.resolvedRequestType.ctor, s: n.resolvedResponseType.ctor });
    }return i;
  }, Service._configure = function () {
    o = r(13), a = r(0), u = r(20);
  };
}, function (e, t) {
  function LongBits(e, t) {
    this.lo = e >>> 0, this.hi = t >>> 0;
  }var i = (e.exports = LongBits).zero = new LongBits(0, 0);i.toNumber = function () {
    return 0;
  }, i.zzEncode = i.zzDecode = function () {
    return this;
  }, i.length = function () {
    return 1;
  };LongBits.zeroHash = "\0\0\0\0\0\0\0\0";LongBits.fromNumber = function (e) {
    if (0 === e) return i;var t = e < 0;var r = (e = t ? -e : e) >>> 0,
        e = (e - r) / 4294967296 >>> 0;return t && (e = ~e >>> 0, r = ~r >>> 0, 4294967295 < ++r && (r = 0, 4294967295 < ++e && (e = 0))), new LongBits(r, e);
  }, LongBits.from = function (e) {
    return "number" == typeof e ? LongBits.fromNumber(e) : "string" == typeof e || e instanceof String ? LongBits.fromNumber(parseInt(e, 10)) : e.low || e.high ? new LongBits(e.low >>> 0, e.high >>> 0) : i;
  }, LongBits.prototype.toNumber = function (e) {
    if (!e && this.hi >>> 31) {
      var t = 1 + ~this.lo >>> 0,
          e = ~this.hi >>> 0;return -(t + 4294967296 * (e = !t ? e + 1 >>> 0 : e));
    }return this.lo + 4294967296 * this.hi;
  }, LongBits.prototype.toLong = function (e) {
    return { low: 0 | this.lo, high: 0 | this.hi, unsigned: Boolean(e) };
  };var r = String.prototype.charCodeAt;LongBits.fromHash = function (e) {
    return "\0\0\0\0\0\0\0\0" === e ? i : new LongBits((r.call(e, 0) | r.call(e, 1) << 8 | r.call(e, 2) << 16 | r.call(e, 3) << 24) >>> 0, (r.call(e, 4) | r.call(e, 5) << 8 | r.call(e, 6) << 16 | r.call(e, 7) << 24) >>> 0);
  }, LongBits.prototype.toHash = function () {
    return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
  }, LongBits.prototype.zzEncode = function () {
    var e = this.hi >> 31;return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0, this.lo = (this.lo << 1 ^ e) >>> 0, this;
  }, LongBits.prototype.zzDecode = function () {
    var e = -(1 & this.lo);return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0, this.hi = (this.hi >>> 1 ^ e) >>> 0, this;
  }, LongBits.prototype.length = function () {
    var e = this.lo,
        t = (this.lo >>> 28 | this.hi << 4) >>> 0,
        r = this.hi >>> 24;return 0 == r ? 0 == t ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : r < 128 ? 9 : 10;
  };
}, function (e, t, r) {
  e.exports = MapField;var s = r(2);var i, a;function MapField(e, t, r, i, n, o) {
    if (s.call(this, e, t, i, void 0, void 0, n, o), !a.isString(r)) throw TypeError("keyType must be a string");this.keyType = r, this.resolvedKeyType = null, this.map = !0;
  }((MapField.prototype = Object.create(s.prototype)).constructor = MapField).className = "MapField", MapField.fromJSON = function (e, t) {
    return new MapField(e, t.id, t.keyType, t.type, t.options, t.comment);
  }, MapField.prototype.toJSON = function (e) {
    e = !!e && Boolean(e.keepComments);return a.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", e ? this.comment : void 0]);
  }, MapField.prototype.resolve = function () {
    if (this.resolved) return this;if (void 0 === i.mapKey[this.keyType]) throw Error("invalid key type: " + this.keyType);return s.prototype.resolve.call(this);
  }, MapField.d = function (r, i, n) {
    return "function" == typeof n ? n = a.decorateType(n).name : n && "object" == typeof n && (n = a.decorateEnum(n).name), function (e, t) {
      a.decorateType(e.constructor).add(new MapField(t, r, i, n));
    };
  }, MapField._configure = function () {
    i = r(5), a = r(0);
  };
}, function (e, t, r) {
  "use strict";
  e.exports = Method;var u = r(4);var f;function Method(e, t, r, i, n, o, s, a) {
    if (f.isObject(n) ? (s = n, n = o = void 0) : f.isObject(o) && (s = o, o = void 0), void 0 !== t && !f.isString(t)) throw TypeError("type must be a string");if (!f.isString(r)) throw TypeError("requestType must be a string");if (!f.isString(i)) throw TypeError("responseType must be a string");u.call(this, e, s), this.type = t || "rpc", this.requestType = r, this.requestStream = !!n || void 0, this.responseType = i, this.responseStream = !!o || void 0, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = a;
  }((Method.prototype = Object.create(u.prototype)).constructor = Method).className = "Method", Method.fromJSON = function (e, t) {
    return new Method(e, t.type, t.requestType, t.responseType, t.requestStream, t.responseStream, t.options, t.comment);
  }, Method.prototype.toJSON = function (e) {
    e = !!e && Boolean(e.keepComments);return f.toObject(["type", "rpc" !== this.type && this.type || void 0, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", e ? this.comment : void 0]);
  }, Method.prototype.resolve = function () {
    return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), u.prototype.resolve.call(this));
  }, Method._configure = function () {
    f = r(0);
  };
}, function (e, t, r) {
  "use strict";
  var i;function Message(e) {
    if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) this[t[r]] = e[t[r]];
  }(e.exports = Message).create = function (e) {
    return this.$type.create(e);
  }, Message.encode = function (e, t) {
    return arguments.length ? 1 == arguments.length ? this.$type.encode(e) : this.$type.encode(e, t) : this.$type.encode(this);
  }, Message.encodeDelimited = function (e, t) {
    return this.$type.encodeDelimited(e, t);
  }, Message.decode = function (e) {
    return this.$type.decode(e);
  }, Message.decodeDelimited = function (e) {
    return this.$type.decodeDelimited(e);
  }, Message.verify = function (e) {
    return this.$type.verify(e);
  }, Message.fromObject = function (e) {
    return this.$type.fromObject(e);
  }, Message.toObject = function (e, t) {
    return this.$type.toObject(e = e || this, t);
  }, Message.prototype.toJSON = function () {
    return this.$type.toObject(this, i.toJSONOptions);
  }, Message.set = function (e, t) {
    Message[e] = t;
  }, Message.get = function (e) {
    return Message[e];
  }, Message._configure = function () {
    i = r(0);
  };
}, function (e, t, r) {
  e.exports = Writer;var i = r(0);var n;var o = r(8);function Op(e, t, r) {
    this.fn = e, this.len = t, this.next = void 0, this.val = r;
  }function noop() {}function State(e) {
    this.head = e.head, this.tail = e.tail, this.len = e.len, this.next = e.states;
  }function Writer() {
    this.len = 0, this.head = new Op(noop, 0, 0), this.tail = this.head, this.states = null;
  }function writeByte(e, t, r) {
    t[r] = 255 & e;
  }function VarintOp(e, t) {
    this.len = e, this.next = void 0, this.val = t;
  }function writeVarint64(e, t, r) {
    for (; e.hi;) t[r++] = 127 & e.lo | 128, e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0, e.hi >>>= 7;for (; 127 < e.lo;) t[r++] = 127 & e.lo | 128, e.lo = e.lo >>> 7;t[r++] = e.lo;
  }function writeFloat(e, t, r) {
    t[r++] = 0, i.float.writeFloatLE(e, t, r);
  }function writeDouble(e, t, r) {
    t[r++] = 16, i.float.writeDoubleLE(e, t, r);
  }function writeUMine(e, t, r) {
    t[r++] = 0 <= e ? 32 | e : 112 | -e;
  }function writeUInt8(e, t, r) {
    0 <= e ? (t[r++] = 48, t[r++] = e) : (t[r++] = 128, t[r++] = -e);
  }function writeUInt16(e, t, r) {
    0 <= e ? t[r++] = 64 : (t[r++] = 144, e = -e), t[r++] = 255 & e, t[r++] = e >>> 8;
  }function write32data(e, t, r) {
    t[r++] = 255 & e, t[r++] = e >> 8 & 255, t[r++] = e >> 16 & 255, t[r++] = e / 16777216 & 255;
  }function writeUInt32(e, t, r) {
    0 <= e ? t[r++] = 80 : (t[r++] = 160, e = -e), write32data(e, t, r);
  }function writeUInt64(e, t, r) {
    0 <= e ? t[r++] = 96 : (t[r++] = 176, e = -e);var i = Math.floor(e / 4294967296);write32data(e - 4294967296 * i, t, r), write32data(i, t, r + 4);
  }function writeFixed32(e, t, r) {
    t[r] = 255 & e, t[r + 1] = e >>> 8 & 255, t[r + 2] = e >>> 16 & 255, t[r + 3] = e >>> 24;
  }Writer.create = i.Buffer ? function () {
    return (Writer.create = function () {
      return new (void 0)();
    })();
  } : function () {
    return new Writer();
  }, Writer.alloc = function (e) {
    return new i.Array(e);
  }, i.Array !== Array && (Writer.alloc = i.pool(Writer.alloc, i.Array.prototype.subarray)), Writer.prototype._push = function (e, t, r) {
    return this.tail = this.tail.next = new Op(e, t, r), this.len += t, this;
  }, (VarintOp.prototype = Object.create(Op.prototype)).fn = function (e, t, r) {
    for (; 127 < e;) t[r++] = 127 & e | 128, e >>>= 7;t[r] = e;
  }, Writer.prototype.uint32 = function (e) {
    return this.len += (this.tail = this.tail.next = new VarintOp((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len, this;
  }, Writer.prototype.int32 = function (e) {
    return e < 0 ? this._push(writeVarint64, 10, n.fromNumber(e)) : this.uint32(e);
  }, Writer.prototype.sint32 = function (e) {
    return this.uint32((e << 1 ^ e >> 31) >>> 0);
  }, Writer.prototype.int64 = Writer.prototype.uint64 = function (e) {
    if (Number.isSafeInteger(e)) {
      var t = 0 <= e ? e : -e;return t < 16 ? this._push(writeUMine, 1, e) : t < 256 ? this._push(writeUInt8, 2, e) : t < 65536 ? this._push(writeUInt16, 3, e) : t < 4294967296 ? this._push(writeUInt32, 5, e) : this._push(writeUInt64, 9, e);
    }return -99999 < e && e < 99999 ? this._push(writeFloat, 5, e) : this._push(writeDouble, 9, e);
  }, Writer.prototype.sint64 = function (e) {
    e = n.from(e).zzEncode();return this._push(writeVarint64, e.length(), e);
  }, Writer.prototype.bool = function (e) {
    return this._push(writeByte, 1, e ? 1 : 0);
  }, Writer.prototype.sfixed32 = Writer.prototype.fixed32 = function (e) {
    return this._push(writeFixed32, 4, e >>> 0);
  }, Writer.prototype.fixed64 = function (e) {
    e = n.from(e);return this._push(writeFixed32, 4, e.lo)._push(writeFixed32, 4, e.hi);
  }, Writer.prototype.sfixed64 = Writer.prototype.fixed64, Writer.prototype.float = function (e) {
    return this._push(i.float.writeFloatLE, 4, e);
  }, Writer.prototype.double = function (e) {
    return this._push(i.float.writeDoubleLE, 8, e);
  };var s = i.Array.prototype.set ? function (e, t, r) {
    t.set(e, r);
  } : function (e, t, r) {
    for (var i = 0; i < e.length; ++i) t[r + i] = e[i];
  };Writer.prototype.bytes = function (e) {
    var t = e.length >>> 0;return t ? (i.isString(e) && (r = Writer.alloc(t = o.length(e)), o.write(e, r, 0), e = r), this.uint32(t)._push(s, t, e)) : this._push(writeByte, 1, 0);var r;
  }, Writer.prototype.string = function (e) {
    var t = o.length(e);return t ? this.uint32(t)._push(o.write, t, e) : this._push(writeByte, 1, 0);
  }, Writer.prototype.fork = function () {
    return this.states = new State(this), this.head = this.tail = new Op(noop, 0, 0), this.len = 0, this;
  }, Writer.prototype.reset = function () {
    return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Op(noop, 0, 0), this.len = 0), this;
  }, Writer.prototype.ldelim = function () {
    var e = this.head,
        t = this.tail,
        r = this.len;return this.reset().uint32(r), r && (this.tail.next = e.next, this.tail = t, this.len += r), this;
  }, Writer.prototype.finish = function () {
    var e = this.head.next,
        t = this.constructor.alloc(this.len),
        r = 0;for (; e;) e.fn(e.val, t, r), r += e.len, e = e.next;return t;
  }, Writer._configure = function () {
    n = r(11), r(17), o = r(8);
  };
}, function (e, t) {
  e.exports = {};
}, function (e, t, r) {
  "use strict";
  e = e.exports;e.length = function (e) {
    var t = e.length;if (!t) return 0;var r = 0;for (; 1 < --t % 4 && "=" === e.charAt(t);) ++r;return Math.ceil(3 * e.length) / 4 - r;
  };var f = new Array(64);var u = new Array(123);for (var i = 0; i < 64;) u[f[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;e.encode = function (e, t, r) {
    var i = null,
        n = [];var o,
        s = 0,
        a = 0;for (; t < r;) {
      var u = e[t++];switch (a) {case 0:
          n[s++] = f[u >> 2], o = (3 & u) << 4, a = 1;break;case 1:
          n[s++] = f[o | u >> 4], o = (15 & u) << 2, a = 2;break;case 2:
          n[s++] = f[o | u >> 6], n[s++] = f[63 & u], a = 0;}8191 < s && ((i = i || []).push(String.fromCharCode.apply(String, n)), s = 0);
    }return a && (n[s++] = f[o], n[s++] = 61, 1 === a && (n[s++] = 61)), i ? (s && i.push(String.fromCharCode.apply(String, n.slice(0, s))), i.join("")) : String.fromCharCode.apply(String, n.slice(0, s));
  };var l = "invalid encoding";e.decode = function (e, t, r) {
    var i = r;var n,
        o = 0;for (var s = 0; s < e.length;) {
      var a = e.charCodeAt(s++);if (61 === a && 1 < o) break;if (void 0 === (a = u[a])) throw Error(l);switch (o) {case 0:
          n = a, o = 1;break;case 1:
          t[r++] = n << 2 | (48 & a) >> 4, n = a, o = 2;break;case 2:
          t[r++] = (15 & n) << 4 | (60 & a) >> 2, n = a, o = 3;break;case 3:
          t[r++] = (3 & n) << 6 | a, o = 0;}
    }if (1 === o) throw Error(l);return r - i;
  }, e.test = function (e) {
    return (/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)
    );
  };
}, function (e, t, r) {
  "use strict";
  var m, b, w, O, _, k, S, A, N, E, x;(e.exports = parse).filename = null, parse.defaults = { keepCase: !1 };var j = /^[1-9][0-9]*$/,
      T = /^-?[1-9][0-9]*$/,
      B = /^0[x][0-9a-fA-F]+$/,
      L = /^-?0[x][0-9a-fA-F]+$/,
      R = /^0[0-7]+$/,
      F = /^-?0[0-7]+$/,
      I = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,
      M = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
      C = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)+$/,
      D = /^(?:\.[a-zA-Z][a-zA-Z_0-9]*)+$/;function parse(e, t, r) {
    t instanceof b || (r = t, t = new b()), r = r || parse.defaults;var o = m(e, r.alternateCommentMode || !1),
        u = o.next,
        i = o.push,
        n = o.peek,
        f = o.skip,
        s = o.cmnt;var a,
        l,
        h,
        c,
        p = !0,
        d = !1;var y = t;var v = r.keepCase ? function (e) {
      return e;
    } : x.camelCase;function illegal(e, t, r) {
      var i = parse.filename;return r || (parse.filename = null), Error("illegal " + (t || "token") + " '" + e + "' (" + (i ? i + ", " : "") + "line " + o.line + ")");
    }function readString() {
      var e,
          t = [];do {
        if ('"' !== (e = u()) && "'" !== e) throw illegal(e);
      } while ((t.push(u()), f(e), '"' === (e = n()) || "'" === e));return t.join("");
    }function readValue(t) {
      var r = u();switch (r) {case "'":case '"':
          return i(r), readString();case "true":case "TRUE":
          return !0;case "false":case "FALSE":
          return !1;}try {
        return function (e, t) {
          var r = 1;"-" === e.charAt(0) && (r = -1, e = e.substring(1));switch (e) {case "inf":case "INF":case "Inf":
              return r * (1 / 0);case "nan":case "NAN":case "Nan":case "NaN":
              return NaN;case "0":
              return 0;}if (j.test(e)) return r * parseInt(e, 10);if (B.test(e)) return r * parseInt(e, 16);if (R.test(e)) return r * parseInt(e, 8);if (I.test(e)) return r * parseFloat(e);throw illegal(e, "number", t);
        }(r, !0);
      } catch (e) {
        if (t && C.test(r)) return r;throw illegal(r, "value");
      }
    }function readRanges(e, t) {
      var r;for (; !t || '"' !== (r = n()) && "'" !== r ? e.push([r = parseId(u()), f("to", !0) ? parseId(u()) : r]) : e.push(readString()), f(",", !0););f(";");
    }function parseId(e, t) {
      switch (e) {case "max":case "MAX":case "Max":
          return 536870911;case "0":
          return 0;}if (!t && "-" === e.charAt(0)) throw illegal(e, "id");if (T.test(e)) return parseInt(e, 10);if (L.test(e)) return parseInt(e, 16);if (F.test(e)) return parseInt(e, 8);throw illegal(e, "id");
    }function parseCommon(e, t) {
      switch (t) {case "option":
          return parseOption(e, t), f(";"), 1;case "message":
          return function (e, t) {
            if (!M.test(t = u())) throw illegal(t, "type name");var r = new w(t);ifBlock(r, function (e) {
              if (!parseCommon(r, e)) switch (e) {case "map":
                  !function (e) {
                    f("<");var t = u();if (void 0 === E.mapKey[t]) throw illegal(t, "type");f(",");var r = u();if (!C.test(r)) throw illegal(r, "type");f(">");var i = u();if (!M.test(i)) throw illegal(i, "name");f("=");var n = new _(v(i), parseId(u()), t, r);ifBlock(n, function (e) {
                      if ("option" !== e) throw illegal(e);parseOption(n, e), f(";");
                    }, function () {
                      parseInlineOptions(n);
                    }), e.add(n);
                  }(r);break;case "required":case "optional":case "repeated":
                  parseField(r, e);break;case "oneof":
                  !function (e, t) {
                    if (!M.test(t = u())) throw illegal(t, "name");var r = new k(v(t));ifBlock(r, function (e) {
                      "option" === e ? (parseOption(r, e), f(";")) : (i(e), parseField(r, "optional"));
                    }), e.add(r);
                  }(r, e);break;case "extensions":
                  readRanges(r.extensions || (r.extensions = []));break;case "reserved":
                  readRanges(r.reserved || (r.reserved = []), !0);break;default:
                  if (!d || !C.test(e)) throw illegal(e);i(e), parseField(r, "optional");}
            }), e.add(r);
          }(e, t), 1;case "enum":
          return function (e, t) {
            if (!M.test(t = u())) throw illegal(t, "name");var r = new S(t);ifBlock(r, function (e) {
              switch (e) {case "option":
                  parseOption(r, e), f(";");break;case "reserved":
                  readRanges(r.reserved || (r.reserved = []), !0);break;default:
                  !function (e, t) {
                    if (!M.test(t)) throw illegal(t, "name");f("=");var r = parseId(u(), !0),
                        i = {};ifBlock(i, function (e) {
                      if ("option" !== e) throw illegal(e);parseOption(i, e), f(";");
                    }, function () {
                      parseInlineOptions(i);
                    }), e.add(t, r, i.comment);
                  }(r, e);}
            }), e.add(r);
          }(e, t), 1;case "service":
          return function (e, t) {
            if (!M.test(t = u())) throw illegal(t, "service name");var r = new A(t);ifBlock(r, function (e) {
              if (!parseCommon(r, e)) {
                if ("rpc" !== e) throw illegal(e);!function (e, t) {
                  var r = t;if (!M.test(t = u())) throw illegal(t, "name");var i,
                      n,
                      o,
                      s = t;f("("), f("stream", !0) && (n = !0);if (!C.test(t = u())) throw illegal(t);i = t, f(")"), f("returns"), f("("), f("stream", !0) && (o = !0);if (!C.test(t = u())) throw illegal(t);t = t, f(")");var a = new N(s, r, i, t, n, o);ifBlock(a, function (e) {
                    if ("option" !== e) throw illegal(e);parseOption(a, e), f(";");
                  }), e.add(a);
                }(r, e);
              }
            }), e.add(r);
          }(e, t), 1;case "extend":
          return function (t, e) {
            if (!C.test(e = u())) throw illegal(e, "reference");var r = e;ifBlock(null, function (e) {
              switch (e) {case "required":case "repeated":case "optional":
                  parseField(t, e, r);break;default:
                  if (!d || !C.test(e)) throw illegal(e);i(e), parseField(t, "optional", r);}
            });
          }(e, t), 1;}
    }function ifBlock(e, t, r) {
      var i = o.line;if (e && (e.comment = s(), e.filename = parse.filename), f("{", !0)) {
        var n;for (; "}" !== (n = u());) t(n);f(";", !0);
      } else r && r(), f(";"), e && "string" != typeof e.comment && (e.comment = s(i));
    }function parseField(e, t, r) {
      var i = u();if ("group" !== i) {
        if (!C.test(i)) throw illegal(i, "type");var n = u();if (!M.test(n)) throw illegal(n, "name");n = v(n), f("=");var o = new O(n, parseId(u()), i, t, r);ifBlock(o, function (e) {
          if ("option" !== e) throw illegal(e);parseOption(o, e), f(";");
        }, function () {
          parseInlineOptions(o);
        }), e.add(o), d || !o.repeated || void 0 === E.packed[i] && void 0 !== E.basic[i] || o.setOption("packed", !1, !0);
      } else !function (e, t) {
        var r = u();if (!M.test(r)) throw illegal(r, "name");var i = x.lcFirst(r);r === i && (r = x.ucFirst(r));f("=");var n = parseId(u());var o = new w(r);o.group = !0;t = new O(i, n, r, t);t.filename = parse.filename, ifBlock(o, function (e) {
          switch (e) {case "option":
              parseOption(o, e), f(";");break;case "required":case "optional":case "repeated":
              parseField(o, e);break;default:
              throw illegal(e);}
        }), e.add(o).add(t);
      }(e, t);
    }function parseOption(e, t) {
      var r = f("(", !0);if (!C.test(t = u())) throw illegal(t, "name");var i = t;r && (f(")"), i = "(" + i + ")", t = n(), D.test(t) && (i += t, u())), f("="), function parseOptionValue(e, t) {
        if (f("{", !0)) do {
          if (!M.test(g = u())) throw illegal(g, "name");"{" === n() ? parseOptionValue(e, t + "." + g) : (f(":"), "{" === n() ? parseOptionValue(e, t + "." + g) : setOption(e, t + "." + g, readValue(!0)));
        } while (!f("}", !0));else setOption(e, t, readValue(!0));
      }(e, i);
    }function setOption(e, t, r) {
      e.setOption && e.setOption(t, r);
    }function parseInlineOptions(e) {
      if (f("[", !0)) {
        for (; parseOption(e, "option"), f(",", !0););f("]");
      }return e;
    }var g;for (; null !== (g = u());) switch (g) {case "package":
        if (!p) throw illegal(g);!function () {
          if (void 0 !== a) throw illegal("package");if (a = u(), !C.test(a)) throw illegal(a, "name");y = y.define(a), f(";");
        }();break;case "import":
        if (!p) throw illegal(g);!function () {
          var e;var t;switch (e = n()) {case "weak":
              t = h = h || [], u();break;case "public":
              u();default:
              t = l = l || [];}e = readString(), f(";"), t.push(e);
        }();break;case "syntax":
        if (!p) throw illegal(g);!function () {
          if (f("="), c = readString(), !(d = "proto3" === c) && "proto2" !== c) throw illegal(c, "syntax");f(";");
        }();break;case "option":
        if (!p) throw illegal(g);parseOption(y, g), f(";");break;default:
        if (parseCommon(y, g)) {
          p = !1;continue;
        }throw illegal(g);}return parse.filename = null, { package: a, imports: l, weakImports: h, syntax: c, root: t };
  }parse._configure = function () {
    m = r(19), b = r(9), w = r(3), O = r(2), _ = r(12), k = r(7), S = r(1), A = r(10), N = r(13), E = r(5), x = r(0);
  };
}, function (e, t) {
  e.exports = tokenize;var g = /[\s{}=;:[\],'"()<>]/g,
      m = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
      b = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;var w = /^ *[*/]+ */,
      O = /^\s*\*?\/*/,
      _ = /\n/g,
      k = /\s/,
      r = /\\(.?)/g;var i = { 0: "\0", r: "\r", n: "\n", t: "\t" };function unescape(e) {
    return e.replace(r, function (e, t) {
      switch (t) {case "\\":case "":
          return t;default:
          return i[t] || "";}
    });
  }function tokenize(a, u) {
    a = a.toString();var f = 0,
        l = a.length,
        h = 1,
        s = null,
        c = null,
        p = 0,
        d = !1;var y = [];var v = null;function illegal(e) {
      return Error("illegal " + e + " (line " + h + ")");
    }function charAt(e) {
      return a.charAt(e);
    }function setComment(e, t) {
      s = a.charAt(e++), p = h, d = !1;var r,
          i = e - (u ? 2 : 3);do {
        if (--i < 0 || "\n" === (r = a.charAt(i))) {
          d = !0;break;
        }
      } while (" " === r || "\t" === r);var n = a.substring(e, t).split(_);for (var o = 0; o < n.length; ++o) n[o] = n[o].replace(u ? O : w, "").trim();c = n.join("\n").trim();
    }function isDoubleSlashCommentLine(e) {
      var t = findEndOfLine(e);t = a.substring(e, t);return (/^\s*\/{1,2}/.test(t)
      );
    }function findEndOfLine(e) {
      var t = e;for (; t < l && "\n" !== charAt(t);) t++;return t;
    }function next() {
      if (0 < y.length) return y.shift();if (v) return function () {
        var e = "'" === v ? b : m;e.lastIndex = f - 1;var t = e.exec(a);if (!t) throw illegal("string");return f = e.lastIndex, push(v), v = null, unescape(t[1]);
      }();var e, t, r, i, n;do {
        if (f === l) return null;for (e = !1; k.test(r = charAt(f));) if ("\n" === r && ++h, ++f === l) return null;if ("/" === charAt(f)) {
          if (++f === l) throw illegal("comment");if ("/" === charAt(f)) {
            if (u) {
              if (n = !1, isDoubleSlashCommentLine(i = f)) for (n = !0; (f = findEndOfLine(f)) !== l && isDoubleSlashCommentLine(++f););else f = Math.min(l, findEndOfLine(f) + 1);n && setComment(i, f), h++, e = !0;
            } else {
              for (n = "/" === charAt(i = f + 1); "\n" !== charAt(++f);) if (f === l) return null;++f, n && setComment(i, f - 1), ++h, e = !0;
            }
          } else {
            if ("*" !== (r = charAt(f))) return "/";i = f + 1, n = u || "*" === charAt(i);do {
              if ("\n" === r && ++h, ++f === l) throw illegal("comment");
            } while ((t = r, r = charAt(f), "*" !== t || "/" !== r));++f, n && setComment(i, f - 2), e = !0;
          }
        }
      } while (e);var o = f;if (g.lastIndex = 0, !g.test(charAt(o++))) for (; o < l && !g.test(charAt(o));) ++o;var s = a.substring(f, f = o);return '"' !== s && "'" !== s || (v = s), s;
    }function push(e) {
      y.push(e);
    }function peek() {
      if (!y.length) {
        var e = next();if (null === e) return null;push(e);
      }return y[0];
    }return Object.defineProperty({ next: next, peek: peek, push: push, skip: function (e, t) {
        var r = peek();if (r === e) return next(), !0;if (!t) throw illegal("token '" + r + "', '" + e + "' expected");return !1;
      }, cmnt: function (e) {
        var t = null;return void 0 === e ? p === h - 1 && (u || "*" === s || d) && (t = c) : (p < e && peek(), p !== e || d || !u && "/" !== s || (t = c)), t;
      } }, "line", { get: function () {
        return h;
      } });
  }tokenize.unescape = unescape;
}, function (e, t, r) {
  "use strict";
  e.exports = Service;var s = r(0);function Service(e, t, r) {
    if ("function" != typeof e) throw TypeError("rpcImpl must be a function");s.EventEmitter.call(this), this.rpcImpl = e, this.requestDelimited = Boolean(t), this.responseDelimited = Boolean(r);
  }((Service.prototype = Object.create(s.EventEmitter.prototype)).constructor = Service).prototype.rpcCall = function rpcCall(r, e, i, t, n) {
    if (!t) throw TypeError("request must be specified");var o = this;if (!n) return s.asPromise(rpcCall, o, r, e, i, t);if (o.rpcImpl) try {
      return o.rpcImpl(r, e[o.requestDelimited ? "encodeDelimited" : "encode"](t).finish(), function (e, t) {
        if (e) return o.emit("error", e, r), n(e);if (null !== t) {
          if (!(t instanceof i)) try {
            t = i[o.responseDelimited ? "decodeDelimited" : "decode"](t);
          } catch (e) {
            return o.emit("error", e, r), n(e);
          }return o.emit("data", t, r), n(null, t);
        }o.end(!0);
      });
    } catch (e) {
      return o.emit("error", e, r), void setTimeout(function () {
        n(e);
      }, 0);
    } else setTimeout(function () {
      n(Error("already ended"));
    }, 0);
  }, Service.prototype.end = function (e) {
    return this.rpcImpl && (e || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
  };
}, function (e, t) {
  e.exports = common;var r = /\/|\./;function common(e, t) {
    r.test(e) || (e = "google/protobuf/" + e + ".proto", t = { nested: { google: { nested: { protobuf: { nested: t } } } } }), common[e] = t;
  }common("any", { Any: { fields: { type_url: { type: "string", id: 1 }, value: { type: "bytes", id: 2 } } } }), common("duration", { Duration: e = { fields: { seconds: { type: "int64", id: 1 }, nanos: { type: "int32", id: 2 } } } }), common("timestamp", { Timestamp: e }), common("empty", { Empty: { fields: {} } }), common("struct", { Struct: { fields: { fields: { keyType: "string", type: "Value", id: 1 } } }, Value: { oneofs: { kind: { oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"] } }, fields: { nullValue: { type: "NullValue", id: 1 }, numberValue: { type: "double", id: 2 }, stringValue: { type: "string", id: 3 }, boolValue: { type: "bool", id: 4 }, structValue: { type: "Struct", id: 5 }, listValue: { type: "ListValue", id: 6 } } }, NullValue: { values: { NULL_VALUE: 0 } }, ListValue: { fields: { values: { rule: "repeated", type: "Value", id: 1 } } } }), common("wrappers", { DoubleValue: { fields: { value: { type: "double", id: 1 } } }, FloatValue: { fields: { value: { type: "float", id: 1 } } }, Int64Value: { fields: { value: { type: "int64", id: 1 } } }, UInt64Value: { fields: { value: { type: "uint64", id: 1 } } }, Int32Value: { fields: { value: { type: "int32", id: 1 } } }, UInt32Value: { fields: { value: { type: "uint32", id: 1 } } }, BoolValue: { fields: { value: { type: "bool", id: 1 } } }, StringValue: { fields: { value: { type: "string", id: 1 } } }, BytesValue: { fields: { value: { type: "bytes", id: 1 } } } }), common("field_mask", { FieldMask: { fields: { paths: { rule: "repeated", type: "string", id: 1 } } } }), common.get = function (e) {
    return common[e] || null;
  };
}, function (e, t, r) {
  e.exports = Reader;var n = r(0);var i;var o;function indexOutOfRange(e, t) {
    return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len);
  }function Reader(e) {
    this.buf = e, this.pos = 0, this.len = e.length;
  }var s = "undefined" != typeof Uint8Array ? function (e) {
    if (e instanceof Uint8Array || Array.isArray(e)) return new Reader(e);if ("undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer) return new Reader(new Uint8Array(e));throw Error("illegal buffer");
  } : function (e) {
    if (Array.isArray(e)) return new Reader(e);throw Error("illegal buffer");
  };var a;function readLongVarint() {
    var e = new i(0, 0);var t = 0;if (!(4 < this.len - this.pos)) {
      for (; t < 3; ++t) {
        if (this.pos >= this.len) throw indexOutOfRange(this);if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, this.buf[this.pos++] < 128) return e;
      }return e.lo = (e.lo | (127 & this.buf[this.pos++]) << 7 * t) >>> 0, e;
    }for (; t < 4; ++t) if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, this.buf[this.pos++] < 128) return e;if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 28) >>> 0, e.hi = (e.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return e;if (t = 0, 4 < this.len - this.pos) {
      for (; t < 5; ++t) if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, this.buf[this.pos++] < 128) return e;
    } else for (; t < 5; ++t) {
      if (this.pos >= this.len) throw indexOutOfRange(this);if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, this.buf[this.pos++] < 128) return e;
    }throw Error("invalid varint encoding");
  }function readFixed32_end(e, t) {
    return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0;
  }function readFixed64() {
    if (this.pos + 8 > this.len) throw indexOutOfRange(this, 8);return new i(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
  }Reader.create = n.Buffer ? function (e) {
    return (Reader.create = function (e) {
      return n.Buffer.isBuffer(e) ? new (void 0)(e) : s(e);
    })(e);
  } : s, Reader.prototype._slice = n.Array.prototype.subarray || n.Array.prototype.slice, Reader.prototype.uint32 = (a = 4294967295, function () {
    if (a = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return a;if (a = (a | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return a;if (a = (a | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return a;if (a = (a | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return a;if (a = (a | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return a;if ((this.pos += 5) > this.len) throw this.pos = this.len, indexOutOfRange(this, 10);return a;
  }), Reader.prototype.int32 = function () {
    return 0 | this.uint32();
  }, Reader.prototype.sint32 = function () {
    var e = this.uint32();return e >>> 1 ^ -(1 & e) | 0;
  }, Reader.prototype.bool = function () {
    return 0 !== this.uint32();
  }, Reader.prototype.fixed32 = function () {
    if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);return readFixed32_end(this.buf, this.pos += 4);
  }, Reader.prototype.sfixed32 = function () {
    if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);return 0 | readFixed32_end(this.buf, this.pos += 4);
  }, Reader.prototype.uint64 = function () {
    if (this.pos + 1 > this.len) throw indexOutOfRange(this, 1);var e = 0;var t = this.buf[this.pos];switch (t >> 4) {case 0:
        if (this.pos + 5 > this.len) throw indexOutOfRange(this, 5);e = n.float.readFloatLE(this.buf, this.pos + 1), this.pos += 5;break;case 1:
        if (this.pos + 9 > this.len) throw indexOutOfRange(this, 9);e = n.float.readDoubleLE(this.buf, this.pos + 1), this.pos += 9;break;case 2:case 7:
        e = 15 & t, this.pos += 1;break;case 3:case 8:
        if (this.pos + 2 > this.len) throw indexOutOfRange(this, 2);e = this.buf[this.pos + 1], this.pos += 2;break;case 4:case 9:
        if (this.pos + 3 > this.len) throw indexOutOfRange(this, 3);e = (this.buf[this.pos + 2] << 8 | this.buf[this.pos + 1]) >>> 0, this.pos += 3;break;case 5:case 10:
        if (this.pos + 5 > this.len) throw indexOutOfRange(this, 5);e = Math.floor(16777216 * this.buf[this.pos + 4] + 65536 * this.buf[this.pos + 3] + 256 * this.buf[this.pos + 2] + this.buf[this.pos + 1]), this.pos += 5;break;case 6:case 11:
        if (this.pos + 9 > this.len) throw indexOutOfRange(this, 9);var r = Math.floor(16777216 * this.buf[this.pos + 4] + 65536 * this.buf[this.pos + 3] + 256 * this.buf[this.pos + 2] + this.buf[this.pos + 1]);var i = Math.floor(16777216 * this.buf[this.pos + 8] + 65536 * this.buf[this.pos + 7] + 256 * this.buf[this.pos + 6] + this.buf[this.pos + 5]);e = Math.floor(4294967296 * i + r), this.pos += 9;}return e = 7 <= t >> 4 ? -e : e;
  }, Reader.prototype.float = function () {
    if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);var e = n.float.readFloatLE(this.buf, this.pos);return this.pos += 4, e;
  }, Reader.prototype.double = function () {
    if (this.pos + 8 > this.len) throw indexOutOfRange(this, 4);var e = n.float.readDoubleLE(this.buf, this.pos);return this.pos += 8, e;
  }, Reader.prototype.bytes = function () {
    var e = this.uint32(),
        t = this.pos,
        r = this.pos + e;if (r > this.len) throw indexOutOfRange(this, e);return this.pos += e, Array.isArray(this.buf) ? this.buf.slice(t, r) : t === r ? new this.buf.constructor(0) : this._slice.call(this.buf, t, r);
  }, Reader.prototype.string = function () {
    var e = this.bytes();return o.read(e, 0, e.length);
  }, Reader.prototype.skip = function (e) {
    if ("number" == typeof e) {
      if (this.pos + e > this.len) throw indexOutOfRange(this, e);this.pos += e;
    } else do {
      if (this.pos >= this.len) throw indexOutOfRange(this);
    } while (128 & this.buf[this.pos++]);return this;
  }, Reader.prototype.skipType = function (e) {
    switch (e) {case 0:
        this.skip();break;case 4:
        var t = this.buf[this.pos] >> 4;var r = 0;0 == t ? r = 5 : 1 == t ? r = 9 : 2 == t || 7 == t ? r = 1 : 3 == t || 8 == t ? r = 2 : 4 == t || 9 == t ? r = 3 : 5 == t || 10 == t ? r = 5 : 6 != t && 11 != t || (r = 9), this.skip(r);break;case 1:
        this.skip(8);break;case 2:
        this.skip(this.uint32());break;case 3:
        for (;;) {
          if (4 == (e = 7 & this.uint32())) break;this.skipType(e);
        }break;case 5:
        this.skip(4);break;default:
        throw Error("invalid wire type " + e + " at offset " + this.pos);}return this;
  }, Reader._configure = function () {
    i = r(11), o = r(8);var e = n.Long ? "toLong" : "toNumber";n.merge(Reader.prototype, { int64: function () {
        return readLongVarint.call(this)[e](!1);
      }, sint64: function () {
        return readLongVarint.call(this).zzDecode()[e](!1);
      }, fixed64: function () {
        return readFixed64.call(this)[e](!0);
      }, sfixed64: function () {
        return readFixed64.call(this)[e](!1);
      } });
  };
}, function (e, t, r) {
  var n;var c;function invalid(e, t) {
    return e.name + ": " + t + (e.repeated && "array" !== t ? "[]" : e.map && "object" !== t ? "{k:" + e.keyType + "}" : "") + " expected";
  }function verifyValue(e, t, r, i) {
    i = i.types;if (e.resolvedType) {
      if (e.resolvedType instanceof n) {
        if (Object.keys(e.resolvedType.values).indexOf(r) < 0) return invalid(e, "enum value");
      } else {
        t = i[t].verify(r);if (t) return e.name + "." + t;
      }
    } else switch (e.type) {case "int32":case "uint32":case "sint32":case "fixed32":case "sfixed32":
        if (!c.isInteger(r)) return invalid(e, "integer");break;case "int64":case "uint64":case "sint64":case "fixed64":case "sfixed64":
        if (!(c.isInteger(r) || r && c.isInteger(r.low) && c.isInteger(r.high))) return invalid(e, "integer|Long");break;case "float":case "double":
        if ("number" != typeof r) return invalid(e, "number");break;case "bool":
        if ("boolean" != typeof r) return invalid(e, "boolean");break;case "string":
        if (!c.isString(r)) return invalid(e, "string");break;case "bytes":
        if (!(r && "number" == typeof r.length || c.isString(r))) return invalid(e, "buffer");}
  }function verifier(h) {
    return function (l) {
      return function (e) {
        var t;if ("object" != typeof e || null === e) return "object expected";var r = {};var i;h.oneofsArray.length && (i = {});for (var n = 0; n < h.fieldsArray.length; ++n) {
          var o = h._fieldsArray[n].resolve(),
              s = e[o.name];var a;if (!o.optional || null != s && e.hasOwnProperty(o.name)) if (o.map) {
            if (!c.isObject(s)) return invalid(o, "object");var u = Object.keys(s);for (a = 0; a < u.length; ++a) {
              if (t = function (e, t) {
                switch (e.keyType) {case "int32":case "uint32":case "sint32":case "fixed32":case "sfixed32":
                    if (!c.key32Re.test(t)) return invalid(e, "integer key");break;case "int64":case "uint64":case "sint64":case "fixed64":case "sfixed64":
                    if (!c.key64Re.test(t)) return invalid(e, "integer|Long key");break;case "bool":
                    if (!c.key2Re.test(t)) return invalid(e, "boolean key");}
              }(o, u[a])) return t;if (t = verifyValue(o, n, s[u[a]], l)) return t;
            }
          } else if (o.repeated) {
            if (!Array.isArray(s)) return invalid(o, "array");for (a = 0; a < s.length; ++a) if (t = verifyValue(o, n, s[a], l)) return t;
          } else {
            if (o.partOf) {
              var f = o.partOf.name;if (1 === r[o.partOf.name] && 1 === i[f]) return o.partOf.name + ": multiple values";i[f] = 1;
            }if (t = verifyValue(o, n, s, l)) return t;
          }
        }
      };
    };
  }(e.exports = verifier)._configure = function () {
    n = r(1), c = r(0);
  };
}, function (e, t, r) {
  var g;var m;function encoder(v) {
    return function (e) {
      var p = e.Writer;var d = e.types;var y = e.util;return function (e, t) {
        t = t || p.create();var r = v.fieldsArray.slice().sort(y.compareFieldsById);for (var i = 0; i < r.length; i++) {
          var n = r[i];var o = v._fieldsArray.indexOf(n);var s = n.resolvedType instanceof g ? "uint32" : n.type;var a = m.basic[s];var u = e[n.name];if (n.resolvedType instanceof g && "string" == typeof u && (u = d[o].values[u]), n.map) {
            if (null != u && e.hasOwnProperty(n.name)) for (var f = Object.keys(u), l = 0; l < f.length; ++l) t.uint32((n.id << 3 | 2) >>> 0).fork().uint32(8 | m.mapKey[n.keyType])[n.keyType](f[l]), (void 0 === a ? d[o].encode(u[f[l]], t.uint32(18).fork()).ldelim() : t.uint32(16 | a)[s](u[f[l]])).ldelim();
          } else if (n.repeated) {
            if (u && u.length) if (n.packed && void 0 !== m.packed[s]) {
              t.uint32((n.id << 3 | 2) >>> 0).fork();for (var h = 0; h < u.length; h++) t[s](u[h]);t.ldelim();
            } else for (var c = 0; c < u.length; c++) void 0 === a ? n.resolvedType.group ? d[o].encode(u[c], t.uint32((n.id << 3 | 3) >>> 0)).uint32((n.id << 3 | 4) >>> 0) : d[o].encode(u[c], t.uint32((n.id << 3 | 2) >>> 0).fork()).ldelim() : t.uint32((n.id << 3 | a) >>> 0)[s](u[c]);
          } else (!n.optional || null != u && e.hasOwnProperty(n.name)) && (n.optional || null != u && e.hasOwnProperty(n.name) || console.warn("\u6ce8\u610f\u5566!!!\u5f88\u5927\u6982\u7387\u4f1a\u62a5\u9519 \u7c7b\u578b:", e.$type ? e.$type.name : "\u4e0d\u6653\u5f97", "\u6ca1\u6709\u8bbe\u7f6e\u5bf9\u5e94\u7684\u5c5e\u6027:", n.name, "\u68c0\u67e5\u662f\u4e0d\u662fproto\u6587\u4ef6\u5c5e\u6027\u8bbe\u7f6e\u4e3a\u4e86required"), void 0 === a ? n.resolvedType.group ? d[o].encode(u, t.uint32((n.id << 3 | 3) >>> 0)).uint32((n.id << 3 | 4) >>> 0) : d[o].encode(u, t.uint32((n.id << 3 | 2) >>> 0).fork()).ldelim() : t.uint32((n.id << 3 | a) >>> 0)[s](u));
        }return t;
      };
    };
  }(e.exports = encoder)._configure = function () {
    g = r(1), m = r(5);
  };
}, function (e, t, r) {
  var m, b, w;function decoder(g) {
    return function (e) {
      var d = e.Reader;var y = e.types;var v = e.util;return function (e, t) {
        e instanceof d || (e = d.create(e));var r = void 0 === t ? e.len : e.pos + t,
            i = new this.ctor();var n;for (; e.pos < r;) {
          var o = e.uint32();if (g.group && 4 == (7 & o)) break;var s = o >>> 3;var a = 0;var u = !1;for (; a < g.fieldsArray.length; ++a) {
            var f = g._fieldsArray[a].resolve(),
                l = f.name,
                h = f.resolvedType instanceof m ? "int32" : f.type;if (s == f.id) {
              if (u = !0, f.map) e.skip().pos++, i[l] === v.emptyObject && (i[l] = {}), n = e[f.keyType](), e.pos++, null != b.long[f.keyType] ? null == b.basic[h] ? i[l]["object" == typeof n ? v.longToHash(n) : n] = y[a].decode(e, e.uint32()) : i[l]["object" == typeof n ? v.longToHash(n) : n] = e[h]() : null == b.basic[h] ? i[l] = y[a].decode(e, e.uint32()) : i[l] = e[h]();else if (f.repeated) {
                if (i[l] && i[l].length || (i[l] = []), null != b.packed[h] && 2 == (7 & o)) {
                  var c = e.uint32() + e.pos;for (; e.pos < c;) i[l].push(e[h]());
                } else null == b.basic[h] ? f.resolvedType.group ? i[l].push(y[a].decode(e)) : i[l].push(y[a].decode(e, e.uint32())) : i[l].push(e[h]());
              } else null == b.basic[h] ? f.resolvedType.group ? i[l] = y[a].decode(e) : i[l] = y[a].decode(e, e.uint32()) : i[l] = e[h]();break;
            }
          }u || (console.log("t", o), e.skipType(7 & o));
        }for (a = 0; a < g._fieldsArray.length; ++a) {
          var p = g._fieldsArray[a];if (p.required && !i.hasOwnProperty(p.name)) throw w.ProtocolError("missing required '" + p.name + "'", { instance: i });
        }return i;
      };
    };
  }(e.exports = decoder)._configure = function () {
    m = r(1), b = r(5), w = r(0);
  };
}, function (e, t, r) {
  var i;t[".google.protobuf.Any"] = { fromObject: function (e) {
      if (e && e["@type"]) {
        var t = this.lookup(e["@type"]);if (t) {
          var r = "." === e["@type"].charAt(0) ? e["@type"].substr(1) : e["@type"];return this.create({ type_url: "/" + r, value: t.encode(t.fromObject(e)).finish() });
        }
      }return this.fromObject(e);
    }, toObject: function (e, t) {
      var r;if (t && t.json && e.type_url && e.value && (r = e.type_url.substring(e.type_url.lastIndexOf("/") + 1), (r = this.lookup(r)) && (e = r.decode(e.value))), e instanceof this.ctor || !(e instanceof i)) return this.toObject(e, t);t = e.$type.toObject(e, t);return t["@type"] = e.$type.fullName, t;
    } }, t._configure = function () {
    i = r(14);
  };
}, function (e, t, r) {
  e = e.exports;var v, g;function valuePartial_fromObject(e, t, r, i) {
    var n = i.m;var o = i.d;var s = i.types;var a = i.ksi;var u = void 0 !== a;if (e.resolvedType) {
      if (e.resolvedType instanceof v) {
        var f = u ? o[r][a] : o[r];var l = e.resolvedType.values,
            h = Object.keys(l);for (var c = 0; c < h.length; c++) if (!(e.repeated && l[h[c]] === e.typeDefault || h[c] != f && l[h[c]] != f)) {
          u ? n[r][a] = l[h[c]] : n[r] = l[h[c]];break;
        }
      } else {
        if ("object" != typeof (u ? o[r][a] : o[r])) throw TypeError(e.fullName + ": object expected");u ? n[r][a] = s[t].fromObject(o[r][a]) : n[r] = s[t].fromObject(o[r]);
      }
    } else {
      var p = !1;switch (e.type) {case "double":case "float":
          u ? n[r][a] = Number(o[r][a]) : n[r] = Number(o[r]);break;case "uint32":case "fixed32":
          u ? n[r][a] = o[r][a] >>> 0 : n[r] = o[r] >>> 0;break;case "int32":case "sint32":case "sfixed32":
          u ? n[r][a] = 0 | o[r][a] : n[r] = 0 | o[r];break;case "uint64":
          p = !0;case "int64":case "sint64":case "fixed64":case "sfixed64":
          g.Long ? u ? n[r][a] = g.Long.fromValue(o[r][a]).unsigned = p : n[r] = g.Long.fromValue(o[r]).unsigned = p : "string" == typeof (u ? o[r][a] : o[r]) ? u ? n[r][a] = parseInt(o[r][a], 10) : n[r] = parseInt(o[r], 10) : "number" == typeof (u ? o[r][a] : o[r]) ? u ? n[r][a] = o[r][a] : n[r] = o[r] : "object" == typeof (u ? o[r][a] : o[r]) && (u ? n[r][a] = new g.LongBits(o[r][a].low >>> 0, o[r][a].high >>> 0).toNumber(p) : n[r] = new g.LongBits(o[r].low >>> 0, o[r].high >>> 0).toNumber(p));break;case "bytes":
          "string" == typeof (u ? o[r][a] : o[r]) ? u ? g.base64.decode(o[r][a], n[r][a] = g.newBuffer(g.base64.length(o[r][a])), 0) : g.base64.decode(o[r], n[r] = g.newBuffer(g.base64.length(o[r])), 0) : (u ? o[r][a] : o[r]).length && (u ? n[r][a] = o[r][a] : n[r] = o[r]);break;case "string":
          u ? n[r][a] = String(o[r][a]) : n[r] = String(o[r]);break;case "bool":
          u ? n[r][a] = Boolean(o[r][a]) : n[r] = Boolean(o[r]);}
    }
  }function valuePartial_toObject(e, t, r, i) {
    var n = i.m;var o = i.d;var s = i.types;var a = i.ksi;var u = i.o;var f = void 0 !== a;if (e.resolvedType) e.resolvedType instanceof v ? f ? o[r][a] = u.enums === String ? s[t].values[n[r][a]] : n[r][a] : o[r] = u.enums === String ? s[t].values[n[r]] : n[r] : f ? o[r][a] = s[t].toObject(n[r][a], u) : o[r] = s[t].toObject(n[r], u);else {
      var l = !1;switch (e.type) {case "double":case "float":
          f ? o[r][a] = u.json && !isFinite(n[r][a]) ? String(n[r][a]) : n[r][a] : o[r] = u.json && !isFinite(n[r]) ? String(n[r]) : n[r];break;case "uint64":
          l = !0;case "int64":case "sint64":case "fixed64":case "sfixed64":
          "number" == typeof n[r][a] ? f ? o[r][a] = u.longs === String ? String(n[r][a]) : n[r][a] : o[r] = u.longs === String ? String(n[r]) : n[r] : f ? o[r][a] = u.longs === String ? g.Long.prototype.toString.call(n[r][a]) : u.longs === Number ? new g.LongBits(n[r][a].low >>> 0, n[r][a].high >>> 0).toNumber(l) : n[r][a] : o[r] = u.longs === String ? g.Long.prototype.toString.call(n[r]) : u.longs === Number ? new g.LongBits(n[r].low >>> 0, n[r].high >>> 0).toNumber(l) : n[r];break;case "bytes":
          f ? o[r][a] = u.bytes === String ? g.base64.encode(n[r][a], 0, n[r][a].length) : u.bytes === Array ? Array.prototype.slice.call(n[r][a]) : n[r][a] : o[r] = u.bytes === String ? g.base64.encode(n[r], 0, n[r].length) : u.bytes === Array ? Array.prototype.slice.call(n[r]) : n[r];break;default:
          f ? o[r][a] = n[r][a] : o[r] = n[r];}
    }
  }e._configure = function () {
    v = r(1), g = r(0);
  }, e.fromObject = function (e) {
    var u = e.fieldsArray;return function (a) {
      return function (e) {
        if (e instanceof this.ctor) return e;if (!u.length) return new this.ctor();var t = new this.ctor();for (var r = 0; r < u.length; ++r) {
          var i = u[r].resolve();var n = i.name;var o;if (i.map) {
            if (e[n]) {
              if ("object" != typeof e[n]) throw TypeError(i.fullName + ": object expected");t[n] = {};
            }var s = Object.keys(e[n]);for (o = 0; o < s.length; ++o) valuePartial_fromObject(i, r, n, g.merge(g.copy(a), { m: t, d: e, ksi: s[o] }));
          } else if (i.repeated) {
            if (e[n]) {
              if (!Array.isArray(e[n])) throw TypeError(i.fullName + ": array expected");for (t[n] = [], o = 0; o < e[n].length; ++o) valuePartial_fromObject(i, r, n, g.merge(g.copy(a), { m: t, d: e, ksi: o }));
            }
          } else (i.resolvedType instanceof v || null != e[n]) && valuePartial_fromObject(i, r, n, g.merge(g.copy(a), { m: t, d: e }));
        }return t;
      };
    };
  }, e.toObject = function (d) {
    var y = d.fieldsArray.slice().sort(g.compareFieldsById);return function (p) {
      return y.length ? function (e, t) {
        t = t || {};var r = {};var i,
            n,
            o = [],
            s = [],
            a = [],
            u = 0;for (; u < y.length; ++u) y[u].partOf || (y[u].resolve().repeated ? o : y[u].map ? s : a).push(y[u]);if (o.length && (t.arrays || t.defaults)) for (u = 0; u < o.length; ++u) r[o[u].name] = [];if (s.length && (t.objects || t.defaults)) for (u = 0; u < s.length; ++u) r[s[u].name] = {};if (a.length && t.defaults) for (u = 0; u < a.length; ++u) {
          var f;n = (i = a[u]).name, i.resolvedType instanceof v ? r[n] = t.enums = String ? i.resolvedType.valuesById[i.typeDefault] : i.typeDefault : i.long ? g.Long ? (f = new g.Long(i.typeDefault.low, i.typeDefault.high, i.typeDefault.unsigned), r[n] = t.longs === String ? f.toString() : t.longs === Number ? f.toNumber() : f) : r[n] = t.longs === String ? i.typeDefault.toString() : i.typeDefault.toNumber() : i.bytes ? r[n] = t.bytes === String ? String.fromCharCode.apply(String, i.typeDefault) : Array.prototype.slice.call(i.typeDefault).join("*..*").split("*..*") : r[n] = i.typeDefault;
        }for (u = 0; u < y.length; ++u) {
          n = (i = y[u]).name;var l = d._fieldsArray.indexOf(i);var h;var c;if (i.map) {
            if (e[n] && (h = Object.keys(e[n]).length)) for (r[n] = {}, c = 0; c < h.length; ++c) valuePartial_toObject(i, l, n, g.merge(g.copy(p), { m: e, d: r, ksi: h[c], o: t }));
          } else if (i.repeated) {
            if (e[n] && e[n].length) for (r[n] = [], c = 0; c < e[n].length; ++c) valuePartial_toObject(i, l, n, g.merge(g.copy(p), { m: e, d: r, ksi: c, o: t }));
          } else null != e[n] && e.hasOwnProperty(n) && valuePartial_toObject(i, l, n, g.merge(g.copy(p), { m: e, d: r, o: t })), i.partOf && t.oneofs && (r[i.partOf.name] = n);
        }return r;
      } : function () {
        return {};
      };
    };
  };
}, function (e, t, r) {
  e.exports = function () {
    var i = {};function load(e, t, r) {
      if (typeof t === "function") {
        r = t;t = new i.Root();
      } else if (!t) t = new i.Root();return t.load(e, r);
    }function loadSync(e, t) {
      if (!t) t = new i.Root();return t.loadSync(e);
    }function parseFromPbString(e, t, r) {
      if (typeof t === "function") {
        r = t;t = new i.Root();
      } else if (!t) t = new i.Root();return t.parseFromPbString(e, r);
    }function configure() {
      i.converter._configure();i.decoder._configure();i.encoder._configure();i.Field._configure();i.MapField._configure();i.Message._configure();i.Namespace._configure();i.Method._configure();i.ReflectionObject._configure();i.OneOf._configure();i.parse._configure();i.Reader._configure();i.Root._configure();i.Service._configure();i.verifier._configure();i.Type._configure();i.types._configure();i.wrappers._configure();i.Writer._configure();
    }if ((window.protobuf = i).build = "minimal", i.Writer = r(15), i.encoder = r(24), i.Reader = r(22), i.util = r(0), i.rpc = r(20), i.roots = r(16), i.verifier = r(23), i.tokenize = r(19), i.parse = r(18), i.common = r(21), i.ReflectionObject = r(4), i.Namespace = r(6), i.Root = r(9), i.Enum = r(1), i.Type = r(3), i.Field = r(2), i.OneOf = r(7), i.MapField = r(12), i.Service = r(10), i.Method = r(13), i.converter = r(27), i.decoder = r(25), i.Message = r(14), i.wrappers = r(26), i.types = r(5), i.util = r(0), i.configure = configure, i.load = load, i.loadSync = loadSync, i.parseFromPbString = parseFromPbString, configure(), arguments && arguments.length) for (var e = 0; e < arguments.length; e++) {
      var t = arguments[e];if (t.hasOwnProperty("exports")) {
        t.exports = i;return;
      }
    }return i;
  }();
}, function (e, t) {
  e.exports = Long;var c = null;try {
    c = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
  } catch (e) {}function Long(e, t, r) {
    this.low = 0 | e, this.high = 0 | t, this.unsigned = !!r;
  }function isLong(e) {
    return !0 === (e && e.__isLong__);
  }Object.defineProperty(Long.prototype, "__isLong__", { value: !0 }), Long.isLong = isLong;var o = {};var s = {};function fromInt(e, t) {
    var r, i, n;return t ? (n = 0 <= (e >>>= 0) && e < 256) && (i = s[e]) ? i : (r = fromBits(e, (0 | e) < 0 ? -1 : 0, !0), n && (s[e] = r), r) : (n = -128 <= (e |= 0) && e < 128) && (i = o[e]) ? i : (r = fromBits(e, e < 0 ? -1 : 0, !1), n && (o[e] = r), r);
  }function fromNumber(e, t) {
    if (isNaN(e)) return t ? u : d;if (t) {
      if (e < 0) return u;if (i <= e) return v;
    } else {
      if (e <= -n) return g;if (n <= e + 1) return a;
    }return e < 0 ? fromNumber(-e, t).neg() : fromBits(e % r | 0, e / r | 0, t);
  }function fromBits(e, t, r) {
    return new Long(e, t, r);
  }Long.fromInt = fromInt, Long.fromNumber = fromNumber, Long.fromBits = fromBits;var f = Math.pow;function fromString(e, t, r) {
    if (0 === e.length) throw Error("empty string");if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) return d;if (t = "number" == typeof t ? (r = t, !1) : !!t, (r = r || 10) < 2 || 36 < r) throw RangeError("radix");var i;if (0 < (i = e.indexOf("-"))) throw Error("interior hyphen");if (0 === i) return fromString(e.substring(1), t, r).neg();var n = fromNumber(f(r, 8));var o = d;for (var s = 0; s < e.length; s += 8) {
      var a = Math.min(8, e.length - s),
          u = parseInt(e.substring(s, s + a), r);o = a < 8 ? (a = fromNumber(f(r, a)), o.mul(a).add(fromNumber(u))) : (o = o.mul(n)).add(fromNumber(u));
    }return o.unsigned = t, o;
  }function fromValue(e, t) {
    return "number" == typeof e ? fromNumber(e, t) : "string" == typeof e ? fromString(e, t) : fromBits(e.low, e.high, "boolean" == typeof t ? t : e.unsigned);
  }Long.fromString = fromString, Long.fromValue = fromValue;var r = 4294967296;var i = r * r;var n = i / 2;var p = fromInt(1 << 24);var d = fromInt(0);Long.ZERO = d;var u = fromInt(0, !0);Long.UZERO = u;var l = fromInt(1);Long.ONE = l;var h = fromInt(1, !0);Long.UONE = h;var y = fromInt(-1);Long.NEG_ONE = y;var a = new Long(-1, 2147483647, !1);Long.MAX_VALUE = a;var v = new Long(-1, -1, !0);Long.MAX_UNSIGNED_VALUE = v;var g = new Long(0, -2147483648, !1);Long.MIN_VALUE = g;e = Long.prototype;e.toInt = function () {
    return this.unsigned ? this.low >>> 0 : this.low;
  }, e.toNumber = function () {
    return this.unsigned ? (this.high >>> 0) * r + (this.low >>> 0) : this.high * r + (this.low >>> 0);
  }, e.toString = function (e) {
    if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix");if (this.isZero()) return "0";if (this.isNegative()) {
      if (this.eq(g)) {
        var t = fromNumber(e),
            r = this.div(t),
            t = r.mul(t).sub(this);return r.toString(e) + t.toInt().toString(e);
      }return "-" + this.neg().toString(e);
    }var i = fromNumber(f(e, 6), this.unsigned),
        n = this;var o = "";for (;;) {
      var s = n.div(i),
          a = (n.sub(s.mul(i)).toInt() >>> 0).toString(e);if ((n = s).isZero()) return a + o;for (; a.length < 6;) a = "0" + a;o = "" + a + o;
    }
  }, e.getHighBits = function () {
    return this.high;
  }, e.getHighBitsUnsigned = function () {
    return this.high >>> 0;
  }, e.getLowBits = function () {
    return this.low;
  }, e.getLowBitsUnsigned = function () {
    return this.low >>> 0;
  }, e.getNumBitsAbs = function () {
    if (this.isNegative()) return this.eq(g) ? 64 : this.neg().getNumBitsAbs();var e = 0 != this.high ? this.high : this.low;for (var t = 31; 0 < t && 0 == (e & 1 << t); t--);return 0 != this.high ? t + 33 : t + 1;
  }, e.isZero = function () {
    return 0 === this.high && 0 === this.low;
  }, e.eqz = e.isZero, e.isNegative = function () {
    return !this.unsigned && this.high < 0;
  }, e.isPositive = function () {
    return this.unsigned || 0 <= this.high;
  }, e.isOdd = function () {
    return 1 == (1 & this.low);
  }, e.isEven = function () {
    return 0 == (1 & this.low);
  }, e.equals = function (e) {
    return isLong(e) || (e = fromValue(e)), (this.unsigned === e.unsigned || this.high >>> 31 != 1 || e.high >>> 31 != 1) && this.high === e.high && this.low === e.low;
  }, e.eq = e.equals, e.notEquals = function (e) {
    return !this.eq(e);
  }, e.neq = e.notEquals, e.ne = e.notEquals, e.lessThan = function (e) {
    return this.comp(e) < 0;
  }, e.lt = e.lessThan, e.lessThanOrEqual = function (e) {
    return this.comp(e) <= 0;
  }, e.lte = e.lessThanOrEqual, e.le = e.lessThanOrEqual, e.greaterThan = function (e) {
    return 0 < this.comp(e);
  }, e.gt = e.greaterThan, e.greaterThanOrEqual = function (e) {
    return 0 <= this.comp(e);
  }, e.gte = e.greaterThanOrEqual, e.ge = e.greaterThanOrEqual, e.compare = function (e) {
    if (isLong(e) || (e = fromValue(e)), this.eq(e)) return 0;var t = this.isNegative(),
        r = e.isNegative();return t && !r ? -1 : !t && r ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1;
  }, e.comp = e.compare, e.negate = function () {
    return !this.unsigned && this.eq(g) ? g : this.not().add(l);
  }, e.neg = e.negate, e.add = function (e) {
    isLong(e) || (e = fromValue(e));var t = this.high >>> 16;var r = 65535 & this.high;var i = this.low >>> 16;var n = 65535 & this.low;var o = e.high >>> 16;var s = 65535 & e.high;var a = e.low >>> 16;var u = 0,
        f = 0,
        l = 0,
        h = 0;return l += (h += n + (65535 & e.low)) >>> 16, f += (l += i + a) >>> 16, u += (f += r + s) >>> 16, u += t + o, fromBits((l &= 65535) << 16 | (h &= 65535), (u &= 65535) << 16 | (f &= 65535), this.unsigned);
  }, e.subtract = function (e) {
    return isLong(e) || (e = fromValue(e)), this.add(e.neg());
  }, e.sub = e.subtract, e.multiply = function (e) {
    if (this.isZero()) return d;if (isLong(e) || (e = fromValue(e)), c) return fromBits(c.mul(this.low, this.high, e.low, e.high), c.get_high(), this.unsigned);if (e.isZero()) return d;if (this.eq(g)) return e.isOdd() ? g : d;if (e.eq(g)) return this.isOdd() ? g : d;if (this.isNegative()) return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();if (e.isNegative()) return this.mul(e.neg()).neg();if (this.lt(p) && e.lt(p)) return fromNumber(this.toNumber() * e.toNumber(), this.unsigned);var t = this.high >>> 16;var r = 65535 & this.high;var i = this.low >>> 16;var n = 65535 & this.low;var o = e.high >>> 16;var s = 65535 & e.high;var a = e.low >>> 16;var u = 65535 & e.low;var f = 0,
        l = 0,
        h = 0,
        e = 0;return h += (e += n * u) >>> 16, l += (h += i * u) >>> 16, h &= 65535, l += (h += n * a) >>> 16, f += (l += r * u) >>> 16, l &= 65535, f += (l += i * a) >>> 16, l &= 65535, f += (l += n * s) >>> 16, f += t * u + r * a + i * s + n * o, fromBits((h &= 65535) << 16 | (e &= 65535), (f &= 65535) << 16 | (l &= 65535), this.unsigned);
  }, e.mul = e.multiply, e.divide = function (e) {
    if ((e = !isLong(e) ? fromValue(e) : e).isZero()) throw Error("division by zero");if (c) return this.unsigned || -2147483648 !== this.high || -1 !== e.low || -1 !== e.high ? fromBits((this.unsigned ? c.div_u : c.div_s)(this.low, this.high, e.low, e.high), c.get_high(), this.unsigned) : this;if (this.isZero()) return this.unsigned ? u : d;var t, r, i;if (this.unsigned) {
      if ((e = !e.unsigned ? e.toUnsigned() : e).gt(this)) return u;if (e.gt(this.shru(1))) return h;i = u;
    } else {
      if (this.eq(g)) return e.eq(l) || e.eq(y) ? g : e.eq(g) ? l : (t = this.shr(1).div(e).shl(1)).eq(d) ? e.isNegative() ? l : y : (r = this.sub(e.mul(t)), i = t.add(r.div(e)));else if (e.eq(g)) return this.unsigned ? u : d;if (this.isNegative()) return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();if (e.isNegative()) return this.div(e.neg()).neg();i = d;
    }for (r = this; r.gte(e);) {
      t = Math.max(1, Math.floor(r.toNumber() / e.toNumber()));var n = Math.ceil(Math.log(t) / Math.LN2),
          o = n <= 48 ? 1 : f(2, n - 48),
          s = fromNumber(t),
          a = s.mul(e);for (; a.isNegative() || a.gt(r);) a = (s = fromNumber(t -= o, this.unsigned)).mul(e);s.isZero() && (s = l), i = i.add(s), r = r.sub(a);
    }return i;
  }, e.div = e.divide, e.modulo = function (e) {
    return isLong(e) || (e = fromValue(e)), c ? fromBits((this.unsigned ? c.rem_u : c.rem_s)(this.low, this.high, e.low, e.high), c.get_high(), this.unsigned) : this.sub(this.div(e).mul(e));
  }, e.mod = e.modulo, e.rem = e.modulo, e.not = function () {
    return fromBits(~this.low, ~this.high, this.unsigned);
  }, e.and = function (e) {
    return isLong(e) || (e = fromValue(e)), fromBits(this.low & e.low, this.high & e.high, this.unsigned);
  }, e.or = function (e) {
    return isLong(e) || (e = fromValue(e)), fromBits(this.low | e.low, this.high | e.high, this.unsigned);
  }, e.xor = function (e) {
    return isLong(e) || (e = fromValue(e)), fromBits(this.low ^ e.low, this.high ^ e.high, this.unsigned);
  }, e.shiftLeft = function (e) {
    return isLong(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? fromBits(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : fromBits(0, this.low << e - 32, this.unsigned);
  }, e.shl = e.shiftLeft, e.shiftRight = function (e) {
    return isLong(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? fromBits(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : fromBits(this.high >> e - 32, 0 <= this.high ? 0 : -1, this.unsigned);
  }, e.shr = e.shiftRight, e.shiftRightUnsigned = function (e) {
    if (isLong(e) && (e = e.toInt()), 0 === (e &= 63)) return this;var t = this.high;return e < 32 ? fromBits(this.low >>> e | t << 32 - e, t >>> e, this.unsigned) : fromBits(32 === e ? t : t >>> e - 32, 0, this.unsigned);
  }, e.shru = e.shiftRightUnsigned, e.shr_u = e.shiftRightUnsigned, e.toSigned = function () {
    return this.unsigned ? fromBits(this.low, this.high, !1) : this;
  }, e.toUnsigned = function () {
    return this.unsigned ? this : fromBits(this.low, this.high, !0);
  }, e.toBytes = function (e) {
    return e ? this.toBytesLE() : this.toBytesBE();
  }, e.toBytesLE = function () {
    var e = this.high,
        t = this.low;return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24];
  }, e.toBytesBE = function () {
    var e = this.high,
        t = this.low;return [e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t];
  }, Long.fromBytes = function (e, t, r) {
    return r ? Long.fromBytesLE(e, t) : Long.fromBytesBE(e, t);
  }, Long.fromBytesLE = function (e, t) {
    return new Long(e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24, e[4] | e[5] << 8 | e[6] << 16 | e[7] << 24, t);
  }, Long.fromBytesBE = function (e, t) {
    return new Long(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7], e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], t);
  };
}, function (e, t) {
  e.exports = function (t, r, e) {
    var i = e || 8192;var n = i >>> 1;var o = null;var s = i;return function (e) {
      if (e < 1 || n < e) return t(e);i < s + e && (o = t(i), s = 0);e = r.call(o, s, s += e);return 7 & s && (s = 1 + (7 | s)), e;
    };
  };
}, function (e, t) {
  function factory(e) {
    function writeFloat_ieee754(e, t, r, i) {
      var n = t < 0 ? 1 : 0;0 === (t = n ? -t : t) ? e(0 < 1 / t ? 0 : 2147483648, r, i) : isNaN(t) ? e(2143289344, r, i) : e(34028234663852886e22 < t ? (n << 31 | 2139095040) >>> 0 : t < 11754943508222875e-54 ? (n << 31 | Math.round(t / 1401298464324817e-60)) >>> 0 : (n << 31 | (n = Math.floor(Math.log(t) / Math.LN2)) + 127 << 23 | 8388607 & Math.round(t * Math.pow(2, -n) * 8388608)) >>> 0, r, i);
    }function readFloat_ieee754(e, t, r) {
      e = e(t, r), t = 2 * (e >> 31) + 1, r = e >>> 23 & 255, e &= 8388607;return 255 == r ? e ? NaN : 1 / 0 * t : 0 == r ? 1401298464324817e-60 * t * e : t * Math.pow(2, r - 150) * (8388608 + e);
    }function writeFloat_f32_cpy(e, t, r) {
      i[0] = e, t[r] = n[0], t[r + 1] = n[1], t[r + 2] = n[2], t[r + 3] = n[3];
    }function writeFloat_f32_rev(e, t, r) {
      i[0] = e, t[r] = n[3], t[r + 1] = n[2], t[r + 2] = n[1], t[r + 3] = n[0];
    }function readFloat_f32_cpy(e, t) {
      return n[0] = e[t], n[1] = e[t + 1], n[2] = e[t + 2], n[3] = e[t + 3], i[0];
    }function readFloat_f32_rev(e, t) {
      return n[3] = e[t], n[2] = e[t + 1], n[1] = e[t + 2], n[0] = e[t + 3], i[0];
    }var i, n;function writeDouble_ieee754(e, t, r, i, n, o) {
      var s = i < 0 ? 1 : 0;var a, u;0 === (i = s ? -i : i) ? (e(0, n, o + t), e(0 < 1 / i ? 0 : 2147483648, n, o + r)) : isNaN(i) ? (e(0, n, o + t), e(2146959360, n, o + r)) : 17976931348623157e292 < i ? (e(0, n, o + t), e((s << 31 | 2146435072) >>> 0, n, o + r)) : i < 22250738585072014e-324 ? (e((a = i / 5e-324) >>> 0, n, o + t), e((s << 31 | a / 4294967296) >>> 0, n, o + r)) : (1024 === (u = Math.floor(Math.log(i) / Math.LN2)) && (u = 1023), e(4503599627370496 * (a = i * Math.pow(2, -u)) >>> 0, n, o + t), e((s << 31 | u + 1023 << 20 | 1048576 * a & 1048575) >>> 0, n, o + r));
    }function readDouble_ieee754(e, t, r, i, n) {
      t = e(i, n + t), i = e(i, n + r);n = 2 * (i >> 31) + 1, r = i >>> 20 & 2047, t = 4294967296 * (1048575 & i) + t;return 2047 == r ? t ? NaN : 1 / 0 * n : 0 == r ? 5e-324 * n * t : n * Math.pow(2, r - 1075) * (t + 4503599627370496);
    }function writeDouble_f64_cpy(e, t, r) {
      o[0] = e, t[r] = s[0], t[r + 1] = s[1], t[r + 2] = s[2], t[r + 3] = s[3], t[r + 4] = s[4], t[r + 5] = s[5], t[r + 6] = s[6], t[r + 7] = s[7];
    }function writeDouble_f64_rev(e, t, r) {
      o[0] = e, t[r] = s[7], t[r + 1] = s[6], t[r + 2] = s[5], t[r + 3] = s[4], t[r + 4] = s[3], t[r + 5] = s[2], t[r + 6] = s[1], t[r + 7] = s[0];
    }function readDouble_f64_cpy(e, t) {
      return s[0] = e[t], s[1] = e[t + 1], s[2] = e[t + 2], s[3] = e[t + 3], s[4] = e[t + 4], s[5] = e[t + 5], s[6] = e[t + 6], s[7] = e[t + 7], o[0];
    }function readDouble_f64_rev(e, t) {
      return s[7] = e[t], s[6] = e[t + 1], s[5] = e[t + 2], s[4] = e[t + 3], s[3] = e[t + 4], s[2] = e[t + 5], s[1] = e[t + 6], s[0] = e[t + 7], o[0];
    }var o, s, t;return "undefined" != typeof Float32Array ? (i = new Float32Array([-0]), n = new Uint8Array(i.buffer), t = 128 === n[3], e.writeFloatLE = t ? writeFloat_f32_cpy : writeFloat_f32_rev, e.writeFloatBE = t ? writeFloat_f32_rev : writeFloat_f32_cpy, e.readFloatLE = t ? readFloat_f32_cpy : readFloat_f32_rev, e.readFloatBE = t ? readFloat_f32_rev : readFloat_f32_cpy) : (e.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE), e.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE), e.readFloatLE = readFloat_ieee754.bind(null, readUintLE), e.readFloatBE = readFloat_ieee754.bind(null, readUintBE)), "undefined" != typeof Float64Array ? (o = new Float64Array([-0]), s = new Uint8Array(o.buffer), t = 128 === s[7], e.writeDoubleLE = t ? writeDouble_f64_cpy : writeDouble_f64_rev, e.writeDoubleBE = t ? writeDouble_f64_rev : writeDouble_f64_cpy, e.readDoubleLE = t ? readDouble_f64_cpy : readDouble_f64_rev, e.readDoubleBE = t ? readDouble_f64_rev : readDouble_f64_cpy) : (e.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4), e.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0), e.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4), e.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0)), e;
  }function writeUintLE(e, t, r) {
    t[r] = 255 & e, t[r + 1] = e >>> 8 & 255, t[r + 2] = e >>> 16 & 255, t[r + 3] = e >>> 24;
  }function writeUintBE(e, t, r) {
    t[r] = e >>> 24, t[r + 1] = e >>> 16 & 255, t[r + 2] = e >>> 8 & 255, t[r + 3] = 255 & e;
  }function readUintLE(e, t) {
    return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0;
  }function readUintBE(e, t) {
    return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
  }e.exports = factory(factory);
}, function (e, t, r) {
  "use strict";
  e.exports = function (e, t) {
    var r = new Array(arguments.length - 1),
        o = 0,
        i = 2,
        s = !0;for (; i < arguments.length;) r[o++] = arguments[i++];return new Promise(function (i, n) {
      r[o] = function (e) {
        if (s) if (s = !1, e) n(e);else {
          var t = new Array(arguments.length - 1),
              r = 0;for (; r < t.length;) t[r++] = arguments[r];i.apply(null, t);
        }
      };try {
        e.apply(t || null, r);
      } catch (e) {
        s && (s = !1, n(e));
      }
    });
  };
}, function (e, t, r) {
  "use strict";
  function EventEmitter() {
    this._listeners = {};
  }(e.exports = EventEmitter).prototype.on = function (e, t, r) {
    return (this._listeners[e] || (this._listeners[e] = [])).push({ fn: t, ctx: r || this }), this;
  }, EventEmitter.prototype.off = function (e, t) {
    if (void 0 === e) this._listeners = {};else if (void 0 === t) this._listeners[e] = [];else {
      var r = this._listeners[e];for (var i = 0; i < r.length;) r[i].fn === t ? r.splice(i, 1) : ++i;
    }return this;
  }, EventEmitter.prototype.emit = function (e) {
    var t = this._listeners[e];if (t) {
      var r = [],
          i = 1;for (; i < arguments.length;) r.push(arguments[i++]);for (i = 0; i < t.length;) t[i].fn.apply(t[i++].ctx, r);
    }return this;
  };
}, function (e, t) {
  e = e.exports;var n = e.isAbsolute = function (e) {
    return (/^(?:\/|\w+:)/.test(e)
    );
  };var i = e.normalize = function (e) {
    var t = (e = e.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/"),
        r = n(e),
        e = "";r && (e = t.shift() + "/");for (var i = 0; i < t.length;) ".." === t[i] ? 0 < i && ".." !== t[i - 1] ? t.splice(--i, 2) : r ? t.splice(i, 1) : ++i : "." === t[i] ? t.splice(i, 1) : ++i;return e + t.join("/");
  };e.resolve = function (e, t, r) {
    return r || (t = i(t)), !n(t) && (e = (e = !r ? i(e) : e).replace(/(?:\/|^)[^/]+$/, "")).length ? i(e + "/" + t) : t;
  };
}]);