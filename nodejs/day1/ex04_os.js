//os모듈(내장모듈)
var os = require('os');
console.log('OS 시스템의 type : %s', os.type());
console.log('시스템의 hostname: %s', os.hostname()); //운영체테 호스트명

console.log('시스템의 메모리: %d bytes / %d bytes', os.freemem(), os.totalmem());

// 바이트를 KB로 변환
const freeMemoryInMB = os.freemem() / (1024 * 1024);
const totalMemoryInMB = os.totalmem() / (1024 * 1024);

console.log('시스템의 메모리: %d MB / %d MB', freeMemoryInMB.toFixed(2), totalMemoryInMB.toFixed(2));
console.log('시스템의 메모리: %d GB / %d GB', (freeMemoryInMB / 1024).toFixed(1), (totalMemoryInMB / 1024).toFixed(1));
console.log('---CPU정보---------------------\n');
console.dir(os.cpus().length);
//논리적 CPU 코어(Logical CPU cores) 수를 반환. 이 값은 물리적인 코어뿐만 아니라 각 코어의 하이퍼스레딩(Logical Processors)도 포함된 논리적 코어의 총합
console.log(os.cpus());
console.log('---시스템의 네트워크 정보--------------\n');
console.dir(os.networkInterfaces());
