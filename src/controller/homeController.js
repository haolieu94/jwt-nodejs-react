// Get the client
import mysql from 'mysql2';

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'jwt',
});

const handleHelloWorld = (req, res) => {
    return res.render("home.ejs")
}

const handleUserPage = (req, res) => {
    //model => get database

    return res.render("user.ejs")
}

const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    connection.query(
        'INSERT INTO users (email, password, username) VALUE (?, ?, ?)', [email, password, username], 
        function (err, res, fields) {
    
            if (err) {
                console.log(err);
            
            }

        }
    )
    
    console.log(">>>Check rq:", req.body);
    return res.send("handleCreateNewUser");
}



module.exports = {
    handleHelloWorld, handleUserPage, handleCreateNewUser
}