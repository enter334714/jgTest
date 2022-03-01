@echo off

echo 开始微信小游戏打包---------------------E包

cd ..
call set NODE_OPTIONS=--max-old-space-size=12288 
call node gulpfile.js
rem call gulp scope-E
rem call gulp build-all-E
call gulp   --gulpfile gulpfile_obfuscation.js  build-babel-obfuscator-E
call gulp   --gulpfile gulpfile_obfuscation.js  CREATE_REFUSEFILE_E
echo 微信小游戏打包完成---------------------E包

@pause