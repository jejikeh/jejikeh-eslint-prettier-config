const net = require('net');
// const username;
// const diff;
// const x = 1;
const host = 'magi.duinocoin.com'; // https://github.com/revoxhere/duco-webservices/blob/master/js/webminer/worker.js
const port = 14808;

function getTime() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = h < 10 ? `0${h}` : h;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;

    return `${h}:${m}:${s}`;
}

onmessage = function (event) {
    if (event.data.startsWith('Start')) {
        const getData = event.data.split(',');
    }
};
function connect() {
    const socket = new net.Socket();
    socket.connect(port, host);
    socket.on('connect', () => {
        console.log(`Established a TCP connection with ${host}:${port}`);
    });
    socket.onmessage = (event) => {
        console.log('33');
        const serverMessage = event.data;
        console.log(serverMessage);
    };
}

connect();
