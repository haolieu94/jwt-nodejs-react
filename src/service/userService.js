import bcrypt from 'bcryptjs';
import Bluebird from 'bluebird';
const salt = bcrypt.genSaltSync(10);

import mysql from 'mysql2/promise';

import bluebird from 'bluebird';
const hashPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword,salt);
    return hashPassword;
}

const createNewUser = async (email, password, username) => {
    let hashPass = hashPassword(password);
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'jwt', Promise: Bluebird});
    try {
        const [rows, fields] = 
        await connection.execute('INSERT INTO users (email, password, username) VALUES (?, ?, ?)', 
            [email, hashPass, username]) ;
    }
    catch(error){
        console.log("check error", error)

    }



}

const getUserList = async() => {
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'jwt', Promise: Bluebird});
    let users = [];

    try {
        const [rows, fields] = await connection.execute('SELECT * FROM users') ;
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
        await connection.execute('DELETE FROM users WHERE id=?', [id]) ;
        return rows;
    }
    catch(error){
        console.log("check error1", error)
    }
}
module.exports = {
    createNewUser, getUserList, deleteUser
}