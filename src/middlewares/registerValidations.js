//@Author: Bautista.

//Express Validator - Require
const { body } = require('express-validator');

/*+++++++++++++++++++++ Register Validations+++++++++++++++++++++++*/
const registerValidations = [

   //Validate fist name
    body('firstName')
    .notEmpty().withMessage('Coloca tu nombre!').bail(),
    
    //Validate last name
    body('lastName')
    .notEmpty().withMessage('Coloca tu apellido!').bail(),

    //Validate phone number
    body('telephone')
    .notEmpty().withMessage("Coloca un número de teléfono!").bail()
    .isNumeric({min: 8}).withMessage("Coloca un número de teléfono valido!"),

    //Validate email
    body('email')
    .notEmpty().withMessage("Coloca tu email!").bail()
    .isEmail().withMessage('Agrega un email válido!'),
  
    //Validate password
    body('password')
    .notEmpty().withMessage("Coloca una contraseña").bail()
    .isLength({min: 6}).withMessage('La contraseña debe contener al menos 6 caractéres'),
      
    //Validate password confirmation
    body('confirm-password')
    .notEmpty().withMessage('Confirma tu contraseña!').bail(),

    //Validate both password and confirmation
    body('confirm-password').custom((value, {req}) => {
      if(req.body.password == value ){
        return true
      }
      else{
        return false 
      }    
      }).withMessage('Las contraseñas deben coincidir'),

      body('securityAnswer')
      .notEmpty().withMessage("Coloca una respuesta!").bail()
      .isLength({max: 35}).withMessage("La respuesta no debe superar los 35 caracteres!"),
  ]


module.exports = registerValidations