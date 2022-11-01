const cartService = require('../services/CartService.js');
const productService = require('../services/ProductService.js');
const sizesService = require('../services/SizesService.js');
const path = require('path');


const cartController = {

    display: async function(req, res){
        try{
            const user = req.session.loggedUser;

            let userCart = await cartService.getById(user.cart_id);

            res.render(path.join(__dirname, '../views/cart.ejs'), {cart: userCart});

        } catch(error){
            console.log(error);
        };

    },

    addProduct: async function(req, res) {
        try{
            const userCartId = req.session.loggedUser.cart_id;

            const selectedSizeId= parseInt(req.body.selectedSizeId);

            const quantity = parseInt(req.body.quantity);
            
            const product = await productService.getById(req.params.id);

            cartService.addProduct(userCartId, product, quantity, selectedSizeId)
            
            res.redirect('/cart');
        }
        catch(error){
            console.log(error);
            res.send("Ha ocurrido un problema!");
        }
    },

    deleteProduct: async function (req, res){
        try{
            const userCartId = req.session.loggedUser.cart_id;

            const productId = req.params.id;

            res.send(productId);
        }
        catch(error){
            console.log(error);
            res.send("Ha ocurrido un problema!");
        }
    }
}

//Export.
module.exports = cartController;