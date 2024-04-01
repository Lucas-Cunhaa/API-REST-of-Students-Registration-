const Student = require('../database/models/student')
class HomeController {
 async index(req, res) {
    const newStudent = await Student.create({
        name: 'Luiz', 
        email: 'luiz@gmail.com',
        age: 18 
    })
    res.json(newStudent)
 }
    

}
module.exports = new HomeController()