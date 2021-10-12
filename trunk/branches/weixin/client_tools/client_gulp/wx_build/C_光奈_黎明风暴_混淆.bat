@echo off

call set NODE OPTIONS=-max-old-space-size = 8172
cd ../
call gulp   --gulpfile gulpfile_obfuscation.js  build-babel-obfuscator-C
@pause