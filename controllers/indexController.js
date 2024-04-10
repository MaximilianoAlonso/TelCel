module.exports = {
    index: (req,res) => {
        res.render("index")
    },
    productos: (req,res) => {
        res.render("productos")
    },
    recargas: (req,res)  => {
        res.render("recargas")
    }
}