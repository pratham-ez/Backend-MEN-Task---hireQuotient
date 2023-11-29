const app = require('./app');
const dotenv = require("dotenv");

const connectDatabase = require('./config/database');

// conifgg 
dotenv.config({ path: "config/config.env" });

// connect database 
connectDatabase()


const server = app.listen(process.env.PORT, () => {
    console.log(`server is running onn http://localhost:${process.env.PORT}`);
})

