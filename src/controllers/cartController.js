const cartService = require('../services/CartService.js');
const productService = require('../services/ProductService.js');
const sizesService = require('../services/SizesService.js');
const path = require('path');

const cartController = {

    display: async function(req, res){
        try{
            const user = req.session.loggedUser;

            const userCart = await cartService.getById(user.cart_id);
            
            if(userCart.Products[0] == null){
                res.render(path.join(__dirname, '../views/cart.ejs'), {cart: userCart});
            }
            else{
                res.render(path.join(__dirname, '../views/cart.ejs'), {cart: userCart});
                //res.json(userCart);
            }
            
            
        } catch(error){
            console.log(error);
        };

    },

    addProduct: async function(req, res) {
        try{
            const userCartId = req.session.loggedUser.cart_id;

            const selectedSizeId= req.body.selectedSizeId;

            const quantity = req.body.quantity;
            
            const product = await productService.getById(req.params.id);

            cartService.addProduct(userCartId, product, quantity, selectedSizeId)
            
            res.redirect('/cart');
        }
        catch(error){
            console.log(error);
            res.send("Ha ocurrido un problema!");
        }
    }  
}

//Export.
module.exports = cartController;