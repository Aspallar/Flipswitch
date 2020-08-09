@echo off
call node_modules\.bin\eslint.cmd src
if errorlevel 1 goto :eofbuil   
call node_modules\.bin\terser.cmd src\flipswitch.js --compress --mangle --output src\flipswitch.min.js
