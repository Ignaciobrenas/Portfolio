@echo off
echo ========================================================
echo Configurando entorno Node.js local para el Portfolio...
echo ========================================================
set PATH=%~dp0node-bin\node-v20.13.1-win-x64;%PATH%
echo Iniciando servidor de desarrollo...
npm run dev
