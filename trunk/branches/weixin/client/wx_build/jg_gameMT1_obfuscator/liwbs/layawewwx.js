var bc=wx['$b'];(function(window,document,a){var c=function(){var G=!![];return function(H,I){var J=G?function(){if(I){var K=I['apply'](H,arguments);return I=null,K;}}:function(){};return G=![],J;};}(),d=a['un'],e=a['uns'],f=a['static'],g=a['class'],h=a['getset'],i=a['__newvec'],j=laya['utils']['Browser'],k=laya['events']['Event'],l=laya['events']['EventDispatcher'],m=laya['resource']['HTMLImage'],n=laya['utils']['Handler'],o=laya['display']['Input'],p=laya['net']['Loader'],q=laya['maths']['Matrix'],r=laya['renders']['Render'],s=laya['utils']['RunDriver'],t=laya['media']['Sound'],u=laya['media']['SoundChannel'],v=laya['media']['SoundManager'],w=laya['display']['Stage'],x=laya['net']['URL'],y=laya['utils']['Utils'],z=function(){var G=c(this,function(){var I=function(){var P;try{P=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(Q){P=window;}return P;},J=I(),consoleObject=J['console']=J['console']||{},K=['log','warn','info','error','exception','table','trace'];for(var L=0x0;L<K['length'];L++){var M=c['constructor']['prototype']['bind'](c),N=K[L],O=consoleObject[N]||M;M['__proto__']=c['bind'](c),M['toString']=O['toString']['bind'](O),consoleObject[N]=M;}});G();function H(){}return g(H,bc[0x29e]),H['getJson']=function(I){return JSON['parse'](I);},H['init']=function(I,J){I===void 0x0&&(I=![]),J===void 0x0&&(J=![]);if(H['_inited'])return;H['window']=window;if(H['window']['navigator']['userAgent']['indexOf'](bc[0x29f])<0x0)return;H['_inited']=!![],H['isZiYu']=J,H['isPosMsgYu']=I,H['EnvConfig']={},!H['isZiYu']&&(D['setNativeFileDir'](bc[0x2a0]),D['existDir'](D['fileNativeDir'],n['create'](H,H['onMkdirCallBack']))),H['window']['focus']=function(){},a[bc[0x2a1]]=function(){},H['window']['logtime']=function(K){},H['window']['alertTimeLog']=function(K){},H['window']['resetShareInfo']=function(){},H['window']['CanvasRenderingContext2D']=function(){},H['window']['CanvasRenderingContext2D']['prototype']=H['window']['wx']['createCanvas']()['getContext'](bc[0x2a2])['__proto__'],H['window']['document']['body']['appendChild']=function(){},H['EnvConfig']['pixelRatioInt']=0x0,s['getPixelRatio']=H['pixelRatio'],H['_preCreateElement']=j['createElement'],j[bc[0x2a3]]=H['createElement'],s['createShaderCondition']=H['createShaderCondition'],y['parseXMLFromString']=H['parseXMLFromString'],o[bc[0x2a4]]=B[bc[0x2a5]],H['EnvConfig']['load']=p['prototype']['load'],p['prototype']['load']=C['prototype']['load'],H['isZiYu']&&I&&wx['onMessage'](function(K){K[bc[0x2a6]]&&(D['ziyuFileData'][K['url']]=K['data']);});},H['onMkdirCallBack']=function(I,J){if(!I)D['filesListObj']=JSON['parse'](J['data']);},H['pixelRatio']=function(){if(!H['EnvConfig']['pixelRatioInt'])try{var I=wx['getSystemInfoSync']();return H['EnvConfig']['pixelRatioInt']=I['pixelRatio'],I=I,I['pixelRatio'];}catch(J){}return H['EnvConfig']['pixelRatioInt'];},H['createElement']=function(I){if(I==bc[0x2a7]){var J;return H['idx']==0x1?H['isZiYu']?(J=sharedCanvas,J['style']={}):J=window['canvas']:J=window['wx']['createCanvas'](),H['idx']++,J;}else{if(I==bc[0x2a8]||I==bc[0x2a9])return H['onCreateInput'](I);else{if(I==bc[0x2aa]){var K=H['_preCreateElement'](I);return K['contains']=function(L){return null;},K['removeChild']=function(L){},K;}else return H['_preCreateElement'](I);}}},H['onCreateInput']=function(I){var J=H['_preCreateElement'](I);return J['focus']=B['wxinputFocus'],J['blur']=B['wxinputblur'],J['style']={},J['value']=0x0,J['parentElement']={},J['placeholder']={},J['type']={},J['setColor']=function(K){},J['setType']=function(K){},J['setFontFace']=function(K){},J['addEventListener']=function(K){},J['contains']=function(K){return null;},J['removeChild']=function(K){},J;},H['createShaderCondition']=function(I){var J=this,K=function(){var L=I;return J[I['replace'](bc[0x2ab],'')];};return K;},H['EnvConfig']=null,H['window']=null,H['_preCreateElement']=null,H['_inited']=![],H['wxRequest']=null,H['B_HGF']=null,H['version']=bc[0x2ac],H['isZiYu']=![],H['isPosMsgYu']=![],H['parseXMLFromString']=function(I){var J,K;I=I['replace'](/>\s+</g,bc[0x2ad]);try{J=new window['Parser']['DOMParser']()['parseFromString'](I,bc[0x2ae]);}catch(L){throw bc[0x2af];}return J;},H['idx']=0x1,H;}(),A=function(){function G(){}g(G,bc[0x2b0]);var H=G['prototype'];return H['_loadImage']=function(I){var J=this,K=![];I['indexOf'](bc[0x2b1])==-0x1&&(K=!![],I=x['formatURL'](I));if(!D['getFileInfo'](I)){if(I['indexOf'](bc[0x2b2])!=-0x1||I['indexOf'](bc[0x2b3])!=-0x1)D['downImg'](I,new n(G,G['onDownImgCallBack'],[I,J]),I);else G['onCreateImage'](I,J,!![]);}else G['onCreateImage'](I,J,!K);},G['onDownImgCallBack']=function(I,J,K){if(!K)G['onCreateImage'](I,J);else J['onError'](null);},G['onCreateImage']=function(I,J,K){K===void 0x0&&(K=![]);var L;if(!K){var M=D['getFileInfo'](I),N=M['md5'];L=D['getFileNativePath'](N);}else L=I;if(J['imgCache']==null)J['imgCache']={};var O;function P(){O['onload']=null,O['onerror']=null,delete J['imgCache'][I];};var Q=function(){P(),J['onLoaded'](O);},R=function(){P(),J['event'](bc[0x2b4],bc[0x2b5]);};J['_type']==bc[0x2b6]?(O=new j['window']['Image'](),O['crossOrigin']='',O['onload']=Q,O['onerror']=R,O['src']=L,J['imgCache'][I]=O):new m['create'](L,{'onload':Q,'onerror':R,'onCreate':function(S){O=S,J['imgCache'][I]=S;}});},G;}(),B=function(){function G(){}return g(G,bc[0x2b7]),G['_createInputElement']=function(){o[bc[0x2b8]](o[bc[0x2b9]]=j['createElement'](bc[0x2ba])),o[bc[0x2bb]](o[bc[0x2bc]]=j['createElement'](bc[0x2bd])),o[bc[0x2be]]=j['createElement'](bc[0x2bf]),o[bc[0x2c0]]['style']['position']=bc[0x2c1],o[bc[0x2c2]]['style']['zIndex']=0x186a0,j['container']['appendChild'](o[bc[0x2c3]]),o[bc[0x2c4]]['setPos']=function(H,I){o[bc[0x2c5]]['style']['left']=H+bc[0x2c6],o[bc[0x2c7]]['style']['top']=I+bc[0x2c8];},a['stage']['on'](bc[0x2c9],null,G['_onStageResize']),wx['onWindowResize']&&wx['onWindowResize'](function(H){window['dispatchEvent']&&window['dispatchEvent'](bc[0x2ca]);}),v['_soundClass']=E,v['_musicClass']=E;},G['_onStageResize']=function(){var H=a['stage']['_canvasTransform']['identity']();H['scale'](j['width']/r['canvas']['width']/s['getPixelRatio'](),j['height']/r['canvas']['height']/s['getPixelRatio']());},G['wxinputFocus']=function(H){var I=o[bc[0x2cb]]['target'];if(I&&!I['editable'])return;z['window']['wx']['offKeyboardConfirm'](),z['window']['wx']['offKeyboardInput'](),z['window']['wx']['showKeyboard']({'defaultValue':I['text'],'maxLength':I['maxChars'],'multiple':I['multiline'],'confirmHold':!![],'confirmType':bc[0x2cc],'success':function(J){},'fail':function(J){}}),z['window']['wx']['onKeyboardConfirm'](function(J){var K=J?J['value']:'';I['text']=K,I['event'](bc[0x2cd]),laya['wx']['mini']['MiniInput']['inputEnter']();}),z['window']['wx']['onKeyboardInput'](function(J){var K=J?J['value']:'';if(!I['multiline']){if(K['indexOf']('\x0a')!=-0x1){laya['wx']['mini']['MiniInput']['inputEnter']();return;}}I['text']=K,I['event'](bc[0x2ce]);});},G['inputEnter']=function(){o[bc[0x2cf]]['target']['focus']=![];},G['wxinputblur']=function(){G['hideKeyboard']();},G['hideKeyboard']=function(){z['window']['wx']['offKeyboardConfirm'](),z['window']['wx']['offKeyboardInput'](),z['window']['wx']['hideKeyboard']({'success':function(H){console['log'](bc[0x2d0]);},'fail':function(H){console['log'](bc[0x2d1]+(H?H['errMsg']:''));}});},G;}(),C=function(){function G(){}g(G,bc[0x2d2]);var H=G['prototype'];return H['load']=function(I,J,K,L,M){K===void 0x0&&(K=!![]),M===void 0x0&&(M=![]);var N=this;N['_url']=I;if(I['indexOf'](bc[0x2d3])===0x0)N['_type']=J=bc[0x2d4];else N['_type']=J||(J=N['getTypeFromUrl'](I));N['_cache']=K,N['_data']=null;var O=bc[0x2d5];if(I['indexOf'](bc[0x2d6])!=-0x1)O=bc[0x2d7];else J==bc[0x2d8]&&(O='');;var P=y['getFileExtension'](I);if(G['_fileTypeArr']['indexOf'](P)!=-0x1)z['EnvConfig']['load']['call'](this,I,J,K,L,M);else{if(!D['getFileInfo'](I)){if(I['indexOf'](bc[0x2d9])!=-0x1){if(z['isZiYu']){var Q=D['ziyuFileData'][I];N['onLoaded'](Q);return;}else{cosnole['log'](bc[0x2da]),D['read'](I,O,new n(G,G['onReadNativeCallBack'],[O,I,J,K,L,M,N]));return;}}if(x['rootPath']=='')var R=I;else R=I['split'](x['rootPath'])[0x0];I['indexOf'](bc[0x2db])!=-0x1||I['indexOf'](bc[0x2dc])!=-0x1?z['EnvConfig']['load']['call'](N,I,J,K,L,M):D['readFile'](R,O,new n(G,G['onReadNativeCallBack'],[O,I,J,K,L,M,N]),I);}else z['EnvConfig']['load']['call'](this,I,J,K,L,M);}},H['resMgrLoad']=function(I,J,K,L,M,N,O){K===void 0x0&&(K=0x0),L===void 0x0&&(L=![]),M===void 0x0&&(M=![]),N===void 0x0&&(N=0x0),O===void 0x0&&(O=0x3),I['indexOf'](bc[0x2dd])!=-0x1&&console['log'](bc[0x2de],I),z['EnvConfig']['resMgrLoad'](I,(P,Q,R)=>{G['prototype']['resMgrLoadCallBack'](P,Q,R,J);},K,L,M,N,O);},H['resMgrLoadCallBack']=function(I,J,K,L){console['log'](bc[0x2df],I,K,D['fileNativeDir']+bc[0x2e0]+D['fileListName']),L(I,J,K);},H['clearRes']=function(I,J){J===void 0x0&&(J=![]);var K=this;K['clearRes'](I,J);var L=D['getFileInfo'](I);if(L&&(I['indexOf'](bc[0x2e1])!=-0x1||I['indexOf'](bc[0x2e2])!=-0x1)){var M=L['md5'],N=D['getFileNativePath'](M);D['remove'](N);}},G['onReadNativeCallBack']=function(I,J,K,L,M,N,O,P,Q){L===void 0x0&&(L=!![]),N===void 0x0&&(N=![]),P===void 0x0&&(P=0x0);if(!P){var R;if(K==bc[0x2e3]||K==bc[0x2e4])R=z['getJson'](Q['data']);else K==bc[0x2e5]?R=y['parseXMLFromString'](Q['data']):R=Q['data'];O['onLoaded'](R),!z['isZiYu']&&z['isPosMsgYu']&&K!=bc[0x2e6]&&wx['postMessage']({'url':J,'data':R,'isLoad':!![]});}else P==0x1&&z['EnvConfig']['load']['call'](O,J,K,L,M,N);},f(G,[bc[0x2e7],function(){return this['_fileTypeArr']=[bc[0x2e8],bc[0x2e9],bc[0x2ea],bc[0x2eb],bc[0x2ec]];}]),G;}(),D=function(G){function H(){H['__super']['call'](this);;}return g(H,bc[0x2ed],G),H['isLoadFile']=function(I){return H['_fileTypeArr']['indexOf'](I)!=-0x1?!![]:![];},H['getFileInfo']=function(I){var J=I['split'](bc[0x2ee])[0x0],K=H['filesListObj'][J];if(K==null)return null;else return K;return null;},H['onFileUpdate']=function(I,J){var K=I['split'](bc[0x2ef]),L=K[K['length']-0x1],M=H['getFileInfo'](J);if(M==null)H['onSaveFile'](J,L);else{if(M['readyUrl']!=J)H['remove'](L,J);}},H['exits']=function(I,J){var K=H['getFileNativePath'](I);H['fs']['getFileInfo']({'filePath':K,'success':function(L){J!=null&&J['runWith']([0x0,L]);},'fail':function(L){J!=null&&J['runWith']([0x1,L]);}});},H['read']=function(I,J,K,L){J===void 0x0&&(J=bc[0x2f0]),L===void 0x0&&(L='');var M;L!=''?M=H['getFileNativePath'](I):M=I,H['fs']['readFile']({'filePath':M,'encoding':J,'success':function(N){K!=null&&K['runWith']([0x0,N]);},'fail':function(N){if(N&&L!='')H['down'](L,J,K,L);else K!=null&&K['runWith']([0x1]);}});},H['readNativeFile']=function(I,J){H['fs']['readFile']({'filePath':I,'encoding':'','success':function(K){J!=null&&J['runWith']([0x0]);},'fail':function(K){J!=null&&J['runWith']([0x1]);}});},H['down']=function(I,J,K,L){J===void 0x0&&(J=bc[0x2f1]),L===void 0x0&&(L='');var M=H['getFileNativePath'](L),N=H['wxdown']({'url':I,'filePath':M,'success':function(O){if(O['statusCode']===0xc8)H['readFile'](O['filePath'],J,K,L);},'fail':function(O){K!=null&&K['runWith']([0x1,O]);}});N['onProgressUpdate'](function(O){K!=null&&K['runWith']([0x2,O['progress']]);});},H['readFile']=function(I,J,K,L){J===void 0x0&&(J=bc[0x2f2]),L===void 0x0&&(L=''),H['fs']['readFile']({'filePath':I,'encoding':J,'success':function(M){if(I['indexOf'](bc[0x2f3])!=-0x1||I['indexOf'](bc[0x2f4])!=-0x1)H['onFileUpdate'](I,L);K!=null&&K['runWith']([0x0,M]);},'fail':function(M){if(M)K!=null&&K['runWith']([0x1,M]);}});},H['downImg']=function(I,J,K){K===void 0x0&&(K='');var L=H['wxdown']({'url':I,'success':function(M){M['statusCode']===0xc8&&H['copyFile'](M['tempFilePath'],K,J);},'fail':function(M){J!=null&&J['runWith']([0x1,M]);}});},H['copyFile']=function(I,J,K){var L=I['split'](bc[0x2f5]),M=L[L['length']-0x1],N=J['split'](bc[0x2f6])[0x0],O=H['getFileInfo'](J),P=H['getFileNativePath'](M);H['fs']['copyFile']({'srcPath':I,'destPath':P,'success':function(Q){if(!O)H['onSaveFile'](J,M),K!=null&&K['runWith']([0x0]);else{if(O['readyUrl']!=J)H['remove'](M,J,K);}},'fail':function(Q){K!=null&&K['runWith']([0x1,Q]);}});},H['getFileNativePath']=function(I){return laya['wx']['mini']['MiniFileMgr']['fileNativeDir']+bc[0x2f7]+I;},H['remove']=function(I,J,K){J===void 0x0&&(J='');var L=H['getFileInfo'](J),M=H['getFileNativePath'](L['md5']);a['loader']['clearRes'](L['readyUrl']),H['fs']['unlink']({'filePath':M,'success':function(N){if(J!='')H['onSaveFile'](J,I);K!=null&&K['runWith']([0x0]);},'fail':function(N){}});},H['onSaveFile']=function(I,J){var K=I['split'](bc[0x2f8])[0x0];H['filesListObj'][K]={'md5':J,'readyUrl':I},H['fs']['writeFile']({'filePath':H['fileNativeDir']+bc[0x2f9]+H['fileListName'],'encoding':bc[0x2fa],'data':JSON['stringify'](H['filesListObj']),'success':function(L){console['log'](bc[0x2fb],L);},'fail':function(L){console['log'](bc[0x2fc],L);}});},H['existDir']=function(I,J){H['fs']['mkdir']({'dirPath':I,'success':function(K){J!=null&&J['runWith']([0x0,{'data':JSON['stringify']({})}]);},'fail':function(K){if(K['errMsg']['indexOf'](bc[0x2fd])!=-0x1)H['readSync'](H['fileListName'],bc[0x2fe],J);else J!=null&&J['runWith']([0x1,K]);}});},H['readSync']=function(I,J,K,L){J===void 0x0&&(J=bc[0x2ff]),L===void 0x0&&(L='');var M=H['getFileNativePath'](I),N;try{N=H['fs']['readFileSync'](M),K!=null&&K['runWith']([0x0,{'data':N}]);}catch(O){K!=null&&K['runWith']([0x1]);}},H['readCache']=function(){},H['writeCache']=function(I){var J=readyUrl['split'](bc[0x300])[0x0];H['filesListObj'][J]={'md5':md5Name,'readyUrl':readyUrl},H['fs']['writeFile']({'filePath':H['fileNativeDir']+bc[0x301]+H['fileListName'],'encoding':bc[0x302],'data':JSON['stringify'](H['filesListObj']),'success':function(K){},'fail':function(K){}});},H['setNativeFileDir']=function(I){H['fileNativeDir']=wx['env']['USER_DATA_PATH']+I;},H['filesListObj']={},H['fileNativeDir']=null,H['fileListName']=bc[0x303],H['ziyuFileData']={},f(H,[bc[0x304],function(){return this['_fileTypeArr']=[bc[0x305],bc[0x306],bc[0x307],bc[0x308],bc[0x309],bc[0x30a],bc[0x30b],bc[0x30c],bc[0x30d],bc[0x30e],bc[0x30f],bc[0x310],bc[0x311],bc[0x312],bc[0x313],bc[0x314]];},bc[0x315],function(){return this['fs']=wx['getFileSystemManager']();},bc[0x316],function(){return this['wxdown']=wx['downloadFile'];}]),H;}(l),E=function(G){function H(){this['_sound']=null,this['url']=null,this['loaded']=![],H['__super']['call'](this),this['_sound']=H['_createSound']();}g(H,bc[0x317],G);var I=H['prototype'];return I['load']=function(J){var K=this;J=x['formatURL'](J),this['url']=J;if(H['_audioCache'][J]){this['event'](bc[0x318]);return;}function L(){if(H['_null']!=undefined)K['_sound']['onCanplay'](H['_null']),K['_sound']['onError'](H['_null']);else try{K['_sound']['onCanplay'](null),K['_sound']['onError'](null),H['_null']=null;}catch(Q){console['warn'](bc[0x319]+Q),K['_sound']['onCanplay'](O),K['_sound']['onError'](O),H['_null']=O;}}function M(){L(),P['loaded']=!![],P['event'](bc[0x31a]),H['_audioCache'][P['url']]=P;}function N(Q){console['error'](bc[0x31b]+Q['errCode']+bc[0x31c]+Q['errMsg']),L(),P['event'](bc[0x31d]);}function O(){}this['_sound']['onCanplay'](M),this['_sound']['onError'](N),this['_sound']['src']=J;var P=this;},I['play']=function(J,K){J===void 0x0&&(J=0x0),K===void 0x0&&(K=0x0);var L;if(this['url']==v['_tMusic']){if(!H['_musicAudio'])H['_musicAudio']=H['_createSound']();L=H['_musicAudio'];}else L=H['_createSound']();L['src']=this['url'];var M=new F(L);return M['url']=this['url'],M['loops']=K,M['startTime']=J,M['play'](),v['addChannel'](M),M;},I['dispose']=function(){var J=H['_audioCache'][this['url']];J&&(J['src']='',delete H['_audioCache'][this['url']]);},h(0x0,I,bc[0x31e],function(){return this['_sound']['duration'];}),H['_createSound']=function(){return H['_id']++,z['window']['wx']['createInnerAudioContext']();},H['_musicAudio']=null,H['_id']=0x0,H['_audioCache']={},H['_null']=undefined,H;}(l),F=function(G){function H(J){this['_audio']=null,this['_onEnd']=null,H['__super']['call'](this),this['_audio']=J,this['_onEnd']=y['bind'](this['__onEnd'],this),J['onEnded'](this['_onEnd']);}g(H,bc[0x31f],G);var I=H['prototype'];return I['__onEnd']=function(){if(this['loops']==0x1){this['completeHandler']&&(a['timer']['once'](0xa,this,this['__runComplete'],[this['completeHandler']],![]),this['completeHandler']=null);this['stop'](),this['event'](bc[0x320]);return;}this['loops']>0x0&&this['loops']--,this['startTime']=0x0,this['play']();},I['__onNull']=function(){},I['play']=function(){this['isStopped']=![],v['addChannel'](this);if(this['_audio'])this['_audio']['play']();},I['stop']=function(){this['isStopped']=!![],v['removeChannel'](this),this['completeHandler']=null;if(!this['_audio'])return;this['_audio']['stop']();if(H['_null']!=undefined)this['_audio']['onEnded'](H['_null']);else try{this['_audio']['onEnded'](null),H['_null']=null;}catch(J){console['warn'](bc[0x321]+J),this['_audio']['onEnded'](y['bind'](this['__onNull'],this)),H['_null']=y['bind'](this['__onNull'],this);}this['_audio']=null;},I['pause']=function(){this['isStopped']=!![],this['_audio']['pause']();},I['resume']=function(){if(!this['_audio'])return;this['isStopped']=![],v['addChannel'](this),this['_audio']['play']();},h(0x0,I,bc[0x322],function(){if(!this['_audio'])return 0x0;return this['_audio']['currentTime'];}),h(0x0,I,bc[0x323],function(){if(!this['_audio'])return 0x0;return this['_audio']['duration'];}),h(0x0,I,bc[0x324],function(){return 0x1;},function(J){}),H['_null']=undefined,H;}(u);}(window,document,Laya));typeof define===bc[0x325]&&define['amd']&&define(bc[0x326],[bc[0x327],bc[0x328]],function(require,exports){'use strict';Object['defineProperty'](exports,bc[0x329],{'value':!![]});for(var a in Laya){var b=Laya[a];b&&b['__isclass']&&(exports[a]=b);}});