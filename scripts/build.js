const childProcess = require('child_process');
const execSync = childProcess.execSync;

const run = (command) => {
    execSync(command, {stdio: 'inherit'});
};

(async () => {
    console.log('Generating TS defs...');
    run('yarn gen-ts-defs');
})();
