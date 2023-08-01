//入口文件
window.navigator.userAgent = 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 OPPO MiniGame NetType/WIFI Language/zh_CN';
var fs = qg.getFileSystemManager();
var localDir = qg.env.USER_DATA_PATH;
console.log("localUserDir2:", localDir)


// fs.readFile(
//   {
//     filePath: qg.env.USER_DATA_PATH + "/cachefile.json",
//     encoding: "utf8",
//     success(res) {
//       console.log("读取文件测试 success:", res)
//     },
//     fail(res) {
//       console.log("读取文件测试 fail:", res)
//     },
//     complete(res) {
//       console.log("读取文件测试 complete:", res)
//     }
//   }
// )



// 测试qg.env.USER_DATA_PATH + /cachefile.txt 路径写入
fs.writeFile({
  filePath: qg.env.USER_DATA_PATH + "/cachefile888.json",
  data: JSON.stringify({a:1,b:2,c:3}),
  encoding: "utf8",
  success(res) {
    console.log("测保存缓存列表试  success");
  },
  fail(res) {
    console.log("测试 保存缓存列表 fail:", res);
  },
  complete(res) {
    console.log("测试 保存缓存列表 complete:", res);
  }
});

// //测试直接 /cachefile.txt 路径写入
// fs.writeFile({
//   filePath: "/cachefile1.json ",
//   data: "Hello world",
//   encoding: "utf8",
//   success(res) {
//     cosole.log("测试直接写入 保存缓存列表 success");
//   },
//   fail(res) {
//     cosole.log("测试直接写入 保存缓存列表 fail:", res);
//   },
//   complete(res) {
//     cosole.log("测试直接写入 保存缓存列表 complete:", res);
//   }
// });



require("game.js");

//测试qg.env.USER_DATA_PATH + /my 路径创建
// fs.mkdir({
//   dirPath: qg.env.USER_DATA_PATH + `/my/`,
//   success(res) {
//     this.log(`测试 创建目录成功1：${localDir} `)
//   },
//   fail(res) {
//     this.log(`测试 创建目录失败1：${localDir}, ${JSON.stringify(res)} `)
//   },
//   complete(res) {
//     this.log(`测试 创建目录完成1：${localDir}, ${JSON.stringify(res)} `)
//   }

// })

// //测试直接创建
// fs.mkdir({
//   dirPath: `/my/`,
//   success(res) {
//     this.log(`测试 创建目录成功2：${localDir} `)
//   },
//   fail(res) {
//     this.log(`测试 创建目录失败2：${localDir}, ${JSON.stringify(res)} `)
//   },
//   complete(res) {
//     this.log(`测试 创建目录完成2：${localDir}, ${JSON.stringify(res)} `)
//   }
// })
