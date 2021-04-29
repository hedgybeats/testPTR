@ECHO OFF
if not exist S: goto :fail
cd %1
sqlite3 PTRdb.sqlite3 ".backup 'S:\PTRdbBackup.sqlite3'"
exit /b 0
:fail
exit /b 1