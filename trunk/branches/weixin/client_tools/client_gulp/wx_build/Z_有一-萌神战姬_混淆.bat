@echo off

echo ��ʼ΢��С��Ϸ���------Z_��һ-����ս��_����

cd ..
call set NODE_OPTIONS=--max-old-space-size=12288 
call node gulpfile.js
rem call gulp scope-Z
rem call gulp build-all-Z
call gulp   --gulpfile gulpfile_obfuscation.js  build-babel-obfuscator-Z
call gulp   --gulpfile gulpfile_obfuscation.js  CREATE_REFUSEFILE_Z
echo ΢��С��Ϸ������-------Z_��һ-����ս��_����

@pause