import bcrypt from 'bcryptjs';
import Bluebird from 'bluebird';
const salt = bcrypt.genSaltSync(10);

import mysql from 'mysql2/promise';

import bluebird from 'bluebird';
import db from '../models/index';
const hashPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword,salt);
    return hashPassword;
}

const createNewUser = async (email, password, username) => {
    let hashPass = hashPassword(password);
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'jwt', Promise: Bluebird});
    try {
        await db.User.create({
            username: username,
            email: email,
            password: hashPass,

        })
    }
    catch(error){
        console.log("check error", error)

    }



}

const getUserList = async() => {
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'jwt', Promise: Bluebird});
    let user = [];

    try {
        const [rows, fields] = await connection.execute('SELECT * FROM user') ;
        return rows;
    }
    catch(error){
        console.log("check error", error)
    };

}

const deleteUser = async (id) => {
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'jwt', Promise: Bluebird});
    try {
        const [rows, fields] = 
        await connection.execute('DELETE FROM user WHERE id=?', [id]) ;
        return rows;
    }
    catch(error){
        console.log("check error1", error)
    }
}

const getUserByID = async (id) => {
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'jwt', Promise: Bluebird});
    try {
        const [rows, fields] = 
        await connection.execute('SELECT * FROM user WHERE id=?', [id]) ;
        return rows;
    }
    catch(error){
        console.log("check error1", error)
    }
}

const updateUserInfo = async (email, username, id) => {
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'jwt', Promise: Bluebird});
    try {
        const [rows, fields] = 
        await connection.execute('UPDATE user SET email = ?, username = ? WHERE id = ?',
            [email, username, id]) ;
        return rows;
    }
    catch(error){
        console.log("check error1", error)
    }
}
module.exports = {
    createNewUser, getUserList, deleteUser, getUserByID, updateUserInfo
}