cd release\wxgame
::javascript-obfuscator main.js  --output main.js
::echo %date%  %time% 
uglifyjs code.js -c -o code.js
javascript-obfuscator code.js  --output code.js
echo %date%  %time% 
pause
