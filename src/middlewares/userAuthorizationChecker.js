//@Author: Bautista

/*this middleware is to restrict routes to not logged users*/
function authorizationChecker(req, res, next){
    const user = req.session.userLogged;
    if(user == undefined){
        res.redirect("/usuarios/login")
    }
    else{
        next();
    }
}

module.exports = authorizationChecker;