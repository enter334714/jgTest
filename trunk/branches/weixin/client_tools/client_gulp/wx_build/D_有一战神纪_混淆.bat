@echo off

echo ��ʼ΢��С��Ϸ���---------------------D��

cd ..
call set NODE_OPTIONS=--max-old-space-size=12288 
call node gulpfile.js
rem call gulp scope-D
rem call gulp build-all-D
call gulp   --gulpfile gulpfile_obfuscation.js  build-babel-obfuscator-D
call gulp   --gulpfile gulpfile_obfuscation.js  CREATE_REFUSEFILE_D
echo ΢��С��Ϸ������---------------------D��

@pause