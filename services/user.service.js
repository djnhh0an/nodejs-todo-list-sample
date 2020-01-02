const { User, findByEmail } = require('../models/user.model');
const validate = require('../validations/user.validation')

const login = async (request, response) => {
    try {
        const { error } = validate(request);
        if (error) return response.status(400).send(error.details[0].message);
    
        let _user = await findByEmail({ email: request.email });
        if (!_user) return response.status(400).send("User is invalid.");
    
        await bcrypt.compare(request.password, _user.password, (err, result) => {
            if (err) console.log(err)
            else {
                if (result) {
                    const token = _user.generateAuthToken();
                    response.header("x-auth-token", token).send({
                        authToken: token
                    });
                }
            }
        });
    }
    catch (ex) {
        throw ex;
    }
}

module.exports = { login };