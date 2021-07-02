@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe" --max-old-space-size=8192  "%~dp0\node_modules\gulp\bin\gulp.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node --max-old-space-size=8192  "%~dp0\node_modules\gulp\bin\gulp.js" %*
)