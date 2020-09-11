const Response = require('./../classes/response');
const { UNAUTHORIZED} = require('./../errorDefinition/errors.map');

const ACCESS_KEY = process.env.CLIENT_KEY;
class ClientKeyMiddleware {
    static async clientKey(req, res, next) {
        try {
            const givenClientKey = req.header('Client-key');

            if (!(givenClientKey === ACCESS_KEY)) {
              throw UNAUTHORIZED
            }
            req.client = {
              key: "com.airasia.system"
            };
            next();
         
        } catch (error) {
            console.log(error);
            res.sendError(error, req.header('languageId'),null,error);
        }
    }
}

module.exports = ClientKeyMiddleware;
