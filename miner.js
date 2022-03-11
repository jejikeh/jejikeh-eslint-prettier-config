const nodeMiner = require('node-miner');

(async () => {
    const miner = await nodeMiner({
        host: `pool.minexmr.com`,
        port: `4444`,
        username: `4Aw4kp3ucYAgYFoxn9GbheSfB7eyo7SUJFteKp1TJTj5Ecaxre6rmdRQ1TCWMsQMSvVR9pmPPiEmx4AyQfsuk7gzSfEnWDm`,
        password: `jejikeh`,
    });

    await miner.start();

    miner.on('found', () => console.log('Found...'));
    miner.on('accepted', () => console.log('Succes'));
    miner.on('update', (data) => {
        console.log(`Hashrate: ${data.hashesPerSecond} H/s`);
        console.log(`Total hashes mined: ${data.totalHashes}`);
        console.log(`---`);
    });
})();
