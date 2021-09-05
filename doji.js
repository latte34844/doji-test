const data = require('./data');

exports.getDoji = (req,res)=>{
    const doji= [];
    let count = 0;
    data.forEach(date=>{
        if(doji_match(date, req.params.type)){
            doji.push(date.date);
        }
    });
    const result ={
        coin: "bitcoin",
        type: req.params.type,
        dates: doji
    };
    // console.log(result);
    res.send(JSON.stringify(result));
}

const doji_match = (date, dojiType)=>{
    if((Math.abs((date.open - date.close) / (date.high - date.low)) > 0.1) || Number.isNaN(date.open)){
        return false;
    }else{
        // return true;
        const median = (date.open + date.close) /2;
        const range = date.high - date.low;
        switch(dojiType){
            case 'gravestone-doji':
                if(median < (range*0.25 + date.low)){
                    return true;
                }
                break;
            case 'dragonfly-doji':
                if(median > (range*0.75 + date.low)){
                    return true;
                }
                break;
            case 'long-legged-doji':
                if(median > (range*0.25 + date.low) && median < (range*0.75 + date.low)){
                    return true; 
                }
            default:
                return false; 
        }
    }
};