
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'
const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 4001
const URI = process.env.MongoDBURI

//connect to mongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(URI)
    console.log("Connected to MongoDb")
  } catch (error) {
    console.log("Error:", error)
    process.exit(1) // stop app if DB fails
  }
}
// call function
connectDB()

//defining routes
app.use('/book', bookRoute)
app.use('/user', userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
