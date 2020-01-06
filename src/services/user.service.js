const { validateUser } = require('../validations/user.validation')
const { findByEmail, createUser } = require('../models/user.model');
const bcrypt = require('bcrypt');

const createNewUser = async (request, h) => {
    try {
        let _user = await findByEmail(request.email);
        if (_user)
            return {
                statusCode: 400,
                error: "Bad request",
                message: "User is exist"
            };
        else {
            let _user = request;
            let hashed = bcrypt.hashSync(_user.password, 10);
            _user.password = hashed;
            return await createUser(_user);
        }
    }
    catch (ex) {
        throw ex;
    }
}

const login = async (request, h) => {
    try {
        const { error } = validateUser(request);
        if (error)
            return {
                statusCode: 400,
                error: "Bad request",
                message: error.details[0].message
            };

        let _user = await findByEmail(request.email);
        if (!_user)
            return {
                statusCode: 400,
                error: "Bad request",
                message: "User is invalid"
            };
        let rs = bcrypt.compareSync(request.password, _user.password);
        if (!rs) {
            return {
                statusCode: 400,
                error: "Bad request",
                message: "User or password is invalid"
            };
        }
        else {
            let token = _user.generateAuthToken();
            return {
                credentials: {
                    id: _user._id,
                    username: _user.username,
                    email: _user.email,
                },
                artifacts: token
            }

        }
    }
    catch (ex) {
        throw ex;
    }
}

module.exports = { login, createNewUser };