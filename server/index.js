const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 8000;

const userRouter = require('./routes/user.router');
const productRouter = require('./routes/product.router');

app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: 'http://localhost:3000', credentials: true, }))

app.use('/api', userRouter)
app.use('/api', productRouter)

app.get('/', (req, res) => {
   res.send('get is ready.')
})

app.listen(PORT, () => console.log(`Server is working on PORT: ${PORT}`))