@echo off


cd ..
call set NODE OPTIONS=--max-old-space-size=8192
call gulp  scope-A
call node gulpfile.js
call gulp  build-all-A
@pause