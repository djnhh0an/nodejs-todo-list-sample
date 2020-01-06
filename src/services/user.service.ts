import { validateUser } from "../validations/user.validation";
import { findByEmail, createUser, generateAuthToken } from "../models/user.model";
import bcrypt from "bcrypt";

const createNewUser = async (request: any, h: any) => {
    const _user = await findByEmail(request.email);
    if (_user)
        return {
            statusCode: 400,
            error: "Bad request",
            message: "User is exist"
        };
    else {
        const _user = request;
        const hashed = bcrypt.hashSync(_user.password, 10);
        _user.password = hashed;
        return await createUser(_user);
    }
};

const login = async (request: any, h: any) => {

    const { error } = validateUser(request);
    if (error)
        return {
            statusCode: 400,
            error: "Bad request",
            message: error.details[0].message
        };

    const _user = await findByEmail(request.email) as any;
    if (!_user)
        return {
            statusCode: 400,
            error: "Bad request",
            message: "User is invalid"
        };
    const rs = bcrypt.compareSync(request.password, _user.password);
    if (!rs) {
        return {
            statusCode: 400,
            error: "Bad request",
            message: "User or password is invalid"
        };
    }
    else {
        const token = generateAuthToken();
        return {
            credentials: {
                id: _user._id,
                username: _user.username,
                email: _user.email,
            },
            artifacts: token
        };

    }

};

export { login, createNewUser };