/*External modules*/
import express, {Express} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './routes'
import { connectToDb } from './config/database'
import cookieParser from 'cookie-parser'


dotenv.config()

if (!process.env.PORT) {
    process.exit(1)
}

//Port number for the server
const PORT : number = parseInt(process.env.PORT as string, 10)

const app = express()

//Connect to the database
connectToDb()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({credentials: true, origin: true}))

app.use((req, res, next) => {
    res.header('Content-Type', 'application/json;charset=UTF-8')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
})

app.use(router)

app.listen(PORT, () => {
    console.log(`App now listening on port ${PORT}`)
})
