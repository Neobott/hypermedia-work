@echo off

:menu
cls
echo Menu:
echo 1. Display Current Time
echo 2. Display Today's Date
echo 3. Display MAC Address
echo 4. Display IP Address
echo 5. Display Session Information
echo 6. Exit
echo.
set /p choice=Enter your choice (1-6): 

if "%choice%"=="1" (
    call :display_time
) else if "%choice%"=="2" (
    call :display_date
) else if "%choice%"=="3" (
    call :display_mac
) else if "%choice%"=="4" (
    call :display_ip
) else if "%choice%"=="5" (
    call :display_session
) else if "%choice%"=="6" (
    goto :eof
) else (
    echo Invalid choice. Please enter a number from 1 to 6.
    pause
    goto menu
)

goto :eof

:display_time
cls
echo Current Time:
time /t
pause
goto menu

:display_date
cls
echo Today's Date:
date /t
pause
goto menu

:display_mac
cls
echo MAC Address:
getmac
pause
goto menu

:display_ip
cls
echo IP Address:
ipconfig | findstr IPv4
pause
goto menu

:display_session
cls
echo Session Information:
whoami
pause
goto menu