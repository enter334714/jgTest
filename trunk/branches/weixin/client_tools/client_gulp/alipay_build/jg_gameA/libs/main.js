console.info("2 进入libs分包");
require("my-adapter.js");

require("index.js");
require("libs.min.js");
require("laya.Alipaymini.js");
// Laya["ALIMiniAdapter"].init();
require("init.min.js");
console.info("3 libs初始化完成");
