import { Sequelize } from "sequelize";

//la base de datos estará off al momento de la finalización de este proyecto.

const db = new Sequelize('node', 'root', 'seba', {
    host:'localhost',
    dialect: 'mysql',
    //logging: false
})

export default db;