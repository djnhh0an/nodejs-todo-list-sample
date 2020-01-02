const userService = require('../services/user.service');

const loginController = async (request, response) => {
    debugger
    return await userService.login(request.payload);
};

module.exports = {
    loginController
};