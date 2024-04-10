const express = require('express');
const router = express.Router();
const {index,productos,recargas} = require("../controllers/indexController")
const {createProduct,loginAdmin,processAdminLogin, dashboard,cuentasBancarias,saveProduct} = require("../controllers/adminController")
const {cuenta,login,processLogin,register,saveRegister} = require("../controllers/userController")

/* index */
router
      .get('/', index)
      .get("/productos", productos)
      .get("recargas",recargas)

/* Users */
      .get("registro", register)
      .post("registro",saveRegister)
    
      .get("login",login)
      .post("login", processLogin)

      .get("cuenta", cuenta)


 /* Admin */
      .get("dashboard", dashboard)

      .get("loginAdmin", loginAdmin)
      .post("loginAdmin", processAdminLogin)
      .get("cuentasBancarias", cuentasBancarias)
      
      .get("createProduct", createProduct)
      .post("createProduct", saveRegister)      


      module.exports = router;
