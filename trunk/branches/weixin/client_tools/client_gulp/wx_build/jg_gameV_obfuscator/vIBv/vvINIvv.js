'use strict';

var Q = wx.$v;
var vvwkl3r,
    vtwrk = this && this[Q[3369]] || function () {
    var g8jxqs = Object[Q[3370]] || { '__proto__': [] } instanceof Array && function (lrwv3k, y3h$l) {
        lrwv3k[Q[3371]] = y3h$l;
    } || function (_6boz9, tr3kvw) {
        for (var ozb_5 in tr3kvw) tr3kvw[Q[501]](ozb_5) && (_6boz9[ozb_5] = tr3kvw[ozb_5]);
    };
    return function (bz_5, obz_5f) {
        function y$hlm3() {
            this[Q[505]] = bz_5;
        }
        g8jxqs(bz_5, obz_5f), bz_5[Q[496]] = null === obz_5f ? Object[Q[536]](obz_5f) : (y$hlm3[Q[496]] = obz_5f[Q[496]], new y$hlm3());
    };
}(),
    vfo5a7e = laya['ui']['View'],
    vwlr3k = laya['ui'][Q[2162]];
!function (rvt3k) {
    var sxq8g = function (zb9p) {
        function f75_oz() {
            return zb9p[Q[498]](this) || this;
        }
        return vtwrk(f75_oz, zb9p), f75_oz[Q[496]][Q[2143]] = function () {
            zb9p[Q[496]][Q[2143]][Q[498]](this), this['createView'](rvt3k['Vn']['uiView']);
        }, f75_oz['uiView'] = {
            'type': 'View',
            'props': {
                'width': 0x2d0,
                'name': 'P_WXAuthorizationViewUI',
                'height': 0x500
            },
            'child': [{
                'type': Q[1190],
                'props': {
                    'width': 0x2d0,
                    'var': Q[3372],
                    'skin': Q[3373],
                    'name': 'bg',
                    'height': 0x500,
                    'centerY': 0x0,
                    'centerX': 0x0
                }
            }, {
                'type': Q[2233],
                'props': {
                    'y': 0x0,
                    'width': 0x2d0,
                    'right': 0x0,
                    'height': 0x500
                },
                'child': [{
                    'type': Q[1190],
                    'props': {
                        'width': 0x2d0,
                        'var': Q[3374],
                        'top': -0x8b,
                        'skin': Q[3375],
                        'height': 0x8b,
                        'centerX': 0x0,
                        'anchorY': 0x1
                    }
                }, {
                    'type': Q[1190],
                    'props': {
                        'width': 0x2d0,
                        'var': Q[3376],
                        'top': 0x500,
                        'skin': Q[3377],
                        'height': 0x8b,
                        'centerX': 0x0
                    }
                }, {
                    'type': Q[1190],
                    'props': {
                        'x': -0xdc,
                        'width': 0xdc,
                        'var': Q[3378],
                        'skin': Q[3379],
                        'left': -0xdc,
                        'height': 0x500,
                        'centerY': 0x0
                    }
                }, {
                    'type': Q[1190],
                    'props': {
                        'width': 0xdc,
                        'var': Q[3380],
                        'skin': Q[3381],
                        'left': 0x2d0,
                        'height': 0x500,
                        'centerY': 0x0
                    }
                }]
            }]
        }, f75_oz;
    }(vfo5a7e);
    rvt3k['Vn'] = sxq8g;
}(vvwkl3r || (vvwkl3r = {})), function (kwv3r) {
    var yl3$m = function (hvl) {
        function i1cyu$() {
            return hvl[Q[498]](this) || this;
        }
        return vtwrk(i1cyu$, hvl), i1cyu$[Q[496]][Q[2143]] = function () {
            hvl[Q[496]][Q[2143]][Q[498]](this), this['createView'](kwv3r['Va']['uiView']);
        }, i1cyu$['uiView'] = {
            'type': 'View',
            'props': {
                'width': 0x2d0,
                'name': 'P_LoadingView',
                'height': 0x500
            },
            'child': [{
                'type': Q[1190],
                'props': {
                    'width': 0x2d0,
                    'var': Q[3372],
                    'name': 'bg',
                    'height': 0x500,
                    'centerY': 0x0,
                    'centerX': 0x0
                }
            }, {
                'type': Q[2233],
                'props': {
                    'y': 0x0,
                    'x': 0x0,
                    'width': 0x2d0,
                    'height': 0x500
                },
                'child': [{
                    'type': Q[1190],
                    'props': {
                        'var': Q[3374],
                        'centerX': 0x0,
                        'bottom': 0x500,
                        'anchorY': 0x1
                    }
                }, {
                    'type': Q[1190],
                    'props': {
                        'var': Q[3376],
                        'top': 0x500,
                        'centerX': 0x0
                    }
                }, {
                    'type': Q[1190],
                    'props': {
                        'var': Q[3378],
                        'right': 0x2d0,
                        'pivotX': 0x1,
                        'centerY': 0x0
                    }
                }, {
                    'type': Q[1190],
                    'props': {
                        'var': Q[3380],
                        'left': 0x2d0,
                        'centerY': 0x0
                    }
                }]
            }, {
                'type': Q[1190],
                'props': {
                    'var': Q[3382],
                    'skin': Q[3383],
                    'centerX': 0x0,
                    'bottom': 0xa
                }
            }, {
                'type': Q[2233],
                'props': {
                    'y': 0x3c3,
                    'x': 0x0,
                    'width': 0x2d0,
                    'var': Q[3384],
                    'name': Q[3384],
                    'height': 0x82
                },
                'child': [{
                    'type': Q[1190],
                    'props': {
                        'y': 0x2e,
                        'x': 0x3e,
                        'width': 0x254,
                        'var': Q[3385],
                        'skin': Q[3386],
                        'height': 0x1b,
                        'centerX': 0x0
                    }
                }, {
                    'type': Q[1190],
                    'props': {
                        'y': 0x31,
                        'x': 0x40,
                        'width': 0x24e,
                        'var': Q[3387],
                        'skin': Q[3388],
                        'height': 0x15
                    }
                }, {
                    'type': Q[1190],
                    'props': {
                        'y': 0x37,
                        'x': 0x1fb,
                        'width': 0xd0,
                        'var': Q[3389],
                        'skin': Q[3390],
                        'height': 0xb
                    }
                }, {
                    'type': Q[1190],
                    'props': {
                        'y': 0x6,
                        'x': 0x274,
                        'width': 0x27,
                        'var': Q[3391],
                        'skin': Q[3392],
                        'height': 0x74
                    }
                }, {
                    'type': Q[2234],
                    'props': {
                        'y': 0x30,
                        'x': 0x125,
                        'width': 0x86,
                        'var': Q[3393],
                        'valign': Q[1378],
                        'text': Q[3394],
                        'strokeColor': Q[3395],
                        'stroke': 0x3,
                        'height': 0x18,
                        'fontSize': 0x18,
                        'color': Q[3396],
                        'centerX': 0x0,
                        'bold': !0x1,
                        'align': Q[640]
                    }
                }]
            }, {
                'type': Q[2233],
                'props': {
                    'y': 0x429,
                    'x': 0x0,
                    'width': 0x2d0,
                    'var': Q[3397],
                    'name': Q[3397],
                    'height': 0x11
                },
                'child': [{
                    'type': Q[1190],
                    'props': {
                        'y': 0x0,
                        'x': 0x133,
                        'var': Q[3398],
                        'skin': Q[3399],
                        'centerX': -0x2d
                    }
                }, {
                    'type': Q[1190],
                    'props': {
                        'y': 0x0,
                        'x': 0x151,
                        'var': Q[3400],
                        'skin': Q[3401],
                        'centerX': -0xf
                    }
                }, {
                    'type': Q[1190],
                    'props': {
                        'y': 0x0,
                        'x': 0x16f,
                        'var': Q[3402],
                        'skin': Q[3403],
                        'centerX': 0xf
                    }
                }, {
                    'type': Q[1190],
                    'props': {
                        'y': 0x0,
                        'x': 0x18d,
                        'var': Q[3404],
                        'skin': Q[3403],
                        'centerX': 0x2d
                    }
                }]
            }, {
                'type': Q[3405],
                'props': {
                    'y': 0x316,
                    'x': 0x37,
                    'visible': !0x1,
                    'var': Q[3406],
                    'stateNum': 0x1,
                    'skin': Q[3407],
                    'name': Q[3406],
                    'labelSize': 0x1e,
                    'labelFont': Q[3408],
                    'labelColors': Q[3409]
                },
                'child': [{
                    'type': Q[2234],
                    'props': {
                        'y': 0x9b,
                        'x': 0x92,
                        'width': 0x143,
                        'var': Q[3410],
                        'text': Q[3411],
                        'name': Q[3410],
                        'height': 0x1e,
                        'fontSize': 0x1e,
                        'color': Q[3412],
                        'align': Q[640]
                    }
                }]
            }, {
                'type': Q[2234],
                'props': {
                    'y': 0x453,
                    'width': 0x1f4,
                    'var': Q[3413],
                    'valign': Q[1378],
                    'text': Q[3414],
                    'height': 0x1a,
                    'fontSize': 0x1a,
                    'color': Q[3415],
                    'centerX': 0x0,
                    'bold': !0x1,
                    'align': Q[640]
                }
            }, {
                'type': Q[2234],
                'props': {
                    'y': 0xa,
                    'x': 0xa,
                    'width': 0x156,
                    'var': Q[3416],
                    'valign': Q[1378],
                    'top': 0x14,
                    'text': Q[3417],
                    'strokeColor': Q[3418],
                    'stroke': 0x2,
                    'right': 0x14,
                    'height': 0x20,
                    'fontSize': 0x18,
                    'color': Q[3419],
                    'bold': !0x1,
                    'align': Q[107]
                }
            }]
        }, i1cyu$;
    }(vfo5a7e);
    kwv3r['Va'] = yl3$m;
}(vvwkl3r || (vvwkl3r = {})), function (g8qjx) {
    var r3tvk = function (sjqg8) {
        function kxjrt() {
            return sjqg8[Q[498]](this) || this;
        }
        return vtwrk(kxjrt, sjqg8), kxjrt[Q[496]][Q[2143]] = function () {
            vfo5a7e[Q[2283]](Q[2098], laya[Q[2096]][Q[2097]][Q[2098]]), vfo5a7e[Q[2283]](Q[1610], laya[Q[757]][Q[1610]]), sjqg8[Q[496]][Q[2143]][Q[498]](this), this['createView'](g8qjx['VU']['uiView']);
        }, kxjrt['uiView'] = {
            'type': 'View',
            'props': {
                'width': 0x2d0,
                'name': 'P_SelectServerViewUI',
                'height': 0x500
            },
            'child': [{
                'type': Q[1190],
                'props': {
                    'width': 0x2d0,
                    'var': Q[3372],
                    'skin': Q[3373],
                    'name': 'bg',
                    'height': 0x500,
                    'centerY': 0x0,
                    'centerX': 0x0
                }
            }, {
                'type': Q[2233],
                'props': {
                    'y': 0x0,
                    'x': 0x0,
                    'width': 0x2d0,
                    'height': 0x500
                },
                'child': [{
                    'type': Q[1190],
                    'props': {
                        'width': 0x2d0,
                        'var': Q[3374],
                        'skin': Q[3375],
                        'bottom': 0x4ff
                    }
                }, {
                    'type': Q[1190],
                    'props': {
                        'width': 0x2d0,
                        'var': Q[3376],
                        'top': 0x4ff,
                        'skin': Q[3377]
                    }
                }, {
                    'type': Q[1190],
                    'props': {
                        'var': Q[3378],
                        'skin': Q[3379],
                        'right': 0x2cf,
                        'height': 0x500
                    }
                }, {
                    'type': Q[1190],
                    'props': {
                        'var': Q[3380],
                        'skin': Q[3381],
                        'left': 0x2cf,
                        'height': 0x500
                    }
                }]
            }, {
                'type': Q[1190],
                'props': {
                    'y': 0x34d,
                    'var': Q[3420],
                    'skin': Q[3421],
                    'centerX': 0x0
                }
            }, {
                'type': Q[1190],
                'props': {
                    'y': 0x44e,
                    'var': Q[3422],
                    'skin': Q[3423],
                    'name': Q[3422],
                    'centerX': 0x0
                }
            }, {
                'type': Q[1190],
                'props': {
                    'y': 0x39f,
                    'x': 0x9f,
                    'var': Q[3424],
                    'skin': Q[3425]
                }
            }, {
                'type': Q[1190],
                'props': {
                    'var': Q[3382],
                    'skin': Q[3383],
                    'centerX': 0x0,
                    'bottom': 0x1e
                }
            }, {
                'type': Q[1190],
                'props': {
                    'y': 0x3f7,
                    'var': Q[3426],
                    'stateNum': 0x1,
                    'skin': Q[3427],
                    'name': Q[3426],
                    'centerX': 0x0
                }
            }, {
                'type': Q[1190],
                'props': {
                    'x': 0xc4,
                    'visible': !0x1,
                    'var': Q[3428],
                    'skin': Q[3429],
                    'bottom': 0x4
                }
            }, {
                'type': Q[2234],
                'props': {
                    'y': 0x280,
                    'x': 0x0,
                    'width': 0x2d0,
                    'var': Q[3430],
                    'valign': Q[1378],
                    'text': Q[3431],
                    'strokeColor': Q[1269],
                    'stroke': 0x2,
                    'height': 0x20,
                    'fontSize': 0x20,
                    'color': Q[2110],
                    'bold': !0x1,
                    'align': Q[640]
                }
            }, {
                'type': Q[2234],
                'props': {
                    'y': 0x3a4,
                    'x': 0x209,
                    'var': Q[3432],
                    'valign': Q[1378],
                    'text': Q[3433],
                    'height': 0x20,
                    'fontSize': 0x1e,
                    'color': Q[3434],
                    'bold': !0x1,
                    'align': Q[640]
                }
            }, {
                'type': Q[2234],
                'props': {
                    'y': 0x3a4,
                    'width': 0x156,
                    'var': Q[3435],
                    'valign': Q[1378],
                    'text': Q[3436],
                    'height': 0x20,
                    'fontSize': 0x1e,
                    'color': Q[3434],
                    'centerX': 0x0,
                    'bold': !0x1,
                    'align': Q[640]
                }
            }, {
                'type': Q[2234],
                'props': {
                    'width': 0x156,
                    'var': Q[3416],
                    'valign': Q[1378],
                    'top': 0x14,
                    'text': Q[3417],
                    'strokeColor': Q[3418],
                    'stroke': 0x2,
                    'right': 0x14,
                    'height': 0x20,
                    'fontSize': 0x18,
                    'color': Q[3419],
                    'bold': !0x1,
                    'align': Q[107]
                }
            }, {
                'type': Q[2098],
                'props': {
                    'y': 0x4e7,
                    'x': 0x100,
                    'visible': !0x1,
                    'var': Q[3437],
                    'height': 0x10
                }
            }, {
                'type': Q[1190],
                'props': {
                    'y': 0x7f,
                    'x': 593.5,
                    'var': Q[3438],
                    'skin': Q[3439]
                }
            }, {
                'type': Q[1190],
                'props': {
                    'y': 0x101,
                    'x': 0x252,
                    'visible': !0x1,
                    'var': Q[3440],
                    'skin': Q[3441],
                    'name': Q[3440]
                }
            }, {
                'type': Q[1190],
                'props': {
                    'visible': !0x1,
                    'var': Q[3442],
                    'top': 0x1,
                    'scaleY': 0.5,
                    'scaleX': 0.5,
                    'name': Q[3440],
                    'left': 0x1
                }
            }, {
                'type': Q[1190],
                'props': {
                    'y': 0x47,
                    'x': -0x2,
                    'visible': !0x1,
                    'var': Q[3443],
                    'skin': Q[3444],
                    'centerY': 0x0,
                    'centerX': 0x0
                },
                'child': [{
                    'type': Q[1190],
                    'props': {
                        'y': 36.5,
                        'x': 0x268,
                        'var': Q[3445],
                        'skin': Q[3446]
                    }
                }, {
                    'type': Q[2234],
                    'props': {
                        'y': 0x48,
                        'x': 0xd8,
                        'width': 0xea,
                        'var': Q[3447],
                        'valign': Q[1378],
                        'text': Q[3448],
                        'height': 0x23,
                        'fontSize': 0x1e,
                        'color': Q[1269],
                        'bold': !0x1,
                        'align': Q[640]
                    }
                }, {
                    'type': Q[1610],
                    'props': {
                        'y': 0x8e,
                        'x': 0x3d,
                        'wordWrap': !0x0,
                        'width': 0x221,
                        'var': Q[3449],
                        'valign': Q[104],
                        'overflow': Q[1630],
                        'mouseEnabled': !0x0,
                        'leading': 0x4,
                        'height': 0x366,
                        'fontSize': 0x1a,
                        'color': Q[3450]
                    }
                }]
            }, {
                'type': Q[1190],
                'props': {
                    'visible': !0x1,
                    'var': Q[3451],
                    'skin': Q[3444],
                    'centerY': 0x0,
                    'centerX': 0x0
                },
                'child': [{
                    'type': Q[1190],
                    'props': {
                        'y': 36.5,
                        'x': 0x268,
                        'var': Q[3452],
                        'skin': Q[3446]
                    }
                }, {
                    'type': Q[3405],
                    'props': {
                        'y': 0x388,
                        'x': 0xbe,
                        'var': Q[3453],
                        'stateNum': 0x1,
                        'skin': Q[3454],
                        'labelSize': 0x1e,
                        'labelColors': Q[3455],
                        'label': Q[3456]
                    }
                }, {
                    'type': Q[2233],
                    'props': {
                        'y': 0x388,
                        'x': 0x22,
                        'width': 0x254,
                        'var': Q[3457],
                        'height': 0x3b
                    }
                }, {
                    'type': Q[2234],
                    'props': {
                        'y': 0x48,
                        'x': 0xd8,
                        'width': 0xea,
                        'var': Q[3458],
                        'valign': Q[1378],
                        'text': Q[3448],
                        'height': 0x23,
                        'fontSize': 0x1e,
                        'color': Q[1269],
                        'bold': !0x1,
                        'align': Q[640]
                    }
                }, {
                    'type': Q[3459],
                    'props': {
                        'y': 0x8e,
                        'x': 0x3d,
                        'width': 0x221,
                        'var': Q[3460],
                        'height': 0x2dd
                    },
                    'child': [{
                        'type': Q[2098],
                        'props': {
                            'y': 0x0,
                            'x': 0x0,
                            'width': 0x221,
                            'var': Q[3461],
                            'height': 0x2dd
                        }
                    }]
                }]
            }, {
                'type': Q[1190],
                'props': {
                    'visible': !0x1,
                    'var': Q[3462],
                    'skin': Q[3444],
                    'name': Q[3462],
                    'centerY': 0x0,
                    'centerX': 0x0
                },
                'child': [{
                    'type': Q[1190],
                    'props': {
                        'y': 36.5,
                        'x': 0x268,
                        'var': Q[3463],
                        'skin': Q[3446]
                    }
                }, {
                    'type': Q[3405],
                    'props': {
                        'y': 0x388,
                        'x': 0xbe,
                        'var': Q[3464],
                        'stateNum': 0x1,
                        'skin': Q[3454],
                        'labelSize': 0x1e,
                        'labelColors': Q[3455],
                        'label': Q[3456]
                    }
                }, {
                    'type': Q[2233],
                    'props': {
                        'y': 0x388,
                        'x': 0x22,
                        'width': 0x254,
                        'var': Q[3465],
                        'height': 0x3b
                    }
                }, {
                    'type': Q[2234],
                    'props': {
                        'y': 0x48,
                        'x': 0xd8,
                        'width': 0xea,
                        'var': Q[3466],
                        'valign': Q[1378],
                        'text': Q[3448],
                        'height': 0x23,
                        'fontSize': 0x1e,
                        'color': Q[1269],
                        'bold': !0x1,
                        'align': Q[640]
                    }
                }, {
                    'type': Q[3459],
                    'props': {
                        'y': 0x8e,
                        'x': 0x3d,
                        'width': 0x221,
                        'var': Q[3467],
                        'height': 0x2dd
                    },
                    'child': [{
                        'type': Q[2098],
                        'props': {
                            'y': 0x0,
                            'x': 0x0,
                            'width': 0x221,
                            'var': Q[3468],
                            'height': 0x2dd
                        }
                    }]
                }]
            }, {
                'type': Q[1190],
                'props': {
                    'visible': !0x1,
                    'var': Q[3469],
                    'skin': Q[3470],
                    'centerY': 0x0,
                    'centerX': 0x0
                },
                'child': [{
                    'type': Q[2233],
                    'props': {
                        'y': 0x75,
                        'x': 0x3d,
                        'width': 0xc8,
                        'var': Q[3471],
                        'height': 0x389
                    }
                }, {
                    'type': Q[2233],
                    'props': {
                        'y': 0x75,
                        'x': 0x125,
                        'width': 0x166,
                        'var': Q[3472],
                        'height': 0x389
                    }
                }, {
                    'type': Q[1190],
                    'props': {
                        'y': 0xd,
                        'x': 0x282,
                        'var': Q[3473],
                        'skin': Q[3474]
                    }
                }]
            }, {
                'type': Q[2233],
                'props': {
                    'width': 0x2d0,
                    'visible': !0x1,
                    'var': Q[3475],
                    'mouseThrough': !0x1,
                    'height': 0x500,
                    'centerY': 0x0,
                    'centerX': 0x0
                },
                'child': [{
                    'type': Q[1190],
                    'props': {
                        'x': 0x21,
                        'width': 0x28f,
                        'skin': Q[3444],
                        'height': 0x3e2,
                        'centerY': 0x0,
                        'centerX': 0x0
                    }
                }, {
                    'type': Q[3405],
                    'props': {
                        'width': 0x112,
                        'var': Q[3476],
                        'stateNum': 0x1,
                        'skin': Q[3454],
                        'labelSize': 0x1e,
                        'labelColors': Q[3455],
                        'label': Q[3477],
                        'height': 0x3b,
                        'centerY': 0x1b4,
                        'centerX': 0x0
                    }
                }, {
                    'type': Q[2234],
                    'props': {
                        'width': 0xea,
                        'var': Q[3478],
                        'valign': Q[1378],
                        'text': Q[3448],
                        'fontSize': 0x1e,
                        'color': Q[1269],
                        'centerY': -0x198,
                        'centerX': 0x0,
                        'bold': !0x1,
                        'align': Q[640]
                    }
                }, {
                    'type': Q[3459],
                    'props': {
                        'x': 0x5e,
                        'width': 0x221,
                        'var': Q[3479],
                        'height': 0x2dd,
                        'centerY': 0xa
                    },
                    'child': [{
                        'type': Q[2098],
                        'props': {
                            'y': 0x0,
                            'x': 0x0,
                            'width': 0x221,
                            'var': Q[3480],
                            'height': 0x2dd
                        }
                    }]
                }, {
                    'type': Q[1190],
                    'props': {
                        'x': 0x254,
                        'visible': !0x1,
                        'var': Q[3481],
                        'skin': Q[3474],
                        'name': Q[3481],
                        'centerY': -0x192
                    }
                }]
            }]
        }, kxjrt;
    }(vfo5a7e);
    g8qjx['VU'] = r3tvk;
}(vvwkl3r || (vvwkl3r = {})), function (bfz5o) {
    var d0pu2n, e57fo_;
    d0pu2n = bfz5o['Vx'] || (bfz5o['Vx'] = {}), e57fo_ = function (_of5zb) {
        function d0n2ui() {
            return _of5zb[Q[498]](this) || this;
        }
        return vtwrk(d0n2ui, _of5zb), d0n2ui[Q[496]][Q[2144]] = function () {
            _of5zb[Q[496]][Q[2144]][Q[498]](this), this[Q[2118]] = 0x0, this[Q[2119]] = 0x0, this[Q[3482]](), this[Q[2165]]();
        }, d0n2ui[Q[496]][Q[3482]] = function () {
            this['on'](Laya[Q[1763]][Q[795]], this, this['VD']);
        }, d0n2ui[Q[496]][Q[3483]] = function () {
            this[Q[596]](Laya[Q[1763]][Q[795]], this, this['VD']);
        }, d0n2ui[Q[496]][Q[2165]] = function () {
            this['Vp'] = Date[Q[144]](), vxkrqj[Q[37]]['_vUJVPH'](), vxkrqj[Q[37]][Q[3484]]();
        }, d0n2ui[Q[496]][Q[637]] = function (i012n) {
            void 0x0 === i012n && (i012n = !0x0), this[Q[3483]](), _of5zb[Q[496]][Q[637]][Q[498]](this, i012n);
        }, d0n2ui[Q[496]]['VD'] = function () {
            if (0x2710 < Date[Q[144]]() - this['Vp']) {
                this['Vp'] -= 0x3e8;
                var khwl3v = vjtxg8q[Q[529]][Q[16]][Q[23]];
                khwl3v[Q[24]] && d0pu2n[Q[3485]][Q[3486]](khwl3v) && (vxkrqj[Q[37]][Q[3487]](), vxkrqj[Q[37]][Q[3488]]());
            }
        }, d0n2ui;
    }(vvwkl3r['Vn']), d0pu2n[Q[3489]] = e57fo_;
}(modules || (modules = {})), function ($cy) {
    var mvw3hl, f7oe5_, p96_b, kxrwtv, zbf5_o, lkhw3;
    mvw3hl = $cy['VQ'] || ($cy['VQ'] = {}), f7oe5_ = Laya[Q[1763]], p96_b = Laya[Q[1190]], kxrwtv = Laya[Q[2278]], zbf5_o = Laya[Q[1468]], lkhw3 = function (o7a5e) {
        function tvrwkx() {
            var up2 = o7a5e[Q[498]](this) || this;
            return up2['VV'] = new p96_b(), up2[Q[1179]](up2['VV']), up2['Vy'] = null, up2['VR'] = [], up2['VX'] = !0x1, up2['Vz'] = 0x0, up2['Vi'] = !0x0, up2['Vq'] = 0x6, up2['VE'] = !0x1, up2['on'](f7oe5_[Q[813]], up2, up2['Vm']), up2['on'](f7oe5_[Q[814]], up2, up2['Vb']), up2;
        }
        return vtwrk(tvrwkx, o7a5e), tvrwkx[Q[536]] = function (ktxqwr, rqtjx8, p2d069, qgxsj8, dn9p0, z_obf5, n0cu1i) {
            void 0x0 === qgxsj8 && (qgxsj8 = 0x0), void 0x0 === dn9p0 && (dn9p0 = 0x6), void 0x0 === z_obf5 && (z_obf5 = !0x0), void 0x0 === n0cu1i && (n0cu1i = !0x1);
            var qxg8 = new tvrwkx();
            return qxg8[Q[1196]](rqtjx8, p2d069, qgxsj8), qxg8[Q[3490]] = dn9p0, qxg8[Q[968]] = z_obf5, qxg8[Q[3491]] = n0cu1i, ktxqwr && ktxqwr[Q[1179]](qxg8), qxg8;
        }, tvrwkx[Q[979]] = function (vhl3m) {
            vhl3m && (vhl3m[Q[644]] = !0x0, vhl3m[Q[979]]());
        }, tvrwkx[Q[984]] = function (vrxtw) {
            vrxtw && (vrxtw[Q[644]] = !0x1, vrxtw[Q[984]]());
        }, tvrwkx[Q[496]][Q[637]] = function (lkvr3w) {
            Laya[Q[551]][Q[542]](this, this['VP']), this[Q[596]](f7oe5_[Q[813]], this, this['Vm']), this[Q[596]](f7oe5_[Q[814]], this, this['Vb']), o7a5e[Q[496]][Q[637]][Q[498]](this, lkvr3w);
        }, tvrwkx[Q[496]]['Vm'] = function () {}, tvrwkx[Q[496]]['Vb'] = function () {}, tvrwkx[Q[496]][Q[1196]] = function (cin$1, tqxrwk, d0269) {
            if (this['Vy'] != cin$1) {
                this['Vy'] = cin$1, this['VR'] = [];
                for (var u0ndi = 0x0, o9b6_ = d0269; o9b6_ <= tqxrwk; o9b6_++) this['VR'][u0ndi++] = cin$1 + '/' + o9b6_ + Q[628];
                var hv3w = zbf5_o[Q[631]](this['VR'][0x0]);
                hv3w && (this[Q[482]] = hv3w[Q[710]], this[Q[484]] = hv3w[Q[711]]), this['VP']();
            }
        }, Object[Q[504]](tvrwkx[Q[496]], Q[3491], {
            'get': function () {
                return this['VE'];
            },
            'set': function (hl$cmy) {
                this['VE'] = hl$cmy;
            },
            'enumerable': !0x0,
            'configurable': !0x0
        }), Object[Q[504]](tvrwkx[Q[496]], Q[3490], {
            'set': function (afe75o) {
                this['Vq'] != afe75o && (this['Vq'] = afe75o, this['VX'] && (Laya[Q[551]][Q[542]](this, this['VP']), Laya[Q[551]][Q[968]](this['Vq'] * (0x3e8 / 0x3c), this, this['VP'])));
            },
            'enumerable': !0x0,
            'configurable': !0x0
        }), Object[Q[504]](tvrwkx[Q[496]], Q[968], {
            'set': function ($mcl) {
                this['Vi'] = $mcl;
            },
            'enumerable': !0x0,
            'configurable': !0x0
        }), tvrwkx[Q[496]][Q[979]] = function () {
            this['VX'] && this[Q[984]](), this['VX'] = !0x0, this['Vz'] = 0x0, Laya[Q[551]][Q[968]](this['Vq'] * (0x3e8 / 0x3c), this, this['VP']), this['VP']();
        }, tvrwkx[Q[496]][Q[984]] = function () {
            this['VX'] = !0x1, this['Vz'] = 0x0, this['VP'](), Laya[Q[551]][Q[542]](this, this['VP']);
        }, tvrwkx[Q[496]][Q[958]] = function () {
            this['VX'] && (this['VX'] = !0x1, Laya[Q[551]][Q[542]](this, this['VP']));
        }, tvrwkx[Q[496]][Q[959]] = function () {
            this['VX'] || (this['VX'] = !0x0, Laya[Q[551]][Q[968]](this['Vq'] * (0x3e8 / 0x3c), this, this['VP']), this['VP']());
        }, Object[Q[504]](tvrwkx[Q[496]], Q[3492], {
            'get': function () {
                return this['VX'];
            },
            'enumerable': !0x0,
            'configurable': !0x0
        }), tvrwkx[Q[496]]['VP'] = function () {
            this['VR'] && 0x0 != this['VR'][Q[10]] && (this['VV'][Q[1196]] = this['VR'][this['Vz']], this['VX'] && (this['Vz']++, this['Vz'] == this['VR'][Q[10]] && (this['Vi'] ? this['Vz'] = 0x0 : (Laya[Q[551]][Q[542]](this, this['VP']), this['VX'] = !0x1, this['VE'] && (this[Q[644]] = !0x1), this[Q[577]](f7oe5_[Q[816]])))));
        }, tvrwkx;
    }(kxrwtv), mvw3hl[Q[3493]] = lkhw3;
}(modules || (modules = {})), function (chmyl$) {
    var dui2n0, cun$i1, sxqg8j;
    dui2n0 = chmyl$['Vx'] || (chmyl$['Vx'] = {}), cun$i1 = chmyl$['VQ'][Q[3493]], sxqg8j = function (n$iuc1) {
        function d926pb(mw3hl, i0cu) {
            void 0x0 === mw3hl && (mw3hl = 0x0);
            var krwt3 = n$iuc1[Q[498]](this) || this;
            return krwt3['VA'] = {
                'bgImgSkin': Q[3494],
                'topImgSkin': Q[3495],
                'btmImgSkin': Q[3496],
                'leftImgSkin': Q[3497],
                'rightImgSkin': Q[3498],
                'loadingBarBgSkin': Q[3386],
                'copyRightImgBottom': 0xa,
                'processBox1Y': 0x3c3,
                'processBox2Y': 0x429,
                'loadingTipsSize': 0x1a,
                'getTipsBtnVisible': !0x1
            }, krwt3['VT'] = {
                'bgImgSkin': Q[3499],
                'topImgSkin': Q[3500],
                'btmImgSkin': Q[3501],
                'leftImgSkin': Q[3502],
                'rightImgSkin': Q[3503],
                'loadingBarBgSkin': Q[3504],
                'copyRightImgBottom': 0xa,
                'processBox1Y': 0x3c3,
                'processBox2Y': 0x429,
                'loadingTipsSize': 0x1a,
                'getTipsBtnVisible': !0x1
            }, krwt3['VK'] = 0x0, krwt3['VY'](0x1 == mw3hl ? krwt3['VT'] : krwt3['VA']), krwt3[Q[3382]][Q[1196]] = i0cu, krwt3;
        }
        return vtwrk(d926pb, n$iuc1), d926pb[Q[496]][Q[2144]] = function () {
            if (n$iuc1[Q[496]][Q[2144]][Q[498]](this), vxkrqj[Q[37]][Q[3484]](), this['VW'] = vjtxg8q[Q[529]][Q[16]], this[Q[2118]] = 0x0, this[Q[2119]] = 0x0, this['VW']) {
                var qxtgj8 = this['VW'][Q[183]];
                this[Q[3413]][Q[681]] = 0x1 == qxtgj8 ? Q[3415] : 0x2 == qxtgj8 ? Q[687] : 0x65 == qxtgj8 ? Q[687] : Q[3415];
            }
            this['Vk'] = [this[Q[3398]], this[Q[3400]], this[Q[3402]], this[Q[3404]]], vjtxg8q[Q[529]][Q[3505]] = this, _vHPJV(), vxkrqj[Q[37]][Q[212]](), vxkrqj[Q[37]][Q[213]](), this[Q[2165]]();
        }, d926pb[Q[496]][Q[208]] = function (c0in1) {
            var d2n09p = this;
            if (-0x1 === c0in1) return d2n09p['VK'] = 0x0, Laya[Q[551]][Q[542]](this, this[Q[208]]), void Laya[Q[551]][Q[1216]](0x1, this, this[Q[208]]);
            if (-0x2 !== c0in1) {
                d2n09p['VK'] < 0.9 ? d2n09p['VK'] += (0.15 * Math[Q[236]]() + 0.01) / (0x64 * Math[Q[236]]() + 0x32) : d2n09p['VK'] < 0x1 && (d2n09p['VK'] += 0.0001), 0.9999 < d2n09p['VK'] && (d2n09p['VK'] = 0.9999, Laya[Q[551]][Q[542]](this, this[Q[208]]), Laya[Q[551]][Q[585]](0xbb8, this, function () {
                    0.9 < d2n09p['VK'] && _vHPJ(-0x1);
                }));
                var f_zob5 = d2n09p['VK'],
                    vwm3 = 0x24e * f_zob5;
                d2n09p['VK'] = d2n09p['VK'] > f_zob5 ? d2n09p['VK'] : f_zob5, d2n09p[Q[3387]][Q[482]] = vwm3;
                var tg8jxq = d2n09p[Q[3387]]['x'] + vwm3;
                d2n09p[Q[3391]]['x'] = tg8jxq - 0xf, 0x16c <= tg8jxq ? (d2n09p[Q[3389]][Q[644]] = !0x0, d2n09p[Q[3389]]['x'] = tg8jxq - 0xca) : d2n09p[Q[3389]][Q[644]] = !0x1, d2n09p[Q[3393]][Q[407]] = (0x64 * f_zob5 >> 0x0) + '%', d2n09p['VK'] < 0.9999 && Laya[Q[551]][Q[1216]](0x1, this, this[Q[208]]);
            } else Laya[Q[551]][Q[542]](this, this[Q[208]]);
        }, d926pb[Q[496]][Q[209]] = function (ozb_5f, pdz9b, vtw) {
            var m1$y = this;
            0x1 < ozb_5f && (ozb_5f = 0x1);
            var ktv3rw = 0x24e * ozb_5f;
            m1$y['VK'] = m1$y['VK'] > ozb_5f ? m1$y['VK'] : ozb_5f, m1$y[Q[3387]][Q[482]] = ktv3rw;
            var o7fe5 = m1$y[Q[3387]]['x'] + ktv3rw;
            m1$y[Q[3391]]['x'] = o7fe5 - 0xf, 0x16c <= o7fe5 ? (m1$y[Q[3389]][Q[644]] = !0x0, m1$y[Q[3389]]['x'] = o7fe5 - 0xca) : m1$y[Q[3389]][Q[644]] = !0x1, m1$y[Q[3393]][Q[407]] = (0x64 * ozb_5f >> 0x0) + '%', m1$y[Q[3413]][Q[407]] = pdz9b;
            for (var p9zb_ = vtw - 0x1, $yc1u = 0x0; $yc1u < this['Vk'][Q[10]]; $yc1u++) m1$y['Vk'][$yc1u][Q[1196]] = $yc1u < p9zb_ ? Q[3399] : p9zb_ === $yc1u ? Q[3401] : Q[3403];
        }, d926pb[Q[496]][Q[2165]] = function () {
            this[Q[209]](0.1, Q[3506], 0x1), this[Q[208]](-0x1), vjtxg8q[Q[529]][Q[208]] = this[Q[208]][Q[246]](this), vjtxg8q[Q[529]][Q[209]] = this[Q[209]][Q[246]](this), this[Q[3416]][Q[407]] = Q[3507] + this['VW']['lastVersion'] + Q[3508] + this['VW']['wxVersion'], this[Q[466]]();
        }, d926pb[Q[496]][Q[825]] = function (bzp9d) {
            this[Q[3509]](), Laya[Q[551]][Q[542]](this, this[Q[208]]), Laya[Q[551]][Q[542]](this, this['VN']), vxkrqj[Q[37]][Q[214]](), this[Q[3406]][Q[596]](Laya[Q[1763]][Q[795]], this, this['V_']);
        }, d926pb[Q[496]][Q[3509]] = function () {
            vjtxg8q[Q[529]][Q[208]] = function () {}, vjtxg8q[Q[529]][Q[209]] = function () {};
        }, d926pb[Q[496]][Q[637]] = function (b9_6zo) {
            void 0x0 === b9_6zo && (b9_6zo = !0x0), this[Q[3509]](), n$iuc1[Q[496]][Q[637]][Q[498]](this, b9_6zo);
        }, d926pb[Q[496]][Q[466]] = function () {
            this['VW'][Q[466]] && 0x1 == this['VW'][Q[466]] && (this[Q[3406]][Q[644]] = !0x0, this[Q[3406]][Q[2059]] = !0x0, this[Q[3406]][Q[1196]] = Q[3407], this[Q[3406]]['on'](Laya[Q[1763]][Q[795]], this, this['V_']), this['V$'](), this['VM'](!0x0));
        }, d926pb[Q[496]]['V_'] = function () {
            this[Q[3406]][Q[2059]] && (this[Q[3406]][Q[2059]] = !0x1, this[Q[3406]][Q[1196]] = Q[3510], this['VZ'](), this['VM'](!0x1));
        }, d926pb[Q[496]]['VY'] = function (vktrw3) {
            this[Q[3372]][Q[1196]] = vktrw3[Q[3511]], this[Q[3374]][Q[1196]] = vktrw3[Q[3512]], this[Q[3376]][Q[1196]] = vktrw3[Q[3513]], this[Q[3378]][Q[1196]] = vktrw3[Q[3514]], this[Q[3380]][Q[1196]] = vktrw3[Q[3515]], this[Q[3382]][Q[105]] = vktrw3[Q[3516]], this[Q[3384]]['y'] = vktrw3[Q[3517]], this[Q[3397]]['y'] = vktrw3[Q[3518]], this[Q[3385]][Q[1196]] = vktrw3[Q[3519]], this[Q[3413]][Q[622]] = vktrw3[Q[3520]], this[Q[3406]][Q[644]] = this['VW'][Q[466]] && 0x1 == this['VW'][Q[466]], this[Q[3406]][Q[644]] ? this['V$']() : this['VZ'](), this['VM'](this[Q[3406]][Q[644]]);
        }, d926pb[Q[496]]['V$'] = function () {
            this['Vu'] || (this['Vu'] = cun$i1[Q[536]](this[Q[3406]], Q[3521], 0x4, 0x0, 0xc), this['Vu'][Q[1163]](0xa1, 0x6a), this['Vu'][Q[736]](1.14, 1.15)), cun$i1[Q[979]](this['Vu']);
        }, d926pb[Q[496]]['VZ'] = function () {
            this['Vu'] && cun$i1[Q[984]](this['Vu']);
        }, d926pb[Q[496]]['VM'] = function (hv3ym) {
            Laya[Q[551]][Q[542]](this, this['VN']), hv3ym ? (this['Vc'] = 0x9, this[Q[3410]][Q[644]] = !0x0, this['VN'](), Laya[Q[551]][Q[968]](0x3e8, this, this['VN'])) : this[Q[3410]][Q[644]] = !0x1;
        }, d926pb[Q[496]]['VN'] = function () {
            0x0 < this['Vc'] ? (this[Q[3410]][Q[407]] = Q[3522] + this['Vc'] + 's)', this['Vc']--) : (this[Q[3410]][Q[407]] = '', Laya[Q[551]][Q[542]](this, this['VN']), this['V_']());
        }, d926pb;
    }(vvwkl3r['Va']), dui2n0[Q[3523]] = sxqg8j;
}(modules || (modules = {})), function (vrw3) {
    !function (wvt3) {
        var wlhvk = function () {
            function vwh3m() {}
            return vwh3m[Q[3486]] = function (l3my$) {
                if (!l3my$) return !0x1;
                var wqxk = vwh3m[Q[3524]](l3my$[Q[323]]);
                if (-0x1 != l3my$[Q[330]]) return 0x0 == l3my$[Q[330]] ? (alert(Q[3525]), !0x1) : !(0x3 === l3my$[Q[330]] && !wqxk) || (alert(Q[3526]), !0x1);
                var iy1$uc = Q[3527],
                    tj8qxr = l3my$[Q[322]];
                return tj8qxr && '' != tj8qxr && '\x20' != tj8qxr && (iy1$uc += Q[3528] + tj8qxr + ')'), alert(iy1$uc), !0x1;
            }, vwh3m[Q[3524]] = function (xrktvw) {
                return 0x1 === xrktvw || 0x3 === xrktvw;
            }, vwh3m[Q[3529]] = function (kxjtrq) {
                var of75_e = kxjtrq[Q[330]],
                    lymh = vwh3m[Q[3524]](kxjtrq[Q[323]]),
                    u$y1ci = Q[3530];
                return 0x0 < of75_e && lymh ? u$y1ci = Q[3425] : 0x0 < of75_e && !lymh ? u$y1ci = Q[3530] : of75_e <= 0x0 && (u$y1ci = Q[3531]), u$y1ci;
            }, vwh3m[Q[3532]] = function ($u1cyi) {
                var _6zb9 = $u1cyi[Q[330]],
                    bz5f = '';
                return vwh3m[Q[3524]]($u1cyi[Q[323]]) ? bz5f = Q[3533] : -0x1 === _6zb9 ? bz5f = Q[3534] : 0x0 === _6zb9 && (bz5f = Q[3535]), bz5f;
            }, vwh3m[Q[3536]] = function (o_65z) {
                var a5efo7 = o_65z[Q[330]],
                    ym1ch = '';
                return -0x1 === a5efo7 ? ym1ch = Q[3537] : 0x0 === a5efo7 ? ym1ch = Q[3538] : 0x0 < a5efo7 && (ym1ch = Q[3539]), ym1ch;
            }, vwh3m[Q[3540]] = function (wvklh3, whmv3) {
                var $3yh = whmv3;
                return -0x1 === wvklh3 ? $3yh = Q[3541] : 0x0 === wvklh3 && ($3yh = Q[3542]), $3yh;
            }, vwh3m;
        }();
        wvt3[Q[3485]] = wlhvk;
        var bp69_ = Laya[Q[2280]],
            z_pb6 = Laya[Q[1763]],
            o5bz6 = function (gqjx8s) {
            function cmh$1y(txqjg) {
                void 0x0 === txqjg && (txqjg = Q[3383]);
                var xtrqj = gqjx8s[Q[498]](this) || this;
                return xtrqj['VH'] = 0x0, xtrqj['VG'] = Q[3543], xtrqj['VI'] = 0x0, xtrqj['Vv'] = 0x0, xtrqj['Vl'] = Q[3544], xtrqj['Vj'] = !0x0, xtrqj['Vh'] = 0x0, xtrqj[Q[3382]][Q[1196]] = txqjg, xtrqj;
            }
            return vtwrk(cmh$1y, gqjx8s), cmh$1y[Q[496]][Q[2144]] = function () {
                gqjx8s[Q[496]][Q[2144]][Q[498]](this), this[Q[2118]] = 0x0, this[Q[2119]] = 0x0, this[Q[3382]][Q[1196]] = '', vxkrqj[Q[37]]['_vUJVPH'](), this['VW'] = vjtxg8q[Q[529]][Q[16]], this['Vf'] = new bp69_(), this['Vf'][Q[2229]] = '', this['Vf'][Q[1180]] = wvt3[Q[3545]], this['Vf'][Q[104]] = 0x5, this['Vf'][Q[2319]] = 0x1, this['Vf'][Q[2242]] = 0x5, this['Vf'][Q[482]] = this[Q[3471]][Q[482]], this['Vf'][Q[484]] = this[Q[3471]][Q[484]] - 0x8, this[Q[3471]][Q[1179]](this['Vf']), this['VF'] = new bp69_(), this['VF'][Q[2229]] = '', this['VF'][Q[1180]] = wvt3[Q[3546]], this['VF'][Q[104]] = 0x5, this['VF'][Q[2319]] = 0x1, this['VF'][Q[2242]] = 0x5, this['VF'][Q[482]] = this[Q[3472]][Q[482]], this['VF'][Q[484]] = this[Q[3472]][Q[484]] - 0x8, this[Q[3472]][Q[1179]](this['VF']), this['Vg'] = new bp69_(), this['Vg'][Q[2331]] = '', this['Vg'][Q[1180]] = wvt3[Q[3547]], this['Vg'][Q[2235]] = 0x1, this['Vg'][Q[482]] = this[Q[3457]][Q[482]], this['Vg'][Q[484]] = this[Q[3457]][Q[484]], this[Q[3457]][Q[1179]](this['Vg']), this['Vo'] = new bp69_(), this['Vo'][Q[2331]] = '', this['Vo'][Q[1180]] = wvt3[Q[3548]], this['Vo'][Q[2235]] = 0x1, this['Vo'][Q[482]] = this[Q[3457]][Q[482]], this['Vo'][Q[484]] = this[Q[3457]][Q[484]], this[Q[3465]][Q[1179]](this['Vo']);
                var f_o7e5 = this['VW'][Q[183]];
                this['VB'] = 0x1 == f_o7e5 ? Q[3434] : 0x2 == f_o7e5 ? Q[3434] : 0x3 == f_o7e5 ? Q[3434] : 0x65 == f_o7e5 ? Q[3434] : Q[3549], this[Q[3426]][Q[559]](0x1fa, 0x58), this['VO'] = [], this[Q[3438]][Q[644]] = !0x1, this[Q[3461]][Q[681]] = Q[3450], this[Q[3461]][Q[1009]][Q[622]] = 0x1a, this[Q[3461]][Q[1009]][Q[1367]] = 0x1c, this[Q[3461]][Q[900]] = !0x1, this[Q[3468]][Q[681]] = Q[3450], this[Q[3468]][Q[1009]][Q[622]] = 0x1a, this[Q[3468]][Q[1009]][Q[1367]] = 0x1c, this[Q[3468]][Q[900]] = !0x1, this[Q[3437]][Q[681]] = Q[1269], this[Q[3437]][Q[1009]][Q[622]] = 0x12, this[Q[3437]][Q[1009]][Q[1367]] = 0x12, this[Q[3437]][Q[1009]][Q[672]] = 0x2, this[Q[3437]][Q[1009]][Q[1083]] = Q[687], this[Q[3437]][Q[1009]][Q[1385]] = !0x1, this[Q[3480]][Q[681]] = Q[3450], this[Q[3480]][Q[1009]][Q[622]] = 0x1a, this[Q[3480]][Q[1009]][Q[1367]] = 0x1c, this[Q[3480]][Q[900]] = !0x1, vjtxg8q[Q[529]][Q[425]] = this, _vHPJV(), this[Q[3482]](), this[Q[2165]]();
            }, cmh$1y[Q[496]][Q[637]] = function (rk3t) {
                void 0x0 === rk3t && (rk3t = !0x0), this[Q[3483]](), this['VL'](), this['Vd'](), this['VS'](), this['Vw'](), this[Q[3550]] = null, this['Vf'] && (this['Vf'][Q[1361]](), this['Vf'][Q[637]](), this['Vf'] = null), this['VF'] && (this['VF'][Q[1361]](), this['VF'][Q[637]](), this['VF'] = null), this['Vg'] && (this['Vg'][Q[1361]](), this['Vg'][Q[637]](), this['Vg'] = null), this['Vo'] && (this['Vo'][Q[1361]](), this['Vo'][Q[637]](), this['Vo'] = null), Laya[Q[551]][Q[542]](this, this['Vs']), gqjx8s[Q[496]][Q[637]][Q[498]](this, rk3t);
            }, cmh$1y[Q[496]][Q[3482]] = function () {
                this[Q[3372]]['on'](Laya[Q[1763]][Q[795]], this, this['VC']), this[Q[3426]]['on'](Laya[Q[1763]][Q[795]], this, this['Vt']), this[Q[3420]]['on'](Laya[Q[1763]][Q[795]], this, this['Vr']), this[Q[3420]]['on'](Laya[Q[1763]][Q[795]], this, this['Vr']), this[Q[3473]]['on'](Laya[Q[1763]][Q[795]], this, this['VJ']), this[Q[3481]]['on'](Laya[Q[1763]][Q[795]], this, this['Ve']), this[Q[3438]]['on'](Laya[Q[1763]][Q[795]], this, this['Vnn']), this[Q[3445]]['on'](Laya[Q[1763]][Q[795]], this, this['Van']), this[Q[3449]]['on'](Laya[Q[1763]][Q[791]], this, this['VUn']), this[Q[3452]]['on'](Laya[Q[1763]][Q[795]], this, this['Vxn']), this[Q[3453]]['on'](Laya[Q[1763]][Q[795]], this, this['Vxn']), this[Q[3460]]['on'](Laya[Q[1763]][Q[791]], this, this['VDn']), this[Q[3440]]['on'](Laya[Q[1763]][Q[795]], this, this['Vpn']), this[Q[3442]]['on'](Laya[Q[1763]][Q[795]], this, this['VQn']), this[Q[3463]]['on'](Laya[Q[1763]][Q[795]], this, this['VVn']), this[Q[3464]]['on'](Laya[Q[1763]][Q[795]], this, this['VVn']), this[Q[3467]]['on'](Laya[Q[1763]][Q[791]], this, this['Vyn']), this[Q[3428]]['on'](Laya[Q[1763]][Q[795]], this, this['VRn']), this[Q[3437]]['on'](Laya[Q[1763]][Q[849]], this, this['VXn']), this[Q[3476]]['on'](Laya[Q[1763]][Q[795]], this, this['Vzn']), this[Q[3479]]['on'](Laya[Q[1763]][Q[791]], this, this['Vin']), this['Vg'][Q[2230]] = !0x0, this['Vg'][Q[2240]] = Laya[Q[1426]][Q[536]](this, this['Vqn'], null, !0x1), this['Vo'][Q[2230]] = !0x0, this['Vo'][Q[2240]] = Laya[Q[1426]][Q[536]](this, this['VEn'], null, !0x1);
            }, cmh$1y[Q[496]][Q[3483]] = function () {
                this[Q[3372]][Q[596]](Laya[Q[1763]][Q[795]], this, this['VC']), this[Q[3426]][Q[596]](Laya[Q[1763]][Q[795]], this, this['Vt']), this[Q[3420]][Q[596]](Laya[Q[1763]][Q[795]], this, this['Vr']), this[Q[3420]][Q[596]](Laya[Q[1763]][Q[795]], this, this['Vr']), this[Q[3473]][Q[596]](Laya[Q[1763]][Q[795]], this, this['VJ']), this[Q[3438]][Q[596]](Laya[Q[1763]][Q[795]], this, this['Vnn']), this[Q[3481]][Q[596]](Laya[Q[1763]][Q[795]], this, this['Ve']), this[Q[3445]][Q[596]](Laya[Q[1763]][Q[795]], this, this['Van']), this[Q[3449]][Q[596]](Laya[Q[1763]][Q[791]], this, this['VUn']), this[Q[3452]][Q[596]](Laya[Q[1763]][Q[795]], this, this['Vxn']), this[Q[3453]][Q[596]](Laya[Q[1763]][Q[795]], this, this['Vxn']), this[Q[3460]][Q[596]](Laya[Q[1763]][Q[791]], this, this['VDn']), this[Q[3440]][Q[596]](Laya[Q[1763]][Q[795]], this, this['Vpn']), this[Q[3442]][Q[596]](Laya[Q[1763]][Q[795]], this, this['VQn']), this[Q[3463]][Q[596]](Laya[Q[1763]][Q[795]], this, this['VVn']), this[Q[3464]][Q[596]](Laya[Q[1763]][Q[795]], this, this['VVn']), this[Q[3467]][Q[596]](Laya[Q[1763]][Q[791]], this, this['Vyn']), this[Q[3428]][Q[596]](Laya[Q[1763]][Q[795]], this, this['VRn']), this[Q[3437]][Q[596]](Laya[Q[1763]][Q[849]], this, this['VXn']), this[Q[3476]][Q[596]](Laya[Q[1763]][Q[795]], this, this['Vzn']), this[Q[3479]][Q[596]](Laya[Q[1763]][Q[791]], this, this['Vin']), this['Vg'][Q[2230]] = !0x1, this['Vg'][Q[2240]] = null, this['Vo'][Q[2230]] = !0x1, this['Vo'][Q[2240]] = null;
            }, cmh$1y[Q[496]][Q[2165]] = function () {
                var gsjqx = this;
                this['Vp'] = Date[Q[144]](), this['Vj'] = !0x0, this['Vmn'] = this['VW'][Q[23]][Q[24]], this['Vbn'](this['VW'][Q[23]]), this['Vf'][Q[2154]] = this['VW'][Q[424]], this['Vr'](), req_multi_server_notice(0x4, this['VW'][Q[22]], this['VW'][Q[23]][Q[24]], this['VPn'][Q[246]](this)), Laya[Q[551]][Q[1301]](0x1, this, function () {
                    gsjqx['VAn'] = gsjqx['VW'][Q[3551]] && gsjqx['VW'][Q[3551]][Q[2241]] ? gsjqx['VW'][Q[3551]][Q[2241]] : [], gsjqx['VTn'] = null != gsjqx['VW'][Q[3552]] ? gsjqx['VW'][Q[3552]] : 0x0;
                    var vk3wt = '1' == localStorage[Q[301]](gsjqx['Vl']),
                        pdn290 = 0x0 != _vPJ[Q[3553]],
                        cyh1m$ = 0x0 == gsjqx['VTn'] || 0x1 == gsjqx['VTn'];
                    gsjqx['VKn'] = pdn290 && vk3wt || cyh1m$, gsjqx['VYn']();
                }), this[Q[3416]][Q[407]] = Q[3507] + this['VW']['lastVersion'] + Q[3508] + this['VW']['wxVersion'], this[Q[3435]][Q[681]] = this[Q[3432]][Q[681]] = this['VB'], this[Q[3422]][Q[644]] = 0x1 == this['VW'][Q[3554]], this[Q[3430]][Q[644]] = !0x1;
            }, cmh$1y[Q[496]][Q[3555]] = function () {}, cmh$1y[Q[496]]['VC'] = function () {
                this['VKn'] ? 0x2710 < Date[Q[144]]() - this['Vp'] && wlhvk[Q[3486]](this['VW'][Q[23]]) && (this['Vp'] -= 0x7d0, vxkrqj[Q[37]][Q[3487]]()) : this['VWn'](Q[3556]);
            }, cmh$1y[Q[496]]['Vt'] = function () {
                this['VKn'] ? wlhvk[Q[3486]](this['VW'][Q[23]]) && (vjtxg8q[Q[529]][Q[16]][Q[23]] = this['VW'][Q[23]], _vJHVP(0x0, this['VW'][Q[23]][Q[24]])) : this['VWn'](Q[3556]);
            }, cmh$1y[Q[496]]['Vr'] = function () {
                this['VW'][Q[427]] ? this[Q[3469]][Q[644]] = !0x0 : (this['VW'][Q[427]] = !0x0, _vPJHV(0x0));
            }, cmh$1y[Q[496]]['VJ'] = function () {
                this[Q[3469]][Q[644]] = !0x1;
            }, cmh$1y[Q[496]]['Ve'] = function () {
                this[Q[3475]][Q[644]] = !0x1;
            }, cmh$1y[Q[496]]['Vnn'] = function () {
                this['Vkn']();
            }, cmh$1y[Q[496]]['Vxn'] = function () {
                this[Q[3451]][Q[644]] = !0x1;
            }, cmh$1y[Q[496]]['Van'] = function () {
                this[Q[3443]][Q[644]] = !0x1;
            }, cmh$1y[Q[496]]['Vpn'] = function () {
                this['VNn']();
            }, cmh$1y[Q[496]]['VVn'] = function () {
                this[Q[3462]][Q[644]] = !0x1;
            }, cmh$1y[Q[496]]['VRn'] = function () {
                this['VKn'] = !this['VKn'], this['VKn'] && localStorage[Q[486]](this['Vl'], '1'), this[Q[3428]][Q[1196]] = Q[3557] + (this['VKn'] ? Q[3558] : Q[3559]);
            }, cmh$1y[Q[496]]['VXn'] = function (bzo5_f) {
                this['VNn'](Number(bzo5_f));
            }, cmh$1y[Q[496]]['Vzn'] = function () {
                vjtxg8q[Q[529]][Q[3560]] ? vjtxg8q[Q[529]][Q[3560]]() : this['Ve']();
            }, cmh$1y[Q[496]]['VUn'] = function () {
                this['VH'] = this[Q[3449]][Q[782]], Laya[Q[556]]['on'](z_pb6['MOUSE_MOVE'], this, this['V_n']), Laya[Q[556]]['on'](z_pb6[Q[793]], this, this['VL']), Laya[Q[556]]['on'](z_pb6[Q[802]], this, this['VL']);
            }, cmh$1y[Q[496]]['V_n'] = function () {
                if (this[Q[3449]]) {
                    var rvkt3w = this['VH'] - this[Q[3449]][Q[782]];
                    this[Q[3449]][Q[1615]] += rvkt3w, this['VH'] = this[Q[3449]][Q[782]];
                }
            }, cmh$1y[Q[496]]['VL'] = function () {
                Laya[Q[556]][Q[596]](z_pb6['MOUSE_MOVE'], this, this['V_n']), Laya[Q[556]][Q[596]](z_pb6[Q[793]], this, this['VL']), Laya[Q[556]][Q[596]](z_pb6[Q[802]], this, this['VL']);
            }, cmh$1y[Q[496]]['VDn'] = function () {
                this['VI'] = this[Q[3460]][Q[782]], Laya[Q[556]]['on'](z_pb6['MOUSE_MOVE'], this, this['V$n']), Laya[Q[556]]['on'](z_pb6[Q[793]], this, this['Vd']), Laya[Q[556]]['on'](z_pb6[Q[802]], this, this['Vd']);
            }, cmh$1y[Q[496]]['V$n'] = function () {
                if (this[Q[3461]]) {
                    var kvwrtx = this['VI'] - this[Q[3460]][Q[782]];
                    this[Q[3461]]['y'] -= kvwrtx, this[Q[3460]][Q[484]] < this[Q[3461]][Q[2112]] ? this[Q[3461]]['y'] < this[Q[3460]][Q[484]] - this[Q[3461]][Q[2112]] ? this[Q[3461]]['y'] = this[Q[3460]][Q[484]] - this[Q[3461]][Q[2112]] : 0x0 < this[Q[3461]]['y'] && (this[Q[3461]]['y'] = 0x0) : this[Q[3461]]['y'] = 0x0, this['VI'] = this[Q[3460]][Q[782]];
                }
            }, cmh$1y[Q[496]]['Vd'] = function () {
                Laya[Q[556]][Q[596]](z_pb6['MOUSE_MOVE'], this, this['V$n']), Laya[Q[556]][Q[596]](z_pb6[Q[793]], this, this['Vd']), Laya[Q[556]][Q[596]](z_pb6[Q[802]], this, this['Vd']);
            }, cmh$1y[Q[496]]['Vyn'] = function () {
                this['Vv'] = this[Q[3467]][Q[782]], Laya[Q[556]]['on'](z_pb6['MOUSE_MOVE'], this, this['VMn']), Laya[Q[556]]['on'](z_pb6[Q[793]], this, this['VS']), Laya[Q[556]]['on'](z_pb6[Q[802]], this, this['VS']);
            }, cmh$1y[Q[496]]['VMn'] = function () {
                if (this[Q[3468]]) {
                    var lv3kh = this['Vv'] - this[Q[3467]][Q[782]];
                    this[Q[3468]]['y'] -= lv3kh, this[Q[3467]][Q[484]] < this[Q[3468]][Q[2112]] ? this[Q[3468]]['y'] < this[Q[3467]][Q[484]] - this[Q[3468]][Q[2112]] ? this[Q[3468]]['y'] = this[Q[3467]][Q[484]] - this[Q[3468]][Q[2112]] : 0x0 < this[Q[3468]]['y'] && (this[Q[3468]]['y'] = 0x0) : this[Q[3468]]['y'] = 0x0, this['Vv'] = this[Q[3467]][Q[782]];
                }
            }, cmh$1y[Q[496]]['VS'] = function () {
                Laya[Q[556]][Q[596]](z_pb6['MOUSE_MOVE'], this, this['VMn']), Laya[Q[556]][Q[596]](z_pb6[Q[793]], this, this['VS']), Laya[Q[556]][Q[596]](z_pb6[Q[802]], this, this['VS']);
            }, cmh$1y[Q[496]]['Vin'] = function () {
                this['Vh'] = this[Q[3479]][Q[782]], Laya[Q[556]]['on'](z_pb6['MOUSE_MOVE'], this, this['VZn']), Laya[Q[556]]['on'](z_pb6[Q[793]], this, this['Vw']), Laya[Q[556]]['on'](z_pb6[Q[802]], this, this['Vw']);
            }, cmh$1y[Q[496]]['VZn'] = function () {
                if (this[Q[3480]]) {
                    var pn2d90 = this['Vh'] - this[Q[3479]][Q[782]];
                    this[Q[3480]]['y'] -= pn2d90, this[Q[3479]][Q[484]] < this[Q[3480]][Q[2112]] ? this[Q[3480]]['y'] < this[Q[3479]][Q[484]] - this[Q[3480]][Q[2112]] ? this[Q[3480]]['y'] = this[Q[3479]][Q[484]] - this[Q[3480]][Q[2112]] : 0x0 < this[Q[3480]]['y'] && (this[Q[3480]]['y'] = 0x0) : this[Q[3480]]['y'] = 0x0, this['Vh'] = this[Q[3479]][Q[782]];
                }
            }, cmh$1y[Q[496]]['Vw'] = function () {
                Laya[Q[556]][Q[596]](z_pb6['MOUSE_MOVE'], this, this['VZn']), Laya[Q[556]][Q[596]](z_pb6[Q[793]], this, this['Vw']), Laya[Q[556]][Q[596]](z_pb6[Q[802]], this, this['Vw']);
            }, cmh$1y[Q[496]]['Vqn'] = function () {
                if (this['Vg'][Q[2154]]) {
                    for (var yc1iu$, pd2b9 = 0x0; pd2b9 < this['Vg'][Q[2154]][Q[10]]; pd2b9++) {
                        var bzof_5 = this['Vg'][Q[2154]][pd2b9];
                        bzof_5[0x1] = pd2b9 == this['Vg'][Q[2237]], pd2b9 == this['Vg'][Q[2237]] && (yc1iu$ = bzof_5[0x0]);
                    }
                    this[Q[3458]][Q[407]] = yc1iu$ && yc1iu$[Q[1253]] ? yc1iu$[Q[1253]] : '', this[Q[3461]][Q[1008]] = yc1iu$ && yc1iu$[Q[2330]] ? yc1iu$[Q[2330]] : '', this[Q[3461]]['y'] = 0x0;
                }
            }, cmh$1y[Q[496]]['VEn'] = function () {
                var myc$ = this['Vo'][Q[2154]];
                if (myc$) {
                    for (var iun$1 = 0x0; iun$1 < myc$[Q[10]]; iun$1++) {
                        myc$[iun$1][0x1] = iun$1 == this['Vo'][Q[2237]];
                    }
                    var z5f_7o = this['VAn'][this['Vo'][Q[2237]]];
                    z5f_7o && z5f_7o[Q[2330]] && (z5f_7o[Q[2330]] = z5f_7o[Q[2330]][Q[8]](/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, '')), this[Q[3466]][Q[407]] = z5f_7o && z5f_7o[Q[1253]] ? z5f_7o[Q[1253]] : Q[3561], this[Q[3468]][Q[1008]] = z5f_7o && z5f_7o[Q[2330]] ? z5f_7o[Q[2330]] : Q[3562], this[Q[3468]]['y'] = 0x0;
                }
            }, cmh$1y[Q[496]]['Vbn'] = function (t3vrk) {
                var gqtjx = t3vrk[Q[318]];
                this[Q[3435]][Q[407]] = gqtjx + wlhvk[Q[3532]](t3vrk), this[Q[3435]][Q[681]] = wlhvk[Q[3540]](t3vrk[Q[330]], this['VB']), this[Q[3424]][Q[1196]] = wlhvk[Q[3529]](t3vrk), this['VW'][Q[21]] = t3vrk[Q[21]] || '', this['VW'][Q[23]] = t3vrk, this[Q[3438]][Q[644]] = !0x0;
            }, cmh$1y[Q[496]]['Vun'] = function (b_6z9o) {
                this[Q[426]](b_6z9o);
            }, cmh$1y[Q[496]]['Vcn'] = function (mh1c$) {
                this['Vbn'](mh1c$), this[Q[3469]][Q[644]] = !0x1;
            }, cmh$1y[Q[496]][Q[426]] = function (foe5a7) {
                if (void 0x0 === foe5a7 && (foe5a7 = 0x0), this[Q[863]]) {
                    var my1i$ = this['VW'][Q[424]];
                    if (my1i$ && 0x0 !== my1i$[Q[10]]) {
                        for (var jt8qg = my1i$[Q[10]], c$1ym = 0x0; c$1ym < jt8qg; c$1ym++) my1i$[c$1ym][Q[3563]] = this['Vun'][Q[246]](this), my1i$[c$1ym][Q[832]] = c$1ym == foe5a7, my1i$[c$1ym][Q[1544]] = c$1ym;
                        var n92d = (this['Vf'][Q[2239]] = my1i$)[foe5a7]['id'];
                        this['VW'][Q[172]][n92d] ? this[Q[433]](n92d) : this['VW'][Q[431]] || (this['VW'][Q[431]] = !0x0, -0x1 == n92d ? _vHVP(0x0) : -0x2 == n92d ? _vUVJP(0x0) : _vVHP(0x0, n92d));
                    }
                }
            }, cmh$1y[Q[496]][Q[433]] = function (ci$uy) {
                if (this[Q[863]] && this['VW'][Q[172]][ci$uy]) {
                    for (var b5foz = this['VW'][Q[172]][ci$uy], z5f7o = b5foz[Q[10]], d2unp = 0x0; d2unp < z5f7o; d2unp++) b5foz[d2unp][Q[3563]] = this['Vcn'][Q[246]](this);
                    this['VF'][Q[2239]] = b5foz;
                }
            }, cmh$1y[Q[496]]['VPn'] = function (zfb5o_) {
                console[Q[42]](Q[3564], zfb5o_);
                var nu210i = Date[Q[144]]() / 0x3e8,
                    _fz75 = localStorage[Q[301]](this['VG']),
                    af4e7 = !(this['VO'] = []);
                if (Q[289] == zfb5o_[Q[204]]) for (var xqkrj in zfb5o_[Q[203]]) {
                    var lwrvk3 = zfb5o_[Q[203]][xqkrj];
                    if (lwrvk3) {
                        var o_e7f5 = nu210i < lwrvk3[Q[3565]],
                            vkr3w = 0x1 == lwrvk3[Q[3566]],
                            yh$3m = 0x2 == lwrvk3[Q[3566]] && lwrvk3[Q[1296]] + '' != _fz75;
                        !af4e7 && o_e7f5 && (vkr3w || yh$3m) && (af4e7 = !0x0), o_e7f5 && this['VO'][Q[40]](lwrvk3), yh$3m && localStorage[Q[486]](this['VG'], lwrvk3[Q[1296]] + '');
                    }
                }
                this['VO'][Q[416]](function (dn20i, wv3hk) {
                    return dn20i[Q[3567]] - wv3hk[Q[3567]];
                }), console[Q[42]](Q[3568], this['VO']), af4e7 && this['Vkn']();
            }, cmh$1y[Q[496]]['Vkn'] = function () {
                if (this['Vg']) {
                    if (this['VO']) {
                        this['Vg']['x'] = 0x2 < this['VO'][Q[10]] ? 0x0 : (this[Q[3457]][Q[482]] - 0x112 * this['VO'][Q[10]]) / 0x2;
                        for (var fe75ao = [], af = 0x0; af < this['VO'][Q[10]]; af++) {
                            var jx8qrt = this['VO'][af];
                            fe75ao[Q[40]]([jx8qrt, af == this['Vg'][Q[2237]]]);
                        }
                        0x0 < (this['Vg'][Q[2154]] = fe75ao)[Q[10]] ? (this['Vg'][Q[2237]] = 0x0, this['Vg'][Q[2327]](0x0)) : (this[Q[3458]][Q[407]] = Q[3448], this[Q[3461]][Q[407]] = ''), this[Q[3453]][Q[644]] = this['VO'][Q[10]] <= 0x1, this[Q[3457]][Q[644]] = 0x1 < this['VO'][Q[10]];
                    }
                    this[Q[3451]][Q[644]] = !0x0;
                }
            }, cmh$1y[Q[496]]['VHn'] = function (trxjq8) {
                if (!this[Q[899]]) {
                    if (console[Q[42]](Q[3569], trxjq8), Q[289] == trxjq8[Q[204]]) for (var l3mwh in trxjq8[Q[203]]) {
                        var e_f7o5 = Number(l3mwh),
                            n2idu0 = trxjq8[Q[203]][e_f7o5];
                        this['VAn'] && this['VAn'][e_f7o5] && (this['VAn'][e_f7o5][Q[2330]] = n2idu0[Q[2330]]);
                    }
                    this['VEn']();
                }
            }, cmh$1y[Q[496]]['VYn'] = function () {
                for (var kwhl3v = '', $i1cmy = 0x0; $i1cmy < this['VAn'][Q[10]]; $i1cmy++) {
                    kwhl3v += Q[3570] + $i1cmy + Q[3571] + this['VAn'][$i1cmy][Q[1253]] + Q[3572], $i1cmy < this['VAn'][Q[10]] - 0x1 && (kwhl3v += '、');
                }
                this[Q[3437]][Q[1008]] = Q[3573] + kwhl3v, this[Q[3428]][Q[1196]] = Q[3557] + (this['VKn'] ? Q[3558] : Q[3559]), this[Q[3437]]['x'] = (0x2d0 - this[Q[3437]][Q[482]]) / 0x2, this[Q[3428]]['x'] = this[Q[3437]]['x'] - 0x1e, this[Q[3440]][Q[644]] = 0x0 < this['VAn'][Q[10]], this[Q[3428]][Q[644]] = this[Q[3437]][Q[644]] = 0x0 < this['VAn'][Q[10]] && 0x0 != this['VTn'];
            }, cmh$1y[Q[496]]['VNn'] = function (m3hwlv) {
                if (void 0x0 === m3hwlv && (m3hwlv = 0x0), this['Vo']) {
                    if (this['VAn']) {
                        this['Vo']['x'] = 0x2 < this['VAn'][Q[10]] ? 0x0 : (this[Q[3457]][Q[482]] - 0x112 * this['VAn'][Q[10]]) / 0x2;
                        for (var xqtjrk = [], z_p9b = 0x0; z_p9b < this['VAn'][Q[10]]; z_p9b++) {
                            var jsgx8 = this['VAn'][z_p9b],
                                hyvlm3 = jsgx8 && jsgx8[Q[1253]] ? jsgx8[Q[1253]] : '',
                                $c1yiu = z_p9b == this['Vo'][Q[2237]];
                            xqtjrk[Q[40]]([hyvlm3, $c1yiu]);
                        }
                        0x0 < (this['Vo'][Q[2154]] = xqtjrk)[Q[10]] ? (m3hwlv < 0x0 && (m3hwlv = 0x0), m3hwlv > xqtjrk[Q[10]] - 0x1 && (m3hwlv = 0x0), this['Vo'][Q[2237]] = m3hwlv, this['Vo'][Q[2327]](m3hwlv)) : (this[Q[3466]][Q[407]] = Q[3574], this[Q[3468]][Q[407]] = ''), this[Q[3464]][Q[644]] = this['VAn'][Q[10]] <= 0x1, this[Q[3465]][Q[644]] = 0x1 < this['VAn'][Q[10]];
                    }
                    this['Vj'] && (this['Vj'] = !0x1, req_privacy(this['VW'][Q[22]], this['VHn'][Q[246]](this))), this[Q[3462]][Q[644]] = !0x0;
                }
            }, cmh$1y[Q[496]]['openJumpView'] = function (oe_5f7, kwrl3v, wkhlv3, i0d2n) {
                void 0x0 === i0d2n && (i0d2n = !0x1), this[Q[3478]][Q[407]] = oe_5f7 || Q[3448], this[Q[3480]][Q[1008]] = kwrl3v || '', this[Q[3476]][Q[852]] = wkhlv3 || Q[3575], this[Q[3480]]['y'] = 0x0, this[Q[3475]][Q[644]] = !0x0, this[Q[3481]][Q[644]] = i0d2n;
            }, cmh$1y[Q[496]][Q[3576]] = function (pbz69, jr8xqt, bo56_z, w3vlm, bdz96) {
                (this[Q[3442]][Q[644]] = pbz69) && (this[Q[3442]][Q[1196]] = jr8xqt || Q[3439]), this[Q[3550]] = bo56_z, this[Q[3442]]['x'] = w3vlm || 0x0, this[Q[3442]]['y'] = bdz96 || 0x0;
            }, cmh$1y[Q[496]]['VQn'] = function () {
                this['openJumpView'](Q[3577], this[Q[3550]], Q[3578], !0x0);
            }, cmh$1y[Q[496]]['VWn'] = function (h$1ymc) {
                this[Q[3430]][Q[407]] = h$1ymc, this[Q[3430]]['y'] = 0x280, this[Q[3430]][Q[644]] = !0x0, this['VGn'] = 0x1, Laya[Q[551]][Q[542]](this, this['Vs']), this['Vs'](), Laya[Q[551]][Q[1216]](0x1, this, this['Vs']);
            }, cmh$1y[Q[496]]['Vs'] = function () {
                this[Q[3430]]['y'] -= this['VGn'], this['VGn'] *= 1.1, this[Q[3430]]['y'] <= 0x24e && (this[Q[3430]][Q[644]] = !0x1, Laya[Q[551]][Q[542]](this, this['Vs']));
            }, cmh$1y;
        }(vvwkl3r['VU']);
        wvt3[Q[3579]] = o5bz6;
    }(vrw3['Vx'] || (vrw3['Vx'] = {}));
}(modules || (modules = {}));
var modules,
    vjtxg8q = Laya[Q[1135]],
    vi1$cu = Laya[Q[3580]],
    vvylmh3 = Laya[Q[892]],
    vlvhk = Laya[Q[1027]],
    vnu1i = Laya[Q[1426]],
    vgjxqs = modules['Vx'][Q[3489]],
    vmy$h3 = modules['Vx'][Q[3523]],
    vf5eoa = modules['Vx'][Q[3579]],
    vxkrqj = function () {
    function z5bf_o(hycm$1) {
        this[Q[3581]] = [Q[3386], Q[3504], Q[3388], Q[3390], Q[3392], Q[3403], Q[3401], Q[3399], Q[3582], Q[3583], Q[3584], Q[3585], Q[3586], Q[3494], Q[3499], Q[3407], Q[3510], Q[3496], Q[3497], Q[3498], Q[3495], Q[3501], Q[3502], Q[3503], Q[3500]], this['_vUJVP'] = [Q[3446], Q[3439], Q[3427], Q[3441], Q[3587], Q[3588], Q[3589], Q[3474], Q[3425], Q[3530], Q[3531], Q[3421], Q[3373], Q[3377], Q[3379], Q[3381], Q[3375], Q[3383], Q[3444], Q[3470], Q[3590], Q[3454], Q[3423], Q[3429], Q[3591], Q[3592], Q[3593]], this[Q[3594]] = Q[3383], this['VIn'] = !0x1, this[Q[3595]] = !0x1, this[Q[3596]] = !0x1, this['Vvn'] = !0x1, this['Vln'] = '', z5bf_o[Q[37]] = this, Laya[Q[3597]][Q[244]](), Laya3D[Q[244]](0x0, 0x0, !0x1, !0x1, !0x1), DecodeTools[Q[244]](), Laya[Q[556]][Q[1676]] = Laya[Q[1766]][Q[1680]], Laya[Q[556]][Q[1678]] = Laya[Q[1766]][Q[3598]], Laya[Q[556]][Q[1674]] = Laya[Q[1766]][Q[1390]], Laya[Q[556]]['alignV'] = Laya[Q[1766]][Q[3599]], Laya[Q[556]][Q[1672]] = Laya[Q[1766]][Q[1682]];
        var b26dp = Laya[Q[1789]];
        b26dp[Q[1792]] = 0x6, b26dp[Q[1790]] = b26dp[Q[1791]] = 0x400, b26dp[Q[1795]](), Laya[Q[1769]][Q[563]] = Laya[Q[1769]][Q[564]] = '', Laya[Q[1135]][Q[529]][Q[858]](Laya[Q[1763]][Q[809]], this['Vjn'][Q[246]](this)), Laya[Q[1468]][Q[1434]][Q[3600]] = {
            'frames': {
                'btn_chuangjue_kaishi.png': {
                    'frame': {
                        'h': 0x58,
                        'idx': 0x0,
                        'w': 0x1fa,
                        'x': 0x0,
                        'y': 0x0
                    },
                    'sourceSize': {
                        'h': 0x58,
                        'w': 0x1fa
                    },
                    'spriteSourceSize': {
                        'x': 0x0,
                        'y': 0x0
                    }
                },
                'btn_chuangjue_nan.png': {
                    'frame': {
                        'h': 0x62,
                        'idx': 0x0,
                        'w': 0x6c,
                        'x': 0x14f,
                        'y': 0x59
                    },
                    'sourceSize': {
                        'h': 0x62,
                        'w': 0x6c
                    },
                    'spriteSourceSize': {
                        'x': 0x0,
                        'y': 0x0
                    }
                },
                'btn_chuangjue_nv.png': {
                    'frame': {
                        'h': 0x62,
                        'idx': 0x0,
                        'w': 0x6b,
                        'x': 0x0,
                        'y': 0xa4
                    },
                    'sourceSize': {
                        'h': 0x62,
                        'w': 0x6b
                    },
                    'spriteSourceSize': {
                        'x': 0x0,
                        'y': 0x0
                    }
                },
                'image_chuangjue_mingbg.png': {
                    'frame': {
                        'h': 0x4a,
                        'idx': 0x0,
                        'w': 0x14e,
                        'x': 0x0,
                        'y': 0x59
                    },
                    'sourceSize': {
                        'h': 0x4a,
                        'w': 0x14e
                    },
                    'spriteSourceSize': {
                        'x': 0x0,
                        'y': 0x0
                    }
                },
                'image_chuangjue_suiji.png': {
                    'frame': {
                        'h': 0x38,
                        'idx': 0x0,
                        'w': 0x34,
                        'x': 0x1bc,
                        'y': 0x59
                    },
                    'sourceSize': {
                        'h': 0x38,
                        'w': 0x34
                    },
                    'spriteSourceSize': {
                        'x': 0x0,
                        'y': 0x0
                    }
                },
                'v28b.png': {
                    'frame': {
                        'h': 0x19,
                        'idx': 0x0,
                        'w': 0x19,
                        'x': 0x1bc,
                        'y': 0x92
                    },
                    'sourceSize': {
                        'h': 0x1b,
                        'w': 0x1a
                    },
                    'spriteSourceSize': {
                        'x': 0x0,
                        'y': 0x2
                    }
                },
                'v29b.png': {
                    'frame': {
                        'h': 0x1b,
                        'idx': 0x0,
                        'w': 0x1a,
                        'x': 0x1d6,
                        'y': 0x92
                    },
                    'sourceSize': {
                        'h': 0x1b,
                        'w': 0x1a
                    },
                    'spriteSourceSize': {
                        'x': 0x0,
                        'y': 0x0
                    }
                }
            },
            'meta': {
                'image': Q[3601],
                'prefix': Q[3602]
            }
        }, vjtxg8q[Q[529]][Q[1435]] = z5bf_o[Q[37]][Q[3603]], vjtxg8q[Q[529]][Q[1438]] = z5bf_o[Q[37]][Q[3603]], this[Q[3604]] = new Laya[Q[2278]](), this[Q[3604]][Q[605]] = Q[3605], Laya[Q[556]][Q[1179]](this[Q[3604]]), this['Vhn'] = new Laya[Q[2278]](), this['Vhn'][Q[605]] = Q[3606], Laya[Q[556]][Q[1179]](this['Vhn']), this['Vhn'][Q[900]] = this['Vhn'][Q[897]] = !0x0, this['Vjn'](), modules['VFn']['Vfn'][Q[244]](), Laya[Q[551]][Q[968]](0x1f4, this, this['Vgn']);
    }
    return z5bf_o[Q[496]]['Vgn'] = function () {
        if (!this['VIn']) {
            var e475af = window[Q[349]];
            e475af && (Laya[Q[551]][Q[542]](this, this['Vgn']), this[Q[3607]](e475af));
        }
    }, z5bf_o[Q[496]][Q[3607]] = function (nui2d) {
        if (nui2d && !this['VIn']) {
            this['VIn'] = !0x0, this['Von'] && (this['Von'][Q[1361]](), this['Von'][Q[1350]](), this['Von'][Q[637]](), this['Von'] = null);
            var wtkxr = [0.9, 0.1, 0.0043, 0.0033],
                idn0u2 = nui2d[Q[38]]('#');
            0x4 == idn0u2[Q[10]] && (wtkxr[0x0] = parseFloat(idn0u2[0x0]), wtkxr[0x1] = parseFloat(idn0u2[0x1]), wtkxr[0x2] = parseFloat(idn0u2[0x2]), wtkxr[0x3] = parseFloat(idn0u2[0x3]));
            var rtv3wk = new Laya[Q[2819]](0x0, 0x0, 0x2710);
            rtv3wk[Q[605]] = Q[3608], rtv3wk[Q[3053]] = !0x0, rtv3wk[Q[2999]] = !0x1, rtv3wk[Q[3046]] = -0x2, rtv3wk[Q[661]][Q[738]](new Laya['Vector3'](0x0, 0x0, 0x0)), rtv3wk[Q[661]][Q[657]](new Laya['Vector3'](0x0, 0x0, 0x0), !0x0, !0x1), this['Von'] = new Laya[Q[2839]](), this['Von'][Q[605]] = Q[3609], this['Von'][Q[1179]](rtv3wk), this['Vhn'][Q[1179]](this['Von']);
            var d09p2n = new modules['VFn']['Vfn']();
            d09p2n[Q[3610]] = wtkxr[0x0], d09p2n[Q[2405]] = wtkxr[0x1], d09p2n[Q[3611]] = wtkxr[0x2], d09p2n[Q[3612]] = wtkxr[0x3];
            var a4e5 = new Laya[Q[2816]](new Laya[Q[3613]](0x1e, 0x1e));
            a4e5[Q[605]] = Q[3614], a4e5[Q[2394]][Q[2397]] = d09p2n, this['Von'][Q[1179]](a4e5), a4e5[Q[661]][Q[657]](new Laya['Vector3'](0x5a, 0x0, 0x0), !0x0, !0x1), a4e5[Q[661]][Q[738]](new Laya['Vector3'](0x0, 0x0, 0x0));
        }
    }, z5bf_o[Q[496]][Q[3615]] = function () {
        this['VIn'] = !0x1, Laya[Q[551]][Q[542]](this, this['Vgn']), this['Von'] && (this['Von'][Q[1361]](), this['Von'][Q[1350]](), this['Von'][Q[637]](), this['Von'] = null);
    }, z5bf_o[Q[496]][Q[3616]] = function (h$y1mc) {
        z5bf_o[Q[37]][Q[3604]][Q[1179]](h$y1mc);
    }, z5bf_o[Q[496]]['_vHJVP'] = function (zd69) {
        z5bf_o[Q[37]][Q[3604]][Q[644]] = zd69;
    }, z5bf_o[Q[496]]['_vUVPJH'] = function () {
        z5bf_o[Q[37]][Q[3617]] || (z5bf_o[Q[37]][Q[3617]] = new vgjxqs()), z5bf_o[Q[37]][Q[3617]][Q[863]] || z5bf_o[Q[37]][Q[3604]][Q[1179]](z5bf_o[Q[37]][Q[3617]]), z5bf_o[Q[37]]['VBn']();
    }, z5bf_o[Q[496]][Q[212]] = function () {
        this[Q[3617]] && this[Q[3617]][Q[863]] && (Laya[Q[556]][Q[1003]](this[Q[3617]]), this[Q[3617]][Q[637]](!0x0), this[Q[3617]] = null);
    }, z5bf_o[Q[496]]['_vUJVPH'] = function () {
        this[Q[3595]] || (this[Q[3595]] = !0x0, Laya[Q[553]][Q[625]](this['_vUJVP'], vnu1i[Q[536]](this, function () {
            vjtxg8q[Q[529]][Q[185]] = !0x0, vjtxg8q[Q[529]]['_vJVPH'](), vjtxg8q[Q[529]]['_vJPHV']();
        })));
    }, z5bf_o[Q[496]]['VOn'] = function () {
        z5bf_o[Q[37]][Q[3618]] || (z5bf_o[Q[37]][Q[3618]] = new vf5eoa(this[Q[3594]])), z5bf_o[Q[37]][Q[3618]][Q[863]] || z5bf_o[Q[37]][Q[3604]][Q[1179]](z5bf_o[Q[37]][Q[3618]]), z5bf_o[Q[37]]['VBn']();
    }, z5bf_o[Q[496]]['openJumpView'] = function (cn0, dz6p, fa75oe, _o6b5z) {
        void 0x0 === _o6b5z && (_o6b5z = !0x1), this['VOn'](), z5bf_o[Q[37]][Q[3618]]['openJumpView'](cn0, dz6p, fa75oe, _o6b5z);
    }, z5bf_o[Q[496]][Q[324]] = function (nc1$, m$c1, vkh3, tkxjq, xrtvk) {
        this['VOn'](), z5bf_o[Q[37]][Q[3618]][Q[3576]](nc1$, m$c1, vkh3, tkxjq, xrtvk);
    }, z5bf_o[Q[496]][Q[3619]] = function () {
        window[Q[187]] = window[Q[187]] || {};
        var txkq = Q[3592],
            mvh3ly = Q[3383];
        return 0x1 == sdkInitRes[Q[247]] ? 0x0 == (_vPJ[Q[3620]] || 0x0) ? txkq : mvh3ly : 0x0 == _vPJ[Q[3621]] ? txkq : mvh3ly;
    }, z5bf_o[Q[496]][Q[336]] = function (yh1m, kwvl3, whm3v) {
        var n$ui1 = this;
        this[Q[3594]] = whm3v || this[Q[3619]]();
        for (var fz_o5b = function () {
            n$ui1['VOn'](), yh1m && kwvl3 && yh1m[Q[498]](kwvl3);
        }, o6zb_5 = !0x0, vwk3 = 0x0, m3$ylh = this['_vUJVP']; vwk3 < m3$ylh[Q[10]]; vwk3++) {
            var chyl$ = m3$ylh[vwk3];
            if (null == Laya[Q[1468]][Q[631]](chyl$)) {
                o6zb_5 = !0x1;
                break;
            }
        }
        o6zb_5 ? fz_o5b() : Laya[Q[553]][Q[625]](this['_vUJVP'], vnu1i[Q[536]](this, fz_o5b));
    }, z5bf_o[Q[496]][Q[213]] = function () {
        this[Q[3618]] && this[Q[3618]][Q[863]] && (Laya[Q[556]][Q[1003]](this[Q[3618]]), this[Q[3618]][Q[637]](!0x0), this[Q[3618]] = null);
    }, z5bf_o[Q[496]][Q[3484]] = function () {
        this[Q[3596]] || (this[Q[3596]] = !0x0, Laya[Q[553]][Q[625]](this[Q[3581]], vnu1i[Q[536]](this, function () {
            vjtxg8q[Q[529]][Q[186]] = !0x0, vjtxg8q[Q[529]]['_vJVPH'](), vjtxg8q[Q[529]]['_vJPHV']();
        })));
    }, z5bf_o[Q[496]][Q[335]] = function (_7zo, t8xjqg) {
        void 0x0 === _7zo && (_7zo = 0x0), t8xjqg = t8xjqg || this[Q[3619]](), Laya[Q[553]][Q[625]](this[Q[3581]], vnu1i[Q[536]](this, function () {
            z5bf_o[Q[37]][Q[3622]] || (z5bf_o[Q[37]][Q[3622]] = new vmy$h3(_7zo, t8xjqg)), z5bf_o[Q[37]][Q[3622]][Q[863]] || z5bf_o[Q[37]][Q[3604]][Q[1179]](z5bf_o[Q[37]][Q[3622]]), z5bf_o[Q[37]]['VBn']();
        }));
    }, z5bf_o[Q[496]][Q[214]] = function () {
        this[Q[3622]] && this[Q[3622]][Q[863]] && (Laya[Q[556]][Q[1003]](this[Q[3622]]), this[Q[3622]][Q[637]](!0x0), this[Q[3622]] = null);
        for (var n0c1u = 0x0, $c1niu = this['_vUJVP']; n0c1u < $c1niu[Q[10]]; n0c1u++) {
            var qkjx = $c1niu[n0c1u];
            Laya[Q[1468]][Q[1343]](z5bf_o[Q[37]], qkjx), Laya[Q[1468]][Q[1465]](qkjx, !0x0);
        }
        for (var sjgxq8 = 0x0, rw3lk = this[Q[3581]]; sjgxq8 < rw3lk[Q[10]]; sjgxq8++) {
            qkjx = rw3lk[sjgxq8], (Laya[Q[1468]][Q[1343]](z5bf_o[Q[37]], qkjx), Laya[Q[1468]][Q[1465]](qkjx, !0x0));
        }
        this[Q[3604]][Q[863]] && this[Q[3604]][Q[863]][Q[1003]](this[Q[3604]]), this[Q[3615]]();
    }, z5bf_o[Q[496]][Q[467]] = function () {
        this[Q[3622]] && this[Q[3622]][Q[863]] && z5bf_o[Q[37]][Q[3622]][Q[466]]();
    }, z5bf_o[Q[496]][Q[3487]] = function () {
        var rqxwt = vjtxg8q[Q[529]][Q[16]][Q[23]];
        this['Vvn'] || (this['Vvn'] = !0x0, vjtxg8q[Q[529]][Q[16]][Q[23]] = rqxwt, _vJHVP(0x0, rqxwt[Q[24]]));
    }, z5bf_o[Q[496]][Q[3488]] = function () {
        var p069d = '';
        p069d += Q[3623] + vjtxg8q[Q[529]][Q[16]][Q[316]], p069d += Q[3624] + this[Q[3595]], p069d += Q[3625] + (null != z5bf_o[Q[37]][Q[3618]]), p069d += Q[3626] + this[Q[3596]], p069d += Q[3627] + (null != z5bf_o[Q[37]][Q[3622]]), p069d += Q[3628] + (vjtxg8q[Q[529]][Q[1435]] == z5bf_o[Q[37]][Q[3603]]), p069d += Q[3629] + (vjtxg8q[Q[529]][Q[1438]] == z5bf_o[Q[37]][Q[3603]]), p069d += Q[3630] + z5bf_o[Q[37]]['Vln'];
        for (var vklwr = 0x0, rwk3t = this['_vUJVP']; vklwr < rwk3t[Q[10]]; vklwr++) {
            p069d += ',\x20' + (c1hym$ = rwk3t[vklwr]) + '=' + (null != Laya[Q[1468]][Q[631]](c1hym$));
        }
        for (var feo75 = 0x0, nup20 = this[Q[3581]]; feo75 < nup20[Q[10]]; feo75++) {
            var c1hym$;
            p069d += ',\x20' + (c1hym$ = nup20[feo75]) + '=' + (null != Laya[Q[1468]][Q[631]](c1hym$));
        }
        var j8rx = vjtxg8q[Q[529]][Q[16]][Q[23]];
        j8rx && (p069d += Q[3631] + j8rx[Q[330]], p069d += Q[3632] + j8rx[Q[24]], p069d += Q[3633] + j8rx[Q[318]]);
        var xvkwt = JSON[Q[27]]({
            'error': Q[3634],
            'stack': p069d
        });
        console[Q[28]](xvkwt), this['VLn'] && this['VLn'] == p069d || (this['VLn'] = p069d, _vPHJ(xvkwt));
    }, z5bf_o[Q[496]]['Vdn'] = function () {
        var $uc1in = Laya[Q[556]],
            qg8tx = Math[Q[413]]($uc1in[Q[482]]),
            kqwtr = Math[Q[413]]($uc1in[Q[484]]);
        kqwtr / qg8tx < 1.7777778 ? (this[Q[3635]] = Math[Q[413]](qg8tx / (kqwtr / 0x500)), this[Q[3636]] = 0x500, this[Q[3637]] = kqwtr / 0x500) : (this[Q[3635]] = 0x2d0, this[Q[3636]] = Math[Q[413]](kqwtr / (qg8tx / 0x2d0)), this[Q[3637]] = qg8tx / 0x2d0);
        var _zb56 = Math[Q[413]]($uc1in[Q[482]]),
            obz5_f = Math[Q[413]]($uc1in[Q[484]]);
        obz5_f / _zb56 < 1.7777778 ? (this[Q[3635]] = Math[Q[413]](_zb56 / (obz5_f / 0x500)), this[Q[3636]] = 0x500, this[Q[3637]] = obz5_f / 0x500) : (this[Q[3635]] = 0x2d0, this[Q[3636]] = Math[Q[413]](obz5_f / (_zb56 / 0x2d0)), this[Q[3637]] = _zb56 / 0x2d0), this['VBn']();
    }, z5bf_o[Q[496]]['VBn'] = function () {
        this[Q[3604]] && (this[Q[3604]][Q[559]](this[Q[3635]], this[Q[3636]]), this[Q[3604]][Q[736]](this[Q[3637]], this[Q[3637]], !0x0));
    }, z5bf_o[Q[496]]['Vjn'] = function () {
        if (vvylmh3[Q[879]] && vjtxg8q[Q[916]]) {
            var tqrxj8 = parseInt(vvylmh3[Q[1717]][Q[1009]][Q[104]][Q[8]]('px', '')),
                up0n = parseInt(vvylmh3[Q[1661]][Q[1009]][Q[484]][Q[8]]('px', '')) * this[Q[3637]],
                l3vk = vjtxg8q[Q[1131]] / vlvhk[Q[560]][Q[482]];
            return 0x0 < (tqrxj8 = vjtxg8q[Q[1132]] - up0n * l3vk - tqrxj8) && (tqrxj8 = 0x0), void (vjtxg8q[Q[1029]][Q[1009]][Q[104]] = tqrxj8 + 'px');
        }
        vjtxg8q[Q[1029]][Q[1009]][Q[104]] = Q[1025];
        var m3lwv = Math[Q[413]](vjtxg8q[Q[482]]),
            i0nud2 = Math[Q[413]](vjtxg8q[Q[484]]);
        m3lwv = m3lwv + 0x1 & 0x7ffffffe, i0nud2 = i0nud2 + 0x1 & 0x7ffffffe;
        var fae547 = Laya[Q[556]];
        0x3 == ENV ? (fae547[Q[1676]] = Laya[Q[1766]][Q[1679]], fae547[Q[482]] = m3lwv, fae547[Q[484]] = i0nud2) : i0nud2 < m3lwv ? (fae547[Q[1676]] = Laya[Q[1766]][Q[1679]], fae547[Q[482]] = m3lwv, fae547[Q[484]] = i0nud2) : (fae547[Q[1676]] = Laya[Q[1766]][Q[1680]], fae547[Q[482]] = 0x348, fae547[Q[484]] = Math[Q[413]](i0nud2 / (m3lwv / 0x348)) + 0x1 & 0x7ffffffe), this['Vdn']();
    }, z5bf_o[Q[496]][Q[3603]] = function (gqt8xj, e5_) {
        function uinc$() {
            b56o_z[Q[1015]] = null, b56o_z[Q[547]] = null;
        }
        var b56o_z,
            iyu$ = gqt8xj;
        (b56o_z = new vjtxg8q[Q[529]][Q[1190]]())[Q[1015]] = function () {
            uinc$(), e5_(iyu$, 0xc8, b56o_z);
        }, b56o_z[Q[547]] = function () {
            console[Q[145]](Q[3638], iyu$), z5bf_o[Q[37]]['Vln'] += iyu$ + '|', uinc$(), e5_(iyu$, 0x194, null);
        }, b56o_z[Q[1393]] = iyu$, -0x1 == z5bf_o[Q[37]]['_vUJVP'][Q[110]](iyu$) && -0x1 == z5bf_o[Q[37]][Q[3581]][Q[110]](iyu$) || Laya[Q[1468]][Q[1460]](z5bf_o[Q[37]], iyu$);
    }, z5bf_o[Q[496]]['VSn'] = function (vkxr, zb9d6p) {
        return -0x1 != vkxr[Q[110]](zb9d6p, vkxr[Q[10]] - zb9d6p[Q[10]]);
    }, z5bf_o;
}();
!function (xw) {
    var d02u, cym$h1;
    d02u = xw['Vx'] || (xw['Vx'] = {}), cym$h1 = function (rxwk) {
        function u$1y() {
            var un0pd = rxwk[Q[498]](this) || this;
            return un0pd['Vwn'] = Q[3639], un0pd['Vsn'] = Q[3640], un0pd[Q[482]] = 0x112, un0pd[Q[484]] = 0x3b, un0pd['VCn'] = new Laya[Q[1190]](), un0pd[Q[1179]](un0pd['VCn']), un0pd['Vtn'] = new Laya[Q[2234]](), un0pd['Vtn'][Q[622]] = 0x1e, un0pd['Vtn'][Q[681]] = un0pd['Vsn'], un0pd[Q[1179]](un0pd['Vtn']), un0pd['Vtn'][Q[2118]] = 0x0, un0pd['Vtn'][Q[2119]] = 0x0, un0pd;
        }
        return vtwrk(u$1y, rxwk), u$1y[Q[496]][Q[2144]] = function () {
            rxwk[Q[496]][Q[2144]][Q[498]](this), this['VW'] = vjtxg8q[Q[529]][Q[16]], this['VW'][Q[183]], this[Q[3482]]();
        }, Object[Q[504]](u$1y[Q[496]], Q[2154], {
            'set': function (trqxkw) {
                trqxkw && this[Q[2529]](trqxkw);
            },
            'enumerable': !0x0,
            'configurable': !0x0
        }), u$1y[Q[496]][Q[2529]] = function (g8tx) {
            this['Vrn'] = g8tx[0x0], this['VJn'] = g8tx[0x1], this['Vtn'][Q[407]] = this['Vrn'][Q[1253]], this['Vtn'][Q[681]] = this['VJn'] ? this['Vwn'] : this['Vsn'], this['VCn'][Q[1196]] = this['VJn'] ? Q[3454] : Q[3590];
        }, u$1y[Q[496]][Q[637]] = function (l3yhv) {
            void 0x0 === l3yhv && (l3yhv = !0x0), this[Q[3483]](), rxwk[Q[496]][Q[637]][Q[498]](this, l3yhv);
        }, u$1y[Q[496]][Q[3482]] = function () {}, u$1y[Q[496]][Q[3483]] = function () {}, u$1y;
    }(Laya['View']), d02u[Q[3547]] = cym$h1;
}(modules || (modules = {})), function (lkwv3h) {
    var _fz5b, n209dp;
    _fz5b = lkwv3h['Vx'] || (lkwv3h['Vx'] = {}), n209dp = function (b2d9) {
        function jtkrxq() {
            var mvl3y = b2d9[Q[498]](this) || this;
            return mvl3y['Vwn'] = Q[3639], mvl3y['Vsn'] = Q[3640], mvl3y[Q[482]] = 0x112, mvl3y[Q[484]] = 0x3b, mvl3y['VCn'] = new Laya[Q[1190]](), mvl3y[Q[1179]](mvl3y['VCn']), mvl3y['Vtn'] = new Laya[Q[2234]](), mvl3y['Vtn'][Q[622]] = 0x1e, mvl3y['Vtn'][Q[681]] = mvl3y['Vsn'], mvl3y[Q[1179]](mvl3y['Vtn']), mvl3y['Vtn'][Q[2118]] = 0x0, mvl3y['Vtn'][Q[2119]] = 0x0, mvl3y;
        }
        return vtwrk(jtkrxq, b2d9), jtkrxq[Q[496]][Q[2144]] = function () {
            b2d9[Q[496]][Q[2144]][Q[498]](this), this['VW'] = vjtxg8q[Q[529]][Q[16]], this['VW'][Q[183]], this[Q[3482]]();
        }, Object[Q[504]](jtkrxq[Q[496]], Q[2154], {
            'set': function (z_b56o) {
                z_b56o && this[Q[2529]](z_b56o);
            },
            'enumerable': !0x0,
            'configurable': !0x0
        }), jtkrxq[Q[496]][Q[2529]] = function (boz5) {
            this['Ven'] = boz5[0x0], this['VJn'] = boz5[0x1], this['Vtn'][Q[407]] = this['Ven'], this['Vtn'][Q[681]] = this['VJn'] ? this['Vwn'] : this['Vsn'], this['VCn'][Q[1196]] = this['VJn'] ? Q[3454] : Q[3590];
        }, jtkrxq[Q[496]][Q[637]] = function (bz_96) {
            void 0x0 === bz_96 && (bz_96 = !0x0), this[Q[3483]](), b2d9[Q[496]][Q[637]][Q[498]](this, bz_96);
        }, jtkrxq[Q[496]][Q[3482]] = function () {}, jtkrxq[Q[496]][Q[3483]] = function () {}, jtkrxq;
    }(Laya['View']), _fz5b[Q[3548]] = n209dp;
}(modules || (modules = {})), function (upn2d0) {
    var foae, cui1;
    foae = upn2d0['Vx'] || (upn2d0['Vx'] = {}), cui1 = function (wklhv3) {
        function a4fe() {
            var lyhm$c = wklhv3[Q[498]](this) || this;
            return lyhm$c[Q[482]] = 0xc0, lyhm$c[Q[484]] = 0x46, lyhm$c['VCn'] = new Laya[Q[1190]](), lyhm$c[Q[1179]](lyhm$c['VCn']), lyhm$c['Vna'] = new Laya[Q[2234]](), lyhm$c['Vna'][Q[622]] = 0x1c, lyhm$c['Vna'][Q[681]] = lyhm$c['VB'], lyhm$c[Q[1179]](lyhm$c['Vna']), lyhm$c['Vna'][Q[2118]] = 0x0, lyhm$c['Vna'][Q[2119]] = 0x0, lyhm$c['Vaa'] = new Laya[Q[2234]](), lyhm$c['Vaa'][Q[622]] = 0x16, lyhm$c['Vaa'][Q[681]] = lyhm$c['VB'], lyhm$c[Q[1179]](lyhm$c['Vaa']), lyhm$c['Vaa'][Q[2118]] = 0x0, lyhm$c['Vaa']['y'] = 0xb, lyhm$c['VUa'] = new Laya[Q[2234]](), lyhm$c['VUa'][Q[622]] = 0x1a, lyhm$c['VUa'][Q[681]] = lyhm$c['VB'], lyhm$c[Q[1179]](lyhm$c['VUa']), lyhm$c['VUa'][Q[2118]] = 0x0, lyhm$c['VUa']['y'] = 0x27, lyhm$c;
        }
        return vtwrk(a4fe, wklhv3), a4fe[Q[496]][Q[2144]] = function () {
            wklhv3[Q[496]][Q[2144]][Q[498]](this), this['VW'] = vjtxg8q[Q[529]][Q[16]];
            var jqg8t = this['VW'][Q[183]];
            this['VB'] = 0x1 == jqg8t ? Q[3640] : 0x2 == jqg8t ? Q[3640] : 0x3 == jqg8t ? Q[3641] : Q[3640], this[Q[3482]]();
        }, Object[Q[504]](a4fe[Q[496]], Q[2154], {
            'set': function (lmy) {
                lmy && this[Q[2529]](lmy);
            },
            'enumerable': !0x0,
            'configurable': !0x0
        }), a4fe[Q[496]][Q[2529]] = function (rxj8t) {
            this['Vrn'] = rxj8t;
            var r3vw = this['Vrn']['id'],
                s8gq = this['Vrn'][Q[605]];
            if (this['Vna'][Q[644]] = this['Vaa'][Q[644]] = this['VUa'][Q[644]] = !0x1, -0x1 == r3vw || -0x2 == r3vw) this['Vna'][Q[644]] = !0x0, this['Vna'][Q[407]] = s8gq;else {
                var lhw3m = s8gq,
                    o7f_5z = Q[3642],
                    jtgqx = s8gq[Q[9]](Q[3643]);
                jtgqx && null != jtgqx[Q[1544]] && (lhw3m = s8gq[Q[549]](0x0, jtgqx[Q[1544]]), o7f_5z = s8gq[Q[549]](jtgqx[Q[1544]])), this['Vaa'][Q[644]] = this['VUa'][Q[644]] = !0x0, this['Vaa'][Q[407]] = lhw3m, this['VUa'][Q[407]] = o7f_5z;
            }
            this['VCn'][Q[1196]] = rxj8t[Q[832]] ? Q[3587] : Q[3588];
        }, a4fe[Q[496]][Q[637]] = function (ob5z_) {
            void 0x0 === ob5z_ && (ob5z_ = !0x0), this[Q[3483]](), wklhv3[Q[496]][Q[637]][Q[498]](this, ob5z_);
        }, a4fe[Q[496]][Q[3482]] = function () {
            this['on'](Laya[Q[1763]][Q[793]], this, this[Q[3644]]);
        }, a4fe[Q[496]][Q[3483]] = function () {
            this[Q[596]](Laya[Q[1763]][Q[793]], this, this[Q[3644]]);
        }, a4fe[Q[496]][Q[3644]] = function () {
            this['Vrn'] && this['Vrn'][Q[3563]] && this['Vrn'][Q[3563]](this['Vrn'][Q[1544]]);
        }, a4fe;
    }(Laya['View']), foae[Q[3545]] = cui1;
}(modules || (modules = {})), function (d2npu0) {
    var lhkv3, tvrxwk;
    lhkv3 = d2npu0['Vx'] || (d2npu0['Vx'] = {}), tvrxwk = function ($cun1) {
        function iy$cm() {
            var p6920 = $cun1[Q[498]](this) || this;
            return p6920[Q[482]] = 0x166, p6920[Q[484]] = 0x46, p6920['VCn'] = new Laya[Q[1190]](Q[3589]), p6920[Q[1179]](p6920['VCn']), p6920['VCn'][Q[641]][Q[752]](0x0, 0x0, p6920[Q[482]], p6920[Q[484]], Q[3645]), p6920['Vxa'] = new Laya[Q[1190]](), p6920['Vxa'][Q[2119]] = 0x0, p6920['Vxa']['x'] = 0x7, p6920[Q[1179]](p6920['Vxa']), p6920['Vna'] = new Laya[Q[2234]](), p6920['Vna'][Q[622]] = 0x18, p6920['Vna'][Q[681]] = p6920['VB'], p6920['Vna']['x'] = 0x38, p6920['Vna'][Q[2119]] = 0x0, p6920[Q[1179]](p6920['Vna']), p6920['VDa'] = new Laya[Q[2234]](), p6920['VDa'][Q[622]] = 0x18, p6920['VDa'][Q[681]] = p6920['VB'], p6920['VDa']['x'] = 0xf6, p6920['VDa'][Q[2119]] = 0x0, p6920[Q[1179]](p6920['VDa']), p6920['Vpa'] = new Laya[Q[1190]](), p6920['Vpa'][Q[104]] = 0x0, p6920['Vpa'][Q[107]] = 0x0, p6920[Q[1179]](p6920['Vpa']), p6920['VQa'] = new Laya[Q[2234]](), p6920['VQa'][Q[622]] = 0x14, p6920['VQa'][Q[681]] = Q[1269], p6920['VQa']['x'] = 0xe1, p6920['VQa']['y'] = 0x2e, p6920[Q[1179]](p6920['VQa']), p6920;
        }
        return vtwrk(iy$cm, $cun1), iy$cm[Q[496]][Q[2144]] = function () {
            $cun1[Q[496]][Q[2144]][Q[498]](this), this['VW'] = vjtxg8q[Q[529]][Q[16]];
            var $ymhl3 = this['VW'][Q[183]];
            this['VB'] = 0x1 == $ymhl3 ? Q[3646] : 0x2 == $ymhl3 ? Q[3646] : 0x3 == $ymhl3 ? Q[3641] : Q[3646], this[Q[3482]]();
        }, Object[Q[504]](iy$cm[Q[496]], Q[2154], {
            'set': function (pdb9z6) {
                pdb9z6 && this[Q[2529]](pdb9z6);
            },
            'enumerable': !0x0,
            'configurable': !0x0
        }), iy$cm[Q[496]][Q[2529]] = function (zd96bp) {
            this['Vrn'] = zd96bp;
            var l3hm$ = this['Vrn'][Q[330]],
                rtqjxk = this['Vrn'][Q[318]];
            this['Vxa'][Q[1196]] = lhkv3[Q[3485]][Q[3529]](this['Vrn']), this['Vna'][Q[681]] = lhkv3[Q[3485]][Q[3540]](l3hm$, this['VB']), this['Vna'][Q[407]] = rtqjxk, this['VDa'][Q[407]] = lhkv3[Q[3485]][Q[3536]](this['Vrn']);
            var $un1ic = lhkv3[Q[3485]][Q[3524]](this['Vrn'][Q[323]]);
            (this['Vpa'][Q[644]] = $un1ic) && (this['Vpa'][Q[1196]] = Q[3593]), this['VQa'][Q[407]] = -0x1 == this['Vrn'][Q[330]] && this['Vrn'][Q[322]] ? this['Vrn'][Q[322]] : '';
        }, iy$cm[Q[496]][Q[637]] = function (whvm3l) {
            void 0x0 === whvm3l && (whvm3l = !0x0), this[Q[3483]](), $cun1[Q[496]][Q[637]][Q[498]](this, whvm3l);
        }, iy$cm[Q[496]][Q[3482]] = function () {
            this['on'](Laya[Q[1763]][Q[793]], this, this[Q[3644]]);
        }, iy$cm[Q[496]][Q[3483]] = function () {
            this[Q[596]](Laya[Q[1763]][Q[793]], this, this[Q[3644]]);
        }, iy$cm[Q[496]][Q[3644]] = function () {
            this['Vrn'] && this['Vrn'][Q[3563]] && this['Vrn'][Q[3563]](this['Vrn']);
        }, iy$cm;
    }(Laya['View']), lhkv3[Q[3546]] = tvrxwk;
}(modules || (modules = {})), function (p6_bz9) {
    var u2ind, mvhw3, _b6p;
    u2ind = p6_bz9['VFn'] || (p6_bz9['VFn'] = {}), mvhw3 = Laya[Q[2963]], _b6p = function (wvr3kt) {
        function jr8tq() {
            var vhmyl3 = wvr3kt[Q[498]](this) || this;
            return vhmyl3[Q[2960]](Q[3647]), vhmyl3[Q[1905]] = mvhw3[Q[2966]], vhmyl3[Q[2950]] = mvhw3[Q[2970]], vhmyl3[Q[2948]] = mvhw3[Q[2968]], vhmyl3[Q[2949]] = mvhw3[Q[2967]], vhmyl3[Q[2552]] = mvhw3[Q[2965]], vhmyl3[Q[2952]] = !0x1, vhmyl3[Q[2951]] = mvhw3[Q[3648]], vhmyl3[Q[1516]](), vhmyl3;
        }
        return vtwrk(jr8tq, wvr3kt), Object[Q[504]](jr8tq[Q[496]], Q[3610], {
            'get': function () {
                return this[Q[2955]](0x17);
            },
            'set': function (xqr8jt) {
                this[Q[2954]](0x17, xqr8jt);
            },
            'enumerable': !0x0,
            'configurable': !0x0
        }), Object[Q[504]](jr8tq[Q[496]], Q[3611], {
            'get': function () {
                return this[Q[2955]](0x18);
            },
            'set': function (klwr3) {
                this[Q[2954]](0x18, klwr3);
            },
            'enumerable': !0x0,
            'configurable': !0x0
        }), Object[Q[504]](jr8tq[Q[496]], Q[3612], {
            'get': function () {
                return this[Q[2955]](0x19);
            },
            'set': function ($ci1my) {
                this[Q[2954]](0x19, $ci1my);
            },
            'enumerable': !0x0,
            'configurable': !0x0
        }), Object[Q[504]](jr8tq[Q[496]], Q[2405], {
            'get': function () {
                return this[Q[2955]](0x1a);
            },
            'set': function (i0du) {
                this[Q[2954]](0x1a, i0du);
            },
            'enumerable': !0x0,
            'configurable': !0x0
        }), jr8tq[Q[244]] = function () {
            Laya[Q[2928]][Q[1005]](Laya[Q[3649]][Q[2077]][Q[1005]](Q[3647]), 'attribute vec4 a_Position;\nattribute vec2 a_Texcoord0; \nuniform mat4 u_MvpMatrix;\nvarying vec2 v_Texcoord;\nvoid main(){\n  gl_Position = u_MvpMatrix * a_Position;\n  v_Texcoord = a_Texcoord0;\n}', '#ifdef HIGHPRECISION\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nuniform float u_randomSeed;\nuniform float u_grainSizeX;\nuniform float u_grainSizeY;\nuniform float u_intensity;\nvarying vec2 v_Texcoord;\nvoid main(){\n  vec2 magicVec2 = vec2(0.0041,0.0111);\n  float magicNum = 2747.0;\n  float uvX = floor(v_Texcoord.x/u_grainSizeX)*u_grainSizeX;\n  float uvY = floor(v_Texcoord.y/u_grainSizeY)*u_grainSizeY;\n  float uvValue = uvX + uvY;\n  float seed1 = fract(uvValue*u_randomSeed*magicNum*magicVec2.x + magicVec2.y);\n  float seed2 = fract(seed1*magicNum*magicVec2.x + magicVec2.y);\n  float seed3 = fract(seed2*magicNum*magicVec2.x + magicVec2.y);\n  float seedr = fract(seed3*magicNum*magicVec2.x + magicVec2.y);\n  float seedg = fract(seedr*magicNum*magicVec2.x + magicVec2.y);\n  float seedb = fract(seedg*magicNum*magicVec2.x + magicVec2.y);\n  gl_FragColor = vec4(seedr,seedg,seedb,u_intensity);\n}', {
                'a_Position': Laya['VertexElementUsage'][Q[2671]],
                'a_Texcoord0': Laya['VertexElementUsage'][Q[2672]]
            }, {
                'u_MvpMatrix': [Laya[Q[2815]]['MVPMATRIX'], Laya[Q[3649]][Q[3024]]],
                'u_randomSeed': [0x17, Laya[Q[3649]][Q[3023]]],
                'u_grainSizeX': [0x18, Laya[Q[3649]][Q[3023]]],
                'u_grainSizeY': [0x19, Laya[Q[3649]][Q[3023]]],
                'u_intensity': [0x1a, Laya[Q[3649]][Q[3023]]]
            });
        }, jr8tq;
    }(Laya[Q[2963]]), u2ind['Vfn'] = _b6p;
}(modules || (modules = {})), window[Q[36]] = vxkrqj;