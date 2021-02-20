const express = require("express")
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
require('dotenv').config()

// ROUTES
const postsRoute = require("./routes/posts")


//MiddleWares
app.use(cors())
app.use(bodyParser.json());

// ROUTES
app.use('/posts', postsRoute)

// DB Connect
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true,  useUnifiedTopology: true }, 
    () => { console.log("Connected to database")}
)

// LISTEN SERVER
app.listen(3001)