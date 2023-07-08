import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'
import * as url from 'url'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
console.log('start', __dirname)

const app = express()
const PORT = process.env.PORT ?? 4000

console.log(PORT)

//? middlewares

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
const ADMIN_BUILD = '../admin/dist'
const ADMIN_BASE = '/admin'
app.use(ADMIN_BASE, express.static(path.join(__dirname, ADMIN_BUILD)))

app.listen(PORT, () => console.log(`start server http://localhost${PORT}`))
