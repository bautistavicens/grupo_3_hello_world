//Path Module.
const { reset } = require('nodemon');
const path = require('path');

//Products Service
const productService = require('../services/ProductService.js');

const MainController = {
    displayHome: function(req, res){

         /*total products to be search for "relationedProducts"*/
        const quantity = 4;

        /*Get <quantity> products from database*/
        const productsWithDiscount = productService.getWithDiscountPercentageRand(quantity);

        /*Get product where product.id = req.params.id from database*/
        const products = productService.getSomeRandomlySorted(quantity);

        /*fulfill all promises*/
        Promise.all([productsWithDiscount, products])

            .then(([productsWithDiscount, products]) => {

            res.render(path.join(__dirname, '../views/home.ejs'), 
            {
                products: products, 
                productsWithDiscount: productsWithDiscount
            });
        });

    },
    
    displayBranches: function(req, res) {
        res.render(path.join(__dirname, '../views/branches.ejs'));
    },

    displayComingSoon: function(req, res) {
        res.render(path.join(__dirname, '../views/comingSoon.ejs'));
    }
}

module.exports = MainController;