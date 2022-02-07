"use strict";
var initPanel = {
    
    p_serverListView: null,
    p_groupItemsDiv: null,
    p_serverItemsDiv: null,
    p_groupItems: null,
    p_serverItems: null,
    p_selectGroup: null,
    p_groupItemWH: 192,
    p_serverItemWH: 358,

    p_noticeView: null,
    p_noticeDiv: null,
    p_noticeTitle: null,
    p_noticeContent: null,
    
    p_multiNoticeView: null,
    p_multiNoticeDiv: null,
    p_multiNoticeTitle: null,
    p_multiNoticeContent: null,
    p_multiNoticeTabDiv: null,
    p_multiNoticeCloseBtn: null,
    p_multiNoticeItems: [],
    p_multiNoticeTabW: 274,
    p_multiNoticeTabH: 59,
    p_multiNoticeData: [],
    p_multiNoticeSelIdx: -1,
    p_multiNoticeKey: "multi_notice_key",

    p_privacyData: PF_INFO.pkg_protocol_list && PF_INFO.pkg_protocol_list.list ? PF_INFO.pkg_protocol_list.list : [],
    p_privacyState1: PF_INFO.pkg_protocol_list && PF_INFO.pkg_protocol_list.jump_url && PF_INFO.pkg_protocol_list.jump_url != "",
    p_privacyState2: PF_INFO.pkg_protocol_list && PF_INFO.pkg_protocol_list.list &&  PF_INFO.pkg_protocol_list.list.length > 0,
    p_privacyBgCfg: PF_INFO.privacy_login_pkg != undefined ? PF_INFO.privacy_login_pkg : 0,
    p_privacyIsSave: PF_INFO.privacy_save_pkg != 0,
    p_isApplyPrivacy: true,
    p_privacyView: null,
    p_privacyDiv: null,
    p_privacyTitle: null,
    p_privacyContent: null,
    p_privacyTabDiv: null,
    p_privacyCloseBtn: null,
    p_privacyItems: [],
    p_privacyTabW: 274,
    p_privacyTabH: 59,
    p_privacySelIdx: -1,
    p_privacyKey: "privacy_key",

    p_statusImg: null,
    p_nameTxt: null,
    p_promptTxt: null,

    p_cdn: "",
    p_atlas: "login_atlas_" + (PF_INFO.game_view_type_pkg ? PF_INFO.game_view_type_pkg : 0) + "/",
    p_serTxtColor: PF_INFO.game_view_type_pkg ? 
        (PF_INFO.game_view_type_pkg == 8 ? " #663300" : "#feffc0") : "#93353b",
    p_isShowIdent: PF_INFO.identification_show_pkg != 0,
    p_isShowCheat: PF_INFO.anti_cheat_pkg == 1,
    p_serItemLColorY: "#72441d",//左侧组选中时文字颜色
    p_serItemLColorN: "#263d7d",//左侧组未选中时文字颜色
    p_serItemRColor: "#34267d",//右侧服文字颜色

    p_defaultTime: 5000,
    p_defaultServerId: "",
    p_currGroupId: -2,
    p_canRefresh: false,

    p_enterTip: null,
    p_enterTime: 20,
    p_enterInterval: 0,

    p_formatUrl: function (url) {
        var v = configs[url];
        var idx = url.lastIndexOf(".");
        if (!DEBUG && v && idx!=-1) {
            url = this.p_cdn + "versions/" + url.slice(0, idx) + "__" + v + url.slice(idx, url.length);
        } else {
            url = this.p_cdn + url + "?v=" + configs["lastVersion"];
        }
        return url;
    },
    p_getElement: function (tag, style, id) {
        var e = document.createElement(tag);
        if (id) e.id = id;
        e.style.cssText = style;
        return e;
    },
    p_getImgElement: function (src, style, id) {
        var e = this.p_getElement("img", style, id);
        e.src = this.p_formatUrl(src);
        return e;
    },
    p_getStatusSrc: function (status) {
        var str = "";
        if (status === 2)
            str = this.p_atlas +"image_login_changtong.png";
        else if (status === 1)
            str = this.p_atlas +"image_login_fanmang.png";
        else if (status === -1 || status === 0)
            str = this.p_atlas +"image_login_weihu.png";
        return str;
    },
    p_getDefaultTime: function (status) {
        var _this = this;
        _this.p_defaultTime = _this.p_defaultTime === 5000 ? 10000 : _this.p_defaultTime === 10000 ? 20000 : _this.p_defaultTime === 20000 ? 40000 : _this.p_defaultTime === 40000 ? 60000 : 60000;
    },
    p_clearDefaultTimeout: function () {
        var _this = this;
        if (_this.p_defaultTimeoutId > 0) clearTimeout(_this.p_defaultTimeoutId);
        _this.p_defaultTimeoutId = 0;
    },
    p_clearServerListTimeout: function () {
        var _this = this;
        if (_this.p_serverListTimeoutId > 0) clearTimeout(_this.p_serverListTimeoutId);
        _this.p_serverListTimeoutId = 0;
    },


    p_createGroupItem: function (group) {
        var _this = this;
        var div = _this.p_getElement("div", "position:absolute;width:"+ _this.p_groupItemWH +"px;height:76px;");
        div.appendChild(_this.p_getImgElement(_this.p_atlas +"btn_xuanqu_anniulan.png", "position:absolute;"));
        var txt = _this.p_getElement("label", "position:absolute;top:22px;width:192px;height:32px;line-height:23px;text-align:center;color:" + this.p_serItemLColorN + ";font-size:30px;pointer-events:none;");
        div.appendChild(txt);
        txt.innerText = group.name;
        return div;
    },
    p_createServerItem: function (server) {
        var _this = this;
        var div = _this.p_getElement("div", "position:absolute;width:"+ _this.p_serverItemWH +"px;height:66px;");
        div.appendChild(_this.p_getImgElement(_this.p_atlas +"btn_xuanqu_quanniu.png", "position:absolute;"));
        var img = _this.p_getImgElement(_this.p_getStatusSrc(server.status), "position:absolute;left:18px;top:16px;");
        div.appendChild(img);
        var txt = _this.p_getElement("label", "position:absolute;left:80px;top:18px;color:" + this.p_serItemRColor + ";line-height:32px;font-size:30px;pointer-events:none;");
        div.appendChild(txt);
        div.getElementsByTagName("label")[0].style.color = server.status === -1 ? "#d50000" : server.status === 0 ? "#49575a" : this.p_serItemRColor;
        txt.innerText = server.status === -1 ? server.server_name + "(维护中)" : server.status === 0 ? server.server_name + "(待开服)" : server.server_name;
        return div;
    },
    p_createMultiNoticeItem: function (idx, data) {
        var _this = this;
        var div = _this.p_getElement("div", "position:absolute;width:"+ _this.p_multiNoticeTabW +"px;height:" + _this.p_multiNoticeTabH + "px;");
        div.appendChild(_this.p_getImgElement(_this.p_atlas +"btn_com_long0.png", "position:absolute;"));
        var txt = _this.p_getElement("label", "position:absolute;top:" + (_this.p_multiNoticeTabH - 30) / 2 + "px;width:" + _this.p_multiNoticeTabW + "px;height:30px;line-height:30px;text-align:center;color:" + _this.p_serItemLColorN + ";font-size:30px;pointer-events:none;");
        div.appendChild(txt);
        txt.innerText = data.title ? data.title : "null";
        div.onclick = function () {
            _this.p_selMultiNotice(idx);
        };
        return div;
    },
    p_createPrivacyItem: function (idx, data) {
        var _this = this;
        var div = _this.p_getElement("div", "position:absolute;width:"+ _this.p_privacyTabW +"px;height:" + _this.p_privacyTabH + "px;");
        div.appendChild(_this.p_getImgElement(_this.p_atlas +"btn_com_long0.png", "position:absolute;"));
        var txt = _this.p_getElement("label", "position:absolute;top:" + (_this.p_privacyTabH - 30) / 2 + "px;width:" + _this.p_privacyTabW + "px;height:30px;line-height:30px;text-align:center;color:" + _this.p_serItemLColorN + ";font-size:30px;pointer-events:none;");
        div.appendChild(txt);
        txt.innerText = data.title ? data.title : "null";
        div.onclick = function () {
            _this.p_selPrivacy(idx);
        };
        return div;
    },
    p_clearItems: function (items) {
        if (items && items.length > 0) {
            for (var i = 0, len = items.length; i < len; i++) {
                items[i].remove();
            }
            items.length = 0;
        }
    },


    p_showServer: function (server) {
        var _this = this;
        _this.p_nameTxt.innerText = server.status === -1 ? server.server_name + "(维护中)" : server.status === 0 ? server.server_name + "(待开服)" : server.server_name;
        _this.p_nameTxt.style.color = server.status === -1 ? "#d50000" : server.status === 0 ? "#49575a" : _this.p_serTxtColor;
        _this.p_statusImg.src = _this.p_formatUrl(_this.p_getStatusSrc(server.status));
        PF_INFO.cdn = server.cdn || "";
        PF_INFO.selectedServer = server;
        // 如果选中的服务器在维护中、待开服，玩家没有别的操作的时候，会自动刷新状态
        if ((server.status === -1 || server.status === 0) && server.server_id === _this.p_defaultServerId && _this.p_canRefresh) {
            var fun3 = function () {
                req_refresh_default_server(_this.p_onDefaultCallback.bind(_this));
                _this.p_getDefaultTime();
            };
            _this.p_defaultTimeoutId = setTimeout(fun3, _this.p_defaultTime);
        } 
        else {
            _this.p_clearDefaultTimeout();
            _this.p_defaultTime = 5000;
        }

    },
    showGroupList: function () {
        var _this = this;
        _this.p_clearItems(_this.p_groupItems);
        var groups = PF_INFO.groupList;
        if (!groups || groups.length === 0) return;
        _this.p_groupItems = _this.p_groupItems || {};
        var groupList = function (i, len) {
            var id = groups[i].id;
            var div = _this.p_createGroupItem(groups[i]);
            _this.p_groupItemsDiv.appendChild(div);
            div.style.top = i * 74 + "px";
            div.onclick = function () {
                _this.p_currGroupId = id;
                _this.p_clearServerListTimeout();
                _this.p_defaultTime = 5000;
                if (PF_INFO.serverList[id]) {
                    _this.showServerList(id);
                } else {
                    if (!PF_INFO.hasServerReq) {
                        PF_INFO.hasServerReq = true;
                        if (id == -1)
                            req_server_owner(0);
                        else if( id == -2) {
                            req_recommend_server_list(0);
                        }else {
                            req_server_list(0, id);
                        }                            
                    }
                }
            };
            _this.p_groupItems[id] = div;
        };
        for (var i = 0, len = groups.length; i < len; i++) {
            groupList(i, len);
        }
        req_server_owner();
    },
    showServerList: function (groupid) {
        if (!PF_INFO.serverList[groupid]) return;
        var _this = this;
        var arr = PF_INFO.serverList[groupid];
        if (_this.p_selectGroup) {//还原旧选择项样式
            _this.p_selectGroup.getElementsByTagName("img")[0].src = _this.p_formatUrl(_this.p_atlas +"btn_xuanqu_anniulan.png");
            _this.p_selectGroup.getElementsByTagName("label")[0].style.color = this.p_serItemLColorN;
        }
        _this.p_selectGroup = _this.p_groupItems[groupid];//设置新选择项样式
        _this.p_selectGroup.getElementsByTagName("img")[0].src = _this.p_formatUrl(_this.p_atlas +"btn_xuanqu_anniuhuang.png");
        _this.p_selectGroup.getElementsByTagName("label")[0].style.color = this.p_serItemLColorY;
        _this.p_clearItems(_this.p_serverItems);
        _this.p_serverItems = _this.p_serverItems || [];
        _this.p_currServerRefresh = false;
        var serverList = function (i, len) {
            var div = _this.p_createServerItem(arr[i]);
            _this.p_serverItemsDiv.appendChild(div);
            _this.p_serverItems[i] = div;
            div.style.top = i * 74 + "px";
            div.onclick = function () {
                if (_this.p_canSelect(arr[i])){
                    _this.p_currServerRefresh = false;
                    _this.p_clearServerListTimeout();
                    _this.p_defaultTime = 5000;
                    _this.p_canRefresh = true;
                    _this.p_clearDefaultTimeout();
                    _this.p_showServer(arr[i]);
                    _this.p_serverListView.style.visibility = "hidden";
                }
            };
            if (arr[i].status === -1 || arr[i].status === 0) {   // 如果该列表有维护中的或者待开启的，则定时刷新
                _this.p_currServerRefresh = true;
            }
        };
        for (var i = 0, len = arr.length; i < len; i++) {
            serverList(i, len);
        }
        if (_this.p_currServerRefresh) {    // 改列表有维护中的区服，需要定时刷新该列表的状态
            _this.p_clearServerListTimeout();
            if(groupid != -1 && groupid != -2) {
                var fun1 = function () {
                    req_server_list(0, groupid);
                };
                _this.p_serverListTimeoutId = setTimeout(fun1, _this.p_defaultTime);
            } else if(groupid == -2) {
                var fun3 = function () {
                    req_recommend_server_list(0);
                };
                _this.p_serverListTimeoutId = setTimeout(fun3, _this.p_defaultTime);
            } else {
                var fun2 = function () {
                    req_server_owner(0);
                    _this.p_getDefaultTime();
                };
                _this.p_serverListTimeoutId = setTimeout(fun2, _this.p_defaultTime);
            }
        }
    },
    p_showMultiNoticeList: function() {
        var _this = this;
        _this.p_clearItems(_this.p_multiNoticeItems);
        _this.p_multiNoticeItems = _this.p_multiNoticeItems || [];
        var noticeDatas = _this.p_multiNoticeData;
        if (!noticeDatas || noticeDatas.length === 0) return;
        var statX = noticeDatas.length > 2 ? 0 : ((596 - noticeDatas.length * _this.p_multiNoticeTabW) / 2);
        for (var i = 0; i < noticeDatas.length; i++) {
            var data = noticeDatas[i];
            var itemDiv = _this.p_createMultiNoticeItem(i, data);
            _this.p_multiNoticeTabDiv.appendChild(itemDiv);
            itemDiv.style.left = statX + i * _this.p_multiNoticeTabW + "px";
            _this.p_multiNoticeItems[i] = itemDiv;
        }
        _this.p_selMultiNotice(-1);
    },
    p_showPrivacyList: function() {
        var _this = this;
        _this.p_clearItems(_this.p_privacyItems);
        _this.p_privacyItems = _this.p_privacyItems || [];
        var privacyDatas = _this.p_privacyData;
        if (!privacyDatas || privacyDatas.length === 0) return;
        var statX = privacyDatas.length > 2 ? 0 : ((596 - privacyDatas.length * _this.p_privacyTabW) / 2);
        for (var i = 0; i < privacyDatas.length; i++) {
            var data = privacyDatas[i];
            var itemDiv = _this.p_createPrivacyItem(i, data);
            _this.p_privacyTabDiv.appendChild(itemDiv);
            itemDiv.style.left = statX + i * _this.p_privacyTabW + "px";
            _this.p_privacyItems[i] = itemDiv;
        }
        _this.p_selPrivacy(-1);
    },
    p_selMultiNotice: function(idx) {
        var _this = this;
        //更新标签
        var oldItem = _this.p_multiNoticeItems[_this.p_multiNoticeSelIdx];
        if (oldItem) {//还原旧选择项样式
            oldItem.getElementsByTagName("img")[0].src = _this.p_formatUrl(_this.p_atlas +"btn_com_long0.png");
            oldItem.getElementsByTagName("label")[0].style.color = _this.p_serItemLColorN;
        }
        var newItem = _this.p_multiNoticeItems[idx];
        if (newItem) {
            newItem.getElementsByTagName("img")[0].src = _this.p_formatUrl(_this.p_atlas +"btn_com_long1.png");
            newItem.getElementsByTagName("label")[0].style.color = _this.p_serItemLColorY;
        }
        //更新公告显示
        var data = _this.p_multiNoticeData[idx];
        _this.p_multiNoticeTitle.innerText = data && data.title ? data.title : "暂无公告";
        _this.p_multiNoticeContent.innerHTML = data && data.content ? data.content : "";
        //更新选择的索引
        _this.p_multiNoticeSelIdx = idx;
    },
    p_selPrivacy: function(idx) {
        var _this = this;
        //更新标签
        var oldItem = _this.p_privacyItems[_this.p_privacySelIdx];
        if (oldItem) {//还原旧选择项样式
            oldItem.getElementsByTagName("img")[0].src = _this.p_formatUrl(_this.p_atlas +"btn_com_long0.png");
            oldItem.getElementsByTagName("label")[0].style.color = _this.p_serItemLColorN;
        }
        var newItem = _this.p_privacyItems[idx];
        if (newItem) {
            newItem.getElementsByTagName("img")[0].src = _this.p_formatUrl(_this.p_atlas +"btn_com_long1.png");
            newItem.getElementsByTagName("label")[0].style.color = _this.p_serItemLColorY;
        }
        //更新公告显示
        var data = _this.p_privacyData[idx];
        _this.p_privacyTitle.innerText = data && data.title ? data.title : "空";
        _this.p_privacyContent.innerHTML = data && data.content ? data.content : "";
        //更新选择的索引
        _this.p_privacySelIdx = idx;
    },


    p_onDefaultCallback: function (data) {
        var _this = this;
        if (!data) {  // 推荐服暂时没刷新后的数据返回，用旧的
            if (_this.p_canRefresh) {   // 此时定时器没关还可以刷新，则
                _this.p_showServer(PF_INFO.selectedServer)
            }
        }
    },
    p_onNoticeCallback: function (data) {
        var _this = this;
        _this.p_noticeContent.innerText = data.data.content ? data.data.content : '';
        _this.p_noticeTitle.innerText = data.data.title ? data.data.title : '暂无公告';
    },
    p_onMultiNoticeCallback: function (param) {
        console.log("onMultiNoticeCallback, param = ", param);
        var _this = this;
        var nowTm = Date.now() / 1000;
        var key = localStorage.getItem(_this.p_multiNoticeKey);
        var isPop = false;
        _this.p_multiNoticeData = [];
        if (param.state == "success") {
            for (var val in param.data) {
                var data = param.data[val];
                var isTm = nowTm < data.end_time;
                var isType1 = data.pop_type == 1;
                var isType2 = data.pop_type == 2 && (data.key + "") != key;
                if (!isPop && isTm && (isType1 || isType2)) {
                    isPop = true;
                }
                if (isTm) {
                    _this.p_multiNoticeData.push(data);
                }
                if (isType2) {
                    localStorage.setItem(_this.p_multiNoticeKey, data.key + "");
                }
            }
        }
        _this.p_multiNoticeData.sort(function(a, b) {
            return a.login_id - b.login_id;
        });
        console.log("onMultiNoticeCallback, datas = ", _this.p_multiNoticeData);
        if (isPop) {
            _this.p_openMultiNoticeView();
        }
    },
    //旧版请求隐私条款
    // p_onPrivacyCallback: function (data) {
    //     var _this = this;
    //     _this.p_privacyContent.innerText = data;
    // },

    p_canSelect: function (server){
        if (server.status === -1) {
            this.p_showPrompt("服务器维护中");
            return false;
        } 
        else if (server.status === 0){
            this.p_showPrompt("服务器尚未开启，敬请期待");
            return false;
        }
        else {
            return true;
        }
    },
    p_showPrompt: function (prompt) {
        var _this = this;
        if (_this.p_promptHandle) {
            window.cancelAnimationFrame(_this.p_promptHandle);
        }
        _this.p_promptTop = 640;
        _this.p_promptSpeed = 0.8;
        _this.p_promptTxt.innerText = prompt;
        _this.p_promptTxt.style.visibility = "visible";
        _this.p_tweenPrompt();
    },
    p_tweenPrompt: function () {
        var _this = this;
        if (_this.p_promptTop < 590) {
            _this.p_promptTop = 640;
            _this.p_promptTxt.style.visibility = "hidden";
            return;
        }
        _this.p_promptTxt.style.top = _this.p_promptTop + "px";
        _this.p_promptTxt.style.top = _this.p_promptTop + "px";
        _this.p_promptHandle = window.requestAnimationFrame(_this.p_tweenPrompt.bind(_this));
        _this.p_promptTop = _this.p_promptTop - _this.p_promptSpeed;
        _this.p_promptSpeed = _this.p_promptSpeed * 1.04; 
    },



    preload: function () {
        var _this = this;
        _this.p_cdn = PF_INFO.cdn;
        var panel = document.getElementById("initPanel");
        if (!panel){
            panel = _this.p_getElement("div", "position:absolute;height:1280px;width:720px;visibility:hidden", "initPanel");
            var bg = _this.p_getImgElement(_this.p_atlas +"image_login_loginbg.jpg", "position: absolute;left:0px;top:0px;");
            panel.appendChild(bg);
            document.body.appendChild(panel);
        }
    },
    openPanel: function () {
        var _this = this;
        _this.p_cdn = PF_INFO.cdn;
        _this.p_defaultServerId = PF_INFO.selectedServer.server_id;
        _this.p_canRefresh = true;

        document.body.style.cssText = "position:fixed;margin:0;overflow:hidden;overflow-x:hidden;overflow-y:hidden;";
        var panel = document.getElementById("initPanel");
        if (!panel){
            panel = _this.p_getElement("div", "position:absolute;height:1280px;width:720px;visibility:visible", "initPanel");
            var bg = _this.p_getImgElement(_this.p_atlas +"image_login_loginbg.jpg", "position: absolute;left:0px;top:0px;");
            panel.appendChild(bg);
            document.body.appendChild(panel);
        } 
        else {
            panel.style.visibility = "visible";
        }

        if(PF_INFO.showLogo){
            var logo = _this.p_getImgElement(_this.p_atlas +"image_login_logo.png", "position: absolute;left:13px;top:28px;");
            panel.appendChild(logo);
        }
        //公告
        var noticeBtn = _this.p_getImgElement(_this.p_atlas +"btn_login_gonggao.png", "position: absolute;right:50px;top:120px;");
        panel.appendChild(noticeBtn);
        noticeBtn.onclick = function () {
            // _this.p_openNoticeView();
            // req_server_notice(PF_INFO.selectedServer.server_id, _this.p_onNoticeCallback.bind(_this))
            _this.p_cleanAutoEnterTimer();
            _this.p_openMultiNoticeView();
        };
        //隐私协议
        var privacyBtn = _this.p_getImgElement(_this.p_atlas +"btn_login_yingsi.png", "position: absolute;right:50px;top:250px;visibility:hidden;");
        panel.appendChild(privacyBtn);
        privacyBtn.onclick = function () {
            _this.p_cleanAutoEnterTimer();
            if (_this.p_privacyState1) {
                window.open(PF_INFO.pkg_protocol_list.jump_url);
            } else if (_this.p_privacyState2) {
                _this.openPrivacyView();
                // _this.openPrivacyView();
                // _this.p_privacyTitle.innerText = PF_INFO.pkg_protocol.title;
                // load(PF_INFO.pkg_protocol.url, "text", _this.p_onPrivacyCallback.bind(_this));
            }
        };
        privacyBtn.style.visibility = _this.p_privacyState1 || _this.p_privacyState2 ? "visible" : "hidden";
        var privacyTip = _this.p_getElement("label", "position:absolute;bottom:9px;height:16px;color:#ffffff;line-height:18px;font-size:16px;word-wrap:break-word;text-align:center;text-shadow:-1px 0 #000000, 0 -1px #000000, 1px 0 #000000, 0 1px #000000;");
        panel.appendChild(privacyTip);
        var privacyTitles = "";
        for (var i = 0; i < _this.p_privacyData.length; i++) {
            var privacyData = _this.p_privacyData[i];
            privacyTitles += "<a href=\"javascript:initPanel.openPrivacyView(" + i + ")\" style=\"color:#14ff28;text-decoration:none\">"+ privacyData.title + "</a>";
            if (i < _this.p_privacyData.length - 1) privacyTitles += "、";
        }
        privacyTip.innerHTML = "我已经详细阅读并同意" + privacyTitles;
        var privacyTipLeft = (720 - privacyTip.offsetWidth) / 2;
        privacyTip.style.left = privacyTipLeft + "px";
        var isPrivacyTog = localStorage.getItem(_this.p_privacyKey) == "1";
        var isPrivacyDefault = _this.p_privacyBgCfg == 0 || _this.p_privacyBgCfg == 1;
        _this.p_isApplyPrivacy = _this.p_privacyIsSave ? isPrivacyTog || isPrivacyDefault : isPrivacyDefault;
        var privacyToggle = _this.p_getImgElement(_this.p_atlas + (_this.p_isApplyPrivacy ? "image_xuanfu_gx1.png" : "image_xuanfu_gx0.png"), "position: absolute;left:"+ (privacyTipLeft - 30) +"px;bottom:4px;");
        panel.appendChild(privacyToggle);
        privacyToggle.onclick = function () {
            _this.p_cleanAutoEnterTimer();
            _this.p_isApplyPrivacy = !_this.p_isApplyPrivacy;
            if (_this.p_isApplyPrivacy) localStorage.setItem(_this.p_privacyKey, "1");
            privacyToggle.src = _this.p_formatUrl(_this.p_atlas +(_this.p_isApplyPrivacy ? "image_xuanfu_gx1.png" : "image_xuanfu_gx0.png"));
        };
        privacyToggle.style.visibility = privacyTip.style.visibility = _this.p_privacyBgCfg != 0 && _this.p_privacyState2 ? "visible" : "hidden";
        //选服
        var selectBg = _this.p_getImgElement(_this.p_atlas +"image_login_xuanqubg.png", "position: absolute;left:70px;top:846px;");
        if (PF_INFO.server_sel_pkg == 1 || PF_INFO.server_sel_pkg == undefined) panel.appendChild(selectBg);
        selectBg.onclick = function () {
            _this.p_cleanAutoEnterTimer();
            if (!PF_INFO.hasGroupReq) {
                PF_INFO.hasGroupReq = true;
                req_server_group();
            }
            _this.p_canRefresh = false;
            _this.p_clearDefaultTimeout();
            _this.p_defaultTime = 5000;
            _this.p_openServerView();
            _this.showServerList(_this.p_currGroupId);
        };
        //进入游戏
        var enterBtn = _this.p_getImgElement(_this.p_atlas +"btn_login_loginanniu.png", "position: absolute;left:107px;top:1009px;");
        panel.appendChild(enterBtn);
        enterBtn.onclick = function () {
            _this.p_toEnter();
        };
        //进入游戏倒计时
        _this.p_enterTip = _this.p_getElement("label", "position:absolute;left:212px;top:986px;width:300px;height:25px;line-height:24px;text-align:center;color:#212942;font-size:22px;pointer-events:none;");
        panel.appendChild(_this.p_enterTip);
        _this.p_enterTip.innerText = "";
        //审批图
        var shenPiImg = _this.p_getImgElement(_this.p_atlas +"image_denglu_txtshenpi.png", "position: absolute;left:28px;bottom:30px;", "shenPiImg");
        if (_this.p_isShowIdent) panel.appendChild(shenPiImg);
        PF_INFO.shenPiImg = shenPiImg;      //记录下来，避免后面再次加载
        //防骗公告
        if (_this.p_isShowCheat) {
            var antiCheat = _this.p_getImgElement(_this.p_atlas +"image_loding_txtbhcc.png", "position: absolute;left:48px;bottom:148px;", "antiCheatImg");
            panel.appendChild(antiCheat);
        }
        //服务器状态
        _this.p_statusImg = _this.p_getImgElement("", "position: absolute;left:162px;top:932px;pointer-events:none;");
        if (PF_INFO.server_sel_pkg == 1 || PF_INFO.server_sel_pkg == undefined) panel.appendChild(_this.p_statusImg);
        //当前所选服务器
        _this.p_nameTxt = _this.p_getElement("label", "position:absolute;left:212px;top:932px;width:300px;height:35px;line-height:34px;text-align:center;color: " + _this.p_serTxtColor + ";font-size:32px;pointer-events:none;");
        if (PF_INFO.server_sel_pkg == 1 || PF_INFO.server_sel_pkg == undefined) panel.appendChild(_this.p_nameTxt);
        //选服
        var switchTxt = _this.p_getElement("label", "position:absolute;left:517px;top:932px;height:35px;line-height:34px;text-align:left;color:" + _this.p_serTxtColor + ";font-size:32px;pointer-events:none;");
        switchTxt.innerText = "选服>";
        if (PF_INFO.server_sel_pkg == 1 || PF_INFO.server_sel_pkg == undefined) panel.appendChild(switchTxt);
        //文字提示
        _this.p_promptTxt = _this.p_getElement("label", "position:absolute;left:0px;top:640px;width:720px;height:35px;line-height:34px;text-align:center;color:#ff0000;font-size:32px;text-shadow:-2px 0 #ffffff, 0 -2px #ffffff, 2px 0 #ffffff, 0 2px #ffffff;pointer-events:none;visibility:hidden;");
        panel.appendChild(_this.p_promptTxt);

        // var labels = [];     //注释已经使用图片代替
        // var styles = [];
        // if(PF_INFO.printID && PF_INFO.printID.length > 0){            
        //     var arr = PF_INFO.printID.split('\n');
        //     for(var i = 0 ; i < arr.length; i++){
        //         labels.push(arr[i]);
        //         styles.push("position:absolute;top:"+ (1180 + i * 26) +"px;width:720px;text-align:center;color:#163274;font-size:18px;");
        //     }
        // }
        // for (var i = 0, length_1 = labels.length; i < length_1; ++i) {
        //     var label = _this.p_getElement("label", styles[i]);
        //     label.innerText = labels[i];
        //     // panel.appendChild(label);
        // }

        _this.p_serverListView = _this.p_getElement("div", "position:absolute;left:-120px;top:-140px;width:960px;height:1560px;visibility:hidden", "serverView");
        panel.appendChild(_this.p_serverListView);

        _this.p_noticeView = _this.p_getElement("div", "position:absolute;left:20px;top:0px;width:660px;height:1560px;visibility:hidden", "noticeView");
        panel.appendChild(_this.p_noticeView);

        _this.p_multiNoticeView = _this.p_getElement("div", "position:absolute;left:20px;top:0px;width:660px;height:1560px;visibility:hidden", "multiNoticeView");
        panel.appendChild(_this.p_multiNoticeView);

        _this.p_privacyView = _this.p_getElement("div", "position:absolute;left:20px;top:0px;width:660px;height:1560px;visibility:hidden", "privacyView");
        panel.appendChild(_this.p_privacyView);

        var loadTopBottomImg = false;
        var loadLeftRightImg = false;
        function onResize() {
            var wh = window.innerWidth || document.body.clientWidth;
            var th = window.innerHeight || document.body.clientHeight;
            if (wh > screen.availWidth) wh = screen.availWidth;
            var swh = wh / 720;
            var sth = th / 1280;
            panel.style.webkitTransform = "scale(" + (swh < sth ? swh : sth) + ")";
            panel.style.left = (wh - 720) * 0.5 + "px";
            panel.style.top = (th - 1280) * 0.5 + "px";
            if (!loadLeftRightImg && swh > sth) {
                loadLeftRightImg = true;
                var leftImg = _this.p_getImgElement(_this.p_atlas +"image_login_loginbg_left.jpg", "position: absolute;right:719px;top:0px;");
                panel.appendChild(leftImg);
                var rightImg = _this.p_getImgElement(_this.p_atlas +"image_login_loginbg_right.jpg", "position: absolute;left:719px;top:0px;");
                panel.appendChild(rightImg);
            } 
            else if (!loadTopBottomImg && swh < sth) {
                loadTopBottomImg = true;
                var topImg = _this.p_getImgElement(_this.p_atlas +"image_login_loginbg_top.jpg", "position: absolute;left:0px;bottom:1279px;");
                panel.appendChild(topImg);
                var bottomImg = _this.p_getImgElement(_this.p_atlas +"image_login_loginbg_bottom.jpg", "position: absolute;left:0px;top:1279px;");
                panel.appendChild(bottomImg);
            }
        }
        window.addEventListener("resize", onResize);
        
        onResize();

        _this.p_showServer(PF_INFO.selectedServer);
        req_multi_server_notice(4, PF_INFO.pkgName, PF_INFO.selectedServer.server_id, _this.p_onMultiNoticeCallback.bind(_this));

        _this.p_enterTime = 20;
        _this.p_enterInterval = setInterval(_this.p_addAutoEnterTimer.bind(_this), 1000); 

        setTimeout(function () {
            preloadLoading(); //预加载Loading
        }, 1000); 
    },
    closePanel: function () {
        this.p_cleanAutoEnterTimer();
        var panel = document.getElementById("initPanel");
        if (panel) document.body.removeChild(panel);
    },
    p_toEnter: function () {
        var _this = this;
        _this.p_cleanAutoEnterTimer();
        if (_this.p_isApplyPrivacy) {
            if (_this.p_canSelect(PF_INFO.selectedServer)) {
                _this.p_canRefresh = false;
                _this.p_clearDefaultTimeout();
                _this.p_clearServerListTimeout();
                req_server_check_ban(0, PF_INFO.selectedServer.server_id);
            }
        } else {
            _this.p_showPrompt("您必须同意用户协议才可进入游戏");
        }
    },
    p_addAutoEnterTimer: function () {
        var _this = this;
        _this.p_enterTime--;
        if (_this.p_enterTip) _this.p_enterTip.innerText = _this.p_enterTime+"秒后自动进入游戏";
        if (_this.p_enterTime <= 0) {
            _this.p_toEnter();
        }
    },
    p_cleanAutoEnterTimer: function () {
        var _this = this;
        if (_this.p_enterInterval > 0) clearInterval(_this.p_enterInterval);
        _this.p_enterInterval = 0;
        if (_this.p_enterTip) _this.p_enterTip.innerText = "";
    },
    p_openServerView: function () {
        var _this = this;
        if(!_this.p_groupItemsDiv){
            var listBg = _this.p_getImgElement(_this.p_atlas +"image_xuanfu_xfbg.png", "position: absolute;left:120px;top:227px;");
            _this.p_serverListView.appendChild(listBg);
            var closeBtn = _this.p_getImgElement(_this.p_atlas +"image_com_tuichu.png", "position: absolute;left:758px;top:238px;");
            _this.p_serverListView.appendChild(closeBtn);
            closeBtn.onclick = function () {
                _this.p_serverListView.style.visibility = "hidden";
                _this.p_canRefresh = true;
                _this.p_clearDefaultTimeout();
                _this.p_clearServerListTimeout();
                _this.p_defaultTime = 5000;
                _this.p_showServer(PF_INFO.selectedServer);
            };
            _this.p_groupItemsDiv = _this.p_getElement("div", "position:absolute;left:184px;top:348px;width:"+ (_this.p_groupItemWH + 20) +"px;height:894px;overflow-y:auto;");
            _this.p_serverListView.appendChild(_this.p_groupItemsDiv);
            _this.p_serverItemsDiv = _this.p_getElement("div", "position:absolute;left:414px;top:348px;width:"+ (_this.p_serverItemWH + 20) +"px;height:894px;overflow-y:auto;");
            _this.p_serverListView.appendChild(_this.p_serverItemsDiv);
        }
        _this.p_serverListView.style.visibility = "visible";
    },
    p_openNoticeView: function () {
        var _this = this;
        if(!_this.p_noticeDiv){
            _this.p_noticeDiv = _this.p_getElement("div", "position:absolute;left:60px;top:265px;width:545px;height:870px;");
            var noticeBg = _this.p_getImgElement(_this.p_atlas +"image_login_notice.png", "position: absolute;left:0px;top:120px;");
            _this.p_noticeView.appendChild(noticeBg);
            
            _this.p_noticeTitle = _this.p_getElement("label", "position:absolute;left:5px;top:190px;text-align:center;width:660px;height:28px;color:#ffffff;text-shadow:3px 3px 3px #6d5ea9;line-height:34px;font-size:28px;")
            _this.p_noticeView.appendChild(_this.p_noticeTitle);
            _this.p_noticeView.appendChild(_this.p_noticeDiv);
            _this.p_noticeContent = _this.p_getElement("label", "position:absolute;width:545px;height:870px;color:#212942;line-height:28px;font-size:26px;word-wrap:break-word;overflow-y:auto")
            _this.p_noticeDiv.appendChild(_this.p_noticeContent);
            var closeBtn = _this.p_getImgElement(_this.p_atlas +"btn_com_chuangback.png", "position: absolute;left:615px;top:160px;");
            _this.p_noticeView.appendChild(closeBtn);
            closeBtn.onclick = function () {
                _this.p_noticeView.style.visibility = "hidden";
            }
        }
        _this.p_noticeView.style.visibility = "visible";
    },
    p_openMultiNoticeView: function () {
        var _this = this;
        if(!_this.p_multiNoticeDiv){
            //背景图、标题、关闭按钮
            var noticeBg = _this.p_getImgElement(_this.p_atlas +"image_login_notice.png", "position: absolute;left:0px;top:110px;");
            _this.p_multiNoticeView.appendChild(noticeBg);
            _this.p_multiNoticeTitle = _this.p_getElement("label", "position:absolute;left:5px;top:180px;text-align:center;width:660px;height:28px;color:#ffffff;text-shadow:3px 3px 3px #6d5ea9;line-height:34px;font-size:28px;");
            _this.p_multiNoticeView.appendChild(_this.p_multiNoticeTitle);
            var closeBtn = _this.p_getImgElement(_this.p_atlas +"btn_com_chuangback.png", "position: absolute;left:615px;top:150px;");
            _this.p_multiNoticeView.appendChild(closeBtn);
            closeBtn.onclick = function () {
                _this.p_multiNoticeView.style.display = "none";
            }
            _this.p_multiNoticeCloseBtn = _this.p_getElement("div", "position:absolute;left:190px;top:1003px;width:"+ _this.p_multiNoticeTabW +"px;height:" + _this.p_multiNoticeTabH + "px;");
            _this.p_multiNoticeView.appendChild(_this.p_multiNoticeCloseBtn);
            _this.p_multiNoticeCloseBtn.appendChild(_this.p_getImgElement(_this.p_atlas +"btn_com_long1.png", "position:absolute;"));
            var closeTxt = _this.p_getElement("label", "position:absolute;top:" + (_this.p_multiNoticeTabH - 30) / 2 + "px;width:" + _this.p_multiNoticeTabW + "px;height:30px;line-height:30px;text-align:center;color:" + _this.p_serItemLColorN + ";font-size:30px;pointer-events:none;");
            _this.p_multiNoticeCloseBtn.appendChild(closeTxt);
            closeTxt.innerText = "关闭";
            _this.p_multiNoticeCloseBtn.onclick = function () {
                _this.p_multiNoticeView.style.display = "none";
            }
            //公告内容
            _this.p_multiNoticeDiv = _this.p_getElement("div", "position:absolute;left:60px;top:255px;width:545px;height:726px;");
            _this.p_multiNoticeView.appendChild(_this.p_multiNoticeDiv);
            _this.p_multiNoticeContent = _this.p_getElement("label", "position:absolute;width:545px;height:726px;color:#212942;line-height:28px;font-size:26px;word-wrap:break-word;overflow-y:auto");
            _this.p_multiNoticeDiv.appendChild(_this.p_multiNoticeContent);
            //公告标签
            _this.p_multiNoticeTabDiv = _this.p_getElement("div", "position:absolute;left:36px;top:1003px;width:596px;height:" + (_this.p_multiNoticeTabH + 20) + "px;overflow-x:scroll;");
            _this.p_multiNoticeView.appendChild(_this.p_multiNoticeTabDiv);
        }
        _this.p_showMultiNoticeList();
        _this.p_selMultiNotice(0);
        _this.p_multiNoticeCloseBtn.style.visibility = _this.p_multiNoticeItems && _this.p_multiNoticeItems.length > 1 ? "hidden" : "visible";
        _this.p_multiNoticeTabDiv.style.visibility = _this.p_multiNoticeItems && _this.p_multiNoticeItems.length > 1 ? "visible" : "hidden";
        _this.p_multiNoticeView.style.visibility = "visible";
        _this.p_multiNoticeView.style.display = "inline";
    },
    openPrivacyView: function (openIdx) {
        var _this = this;
        _this.p_cleanAutoEnterTimer();
        if(!_this.p_privacyDiv){
            //背景图、标题、关闭按钮
            var privacyBg = _this.p_getImgElement(_this.p_atlas +"image_login_notice.png", "position: absolute;left:0px;top:110px;");
            _this.p_privacyView.appendChild(privacyBg);
            _this.p_privacyTitle = _this.p_getElement("label", "position:absolute;left:5px;top:180px;text-align:center;width:660px;height:28px;color:#ffffff;text-shadow:3px 3px 3px #6d5ea9;line-height:34px;font-size:28px;");
            _this.p_privacyView.appendChild(_this.p_privacyTitle);
            var closeBtn = _this.p_getImgElement(_this.p_atlas +"btn_com_chuangback.png", "position: absolute;left:615px;top:150px;");
            _this.p_privacyView.appendChild(closeBtn);
            closeBtn.onclick = function () {
                _this.p_privacyView.style.display = "none";
            }
            _this.p_privacyCloseBtn = _this.p_getElement("div", "position:absolute;left:190px;top:1003px;width:"+ _this.p_privacyTabW +"px;height:" + _this.p_privacyTabH + "px;");
            _this.p_privacyView.appendChild(_this.p_privacyCloseBtn);
            _this.p_privacyCloseBtn.appendChild(_this.p_getImgElement(_this.p_atlas +"btn_com_long1.png", "position:absolute;"));
            var closeTxt = _this.p_getElement("label", "position:absolute;top:" + (_this.p_privacyTabH - 30) / 2 + "px;width:" + _this.p_privacyTabW + "px;height:30px;line-height:30px;text-align:center;color:" + _this.p_serItemLColorN + ";font-size:30px;pointer-events:none;");
            _this.p_privacyCloseBtn.appendChild(closeTxt);
            closeTxt.innerText = "关闭";
            _this.p_privacyCloseBtn.onclick = function () {
                _this.p_privacyView.style.display = "none";
            }
            //隐私内容
            _this.p_privacyDiv = _this.p_getElement("div", "position:absolute;left:60px;top:255px;width:545px;height:726px;");
            _this.p_privacyView.appendChild(_this.p_privacyDiv);
            _this.p_privacyContent = _this.p_getElement("label", "position:absolute;width:545px;height:726px;color:#212942;line-height:28px;font-size:26px;word-wrap:break-word;overflow-y:auto");
            _this.p_privacyDiv.appendChild(_this.p_privacyContent);
            //隐私标签
            _this.p_privacyTabDiv = _this.p_getElement("div", "position:absolute;left:36px;top:1003px;width:596px;height:" + (_this.p_privacyTabH + 20) + "px;overflow-x:scroll;");
            _this.p_privacyView.appendChild(_this.p_privacyTabDiv);
        }
        _this.p_showPrivacyList();
        _this.p_selPrivacy(openIdx == undefined ? 0 : openIdx);
        _this.p_privacyCloseBtn.style.visibility = _this.p_privacyItems && _this.p_privacyItems.length > 1 ? "hidden" : "visible";
        _this.p_privacyTabDiv.style.visibility = _this.p_privacyItems && _this.p_privacyItems.length > 1 ? "visible" : "hidden";
        _this.p_privacyView.style.visibility = "visible";
        _this.p_privacyView.style.display = "inline";
    },
    // openPrivacyView: function () {
    //     var _this = this;
    //     if(!_this.p_privacyDiv){
    //         _this.p_privacyDiv = _this.p_getElement("div", "position:absolute;left:60px;top:260px;width:560px;height:880px;");
    //         var privacyBg = _this.p_getImgElement(_this.p_atlas +"image_login_notice.png", "position: absolute;left:0px;top:120px;");
    //         _this.p_privacyView.appendChild(privacyBg);
    //         var closeBtn = _this.p_getImgElement(_this.p_atlas +"btn_com_chuangback.png", "position: absolute;left:600px;top:120px;");
    //         _this.p_privacyView.appendChild(closeBtn);
    //         closeBtn.onclick = function () {
    //             _this.p_privacyView.style.visibility = "hidden";
    //         }
    //         _this.p_privacyTitle = _this.p_getElement("label", "position:absolute;left:5px;top:190px;text-align:center;width:660px;height:28px;color:#ffffff;text-shadow:3px 3px 3px #6d5ea9;line-height:34px;font-size:28px;")
    //         _this.p_privacyView.appendChild(_this.p_privacyTitle);
    //         _this.p_privacyView.appendChild(_this.p_privacyDiv);
    //         _this.p_privacyContent = _this.p_getElement("label", "position:absolute;width:560px;height:880px;color:#212942;line-height:28px;font-size:24px;word-wrap:break-word;overflow-y:auto")
    //         _this.p_privacyDiv.appendChild(_this.p_privacyContent);
    //     }
    //     _this.p_privacyView.style.visibility = "visible";
    // },
};
