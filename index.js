let process = require('child_process');

//-----------EXEC----------------------

process.exec('dir', (error, std_out, std_error) => {
    console.log(`Output =>  ${std_out}`);

    if(std_error)
        console.log(`Command Error => ${std_error}`);
    
    if(error)
        console.log(`exec error => ${error}`);
    
});

//-----------SPAWN-----------------------


var command = process.spawn('git', ['init', 'origin', 'master']);

command.stdout.on('data', data =>  {
    console.log(`stdout: ${data}`);
});
command.stderr.on('data', data => {
    console.log(`stderr: ${data}`);
});
    command.on('close', code => {
    console.log(`child process exited with code ${code}`);
});