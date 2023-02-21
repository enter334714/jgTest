'use strict';

var grob,
    gusx37 = this && this['__extends'] || function () {
    var hz3n = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (ak1q, hrn820) {
        ak1q['__proto__'] = hrn820;
    } || function (g9mp5t, f9g5p) {
        for (var b82r1 in f9g5p) f9g5p['hasOwnProperty'](b82r1) && (g9mp5t[b82r1] = f9g5p[b82r1]);
    };
    return function (g956t, ft56g9) {
        function _mdkc() {
            this['constructor'] = g956t;
        }
        hz3n(g956t, ft56g9), g956t['prototype'] = null === ft56g9 ? Object['create'](ft56g9) : (_mdkc['prototype'] = ft56g9['prototype'], new _mdkc());
    };
}(),
    gyfl6gt = laya['ui']['View'],
    gy4$wj = laya['ui']['Dialog'];
!function (dempc) {
    var zxsu3 = function (nrh8) {
        function ekaq() {
            return nrh8['call'](this) || this;
        }
        return gusx37(ekaq, nrh8), ekaq['prototype']['createChildren'] = function () {
            nrh8['prototype']['createChildren']['call'](this), this['createView'](dempc['H$w']['uiView']);
        }, ekaq['uiView'] = {
            'type': 'View',
            'props': {
                'width': 0x2d0,
                'name': 'P_WXAuthorizationViewUI',
                'height': 0x500
            },
            'child': [{
                'type': 'Image',
                'props': {
                    'width': 0x2d0,
                    'var': 'bgImg',
                    'skin': 'wxlogin_atlas/image_login_loginbg.jpg',
                    'name': 'bg',
                    'height': 0x500,
                    'centerY': 0x0,
                    'centerX': 0x0
                }
            }, {
                'type': 'Box',
                'props': {
                    'width': 0x2d0,
                    'height': 0x500,
                    'centerY': 0x0,
                    'centerX': 0x0
                },
                'child': [{
                    'type': 'Image',
                    'props': {
                        'width': 0x2d0,
                        'var': 'topImg',
                        'top': -0x8b,
                        'skin': 'wxlogin_atlas/image_login_loginbg_top.jpg',
                        'height': 0x8b,
                        'centerX': 0x0,
                        'anchorY': 0x1
                    }
                }, {
                    'type': 'Image',
                    'props': {
                        'width': 0x2d0,
                        'var': 'btmImg',
                        'top': 0x500,
                        'skin': 'wxlogin_atlas/image_login_loginbg_bottom.jpg',
                        'height': 0x8b,
                        'centerX': 0x0
                    }
                }, {
                    'type': 'Image',
                    'props': {
                        'x': -0xdc,
                        'width': 0xdc,
                        'var': 'leftImg',
                        'skin': 'wxlogin_atlas/image_login_loginbg_left.jpg',
                        'left': -0xdc,
                        'height': 0x500,
                        'centerY': 0x0
                    }
                }, {
                    'type': 'Image',
                    'props': {
                        'width': 0xdc,
                        'var': 'rightImg',
                        'skin': 'wxlogin_atlas/image_login_loginbg_right.jpg',
                        'left': 0x2d0,
                        'height': 0x500,
                        'centerY': 0x0
                    }
                }]
            }]
        }, ekaq;
    }(gyfl6gt);
    dempc['H$w'] = zxsu3;
}(grob || (grob = {})), function (j4wv$) {
    var b01a = function (c5mpd) {
        function qrb201() {
            return c5mpd['call'](this) || this;
        }
        return gusx37(qrb201, c5mpd), qrb201['prototype']['createChildren'] = function () {
            c5mpd['prototype']['createChildren']['call'](this), this['createView'](j4wv$['H$n']['uiView']);
        }, qrb201['uiView'] = {
            'type': 'View',
            'props': {
                'width': 0x2d0,
                'name': 'P_LoadingView',
                'height': 0x500
            },
            'child': [{
                'type': 'Image',
                'props': {
                    'width': 0x2d0,
                    'var': 'bgImg',
                    'name': 'bg',
                    'height': 0x500,
                    'centerY': 0x0,
                    'centerX': 0x0
                }
            }, {
                'type': 'Box',
                'props': {
                    'width': 0x2d0,
                    'height': 0x500,
                    'centerY': 0x0,
                    'centerX': 0x0
                },
                'child': [{
                    'type': 'Image',
                    'props': {
                        'var': 'topImg',
                        'centerX': 0x0,
                        'bottom': 0x500,
                        'anchorY': 0x1
                    }
                }, {
                    'type': 'Image',
                    'props': {
                        'var': 'btmImg',
                        'top': 0x500,
                        'centerX': 0x0
                    }
                }, {
                    'type': 'Image',
                    'props': {
                        'var': 'leftImg',
                        'right': 0x2d0,
                        'pivotX': 0x1,
                        'centerY': 0x0
                    }
                }, {
                    'type': 'Image',
                    'props': {
                        'var': 'rightImg',
                        'left': 0x2d0,
                        'centerY': 0x0
                    }
                }]
            }, {
                'type': 'Image',
                'props': {
                    'var': 'copyRightImg',
                    'skin': 'wxlogin_atlas/image_denglu_txtshenpi.png',
                    'centerX': 0x0,
                    'bottom': 0xa
                }
            }, {
                'type': 'Box',
                'props': {
                    'y': 0x3c3,
                    'x': 0x0,
                    'width': 0x2d0,
                    'var': 'processBox1',
                    'name': 'processBox1',
                    'height': 0x82
                },
                'child': [{
                    'type': 'Image',
                    'props': {
                        'y': 0x2e,
                        'x': 0x3e,
                        'width': 0x254,
                        'var': 'loadingBarBg',
                        'skin': 'wxloading_atlas/image_loding_bar0.png',
                        'height': 0x1b,
                        'centerX': 0x0
                    }
                }, {
                    'type': 'Image',
                    'props': {
                        'y': 0x31,
                        'x': 0x40,
                        'width': 0x24e,
                        'var': 'loadingBar',
                        'skin': 'wxloading_atlas/image_loding_bar1.png',
                        'height': 0x15
                    }
                }, {
                    'type': 'Image',
                    'props': {
                        'y': 0x37,
                        'x': 0x1fb,
                        'width': 0xd0,
                        'var': 'loadingImg1',
                        'skin': 'wxloading_atlas/image_loding_bar2.png',
                        'height': 0xb
                    }
                }, {
                    'type': 'Image',
                    'props': {
                        'y': 0x6,
                        'x': 0x274,
                        'width': 0x27,
                        'var': 'loadingImg2',
                        'skin': 'wxloading_atlas/image_loding_bar3.png',
                        'height': 0x74
                    }
                }, {
                    'type': 'Label',
                    'props': {
                        'y': 0x30,
                        'x': 0x125,
                        'width': 0x86,
                        'var': 'percentageTips',
                        'valign': 'middle',
                        'text': '88%',
                        'strokeColor': '#565353',
                        'stroke': 0x3,
                        'height': 0x18,
                        'fontSize': 0x18,
                        'color': '#fbfbf9',
                        'centerX': 0x0,
                        'bold': !0x1,
                        'align': 'center'
                    }
                }]
            }, {
                'type': 'Box',
                'props': {
                    'y': 0x429,
                    'x': 0x0,
                    'width': 0x2d0,
                    'var': 'processBox2',
                    'name': 'processBox2',
                    'height': 0x11
                },
                'child': [{
                    'type': 'Image',
                    'props': {
                        'y': 0x0,
                        'x': 0x133,
                        'var': 'point1',
                        'skin': 'wxloading_atlas/image_login_point3.png',
                        'centerX': -0x2d
                    }
                }, {
                    'type': 'Image',
                    'props': {
                        'y': 0x0,
                        'x': 0x151,
                        'var': 'point2',
                        'skin': 'wxloading_atlas/image_login_point2.png',
                        'centerX': -0xf
                    }
                }, {
                    'type': 'Image',
                    'props': {
                        'y': 0x0,
                        'x': 0x16f,
                        'var': 'point3',
                        'skin': 'wxloading_atlas/image_login_point1.png',
                        'centerX': 0xf
                    }
                }, {
                    'type': 'Image',
                    'props': {
                        'y': 0x0,
                        'x': 0x18d,
                        'var': 'point4',
                        'skin': 'wxloading_atlas/image_login_point1.png',
                        'centerX': 0x2d
                    }
                }]
            }, {
                'type': 'Button',
                'props': {
                    'y': 0x316,
                    'x': 0x37,
                    'visible': !0x1,
                    'var': 'getTipsBtn',
                    'stateNum': 0x1,
                    'skin': 'wxloading_atlas/btn_loding_abcelq0.png',
                    'name': 'getTipsBtn',
                    'labelSize': 0x1e,
                    'labelFont': 'SimHei',
                    'labelColors': '#af4158'
                },
                'child': [{
                    'type': 'Label',
                    'props': {
                        'y': 0x9b,
                        'x': 0x92,
                        'width': 0x143,
                        'var': 'txtGetTm',
                        'text': '立即领取(5s)',
                        'name': 'txtGetTm',
                        'height': 0x1e,
                        'fontSize': 0x1e,
                        'color': '#bd4f1e',
                        'align': 'center'
                    }
                }]
            }, {
                'type': 'Label',
                'props': {
                    'y': 0x453,
                    'width': 0x1f4,
                    'var': 'loadingTips',
                    'valign': 'middle',
                    'text': '加载描述',
                    'height': 0x1a,
                    'fontSize': 0x1a,
                    'color': '#f2ffb5',
                    'centerX': 0x0,
                    'bold': !0x1,
                    'align': 'center'
                }
            }, {
                'type': 'Label',
                'props': {
                    'y': 0xa,
                    'x': 0xa,
                    'width': 0x156,
                    'var': 'versionTxt',
                    'valign': 'middle',
                    'top': 0x14,
                    'text': '版本\uFF1A100',
                    'strokeColor': '#20385f',
                    'stroke': 0x2,
                    'right': 0x14,
                    'height': 0x20,
                    'fontSize': 0x18,
                    'color': '#dfebff',
                    'bold': !0x1,
                    'align': 'right'
                }
            }]
        }, qrb201;
    }(gyfl6gt);
    j4wv$['H$n'] = b01a;
}(grob || (grob = {})), function (kbqao1) {
    var ty6fg = function (n08rb2) {
        function u7xz3s() {
            return n08rb2['call'](this) || this;
        }
        return gusx37(u7xz3s, n08rb2), u7xz3s['prototype']['createChildren'] = function () {
            gyfl6gt['regComponent']('HTMLDivElement', laya['html']['dom']['HTMLDivElement']), gyfl6gt['regComponent']('Text', laya['display']['Text']), n08rb2['prototype']['createChildren']['call'](this), this['createView'](kbqao1['H$o']['uiView']);
        }, u7xz3s['uiView'] = {
            'type': 'View',
            'props': {
                'width': 0x2d0,
                'name': 'P_SelectServerViewUI',
                'height': 0x500
            },
            'child': [{
                'type': 'Image',
                'props': {
                    'width': 0x2d0,
                    'var': 'bgImg',
                    'skin': 'wxlogin_atlas/image_login_loginbg.jpg',
                    'name': 'bg',
                    'height': 0x500,
                    'centerY': 0x0,
                    'centerX': 0x0
                }
            }, {
                'type': 'Box',
                'props': {
                    'width': 0x2d0,
                    'height': 0x500,
                    'centerY': 0x0,
                    'centerX': 0x0
                },
                'child': [{
                    'type': 'Image',
                    'props': {
                        'width': 0x2d0,
                        'var': 'topImg',
                        'skin': 'wxlogin_atlas/image_login_loginbg_top.jpg',
                        'bottom': 0x4ff
                    }
                }, {
                    'type': 'Image',
                    'props': {
                        'width': 0x2d0,
                        'var': 'btmImg',
                        'top': 0x4ff,
                        'skin': 'wxlogin_atlas/image_login_loginbg_bottom.jpg'
                    }
                }, {
                    'type': 'Image',
                    'props': {
                        'var': 'leftImg',
                        'skin': 'wxlogin_atlas/image_login_loginbg_left.jpg',
                        'right': 0x2cf,
                        'height': 0x500
                    }
                }, {
                    'type': 'Image',
                    'props': {
                        'var': 'rightImg',
                        'skin': 'wxlogin_atlas/image_login_loginbg_right.jpg',
                        'left': 0x2cf,
                        'height': 0x500
                    }
                }]
            }, {
                'type': 'Image',
                'props': {
                    'y': 0x34d,
                    'var': 'selectServer',
                    'skin': 'wxlogin_atlas/image_login_xuanqubg.png',
                    'centerX': 0x0
                }
            }, {
                'type': 'Image',
                'props': {
                    'y': 0x44e,
                    'var': 'imgCheatTip',
                    'skin': 'wxlogin_atlas/image_loding_txtbhcc.png',
                    'name': 'imgCheatTip',
                    'centerX': 0x0
                }
            }, {
                'type': 'Image',
                'props': {
                    'y': 0x39f,
                    'x': 0x9f,
                    'var': 'hotImage',
                    'skin': 'wxlogin_atlas/image_login_changtong.png'
                }
            }, {
                'type': 'Image',
                'props': {
                    'var': 'copyRightImg',
                    'skin': 'wxlogin_atlas/image_denglu_txtshenpi.png',
                    'centerX': 0x0,
                    'bottom': 0x1e
                }
            }, {
                'type': 'Image',
                'props': {
                    'y': 0x3f7,
                    'var': 'enterBtn',
                    'stateNum': 0x1,
                    'skin': 'wxlogin_atlas/btn_login_loginanniu.png',
                    'name': 'enterBtn',
                    'centerX': 0x0
                }
            }, {
                'type': 'Image',
                'props': {
                    'x': 0xc4,
                    'visible': !0x1,
                    'var': 'privacyToggle',
                    'skin': 'wxlogin_atlas/image_xuanfu_gx1.png',
                    'bottom': 0x4
                }
            }, {
                'type': 'Label',
                'props': {
                    'y': 0x3a4,
                    'x': 0x209,
                    'var': 'selServer',
                    'valign': 'middle',
                    'text': '选服>',
                    'height': 0x20,
                    'fontSize': 0x1e,
                    'color': '#feffc0',
                    'bold': !0x1,
                    'align': 'center'
                }
            }, {
                'type': 'Label',
                'props': {
                    'y': 0x3a4,
                    'width': 0x156,
                    'var': 'serverName',
                    'valign': 'middle',
                    'text': '0000000000001服',
                    'height': 0x20,
                    'fontSize': 0x1e,
                    'color': '#feffc0',
                    'centerX': 0x0,
                    'bold': !0x1,
                    'align': 'center'
                }
            }, {
                'type': 'Label',
                'props': {
                    'width': 0x156,
                    'var': 'versionTxt',
                    'valign': 'middle',
                    'top': 0x14,
                    'text': '版本\uFF1A100',
                    'strokeColor': '#20385f',
                    'stroke': 0x2,
                    'right': 0x14,
                    'height': 0x20,
                    'fontSize': 0x18,
                    'color': '#dfebff',
                    'bold': !0x1,
                    'align': 'right'
                }
            }, {
                'type': 'HTMLDivElement',
                'props': {
                    'y': 0x4e7,
                    'x': 0x100,
                    'visible': !0x1,
                    'var': 'privacyTip',
                    'height': 0x10
                }
            }, {
                'type': 'Image',
                'props': {
                    'y': 0x7f,
                    'x': 593.5,
                    'var': 'noticeBtn',
                    'skin': 'wxlogin_atlas/btn_login_gonggao.png'
                }
            }, {
                'type': 'Image',
                'props': {
                    'y': 0x101,
                    'x': 0x252,
                    'visible': !0x1,
                    'var': 'privacyBtn',
                    'skin': 'wxlogin_atlas/btn_login_yingsi.png',
                    'name': 'privacyBtn'
                }
            }, {
                'type': 'Image',
                'props': {
                    'visible': !0x1,
                    'var': 'ageTipBtn',
                    'top': 0x1,
                    'scaleY': 0.5,
                    'scaleX': 0.5,
                    'name': 'privacyBtn',
                    'left': 0x1
                }
            }, {
                'type': 'Image',
                'props': {
                    'y': 0x47,
                    'x': -0x2,
                    'visible': !0x1,
                    'var': 'noticeBg',
                    'skin': 'wxlogin_atlas/image_login_notice.png',
                    'centerY': 0x0,
                    'centerX': 0x0
                },
                'child': [{
                    'type': 'Image',
                    'props': {
                        'y': 36.5,
                        'x': 0x268,
                        'var': 'noticeClose',
                        'skin': 'wxlogin_atlas/btn_com_chuangback.png'
                    }
                }, {
                    'type': 'Label',
                    'props': {
                        'y': 0x48,
                        'x': 0xd8,
                        'width': 0xea,
                        'var': 'noticeTitle',
                        'valign': 'middle',
                        'text': '暂无公告',
                        'height': 0x23,
                        'fontSize': 0x1e,
                        'color': '#ffffff',
                        'bold': !0x1,
                        'align': 'center'
                    }
                }, {
                    'type': 'Text',
                    'props': {
                        'y': 0x8e,
                        'x': 0x3d,
                        'wordWrap': !0x0,
                        'width': 0x221,
                        'var': 'noticeContent',
                        'valign': 'top',
                        'overflow': 'scroll',
                        'mouseEnabled': !0x0,
                        'leading': 0x4,
                        'height': 0x366,
                        'fontSize': 0x1a,
                        'color': '#212942'
                    }
                }]
            }, {
                'type': 'Image',
                'props': {
                    'visible': !0x1,
                    'var': 'mNoticeBg',
                    'skin': 'wxlogin_atlas/image_login_notice.png',
                    'centerY': 0x0,
                    'centerX': 0x0
                },
                'child': [{
                    'type': 'Image',
                    'props': {
                        'y': 36.5,
                        'x': 0x268,
                        'var': 'mNoticeClose',
                        'skin': 'wxlogin_atlas/btn_com_chuangback.png'
                    }
                }, {
                    'type': 'Button',
                    'props': {
                        'y': 0x388,
                        'x': 0xbe,
                        'var': 'mNoticeClose2',
                        'stateNum': 0x1,
                        'skin': 'wxlogin_atlas/btn_com_long1.png',
                        'labelSize': 0x1e,
                        'labelColors': '#263d7d,#263d7d,#263d7d,#263d7d',
                        'label': '关闭'
                    }
                }, {
                    'type': 'Box',
                    'props': {
                        'y': 0x388,
                        'x': 0x22,
                        'width': 0x254,
                        'var': 'boxTab',
                        'height': 0x3b
                    }
                }, {
                    'type': 'Label',
                    'props': {
                        'y': 0x48,
                        'x': 0xd8,
                        'width': 0xea,
                        'var': 'mNoticeTitle',
                        'valign': 'middle',
                        'text': '暂无公告',
                        'height': 0x23,
                        'fontSize': 0x1e,
                        'color': '#ffffff',
                        'bold': !0x1,
                        'align': 'center'
                    }
                }, {
                    'type': 'Panel',
                    'props': {
                        'y': 0x8e,
                        'x': 0x3d,
                        'width': 0x221,
                        'var': 'mNoticePanel',
                        'height': 0x2dd
                    },
                    'child': [{
                        'type': 'HTMLDivElement',
                        'props': {
                            'y': 0x0,
                            'x': 0x0,
                            'width': 0x221,
                            'var': 'mNoticeContent',
                            'height': 0x2dd
                        }
                    }]
                }]
            }, {
                'type': 'Box',
                'props': {
                    'y': 0x7c,
                    'x': 0x29,
                    'width': 0x27d,
                    'visible': !0x1,
                    'var': 'privacybgbox',
                    'name': 'privacybgbox',
                    'height': 0x407
                },
                'child': [{
                    'type': 'Image',
                    'props': {
                        'y': 0x1a9,
                        'x': 0x3d,
                        'skin': 'wxlogin_atlas/image_dl_wxtsbg.png',
                        'centerY': 0x0,
                        'centerX': 0x0
                    },
                    'child': [{
                        'type': 'Button',
                        'props': {
                            'y': 0x144,
                            'x': 0x5a,
                            'var': 'cancelBtn',
                            'stateNum': 0x1,
                            'skin': 'wxlogin_atlas/btn_xuanqu_anniulan.png',
                            'name': 'cancelBtn',
                            'labelStrokeColor': '#6742b5',
                            'labelSize': 0x1e,
                            'label': '不同意'
                        }
                    }, {
                        'type': 'Button',
                        'props': {
                            'y': 0x144,
                            'x': 0x144,
                            'var': 'okBtn',
                            'stateNum': 0x1,
                            'skin': 'wxlogin_atlas/btn_xuanqu_anniuhuang.png',
                            'name': 'okBtn',
                            'labelStrokeColor': '#af4158',
                            'labelSize': 0x1e,
                            'label': '同意'
                        }
                    }, {
                        'type': 'Button',
                        'props': {
                            'y': 0xb7,
                            'x': 0x6a,
                            'var': 'sbtn',
                            'stateNum': 0x1,
                            'skin': 'wxlogin_atlas/image_xuanfu_gx1.png',
                            'name': 'sbtn'
                        }
                    }, {
                        'type': 'HTMLDivElement',
                        'props': {
                            'y': 0xbc,
                            'x': 0x8d,
                            'width': 0x16e,
                            'var': 'thml',
                            'name': 'thml',
                            'innerHTML': 'htmlText',
                            'height': 0x46
                        }
                    }, {
                        'type': 'Text',
                        'props': {
                            'y': 0x4b,
                            'x': 0xf6,
                            'text': '温馨提示',
                            'fontSize': 0x1e,
                            'color': '#ffffff'
                        }
                    }]
                }]
            }, {
                'type': 'Image',
                'props': {
                    'visible': !0x1,
                    'var': 'privacyBg',
                    'skin': 'wxlogin_atlas/image_login_notice.png',
                    'name': 'privacyBg',
                    'centerY': 0x0,
                    'centerX': 0x0
                },
                'child': [{
                    'type': 'Image',
                    'props': {
                        'y': 36.5,
                        'x': 0x268,
                        'var': 'privacyClose',
                        'skin': 'wxlogin_atlas/btn_com_chuangback.png'
                    }
                }, {
                    'type': 'Button',
                    'props': {
                        'y': 0x388,
                        'x': 0xbe,
                        'var': 'privacyClose2',
                        'stateNum': 0x1,
                        'skin': 'wxlogin_atlas/btn_com_long1.png',
                        'labelSize': 0x1e,
                        'labelColors': '#263d7d,#263d7d,#263d7d,#263d7d',
                        'label': '关闭'
                    }
                }, {
                    'type': 'Box',
                    'props': {
                        'y': 0x388,
                        'x': 0x22,
                        'width': 0x254,
                        'var': 'boxTabPrivacy',
                        'height': 0x3b
                    }
                }, {
                    'type': 'Label',
                    'props': {
                        'y': 0x48,
                        'x': 0xd8,
                        'width': 0xea,
                        'var': 'privacyTitle',
                        'valign': 'middle',
                        'text': '暂无公告',
                        'height': 0x23,
                        'fontSize': 0x1e,
                        'color': '#ffffff',
                        'bold': !0x1,
                        'align': 'center'
                    }
                }, {
                    'type': 'Panel',
                    'props': {
                        'y': 0x8e,
                        'x': 0x3d,
                        'width': 0x221,
                        'var': 'privacyPanel',
                        'height': 0x2dd
                    },
                    'child': [{
                        'type': 'HTMLDivElement',
                        'props': {
                            'y': 0x0,
                            'x': 0x0,
                            'width': 0x221,
                            'var': 'privacyContent',
                            'height': 0x2dd
                        }
                    }]
                }]
            }, {
                'type': 'Image',
                'props': {
                    'visible': !0x1,
                    'var': 'listBg',
                    'skin': 'wxlogin_atlas/image_xuanfu_xfbg.png',
                    'centerY': 0x0,
                    'centerX': 0x0
                },
                'child': [{
                    'type': 'Box',
                    'props': {
                        'y': 0x75,
                        'x': 0x3d,
                        'width': 0xc8,
                        'var': 'leftListBox',
                        'height': 0x389
                    }
                }, {
                    'type': 'Box',
                    'props': {
                        'y': 0x75,
                        'x': 0x125,
                        'width': 0x166,
                        'var': 'rightListBox',
                        'height': 0x389
                    }
                }, {
                    'type': 'Image',
                    'props': {
                        'y': 0xd,
                        'x': 0x282,
                        'var': 'closeBg',
                        'skin': 'wxlogin_atlas/image_com_tuichu.png'
                    }
                }]
            }, {
                'type': 'Box',
                'props': {
                    'width': 0x2d0,
                    'visible': !0x1,
                    'var': 'jumpBg',
                    'mouseThrough': !0x1,
                    'height': 0x500,
                    'centerY': 0x0,
                    'centerX': 0x0
                },
                'child': [{
                    'type': 'Image',
                    'props': {
                        'x': 0x21,
                        'width': 0x28f,
                        'skin': 'wxlogin_atlas/image_login_notice.png',
                        'height': 0x3e2,
                        'centerY': 0x0,
                        'centerX': 0x0
                    }
                }, {
                    'type': 'Button',
                    'props': {
                        'width': 0x112,
                        'var': 'btnJump',
                        'stateNum': 0x1,
                        'skin': 'wxlogin_atlas/btn_com_long1.png',
                        'labelSize': 0x1e,
                        'labelColors': '#263d7d,#263d7d,#263d7d,#263d7d',
                        'label': '跳转',
                        'height': 0x3b,
                        'centerY': 0x1b4,
                        'centerX': 0x0
                    }
                }, {
                    'type': 'Label',
                    'props': {
                        'width': 0xea,
                        'var': 'jumpTitle',
                        'valign': 'middle',
                        'text': '暂无公告',
                        'fontSize': 0x1e,
                        'color': '#ffffff',
                        'centerY': -0x198,
                        'centerX': 0x0,
                        'bold': !0x1,
                        'align': 'center'
                    }
                }, {
                    'type': 'Panel',
                    'props': {
                        'x': 0x5e,
                        'width': 0x221,
                        'var': 'jumpPanel',
                        'height': 0x2dd,
                        'centerY': 0xa
                    },
                    'child': [{
                        'type': 'HTMLDivElement',
                        'props': {
                            'y': 0x0,
                            'x': 0x0,
                            'width': 0x221,
                            'var': 'jumpContent',
                            'height': 0x2dd
                        }
                    }]
                }, {
                    'type': 'Image',
                    'props': {
                        'x': 0x254,
                        'visible': !0x1,
                        'var': 'closeBtn',
                        'skin': 'wxlogin_atlas/image_com_tuichu.png',
                        'name': 'closeBtn',
                        'centerY': -0x192
                    }
                }]
            }, {
                'type': 'Label',
                'props': {
                    'y': 0x280,
                    'x': 0x0,
                    'width': 0x2d0,
                    'var': 'txtTip',
                    'valign': 'middle',
                    'text': '提示内容(不要移要在最上层)',
                    'strokeColor': '#ffffff',
                    'stroke': 0x2,
                    'height': 0x20,
                    'fontSize': 0x20,
                    'color': '#ff0000',
                    'bold': !0x1,
                    'align': 'center'
                }
            }]
        }, u7xz3s;
    }(gyfl6gt);
    kbqao1['H$o'] = ty6fg;
}(grob || (grob = {})), function (jw4i$) {
    var o_edc, cdp59;
    o_edc = jw4i$['H$c'] || (jw4i$['H$c'] = {}), cdp59 = function (g69ft) {
        function dmc5p() {
            return g69ft['call'](this) || this;
        }
        return gusx37(dmc5p, g69ft), dmc5p['prototype']['initialize'] = function () {
            g69ft['prototype']['initialize']['call'](this), this['centerX'] = 0x0, this['centerY'] = 0x0, this['addEvt'](), this['onOpened']();
        }, dmc5p['prototype']['addEvt'] = function () {
            this['on'](Laya['Event']['CLICK'], this, this['H$F']);
        }, dmc5p['prototype']['rmEvts'] = function () {
            this['off'](Laya['Event']['CLICK'], this, this['H$F']);
        }, dmc5p['prototype']['onOpened'] = function () {
            this['H$b'] = Date['now'](), gbr1oqa['instance']['J1FQP5R'](), gbr1oqa['instance']['preloadLoading']();
        }, dmc5p['prototype']['destroy'] = function (dmeck_) {
            void 0x0 === dmeck_ && (dmeck_ = !0x0), this['rmEvts'](), g69ft['prototype']['destroy']['call'](this, dmeck_);
        }, dmc5p['prototype']['H$F'] = function () {
            if (0x2710 < Date['now']() - this['H$b']) {
                this['H$b'] -= 0x3e8;
                var v4wj$ = ga_1ko['window']['J15Q']['selectedServer'];
                v4wj$['server_id'] && o_edc['CommonFunc']['checkSer'](v4wj$) && (gbr1oqa['instance']['enterDefaultServer'](), gbr1oqa['instance']['sendRecord']());
            }
        }, dmc5p;
    }(grob['H$w']), o_edc['AuthorizationPanel'] = cdp59;
}(modules || (modules = {})), function (gft95) {
    var f4ljy6, t5y6fg, bak1oq, xzs37, r20h8n, ke_cd;
    f4ljy6 = gft95['H$d'] || (gft95['H$d'] = {}), t5y6fg = Laya['Event'], bak1oq = Laya['Image'], xzs37 = Laya['Component'], r20h8n = Laya['Loader'], ke_cd = function (uh7sz3) {
        function lty() {
            var uh8ns = uh7sz3['call'](this) || this;
            return uh8ns['H$r'] = new bak1oq(), uh8ns['addChild'](uh8ns['H$r']), uh8ns['H$y'] = null, uh8ns['H$G'] = [], uh8ns['H$Q'] = !0x1, uh8ns['H$x'] = 0x0, uh8ns['H$P'] = !0x0, uh8ns['H$C'] = 0x6, uh8ns['H$f'] = !0x1, uh8ns['on'](t5y6fg['DISPLAY'], uh8ns, uh8ns['H$J']), uh8ns['on'](t5y6fg['UNDISPLAY'], uh8ns, uh8ns['H$l']), uh8ns;
        }
        return gusx37(lty, uh7sz3), lty['create'] = function (d_kce, n8b2, y56fgt, zh73u, y4gf6, $4lj6, tg965) {
            void 0x0 === zh73u && (zh73u = 0x0), void 0x0 === y4gf6 && (y4gf6 = 0x6), void 0x0 === $4lj6 && ($4lj6 = !0x0), void 0x0 === tg965 && (tg965 = !0x1);
            var h30n82 = new lty();
            return h30n82['skin'](n8b2, y56fgt, zh73u), h30n82['durFrm'] = y4gf6, h30n82['loop'] = $4lj6, h30n82['atHide'] = tg965, d_kce && d_kce['addChild'](h30n82), h30n82;
        }, lty['play'] = function (obrq) {
            obrq && (obrq['visible'] = !0x0, obrq['play']());
        }, lty['stop'] = function (b1kq) {
            b1kq && (b1kq['visible'] = !0x1, b1kq['stop']());
        }, lty['prototype']['destroy'] = function (szh3un) {
            Laya['timer']['clear'](this, this['H$Z']), this['off'](t5y6fg['DISPLAY'], this, this['H$J']), this['off'](t5y6fg['UNDISPLAY'], this, this['H$l']), uh7sz3['prototype']['destroy']['call'](this, szh3un);
        }, lty['prototype']['H$J'] = function () {}, lty['prototype']['H$l'] = function () {}, lty['prototype']['skin'] = function (r20n8h, pcd5m9, tfyl6) {
            if (this['H$y'] != r20n8h) {
                this['H$y'] = r20n8h, this['H$G'] = [];
                for (var g5fty6 = 0x0, w4jy = tfyl6; w4jy <= pcd5m9; w4jy++) this['H$G'][g5fty6++] = r20n8h + '/' + w4jy + '.png';
                var _qok1 = r20h8n['getRes'](this['H$G'][0x0]);
                _qok1 && (this['width'] = _qok1['sourceWidth'], this['height'] = _qok1['sourceHeight']), this['H$Z']();
            }
        }, Object['defineProperty'](lty['prototype'], 'atHide', {
            'get': function () {
                return this['H$f'];
            },
            'set': function (ptm) {
                this['H$f'] = ptm;
            },
            'enumerable': !0x0,
            'configurable': !0x0
        }), Object['defineProperty'](lty['prototype'], 'durFrm', {
            'set': function (mdpc9e) {
                this['H$C'] != mdpc9e && (this['H$C'] = mdpc9e, this['H$Q'] && (Laya['timer']['clear'](this, this['H$Z']), Laya['timer']['loop'](this['H$C'] * (0x3e8 / 0x3c), this, this['H$Z'])));
            },
            'enumerable': !0x0,
            'configurable': !0x0
        }), Object['defineProperty'](lty['prototype'], 'loop', {
            'set': function (em_pdc) {
                this['H$P'] = em_pdc;
            },
            'enumerable': !0x0,
            'configurable': !0x0
        }), lty['prototype']['play'] = function () {
            this['H$Q'] && this['stop'](), this['H$Q'] = !0x0, this['H$x'] = 0x0, Laya['timer']['loop'](this['H$C'] * (0x3e8 / 0x3c), this, this['H$Z']), this['H$Z']();
        }, lty['prototype']['stop'] = function () {
            this['H$Q'] = !0x1, this['H$x'] = 0x0, this['H$Z'](), Laya['timer']['clear'](this, this['H$Z']);
        }, lty['prototype']['pause'] = function () {
            this['H$Q'] && (this['H$Q'] = !0x1, Laya['timer']['clear'](this, this['H$Z']));
        }, lty['prototype']['resume'] = function () {
            this['H$Q'] || (this['H$Q'] = !0x0, Laya['timer']['loop'](this['H$C'] * (0x3e8 / 0x3c), this, this['H$Z']), this['H$Z']());
        }, Object['defineProperty'](lty['prototype'], 'isPlay', {
            'get': function () {
                return this['H$Q'];
            },
            'enumerable': !0x0,
            'configurable': !0x0
        }), lty['prototype']['H$Z'] = function () {
            this['H$G'] && 0x0 != this['H$G']['length'] && (this['H$r']['skin'] = this['H$G'][this['H$x']], this['H$Q'] && (this['H$x']++, this['H$x'] == this['H$G']['length'] && (this['H$P'] ? this['H$x'] = 0x0 : (Laya['timer']['clear'](this, this['H$Z']), this['H$Q'] = !0x1, this['H$f'] && (this['visible'] = !0x1), this['event'](t5y6fg['COMPLETE'])))));
        }, lty;
    }(xzs37), f4ljy6['PanelEff'] = ke_cd;
}(modules || (modules = {})), function (_qo1k) {
    var xz73s, $iwvj;
    xz73s = _qo1k['H$c'] || (_qo1k['H$c'] = {}), $iwvj = function (l6y$j4) {
        function t95pmd(ka1_oq, cdpem) {
            void 0x0 === ka1_oq && (ka1_oq = 0x0);
            var uh3z7s = l6y$j4['call'](this) || this;
            return uh3z7s['H$D'] = {
                'bgImgSkin': 'wxloading_atlas/image_loading_bg.jpg',
                'topImgSkin': 'wxloading_atlas/image_loading_bg_top.jpg',
                'btmImgSkin': 'wxloading_atlas/image_loading_bg_bottom.jpg',
                'leftImgSkin': 'wxloading_atlas/image_loading_bg_left.jpg',
                'rightImgSkin': 'wxloading_atlas/image_loading_bg_right.jpg',
                'loadingBarBgSkin': 'wxloading_atlas/image_loding_bar0.png',
                'copyRightImgBottom': 0xa,
                'processBox1Y': 0x3c3,
                'processBox2Y': 0x429,
                'loadingTipsSize': 0x1a,
                'getTipsBtnVisible': !0x1
            }, uh3z7s['H$m'] = {
                'bgImgSkin': 'wxloading_atlas/image_loading_bg2.jpg',
                'topImgSkin': 'wxloading_atlas/image_loading_bg_top2.jpg',
                'btmImgSkin': 'wxloading_atlas/image_loading_bg_bottom2.jpg',
                'leftImgSkin': 'wxloading_atlas/image_loading_bg_left2.jpg',
                'rightImgSkin': 'wxloading_atlas/image_loading_bg_right2.jpg',
                'loadingBarBgSkin': 'wxloading_atlas/image_loding_bar02.png',
                'copyRightImgBottom': 0xa,
                'processBox1Y': 0x3c3,
                'processBox2Y': 0x429,
                'loadingTipsSize': 0x1a,
                'getTipsBtnVisible': !0x1
            }, uh3z7s['H$_'] = 0x0, uh3z7s['H$N'](0x1 == ka1_oq ? uh3z7s['H$m'] : uh3z7s['H$D']), uh3z7s['copyRightImg']['skin'] = '', uh3z7s['copyRightImg']['skin'] = cdpem, uh3z7s;
        }
        return gusx37(t95pmd, l6y$j4), t95pmd['prototype']['initialize'] = function () {
            if (l6y$j4['prototype']['initialize']['call'](this), gbr1oqa['instance']['preloadLoading'](), this['H$g'] = ga_1ko['window']['J15Q'], this['centerX'] = 0x0, this['centerY'] = 0x0, this['H$g']) {
                var a1or = this['H$g']['loadingType'];
                this['loadingTips']['color'] = 0x1 == a1or ? '#f2ffb5' : 0x2 == a1or ? '#000000' : 0x65 == a1or ? '#000000' : '#f2ffb5';
            }
            this['H$H'] = [this['point1'], this['point2'], this['point3'], this['point4']], ga_1ko['window']['watPanel'] = this, J1R5QP(), gbr1oqa['instance']['closeAuthor'](), gbr1oqa['instance']['closeServer'](), this['onOpened']();
        }, t95pmd['prototype']['J1R5Q'] = function (qba1r) {
            var lfy4j = this;
            if (-0x1 === qba1r) return lfy4j['H$_'] = 0x0, Laya['timer']['clear'](this, this['J1R5Q']), void Laya['timer']['frameLoop'](0x1, this, this['J1R5Q']);
            if (-0x2 !== qba1r) {
                lfy4j['H$_'] < 0.9 ? lfy4j['H$_'] += (0.15 * Math['random']() + 0.01) / (0x64 * Math['random']() + 0x32) : lfy4j['H$_'] < 0x1 && (lfy4j['H$_'] += 0.0001), 0.9999 < lfy4j['H$_'] && (lfy4j['H$_'] = 0.9999, Laya['timer']['clear'](this, this['J1R5Q']), Laya['timer']['once'](0xbb8, this, function () {
                    0.9 < lfy4j['H$_'] && J1R5Q(-0x1);
                }));
                var ocae_ = lfy4j['H$_'],
                    mp_cde = 0x24e * ocae_;
                lfy4j['H$_'] = lfy4j['H$_'] > ocae_ ? lfy4j['H$_'] : ocae_, lfy4j['loadingBar']['width'] = mp_cde;
                var nus83h = lfy4j['loadingBar']['x'] + mp_cde;
                lfy4j['loadingImg2']['x'] = nus83h - 0xf, 0x16c <= nus83h ? (lfy4j['loadingImg1']['visible'] = !0x0, lfy4j['loadingImg1']['x'] = nus83h - 0xca) : lfy4j['loadingImg1']['visible'] = !0x1, lfy4j['percentageTips']['text'] = (0x64 * ocae_ >> 0x0) + '%', lfy4j['H$_'] < 0.9999 && Laya['timer']['frameLoop'](0x1, this, this['J1R5Q']);
            } else Laya['timer']['clear'](this, this['J1R5Q']);
        }, t95pmd['prototype']['J1RQ5'] = function (ecp9d, _ke, h3082n) {
            0x1 < ecp9d && (ecp9d = 0x1);
            var dpm_c = 0x24e * ecp9d;
            this['H$_'] = this['H$_'] > ecp9d ? this['H$_'] : ecp9d, this['loadingBar']['width'] = dpm_c;
            var gp5tm = this['loadingBar']['x'] + dpm_c;
            this['loadingImg2']['x'] = gp5tm - 0xf, 0x16c <= gp5tm ? (this['loadingImg1']['visible'] = !0x0, this['loadingImg1']['x'] = gp5tm - 0xca) : this['loadingImg1']['visible'] = !0x1, this['percentageTips']['text'] = (0x64 * ecp9d >> 0x0) + '%', this['loadingTips']['text'] = _ke;
            for (var ylf6 = h3082n - 0x1, uns38 = 0x0; uns38 < this['H$H']['length']; uns38++) this['H$H'][uns38]['skin'] = uns38 < ylf6 ? 'wxloading_atlas/image_login_point3.png' : ylf6 === uns38 ? 'wxloading_atlas/image_login_point2.png' : 'wxloading_atlas/image_login_point1.png';
        }, t95pmd['prototype']['onOpened'] = function () {
            this['J1RQ5'](0.1, '正在加载资源...', 0x1), this['J1R5Q'](-0x1), ga_1ko['window']['J1R5Q'] = this['J1R5Q']['bind'](this), ga_1ko['window']['J1RQ5'] = this['J1RQ5']['bind'](this), this['versionTxt']['text'] = '资源：' + this['H$g']['lastVersion'] + '\x20\x20\x20\x20\x20\x20版本：' + this['H$g']['wxVersion'], this['showGetBtn']();
        }, t95pmd['prototype']['close'] = function (vi$) {
            this['resetWinFun'](), Laya['timer']['clear'](this, this['J1R5Q']), Laya['timer']['clear'](this, this['H$I']), gbr1oqa['instance']['closeLoading'](), this['getTipsBtn']['off'](Laya['Event']['CLICK'], this, this['H$h']);
        }, t95pmd['prototype']['resetWinFun'] = function () {
            ga_1ko['window']['J1R5Q'] = function () {}, ga_1ko['window']['J1RQ5'] = function () {};
        }, t95pmd['prototype']['destroy'] = function (c95) {
            void 0x0 === c95 && (c95 = !0x0), this['resetWinFun'](), l6y$j4['prototype']['destroy']['call'](this, c95);
        }, t95pmd['prototype']['showGetBtn'] = function () {
            this['H$g']['showGetBtn'] && 0x1 == this['H$g']['showGetBtn'] && (this['getTipsBtn']['visible'] = !0x0, this['getTipsBtn']['tag'] = !0x0, this['getTipsBtn']['skin'] = 'wxloading_atlas/btn_loding_abcelq0.png', this['getTipsBtn']['on'](Laya['Event']['CLICK'], this, this['H$h']), this['H$q'](), this['H$s'](!0x0));
        }, t95pmd['prototype']['H$h'] = function () {
            this['getTipsBtn']['tag'] && (this['getTipsBtn']['tag'] = !0x1, this['getTipsBtn']['skin'] = 'wxloading_atlas/btn_loding_abcelq1.png', this['H$X'](), this['H$s'](!0x1));
        }, t95pmd['prototype']['H$N'] = function (t6ygf5) {
            this['bgImg']['skin'] = t6ygf5['bgImgSkin'], this['topImg']['skin'] = t6ygf5['topImgSkin'], this['btmImg']['skin'] = t6ygf5['btmImgSkin'], this['leftImg']['skin'] = t6ygf5['leftImgSkin'], this['rightImg']['skin'] = t6ygf5['rightImgSkin'], this['copyRightImg']['bottom'] = t6ygf5['copyRightImgBottom'], this['processBox1']['y'] = t6ygf5['processBox1Y'], this['processBox2']['y'] = t6ygf5['processBox2Y'], this['loadingBarBg']['skin'] = t6ygf5['loadingBarBgSkin'], this['loadingTips']['fontSize'] = t6ygf5['loadingTipsSize'], this['getTipsBtn']['visible'] = this['H$g']['showGetBtn'] && 0x1 == this['H$g']['showGetBtn'], this['getTipsBtn']['visible'] ? this['H$q']() : this['H$X'](), this['H$s'](this['getTipsBtn']['visible']);
        }, t95pmd['prototype']['H$q'] = function () {}, t95pmd['prototype']['H$X'] = function () {}, t95pmd['prototype']['H$s'] = function (dkecm_) {
            Laya['timer']['clear'](this, this['H$I']), dkecm_ ? (this['H$Y'] = 0x9, this['txtGetTm']['visible'] = !0x0, this['H$I'](), Laya['timer']['loop'](0x3e8, this, this['H$I'])) : this['txtGetTm']['visible'] = !0x1;
        }, t95pmd['prototype']['H$I'] = function () {
            0x0 < this['H$Y'] ? (this['txtGetTm']['text'] = '立即领取(' + this['H$Y'] + 's)', this['H$Y']--) : (this['txtGetTm']['text'] = '', Laya['timer']['clear'](this, this['H$I']), this['H$h']());
        }, t95pmd;
    }(grob['H$n']), xz73s['LoadingPanel'] = $iwvj;
}(modules || (modules = {})), function (n2u8) {
    !function (nzhs3) {
        var wlyj = function () {
            function br01a() {}
            return br01a['checkSer'] = function (a_qk1) {
                if (!a_qk1) return !0x1;
                var cekd = br01a['isRecommend'](a_qk1['is_recommend']);
                if (-0x1 != a_qk1['status']) return 0x0 == a_qk1['status'] ? (alert('服务器尚未开启，敬请期待'), !0x1) : !(0x3 === a_qk1['status'] && !cekd) || (alert('当前区服已爆满，请稍后再试'), !0x1);
                var wj$4yl = '服务器维护中',
                    h8nus3 = a_qk1['maintain_time'];
                return h8nus3 && '' != h8nus3 && '\x20' != h8nus3 && (wj$4yl += '\x0a(预计时间' + h8nus3 + ')'), alert(wj$4yl), !0x1;
            }, br01a['isRecommend'] = function (oq_k) {
                return 0x1 === oq_k || 0x3 === oq_k;
            }, br01a['getStatusSrc'] = function (edkm) {
                var $ylw4 = edkm['status'],
                    hn3z = br01a['isRecommend'](edkm['is_recommend']),
                    gylt6f = 'wxlogin_atlas/image_login_fanmang.png';
                return 0x0 < $ylw4 && hn3z ? gylt6f = 'wxlogin_atlas/image_login_changtong.png' : 0x0 < $ylw4 && !hn3z ? gylt6f = 'wxlogin_atlas/image_login_fanmang.png' : $ylw4 <= 0x0 && (gylt6f = 'wxlogin_atlas/image_login_weihu.png'), gylt6f;
            }, br01a['getStatusAddStr'] = function (jly$64) {
                var lj6$4 = jly$64['status'],
                    e_akoc = '';
                return br01a['isRecommend'](jly$64['is_recommend']) ? e_akoc = '(推荐)' : -0x1 === lj6$4 ? e_akoc = '(维护中)' : 0x0 === lj6$4 && (e_akoc = '(待开服)'), e_akoc;
            }, br01a['getStatusAddStr2'] = function (rqob1) {
                var ilw$4j = rqob1['status'],
                    u2h8n = '';
                return -0x1 === ilw$4j ? u2h8n = '维护中' : 0x0 === ilw$4j ? u2h8n = '未开服' : 0x0 < ilw$4j && (u2h8n = '已开服'), u2h8n;
            }, br01a['getPreAddStr'] = function () {
                var p95cd = ga_1ko['window']['J15Q'];
                return p95cd['ser_name_pkg'] ? p95cd['ser_name_pkg'] : '';
            }, br01a['getStatusTxtColor'] = function (vw4j$, ck_m) {
                var cp9 = ck_m;
                return -0x1 === vw4j$ ? cp9 = '#d50000' : 0x0 === vw4j$ && (cp9 = '#49575a'), cp9;
            }, br01a;
        }();
        nzhs3['CommonFunc'] = wlyj;
        var _odkec = Laya['List'],
            md59tp = Laya['Event'],
            q0b2 = function (yj4w$) {
            function gft65y(gt96f) {
                void 0x0 === gt96f && (gt96f = 'wxlogin_atlas/image_denglu_txtshenpi.png');
                var a1rb = yj4w$['call'](this) || this;
                return a1rb['H$t'] = 0x0, a1rb['H$L'] = 'multi_notice_key', a1rb['H$U'] = 0x0, a1rb['H$O'] = 0x0, a1rb['H$u'] = 'privacy_key', a1rb['H$M'] = !0x0, a1rb['H$T'] = 0x0, a1rb['copyRightImg']['skin'] = gt96f, a1rb;
            }
            return gusx37(gft65y, yj4w$), gft65y['prototype']['initialize'] = function () {
                yj4w$['prototype']['initialize']['call'](this), this['centerX'] = 0x0, this['centerY'] = 0x0, this['copyRightImg']['skin'] = '', gbr1oqa['instance']['J1FQP5R'](), this['H$g'] = ga_1ko['window']['J15Q'], this['H$E'] = new _odkec(), this['H$E']['vScrollBarSkin'] = '', this['H$E']['itemRender'] = nzhs3['SelectLeftListItem'], this['H$E']['top'] = 0x5, this['H$E']['repeatX'] = 0x1, this['H$E']['spaceY'] = 0x5, this['H$E']['width'] = this['leftListBox']['width'], this['H$E']['height'] = this['leftListBox']['height'] - 0x8, this['leftListBox']['addChild'](this['H$E']), this['H$K'] = new _odkec(), this['H$K']['vScrollBarSkin'] = '', this['H$K']['itemRender'] = nzhs3['SelectRightListItem'], this['H$K']['top'] = 0x5, this['H$K']['repeatX'] = 0x1, this['H$K']['spaceY'] = 0x5, this['H$K']['width'] = this['rightListBox']['width'], this['H$K']['height'] = this['rightListBox']['height'] - 0x8, this['rightListBox']['addChild'](this['H$K']), this['H$k'] = new _odkec(), this['H$k']['hScrollBarSkin'] = '', this['H$k']['itemRender'] = nzhs3['NoticeItem'], this['H$k']['repeatY'] = 0x1, this['H$k']['width'] = this['boxTab']['width'], this['H$k']['height'] = this['boxTab']['height'], this['boxTab']['addChild'](this['H$k']), this['H$a'] = new _odkec(), this['H$a']['hScrollBarSkin'] = '', this['H$a']['itemRender'] = nzhs3['PrivacyItem'], this['H$a']['repeatY'] = 0x1, this['H$a']['width'] = this['boxTab']['width'], this['H$a']['height'] = this['boxTab']['height'], this['boxTabPrivacy']['addChild'](this['H$a']);
                var cdem_ = this['H$g']['loadingType'];
                this['H$v'] = 0x1 == cdem_ ? '#feffc0' : 0x2 == cdem_ ? '#feffc0' : 0x3 == cdem_ ? '#feffc0' : 0x65 == cdem_ ? '#feffc0' : '#93353b', this['enterBtn']['size'](0x1fa, 0x58), this['H$i'] = [], this['noticeBtn']['visible'] = !0x1, this['mNoticeContent']['color'] = '#212942', this['mNoticeContent']['style']['fontSize'] = 0x1a, this['mNoticeContent']['style']['lineHeight'] = 0x1c, this['mNoticeContent']['mouseEnabled'] = !0x1, this['privacyContent']['color'] = '#212942', this['privacyContent']['style']['fontSize'] = 0x1a, this['privacyContent']['style']['lineHeight'] = 0x1c, this['privacyContent']['mouseEnabled'] = !0x1, this['privacyTip']['color'] = '#ffffff', this['privacyTip']['style']['fontSize'] = 0x12, this['privacyTip']['style']['lineHeight'] = 0x12, this['privacyTip']['style']['stroke'] = 0x2, this['privacyTip']['style']['strokeColor'] = '#000000', this['privacyTip']['style']['wordWrap'] = !0x1, this['thml']['color'] = '#3d4d78', this['thml']['style']['fontSize'] = 0x18, this['thml']['style']['lineHeight'] = 0x12, this['thml']['style']['align'] = 'left', this['jumpContent']['color'] = '#212942', this['jumpContent']['style']['fontSize'] = 0x1a, this['jumpContent']['style']['lineHeight'] = 0x1c, this['jumpContent']['mouseEnabled'] = !0x1, ga_1ko['window']['initPanel'] = this, J1R5QP(), this['addEvt'](), this['onOpened']();
            }, gft65y['prototype']['destroy'] = function (_koac) {
                void 0x0 === _koac && (_koac = !0x0), this['rmEvts'](), this['H$z'](), this['H$e'](), this['H$A'](), this['H$V'](), this['ageTipsContent'] = null, this['H$E'] && (this['H$E']['removeSelf'](), this['H$E']['destroy'](), this['H$E'] = null), this['H$K'] && (this['H$K']['removeSelf'](), this['H$K']['destroy'](), this['H$K'] = null), this['H$k'] && (this['H$k']['removeSelf'](), this['H$k']['destroy'](), this['H$k'] = null), this['H$a'] && (this['H$a']['removeSelf'](), this['H$a']['destroy'](), this['H$a'] = null), this['H$W'] && this['H$W']['graphics']['clear'](), this['H$W'] && this['H$W']['removeSelf'](), Laya['timer']['clear'](this, this['H$B']), yj4w$['prototype']['destroy']['call'](this, _koac);
            }, gft65y['prototype']['addEvt'] = function () {
                this['bgImg']['on'](Laya['Event']['CLICK'], this, this['H$S']), this['enterBtn']['on'](Laya['Event']['CLICK'], this, this['H$$']), this['selectServer']['on'](Laya['Event']['CLICK'], this, this['H$j']), this['selectServer']['on'](Laya['Event']['CLICK'], this, this['H$j']), this['closeBg']['on'](Laya['Event']['CLICK'], this, this['H$p']), this['closeBtn']['on'](Laya['Event']['CLICK'], this, this['H$R']), this['noticeBtn']['on'](Laya['Event']['CLICK'], this, this['H$ww']), this['noticeClose']['on'](Laya['Event']['CLICK'], this, this['H$nw']), this['noticeContent']['on'](Laya['Event']['MOUSE_DOWN'], this, this['H$ow']), this['mNoticeClose']['on'](Laya['Event']['CLICK'], this, this['H$cw']), this['mNoticeClose2']['on'](Laya['Event']['CLICK'], this, this['H$cw']), this['mNoticePanel']['on'](Laya['Event']['MOUSE_DOWN'], this, this['H$Fw']), this['privacyBtn']['on'](Laya['Event']['CLICK'], this, this['H$bw']), this['ageTipBtn']['on'](Laya['Event']['CLICK'], this, this['H$dw']), this['privacyClose']['on'](Laya['Event']['CLICK'], this, this['H$rw']), this['privacyClose2']['on'](Laya['Event']['CLICK'], this, this['H$rw']), this['cancelBtn']['on'](Laya['Event']['CLICK'], this, this['H$yw']), this['okBtn']['on'](Laya['Event']['CLICK'], this, this['H$Gw']), this['sbtn']['on'](Laya['Event']['CLICK'], this, this['H$Qw']), this['privacyPanel']['on'](Laya['Event']['MOUSE_DOWN'], this, this['H$xw']), this['privacyToggle']['on'](Laya['Event']['CLICK'], this, this['H$Pw']), this['privacyTip']['on'](Laya['Event']['LINK'], this, this['H$Cw']), this['thml']['on'](Laya['Event']['LINK'], this, this['H$Cw']), this['btnJump']['on'](Laya['Event']['CLICK'], this, this['H$fw']), this['jumpPanel']['on'](Laya['Event']['MOUSE_DOWN'], this, this['H$Jw']), this['H$k']['selectEnable'] = !0x0, this['H$k']['selectHandler'] = Laya['Handler']['create'](this, this['H$lw'], null, !0x1), this['H$a']['selectEnable'] = !0x0, this['H$a']['selectHandler'] = Laya['Handler']['create'](this, this['H$Zw'], null, !0x1);
            }, gft65y['prototype']['rmEvts'] = function () {
                this['bgImg']['off'](Laya['Event']['CLICK'], this, this['H$S']), this['enterBtn']['off'](Laya['Event']['CLICK'], this, this['H$$']), this['selectServer']['off'](Laya['Event']['CLICK'], this, this['H$j']), this['selectServer']['off'](Laya['Event']['CLICK'], this, this['H$j']), this['closeBg']['off'](Laya['Event']['CLICK'], this, this['H$p']), this['noticeBtn']['off'](Laya['Event']['CLICK'], this, this['H$ww']), this['closeBtn']['off'](Laya['Event']['CLICK'], this, this['H$R']), this['noticeClose']['off'](Laya['Event']['CLICK'], this, this['H$nw']), this['noticeContent']['off'](Laya['Event']['MOUSE_DOWN'], this, this['H$ow']), this['mNoticeClose']['off'](Laya['Event']['CLICK'], this, this['H$cw']), this['mNoticeClose2']['off'](Laya['Event']['CLICK'], this, this['H$cw']), this['mNoticePanel']['off'](Laya['Event']['MOUSE_DOWN'], this, this['H$Fw']), this['privacyBtn']['off'](Laya['Event']['CLICK'], this, this['H$bw']), this['ageTipBtn']['off'](Laya['Event']['CLICK'], this, this['H$dw']), this['privacyClose']['off'](Laya['Event']['CLICK'], this, this['H$rw']), this['privacyClose2']['off'](Laya['Event']['CLICK'], this, this['H$rw']), this['cancelBtn']['off'](Laya['Event']['CLICK'], this, this['H$yw']), this['okBtn']['off'](Laya['Event']['CLICK'], this, this['H$Gw']), this['sbtn']['off'](Laya['Event']['CLICK'], this, this['H$Qw']), this['privacyPanel']['off'](Laya['Event']['MOUSE_DOWN'], this, this['H$xw']), this['privacyToggle']['off'](Laya['Event']['CLICK'], this, this['H$Pw']), this['privacyTip']['off'](Laya['Event']['LINK'], this, this['H$Cw']), this['thml']['off'](Laya['Event']['LINK'], this, this['H$Cw']), this['btnJump']['off'](Laya['Event']['CLICK'], this, this['H$fw']), this['jumpPanel']['off'](Laya['Event']['MOUSE_DOWN'], this, this['H$Jw']), this['H$k']['selectEnable'] = !0x1, this['H$k']['selectHandler'] = null, this['H$a']['selectEnable'] = !0x1, this['H$a']['selectHandler'] = null;
            }, gft65y['prototype']['onOpened'] = function () {
                var qkoa = this;
                this['H$b'] = Date['now'](), this['H$M'] = !0x0, this['H$Dw'] = this['H$g']['selectedServer']['server_id'], this['H$mw'](this['H$g']['selectedServer']), this['H$E']['dataSource'] = this['H$g']['groupList'], this['H$j'](), req_multi_server_notice(0x4, this['H$g']['pkgName'], this['H$g']['selectedServer']['server_id'], this['H$_w']['bind'](this)), Laya['timer']['frameOnce'](0x1, this, function () {
                    qkoa['H$Nw'] = qkoa['H$g']['privacy_data'] && qkoa['H$g']['privacy_data']['list'] ? qkoa['H$g']['privacy_data']['list'] : [], qkoa['H$gw'] = null != qkoa['H$g']['privacy_login_pkg'] ? qkoa['H$g']['privacy_login_pkg'] : 0x0;
                    var nr2h08 = '1' == localStorage['getItem'](qkoa['H$u']),
                        n8hu3 = 0x0 != J15Q['privacy_save_pkg'],
                        b1r0q2 = 0x0 == qkoa['H$gw'] || 0x1 == qkoa['H$gw'];
                    qkoa['H$Hw'] = n8hu3 && nr2h08 || b1r0q2, qkoa['H$Iw']();
                }), this['versionTxt']['text'] = '资源：' + this['H$g']['lastVersion'] + '\x20\x20\x20\x20\x20\x20版本：' + this['H$g']['wxVersion'], this['versionTxt']['visible'] = !this['H$g']['wxShield'], this['serverName']['color'] = this['selServer']['color'] = this['H$v'], this['imgCheatTip']['visible'] = 0x1 == this['H$g']['anti_cheat_pkg'], this['txtTip']['visible'] = !0x1, console['log'](this['versionTxt']['text']);
            }, gft65y['prototype']['preload'] = function () {}, gft65y['prototype']['H$yw'] = function () {
                0x2 == ENV ? qq['exitMiniProgram']({}) : this['H$hw']('同意协议后才可进入游戏');
            }, gft65y['prototype']['H$Qw'] = function () {
                this['H$qw'] = !this['H$qw'], this['sbtn']['skin'] = 'wxlogin_atlas/' + (this['H$qw'] ? 'image_xuanfu_gx1.png' : 'image_xuanfu_gx0.png');
            }, gft65y['prototype']['H$Gw'] = function () {
                this['H$qw'] ? wlyj['checkSer'](this['H$g']['selectedServer']) && (ga_1ko['window']['J15Q']['selectedServer'] = this['H$g']['selectedServer'], J1QRP5(0x0, this['H$g']['selectedServer']['server_id'])) : this['H$hw']('同意协议后才可进入游戏');
            }, gft65y['prototype']['H$S'] = function () {
                this['H$Hw'] ? 0x2710 < Date['now']() - this['H$b'] && wlyj['checkSer'](this['H$g']['selectedServer']) && (this['H$b'] -= 0x7d0, gbr1oqa['instance']['enterDefaultServer']()) : this['H$hw']('您必须同意用户协议才可进入游戏');
            }, gft65y['prototype']['H$$'] = function () {
                this['H$Hw'] ? wlyj['checkSer'](this['H$g']['selectedServer']) && (ga_1ko['window']['J15Q']['selectedServer'] = this['H$g']['selectedServer'], J1QRP5(0x0, this['H$g']['selectedServer']['server_id'])) : this['H$g']['privacy_alert_login_pkg'] ? (this['privacybgbox']['visible'] = !0x0, this['H$W'] || (this['H$W'] = new Laya['Sprite'](), this['privacybgbox']['addChildAt'](this['H$W'], 0x0), this['H$W']['graphics']['drawRect'](0x0, 0x0, this['privacybgbox']['width'], this['privacybgbox']['height'], '#000000', 0x2), this['H$W']['alpha'] = 0.3)) : this['H$hw']('您必须同意用户协议才可进入游戏');
            }, gft65y['prototype']['H$j'] = function () {
                this['H$g']['hasGroupReq'] ? this['listBg']['visible'] = !0x0 : (this['H$g']['hasGroupReq'] = !0x0, J15QRP(0x0));
            }, gft65y['prototype']['H$p'] = function () {
                this['listBg']['visible'] = !0x1;
            }, gft65y['prototype']['H$R'] = function () {
                this['jumpBg']['visible'] = !0x1;
            }, gft65y['prototype']['H$ww'] = function () {
                this['H$sw']();
            }, gft65y['prototype']['H$cw'] = function () {
                this['mNoticeBg']['visible'] = !0x1;
            }, gft65y['prototype']['H$nw'] = function () {
                this['noticeBg']['visible'] = !0x1;
            }, gft65y['prototype']['H$bw'] = function () {
                this['H$Xw']();
            }, gft65y['prototype']['H$rw'] = function () {
                this['privacyBg']['visible'] = !0x1;
            }, gft65y['prototype']['H$Pw'] = function () {
                this['H$Hw'] = !this['H$Hw'], this['H$Hw'] && localStorage['setItem'](this['H$u'], '1'), this['privacyToggle']['skin'] = 'wxlogin_atlas/' + (this['H$Hw'] ? 'image_xuanfu_gx1.png' : 'image_xuanfu_gx0.png');
            }, gft65y['prototype']['H$Cw'] = function (i4$vjw) {
                this['H$Xw'](Number(i4$vjw));
            }, gft65y['prototype']['H$fw'] = function () {
                ga_1ko['window']['forceJumpMiniGame'] ? ga_1ko['window']['forceJumpMiniGame']() : this['H$R']();
            }, gft65y['prototype']['H$ow'] = function () {
                this['H$t'] = this['noticeContent']['mouseY'], Laya['stage']['on'](md59tp['MOUSE_MOVE'], this, this['H$Yw']), Laya['stage']['on'](md59tp['MOUSE_UP'], this, this['H$z']), Laya['stage']['on'](md59tp['MOUSE_OUT'], this, this['H$z']);
            }, gft65y['prototype']['H$Yw'] = function () {
                if (this['noticeContent']) {
                    var _aeqok = this['H$t'] - this['noticeContent']['mouseY'];
                    this['noticeContent']['scrollY'] += _aeqok, this['H$t'] = this['noticeContent']['mouseY'];
                }
            }, gft65y['prototype']['H$z'] = function () {
                Laya['stage']['off'](md59tp['MOUSE_MOVE'], this, this['H$Yw']), Laya['stage']['off'](md59tp['MOUSE_UP'], this, this['H$z']), Laya['stage']['off'](md59tp['MOUSE_OUT'], this, this['H$z']);
            }, gft65y['prototype']['H$Fw'] = function () {
                this['H$U'] = this['mNoticePanel']['mouseY'], Laya['stage']['on'](md59tp['MOUSE_MOVE'], this, this['H$tw']), Laya['stage']['on'](md59tp['MOUSE_UP'], this, this['H$e']), Laya['stage']['on'](md59tp['MOUSE_OUT'], this, this['H$e']);
            }, gft65y['prototype']['H$tw'] = function () {
                if (this['mNoticeContent']) {
                    var wjli$ = this['H$U'] - this['mNoticePanel']['mouseY'];
                    this['mNoticeContent']['y'] -= wjli$, this['mNoticePanel']['height'] < this['mNoticeContent']['contextHeight'] ? this['mNoticeContent']['y'] < this['mNoticePanel']['height'] - this['mNoticeContent']['contextHeight'] ? this['mNoticeContent']['y'] = this['mNoticePanel']['height'] - this['mNoticeContent']['contextHeight'] : 0x0 < this['mNoticeContent']['y'] && (this['mNoticeContent']['y'] = 0x0) : this['mNoticeContent']['y'] = 0x0, this['H$U'] = this['mNoticePanel']['mouseY'];
                }
            }, gft65y['prototype']['H$e'] = function () {
                Laya['stage']['off'](md59tp['MOUSE_MOVE'], this, this['H$tw']), Laya['stage']['off'](md59tp['MOUSE_UP'], this, this['H$e']), Laya['stage']['off'](md59tp['MOUSE_OUT'], this, this['H$e']);
            }, gft65y['prototype']['H$xw'] = function () {
                this['H$O'] = this['privacyPanel']['mouseY'], Laya['stage']['on'](md59tp['MOUSE_MOVE'], this, this['H$Lw']), Laya['stage']['on'](md59tp['MOUSE_UP'], this, this['H$A']), Laya['stage']['on'](md59tp['MOUSE_OUT'], this, this['H$A']);
            }, gft65y['prototype']['H$Lw'] = function () {
                if (this['privacyContent']) {
                    var y4gfl6 = this['H$O'] - this['privacyPanel']['mouseY'];
                    this['privacyContent']['y'] -= y4gfl6, this['privacyPanel']['height'] < this['privacyContent']['contextHeight'] ? this['privacyContent']['y'] < this['privacyPanel']['height'] - this['privacyContent']['contextHeight'] ? this['privacyContent']['y'] = this['privacyPanel']['height'] - this['privacyContent']['contextHeight'] : 0x0 < this['privacyContent']['y'] && (this['privacyContent']['y'] = 0x0) : this['privacyContent']['y'] = 0x0, this['H$O'] = this['privacyPanel']['mouseY'];
                }
            }, gft65y['prototype']['H$A'] = function () {
                Laya['stage']['off'](md59tp['MOUSE_MOVE'], this, this['H$Lw']), Laya['stage']['off'](md59tp['MOUSE_UP'], this, this['H$A']), Laya['stage']['off'](md59tp['MOUSE_OUT'], this, this['H$A']);
            }, gft65y['prototype']['H$Jw'] = function () {
                this['H$T'] = this['jumpPanel']['mouseY'], Laya['stage']['on'](md59tp['MOUSE_MOVE'], this, this['H$Uw']), Laya['stage']['on'](md59tp['MOUSE_UP'], this, this['H$V']), Laya['stage']['on'](md59tp['MOUSE_OUT'], this, this['H$V']);
            }, gft65y['prototype']['H$Uw'] = function () {
                if (this['jumpContent']) {
                    var pd_em = this['H$T'] - this['jumpPanel']['mouseY'];
                    this['jumpContent']['y'] -= pd_em, this['jumpPanel']['height'] < this['jumpContent']['contextHeight'] ? this['jumpContent']['y'] < this['jumpPanel']['height'] - this['jumpContent']['contextHeight'] ? this['jumpContent']['y'] = this['jumpPanel']['height'] - this['jumpContent']['contextHeight'] : 0x0 < this['jumpContent']['y'] && (this['jumpContent']['y'] = 0x0) : this['jumpContent']['y'] = 0x0, this['H$T'] = this['jumpPanel']['mouseY'];
                }
            }, gft65y['prototype']['H$V'] = function () {
                Laya['stage']['off'](md59tp['MOUSE_MOVE'], this, this['H$Uw']), Laya['stage']['off'](md59tp['MOUSE_UP'], this, this['H$V']), Laya['stage']['off'](md59tp['MOUSE_OUT'], this, this['H$V']);
            }, gft65y['prototype']['H$lw'] = function () {
                if (this['H$k']['dataSource']) {
                    for (var zh7u, d_kco = 0x0; d_kco < this['H$k']['dataSource']['length']; d_kco++) {
                        var i$lj4 = this['H$k']['dataSource'][d_kco];
                        i$lj4[0x1] = d_kco == this['H$k']['selectedIndex'], d_kco == this['H$k']['selectedIndex'] && (zh7u = i$lj4[0x0]);
                    }
                    this['mNoticeTitle']['text'] = zh7u && zh7u['title'] ? zh7u['title'] : '', this['mNoticeContent']['innerHTML'] = zh7u && zh7u['content'] ? zh7u['content'] : '', this['mNoticeContent']['y'] = 0x0;
                }
            }, gft65y['prototype']['H$Zw'] = function () {
                var yfjl6 = this['H$a']['dataSource'];
                if (yfjl6) {
                    for (var g6yfl4 = 0x0; g6yfl4 < yfjl6['length']; g6yfl4++) {
                        yfjl6[g6yfl4][0x1] = g6yfl4 == this['H$a']['selectedIndex'];
                    }
                    var tl6yg = this['H$Nw'][this['H$a']['selectedIndex']];
                    tl6yg && tl6yg['content'] && (tl6yg['content'] = tl6yg['content']['replace'](/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, '')), this['privacyTitle']['text'] = tl6yg && tl6yg['title'] ? tl6yg['title'] : '标题', this['privacyContent']['innerHTML'] = tl6yg && tl6yg['content'] ? tl6yg['content'] : '加载中...', this['privacyContent']['y'] = 0x0;
                }
            }, gft65y['prototype']['H$mw'] = function (n820h3) {
                var l64f = n820h3['server_name'];
                this['serverName']['text'] = wlyj['getPreAddStr']() + l64f + wlyj['getStatusAddStr'](n820h3), this['serverName']['color'] = wlyj['getStatusTxtColor'](n820h3['status'], this['H$v']), this['hotImage']['skin'] = wlyj['getStatusSrc'](n820h3), this['H$g']['cdn'] = n820h3['cdn'] || '', this['H$g']['selectedServer'] = n820h3, this['noticeBtn']['visible'] = !this['H$g']['wxShield'];
            }, gft65y['prototype']['H$Ow'] = function (boqr) {
                this['showGroupList'](boqr);
            }, gft65y['prototype']['H$uw'] = function (r0ab1q) {
                this['H$mw'](r0ab1q), this['listBg']['visible'] = !0x1;
            }, gft65y['prototype']['showGroupList'] = function (u83hn2) {
                if (void 0x0 === u83hn2 && (u83hn2 = 0x0), this['parent']) {
                    var lj4y$w = this['H$g']['groupList'];
                    if (lj4y$w && 0x0 !== lj4y$w['length']) {
                        for (var or1aqb = lj4y$w['length'], y6j$ = 0x0; y6j$ < or1aqb; y6j$++) lj4y$w[y6j$]['callBack'] = this['H$Ow']['bind'](this), lj4y$w[y6j$]['select'] = y6j$ == u83hn2, lj4y$w[y6j$]['index'] = y6j$;
                        var k_edm = (this['H$E']['array'] = lj4y$w)[u83hn2]['id'];
                        this['H$g']['serverList'][k_edm] ? this['showServerList'](k_edm) : this['H$g']['hasServerReq'] || (this['H$g']['hasServerReq'] = !0x0, -0x1 == k_edm ? J1RP5(0x0) : -0x2 == k_edm ? J1FPQ5(0x0) : J1PR5(0x0, k_edm));
                    }
                }
            }, gft65y['prototype']['showServerList'] = function (ca_eok) {
                if (this['parent'] && this['H$g']['serverList'][ca_eok]) {
                    for (var unh83s = this['H$g']['serverList'][ca_eok], t6fly = unh83s['length'], h2n380 = 0x0; h2n380 < t6fly; h2n380++) unh83s[h2n380]['callBack'] = this['H$uw']['bind'](this);
                    this['H$K']['array'] = unh83s;
                }
            }, gft65y['prototype']['H$_w'] = function (_kaeq) {
                console['log']('onMultiNoticeCallback, param = ', _kaeq);
                var pm59td = Date['now']() / 0x3e8,
                    mep_d = localStorage['getItem'](this['H$L']),
                    rbn820 = !(this['H$i'] = []);
                if ('success' == _kaeq['state']) for (var or1baq in _kaeq['data']) {
                    var pmtg95 = _kaeq['data'][or1baq];
                    if (pmtg95) {
                        var emk_dc = pm59td < pmtg95['end_time'],
                            r801 = 0x1 == pmtg95['pop_type'],
                            usn = 0x2 == pmtg95['pop_type'] && pmtg95['key'] + '' != mep_d;
                        !rbn820 && emk_dc && (r801 || usn) && (rbn820 = !0x0), emk_dc && this['H$i']['push'](pmtg95), usn && localStorage['setItem'](this['H$L'], pmtg95['key'] + '');
                    }
                }
                this['H$i']['sort'](function (oq1ra, n208) {
                    return oq1ra['login_id'] - n208['login_id'];
                }), console['log']('onMultiNoticeCallback, datas = ', this['H$i']), rbn820 && this['H$sw']();
            }, gft65y['prototype']['H$sw'] = function () {
                if (this['H$k']) {
                    if (this['H$i']) {
                        this['H$k']['x'] = 0x2 < this['H$i']['length'] ? 0x0 : (this['boxTab']['width'] - 0x112 * this['H$i']['length']) / 0x2;
                        for (var pce9m = [], aboqk = 0x0; aboqk < this['H$i']['length']; aboqk++) {
                            var dkoe_c = this['H$i'][aboqk];
                            pce9m['push']([dkoe_c, aboqk == this['H$k']['selectedIndex']]);
                        }
                        0x0 < (this['H$k']['dataSource'] = pce9m)['length'] ? (this['H$k']['selectedIndex'] = 0x0, this['H$k']['scrollTo'](0x0)) : (this['mNoticeTitle']['text'] = '暂无公告', this['mNoticeContent']['text'] = ''), this['mNoticeClose2']['visible'] = this['H$i']['length'] <= 0x1, this['boxTab']['visible'] = 0x1 < this['H$i']['length'];
                    }
                    this['mNoticeBg']['visible'] = !0x0;
                }
            }, gft65y['prototype']['H$Mw'] = function (kcmd) {
                if (!this['destroyed']) {
                    if (console['log']('p_onPrivacyCallback, param = ', kcmd), 'success' == kcmd['state']) for (var $l6y4 in kcmd['data']) {
                        var c_doe = Number($l6y4),
                            p9gt5 = kcmd['data'][c_doe];
                        this['H$Nw'] && this['H$Nw'][c_doe] && (this['H$Nw'][c_doe]['content'] = p9gt5['content']);
                    }
                    this['H$Zw']();
                }
            }, gft65y['prototype']['H$Iw'] = function () {
                for (var hrn = '', jwli$ = 0x0; jwli$ < this['H$Nw']['length']; jwli$++) {
                    hrn += '<a href="' + jwli$ + '" style="color:#14ff28;text-decoration:none">' + this['H$Nw'][jwli$]['title'] + '</a>', jwli$ < this['H$Nw']['length'] - 0x1 && (hrn += '、');
                }
                this['privacyTip']['innerHTML'] = '我已经详细阅读并同意' + hrn, this['privacyToggle']['skin'] = 'wxlogin_atlas/' + (this['H$Hw'] ? 'image_xuanfu_gx1.png' : 'image_xuanfu_gx0.png'), this['privacyTip']['x'] = (0x2d0 - this['privacyTip']['width']) / 0x2, this['privacyToggle']['x'] = this['privacyTip']['x'] - 0x1e, this['privacyBtn']['visible'] = 0x0 < this['H$Nw']['length'], this['privacyToggle']['visible'] = this['privacyTip']['visible'] = 0x0 < this['H$Nw']['length'] && 0x0 != this['H$gw'], this['thml']['innerHTML'] = '我已经详细阅读并同意' + hrn, this['H$qw'] = 0x1 == this['H$g']['privacy_alert_login_pkg'], this['sbtn']['skin'] = 'wxlogin_atlas/' + (this['H$qw'] ? 'image_xuanfu_gx1.png' : 'image_xuanfu_gx0.png');
            }, gft65y['prototype']['H$Xw'] = function (brn280) {
                if (void 0x0 === brn280 && (brn280 = 0x0), this['H$a']) {
                    if (this['H$Nw']) {
                        this['H$a']['x'] = 0x2 < this['H$Nw']['length'] ? 0x0 : (this['boxTab']['width'] - 0x112 * this['H$Nw']['length']) / 0x2;
                        for (var uzs7x = [], uhzsn = 0x0; uhzsn < this['H$Nw']['length']; uhzsn++) {
                            var y$6lj4 = this['H$Nw'][uhzsn],
                                a_ceo = y$6lj4 && y$6lj4['title'] ? y$6lj4['title'] : '',
                                wj$4vi = uhzsn == this['H$a']['selectedIndex'];
                            uzs7x['push']([a_ceo, wj$4vi]);
                        }
                        0x0 < (this['H$a']['dataSource'] = uzs7x)['length'] ? (brn280 < 0x0 && (brn280 = 0x0), brn280 > uzs7x['length'] - 0x1 && (brn280 = 0x0), this['H$a']['selectedIndex'] = brn280, this['H$a']['scrollTo'](brn280)) : (this['privacyTitle']['text'] = '空', this['privacyContent']['text'] = ''), this['privacyClose2']['visible'] = this['H$Nw']['length'] <= 0x1, this['boxTabPrivacy']['visible'] = 0x1 < this['H$Nw']['length'];
                    }
                    this['H$M'] && (this['H$M'] = !0x1, req_privacy(this['H$g']['pkgName'], this['H$Mw']['bind'](this))), this['privacyBg']['visible'] = !0x0;
                }
            }, gft65y['prototype']['openJumpView'] = function (rb8102, gltf6y, n3u8s, tglfy) {
                void 0x0 === tglfy && (tglfy = !0x1), this['jumpTitle']['text'] = rb8102 || '暂无公告', this['jumpContent']['innerHTML'] = gltf6y || '', this['btnJump']['label'] = n3u8s || '确定', this['jumpContent']['y'] = 0x0, this['jumpBg']['visible'] = !0x0, this['closeBtn']['visible'] = tglfy;
            }, gft65y['prototype']['showAgeTipsBtn'] = function (lfg6t, oqkea_, r102bq, yfl4g, r1a0qb) {
                (this['ageTipBtn']['visible'] = lfg6t) && (this['ageTipBtn']['skin'] = oqkea_ || 'wxlogin_atlas/btn_login_gonggao.png'), this['ageTipsContent'] = r102bq, this['ageTipBtn']['left'] = yfl4g || 0x0, this['ageTipBtn']['top'] = r1a0qb || 0x0;
            }, gft65y['prototype']['H$dw'] = function () {
                this['openJumpView']('适龄公告', this['ageTipsContent'], '确认', !0x0);
            }, gft65y['prototype']['H$hw'] = function (w4$vji) {
                this['txtTip']['text'] = w4$vji, this['txtTip']['y'] = 0x280, this['txtTip']['visible'] = !0x0, this['H$Tw'] = 0x1, Laya['timer']['clear'](this, this['H$B']), this['H$B'](), Laya['timer']['frameLoop'](0x1, this, this['H$B']);
            }, gft65y['prototype']['H$B'] = function () {
                this['txtTip']['y'] -= this['H$Tw'], this['H$Tw'] *= 1.1, this['txtTip']['y'] <= 0x24e && (this['txtTip']['visible'] = !0x1, Laya['timer']['clear'](this, this['H$B']));
            }, gft65y;
        }(grob['H$o']);
        nzhs3['SelectServerPanel'] = q0b2;
    }(n2u8['H$c'] || (n2u8['H$c'] = {}));
}(modules || (modules = {}));
var modules,
    ga_1ko = Laya['Browser'],
    gc5dmp9 = Laya['Font'],
    gw4y$l = Laya['Input'],
    gockae = Laya['Render'],
    gokca_e = Laya['Handler'],
    gea_okc = modules['H$c']['AuthorizationPanel'],
    glgy6 = modules['H$c']['LoadingPanel'],
    gg6ftly = modules['H$c']['SelectServerPanel'],
    gbr1oqa = function () {
    function z7s(tf59pg) {
        this['m_loadingRes'] = ['wxloading_atlas/image_loding_bar0.png', 'wxloading_atlas/image_loding_bar02.png', 'wxloading_atlas/image_loding_bar1.png', 'wxloading_atlas/image_loding_bar2.png', 'wxloading_atlas/image_loding_bar3.png', 'wxloading_atlas/image_login_point1.png', 'wxloading_atlas/image_login_point2.png', 'wxloading_atlas/image_login_point3.png', 'wxeff_btn_atlas/0.png', 'wxeff_btn_atlas/1.png', 'wxeff_btn_atlas/2.png', 'wxeff_btn_atlas/3.png', 'wxeff_btn_atlas/4.png', 'wxloading_atlas/image_loading_bg.jpg', 'wxloading_atlas/image_loading_bg2.jpg', 'wxloading_atlas/btn_loding_abcelq0.png', 'wxloading_atlas/btn_loding_abcelq1.png', 'wxloading_atlas/image_loading_bg_bottom.jpg', 'wxloading_atlas/image_loading_bg_left.jpg', 'wxloading_atlas/image_loading_bg_right.jpg', 'wxloading_atlas/image_loading_bg_top.jpg', 'wxloading_atlas/image_loading_bg_bottom2.jpg', 'wxloading_atlas/image_loading_bg_left2.jpg', 'wxloading_atlas/image_loading_bg_right2.jpg', 'wxloading_atlas/image_loading_bg_top2.jpg'], this['J1FQP5'] = ['wxlogin_atlas/btn_com_chuangback.png', 'wxlogin_atlas/btn_login_gonggao.png', 'wxlogin_atlas/btn_login_loginanniu.png', 'wxlogin_atlas/btn_login_yingsi.png', 'wxlogin_atlas/btn_xuanqu_anniuhuang.png', 'wxlogin_atlas/btn_xuanqu_anniulan.png', 'wxlogin_atlas/btn_xuanqu_quanniu.png', 'wxlogin_atlas/image_com_tuichu.png', 'wxlogin_atlas/image_login_changtong.png', 'wxlogin_atlas/image_login_fanmang.png', 'wxlogin_atlas/image_login_weihu.png', 'wxlogin_atlas/image_login_xuanqubg.png', 'wxlogin_atlas/image_login_loginbg.jpg', 'wxlogin_atlas/image_login_loginbg_bottom.jpg', 'wxlogin_atlas/image_login_loginbg_left.jpg', 'wxlogin_atlas/image_login_loginbg_right.jpg', 'wxlogin_atlas/image_login_loginbg_top.jpg', 'wxlogin_atlas/image_denglu_txtshenpi.png', 'wxlogin_atlas/image_login_notice.png', 'wxlogin_atlas/image_xuanfu_xfbg.png', 'wxlogin_atlas/btn_com_long0.png', 'wxlogin_atlas/btn_com_long1.png', 'wxlogin_atlas/image_loding_txtbhcc.png', 'wxlogin_atlas/image_xuanfu_gx1.png', 'wxlogin_atlas/image_xuanfu_gx0.png', 'wxlogin_atlas/shenhezizi.png', 'wxlogin_atlas/image_xuanqu_ztjb0.png'], this['copyRightUrl'] = 'wxlogin_atlas/image_denglu_txtshenpi.png', this['H$Ew'] = !0x1, this['m_isPrelodServer'] = !0x1, this['m_isPrelodLoading'] = !0x1, this['H$Kw'] = !0x1, this['H$kw'] = '', z7s['instance'] = this, Laya['MiniAdpter']['init'](), Laya3D['init'](0x0, 0x0, !0x1, !0x1, !0x1), DecodeTools['init'](), Laya['stage']['scaleMode'] = Laya['Stage']['SCALE_FIXED_WIDTH'], Laya['stage']['screenMode'] = Laya['Stage']['SCREEN_NONE'], Laya['stage']['alignH'] = Laya['Stage']['ALIGN_CENTER'], Laya['stage']['alignV'] = Laya['Stage']['ALIGN_MIDDLE'], Laya['stage']['frameRate'] = Laya['Stage']['FRAME_SLOW'];
        var d_mpce = Laya['AtlasResourceManager'];
        d_mpce['maxTextureCount'] = 0x6, d_mpce['atlasTextureWidth'] = d_mpce['atlasTextureHeight'] = 0x400, d_mpce['_enable'](), Laya['URL']['rootPath'] = Laya['URL']['basePath'] = '', Laya['Browser']['window']['addEventListener'](Laya['Event']['RESIZE'], this['H$aw']['bind'](this)), this['H$vw'] = 'https://cdn-tjqy.shzbkj.com/wxLoading', this['H$iw'](), ga_1ko['window']['resMgrLoad'] = z7s['instance']['J1F5Q'], ga_1ko['window']['imgMgrLoad'] = z7s['instance']['J1F5Q'], this['m_layer'] = new Laya['Component'](), this['m_layer']['name'] = '_wxLoadingLayer', Laya['stage']['addChild'](this['m_layer']), this['H$zw'] = new Laya['Component'](), this['H$zw']['name'] = '_noiseLy', Laya['stage']['addChild'](this['H$zw']), this['H$zw']['mouseEnabled'] = this['H$zw']['mouseThrough'] = !0x0, this['H$aw'](), modules['H$Aw']['H$ew']['init'](), Laya['timer']['loop'](0x1f4, this, this['H$Vw']);
    }
    return z7s['prototype']['H$iw'] = function () {
        var kqoae = (window['config'] || {})['game_pkg'];
        if (this['H$Ww'] = Math['floor'](0x98967f * Math['random']()), kqoae) 0x1 && '';else console['error']('未读取到\uFF1Agame_pkg:', kqoae);
    }, z7s['prototype']['getURL'] = function (c_oea) {
        var o_kc = (window['config'] || {})['game_pkg'];
        return o_kc ? (this['H$Bw'] || this['H$vw']) + '/' + o_kc + '/' + c_oea + '?v=' + this['H$Ww'] : (console['error']('getURL 未读取到\uFF1Agame_pkg:', o_kc), c_oea);
    }, z7s['prototype']['H$Vw'] = function () {
        if (!this['H$Ew']) {
            var x73zs = window['ShieldNoise'];
            x73zs && (Laya['timer']['clear'](this, this['H$Vw']), this['addNoise'](x73zs));
        }
    }, z7s['prototype']['addNoise'] = function (w4lyj$) {
        if (w4lyj$ && !this['H$Ew']) {
            this['H$Ew'] = !0x0, this['H$Sw'] && (this['H$Sw']['removeSelf'](), this['H$Sw']['destroyChildren'](), this['H$Sw']['destroy'](), this['H$Sw'] = null);
            var dpc9me = [0.9, 0.1, 0.0043, 0.0033],
                y6lfgt = w4lyj$['split']('#');
            0x4 == y6lfgt['length'] && (dpc9me[0x0] = parseFloat(y6lfgt[0x0]), dpc9me[0x1] = parseFloat(y6lfgt[0x1]), dpc9me[0x2] = parseFloat(y6lfgt[0x2]), dpc9me[0x3] = parseFloat(y6lfgt[0x3]));
            var rqb1ao = new Laya['Camera'](0x0, 0x0, 0x2710);
            rqb1ao['name'] = 'NoiseCamera', rqb1ao['orthographic'] = !0x0, rqb1ao['useOcclusionCulling'] = !0x1, rqb1ao['renderingOrder'] = -0x2, rqb1ao['transform']['translate'](new Laya['Vector3'](0x0, 0x0, 0x0)), rqb1ao['transform']['rotate'](new Laya['Vector3'](0x0, 0x0, 0x0), !0x0, !0x1), this['H$Sw'] = new Laya['Scene'](), this['H$Sw']['name'] = 'NoiseScene', this['H$Sw']['addChild'](rqb1ao), this['H$zw']['addChild'](this['H$Sw']);
            var tg9m = new modules['H$Aw']['H$ew']();
            tg9m['randomSeed'] = dpc9me[0x0], tg9m['intensity'] = dpc9me[0x1], tg9m['grainSizeX'] = dpc9me[0x2], tg9m['grainSizeY'] = dpc9me[0x3];
            var mg9pt5 = new Laya['MeshSprite3D'](new Laya['PlaneMesh'](0x1e, 0x1e));
            mg9pt5['name'] = 'NoiseMesh', mg9pt5['meshRender']['material'] = tg9m, this['H$Sw']['addChild'](mg9pt5), mg9pt5['transform']['rotate'](new Laya['Vector3'](0x5a, 0x0, 0x0), !0x0, !0x1), mg9pt5['transform']['translate'](new Laya['Vector3'](0x0, 0x0, 0x0));
        }
    }, z7s['prototype']['removeNoise'] = function () {
        this['H$Ew'] = !0x1, Laya['timer']['clear'](this, this['H$Vw']), this['H$Sw'] && (this['H$Sw']['removeSelf'](), this['H$Sw']['destroyChildren'](), this['H$Sw']['destroy'](), this['H$Sw'] = null);
    }, z7s['prototype']['addTolayer'] = function (r8h2) {
        z7s['instance']['m_layer']['addChild'](r8h2);
    }, z7s['prototype']['J1RQP5'] = function (nh0r82) {
        z7s['instance']['m_layer']['visible'] = nh0r82;
    }, z7s['prototype']['J1FP5QR'] = function () {
        z7s['instance']['m_author'] || (z7s['instance']['m_author'] = new gea_okc()), z7s['instance']['m_author']['parent'] || z7s['instance']['m_layer']['addChild'](z7s['instance']['m_author']), z7s['instance']['H$$w']();
    }, z7s['prototype']['closeAuthor'] = function () {
        this['m_author'] && this['m_author']['parent'] && (Laya['stage']['removeChild'](this['m_author']), this['m_author']['destroy'](!0x0), this['m_author'] = null);
    }, z7s['prototype']['J1FQP5R'] = function () {
        this['m_isPrelodServer'] || (this['m_isPrelodServer'] = !0x0, Laya['loader']['load'](this['J1FQP5'], gokca_e['create'](this, function () {
            ga_1ko['window']['loadServerRes'] = !0x0, ga_1ko['window']['J1QP5R'](), ga_1ko['window']['J1Q5RP']();
        })));
    }, z7s['prototype']['H$jw'] = function () {
        z7s['instance']['m_server'] || (z7s['instance']['m_server'] = new gg6ftly(this['copyRightUrl'])), z7s['instance']['m_server']['parent'] || z7s['instance']['m_layer']['addChild'](z7s['instance']['m_server']), z7s['instance']['H$$w']();
    }, z7s['prototype']['openJumpView'] = function (qar1ob, xszu3, f65y, kab1q) {
        void 0x0 === kab1q && (kab1q = !0x1), this['H$jw'](), z7s['instance']['m_server']['openJumpView'](qar1ob, xszu3, f65y, kab1q);
    }, z7s['prototype']['openJumpTipsBtn'] = function (hz7su, u3hzsn, h7zsu3, suh7z, h0823) {
        this['H$jw'](), z7s['instance']['m_server']['showAgeTipsBtn'](hz7su, u3hzsn, h7zsu3, suh7z, h0823);
    }, z7s['prototype']['getCertificatePng'] = function () {
        window['sdkInitRes'] = window['sdkInitRes'] || {};
        var qok1ba = 'wxlogin_atlas/shenhezizi.png',
            dp5cm9 = '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';
        return 0x1 == sdkInitRes['develop'] ? 0x0 == (J15Q['develop_certificate_pkg'] || 0x0) ? qok1ba : 'data:image/png;base64,' + dp5cm9['substring'](0x1, dp5cm9['length']) : 0x0 == J15Q['release_certificate_pkg'] ? qok1ba : 'data:image/png;base64,' + dp5cm9['substring'](0x1, dp5cm9['length']);
    }, z7s['prototype']['openServer'] = function (bra1o, ko1q_a, f5ty) {
        var okqb = this;
        this['copyRightUrl'] = f5ty || this['getCertificatePng']();
        for (var n3zhsu = function () {
            okqb['H$jw'](), bra1o && ko1q_a && bra1o['call'](ko1q_a);
        }, u3sz = !0x0, kqa1o = 0x0, ecd = this['J1FQP5']; kqa1o < ecd['length']; kqa1o++) {
            var h8s3u = ecd[kqa1o];
            if (null == Laya['Loader']['getRes'](h8s3u)) {
                u3sz = !0x1;
                break;
            }
        }
        u3sz ? n3zhsu() : Laya['loader']['load'](this['J1FQP5'], gokca_e['create'](this, n3zhsu));
    }, z7s['prototype']['closeServer'] = function () {
        this['m_server'] && this['m_server']['parent'] && (Laya['stage']['removeChild'](this['m_server']), this['m_server']['destroy'](!0x0), this['m_server'] = null);
    }, z7s['prototype']['preloadLoading'] = function () {
        this['m_isPrelodLoading'] || (this['m_isPrelodLoading'] = !0x0, Laya['loader']['load'](this['m_loadingRes'], gokca_e['create'](this, function () {
            ga_1ko['window']['loadLoadingRes'] = !0x0, ga_1ko['window']['J1QP5R'](), ga_1ko['window']['J1Q5RP']();
        })));
    }, z7s['prototype']['openLoading'] = function (l4j$6y, fg56yt) {
        void 0x0 === l4j$6y && (l4j$6y = 0x0), fg56yt = fg56yt || this['getCertificatePng'](), Laya['loader']['load'](this['m_loadingRes'], gokca_e['create'](this, function () {
            z7s['instance']['m_loading'] || (z7s['instance']['m_loading'] = new glgy6(l4j$6y, fg56yt)), z7s['instance']['m_loading']['parent'] || z7s['instance']['m_layer']['addChild'](z7s['instance']['m_loading']), z7s['instance']['H$$w']();
        }));
    }, z7s['prototype']['closeLoading'] = function () {
        this['m_loading'] && this['m_loading']['parent'] && (Laya['stage']['removeChild'](this['m_loading']), this['m_loading']['destroy'](!0x0), this['m_loading'] = null);
        for (var kco_ea = 0x0, dt5m = this['J1FQP5']; kco_ea < dt5m['length']; kco_ea++) {
            var _doce = dt5m[kco_ea];
            Laya['Loader']['clearCache'](z7s['instance'], _doce), Laya['Loader']['clearRes'](_doce, !0x0);
        }
        for (var mck_d = 0x0, ft65g = this['m_loadingRes']; mck_d < ft65g['length']; mck_d++) {
            _doce = ft65g[mck_d], (Laya['Loader']['clearCache'](z7s['instance'], _doce), Laya['Loader']['clearRes'](_doce, !0x0));
        }
        this['m_layer']['parent'] && this['m_layer']['parent']['removeChild'](this['m_layer']), this['removeNoise']();
    }, z7s['prototype']['J1FQ5'] = function () {
        this['m_loading'] && this['m_loading']['parent'] && z7s['instance']['m_loading']['showGetBtn']();
    }, z7s['prototype']['enterDefaultServer'] = function () {
        var d_cmp = ga_1ko['window']['J15Q']['selectedServer'];
        this['H$Kw'] || (this['H$Kw'] = !0x0, ga_1ko['window']['J15Q']['selectedServer'] = d_cmp, J1QRP5(0x0, d_cmp['server_id']));
    }, z7s['prototype']['sendRecord'] = function () {
        var m5p9td = '';
        m5p9td += 'newRegister=' + ga_1ko['window']['J15Q']['newRegister'], m5p9td += ', isPrelodServer=' + this['m_isPrelodServer'], m5p9td += ', SelectServerPanel=' + (null != z7s['instance']['m_server']), m5p9td += ', isPrelodLoading=' + this['m_isPrelodLoading'], m5p9td += ', LoadingPanel=' + (null != z7s['instance']['m_loading']), m5p9td += ', resMgrLoad=' + (ga_1ko['window']['resMgrLoad'] == z7s['instance']['J1F5Q']), m5p9td += ', imgMgrLoad=' + (ga_1ko['window']['imgMgrLoad'] == z7s['instance']['J1F5Q']), m5p9td += ', errUrls=' + z7s['instance']['H$kw'];
        for (var d95cmp = 0x0, il$4wj = this['J1FQP5']; d95cmp < il$4wj['length']; d95cmp++) {
            m5p9td += ',\x20' + (r8102 = il$4wj[d95cmp]) + '=' + (null != Laya['Loader']['getRes'](r8102));
        }
        for (var suh3zn = 0x0, r20hn = this['m_loadingRes']; suh3zn < r20hn['length']; suh3zn++) {
            var r8102;
            m5p9td += ',\x20' + (r8102 = r20hn[suh3zn]) + '=' + (null != Laya['Loader']['getRes'](r8102));
        }
        var od_ekc = ga_1ko['window']['J15Q']['selectedServer'];
        od_ekc && (m5p9td += ', server_status=' + od_ekc['status'], m5p9td += ', server_id=' + od_ekc['server_id'], m5p9td += ', server_name=' + od_ekc['server_name']);
        var d9m5pc = JSON['stringify']({
            'error': '初始界面超过10秒',
            'stack': m5p9td
        });
        console['error'](d9m5pc), this['H$pw'] && this['H$pw'] == m5p9td || (this['H$pw'] = m5p9td, J15RQ(d9m5pc));
    }, z7s['prototype']['H$Rw'] = function () {
        var mkd_ce = Laya['stage'],
            fg65y = Math['floor'](mkd_ce['width']),
            okc_ = Math['floor'](mkd_ce['height']);
        okc_ / fg65y < 1.7777778 ? (this['viewW'] = Math['floor'](fg65y / (okc_ / 0x500)), this['viewH'] = 0x500, this['viewS'] = okc_ / 0x500) : (this['viewW'] = 0x2d0, this['viewH'] = Math['floor'](okc_ / (fg65y / 0x2d0)), this['viewS'] = fg65y / 0x2d0);
        var j$6ly = Math['floor'](mkd_ce['width']),
            tf5p9g = Math['floor'](mkd_ce['height']);
        tf5p9g / j$6ly < 1.7777778 ? (this['viewW'] = Math['floor'](j$6ly / (tf5p9g / 0x500)), this['viewH'] = 0x500, this['viewS'] = tf5p9g / 0x500) : (this['viewW'] = 0x2d0, this['viewH'] = Math['floor'](tf5p9g / (j$6ly / 0x2d0)), this['viewS'] = j$6ly / 0x2d0), this['H$$w']();
    }, z7s['prototype']['H$$w'] = function () {
        this['m_layer'] && (this['m_layer']['size'](this['viewW'], this['viewH']), this['m_layer']['scale'](this['viewS'], this['viewS'], !0x0));
    }, z7s['prototype']['H$aw'] = function () {
        if (gw4y$l['isInputting'] && ga_1ko['onMobile']) {
            var flj6 = parseInt(gw4y$l['inputContainer']['style']['top']['replace']('px', '')),
                qraob = parseInt(gw4y$l['inputElement']['style']['height']['replace']('px', '')) * this['viewS'],
                o1bkq = ga_1ko['clientWidth'] / gockae['canvas']['width'];
            return 0x0 < (flj6 = ga_1ko['clientHeight'] - qraob * o1bkq - flj6) && (flj6 = 0x0), void (ga_1ko['container']['style']['top'] = flj6 + 'px');
        }
        ga_1ko['container']['style']['top'] = '0px';
        var keo_q = Math['floor'](ga_1ko['width']),
            eckd_m = Math['floor'](ga_1ko['height']);
        keo_q = keo_q + 0x1 & 0x7ffffffe, eckd_m = eckd_m + 0x1 & 0x7ffffffe;
        var sz7xu = Laya['stage'];
        0x3 == ENV ? (sz7xu['scaleMode'] = Laya['Stage']['SCALE_NOSCALE'], sz7xu['width'] = keo_q, sz7xu['height'] = eckd_m) : eckd_m < keo_q ? (sz7xu['scaleMode'] = Laya['Stage']['SCALE_NOSCALE'], sz7xu['width'] = keo_q, sz7xu['height'] = eckd_m) : (sz7xu['scaleMode'] = Laya['Stage']['SCALE_FIXED_WIDTH'], sz7xu['width'] = 0x348, sz7xu['height'] = Math['floor'](eckd_m / (keo_q / 0x348)) + 0x1 & 0x7ffffffe), this['H$Rw']();
    }, z7s['prototype']['J1F5Q'] = function (v4ij$w, _epcdm) {
        function lw4$j() {
            zush73['onload'] = null, zush73['onerror'] = null;
        }
        var zush73,
            dkm_c = v4ij$w;
        (zush73 = new ga_1ko['window']['Image']())['onload'] = function () {
            lw4$j(), _epcdm(dkm_c, 0xc8, zush73);
        }, zush73['onerror'] = function () {
            console['warn']('[warn] WX loadImage onerror:', dkm_c), z7s['instance']['H$kw'] += dkm_c + '|', lw4$j(), _epcdm(dkm_c, 0x194, null);
        };
        var ly$ = -0x1 == dkm_c['indexOf']('http') ? z7s['instance']['getURL'](dkm_c) : dkm_c;
        zush73['src'] = ly$, -0x1 == z7s['instance']['J1FQP5']['indexOf'](dkm_c) && -0x1 == z7s['instance']['m_loadingRes']['indexOf'](dkm_c) || Laya['Loader']['keepCache'](z7s['instance'], dkm_c);
    }, z7s['prototype']['H$wn'] = function (lji4, nhu83s) {
        return -0x1 != lji4['indexOf'](nhu83s, lji4['length'] - nhu83s['length']);
    }, z7s;
}();
!function (dmek_c) {
    var nuh38, m59cpd;
    nuh38 = dmek_c['H$c'] || (dmek_c['H$c'] = {}), m59cpd = function (lw4i$j) {
        function oqak1_() {
            var t9mp5d = lw4i$j['call'](this) || this;
            return t9mp5d['H$nn'] = '#72441d', t9mp5d['H$on'] = '#263d7d', t9mp5d['width'] = 0x112, t9mp5d['height'] = 0x3b, t9mp5d['H$cn'] = new Laya['Image'](), t9mp5d['addChild'](t9mp5d['H$cn']), t9mp5d['H$Fn'] = new Laya['Label'](), t9mp5d['H$Fn']['fontSize'] = 0x1e, t9mp5d['H$Fn']['color'] = t9mp5d['H$on'], t9mp5d['addChild'](t9mp5d['H$Fn']), t9mp5d['H$Fn']['centerX'] = 0x0, t9mp5d['H$Fn']['centerY'] = 0x0, t9mp5d;
        }
        return gusx37(oqak1_, lw4i$j), oqak1_['prototype']['initialize'] = function () {
            lw4i$j['prototype']['initialize']['call'](this), this['H$g'] = ga_1ko['window']['J15Q'], this['H$g']['loadingType'], this['addEvt']();
        }, Object['defineProperty'](oqak1_['prototype'], 'dataSource', {
            'set': function (w$i4v) {
                w$i4v && this['setData'](w$i4v);
            },
            'enumerable': !0x0,
            'configurable': !0x0
        }), oqak1_['prototype']['setData'] = function (tyg6fl) {
            this['H$bn'] = tyg6fl[0x0], this['H$dn'] = tyg6fl[0x1], this['H$Fn']['text'] = this['H$bn']['title'], this['H$Fn']['color'] = this['H$dn'] ? this['H$nn'] : this['H$on'], this['H$cn']['skin'] = this['H$dn'] ? 'wxlogin_atlas/btn_com_long1.png' : 'wxlogin_atlas/btn_com_long0.png';
        }, oqak1_['prototype']['destroy'] = function (obk1q) {
            void 0x0 === obk1q && (obk1q = !0x0), this['rmEvts'](), lw4i$j['prototype']['destroy']['call'](this, obk1q);
        }, oqak1_['prototype']['addEvt'] = function () {}, oqak1_['prototype']['rmEvts'] = function () {}, oqak1_;
    }(Laya['View']), nuh38['NoticeItem'] = m59cpd;
}(modules || (modules = {})), function (_dmcke) {
    var nu8s3h, kco_de;
    nu8s3h = _dmcke['H$c'] || (_dmcke['H$c'] = {}), kco_de = function ($wj) {
        function wji$v4() {
            var uh283n = $wj['call'](this) || this;
            return uh283n['H$nn'] = '#72441d', uh283n['H$on'] = '#263d7d', uh283n['width'] = 0x112, uh283n['height'] = 0x3b, uh283n['H$cn'] = new Laya['Image'](), uh283n['addChild'](uh283n['H$cn']), uh283n['H$Fn'] = new Laya['Label'](), uh283n['H$Fn']['fontSize'] = 0x1e, uh283n['H$Fn']['color'] = uh283n['H$on'], uh283n['addChild'](uh283n['H$Fn']), uh283n['H$Fn']['centerX'] = 0x0, uh283n['H$Fn']['centerY'] = 0x0, uh283n;
        }
        return gusx37(wji$v4, $wj), wji$v4['prototype']['initialize'] = function () {
            $wj['prototype']['initialize']['call'](this), this['H$g'] = ga_1ko['window']['J15Q'], this['H$g']['loadingType'], this['addEvt']();
        }, Object['defineProperty'](wji$v4['prototype'], 'dataSource', {
            'set': function (y65fgt) {
                y65fgt && this['setData'](y65fgt);
            },
            'enumerable': !0x0,
            'configurable': !0x0
        }), wji$v4['prototype']['setData'] = function (j4$iw) {
            this['H$rn'] = j4$iw[0x0], this['H$dn'] = j4$iw[0x1], this['H$Fn']['text'] = this['H$rn'], this['H$Fn']['color'] = this['H$dn'] ? this['H$nn'] : this['H$on'], this['H$cn']['skin'] = this['H$dn'] ? 'wxlogin_atlas/btn_com_long1.png' : 'wxlogin_atlas/btn_com_long0.png';
        }, wji$v4['prototype']['destroy'] = function (obqar) {
            void 0x0 === obqar && (obqar = !0x0), this['rmEvts'](), $wj['prototype']['destroy']['call'](this, obqar);
        }, wji$v4['prototype']['addEvt'] = function () {}, wji$v4['prototype']['rmEvts'] = function () {}, wji$v4;
    }(Laya['View']), nu8s3h['PrivacyItem'] = kco_de;
}(modules || (modules = {})), function (uhsn) {
    var v$4wi, ij4$w;
    v$4wi = uhsn['H$c'] || (uhsn['H$c'] = {}), ij4$w = function (oeak_q) {
        function jwi4() {
            var _aq1 = oeak_q['call'](this) || this;
            return _aq1['width'] = 0xc0, _aq1['height'] = 0x46, _aq1['H$cn'] = new Laya['Image'](), _aq1['addChild'](_aq1['H$cn']), _aq1['H$yn'] = new Laya['Label'](), _aq1['H$yn']['fontSize'] = 0x1c, _aq1['H$yn']['color'] = _aq1['H$v'], _aq1['addChild'](_aq1['H$yn']), _aq1['H$yn']['centerX'] = 0x0, _aq1['H$yn']['centerY'] = 0x0, _aq1['H$Gn'] = new Laya['Label'](), _aq1['H$Gn']['fontSize'] = 0x16, _aq1['H$Gn']['color'] = _aq1['H$v'], _aq1['addChild'](_aq1['H$Gn']), _aq1['H$Gn']['centerX'] = 0x0, _aq1['H$Gn']['y'] = 0xb, _aq1['H$Qn'] = new Laya['Label'](), _aq1['H$Qn']['fontSize'] = 0x1a, _aq1['H$Qn']['color'] = _aq1['H$v'], _aq1['addChild'](_aq1['H$Qn']), _aq1['H$Qn']['centerX'] = 0x0, _aq1['H$Qn']['y'] = 0x27, _aq1;
        }
        return gusx37(jwi4, oeak_q), jwi4['prototype']['initialize'] = function () {
            oeak_q['prototype']['initialize']['call'](this), this['H$g'] = ga_1ko['window']['J15Q'];
            var snh3u8 = this['H$g']['loadingType'];
            this['H$v'] = 0x1 == snh3u8 ? '#263d7d' : 0x2 == snh3u8 ? '#263d7d' : 0x3 == snh3u8 ? '#763042' : '#263d7d', this['addEvt']();
        }, Object['defineProperty'](jwi4['prototype'], 'dataSource', {
            'set': function (n8sh3) {
                n8sh3 && this['setData'](n8sh3);
            },
            'enumerable': !0x0,
            'configurable': !0x0
        }), jwi4['prototype']['setData'] = function (kd_ce) {
            this['H$bn'] = kd_ce;
            var mkec_d = this['H$bn']['id'],
                jiv$ = this['H$bn']['name'];
            if (this['H$yn']['visible'] = this['H$Gn']['visible'] = this['H$Qn']['visible'] = !0x1, -0x1 == mkec_d || -0x2 == mkec_d) this['H$yn']['visible'] = !0x0, this['H$yn']['text'] = jiv$;else {
                var ylg64f = jiv$,
                    oqbr = '1-10服',
                    b120qr = jiv$['match']('[0-9]{1,}');
                b120qr && null != b120qr['index'] && (ylg64f = jiv$['slice'](0x0, b120qr['index']), oqbr = jiv$['slice'](b120qr['index'])), this['H$Gn']['visible'] = this['H$Qn']['visible'] = !0x0, this['H$Gn']['text'] = ylg64f, this['H$Qn']['text'] = oqbr;
            }
            this['H$cn']['skin'] = kd_ce['select'] ? 'wxlogin_atlas/btn_xuanqu_anniuhuang.png' : 'wxlogin_atlas/btn_xuanqu_anniulan.png';
        }, jwi4['prototype']['destroy'] = function (h0) {
            void 0x0 === h0 && (h0 = !0x0), this['rmEvts'](), oeak_q['prototype']['destroy']['call'](this, h0);
        }, jwi4['prototype']['addEvt'] = function () {
            this['on'](Laya['Event']['MOUSE_UP'], this, this['clkHdler']);
        }, jwi4['prototype']['rmEvts'] = function () {
            this['off'](Laya['Event']['MOUSE_UP'], this, this['clkHdler']);
        }, jwi4['prototype']['clkHdler'] = function () {
            this['H$bn'] && this['H$bn']['callBack'] && this['H$bn']['callBack'](this['H$bn']['index']);
        }, jwi4;
    }(Laya['View']), v$4wi['SelectLeftListItem'] = ij4$w;
}(modules || (modules = {})), function (pt9d) {
    var qa_ko, y4wl;
    qa_ko = pt9d['H$c'] || (pt9d['H$c'] = {}), y4wl = function (r0qab1) {
        function t9pm5d() {
            var wj4vi = r0qab1['call'](this) || this;
            return wj4vi['width'] = 0x166, wj4vi['height'] = 0x46, wj4vi['H$cn'] = new Laya['Image']('wxlogin_atlas/btn_xuanqu_quanniu.png'), wj4vi['addChild'](wj4vi['H$cn']), wj4vi['H$cn']['graphics']['drawRect'](0x0, 0x0, wj4vi['width'], wj4vi['height'], '#00sasd'), wj4vi['H$xn'] = new Laya['Image'](), wj4vi['H$xn']['centerY'] = 0x0, wj4vi['H$xn']['x'] = 0x7, wj4vi['addChild'](wj4vi['H$xn']), wj4vi['H$yn'] = new Laya['Label'](), wj4vi['H$yn']['fontSize'] = 0x18, wj4vi['H$yn']['color'] = wj4vi['H$v'], wj4vi['H$yn']['x'] = 0x38, wj4vi['H$yn']['centerY'] = 0x0, wj4vi['addChild'](wj4vi['H$yn']), wj4vi['H$Pn'] = new Laya['Label'](), wj4vi['H$Pn']['fontSize'] = 0x18, wj4vi['H$Pn']['color'] = wj4vi['H$v'], wj4vi['H$Pn']['x'] = 0xf6, wj4vi['H$Pn']['centerY'] = 0x0, wj4vi['addChild'](wj4vi['H$Pn']), wj4vi['H$Cn'] = new Laya['Image'](), wj4vi['H$Cn']['top'] = 0x0, wj4vi['H$Cn']['right'] = 0x0, wj4vi['addChild'](wj4vi['H$Cn']), wj4vi['H$fn'] = new Laya['Label'](), wj4vi['H$fn']['fontSize'] = 0x14, wj4vi['H$fn']['color'] = '#ffffff', wj4vi['H$fn']['x'] = 0xe1, wj4vi['H$fn']['y'] = 0x2e, wj4vi['addChild'](wj4vi['H$fn']), wj4vi;
        }
        return gusx37(t9pm5d, r0qab1), t9pm5d['prototype']['initialize'] = function () {
            r0qab1['prototype']['initialize']['call'](this), this['H$g'] = ga_1ko['window']['J15Q'];
            var a_ckeo = this['H$g']['loadingType'];
            this['H$v'] = 0x1 == a_ckeo ? '#34267d' : 0x2 == a_ckeo ? '#34267d' : 0x3 == a_ckeo ? '#763042' : '#34267d', this['addEvt']();
        }, Object['defineProperty'](t9pm5d['prototype'], 'dataSource', {
            'set': function ($wji4l) {
                $wji4l && this['setData']($wji4l);
            },
            'enumerable': !0x0,
            'configurable': !0x0
        }), t9pm5d['prototype']['setData'] = function (fgy5t6) {
            this['H$bn'] = fgy5t6;
            var un23h = this['H$bn']['status'],
                jly$ = this['H$bn']['server_name'];
            this['H$xn']['skin'] = qa_ko['CommonFunc']['getStatusSrc'](this['H$bn']), this['H$yn']['color'] = qa_ko['CommonFunc']['getStatusTxtColor'](un23h, this['H$v']), this['H$yn']['text'] = qa_ko['CommonFunc']['getPreAddStr']() + jly$, this['H$Pn']['text'] = qa_ko['CommonFunc']['getStatusAddStr2'](this['H$bn']);
            var kq_1ao = qa_ko['CommonFunc']['isRecommend'](this['H$bn']['is_recommend']);
            (this['H$Cn']['visible'] = kq_1ao) && (this['H$Cn']['skin'] = 'wxlogin_atlas/image_xuanqu_ztjb0.png'), this['H$fn']['text'] = -0x1 == this['H$bn']['status'] && this['H$bn']['maintain_time'] ? this['H$bn']['maintain_time'] : '';
        }, t9pm5d['prototype']['destroy'] = function (u7xzs) {
            void 0x0 === u7xzs && (u7xzs = !0x0), this['rmEvts'](), r0qab1['prototype']['destroy']['call'](this, u7xzs);
        }, t9pm5d['prototype']['addEvt'] = function () {
            this['on'](Laya['Event']['MOUSE_UP'], this, this['clkHdler']);
        }, t9pm5d['prototype']['rmEvts'] = function () {
            this['off'](Laya['Event']['MOUSE_UP'], this, this['clkHdler']);
        }, t9pm5d['prototype']['clkHdler'] = function () {
            this['H$bn'] && this['H$bn']['callBack'] && this['H$bn']['callBack'](this['H$bn']);
        }, t9pm5d;
    }(Laya['View']), qa_ko['SelectRightListItem'] = y4wl;
}(modules || (modules = {})), function (oqa1) {
    var lt, f64g, qk_1oa;
    lt = oqa1['H$Aw'] || (oqa1['H$Aw'] = {}), f64g = Laya['BaseMaterial'], qk_1oa = function (l64j$) {
        function ytf6gl() {
            var bar01 = l64j$['call'](this) || this;
            return bar01['setShaderName']('noise_shader_1'), bar01['blend'] = f64g['BLEND_ENABLE_ALL'], bar01['blendEquation'] = f64g['BLENDEQUATION_ADD'], bar01['srcBlend'] = f64g['BLENDPARAM_SRC_ALPHA'], bar01['dstBlend'] = f64g['BLENDPARAM_ONE'], bar01['renderQueue'] = f64g['RENDERQUEUE_TRANSPARENT'], bar01['depthWrite'] = !0x1, bar01['depthTest'] = f64g['DEPTHTEST_ALWAYS'], bar01['completeCreate'](), bar01;
        }
        return gusx37(ytf6gl, l64j$), Object['defineProperty'](ytf6gl['prototype'], 'randomSeed', {
            'get': function () {
                return this['_getNumber'](0x17);
            },
            'set': function (d9c) {
                this['_setNumber'](0x17, d9c);
            },
            'enumerable': !0x0,
            'configurable': !0x0
        }), Object['defineProperty'](ytf6gl['prototype'], 'grainSizeX', {
            'get': function () {
                return this['_getNumber'](0x18);
            },
            'set': function (mgp59) {
                this['_setNumber'](0x18, mgp59);
            },
            'enumerable': !0x0,
            'configurable': !0x0
        }), Object['defineProperty'](ytf6gl['prototype'], 'grainSizeY', {
            'get': function () {
                return this['_getNumber'](0x19);
            },
            'set': function (r20nh8) {
                this['_setNumber'](0x19, r20nh8);
            },
            'enumerable': !0x0,
            'configurable': !0x0
        }), Object['defineProperty'](ytf6gl['prototype'], 'intensity', {
            'get': function () {
                return this['_getNumber'](0x1a);
            },
            'set': function (kodc_e) {
                this['_setNumber'](0x1a, kodc_e);
            },
            'enumerable': !0x0,
            'configurable': !0x0
        }), ytf6gl['init'] = function () {
            Laya['ShaderCompile3D']['add'](Laya['Shader3D']['nameKey']['add']('noise_shader_1'), 'attribute vec4 a_Position;\nattribute vec2 a_Texcoord0; \nuniform mat4 u_MvpMatrix;\nvarying vec2 v_Texcoord;\nvoid main(){\n  gl_Position = u_MvpMatrix * a_Position;\n  v_Texcoord = a_Texcoord0;\n}', '#ifdef HIGHPRECISION\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nuniform float u_randomSeed;\nuniform float u_grainSizeX;\nuniform float u_grainSizeY;\nuniform float u_intensity;\nvarying vec2 v_Texcoord;\nvoid main(){\n  vec2 magicVec2 = vec2(0.0041,0.0111);\n  float magicNum = 2747.0;\n  float uvX = floor(v_Texcoord.x/u_grainSizeX)*u_grainSizeX;\n  float uvY = floor(v_Texcoord.y/u_grainSizeY)*u_grainSizeY;\n  float uvValue = uvX + uvY;\n  float seed1 = fract(uvValue*u_randomSeed*magicNum*magicVec2.x + magicVec2.y);\n  float seed2 = fract(seed1*magicNum*magicVec2.x + magicVec2.y);\n  float seed3 = fract(seed2*magicNum*magicVec2.x + magicVec2.y);\n  float seedr = fract(seed3*magicNum*magicVec2.x + magicVec2.y);\n  float seedg = fract(seedr*magicNum*magicVec2.x + magicVec2.y);\n  float seedb = fract(seedg*magicNum*magicVec2.x + magicVec2.y);\n  gl_FragColor = vec4(seedr,seedg,seedb,u_intensity);\n}', {
                'a_Position': Laya['VertexElementUsage']['POSITION0'],
                'a_Texcoord0': Laya['VertexElementUsage']['TEXTURECOORDINATE0']
            }, {
                'u_MvpMatrix': [Laya['Sprite3D']['MVPMATRIX'], Laya['Shader3D']['PERIOD_SPRITE']],
                'u_randomSeed': [0x17, Laya['Shader3D']['PERIOD_MATERIAL']],
                'u_grainSizeX': [0x18, Laya['Shader3D']['PERIOD_MATERIAL']],
                'u_grainSizeY': [0x19, Laya['Shader3D']['PERIOD_MATERIAL']],
                'u_intensity': [0x1a, Laya['Shader3D']['PERIOD_MATERIAL']]
            });
        }, ytf6gl;
    }(Laya['BaseMaterial']), lt['H$ew'] = qk_1oa;
}(modules || (modules = {})), window['ServerLoading'] = gbr1oqa;