class HomeController {
    index(req, res) {
        res.json({
            "Ok":true
        })
    }
}
module.exports = new HomeController()