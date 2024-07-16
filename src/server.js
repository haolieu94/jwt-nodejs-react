import expess from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();
import bodyParser from "body-parser";
import connection from "./config/connectDB";

const app = expess();
const PORT = process.env.PORT || 8080;
//config view engine
configViewEngine(app);
// test connection DB
connection();
//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

//init web routes
initWebRoutes(app);


app.listen(PORT, ()=>{
    console.log(">>> JWT Backed is running on the port = " + PORT);
})
