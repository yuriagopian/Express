    let request = require('request')
var logger = require('log4js').getLogger("oauth");

// função auxiliar para resposta
var sendJsonResponse = (res, status, content) => {
    res.status(status)
    res.json(content)
}

// GET
module.exports.Status = function (req, res) {
    logger.debug("Status");
    res.json({
        status: 'OAUTH OK'
    });
}

// POST
module.exports.Token = function (req, res) {

    var username = process.env.CARADHRAS_USERNAME;
    var password = process.env.CARADHRAS_PASSWORD;
    var auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

    logger.debug("Token");
    const options = {
        url: `${process.env.CARADHRAS_AUTH_URL}`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': auth
        }
    }   
    request(options, (_err, httpResponse, body) => {
        if(_err){
            logger.error("Erro: ", _err)
            res.render('error', {
                message: _err.message,
                error: _err
            });
            //return reject(_err);
        }
        sendJsonResponse(res, httpResponse.statusCode, JSON.parse(body))
    })
}