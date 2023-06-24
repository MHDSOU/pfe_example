import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
console.log('start')

const app = express()
const PORT = process.env.PORT ?? 4000

console.log(PORT)

//? middlewares

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

app.listen(PORT, () => console.log(`start server http://localhost${PORT}`))
