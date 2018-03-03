


module.exports = function(app){

    app.get('/hi', function(req, res){
        var array = [1,2,3,4]
        var appear = {
            roll: array
        }
        res.render("index", appear);
    })

    testtitle = {
        title : "login",
    }

    app.get("/d20roller", function(req, res){
        res.render("d20statroller", {title: 'd20roller'});
    })

    app.get("/dashboard", function(req, res){
        res.render("dashboard",{title:"no"})
    })
        
    app.get("/", function(req, res){
        //res.sendFile(__dirname + '/html/login.html');
        res.render("login", testtitle);
    })
}