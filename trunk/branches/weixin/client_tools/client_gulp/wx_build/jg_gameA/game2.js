// var testUrl1 = 'https://api-tjqytest.shzbkj.com?deviceId=1914bb17-5c38-8235-ab75%2Bce90f2aebfdd&game_pkg=tjqy_tjqyksxyx_KE&method=User.login&partner_id=499&platform=9130&scene=WX_0&time=1645100104&token=de1e068c85b7f770efd192c8eceb1c8b&sign=af6119130e1755fd88a9d0f2a4f715f7';
// wx.request({
//   url: testUrl1, //仅为示例，并非真实的接口地址
// //   data: data,
//   header: {
//     'content-type': 'application/x-www-form-urlencoded' // 默认值
//   },
//   success (res) {
//     console.log(res)
//   }
// })
var xmlhttp = new Laya.XMLHttpRequest();
xmlhttp.open("GET", testUrl1, true);
xmlhttp.send(null);
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4) {// 4 = "loaded"
    console.log("返回成功：",xmlhttp)
        if (xmlhttp.status == 200) {// 200 = OK
             console.log(xmlhttp.response)
        }
        else {
            alert("Problem retrieving XML data");
        }
    }
};