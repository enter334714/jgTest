@echo off

echo ��ʼ΢��С��Ϸ���---------------------E��

cd ..
call set NODE_OPTIONS=--max-old-space-size=12288 
call node gulpfile.js
rem call gulp scope-E
rem call gulp build-all-E
call gulp   --gulpfile gulpfile_obfuscation.js  build-babel-obfuscator-E
call gulp   --gulpfile gulpfile_obfuscation.js  CREATE_REFUSEFILE_E
echo ΢��С��Ϸ������---------------------E��

@pause