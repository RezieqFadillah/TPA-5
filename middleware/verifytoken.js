const jwt = require("jsonwebtoken")

function auth(req, res, next) {
    const token = req.header("auth-token")
    try {
        if(token){
            const verifikasi = jwt.verify(token, process.env.TOKEN_KEY)
            req.user = verifikasi
            next()
        } else {
            return res.status(401).send("Silahkan login terlebih dahulu")
        }
    } catch (error) {
        res.status(400)
        .send("Token salah atau Sesi telah berakhir, silahkan login kembali")
    } 
}

module.exports = auth