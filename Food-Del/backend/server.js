import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/UserRoute.js'
import cartRouter from './routes/CartRoute.js'
import orderRouter from './routes/OrderRoute.js'
import 'dotenv/config'


//  App Config
const app = express()
const port = 4000

// Middleware
app.use(express.json())
app.use(cors())

// DB connection
connectDB();

// API Endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/" , (req,res) => {
    res.send("API working")
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})
