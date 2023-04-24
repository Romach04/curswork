require('dotenv').config();
const express = require('express');
const sequelize = require('./db')
const PORT = process.env.PORT || 5000;
const models = require('./models/models')
const cors = require('cors');
const app = express();

const router = require('./routers/index')
app.use(cors());
app.use(express.json())
app.use('/api', router)


const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`Server started on PORT ${PORT}`);
        });
        
    } catch (e) {
        console.log(e)
    }
}

start();