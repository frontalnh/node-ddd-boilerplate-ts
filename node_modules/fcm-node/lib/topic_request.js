var https = require('https');

function TopicRequest(options, data, CB){
    const payload = JSON.stringify(data);
    const request = https.request(options, (res) => {
        "use strict";
        let body = '';

        if(res.statusCode !== 200){
            CB({
                statusCode: res.statusCode,
                message: res.statusMessage
            }, null);
        }else{
            res.on('data', function(chunk){
                body += chunk;
            });

            res.on('end', function(){
                CB(null, JSON.parse(body))
            });
        }
    }).on('error', (e) => {
         CB(JSON.parse(e), null);
    }).end(payload);
}

module.exports = TopicRequest;
