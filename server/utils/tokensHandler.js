const db = require('../utils/db');
const jwt = require('jsonwebtoken');

const jwtMessages = require('../constants/jwt');

const TokensHandler = {

   generateAccessToken: (payload) => {
      const accessToken = jwt.sign(payload, process.env.SECRET_ACCESS_JWT, { expiresIn: "10m" })
      return accessToken
   },

   generateRefreshToken: (payload) => {
      const refreshToken = jwt.sign(payload, process.env.SECRET_REFRESH_JWT, { expiresIn: "30d" })
      return refreshToken
   },

   validateAccessToken: (token) => {
      try {
         jwt.verify(token, process.env.SECRET_ACCESS_JWT);

         return jwtMessages.success
      } catch (error) {
         // если токен валиден, но истекло время
         if (error.expiredAt) {
            return jwtMessages.timeExpired
         }

         return jwtMessages.needAuth
      }
   },

   validateRefreshToken: async (token) => {
      try {
         const decoded = jwt.decode(token)
         const email = decoded.email

         const getRefresh = await db.query(`SELECT token FROM person WHERE email = $1`, [email])

         if (!getRefresh.rows.length) return jwtMessages.needAuth

         const refreshToken = getRefresh.rows[0].token

         const verifyRefresh = jwt.verify(refreshToken, process.env.SECRET_REFRESH_JWT);

         console.log(verifyRefresh)

         return jwtMessages.success
      } catch (error) {
         return jwtMessages.needAuth
      }
   }
}

module.exports = TokensHandler