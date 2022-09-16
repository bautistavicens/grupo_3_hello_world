const path = require('path');

const cartService = require('../services/CartService.js');

const cartController = {

    display: async function(req, res){
        const user = req.session.loggedUser;
        console.log(user.cart_id);
        const userCart = await cartService.getById(user.cart_id); 

        res.json(userCart);

    } ,  
}

//Export.
module.exports = cartController;