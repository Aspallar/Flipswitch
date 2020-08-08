@echo off
call node_modules\.bin\eslint.cmd src\*.js
if errorlevel 1 goto :eof
call node_modules\.bin\terser.cmd src\flipswitch.js --compress --mangle --output src\flipswitch.min.js
