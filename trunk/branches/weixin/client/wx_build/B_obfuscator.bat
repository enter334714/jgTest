@echo off
echo 开始B包混淆
cd ../../client_tools/client_gulp
call node --max-old-space-size=8192 gulpfileB.js
call gulp build-babel-obfuscator-B
echo B混淆完成
@pause