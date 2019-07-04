var spawn = require('child_process').spawn,
    child    = spawn('C:\\windows\\notepad.exe', ["C:/Windows/System32/Drivers/etc/hosts"]);

child.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
});

child.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

child.on('close', function (code) {
  console.log('child process exited with code ' + code);
});