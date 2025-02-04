import banco from "../config/banco.js"

const Aluno = banco.sequelize.define('alunos', {
    id: {
        type: banco.Sequelize.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    nome: {
        type: banco.Sequelize.STRING(150) 
    },
    telefone: {
        type: banco.Sequelize.INTEGER 
    },
    email: {
        type: banco.Sequelize.INTEGER 
    },
    nota: {
        type: banco.Sequelize.FLOAT 
    },
    situacao: {
        type: banco.Sequelize.INTEGER 
    },
    status: {
        type: banco.Sequelize.INTEGER 
    }
})

Aluno.sync()

export default Aluno