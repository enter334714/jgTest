var z1 = wx.Z$;
class ZsyClientMainObject {
    constructor(config) {
        this.zsySdkVersion = '1.0';
        this.config = config;
        this.loginUrl = `https://zsy.coolthink.cn/Channel/login/zsyGame/${config.zsyGame}/zsyChannel/${config.zsyChannel}/zsySubChannel/${config.zsySubChannel}`;
        this.payUrl = 'https://zsy.coolthink.cn/game/pay';
        this.callbackUrl = `https://zsy.coolthink.cn/channel/payCallBack/zsyGame/${config.zsyGame}/zsyChannel/${config.zsyChannel}/zsySubChannel/${config.zsySubChannel}/`;
        this.bindAccountUrl = `https://zsy.coolthink.cn/Channel/index/zsyChannel/${config.zsyChannel}/zsyMethod/bindAccount/zsyGame/${config.zsyGame}/zsySubChannel/${config.zsySubChannel}/`;
        this.sendsmsUrl = `https://zsy.coolthink.cn/Wxxcx/sendsms/zsyGame/${config.zsyGame}/zsyChannel/${config.zsyChannel}/zsySubChannel/${config.zsySubChannel}/`;
        this.bindPhoneUrl = `https://zsy.coolthink.cn/Wxxcx/bind/zsyGame/${config.zsyGame}/zsyChannel/${config.zsyChannel}/zsySubChannel/${config.zsySubChannel}/`;
        this.checkOrderUrl = `https://zsy.coolthink.cn/Channel/index/zsyChannel/${config.zsyChannel}/zsyMethod/checkOrder/zsyGame/${config.zsyGame}/zsySubChannel/${config.zsySubChannel}/`;
        this.ugccheckUrl = `https://zsy.coolthink.cn/Channel/index/zsyChannel/${config.zsyChannel}/zsyMethod/ugccheck/zsyGame/${config.zsyGame}/zsySubChannel/${config.zsySubChannel}/`;
        this.qrcodeUrl = `https://zsy.coolthink.cn/Channel/index/zsyChannel/${config.zsyChannel}/zsyMethod/qrcodebase64/zsyGame/${config.zsyGame}/zsySubChannel/${config.zsySubChannel}/`;
        this.qrcodeUrl2 = `https://zsy.coolthink.cn/Channel/index/zsyChannel/${config.zsyChannel}/zsyMethod/qrcode/zsyGame/${config.zsyGame}/zsySubChannel/${config.zsySubChannel}/`;
        this._channel = "0";
        this.callback = null;
        this.yinliuTimes = 0;
        this.customerOrder = null;
        this.BIData = {};

        wx.onShow(e => {
            console.log('wx.onShow', e);
            if (typeof e.referrerInfo.extraData != 'undefined' && typeof e.referrerInfo.extraData.isPay != 'undefined') {
                if (e.referrerInfo.extraData.isPay == 'success') {
                    //this.reportBI(this.BIData);
                    this.callback && this.callback({ errorCode: 0, errorMessage: '购买成功' });
                } else {
                    this.callback && this.callback({ errorCode: -1, errorMessage: '购买失败' });
                }
            }

            if (this.customerOrder && this.callback) {
                this.checkOrder(this.customerOrder, backRes => {
                    // if(backRes && backRes.errorCode == 0) {
                    //     this.reportBI(this.BIData);
                    // }
                    this.callback(backRes);
                });
            }
        });
    }

    login(callback) {
        var H5SDK_this = this;

        wx.login({
            success: function (res) {
                console.log(res);
                wx.request({
                    url: H5SDK_this.loginUrl,
                    method: 'POST',
                    data: Object.assign(res, wx.getLaunchOptionsSync().query, { zsySubSubChannel: wx.getLaunchOptionsSync().query.path || "0" }),
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function (response) {
                        if (typeof response.data.errorCode != undefined && response.data.errorCode == 0) {
                            H5SDK_this = Object.assign(H5SDK_this, response.data.data);

                            let zsyExtend = JSON.parse(H5SDK_this.zsyExtend);

                            if (zsyExtend.zsyIsGongGao == 1) {
                                wx.showModal({
                                    title: zsyExtend.GongGaotitle,
                                    content: zsyExtend.GongGaoContent,
                                    confirmText: zsyExtend.GongGaoconfirmtext,
                                    showCancel: false,
                                    success(res) {}
                                });
                            }

                            if (zsyExtend.zsyIsjl) {
                                H5SDK_this.jinlifenjin(() => {
                                    callback(response.data);
                                });
                            } else {
                                if (zsyExtend.zsyIsYinliu == 1) {
                                    H5SDK_this.startYinliu(() => {
                                        callback(response.data);
                                    });
                                } else {
                                    callback(response.data);
                                }
                            }
                            // H5SDK_this.reportBI({
                            //     actionType: H5SDK_this.zsyIsNewUser,
                            // })
                        } else if (typeof response.data.errorCode != undefined) {
                            wx.showModal({
                                title: '提示',
                                content: response.data.errorMessage,
                                showCancel: false,
                                success(res) {}
                            });
                            callback(response.data);
                        }
                    },
                    fail: function () {
                        callback({ errorCode: 1001, errorMessage: '服务器接口请求错误' });
                    }
                });
            }
        });
    }

    pay(postData, callback) {
        var H5SDK_this = this;

        postData = Object.assign(H5SDK_this, postData);
        if (!postData.zsyUserId) {
            wx.showToast({ title: '请先登录', duration: 3000, icon: 'none' });
            return;
        }
        wx.request({
            url: H5SDK_this.payUrl,
            method: 'POST',
            data: postData,
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function (payData) {
                H5SDK_this.BIData = {
                    actionType: 5,
                    serverID: postData.serverId,
                    roleID: postData.roleId,
                    roleName: postData.roleName,
                    cpOrderNo: postData.gameOrder,
                    sdkOrderNo: payData.data.data.zsyOrder,
                    money: postData.money
                };
                if (payData.data.errorCode == 1) {
                    wx.showToast({ title: '购买成功', duration: 3000, icon: 'none' });
                    //H5SDK_this.reportBI(H5SDK_this.BIData);
                    callback({ errorCode: 0, errorMessage: '购买成功' });
                } else if (payData.data.errorCode == 2) {
                    H5SDK_this.login(() => {});
                    wx.showToast({ title: '系统繁忙，请重新尝试', duration: 3000, icon: 'none' });
                    callback(payData.data);
                } else if (payData.data.errorCode == 0) {
                    wx.requestMidasPayment({
                        mode: 'game',
                        env: payData.data.data.env,
                        offerId: payData.data.data.offerId,
                        buyQuantity: payData.data.data.buyQuantity,
                        platform: payData.data.data.platform,
                        zoneId: payData.data.data.zoneId,
                        currencyType: payData.data.data.currencyType,
                        success(e) {
                            console.log('requestMidasPayment success', e);
                            wx.request({
                                url: H5SDK_this.callbackUrl,
                                method: 'POST',
                                data: payData.data.data,
                                header: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                },
                                success: function (payRes) {
                                    if (payRes.data.errorCode == 0) {
                                        wx.showToast({ title: '购买成功', duration: 3000, icon: 'none' });
                                        //H5SDK_this.reportBI(H5SDK_this.BIData);
                                    } else {
                                        wx.showToast({ title: '购买失败', duration: 3000, icon: 'none' });
                                    }
                                    callback(payRes.data);
                                }
                            });
                        },
                        fail(e) {
                            console.log('requestMidasPayment fail', e);
                            wx.showToast({ title: '支付失败', duration: 3000, icon: 'none' });
                            callback({ errorCode: -1, errorMessage: '支付失败' });
                        }
                    });
                } else {
                    wx.showToast({ title: '支付失败', duration: 3000, icon: 'none' });
                    callback(payData.data);
                }
            }
        });
    }

    xcxPay(postData, callback) {
        var H5SDK_this = this;

        let zsyExtend = JSON.parse(this.zsyExtend);
        if (zsyExtend.iosPayType == 2) {
            wx.showModal({
                title: '充值教程',
                content: '即将跳转官方【客服会话】充值\r\n点击客服下方卡片获取充值链接',
                showCancel: false,
                success(res) {
                    if (res.confirm) {
                        H5SDK_this.kfPay(postData, callback);
                    }
                }
            });

            return;
        }

        if (!postData.zsyUserId) {
            return wx.showToast({ title: '请先登录', duration: 3000, icon: 'none' });
        }

        if (callback) {
            this.callback = callback;
        }

        postData = Object.assign(H5SDK_this, postData);
        postData.zsySubChannel = 'wxxcx';
        if (zsyExtend.iosPayType == 4) {
            postData.zsySubChannel = 'wxxyx_customer';
        }
        wx.request({
            url: H5SDK_this.payUrl,
            method: 'POST',
            data: postData,
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function (payData) {
                H5SDK_this.BIData = {
                    actionType: 5,
                    serverID: postData.serverId,
                    roleID: postData.roleId,
                    roleName: postData.roleName,
                    cpOrderNo: postData.gameOrder,
                    sdkOrderNo: payData.data.data.zsyOrder,
                    money: postData.money
                };
                if (zsyExtend.iosPayType == 3) {
                    H5SDK_this.qrcodepay(payData.data.data.zsyOrder, callback);
                } else if (zsyExtend.iosPayType == 4) {
                    H5SDK_this.qrcodepay2(payData.data.data.zsyOrder, callback);
                } else {
                    wx.navigateToMiniProgram({
                        appId: payData.data.data.payAppId,
                        path: 'pages/payment/index',
                        extraData: payData.data.data,
                        envVersion: 'release',
                        success(res) {
                            // 打开成功  
                        }
                    });
                }
            }
        });
    }

    kfPay(postData, callback) {
        var H5SDK_this = this;

        if (!postData.zsyUserId) {
            return wx.showToast({ title: '请先登录', duration: 3000, icon: 'none' });
        }

        if (callback) {
            this.callback = callback;
        }

        postData = Object.assign(H5SDK_this, postData);
        postData.zsySubChannel = 'wxxyx_customer';

        wx.request({
            url: H5SDK_this.payUrl,
            method: 'POST',
            data: postData,
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function (payData) {
                H5SDK_this.BIData = {
                    actionType: 5,
                    serverID: postData.serverId,
                    roleID: postData.roleId,
                    roleName: postData.roleName,
                    cpOrderNo: postData.gameOrder,
                    sdkOrderNo: payData.data.data.zsyOrder,
                    money: postData.money
                };
                wx.openCustomerServiceConversation({
                    sessionFrom: `${H5SDK_this.zsyGame}##${payData.data.data.zsyOrder}`,
                    sendMessageTitle: "充值",
                    showMessageCard: true,
                    sendMessagePath: `${H5SDK_this.zsyGame}##${payData.data.data.zsyOrder}`,
                    sendMessageImg: "https://zsy.coolthink.cn/images/customertip.jpg",
                    success(res) {
                        H5SDK_this.customerOrder = payData.data.data;
                    },
                    fail(res) {},
                    complete(res) {}
                });
            }
        });
    }

    checkOrder(postData, bback) {
        var H5SDK_this = this;

        wx.request({
            url: H5SDK_this.checkOrderUrl,
            method: 'POST',
            data: postData,
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function (payData) {
                bback(payData.data);
            }
        });
    }

    bindAccount(postData, callback) {
        var H5SDK_this = this;
        let zsyExtend = JSON.parse(this.zsyExtend);

        if (!zsyExtend.session_key) {
            wx.showToast({ title: '请先登录', duration: 3000, icon: 'none' });
            return;
        }

        postData.session_key = zsyExtend.session_key;
        wx.request({
            url: H5SDK_this.bindAccountUrl,
            method: 'POST',
            data: postData,
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function (response) {
                callback(response);
            }
        });
    }

    openCustomerService(callback) {
        wx.openCustomerServiceConversation({
            sessionFrom: 'downloadWd',
            showMessageCard: true,
            sendMessagePath: 'downloadWd',
            sendMessageImg: 'https://zsy.coolthink.cn/html/xyxwd/customerTip.png',
            success(res) {
                if (callback) callback(res);
            },
            fail(res) {
                if (callback) callback(res);
            },
            complete(res) {}
        });
    }

    sendsms(postData, callback) {
        var H5SDK_this = this;
        postData.type = 3;

        wx.request({
            url: H5SDK_this.sendsmsUrl,
            method: 'POST',
            data: postData,
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function (response) {
                if (callback) callback(response.data);
            }
        });
    }

    bindPhone(postData, callback) {
        var H5SDK_this = this;
        postData.type = 3;
        postData.account = H5SDK_this.zsyChannelUserId;
        postData.token = H5SDK_this.unionid;

        wx.request({
            url: H5SDK_this.bindPhoneUrl,
            method: 'POST',
            data: postData,
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function (response) {
                if (callback) callback(response.data);
            }
        });
    }

    startYinliu(callback) {
        var H5SDK_this = this;
        let zsyExtend = JSON.parse(H5SDK_this.zsyExtend);
        console.log('zsyExtend', zsyExtend);

        if (zsyExtend.isForce == 0) {
            console.log('report', 1111);
            callback();
        }

        function showModal() {
            H5SDK_this.yinliuTimes++;
            if (H5SDK_this.yinliuTimes > zsyExtend.tanTimes) {
                canvas.removeEventListener('touchstart', showModal, false);
                // if(zsyExtend.isForce != 1) {
                //     callback();
                // }
                return false;
            }
            if (zsyExtend.isForce == 1) {
                wx.showModal({
                    title: zsyExtend.title,
                    content: zsyExtend.tanTitle,
                    confirmText: zsyExtend.confirmtext,
                    showCancel: false,
                    success(res) {
                        if (res.confirm) {
                            if (zsyExtend.jumpflag) {
                                navigateToMiniProgram2();
                            } else {
                                navigateToMiniProgram();
                            }
                        } else if (res.cancel) {
                            // 没有取消
                        }
                    }
                });
            } else {
                /*var itemList = [];
                for(let item of zsyExtend.items) {
                    itemList.push(item.title);
                }
                               wx.showActionSheet({
                    alertText: zsyExtend.tanTitle,
                    itemList: itemList,
                    success (res) {
                        if(zsyExtend.items[res.tapIndex].type == 1) {
                            H5SDK_this.yinliuTimes--;
                            showModal();
                        } else if(zsyExtend.items[res.tapIndex].type == 2) {
                            // 复制
                            showModal();
                            wx.setClipboardData({
                                data: zsyExtend.items[res.tapIndex].value || "",
                                success (res) {
                                    // wx.getClipboardData({
                                    //     success (res) {
                                    //         console.log(res)
                                    //     }
                                    // })
                                }
                            })
                        }
                    },
                    fail (res) {
                        showModal();
                    }
                })*/

                wx.showModal({
                    title: zsyExtend.title,
                    content: zsyExtend.tanTitle,
                    confirmText: zsyExtend.confirmtext,
                    success(res) {
                        if (res.confirm) {
                            if (zsyExtend.jumpflag) {
                                navigateToMiniProgram2();
                            } else {
                                navigateToMiniProgram();
                            }
                        } else if (res.cancel) {
                            // 没有取消
                            showModal();
                        }
                    }
                });
            }
        }

        function navigateToMiniProgram() {
            wx.navigateToMiniProgram({
                appId: zsyExtend.toAppid,
                envVersion: 'release',
                success(res) {
                    console.log(res);
                },
                fail() {
                    //                    showModal();
                }
            });
        }
        function navigateToMiniProgram2() {
            wx.navigateToMiniProgram({
                appId: zsyExtend.toAppid,
                path: 'pages/kefu/index',
                extraData: zsyExtend.jumpdata,
                envVersion: 'release',
                success(res) {
                    console.log(res);
                },
                fail() {
                    //                    showModal();
                }
            });
        }
        canvas.addEventListener('touchstart', showModal, false);
    }

    report(postData) {
        console.log('report', postData);
        if (postData.action != 1 && postData.action != 2) {
            return false;
        }

        this.reportBI({
            actionType: postData.action == 1 ? 3 : 4,
            serverID: postData.serverId,
            roleID: postData.roleId,
            roleName: postData.roleName,
            cpOrderNo: '',
            sdkOrderNo: '',
            money: ''
        });
    }

    reportBI(postData) {
        console.log('reportBI', postData);
        if (!postData.actionType) {
            return false;
        }
        let zsyExtend = JSON.parse(this.zsyExtend);

        postData.appID = zsyExtend.appid;
        postData.clientType = 1;
        postData.wxOpenID = this.zsyChannelUserId;
        postData.ip = this.zsyIp;
        postData.path = wx.getLaunchOptionsSync().query.path || "";
        postData.gdt_vid = wx.getLaunchOptionsSync().query.gdt_vid || "";
        postData.weixinadinfo = wx.getLaunchOptionsSync().query.weixinadinfo || "";
        postData.weixinadkey = wx.getLaunchOptionsSync().query.weixinadkey || "";
        postData.actionTime = parseInt(new Date().getTime() / 1000);

        var BIplatforminfo = wx.getSystemInfoSync();
        if (BIplatforminfo.platform == 'ios') {
            postData.os = 1;
        } else if (BIplatforminfo.platform == 'android') {
            postData.os = 2;
        } else {
            postData.os = 5;
        }
        if (zsyExtend.is_transfer) {
            postData.appID = zsyExtend.exAppID;
            postData.wxOpenID = zsyExtend.exWxOpenID;
            var BIzsyExtends = {
                "is_transfer": 1,
                "newAppID": zsyExtend.appid,
                "newWxOpenID": this.zsyChannelUserId
            };
            var postBIzsyExtends = JSON.stringify(BIzsyExtends);
            postData.extends = postBIzsyExtends;
        }

        // 上报BI
        wx.request({
            url: 'https://ad.4z4.cn/api/xyx/report',
            method: 'POST',
            data: postData,
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function (response) {}
        });
    }

    ugccheck(postData, bback) {
        var H5SDK_this = this;
        postData.openid = H5SDK_this.zsyChannelUserId;
        wx.request({
            url: H5SDK_this.ugccheckUrl,
            method: 'POST',
            data: postData,
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function (payData) {
                bback(payData.data);
            }
        });
    }

    jinlifenjin(callback) {
        var H5SDK_this = this;
        let zsyExtend = JSON.parse(H5SDK_this.zsyExtend);
        function jlshowModal2() {
            H5SDK_this.yinliuTimes++;
            if (H5SDK_this.yinliuTimes > zsyExtend.jlTimes) {
                canvas.removeEventListener('touchstart', jlshowModal2, false);
                callback();
                return false;
            }
            if (zsyExtend.zsyIsjlflag) {
                var itemList = [];
                for (let item of zsyExtend.items) {
                    itemList.push(item.title);
                }
                wx.showActionSheet({
                    alertText: zsyExtend.jltitle,
                    itemList: itemList,
                    success(res) {
                        wx.setClipboardData({
                            data: zsyExtend.items[res.tapIndex].value || "",
                            success(res) {}
                        });
                        jlshowModal2();
                    },
                    fail(res) {
                        jlshowModal2();
                    }
                });
            } else {
                const jltempFilePath = zsyExtend.jlurl;
                if (zsyExtend.jljlCancelflag) {
                    var jlCancel = true;
                } else {
                    var jlCancel = false;
                }

                wx.showModal({
                    title: zsyExtend.jltitle,
                    content: zsyExtend.jlcontent,
                    confirmText: zsyExtend.jlconfirmtext,
                    showCancel: jlCancel,
                    cancelText: zsyExtend.jlcancelText,
                    success(res) {
                        if (res.confirm) {
                            wx.previewImage({
                                current: jltempFilePath,
                                urls: [jltempFilePath]
                            });
                            H5SDK_this.yinliuTimes++;
                        } else if (res.cancel) {
                            canvas.removeEventListener('touchstart', jlshowModal2, false);
                            callback();
                            return false;
                        }
                    }
                });
            }
        }
        jlshowModal2();
        canvas.addEventListener('touchstart', jlshowModal2, false);
    }

    qrcodepay(postData, callback) {
        var H5SDK_this = this;
        if (callback) {
            this.callback = callback;
        }

        if (!canvas) {
            var canvas = wx.createCanvas();
        }
        let ctx = canvas.getContext('2d');
        let imgUrl = H5SDK_this.qrcodeUrl;
        imgUrl = imgUrl + '?orderid=' + postData;
        const bgUrl = "https://download.coolthink.cn/h5sdk/pbeijing.jpg";
        const picUrl = "https://download.coolthink.cn/h5sdk/plogo.jpg";
        const canvasWidth = 524;
        const canvasHeight = 589;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        let imgTempData = { img1Data: "", img2Data: "", img3Data: "" };
        function downloadFiles(_url, _param) {
            return new Promise((resolve, reject) => {
                var img = wx.createImage();
                img.src = _url; //网路图片地址
                img.onload = function () {
                    imgTempData[_param] = img;
                    resolve();
                };
            });
        }
        function downloadFilesFromUrl(_url, _param) {
            return new Promise((resolve, reject) => {
                wx.request({
                    url: _url,
                    success(res) {
                        console.log(res.data);
                        if (res.data.errcode) {
                            reject();
                        } else {
                            var img = wx.createImage();
                            img.src = "data:image/png;base64," + res.data.data;
                            img.onload = function () {
                                imgTempData[_param] = img;
                                resolve();
                            };
                            img.onerror = function () {
                                reject();
                            };
                        }
                    }
                });
            });
        }

        new Promise((resolve, reject) => {
            Promise.all([downloadFiles(bgUrl, "img1Data"), downloadFilesFromUrl(imgUrl, "img2Data"), downloadFiles(picUrl, "img3Data")]).then(res => {
                let { img1Data, img2Data, img3Data } = imgTempData;
                ctx.drawImage(img1Data, 0, 0, img1Data.width, img1Data.height);
                ctx.drawImage(img2Data, 110, 42, 300, 300);
                ctx.save();
                ctx.beginPath();
                ctx.arc(260, 190, 69, 0, Math.PI * 2);
                ctx.clip();
                ctx.drawImage(img3Data, 180, 112, 160, 160);
                ctx.restore();
                const tempFilePath = canvas.toDataURL();
                wx.previewImage({
                    current: tempFilePath,
                    urls: [tempFilePath]
                });
                // canvas.toTempFilePath({
                //     x: 0,
                //     y: 0,
                //     width: canvasWidth,
                //     height: canvasHeight,
                //     destWidth: canvasWidth,
                //     destHeight: canvasHeight,
                //     success: function (res) {
                //         var tempFilePath = res.tempFilePath;
                //             wx.previewImage({
                //             current: tempFilePath, // 当前显示图片的http链接
                //             urls: [tempFilePath] // 需要预览的图片http链接列表
                //         })
                //     },
                //     fail: function (res) {
                //         console.log(res);
                //     }
                // });
                resolve();
            }).catch(error => {
                console.log(error);
                wx.showModal({
                    title: "提示",
                    content: "订单生成失败，请联系客服！",
                    showCancel: false
                });
            });
        });
    }

    qrcodepay2(postData, callback) {
        var H5SDK_this = this;
        if (callback) {
            this.callback = callback;
        }

        if (!canvas) {
            var canvas = wx.createCanvas();
        }
        let ctx = canvas.getContext('2d');
        let imgUrl = H5SDK_this.qrcodeUrl2;
        imgUrl = imgUrl + '?orderid=' + postData;
        const bgUrl = "https://download.coolthink.cn/h5sdk/pbeijing2.jpg";
        const canvasWidth = 524;
        const canvasHeight = 589;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        let imgTempData = { img1Data: "", img2Data: "" };
        function downloadFiles(_url, _param) {
            return new Promise((resolve, reject) => {
                var img = wx.createImage();
                img.src = _url; //网路图片地址
                img.onload = function () {
                    imgTempData[_param] = img;
                    resolve();
                };
            });
        }
        new Promise((resolve, reject) => {
            Promise.all([downloadFiles(bgUrl, "img1Data"), downloadFiles(imgUrl, "img2Data")]).then(res => {
                let { img1Data, img2Data } = imgTempData;
                ctx.drawImage(img1Data, 0, 0, img1Data.width, img1Data.height);
                ctx.drawImage(img2Data, 80, 44, 360, 360);
                ctx.save();
                const tempFilePath = canvas.toDataURL();
                wx.previewImage({
                    current: tempFilePath,
                    urls: [tempFilePath]
                });
                // canvas.toTempFilePath({
                //     x: 0,
                //     y: 0,
                //     width: canvasWidth,
                //     height: canvasHeight,
                //     destWidth: canvasWidth,
                //     destHeight: canvasHeight,
                //     success: function (res) {
                //         var tempFilePath = res.tempFilePath;
                //             wx.previewImage({
                //             current: tempFilePath, // 当前显示图片的http链接
                //             urls: [tempFilePath] // 需要预览的图片http链接列表
                //         })
                //     },
                //     fail: function (res) {
                //         console.log(res);
                //     }
                // });
                resolve();
            }).catch(error => {
                console.log(error);
                wx.showModal({
                    title: "提示",
                    content: "订单生成失败，请联系客服！",
                    showCancel: false
                });
            });
        });
    }
}

module.exports = ZsyClientMainObject;