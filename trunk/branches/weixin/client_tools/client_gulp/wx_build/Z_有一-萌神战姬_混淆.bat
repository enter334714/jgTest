@echo off

echo 开始微信小游戏打包------Z_有一-萌神战姬_混淆

cd ..
call set NODE_OPTIONS=--max-old-space-size=12288 
call node gulpfile.js
rem call gulp scope-Z
rem call gulp build-all-Z
call gulp   --gulpfile gulpfile_obfuscation.js  build-babel-obfuscator-Z
call gulp   --gulpfile gulpfile_obfuscation.js  CREATE_REFUSEFILE_Z
echo 微信小游戏打包完成-------Z_有一-萌神战姬_混淆

@pause