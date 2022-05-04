const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
   try {
      const token = req.headers.authorization.split(' ')[1] // Bearer hkk3jdkf3fo

      if (!token) {
         return res.status(401).json({ message: 'Пользователь не авторизован' })
      }

      const decodedToken = jwt.verify(token, process.env.SECRET_JWT)
      next()

   } catch (err) {
      console.log(err.message + ' error mes!!!')
      res.status(401).json({ message: 'Пользователь не авторизован' })
   }
}