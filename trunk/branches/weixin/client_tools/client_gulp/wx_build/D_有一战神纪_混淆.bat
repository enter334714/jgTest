@echo off

echo 开始微信小游戏打包---------------------D包

cd ..
call set NODE_OPTIONS=--max-old-space-size=12288 
call node gulpfile.js
rem call gulp scope-D
rem call gulp build-all-D
call gulp   --gulpfile gulpfile_obfuscation.js  build-babel-obfuscator-D
call gulp   --gulpfile gulpfile_obfuscation.js  CREATE_REFUSEFILE_D
echo 微信小游戏打包完成---------------------D包

@pause