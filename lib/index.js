import { exec } from 'child_process';

export default function generateDeclarations() {
  return {
    name: 'generate-declarations',
    buildEnd: (err) => {
      if (err) {
        return;
      }

      exec('tsc --emitDeclarationOnly');
    },
  };
}
