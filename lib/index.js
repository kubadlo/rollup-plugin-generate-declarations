const childProcess = require('child_process');
const exec = childProcess.exec;

module.exports = function () {
  return {
    name: 'generate-declarations',
    buildEnd: (err) => {
      if (err) {
        return;
      }

      exec('tsc --emitDeclarationOnly');
    },
  };
};
