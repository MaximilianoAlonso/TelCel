module.exports = {
    dashboard: (req,res) => {
        res.render("dashboard")
    },

    loginAdmin: (req,res) => {
        res.render("login")
    },
    processAdminLogin: (req,res) => {


        res.redirect("dashboard")
    },
    createProduct: (req,res) => {
        res.rende("crearProducto")
    },
    saveProduct: (req,res) => {

        res.redirect("products")
    },
    cuentasBancarias: (req,res) => {
        res,render("cuentasBancarias")
    }
}