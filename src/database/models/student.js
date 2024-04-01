const Sequelize = require('sequelize')
const { Model } = Sequelize

class Student extends Model {
    static init(sequelize){
        super.init({
            name : Sequelize.STRING,
            email : Sequelize.STRING , 
            age : Sequelize.INTEGER ,
           
        },{
            sequelize
        } )
    }

}

module.exports = Student;