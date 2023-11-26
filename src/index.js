const express = require("express")
const path = require("path");
const hbs = require("hbs");
const collection = require("./mongodb");

const app = express();
const port = 8080
const hostName = "localhost"
const templatePath = path.join(__dirname, "../template");

app.use(express.json());
app.set("view engine", "hbs");
app.set("views", templatePath);
app.use(express.urlencoded({extended: false}));

app.listen(port, function(){
    console.log(`http://${hostName}:${port}/`);
});

app.get("/", function(request, respond){
    respond.render("login");
});

app.get("/signup", function(request, respond){
    respond.render("signup");
});

app.post("/signup", async function(request, respond){
    var data = {
        name: request.body.name,
        password: request.body.password
    }
    await collection.insertMany([data]);
    respond.render("home");
});

app.post("/login", async function(request, respond){
    try{
        var check = await collection.findOne({name: request.body.name})
        if(check.password === request.body.password){
            respond.render("home");
        }else{
            respond.send("Wrong password.");
        }
    }catch{
        respond.send("Wrong details.");
    };
});
