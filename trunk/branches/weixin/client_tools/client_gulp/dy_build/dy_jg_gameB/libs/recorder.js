
console.log("進入錄製視頻js")
class RecoderVideo {
    constructor() {
        this.gameRecorderManager = tt.getGameRecorderManager();
        this.videoStart = false;
        this.videoStart = false;
        this.autoStop = true; //是否自动停止 手動停止不自動分享
        this.startTime = 0;
        this.stopTime = 0;
        this.videoPath = null;
        this.stopFun = null;
        this.stopContext = null;
        this.initRecorderVideo();
    }

    initRecorderVideo() {
        console.log("监听录屏返回")
        var self = this;
        var self = this;
        // self.videoPath = null;
        console.log("监听录屏返回")
        //开始录屏
        self.gameRecorderManager.onStart(function () {
            console.log("录屏开始")
            self.videoStart = true;
            this.startTime = new Date().getTime();
        });

        //暂停录屏
        self.gameRecorderManager.onPause(function () {
            console.log("录屏暂停")
            self.videoPause = true;

        });

        //监听录屏停止
        self.gameRecorderManager.onStop(function (res) {
            console.log("录屏onStop", res)
            self.videoPause = false;
            self.videoStart = false;
            self.videoPath = res.videoPath;
            if(self.stopFun && self.stopContext){
                self.stopFun.call(self.stopContext);
            }
            // self.shareVideo();
            // self.clipVideo();
            // window.SDKHelper.initRecordSkin();
            // // if(self.recordeVideoTime<3)return;
            // if (!self.autoStop) {
            //     console.log("手动停止不自动分享")
            //     return;
            // }

            // tt.shareAppMessage({
            //     channel:"video",
            //     title:"分享",
            //     extra:{videoPath:res.videoPath}
            // });
        });

        //监听录屏继续事件
        self.gameRecorderManager.onResume(function (res) {
            console.log("录屏继续")
            self.videoPause = false;
        });

        self.gameRecorderManager.onError(function () {
            console.log("录屏错误")
        });

        //监听录屏中断开始。
        self.gameRecorderManager.onInterruptionBegin(function () {
            console.log("监听录屏中断开始")
        });

        self.gameRecorderManager.onInterruptionEnd(function () {
            console.log("监听录屏中断结束")
        });
    }

    getVideoState() {
        return { videoStart: this.videoStart, videoPause: this.videoPause }
    }

    startVideo(data) {       
        console.log("startVideo:", data.time);
        var self = this;
        var time = data.time || 15;
        self.autoStop = true;
        self.stopFun = data.stopFun;
        self.stopContext = data.stopContext;
        self.gameRecorderManager.start({ duration: time });
    }

    clearStopFun(){
        this.stopFun = null;
        this.stopContext = null;
    }

    //停止录屏
    stopVideo(data) {
        var self = this;
        if (!self.videoStart) {
            console.log("未在录制，不用停止");
            return;
        }
        this.stopTime = new Date().getTime();
        // let time = 
        // if (this.stopTime - this.startTime < 3000) {
        //     if (data.callback && data.context) {
        //         //录制时间要大于3S
        //         data.callback.call(data.context)
        //     }
        //     return;
        // }
        self.autoStop = false;
        self.gameRecorderManager.stop();
    }


    shareVideo(func, obj) {
        let self = this;
        console.log("shareVdieo");
        var tips = "暂无录屏";
        if (!self.videoPath) {
            console.log(tips);
            return tips;
        }

        tt.shareAppMessage({
            channel: "video",
            title: "分享",
            extra: { videoPath: self.videoPath },
            success() {
                console.log('分享视频成功');
                if (func && obj) {
                    func.call(obj,1);
                }
            },
            fail(e) {
                console.log('分享视频失败:',e);
                if (func && obj) {
                    func.call(obj,0);
                }
            },
            complete(res) {
                console.log('分享完成complete：');

            }
        });
    }
    //暂停录屏
    pauseVideo() {
        var self = this;
        self.gameRecorderManager.pause();
    }
    resumeVideo() {
        var self = this;
        self.gameRecorderManager.resume();
    }
    //剪辑精彩的视频片段
    clipVideo(data) {
        var self = this;
        if (self.videoStart) {
            console.log("需要先暂停录屏 才能剪辑");
            return;
        }
        if (!self.videoPath) {
            console.log("视频地址为空")
            return;
        }
        data = data || {};
        var ago = data.ago || 15; //前几秒
        var after = data.after || 0; //后几秒
        self.gameRecorderManager.clipVideo({
            path: self.videoPath,
            timeRange: [30, 0],
            success(res) {

                console.log("剪辑精彩的视频片段保存地址：", res.videoPath);
            },
            fail(e) {
                console.log("剪辑失败")
            }
        });
    }

    //记录精彩的视频片段
    recordClipVideo(data) {
        var self = this;
        if (!self.videoStart) {
            console.log("记录精彩的视频片段，调用时必须是正在录屏");
            return;
        }

        data = data || {};
        var ago = data.ago || 0; //前几秒
        var after = data.after || 120; //后几秒
        console.log("ago:", ago, "after:", after)
        self.gameRecorderManager.recordClip({
            timeRange: [ago, after]
        });
    }
}

window.RecoderVideo = new RecoderVideo();
// setTimeout(() => {
//     window.RecoderVideo.startVideo();
// }, 10000);

// exports.RecoderVideo = new RecoderVideo();