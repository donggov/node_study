function print(msg){
  console.log(msg);
}

print('1. start');

// setTimeout(print, 1000, '3. setTimeout');
// setInterval(print, 1000*2, '4. setTimeout');

setImmediate(print, '3. setImmediate');
setTimeout(print, 0, '4. setTimeout');

process.nextTick(print, 'nextTick.');

print('2. finish');
