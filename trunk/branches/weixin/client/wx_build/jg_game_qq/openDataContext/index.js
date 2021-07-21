console.info("数据域开始执行")
// var param = {type:number,data:any};
let paramData;
let friendList;
qq.onMessage((param) => {
    let type = param.type;
    paramData = param.data;

    switch (type) { //请求数据
        case 1:
            getFriend();
            break;
        case 2:
            let index = paramData.index;
            shareMessageToFriend(index);
            break;
    }
})
var drawHead = function () {
    if (!friendList || friendList.length <= 0)
        return;
    const sharedCanvas = qq.getSharedCanvas();
    const context = sharedCanvas.getContext('2d');
    context.clearRect(0,0,sharedCanvas.width,sharedCanvas.height);  
    context.fillStyle = "#ffffff";
    context.font = "24px Arial";
    for (let i = 0; i < 3; i++) {
        let url = friendList[i]["avatarUrl"];
        let name = friendList[i]["nickname"];
        name = name.substring(0,7)        
        let x = paramData.space * i;
        let measureText = context.measureText(name);
        // ctx.fillText("width:" + .width,10,50)
        let space = paramData.space - measureText.width;
        if (space < 0)
            space = 0;
        context.fillText(name, x + space / 2, 130, 150);
        let img = qq.createImage()
        img.onload = function () {
            // imgLoad = true
            context.drawImage(img, x + 25, 0,100,100);
            console.log("进drawImage：：", i, "name:", name, "nameWidth:", measureText.width, "url:", url, "x:", x, "width:", sharedCanvas.width,"height:",sharedCanvas.height);
        }
        img.src = url;
    }
}


var getFriend = function (index) {
    qq.getPotentialFriendList({
        success(res) {
            friendList = res.list;
            console.log(" getPotentialFriendList success:", res)
            drawHead();
        },
        fail(res) {
            console.log(" getPotentialFriendList fail:", res)
        },
        complete(res) {
            console.log("getPotentialFriendList complete:", res)
        }
    })
}


var shareMessageToFriend = function (index) {
     if (!friendList || friendList.length <= 0)
        return;
    if (index == void 0) {
        index = 0;
    }
    if (index >= friendList.length) {
        index = 0;
    }
    let info = friendList[index];
    let param = {
        friendInfo: {
            avatarUrl: info["avatarUrl"],
            nickname: info["nickname"],
            openid: info["openid"]
        },
        // title: paramData.share_title || "找朋友一起玩吧",
        imageUrl: "res/atlas/share.jpg",//paramData.share_img || info["avatarUrl"],
        success: function (res) {
            console.info("定向分享接口调用成功:",res)
        },
        fail: function (res) {
            console.info("定向分享接口调用失败:", res)
        },
        complete: function (res) {
            console.info("定向分享接口调用完成:", res)
        }
    }
    console.info("开始定向分享:", JSON.stringify(param))
    qq.shareMessageToFriend(param);
}
// qq.onTouchEnd((event) => {
//     console.info("点击调用")
//     shareMessageToFriend();
//     // const l = event.changedTouches.length;
//     // for (let i = 0; i < l; i++) {
//     //     console.log(event.changedTouches[i]);
//     // }
// }
// )