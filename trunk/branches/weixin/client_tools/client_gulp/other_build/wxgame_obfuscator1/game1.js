var H = wx.$F;
require('weapp-adapter.js'), window['self'] = window, window['DEBUG'] = !![], window['GROUP_ID'] = 0x2, window['gameVersion'] = '1.0.0', 

window['loadingTime'] = 0x7d0, window['isWorkers'] = !![], require('./code.js'), window['Parser'] = require('./libs/htmundefined_parser'), wx['setPreferredFramesPerSecond'](0x3c), window['fileMap'] = new Map(), window['WXFS'] = wx['getFileSystemManager'](), window['enterGame'] = () => {
  MainRun();
}, window['onWorkerMessage'] = ihsw9t => {
  if (ihsw9t['type'] == 'Decode') window['DecodeCallBack'](ihsw9t['data']);else ihsw9t['type'] == 'Download' && (!ihsw9t['data']['result'] ? window['listener'](![], ihsw9t['data']['url']) : readFile(ihsw9t['data']));
}, window['sendDecode'] = velb2a => {
  velb2a['time'] = new Date()['getTime'](), window['WXWorker']['postMessage']({ 'type': 'Decode', 'data': velb2a });
}, window['WXDownloadFile'] = (i1w$n, st_h) => {
  window['listener'] = st_h, wx['downloadFile']({ 'url': i1w$n, 'fileType': 'arraybuffer', 'success': function ($9hwi7) {
      let _xj4kc = { 'result': !![], 'tempFilePath': $9hwi7['tempFilePath'], 'dataLength': $9hwi7['dataLength'], 'url': i1w$n };window['onWorkerMessage']({ 'type': 'Download', 'data': _xj4kc });
    }, 'fail': function (pmu3) {
      console['error']('worker', '下载文件失败:' + i1w$n, pmu3);let a3pmb = { 'result': ![], 'tempFilePath': '', 'dataLength': 0x0, 'url': i1w$n };window['onWorkerMessage']({ 'type': 'Download', 'data': a3pmb });
    } });
}, window['WXWorker'] = wx['createWorker']('workers/routine.js', { 'useExperimentalWorker': !![] }), window['WXWorker']['onProcessKilled'](function () {
  window['WXWorker'] = wx['createWorker']('workers/routine.js', { 'useExperimentalWorker': !![] });
}), window['WXWorker']['onMessage'](window['onWorkerMessage']), window['weChatWorker'] = r1z6n$ => {
  return window['DecodeCallBack'] = r1z6n$, window['WXWorker'];
}, window['readFile'] = xt_ck5 => {
  fileMap['set'](xt_ck5['url'], xt_ck5['tempFilePath']);let hiw9s = new ArrayBuffer(xt_ck5['dataLength']);WXFS['open']({ 'filePath': xt_ck5['tempFilePath'], 'flag': 'r', 'success'(jmp) {
      WXFS['read']({ 'fd': jmp['fd'], 'arrayBuffer': hiw9s, 'length': xt_ck5['dataLength'], 'success'(j3up84) {
          window['listener'](!![], xt_ck5['url'], hiw9s), WXFS['close']({ 'fd': jmp['fd'] });
        }, 'fail'(d0oqz) {
          console['log']('file', '文件读取失败:' + JSON['stringify'](jmp)), window['listener'](![], xt_ck5['url']);
        } });
    }, 'fail'(lmba2e) {
      console['log']('file', '文件打开失败:' + JSON['stringify'](lmba2e), xt_ck5['url']), window['listener'](![], xt_ck5['url']);
    } });
};