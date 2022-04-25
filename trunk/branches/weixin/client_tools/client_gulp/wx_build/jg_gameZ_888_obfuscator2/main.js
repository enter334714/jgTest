"use strict";

var H = wx.$F;
window.boot = function () {
  var settings = window._CCSettings;
  window._CCSettings = undefined;

  if (!settings.debug) {
    var uuids = settings.uuids;
    var rawAssets = settings.rawAssets;
    var assetTypes = settings.assetTypes;
    var realRawAssets = settings.rawAssets = {};

    for (var mount in rawAssets) {
      var entries = rawAssets[mount];
      var realEntries = realRawAssets[mount] = {};

      for (var id in entries) {
        var entry = entries[id];
        var type = entry[1]; // retrieve minified raw asset

        if (typeof type === H[4]) {
          entry[1] = assetTypes[type];
        } // retrieve uuid


        realEntries[uuids[id] || id] = entry;
      }
    }

    var scenes = settings.scenes;

    for (var i = 0; i < scenes.length; ++i) {
      var scene = scenes[i];

      if (typeof scene.uuid === H[4]) {
        scene.uuid = uuids[scene.uuid];
      }
    }

    var packedAssets = settings.packedAssets;

    for (var packId in packedAssets) {
      var packedIds = packedAssets[packId];

      for (var j = 0; j < packedIds.length; ++j) {
        if (typeof packedIds[j] === H[4]) {
          packedIds[j] = uuids[packedIds[j]];
        }
      }
    }

    var subpackages = settings.subpackages;

    for (var subId in subpackages) {
      var uuidArray = subpackages[subId].uuids;

      if (uuidArray) {
        for (var k = 0, l = uuidArray.length; k < l; k++) {
          if (typeof uuidArray[k] === H[4]) {
            uuidArray[k] = uuids[uuidArray[k]];
          }
        }
      }
    }
  }

  var onStart = function onStart() {
    cc.loader.downloader._subpackages = settings.subpackages;
    cc.view.enableRetina(true);
    cc.view.resizeWithBrowserSize(true);
    var launchScene = settings.launchScene; // load scene

    cc.director.loadScene(launchScene, null, function () {
      cc.loader.onProgress = null;
      console.log(H[5] + launchScene);
    });
  }; // jsList


  var jsList = settings.jsList;
  var bundledScript = settings.debug ? H[6] : H[7];

  if (jsList) {
    jsList = jsList.map(function (x) {
      return H[8] + x;
    });
    jsList.push(bundledScript);
  } else {
    jsList = [bundledScript];
  }

  var packProto = H[9];
  //console.log("开始分包加载" + packProto);
  const loadTask2 = wx.loadSubpackage({
    name: packProto, // name 可以填 name 或者 root
    success: function (res) {
      //console.log("完成 分包加载" + packProto +"成功");


      var packMain = H[10];
      //console.log("开始分包加载" + packMain);
      const loadTask3 = wx.loadSubpackage({
        name: packMain, // name 可以填 name 或者 root
        success: function (res) {
          //console.log("完成 分包加载" + packMain +"成功");
          var isSubContext = cc.sys.platform === cc.sys.WECHAT_GAME_SUB;
          var option = {
            id: H[11],
            scenes: settings.scenes,
            debugMode: settings.debug ? cc.debug.DebugMode.INFO : cc.debug.DebugMode.ERROR,
            showFPS: !isSubContext && settings.debug,
            frameRate: 60,
            jsList: jsList,
            groupList: settings.groupList,
            collisionMatrix: settings.collisionMatrix
          }; // init assets

          cc.AssetLibrary.init({
            libraryPath: H[12],
            rawAssetsBase: H[13],
            rawAssets: settings.rawAssets,
            packedAssets: settings.packedAssets,
            md5AssetsMap: settings.md5AssetsMap,
            subpackages: settings.subpackages
          });
          cc.game.run(option, onStart);
        },
        fail: function (res) {
          // 分包加载失败通过 fail 回调 
          //console.warn("分包"+ packMain+"加载失败");
        },

        compelete: function (res) {
          //console.warn("分包加载"+ packMain +"完成", res);
        }
      });
    },
    fail: function (res) {
      // 分包加载失败通过 fail 回调 
      //console.warn("分包"+ packProto+"加载失败");
    },

    compelete: function (res) {
      //console.warn("分包加载"+ packProto +"完成", res);
    }
  });
};