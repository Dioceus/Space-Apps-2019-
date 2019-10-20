const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport")

const users = require("./routes/api/users")

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

const db = require("./Database/config/keys").mongoURI;

mongoose
    .connect(
        db, 
        {useNewUrlParser: true}
    )
    .then(() => console.log("Mongo DB connected successfully"))
    .catch(err => console.log(err));

app.use(passport.initialize());
require("../Server-Side/Database/config/passport")(passport);

app.use("/users", users);

const port = process.env.PORT || 5000

app.listen(port, () => console.log("Server is up and running on port: " + port + " !"))