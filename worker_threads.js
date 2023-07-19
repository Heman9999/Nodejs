const { parentPort} = require('node:worker_threads')

let j = 0
for(i = 0; i<1200000000; i++){ 
    j++;
}

parentPort.postMessage(j)

