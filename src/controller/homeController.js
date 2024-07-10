
const handleHelloWorld = (req, res) => {
    return res.render("home.ejs")
}

const handleUserPage = (req, res) => {
    //model => get database

    return res.render("user.ejs")
}


module.exports = {
    handleHelloWorld, handleUserPage
}