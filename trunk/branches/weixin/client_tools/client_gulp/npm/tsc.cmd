@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\node_modules\typescript\bin\tsc" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  --max_old_space_size=4096 "%~dp0\node_modules\typescript\bin\tsc" %*
)