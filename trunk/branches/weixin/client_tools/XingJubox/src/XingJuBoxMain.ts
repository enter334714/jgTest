import HortorVip from "./HortorVipSdk/hortorVip.js";
export class XingJuBoxMain {
	constructor() {
		let hortorVip = new HortorVip();
		hortorVip.init({
			gameVersion: window["config"].game_ver,      // 游戏版本
			vipGameId: window["config"].partner_game_id, // 大使功能游戏id，跟平台游戏id保持一致；
			env: "Prod",             // 运行环境 测试：Test， 正式：Prod
			userId: window["PF_INFO"].userId,     // 用户平台 uniqueId，没有时可以使用 openId
			// vipGameId: "dddjs-test",
			// env: "Test",
			// userId: "6497efc2b3ccedf546b5d0cabc697960",
			icon: {                  // 悬浮图标默认位置，若不设置默认右上角
				posX: 100,
				posY: 250,
			},
			defShowIcon: true,        // 是否默认展示 icon，默认 true
			onLoad: (err, data) => {  // vip 数据加载完时触发
				console.log('vip data loaded---', err, data);
			}
		});

	}
}
window["XingJuBoxMain"] = XingJuBoxMain;
// new XingJuBoxMain();
