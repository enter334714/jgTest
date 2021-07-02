@echo off
echo 开始迈腾1包混淆
cd ../../client_tools/client_gulp
call node --max-old-space-size=8192 gulpfile.js
call gulp build-babel-obfuscator-MT1
echo 迈腾一包混淆完成
@pause