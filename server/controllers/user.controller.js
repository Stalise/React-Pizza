const db = require('../utils/db');
const jwt = require('jsonwebtoken');
const TokensHandler = require('../utils/tokensHandler')

class UserController {

   async createUser(req, res) {
      const { email, password } = req.body

      console.log(email, password)

      try {
         const checkEmail = await db.query(`SELECT email FROM person WHERE email = $1`, [email])

         if (checkEmail.rows.length) {
            return res.status(500).json({ message: 'Пользователь с таким email уже есть.' });
         }

         const accessJwt = TokensHandler.generateAccessToken({email}, process.env.SECRET_ACCESS_JWT)

         res.cookie('Authorization', `Bearer ${accessJwt}`, { httpOnly: true })
         res.cookie('Email', `${email}`, { httpOnly: true })

         const refreshJwt = TokensHandler.generateRefreshToken({email}, process.env.SECRET_REFRESH_JWT)

         const newUser = await db.query(
            `INSERT INTO person (email, password, token) 
            values ($1, $2, $3) RETURNING *`,
            [email, password, refreshJwt])

         // const userInfo = newUser.rows[0]

         res.json(true)

      } catch (e) {
         console.log(e)
      }

   }

   async authorizationUser(req, res) {
      const { email, password } = req.body

      // const cookie = req.headers['cookie']
      console.log(req.headers['cookie'])

      try {
         // проверяем email в базе данных, если такого не найдено, то отправляе ошибку
         const checkEmail = await db.query(
            `SELECT email FROM person WHERE email = $1`,
            [email]
         )

         if (!checkEmail.rows.length) {
            return res.status(400).json({ message: 'Пользователь с таким email не найден.' });
         }

         // если email выше есть, то проверяем в базе пароль
         const checkData = await db.query(
            `SELECT * FROM person WHERE email = $1 AND password = $2`,
            [email, password]
         )

         if (!checkData.rows.length) {
            return res.status(400).json({ message: 'Введён неверный пароль.' });
         }

         res.cookie('key', 'value', { httpOnly: true })
         res.send(200)

         // const jwtToken = jwt.sign({ email }, process.env.SECRET_JWT, { expiresIn: '60m' })

         // res.json({ jwtToken })
      } catch (err) {
         console.log(err.message)
      }
   }

   async checkUser(req, res) {
      console.log(req.cookies.Authorization)
      !req.cookies.Authorization ? res.json(false) : res.json(false)
   }

}

module.exports = new UserController()