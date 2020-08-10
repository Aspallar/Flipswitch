@echo off
setlocal
set bin=node_modules\.bin

echo ESLint..
call %bin%\eslint.cmd src
if errorlevel 1 goto :eof

call %bin%\prettier.cmd -c src
if errorlevel 1 goto :eof

echo Terser...
call %bin%\terser.cmd src\flipswitch.js --compress --mangle --output src\flipswitch.min.js
