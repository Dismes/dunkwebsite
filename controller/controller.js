


module.exports = function(app){

    app.get('/hi', function(req, res){
        var array = [1,2,3,4]
        var appear = {
            roll: array
        }
        res.render("index", appear);
    })


        
    app.get("/", function(req, res){
        res.render("login");
    })
}