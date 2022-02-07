var H = wx.$F;
import QCSDK from '../libs/7cwan_sdk';
var MYWXSDK_SDK = myWxMainSDK();
var GAMEVERSION = { game_ver: '1.0.2' };

function myWxMainSDK() {
	return {
		login: function (data, callback) {
			QCSDK.init(GAMEVERSION, function wxSDKInitBack(restData) {

				QCSDK.login(function (status, data) {
					if (status == 0) {
						var selectServer = window["selectServer"];
						if (selectServer) selectServer.LoginFunction({ openId: data.userid });
					} else console.log("QCSDK登录／注册失败：" + data.errMsg);
				});
			});
		},

		pay: function (data, callback) {
			var payInfo = {};
			payInfo.cpbill = data['orderid']; //游戏订单号
			payInfo.productid = data['goodid']; //商品ID
			payInfo.productname = data['subject']; //商品名称
			payInfo.productdesc = data['desc']; //商品描述
			payInfo.serverid = data['serverid']; //服务器ID
			payInfo.servername = data['servername']; //服务器名称
			payInfo.roleid = data['actorid']; //角色ID
			payInfo.rolename = data['actorname']; //角色名称
			payInfo.rolelevel = data['level']; //角色等级
			payInfo.price = data['goodid']; //金额
			payInfo.extension = 'wx'; //扩展数据(val1|val2...) platform_name
			QCSDK.pay(payInfo, callback);
		},

		logRoleInfo(data, callback) {
			var sendType = data['sendType'];
			var serverId = data['serverid'];
			var serverName = data['servername'];
			var roleId = data['actorid'];
			var roleName = data['actorname'];
			var roleLevel = data['level'];
			if (sendType == 0) {
				roleLevel = 0;
				QCSDK.logCreateRole(serverId, serverName, roleId, roleName, roleLevel);
			} else if (sendType == 1) QCSDK.logEnterGame(serverId, serverName, roleId, roleName, roleLevel);else if (sendType == 2) QCSDK.logRoleUpLevel(serverId, serverName, roleId, roleName, roleLevel);
		},

		checkMsg(data, callback) {
			QCSDK.checkMsgV2(data, callback);
		}
	};
}

function run(method, data, callback) {
	method in MYWXSDK_SDK && MYWXSDK_SDK[method](data, callback);
}

exports.login = function (data, callback) {
	run('login', data, callback);
};

exports.logRoleInfo = function (data, callback) {
	run('logRoleInfo', data, callback);
};

exports.checkMsg = function (data, callback) {
	run('checkMsg', data, callback);
};

exports.pay = function (data, callback) {
	run('pay', data, callback);
};