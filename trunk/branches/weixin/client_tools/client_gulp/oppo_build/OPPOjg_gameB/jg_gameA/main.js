//入口文件
window.navigator.userAgent = 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 OPPO MiniGame NetType/WIFI Language/zh_CN';
console.log("fs4")
var fs = qg.getFileSystemManager();
console.log("fs4:",fs)
fs.readFile({
  filePath:"tet.ani", //不存在的文件
  encoding:"utf8",
  success(res){
    console.log("success res:",res)
  },
  fail(res){
    console.log("fail: res:",res)
  },
  complete(res){
    console.log("complete: res:",res)
  }
})

fs.readFile({
    filePath:"tet.ani",
    encoding:"utf8",
    success:function(res){
      console.log("function success res:",res)
    },
    fail:function(res){
      console.log("function fail: res:",res)
    },
    complete:function(res){
      console.log("function complete: res:",res)
    }
  })



require("game.js");