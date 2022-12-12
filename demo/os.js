import * as os from 'os'

console.log('Operation system: ', os.platform())
console.log('Processor\'s architecture: ', os.arch())
console.log('Processor\'s info', os.cpus())
console.log('Free memory: ', os.freemem())
console.log('Total memory: ', os.totalmem())
console.log('Home directory: ', os.homedir())
console.log('System running time: ', os.uptime())

