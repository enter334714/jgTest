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
        let x = paramData.space * i;
        let measureText = context.measureText(name);
        // ctx.fillText("width:" + .width,10,50)
        let space = paramData.space - measureText.width;
        if (space < 0)
            space = 0;
        context.fillText(name, x + space / 2, 150, 150);
        let img = qq.createImage()
        img.onload = function () {
            // imgLoad = true
            context.drawImage(img, x + 25, 0);
            console.error("进drawImage：：", i, "name:", name, "nameWidth:", measureText.width, "url:", url, "x:", x, "width:", sharedCanvas.width);
        }
        img.src = url;
    }
}


var getFriend = function (index) {
    qq.getPotentialFriendList({
        success(res) {
            friendList = res.list;
            console.error(" getPotentialFriendList success:", res)
            drawHead();
        },
        fail(res) {
            console.error(" getPotentialFriendList fail:", res)
        },
        complete(res) {
            console.error("getPotentialFriendList complete:", res)
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

    console.info("开始定向分享:", info)
    let param = {
        friendInfo: {
            avatarUrl: info["avatarUrl"],
            nickname: info["nickname"],
            openid: info["openid"]
        },
        title: paramData.share_title || "找朋友一起玩吧",
        imageUrl: paramData.share_img || "",
        success: function (res) {
            console.info("定向分享接口调用成功")
        },
        fail: function (res) {
            console.info("定向分享接口调用失败:", res)
        },
        complete: function (res) {
            console.info("定向分享接口调用完成:", res)
        }
    }
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