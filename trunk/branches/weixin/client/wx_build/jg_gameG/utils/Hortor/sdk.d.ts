declare namespace hortor.sdk {
    interface ResError {
        /**
         * 错误码
         */
        errCode: number,
        /**
         * 错误信息
         */
        errMsg: string,

        [index: string]: any
    }

    interface ObjMap<T> {
        [index: string]: T
    }

    interface AnyFunction<T> {
        (res?: T): any;
    }

    interface CallbackFunc<T> {
        (data?: T, err?: ResError): void;
    }

    interface Callback<T> {
        // fun: Any<T>,
        callback: CallbackFunc<T>
    }

    interface CallbackOnlyErrFunc {
        (err?: ResError): void;
    }

    interface Sink<T> {
        success?: (res?: T) => void;
        fail?: (err?: ResError) => void;
    }

    interface Sink2<T> {
        success?: (res?: T) => void;
        error?: (err?: ResError) => void;
    }

    interface Sink3<T> extends Sink<T> {
        complete?: (res?: T) => void
    }

    interface GameUserInfo {
        roleId?: string;
        roleName?: string;
        serverId?: string;
        level?: number;
        vipLevel?: number;
        energy?: number;
        money1Consume?: number;
        teamName?: string;
        teamJob?: string;
        roleCtime?: number;
        id?: string;
        wxUnionId?: string;
        /**
         * 扩展字段
         */
        extend?: any
    }
}

declare namespace hortor {
    /**
     * 配置项
     */
    var config: sdk.SdkConfig & sdk.WechatSdkConfig;

    /**
     * 聚合实例化
     */
    function init(config: sdk.SdkConfig & sdk.WechatSdkConfig);

    /**
     * 应用监控
     */
    var wxapm: any | undefined;
    /**
     * 积分墙
     */
    var wallSDK: sdk.WallCallbackInstance | undefined;
    /**
     * 交叉推广
     */
    var cross: sdk.CCrossInstance | undefined;
}

declare namespace hortor.sdk {
    interface LaunchOptions {
        /**
         * 场景值
         */
        scene: number,
        /**
         * 查询参数
         */
        query: ObjMap<any>,
        /**
         * shareTicket
         */
        shareTicket?: string,
        /**
         * 是否是冷启动
         */
        coldStart?: boolean,
        /**
         * 隐藏时长
         */
        hideDuration?: number,
    }

    interface NotchInfo {
        /**
         * 结果
         */
        result: boolean;
        /**
         * 参数不再返回
         */
        bangsWidth: number;
        /**
         * 参数不再返回
         */
        bangsHeight: number;
    }

    interface WXButtonStyle {
        /**
         * 左上角横坐标
         */
        left: number,
        /**
         * 左上角纵坐标
         */
        top: number,
        /**
         * 宽度
         */
        width: number,
        /**
         * 高度
         */
        height: number,
    }

    interface WXButtonOpt {
        /**
         * 按钮的类型
         */
        type: 'text' | 'image',
        /**
         * 按钮上的文本，仅当 type 为 text 时有效
         */
        text?: string,
        /**
         * 按钮的背景图片，仅当 type 为 image 时有效
         */
        image?: string,
        /**
         * 按钮的样式
         */
        style: WXButtonStyle
    }

    interface WechatSdkConfig {
        /**
         * 是否开启获取分享方案
         */
        openGetShareTheme?: boolean,

        /**
         * 模拟分享成功时差
         */
        shareSuccessDiff?: number,

        /**
         * 模拟分享回调延时
         */
        onShareCallbackTime?: number,
        shareThemes?: Array<string>,
        /**
         * 是否开启模拟回调
         */
        useShareAdapter?: boolean,

        /**
         * 是否开启订阅消息上报，
         */
        reportSubscribeMessage?: boolean,

        /**
         * 可实例化视频广告实例上限，默认 3
         */
        maxTempVideoAdLen?: number,

        /**
         * 获取用户信息按钮
         */
        getUserInfoBtn?: WXButtonOpt,

        /**
         * 是否上报截屏
         */
        reportCaptureScreen?: boolean,

        /**
         * 是否启用自动上报STD
         */
        stdAutoUpload?: boolean,
        autoUploadSDTLog?: boolean,

        /**
         * 是否启用自动上报TGA
         */
        tgaAutoUpload?: boolean,

        /**
         * STD心跳频率，单位s
         */
        stdHeartBeatInterval?: number,
        /**
         * 积分墙key
         */
        key?: string,
        /**
         * 积分墙 onShow时任务检查延迟时间
         */
        taskCheckDelay?: number;
        /**
         * 视频广告加载冷却时长
         */
        videoCoolTime?: number,
        /**
         * 视频广告调用超时
         */
        videoTimeout?: number,
    }

    interface WXButton {
		/**
		 * 显示按钮
		 */
        show: () => void;
		/**
		 * 隐藏按钮
		 */
        hide: () => void;
		/**
		 * 销毁按钮
		 */
        destroy: () => void;
		/**
		 * 监听按钮点击事件
		 */
        onTap: (callback: (res: UserInfoRes) => void) => void;
		/**
		 * 取消监听按钮的点击事件
		 */
        offTap: (callback: () => void) => void;
    }

    /**
     * 获取用户信息按钮返回
     */
    interface UserInfoRes {
        userInfo: any;
        rawData: string;
        signature: string;
        encryptedData: string;
        iv: string;
    }

    /**
     * 数据组序列信息
     */
    interface STDSeq {
        /**
         * 序列类型 0视频广告，1分享
         */
        type: number,
        modelId: string,
        /**
         * 分享唯一标识
         */
        shareGuid: string,
        /**
         * 强制分享结果
         */
        forceResult: string
    }
}
declare namespace hortor.sdk {
    /**
     * 获取启动参数
     */
    function launchOptions(): LaunchOptions;

    /**
     * 绑定全局报错
     */
    function onError(callback: AnyFunction<any>);

    /**
     * 获取刘海屏信息
     */
    function getNotchInfo(): NotchInfo

    /**
    * 获取Config
    */
    function getConfig(): SdkConfig & WechatSdkConfig
}
declare namespace hortor.sdk {
	/**
	 * 加密用户信息
	 */
	interface EncryptUserInfo {
		/**
		 * 签名
		 */
		sign: string;
		/**
		 * 时间戳
		 */
		timestamp: number;
		/**
		 * 加密信息
		 */
		userInfo: string;
		[index: string]: any
	}

	interface LoginButtonConfig extends WXButtonOpt {
		withCredentials?: boolean;
		lang?: 'en' | 'zh_CN' | 'zh_TW';
	}

	interface LoginBtnConfig {
		config: LoginButtonConfig;
		onShow: (res: any) => void;
		onTap: (res: any) => void;
	}
}

declare namespace hortor.sdk {
    /**
     * 创建获取用户信息按钮
     */
    function createGetUserInfoBtn(option: LoginButtonConfig): WXButton | null

    /*
     * 强制授权登录
     */
    function login(btnConfig?: LoginBtnConfig): Promise<EncryptUserInfo | null>

    /**
     * 弱授权登录
     */
    function weakLogin(btnConfig?: LoginBtnConfig): Promise<EncryptUserInfo | null>

    /**
     * 更新用户信息
     */
    function updateUserInfo(btnConfig?: LoginBtnConfig): Promise<EncryptUserInfo | null>


    function getGetUserInfoBtn(config?: LoginButtonConfig): WXButton | null

    /**
     * 设置游戏用户信息
     */
    function setGameUserInfo(data: GameUserInfo)
}
/*
 * @description:
 * @author: JMPeng
 * @date: 2020-04-28
 */
declare namespace hortor.sdk {
  interface ShareOptions {
    title?: string;
    imageUrl?: string;
    imageUrlId?: string;
    query?: string;
    /**
     * 序列信息
     */
    sequenceInfo?: STDSeq;
    /**
     * 强制分享结果，success 成功 fail 失败
     */
    forceResult?: string;

    /**
     * 分享方案id
     */
    shareConfigId?: string;
    /**
     * 分享方案类型
     */
    shareType?: string;
    /**
     * 标题模板值
     */
    titleParams?: ObjMap<any>;
    /**
     * 每次分享的唯一标识
     */
    shareGuid?: string;
    /**
     * 动态消息的ID
     */
    activityId?: string;
    /**
     * 动态消息的模板信息
     */
    templateInfo?: ObjMap<any>;
    /**
     * 分享成功回调时间差
     */
    shareSuccessDiff?: number;
    /**
     * 回调延迟
     */
    onShareCallbackTime?: number;
    beforeShare?: (shareData?: ShareData | ShareTheme) => ShareData;
    id?: string;
  }

  interface ShareTheme {
    category: string;
    gameID: string;
    id: string;
    imageUrl: string;
    title: string;
    type: string;
    weight: number;
    shareSuccessDiff: number;
  }

  interface ShareCallbacks {
    /**
     * 分享成功
     */
    success: (res: ShareResult) => void;
    /**
     * 分享失败
     */
    fail?: (err: ShareResult) => void;
    complete?: AnyFunction<ShareResult>
  }

  interface GetShareInfo {
    /**
     * shareTicket
     */
    shareTicket: string;
    timeout?: number;
  }

  interface DecodeShareInfo {
    openGId: string;
  }

  interface UpdateShareData {
    withShareTicket: boolean;
    isUpdatableMessage: boolean;
    activityId?: string;
    templateInfo: ObjMap<any>;
    success?: AnyFunction<any>;
    fail?: AnyFunction<any>;
    complete?: AnyFunction<any>;
  }

  interface ShareResult {
    /**
     * 是否是强制返回结果
     */
    isForce: boolean;
    /**
     * 是否是模拟回调
     */
    isFake: boolean;
    /**
     * 分享用时
     */
    diffTime: number;
    /**
     * 判断为成功时长
     */
    successDiff: number;
    /**
     * 信息
     */
    errMsg?: string;
    errCode?: number;
    /**
     * 分享数据
     */
    shareData?: ShareOptions;
    /**
     * 是否分享成功
     */
    shareSuccess?: boolean;
    /**
     * 总耗时
     */
    spentTime?: number;
  }
}

/*
 * @description:
 * @author: JMPeng
 * @date: 2020-04-28
 */
declare namespace hortor.sdk {
  /**
   * 分享，可使用分享方案
   */
  function shareMessage(options: ShareOptions): Promise<ShareResult>;

  /**
   * 普通分享
   * @param data
   */
  function shareAppMessage(options: ShareOptions): Promise<ShareResult>;

  /**
   * 注册右上角转发
   * @param onShare
   * @returns {*|void}
   */
  function onShareAppMessage(onShare: (res: any) => ShareData): void;
  /**
   * 注册右上角转发朋友圈
   */
  function onShareTimeline(onShare: (res: any) => ShareData): void;
  /**
   * 解析分享信息
   * @param data
   * @returns {*|Promise<DecodeShareInfo>}
   */
  function getShareInfo(data: GetShareInfo): Promise<DecodeShareInfo>;

  /**
   * 分享点展示
   * @param shareType
   */
  function sharePointShow(shareType: string): void;

  /**
   * 修改分享配置
   * @param options
   */
  function resetShareConfig(options: WechatSdkConfig): void;

  /**
   * 获取分享方案
   */
  function getShareData(data: ShareOptions): ShareOptions;

  /**
   * 更新分享菜单
   * @param data
   */
  function updateShareMenu(options: UpdateShareData): void;

  /**
   * 设置 wx.shareMessageToFriend 接口 query 字段的值
   * @param {*} data
   */
  function setMessageToFriendQuery(data: any): void;

  /**
   * 监听主域接收 wx.shareMessageToFriend 接口的成功失败通知
   * @param {*} onShare
   */
  function onShareMessageToFriend(onShare: AnyFunction<any>): void;

  /**
   * 监听成功修改好友的互动型托管数据事件
   * @param {*} onChange
   */
  function onInteractiveStorageModified(onChange: AnyFunction<any>): void;
}

declare namespace hortor.sdk {
    interface MidasPayData {
        /**
         * 支付的类型，不同的支付类型有各自额外要传的附加参数。
         */
        mode: string,
        /**
         * 环境配置
         */
        env?: number,
        /**
         * 在米大师侧申请的应用 id
         */
        offerId: string,
        /**
         * 币种
         */
        currencyType: string,
        /**
         * 申请接入时的平台 platform 与应用id有关。
         */
        platform?: string,
        /**
         * 购买数量。mode=game 时必填。购买数量。详见 buyQuantity 限制说明。
         */
        buyQuantity?: number,
        /**
         * 分区 ID
         */
        zoneId?: string,
        [index: string]: any
    }
    interface PayData {
        /**
         * 订单id
         */
        orderId: string,
        /**
         * 支付跳转类型
         */
        jumpType: number,
        /**
         * 米大师支付信息
         */
        midashiPayInfo?: MidasPayData,
        /**
         * 跳转支付的小程序 appId
         */
        appId?: string,
        /**
         * 跳转路径
         */
        path?: string,
        /**
         * 额外信息
         */
        extraData?: Object,
        /**
         * 版本信息
         */
        envVersion?: 'develop' | 'trial' | 'release',

        /**
         * 标题
         */
        title?: string,
        /**
         * 二维码路径
         */
        imgUrl?: string,

        [index: string]: any
    }
}
declare namespace hortor.sdk {
    /**
     * 米大师支付
     */
    function midasPay(data: PayData): Promise<void>

    /**
     * 跳转支付
     */
    function jumpPay(data: PayData): Promise<void>
}
/*
 * @description:
 * @author: JMPeng
 * @date: 2020-04-28
 */
declare namespace hortor.sdk {
  type SDKLogInfo =
    | SDKTackInfo
    | SDKShareInfo
    | SDKVideoAdInfo
    | SDKAuthInfo
    | GameUserInfo
    | SDKOpenInfo
    | SDKHeartbeatInfo
    | SDKUserProfileInfo
    | SDKLoginInfo;

  interface SDKLoginInfo {
    isNewUser: boolean;
    fShareConfigId: string; // 进入时的分享方案
    extend?: any;
  }
  interface SDKUserProfileInfo {
    label: number;
    extend?: any;
  }
  interface SDKHeartbeatInfo {
    interval: number;
  }
  interface SDKOpenInfo {
    /**
     * 是否是冷启动
     */
    isColdStart: boolean;
    /**
     * 是否是新用户
     */
    isNewUser: boolean;
    /**
     * 扩展字段
     */
    extend?: any;
  }
  interface SDKAuthInfo {
    /**
     * 性别
     */
    gender: number;
    /**
     * 昵称
     */
    nickName: string;
    /**
     * 扩展字段
     */
    extend?: any;
  }
  interface SDKTackInfo {
    extend?: any;
  }
  interface SDKShareInfo {
    /**
     * 分享数据
     */
    shareData: any;
    /**
     * 分享结果
     */
    shareSuccess: boolean;
    /**
     * 耗时
     */
    spentTime: number;
    /**
     * 扩展字段
     */
    extend?: any;
  }

  interface SDKVideoAdInfo {
    /**
     * 序列信息
     */
    sequenceInfo?: STDSeq;
    /**
     * 视频id
     */
    adUnitId: string;
    /**
     * 是否看完
     */
    isEnded: boolean;
    /**
     * 视频报错码
     */
    playFailCode: number;
    /**
     * 是否播放成功
     */
    playSuccess: boolean;
    /**
     * 耗时
     */
    spentTime: number;
    /**
     * 扩展字段
     */
    extend?: any;
  }

  interface SDKLogerOptions {
    /**
     * 事件类型
     */
    eventType: "track" | "user_set" | "user_setOnce" | "user_add" | "user_add";
    /**
     * 事件名称
     */
    eventName: string;
    /**
     * 日志上报类型
     */
    logType: number;
    extend?: any;
  }

  interface LOG_TYPES {
    /**
     * TGA日志
     */
    TGA: number,
    /**
     * TGA日志
     */
    STD: number
  }

}

/*
 * @description:
 * @author: JMPeng
 * @date: 2020-04-28
 */
declare namespace hortor.sdk {

  /**
   * 默认日志类型
   */
  var DefLogTopics: {
    INIT: string,
    LOGIN: string,
    AUTH: string,
    OPEN: string,
    CLOSE: string,
    SHARE: string,
    SHARE_END: string,
    VIDEO_AD_SHOW: string,
    VIDEO_AD_END: string,
    BEAT: string,
    PROFILE: string,
    SET_USER_INFO: string,
    SHARE_FRIEND: string,
  }

  /**
    * 覆盖默认上报日志
    */
  function coverDefLog(topic: string, data?: SDKLogInfo);

  /**
   * 上报游戏用户信息
   */
  function reportGameUserInfo(data: GameUserInfo);

  /**
   * 获取游戏上报类型
   */
  function getGameLogTypes(): LOG_TYPES;

  /**
   * 游戏调用上报日志
   */
  function postGameLog(data: SDKLogerOptions);
}

declare namespace hortor.sdk {
    interface CustomerJumpInfo {
        /**
         * 游戏内用户ID
         */
        playerId?: string;
        /**
         * 游戏内用户昵称
         */
        playerName?: string
    }
    /**
     * 跳转客服会话
     */
    interface CustomerServiceData {
        /**
         * 会话来源
         */
        sessionFrom?: string,
        /**
         * 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息
         */
        showMessageCard?: boolean,
        /**
         * 会话内消息卡片标题
         */
        sendMessageTitle?: string,
        /**
         * 会话内消息卡片路径
         */
        sendMessagePath?: string,
        /**
         * 会话内消息卡片图片路径
         */
        sendMessageImg?: string
    }
}
declare namespace hortor.sdk {
    /**
     * 客服App跳转
     */
    function goCustomer(data?: CustomerJumpInfo): Promise<any>

    /**
     * 跳转客服会话服务
     */
    function customerService(data?: CustomerServiceData): Promise<any>
}
/*
 * @description: 
 * @author: JMPeng
 * @date: 2020-04-26
 */
declare namespace hortor.sdk {
    interface CertifyData {
        name: string;
        idCard: string;
    }

    interface StartCheckConf {
        space: number;
        maxGameTime: number;
        reportOnStart: boolean;
    }
}
/*
 * @description: 
 * @author: JMPeng
 * @date: 2020-04-26
 */
declare namespace hortor.sdk {
    /**
     * 检查验证信息
     */
    function checkCertification(): Promise<ResError>
    /**
     * 保存客户信息
     */
    function setCertification(data: CertifyData): Promise<ResError>

    /**
     *  开始检测防沉迷
     */
    function checkRest(listener: AnyFunction<any>, config?: StartCheckConf): boolean
    /**
     *  关闭检测防沉迷
     */
    function stopCheckRest(): boolean
}
/*
 * @description:
 * @author: JMPeng
 * @date: 2020-04-28
 */
declare namespace hortor.sdk {
  interface SubMsgData {
    /**
     * 需要订阅的消息模板的id的集合
     */
    tmplIds: Array<string>;
    /**
     * 玩家id
     */
    playerId?: string
  }

  interface NewSubsData {
    msgType: number
  }

  interface SubMsgResult {
    /**
     * 玩家id
     */
    playerId?: string;
    /**
     * 同意的模板id
     */
    acceptIds?: Array<string>;
    /**
     * 拒绝的模板id
     */
    rejectIds?: Array<string>;
    /**
     * 封禁的模板id
     */
    banIds?: Array<string>;
  }

  interface NewSubsDataResult {
    confirm?: boolean
  }

  interface NewSubsDataStatus {
    status?: number
  }

  interface SubContData {
    [index: string]: number
  }
}

/*
 * @description:
 * @author: JMPeng
 * @date: 2020-04-28
 */
declare namespace hortor.sdk {
	/**
	 * 订阅消息
	 */
	function requestSubscribeMessage(data: SubMsgData): Promise<SubMsgResult>;

	/**
	 * 获取订阅次数
	 */
	function getSubscribeMessageCount(): Promise<SubContData>;

	/**
	 * 游戏更新订阅状态查询接口
	 */
	function getWhatsNewSubscriptionsSetting(data: NewSubsData): Promise<NewSubsDataStatus>;

	/**
	 * 游戏更新提醒
	 */
	function requestSubscribeWhatsNew(data: NewSubsData): Promise<NewSubsDataResult>;
}

declare namespace hortor.sdk {
    interface ShareData {
        /**
         * 分享标题
         */
        title: string,
        /**
         * 分享图片
         */
        imageUrl: string,
        /**
         * 查询字符串
         */
        query?: string,
        [index: string]: any
    }

    /**
     * SDK配置
     */
    interface SdkConfig {
        /**
         * 运行环境
         */
        env: 'Test' | 'Prod' | 'Dev',
        /**
         * 游戏ID
         */
        gameId: string,
        /**
         * 游戏版本
         */
        gameVersion: string,

        /**
         * 是否单独加载 apm 应用监控，默认false；
         */
        useApm?: boolean,
        /**
         * 是否单独加载 cross 交叉推广，默认false；
         */
        useCross?: boolean,
        /**
         * 是否单独加载 wallSDK 积分墙，默认false；
         */
        useWall?: boolean,
        /**
         * 积分墙key
         */
        key?: string,

        /**
         * 用户信息过期间隔
         */
        expireTime?: number,

        /**
         * 默认分享数据
         */
        shareData: ShareData,
        /**
         * 是否开启获取分享方案
         */
        openGetShareTheme?: boolean,
        /**
         * 模拟分享成功时差
         */
        shareSuccessDiff?: number,
        /**
         * 默认加载某些类型的分享方案
         */
        shareThemes?: Array<string>,

        /**
         * 是否开启订阅消息上报，
         */
        reportSubscribeMessage?: boolean,

        /**
         * 可实例化视频广告实例上限，默认 3
         */
        maxTempVideoAdLen?: number,
        /**
         * 视频广告加载失败后冷却时长 单位ms 默认3 * 60 * 1000（3分钟）
         */
        videoCoolTime?: number,
        /**
         * 视频广告加载超时时长，单位ms 默认5000（5秒）
         */
        videoTimeout?: number,
        /**
         * 是否启用自动上报STD
         */
        stdAutoUpload?: boolean,
        /**
         * 是否启用自动上报TGA
         */
        tgaAutoUpload?: boolean,
        /**
         * 日志上报频率，单位ms，默认 3s
         */
        logReportFrequency?: number,
        /**
         * 用户截屏上报，默认关闭
         */
        reportCaptureScreen?: boolean,

        [index: string]: any,
    }

    /**
     * 初始化
     */
    function init(config: SdkConfig): boolean;
}
declare namespace hortor.sdk {
    interface ReportData {
        /**
         * 日志类型
         */
        logType: number,
        [index: string]: any
    }

    /**
      * 日志上报
      */
    function postLog(data: ReportData, immediate?: boolean)
}
declare namespace hortor.sdk {
    interface SwitchParams {
        nickName?: string
        [index: string]: any
    }

    interface SwitchResult {
        [index: string]: boolean
    }
}
declare namespace hortor.sdk {
    /**
     * 自定义开关检查
     */
    function checkSwitches(switches: Array<string>, params: SwitchParams): Promise<SwitchResult>;
}
