@echo off

echo ��ʼ΢��С��Ϸ���------Z11_��һ-һ����֮ŭ_����

cd ..
call set NODE_OPTIONS=--max-old-space-size=12288 
call node gulpfile.js
rem call gulp scope-Z_11
rem call gulp build-all-Z_11
call gulp   --gulpfile gulpfile_obfuscation.js  build-babel-obfuscator-Z_11
call gulp   --gulpfile gulpfile_obfuscation.js  CREATE_REFUSEFILE_Z_11
echo ΢��С��Ϸ������-------Z11_��һ-һ����֮ŭ_����

@pause