var m = wx.$g;
var sdkConfig = require('./config.js');
var sdk = require('./sdk/sdk.min.js');
var apmSDK, wallSDK, crossSDK;

if (sdkConfig.useApm) {
    try {
        apmSDK = require('./sdk/wxapm.min.js');
    } catch (e) {}
}

if (sdkConfig.useWall) {
    try {
        wallSDK = require('./sdk/wall-sdk.min.js');
    } catch (e) {}
}

if (sdkConfig.useCross) {
    try {
        crossSDK = require('./sdk/cross-sdk.min.js');
    } catch (e) {}
}

var hortor = {
    config: sdkConfig,
    sdk: sdk,
    wxapm: apmSDK,
    wallSDK: wallSDK,
    cross: crossSDK,

    init: function (config) {
        hortor.config = Object.assign(hortor.config || {}, config);
        hortor.wxapm && hortor.wxapm.init(Object.assign({}, hortor.config));
        hortor.sdk.init(Object.assign({}, hortor.config));
        hortor.wallSDK && hortor.wallSDK.init(Object.assign({}, hortor.config));
        if (hortor.sdk.registerOnLogin) {
            hortor.sdk.registerOnLogin(function (encryptData) {
                var userSdk = encryptData && encryptData.data && encryptData.data.userSdk;
                hortor.cross && hortor.cross.init(Object.assign({}, hortor.config, userSdk));
                hortor.wallSDK && hortor.wallSDK.setUserSDK(userSdk);
                hortor.wxapm && hortor.wxapm.setUserInfo({ userId: userSdk.uniqueId });
            });
        }
    }
};

(function () {
    if (typeof module !== 'undefined') {
        module.exports = hortor;
    }
    if (typeof window !== 'undefined') {
        window.hortor = hortor;
    }
})();