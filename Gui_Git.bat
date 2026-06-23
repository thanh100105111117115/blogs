@echo off
chcp 65001 > nul

:: 🌟 ĐÂY LÀ DÒNG QUAN TRỌNG NHẤT: Ép file .bat chạy đúng thư mục D:\blogs-main
cd /d "%~dp0"

echo ===================================================
echo   TIẾN TRÌNH TỰ ĐỘNG CẬP NHẬT CODE LÊN GITHUB
echo ===================================================
echo.

echo [+] Thư mục hiện tại: %CD%
echo.

:: Gom tất cả thay đổi
echo [+] Đang gom tất cả các file thay đổi...
git add .

:: Tự động lấy ngày giờ làm ghi chú
for /f "tokens=2 delims==" %%i in ('wmic os get localdatetime /value') do set dt=%%i
set current_time=%dt:~0,4%-%dt:~4,2%-%dt:~6,2% %dt:~8,2%:%dt:~10,2%
set commit_message=Auto update: %current_time%

echo [+] Đang tạo ghi chú: "%commit_message%"...
git commit -m "%commit_message%"

:: Đẩy thẳng code lên GitHub
echo [+] Đang đẩy code lên GitHub...
git push origin main

echo.
echo ===================================================
echo   [OK] Đã cập nhật lên GitHub thành công!
echo ===================================================
echo Cửa sổ này sẽ tự động đóng sau 3 giây...
timeout /t 3 > nul