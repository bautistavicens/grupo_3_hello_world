const userCategoryService = require('../services/UserCategoryService.js');

function userLoggedMiddleware (req, res, next){

    res.locals.isLogged = false;

    //check if user is logged
    if(req.session && req.session.loggedUser){
    
        res.locals.isLogged = true;
        //get "Administrador" category
        userCategoryService.getByName("Administrador")
            .then(category =>{
                //check if user category is "Adminsitrador"
                if(req.session && category.id == req.session.loggedUser.category_id){
                    res.locals.isAdmin = true;
                }
            })
        
    }
    next();
}

module.exports = userLoggedMiddleware;