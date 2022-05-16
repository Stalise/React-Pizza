const db = require('../utils/db');
const jwt = require('jsonwebtoken');

const jwtMessages = require('../constants/jwt');
const TokensHandler = require('../utils/tokensHandler')

class UserController {

   async createUser(req, res) {
      const { email, password } = req.body

      try {
         const checkEmail = await db.query(`SELECT email FROM person WHERE email = $1`, [email])

         if (checkEmail.rows.length) {
            return res.status(401).json({ message: 'Пользователь с таким email уже существует.' });
         }

         const jwtAccess = TokensHandler.generateAccessToken({ email })
         const jwtRefresh = TokensHandler.generateRefreshToken({ email })

         await db.query(
            `INSERT INTO person (email, password, token) 
            values ($1, $2, $3) RETURNING *`,
            [email, password, jwtRefresh]
         )

         res.cookie('token', jwtAccess, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
         res.status(200).json({ message: jwtMessages.success })

      } catch (error) {
         res.status(500).json({ message: jwtMessages.unexpected })
      }

   }

   async authorizationUser(req, res) {
      const { email, password } = req.body

      try {
         // проверяем email в базе данных
         const checkEmail = await db.query(
            `SELECT email FROM person WHERE email = $1`,
            [email]
         )

         if (!checkEmail.rows.length) {
            return res.status(401).json({ message: 'Пользователя с таким email не существует.' });
         }

         // если email выше есть, то проверяем в базе пароль
         const checkData = await db.query(
            `SELECT * FROM person WHERE email = $1 AND password = $2`,
            [email, password]
         )

         if (!checkData.rows.length) {
            return res.status(401).json({ message: 'Введён неверный пароль.' });
         }

         const jwtAccess = TokensHandler.generateAccessToken({ email })
         const jwtRefresh = TokensHandler.generateRefreshToken({ email })

         await db.query(`UPDATE person SET token = $1 WHERE email = $2`, [jwtRefresh, email])

         res.cookie('token', jwtAccess, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
         res.status(200).json({ message: jwtMessages.success })

      } catch (error) {
         res.status(500).json({ message: jwtMessages.unexpected })
      }
   }

   async checkUser(req, res) {
      try {
         res.status(200).json({ message: jwtMessages.success })
      } catch (error) {
         res.status(500).json({ message: jwtMessages.unexpected })
      }
   }

   async logoutUser(req, res) {
      try {
         const decoded = jwt.decode(req.cookies?.token)
         const userEmail = decoded.email

         res.clearCookie("token");
         await db.query(`UPDATE person SET token = '' WHERE email = $1`, [userEmail])

         res.status(200).json({ message: jwtMessages.success })
      } catch (error) {
         res.status(500).json({ message: jwtMessages.unexpected })
      }
   }

}

module.exports = new UserController()