@echo off
:: Thay đường dẫn dưới đây bằng đường dẫn thật đến thư mục dự án của bạn
cd /d "E:\project 2\web2\my-youtube-blog"
title Git Auto Update - My Portfolio
color 0A

echo ===========================================
echo    DANG CHUAN BI DAY CODE LEN GITHUB...
echo ===========================================

:: 1. Ghi nhan tat ca thay doi
echo [1/3] Dang ghi nhan thay doi (git add .)
git add .
if %errorlevel% neq 0 (
    color 0C
    echo LOI: Khong the thuc hien git add.
    pause
    exit /b
)

:: 2. Commit voi thoi gian tu dong
set datetime=%date% %time%
echo [2/3] Dang tao ban luu (git commit)
git commit -m "Auto update: %datetime%"
if %errorlevel% neq 0 (
    echo Khong co thay doi moi de commit.
)

:: 3. Day len GitHub
echo [3/3] Dang day code len 'main' (git push)
git push origin main
if %errorlevel% neq 0 (
    color 0C
    echo LOI: Khong the push code. Kiem tra mang hoac Token!
    pause
    exit /b
)

echo ===========================================
echo    THANH CONG! CODE DA LEN GITHUB ROI.
echo ===========================================
color 0B
echo Nhan phim bat ky de thoat...
pause > nul