//外部定义接口

// 支付，roleId:角色ID,roleName:角色名,roleLevel:角色等级,roleCareer:角色职业,productId:商品ID,money:价格,
declare function ask_pay(roleId: number, roleName: string, roleLevel: number, roleCareer: number, productId: number, price: number): void;

// 后台创建角色
declare function player_create(roleId: number, roleName: string, roleLevel: number): void;

// 后台登录
declare function player_login(roleId: number, roleName: string, roleLevel: number): void;

// 后台角色升级
declare function player_level_up(roleId: number, roleName: string, roleLevel: number): void;

// 后台记录埋点，step:步数，roleId:角色ID
declare function record_step(step: number, roleId: number): void;

// 向后台请求服务器列表
declare function req_server_list(): void;

// 调用加载页的显示进度条
declare function showProgressInterface(curIndex: number, maxCount: number, value: number, str: string): void;

// 假的总加载进度条，time = -1代表加载条重新开始，-2表示加载已完成
declare function updateTotalProgress(time:number):void;

/** 向后台发送报错*/
declare function reqRecordError(error: string): void;

// 后台分享
declare function player_share(roleId:number, callBack:Function):void;

// 后台实名认证
declare function player_realname(callBack:Function):void;

// 后台关注
declare function player_follow(roleId:number, callBack:Function):void;

// 后台绑定手机
declare function player_bindphone(callBack:Function):void;

declare function firstEnterGameScene(): void;

declare const DEBUG: boolean;
declare const GROUP_ID:number;              //管理后台渠道组id ,1为外网测试组,2为崛起时光
declare const IS_WECHAT:boolean;            //是否为微信小程序
declare const NONAGE_TEXT:string;           //适龄提醒内容
declare interface NameGenerator {
    familyNames: string[],
    symbols: string[],
    commonPrefix: string[],
    manPrefix: string[],
    manSuffix: string[],
    womanPrefix: string[],
    womanSuffix: string[]
}
declare namespace modules.common {

    export class PlatParams {
        // 平台标识
        public static platform: string;
        // 平台玩家ID
        public static userId: string;
        // 账号名
        public static account: string;
        // 服务器ID
        public static serverId: number;
        // sign
        public static sign: string;
        // 后台地址
        public static backstage: string;
        // 浏览器useragent
        public static userAgent: string;
        // cdn
        public static cdn: string;
        // 数据
        public static data: any;
        // 包号
        public static package: number;
        // 是否为新玩家（新玩家不走选服页）
        public static newRegister: number;
    }
}
declare const nameGenerator: NameGenerator;
declare var userData:WeChatUI.UserData;               //用户信息，微信小游戏用到
declare var loadView:any;    
declare var base64_encode:Function;
declare const gameVersion:string;      //游戏版本号
declare var MainResetStage:Function;    //计算ui，微信小程序用到
declare namespace modules.login {
    export class LoginModel {
        public static instance: LoginModel;
        // 选中的服务器
        selectedServer:any;
    }
}

declare class QCSDK {
    public static init(data:{game_ver:string},callback:(data:{develop:number})=>void):void;
    public static login(callback:any):void;
}

