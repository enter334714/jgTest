
window.onerror = function (event, source, fileno, columnNumber, error) {
    alert(error.toString() + "\n" + source + "\n" + fileno + ":" + columnNumber + "\n" + error ? error.stack : "");
};

window.onload = function () {
   // onServerInit(document.getElementById("serverSelect"));
    if (localStorage && localStorage.user) {
        document.getElementById("user").value = localStorage.user;
    }
};


function onEnter() {

    var user = document.getElementById("user").value;
    if (user.length == 0) {
        window.alert("用户名不能为空");
        return;
    }

    type = document.getElementById("type");

    var node = document.getElementById("login");
    document.body.removeChild(node);
    if(localStorage) localStorage.user = user;

    var qrcode = document.getElementById("qrcode");
    document.body.removeChild(qrcode);

    var backstage = "http://172.16.70.43";
    var pack = '8070';

    //ajax到后台获取服务器数据
    sendXHR(backstage, "/api/sdk/game.php", "localCheck/run/" + encodeURIComponent(user) + "/" + pack, null, function(data){
        //console.log(data); return
        if (!data) return;
        if (data.errCode === 200) {
            var JiaData = {};
            var data = data.data;
            var server = data.s;
            
            JiaData.account = data.user.openId;
            JiaData.uid = data.user.openId;
            JiaData.channel = data.channel;
            JiaData.package = data.package;
            JiaData.mac = '';
            JiaData.cdn = data.cdn;
            JiaData.rvtype = 0;
            JiaData.newregister = data.newregister;
            JiaData.sign = data.sign;

            JiaData.channel_num = parseInt(server.channel_num);
            JiaData.tick = parseInt(server.tick);
            JiaData.entry_id = server.zone;
            JiaData.server_sign = server.sign;
            JiaData.is_domain = 0;

            var serverSelect = {
                'server_id': server.server_id,
                'server_name' : server.name,
				'server_num' : parseInt(server.server_num),
                'entry_ip' : server.server_addr,
                'entry_port' : parseInt(server.server_port),
                'status' : parseInt(server.status),
				'cdn' : server.cdn,
            };
            JiaData.selected_server = JSON.stringify(serverSelect);

            jumpLoading(JiaData);
        } 
        else {
            alert(data.msg);
        }
    });
}

// 通用发送请求方法
function sendXHR(url, api, param, data, callBack) {
    //alert(url);
    url = url +"/"+ api +"/"+ btoa(param);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 301)) {
            if (callBack){
                if(xhr.responseType == "") //IE下json为空
                    callBack(JSON.parse(xhr.response));
                else
                    callBack(xhr.response);
            }
        }
    };
    console.log(url);
    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(data);
}

//跳转到加载页
function jumpLoading(data) {
    var arr = [];
    for (var x in data) {
        arr.push(x + "=" + data[x]);
    }
    window.location.href = type.value + ".html?" + arr.join("&");
}
