const fs = require('fs');
const csv = require('csv-parser');

const data = [];

fs.createReadStream('BTC-USD.csv')
.pipe(csv())
.on('data', (row)=>{
    const date = {
        date: row.Date,
        open: +row.Open,
        high: +row.High,
        low: +row.Low,
        close: +row.Close,
        adjClose: +row['Adj Close'],
        volume: +row.Volume
    };
    // console.log(date);
    data.push(date);
});

module.exports = data;