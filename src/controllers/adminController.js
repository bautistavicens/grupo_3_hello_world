//@Author: Bautista

/**************************** Require's ******************************/
//Path Module
const path = require('path');

const AdminController = {

    displayAdminPanel: function(req, res){
        res.render(path.join(__dirname, '../views/admin/adminPanel'));
    }
}

module.exports = AdminController;