console.info("0 进入游戏包");

// my.getFileSystemManager().rmdirSync({

//     dirPath: my.env.USER_DATA_PATH,

//     recursive: true

// });
let res = my.getStorageSync({ key: 'clearKey' });
console.log("res:",res);
if (res.success) {   
    let data = res.data;
    if(data.clean == 1)
    {
        var result1 = my.getFileSystemManager().rmdirSync({dirPath:my.env.USER_DATA_PATH,recursive:true});
        // var result2 = my.getFileSystemManager().rmdirSync({dirPath:"https://resource/",recursive:true});
        // var result1 = my.getFileSystemManager().rmdirSync(my.env.USER_DATA_PATH,true);
        // var result2 = my.getFileSystemManager().rmdirSync("https://resource/",true);
        my.clearStorageSync({ key: 'clearKey' })
        console.log("清理缓存成功");
        console.log("清理状态1",result1);     
        // let fs = my.getFileSystemManager();
        // fs.getSavedFileList({
        //     success: (res) => {
        //         let fileList = res.fileList;
        //         console.log("清理状态1",result1);                
        //         console.log("从fileList文件数组中取值success：",fileList);
        //     },
        //     fail:(res)=>{
        //         console.log("从fileList文件数组中取值fail：",res);
        //     }
        // });
    }
  
}
// let fs = my.getFileSystemManager();
// let cacheFilePath = `${my.env.USER_DATA_PATH}/cachefile2.json`;
// function TestDown() {
//     let time = Date.now();
//     const task = my.downloadFile({
//         url: 'https://cdn-tjqy.sh9130.com/weixinbak2_1/versions/assets/configs__5715.mpacks',
//         success({ apFilePath }) {
//             console.log(`downloadFile 下载耗时:`, Date.now() - time)
//             let saveTime = Date.now();
//             fs.saveFile({
//                 tempFilePath: apFilePath,
//                 // filePath: "filePath",//saveFile不传filePath，会保存在用户缓存目录,传了则保存在用户目录
//                 success: (res) => {
//                     console.log(`saveFile 保存耗时:`, Date.now() - saveTime, "res:", res)
//                     console.log(res.savedFilePath);
//                     let readTime = Date.now();
//                     var json = {
//                         path: res.savedFilePath
//                     }
//                     fs.writeFile({
//                         filePath: cacheFilePath,
//                         encoding: 'utf8',
//                         data: JSON.stringify(json),
//                         success: (res) => {
//                             console.log("writeFile:", res);  // {success: true}                         
//                         },
//                         fail: (err) => {
//                             console.log(err)  // {"error":2,"errorMessage":"无效参数"} 
//                         }
//                     })
//                     fs.readFile({
//                         filePath: res.savedFilePath,
//                         success: (res) => {
//                             console.log(res);
//                             console.log(`readFile 读取耗时:`, Date.now() - readTime)
//                         }
//                     });
//                 }
//             })
//         },
//         fail(res) {
//             my.alert({
//                 content: res.errorMessage || res.error,
//             });
//         },
//     });

// }

// console.log("cacheFilePath:", cacheFilePath)
// fs.readFile({
//     filePath: cacheFilePath,
//     encoding: "utf8",
//     success: (res) => {
//         console.log(res);
//         console.log("读取cache成功：:", res)
//         var json = JSON.parse(res.data);

//         var path = json.path;


//         let index1 = path.lastIndexOf("/") + 1;
//         let index2 = path.lastIndexOf(".");
//         let unzipPath = `${my.env.USER_DATA_PATH}/unzip/` + path.slice(index1, index2) + "/";
//         console.log("unzipPath:", unzipPath)
//         let unzipTime = Date.now();
//         fs.unzip(
//             {
//                 zipFilePath: path,
//                 targetPath: unzipPath,
//                 success: (res) => {
//                     console.log("解压成功 耗时:", Date.now() - unzipTime, "res:", res);
//                     let readTime = Date.now();
//                     fs.readFile({
//                         filePath: unzipPath + "res",
//                         success: (res) => {

//                             console.log(`readFile 读取耗时:`, Date.now() - readTime)
//                         }
//                     });
//                 },
//                 fail: (res) => {
//                     console.log("解压失败 耗时:", Date.now() - unzipTime, "res:", res);
//                 }
//             }
//         )
//     },
//     fail: (res) => {
//         console.log("没有缓存去下载:", res)
//         TestDown();
//     },
// });



//   my.request({
//     url: 'https://cdn-tjqy-xy.sh9130/weixinbak2_1/versions/assets/configs__5715.mpacks',
//     method: "GET",
//     dataType:"arraybuffer",
//     success: function (res) {     
//       if (res && res.status == 200) {
//         var response = res.data;
//         console.log("request加载成功:")
//         console.log("request加载成功1:",response)
//         let profile = res.profile;
//         console.log("request加载成功耗时:",profile.totalTime)
//         console.log(`request加载成功耗时1:`,Date.now()-time)
//       }
//     },
//     fail: function (res) {
//       console.log("send.fail:", url, info, res);

//     },
//     complete: function () { }
//   });
console.info("1 加载游戏");
my.showLoading({ content: '正在加载' });
require("./wx_aksdk.js");
var loadLibs = function () {
    console.log("libs 分包加载");
    my.loadSubpackage({
        name: 'libs',
        success: function (res) {
            console.log("libs 分包加载:", res)
            window.sdkInit();
            window.loadPackList(function(){
                window.initMain();
                window.enterToGame(); 
            });  

        },
        fail: function (res) {
            console.log("libs 分包加载失败:", res);

        },
    });
    // loadLibsTask && loadLibsTask.onProgressUpdate(res => {
    // console.log('libs 下载进度:' + res.progress + '%, 已经下载的数据长度', res.totalBytesWritten, '预期需要下载的数据总长度', res.totalBytesExpectedToWrite);
    // });
}

//监听小游戏切前台事件
my.onShow(function (res) {
    my.onShowData = res;
    if (my.onShowCallback && my.onShowData) {
        console.info("小游戏切前台事件，场景值：" + my.onShowData.scene);
        my.onShowCallback(my.onShowData);
        my.onShowData = null;
    }
})

my.onHide(function () {
    console.info("小游戏进入后台");
    if (my.onHideCallBack) {
        my.onHideCallBack();
    }
});
loadLibs();

