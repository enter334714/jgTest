var GetSet = /** @class */ (function () {
    function GetSet() {
        this._saoyu = 10;
    }
    Object.defineProperty(GetSet.prototype, "saoyu", {
        set: function (v) {
            this._saoyu = v;
        },
        enumerable: true,
        configurable: true
    });
    return GetSet;
}());
