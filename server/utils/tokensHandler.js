const jwt = require('jsonwebtoken');

class TokensHandler {

   generateAccessToken(payload) {
      const accessToken = jwt.sign(payload, process.env.SECRET_ACCESS_JWT)
      return accessToken
   }

   generateRefreshToken(payload) {
      const refreshToken = jwt.sign(payload, process.env.SECRET_REFRESH_JWT)
      return refreshToken
   }
}

module.exports = new TokensHandler()