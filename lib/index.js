const exec = require('child_process').exec;

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
