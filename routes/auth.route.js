const { loginController } = require('../controllers/user.controller')
const basicResponse = require('../models/response.model');
const { validations } = require('../validations/user.validation');
const routes = [
  {
    method: 'POST',
    path: '/user',
    config: {
      tags: ['api'],
      description: 'login',
      validate: validations.user,
      plugins: {
        'hapi-swagger': {
          payloadType: 'form',
          responses: basicResponse
        }
      }
    },
    handler: loginController
  }
]

module.exports = routes;