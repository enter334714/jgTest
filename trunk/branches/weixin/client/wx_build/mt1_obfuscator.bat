@echo off
echo ��ʼ����1������
cd ../../client_tools/client_gulp
call node --max-old-space-size=8192 gulpfile.js
call gulp build-babel-obfuscator-MT1
echo ����һ���������
@pause