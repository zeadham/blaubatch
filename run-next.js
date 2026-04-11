const { spawn } = require('child_process')
const path = require('path')

process.chdir(path.dirname(__filename))

const child = spawn(
  process.execPath,
  ['node_modules/next/dist/bin/next', 'dev', '--port', '3001'],
  { stdio: 'inherit', shell: false }
)

child.on('exit', (code) => process.exit(code ?? 0))
