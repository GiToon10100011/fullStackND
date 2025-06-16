const fs = require('fs');

const copy = function (src, dest) {
    const readStream = fs.createReadStream(src);
    const writeStream = fs.createWriteStream(dest);

    readStream.pipe(writeStream);
    //읽기 스트림(Readable Stream)과 쓰기 스트림(Writable Stream)을 연결해서 데이터를 자동으로 전달해주는 역할을 한다
    console.log('>>>파일 카피 중....<<<');
};
console.log('복사 시작~~~');
copy('./readme.txt', './readme_copy.txt');

console.log('복사 완료!');

const zlib = require('zlib');
//const fs = require('fs');

fs.createReadStream('out.txt')
    .pipe(zlib.createGzip()) // gzip 압축=>단일 파일 압축  zip 압축 여러 파일과 폴더 압축. zip은 외부 라이브러리 필요.
    .pipe(fs.createWriteStream('out.txt.gz'))
    .on('finish', () => {
        console.log('파일 압축 완료');
    });
