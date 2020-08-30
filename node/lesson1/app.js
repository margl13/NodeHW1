const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'girls', 'olga.txt');
const filePath1 = path.join(process.cwd(), 'girls', 'dasha.txt');

const filePath2 = path.join(process.cwd(), 'boys', 'pasha.txt');
const filePath3 = path.join(process.cwd(), 'boys', 'sasha.txt');

fs.mkdir(path.join(__dirname, 'girls'), (err) => {
    if (err) {
        console.log(err);
    }
});

fs.mkdir(path.join(__dirname, 'boys'), (err) => {
    if (err) {
        console.log(err);
    }
});

fs.writeFile(filePath, 'Olga', (err) => {
    if (err) {
        console.log(err);
    }
});

fs.writeFile(filePath1, 'Dasha', (err) => {
    if (err) {
        console.log(err);
    }
});

fs.writeFile(filePath2, 'Pasha', (err) => {
    if (err) {
        console.log(err);
    }
});

fs.writeFile(filePath3, 'Sasha', (err) => {
    if (err) {
        console.log(err);
    }
});


fs.rename(filePath2, path.join(process.cwd(), 'girls', 'pasha.txt'), (err) => console.log(err));
fs.rename(filePath3, path.join(process.cwd(), 'girls', 'sasha.txt'), (err) => console.log(err));
fs.rename(filePath, path.join(process.cwd(), 'boys', 'olga.txt'), (err) => console.log(err));
fs.rename(filePath1, path.join(process.cwd(), 'boys', 'dasha.txt'), (err) => console.log(err));


