const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (request, response, next) => {
    //get the token from the header if present
    const token = request.headers['x-access-token'] || request.headers['authorization'];

    //if no token found, return response (without going to the next middelware)
    if (!token) return response.status(401).send('Access denied. No token provided.');
    try {
        //if can verify the token, set req.user and pass to next middleware
        jwt.verify(token, config.private_key, (err, decoded) => {
            req.user = decoded;
            next();
        });
    }
    catch (ex) {
        //if invalid token
        res.status(400).send("Invalid token.");
    }
}