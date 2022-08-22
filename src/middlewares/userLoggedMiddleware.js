function userLoggedMiddleware (req, res, next){

    res.locals.isLogged = false;

    //check if user is logged
    if(req.session && req.session.loggedUser){

        res.locals.isLogged = true;
        
    }
    next();
}

module.exports = userLoggedMiddleware;