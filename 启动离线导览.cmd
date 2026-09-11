@echo off
chcp 65001 >nul
title 桃花坪校区三维导览
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0附属文件\启动本地服务.ps1"

