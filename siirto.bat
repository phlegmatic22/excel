@ECHO OFF
SET var=%~dp0

:Ask

echo Do you want to copy these files?(y/n)
set INPUT=
set /P INPUT=Type input: %=%
If /I "%INPUT%"=="y" goto yes
If /I "%INPUT%" =="n" goto no1
If /I Not "%INPUT%" == "y" goto no1

:yes
ROBOCOPY "%var%\kansio2" "%var%\kansio1" "bb*.zip"

:no1

echo Quitting...
pause
GOTO END

:END
