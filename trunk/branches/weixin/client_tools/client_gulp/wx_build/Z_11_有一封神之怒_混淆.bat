@echo off

echo 开始微信小游戏打包------Z11_有一-一封神之怒_混淆

cd ..
call set NODE_OPTIONS=--max-old-space-size=12288 
call node gulpfile.js
rem call gulp scope-Z_11
rem call gulp build-all-Z_11
call gulp   --gulpfile gulpfile_obfuscation.js  build-babel-obfuscator-Z_11
call gulp   --gulpfile gulpfile_obfuscation.js  CREATE_REFUSEFILE_Z_11
echo 微信小游戏打包完成-------Z11_有一-一封神之怒_混淆

@pause