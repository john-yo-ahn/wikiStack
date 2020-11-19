var express = require("express");
var app = express();
const { db, Page, User } = require('./models');
const PORT = 3000;

app.get("/", function(req, res) {
    res.send("hello world");
});

db.authenticate()
    .then(() => {
        console.log('connected to the database');
    })


const init = async() => {
    await db.sync({ force: false })
    await Page.sync();
    await User.sync();
    // make sure that you have a PORT constant
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}!`);
    });
}

init();


// app.listen(3000);