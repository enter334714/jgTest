@echo off
echo ��ʼB������
cd ../../client_tools/client_gulp
call node --max-old-space-size=8192 gulpfileB.js
call gulp build-babel-obfuscator-B
echo B�������
@pause