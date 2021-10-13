@echo off

call set NODE OPTIONS=--max-old-space-size=8192
cd ../
call gulp   --gulpfile gulpfile_obfuscation.js  build-babel-obfuscator-I
call gulp   --gulpfile gulpfile_obfuscation.js  CREATE_REFUSEFILE_I
@pause