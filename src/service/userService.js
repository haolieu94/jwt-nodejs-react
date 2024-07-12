import bcrypt from 'bcryptjs';
import Bluebird from 'bluebird';
const salt = bcrypt.genSaltSync(10);

import mysql from 'mysql2/promise';

import bluebird from 'bluebird';
const hashPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword,salt);
    return hashPassword;
}

const createNewUser = (email, password, username) => {
    let hashPass = hashPassword(password);

}

const getUserList = async() => {
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'jwt', Promise: Bluebird});
    let users = [];
    // connection.query(
    //     'SELECT * from users',
    //     function (err, results, fields) {
    
    //         if (err) {
    //             console.log(err);
    //             return users;
            
    //         }
    //         // console.log("check results:", results)

    //     }

    // );
    try {
        const [rows, fields] = await connection.execute('SELECT * FROM users') ;
        return rows;
    }
    catch(error){
        console.log("check error", error)
    };

}
module.exports = {
    createNewUser, getUserList
}