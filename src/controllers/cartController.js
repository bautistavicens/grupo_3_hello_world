const cartService = require('../services/CartService.js');
const productService = require('../services/ProductService.js');

const cartController = {

    display: async function(req, res){
        const user = req.session.loggedUser;

        const userCart = await cartService.getById(user.cart_id); 

        res.json(userCart);

    },
    
    addProduct: async function(req, res) {
        const userCartId = req.session.loggedUser.cart_id;

        const quantity = null /*get quantity from req.body*/;

        const product = await productService.getById(/*get id from req.body*/);

        cartService.addProduct(userCartId, product, quantity)

    }  
}

//Export.
module.exports = cartController;