import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
});
import mysql from 'mysql2';

const hashPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword,salt);
    return hashPassword;
}

const createNewUser = (email, password, username) => {
    let hashPass = hashPassword(password);

}

const getUserList = () => {
    let users = [];
    connection.query(
        'SELECT * from users',
        function (err, results, fields) {
    
            if (err) {
                console.log(err);
            
            }
            console.log("check results:", results)

        }
    );

}
module.exports = {
    createNewUser, getUserList
}