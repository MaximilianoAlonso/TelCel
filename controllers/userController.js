module.exports = {
    register: (req,res) => {
        res.render("index")
    },
    saveRegister: (req,res) => {
        res.redirect("login")
    },
    login: (req,res) => {
        res.render("login")
    },
    processLogin: (req,res) => {
        res.redirect("index")
    },
    cuenta: (req,res) => {
        res.render("cuenta")
    }
}

