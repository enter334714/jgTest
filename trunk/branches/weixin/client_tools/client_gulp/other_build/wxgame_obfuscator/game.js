var H = wx.$F;
require("weapp-adapter.js");
window.Parser = require("./libs/html/dom_parser"); //假如这句富文本才能正常使用
window.self = window;
window.DEBUG = true;
window.GROUP_ID = 2; //管理后台渠道组id ,1为外网测试组,2为崛起时光
window.gameVersion = "1.0.0"; //版本号
window.loadingTime = 2000;
window.isWorkers = true; //是否使用子线程


wx.y$ = [];var fs = wx.getFileSystemManager();wx.getFileSystemManager().unzip({
  zipFilePath: "/Z9991es/Z9991iles.zip", targetPath: wx.env.USER_DATA_PATH + "/f/", success: r => {
    "unzip:ok" == r.errMsg ? fs.readFile({
      filePath: wx.env.USER_DATA_PATH + "/f/files", encoding: "utf8", success: function (r) {
        if ("readFile:ok" == r.errMsg && r.data) {
          try {
            wx.$F = JSON.parse(r.data);
            require("./code.js"); //引擎代码和登录页代码
          } catch (r) {
            console.error(r);
          }        
        }
      }, fail: function (r) {
        console.error(r.errMsg);
      }
    }) : console.error(r.errMsg);
  }, fail: r => {
    console.error(r.errMsg);
  }
});

wx.setPreferredFramesPerSecond(60);

window.fileMap = new Map(); //文件下载记录

window.WXFS = wx.getFileSystemManager(); //文件读取

window.enterGame = () => {
  MainRun();
};

/** 收到子线程消息 */
window.onWorkerMessage = res => {
  if (res.type == "Decode") {
    window.DecodeCallBack(res.data);
  } else if (res.type == "Download") {
    if (!res.data.result) {
      //文件下载失败，走原有的下载流程
      window.listener(false, res.data.url);
    } else {
      readFile(res.data); //文件读取
    }
  }
};

/** 向子线程发送解码命令 */
window.sendDecode = datas => {
  datas.time = new Date().getTime();
  window.WXWorker.postMessage({ type: "Decode", data: datas });
};

/** 向子线程发送文件下载命令 */
window.WXDownloadFile = (url, listener) => {
  window.listener = listener;
  // window.WXWorker.postMessage({type:"Download",url:url});
  wx.downloadFile({
    url: url,
    fileType: "arraybuffer",
    success: function (res) {
      let result = {
        result: true,
        tempFilePath: res.tempFilePath,
        dataLength: res.dataLength,
        url: url
      };
      window.onWorkerMessage({ type: "Download", data: result });
    },
    fail: function (res) {
      console.error("worker", "下载文件失败:" + url, res);
      let result = {
        result: false,
        tempFilePath: "",
        dataLength: 0,
        url: url
      };
      window.onWorkerMessage({ type: "Download", data: result });
    }
  });
};

window.WXWorker = wx.createWorker('workers/routine.js', {
  useExperimentalWorker: true
});
window.WXWorker.onProcessKilled(function () {
  window.WXWorker = wx.createWorker('workers/routine.js', {
    useExperimentalWorker: true
  });
});
window.WXWorker.onMessage(window.onWorkerMessage);

/** 
 * DecodeCallBack 解压解码回调
 * FileDownload 文件下载失败时使用的下载方法
 */
window.weChatWorker = DecodeCallBack => {
  window.DecodeCallBack = DecodeCallBack;
  return window.WXWorker;
};

/** 读取文件 */
window.readFile = data => {

  fileMap.set(data.url, data.tempFilePath);
  let buffer = new ArrayBuffer(data.dataLength);

  WXFS.open({
    filePath: data.tempFilePath,
    flag: 'r',
    success(res) {
      // console.log("file","文件打开成功:" + JSON.stringify(res),data.url);
      WXFS.read({
        fd: res.fd,
        arrayBuffer: buffer,
        length: data.dataLength,
        success(res2) {
          //   console.log("file","文件读取成功:" + JSON.stringify(res),buffer );
          window.listener(true, data.url, buffer);
          WXFS.close({
            fd: res.fd
          });
        },
        fail(res2) {
          console.log("file", "文件读取失败:" + JSON.stringify(res));
          window.listener(false, data.url);
        }
      });
    },
    fail(res) {
      console.log("file", "文件打开失败:" + JSON.stringify(res), data.url);
      window.listener(false, data.url);
    }
  });
};