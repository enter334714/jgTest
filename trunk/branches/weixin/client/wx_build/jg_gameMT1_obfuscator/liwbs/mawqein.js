var ba=wx['$b'];console['info'](ba[0x16fa]),window['lastError'],wx['onError'](function(a){if(a){if(a['message']){var b=window['config']['game_ver']['replace'](new RegExp(/\./,ba[0x16fb]),ba[0x16fc]),c=a['message'],d=c['match'](/(subPackage\/game.js:)[0-9]{1,60}(:)/g);if(d)for(var e=0x0;e<d['length'];e++){var f=parseInt(d[e]['replace'](ba[0x16fd],'')['replace'](ba[0x16fe],''));c=c['replace'](d[e],d[e]['replace'](ba[0x16ff]+f+ba[0x1700],ba[0x1701]+(f-0x2)+ba[0x1702]));}c=c['replace'](new RegExp(ba[0x1703],ba[0x1704]),ba[0x1705]+b+ba[0x1706]),c=c['replace'](new RegExp(ba[0x1707],ba[0x1708]),ba[0x1709]+b+ba[0x170a]),a['message']=c;}var g={'id':window['B_BC']['roleId'],'role':window['B_BC']['roleName'],'level':window['B_BC']['roleLevel'],'user':window['B_BC']['account'],'version':window['B_BC']['lastVersion'],'gamever':window['config']['game_ver'],'cdn':window['B_BC']['cdn'],'serverid':window['B_BC']['selectedServer']?window['B_BC']['selectedServer']['server_id']:0x0,'B_HGF':window['B_HGF'],'error':a?a['message']:''},h=JSON['stringify'](g);console['error'](ba[0x170b]+h),(!window['lastError']||window['lastError']!=g['error'])&&(window['lastError']=g['error'],window['B_CDE'](g));}});import'wxadawew.js';import'mdfive.js';import'zipsjdwe.js';window[ba[0x170c]]=require(ba[0x170d]);import'insdfdex.js';import'liewfbs.js';import'layawewwx.js';import'intweol.js';console['info'](ba[0x170e]);const bb=canvas['getContext'](ba[0x170f])||canvas['getContext'](ba[0x1710]),bc=[0x1,-0x1,0x0,-0x1,-0x1,0x0,0x1,0x1,0x0,-0x1,0x1,0x0];bb['clearColor'](0x0,0x0,0x0,0x0),bb['clear'](bb['COLOR_BUFFER_BIT']),bb['viewport'](0x0,0x0,canvas['width'],canvas['height']);var bd=bb['createShader'](bb['VERTEX_SHADER']);bb['shaderSource'](bd,ba[0x1711]),bb['compileShader'](bd);var be=bb['createShader'](bb['FRAGMENT_SHADER']);bb['shaderSource'](be,ba[0x1712]),bb['compileShader'](be);var bf=bb['createProgram']();bb['attachShader'](bf,bd),bb['attachShader'](bf,be),bb['linkProgram'](bf),bb['useProgram'](bf);var bg=bb['createBuffer']();bb['bindBuffer'](bb['ARRAY_BUFFER'],bg),bb['bufferData'](bb['ARRAY_BUFFER'],new Float32Array(bc),bb['STATIC_DRAW']);var bh=bb['getAttribLocation'](bf,ba[0x1713]);bb['vertexAttribPointer'](bh,0x3,bb['FLOAT'],![],0x0,0x0),bb['enableVertexAttribArray'](bh);function bi(){bb['clearColor'](0x0,0x0,0x0,0x1),bb['drawArrays'](bb['TRIANGLE_STRIP'],0x0,0x4),bb['flush']();}bi(),window['B_GI']=setInterval(function(){bi();},0x10),console['info'](ba[0x1714]),B_BCD({'title':ba[0x1715]});var bj={'B_HGI':!![],'B_HIG':{'frames':{'btn_com_chuangback.png':{'frame':{'h':0x3c,'idx':0x0,'w':0x37,'x':0xc1,'y':0xfd},'sourceSize':{'h':0x3c,'w':0x37},'spriteSourceSize':{'x':0x0,'y':0x0}},'btn_login_gonggao.png':{'frame':{'h':0x57,'idx':0x0,'w':0x50,'x':0x208,'y':0xb6},'sourceSize':{'h':0x58,'w':0x50},'spriteSourceSize':{'x':0x0,'y':0x1}},'btn_login_loginanniu.png':{'frame':{'h':0x50,'idx':0x0,'w':0xf5,'x':0x0,'y':0x6f},'sourceSize':{'h':0x58,'w':0x1fa},'spriteSourceSize':{'x':0x83,'y':0x4}},'btn_login_yingsi.png':{'frame':{'h':0x57,'idx':0x0,'w':0x50,'x':0x208,'y':0x10e},'sourceSize':{'h':0x58,'w':0x50},'spriteSourceSize':{'x':0x0,'y':0x1}},'btn_xuanqu_anniuhuang.png':{'frame':{'h':0x46,'idx':0x0,'w':0xc0,'x':0xf6,'y':0xb6},'sourceSize':{'h':0x46,'w':0xc0},'spriteSourceSize':{'x':0x0,'y':0x0}},'btn_xuanqu_anniulan.png':{'frame':{'h':0x46,'idx':0x0,'w':0xc0,'x':0x0,'y':0xc0},'sourceSize':{'h':0x46,'w':0xc0},'spriteSourceSize':{'x':0x0,'y':0x0}},'btn_xuanqu_quanniu.png':{'frame':{'h':0x46,'idx':0x0,'w':0x166,'x':0xf6,'y':0x6f},'sourceSize':{'h':0x46,'w':0x166},'spriteSourceSize':{'x':0x0,'y':0x0}},'image_com_tuichu.png':{'frame':{'h':0x91,'idx':0x0,'w':0x50,'x':0x1b7,'y':0xb6},'sourceSize':{'h':0x92,'w':0x52},'spriteSourceSize':{'x':0x1,'y':0x1}},'image_login_changtong.png':{'frame':{'h':0x24,'idx':0x0,'w':0x24,'x':0xc1,'y':0xc0},'sourceSize':{'h':0x24,'w':0x24},'spriteSourceSize':{'x':0x0,'y':0x0}},'image_login_fanmang.png':{'frame':{'h':0x24,'idx':0x0,'w':0x24,'x':0x0,'y':0x107},'sourceSize':{'h':0x24,'w':0x24},'spriteSourceSize':{'x':0x0,'y':0x0}},'image_login_weihu.png':{'frame':{'h':0x24,'idx':0x0,'w':0x24,'x':0x25,'y':0x107},'sourceSize':{'h':0x24,'w':0x24},'spriteSourceSize':{'x':0x0,'y':0x0}},'image_login_xuanqubg.png':{'frame':{'h':0x6e,'idx':0x0,'w':0x244,'x':0x0,'y':0x0},'sourceSize':{'h':0x98,'w':0x244},'spriteSourceSize':{'x':0x0,'y':0x2a}}},'meta':{'image':ba[0x1716],'prefix':ba[0x1717]}},'B_IGH':{'frames':{'image_loding_bar0.png':{'frame':{'h':0x1b,'idx':0x0,'w':0x254,'x':0x0,'y':0x0},'sourceSize':{'h':0x1b,'w':0x254},'spriteSourceSize':{'x':0x0,'y':0x0}},'image_loding_bar02.png':{'frame':{'h':0x1b,'idx':0x0,'w':0x254,'x':0x0,'y':0x1c},'sourceSize':{'h':0x1b,'w':0x254},'spriteSourceSize':{'x':0x0,'y':0x0}},'image_loding_bar1.png':{'frame':{'h':0x19,'idx':0x0,'w':0x252,'x':0x0,'y':0x38},'sourceSize':{'h':0x19,'w':0x252},'spriteSourceSize':{'x':0x0,'y':0x0}},'image_loding_bar2.png':{'frame':{'h':0xb,'idx':0x0,'w':0xd0,'x':0x0,'y':0xc7},'sourceSize':{'h':0xb,'w':0xd0},'spriteSourceSize':{'x':0x0,'y':0x0}},'image_loding_bar3.png':{'frame':{'h':0x74,'idx':0x0,'w':0x27,'x':0x0,'y':0x52},'sourceSize':{'h':0x74,'w':0x27},'spriteSourceSize':{'x':0x0,'y':0x0}},'image_login_point1.png':{'frame':{'h':0xd,'idx':0x0,'w':0xd,'x':0x253,'y':0x38},'sourceSize':{'h':0x11,'w':0x11},'spriteSourceSize':{'x':0x2,'y':0x2}},'image_login_point2.png':{'frame':{'h':0x11,'idx':0x0,'w':0x11,'x':0x28,'y':0x52},'sourceSize':{'h':0x11,'w':0x11},'spriteSourceSize':{'x':0x0,'y':0x0}},'image_login_point3.png':{'frame':{'h':0xd,'idx':0x0,'w':0xd,'x':0x253,'y':0x46},'sourceSize':{'h':0x11,'w':0x11},'spriteSourceSize':{'x':0x2,'y':0x2}}},'meta':{'image':ba[0x1718],'prefix':ba[0x1719]}},'B_IHG':{'frames':{'0.png':{'frame':{'h':0x5a,'idx':0x0,'w':0xd9,'x':0x0,'y':0x0},'sourceSize':{'h':0x6f,'w':0xfa},'spriteSourceSize':{'x':0x11,'y':0x9}},'1.png':{'frame':{'h':0x5b,'idx':0x0,'w':0xdb,'x':0xda,'y':0x0},'sourceSize':{'h':0x6f,'w':0xfa},'spriteSourceSize':{'x':0x10,'y':0x8}},'2.png':{'frame':{'h':0x57,'idx':0x0,'w':0xde,'x':0x0,'y':0x5c},'sourceSize':{'h':0x6f,'w':0xfa},'spriteSourceSize':{'x':0xf,'y':0xb}},'3.png':{'frame':{'h':0x56,'idx':0x0,'w':0xdd,'x':0x0,'y':0xb4},'sourceSize':{'h':0x6f,'w':0xfa},'spriteSourceSize':{'x':0xf,'y':0xb}},'4.png':{'frame':{'h':0x5a,'idx':0x0,'w':0xd7,'x':0xde,'y':0xb4},'sourceSize':{'h':0x6f,'w':0xfa},'spriteSourceSize':{'x':0x12,'y':0x9}}},'meta':{'image':ba[0x171a],'prefix':ba[0x171b]}}};new window['ServerLoading'](bj),window['ServerLoading']['instance']['B_IJ']();if(window['B_GI'])clearInterval(window['B_GI']);window['B_GI']=null,window['B_JI']=function(a,b){if(!a||!b)return 0x0;a=a['split'](ba[0x171c]),b=b['split'](ba[0x171d]);const c=Math['max'](a['length'],b['length']);while(a['length']<c){a['push'](ba[0x171e]);}while(b['length']<c){b['push'](ba[0x171f]);}for(var d=0x0;d<c;d++){const e=parseInt(a[d]),f=parseInt(b[d]);if(e>f)return 0x1;else{if(e<f)return-0x1;}}return 0x0;},window['SDKVersion']=wx['getSystemInfoSync']()['SDKVersion'],console['log'](ba[0x1720]+window['SDKVersion']);const bk=wx['getUpdateManager']();bk['onCheckForUpdate'](function(a){console['log'](ba[0x1721]+a['hasUpdate']);}),bk['onUpdateReady'](function(){wx['showModal']({'title':ba[0x1722],'content':ba[0x1723],'showCancel':![],'success':function(a){bk['applyUpdate']();}});}),bk['onUpdateFailed'](function(){console['log'](ba[0x1724]);}),window['B_HIJ']=function(){console['log'](ba[0x1725]);var a=wx['loadSubpackage']({'name':ba[0x1726],'success':function(b){console['log'](ba[0x1727]),console['log'](b),b&&b['errMsg']==ba[0x1728]?(window['B_CA']=!![],window['B_GHF'](),window['B_HFG']()):setTimeout(function(){window['B_HIJ']();},0x1f4);},'fail':function(b){console['log'](ba[0x1729]),console['log'](b),setTimeout(function(){window['B_HIJ']();},0x1f4);}});a&&a['onProgressUpdate'](b=>{});},window['B_HJ']=function(){console['log'](ba[0x172a]);var a=wx['loadSubpackage']({'name':ba[0x172b],'success':function(b){console['log'](ba[0x172c]),console['log'](b),b&&b['errMsg']==ba[0x172d]?(window['B_BAC']=!![],window['B_GHF'](),window['B_HFG']()):setTimeout(function(){window['B_HJ']();},0x1f4);},'fail':function(b){console['log'](ba[0x172e]),console['log'](b),setTimeout(function(){window['B_HJ']();},0x1f4);}});a&&a['onProgressUpdate'](b=>{});},window['loadSubpackages']=function(){window['B_JI'](window['SDKVersion'],ba[0x172f])>=0x0?(console['log'](ba[0x1730]+window['SDKVersion']+ba[0x1731]),window['B_CED'](),window['B_HIJ'](),window['B_HJ']()):(window['B_ED'](ba[0x1732]+window['SDKVersion']),wx['showModal']({'title':ba[0x1733],'content':ba[0x1734]}));},window['loadSubpackages']=function(){window['B_JI'](window['SDKVersion'],ba[0x1735])>=0x0?(console['log'](ba[0x1736]+window['SDKVersion']+ba[0x1737]),window['B_CED'](),window['B_HIJ'](),window['B_HJ']()):(window['B_ED'](ba[0x1738]+window['SDKVersion']),wx['showModal']({'title':ba[0x1739],'content':ba[0x173a]}));},window['B_HGF']='',wx['getSystemInfo']({'success'(a){window['B_HGF']=ba[0x173b]+a['brand']+ba[0x173c]+a['model']+ba[0x173d]+a['version']+ba[0x173e]+a['system']+ba[0x173f]+a['platform']+ba[0x1740]+a['SDKVersion']+ba[0x1741]+a['benchmarkLevel'],console['log'](window['B_HGF']),console['log'](ba[0x1742]+a['pixelRatio']+ba[0x1743]+a['screenWidth']+ba[0x1744]+a['screenHeight']+ba[0x1745]+a['windowWidth']+ba[0x1746]+a['windowHeight']+ba[0x1747]+a['statusBarHeight']+ba[0x1748]+(a['safeArea']?a['safeArea']['top']+ba[0x1749]+a['safeArea']['bottom']+ba[0x174a]+a['safeArea']['left']+ba[0x174b]+a['safeArea']['right']:''));var b=a['system']?a['system']['toLowerCase']():'',c=a['model']?a['model']['toLowerCase']()['replace'](ba[0x174c],''):'';window['B_BC']['wxIOS']=b['indexOf'](ba[0x174d])!=-0x1,window['B_BC']['wxPhone']=b['indexOf'](ba[0x174e])!=-0x1||b['indexOf'](ba[0x174f])!=-0x1,window['B_BC']['wxPC']=b['indexOf'](ba[0x1750])!=-0x1||b['indexOf'](ba[0x1751])!=-0x1,window['B_BC']['wxPlatform']=a['platform']?a['platform']['toLowerCase']():'',window['B_BC']['B_GHI']=![],window['B_BC']['B_GIH']=0x1;if(b['indexOf'](ba[0x1752])!=-0x1){if(a['benchmarkLevel']>=0x18)window['B_BC']['B_GIH']=0x2;else window['B_BC']['B_GIH']=0x1;}else{if(b['indexOf'](ba[0x1753])!=-0x1){if(a['benchmarkLevel']&&a['benchmarkLevel']>=0x14)window['B_BC']['B_GIH']=0x2;else{if(c['indexOf'](ba[0x1754])!=-0x1||c['indexOf'](ba[0x1755])!=-0x1||c['indexOf'](ba[0x1756])!=-0x1||c['indexOf'](ba[0x1757])!=-0x1||c['indexOf'](ba[0x1758])!=-0x1)window['B_BC']['B_GIH']=0x1;else window['B_BC']['B_GIH']=0x2;}}else window['B_BC']['B_GIH']=0x1;}console['log'](ba[0x1759]+window['B_BC']['B_GHI']+ba[0x175a]+window['B_BC']['B_GIH']);}}),wx['getBatteryInfo']({'success':function(a){console['log'](ba[0x175b]+a['level']+ba[0x175c]+a['isCharging']);}}),wx['getNetworkType']({'success':function(a){console['log'](ba[0x175d]+a['networkType']);}}),wx['setKeepScreenOn']({'keepScreenOn':!![]}),wx['onNetworkStatusChange'](function(a){console['log'](ba[0x175e]+a['networkType']+ba[0x175f]+a['isConnected']);}),wx['onShow'](function(a){window['B_FED']=a,window['B_FG']&&window['B_FED']&&(console['info'](ba[0x1760]+window['B_FED']['scene']),window['B_FG'](window['B_FED']),window['B_FED']=null);}),window['B_IHJ']=0x0,window['onMemoryWarningCallBack']=null,wx['onMemoryWarning'](function(){window['B_IHJ']++,wx['triggerGC']();if(window['B_IHJ']>=0x2){window['B_IHJ']=0x0,console['error'](ba[0x1761]),wx['reportMonitor'](ba[0x1762],0x1);if(window['B_BC']&&window['B_BC']['wxIOS'])window['B_ED'](ba[0x1763]);if(onMemoryWarningCallBack)onMemoryWarningCallBack();}});