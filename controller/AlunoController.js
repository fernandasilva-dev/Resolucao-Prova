import Aluno from "../model/Aluno.js"

class ALunoController {
    index = async function(req, res) {
        try {
            const alunos = await Aluno.findAll()
            res.render('aluno/index', { alunos: alunos })
        } catch (erro) {
            console.error("Erro ao buscar aluno:", erro)
            res.status(500).send("Erro interno ao buscar produtos")
        }
    }

    cadastrar = function(req, res) {
        res.render('aluno/cadastrar')
    }

    salvar = function(req, res) {
        let aluno = {
            nome: req.body.nome,  
            telefone: req.body.telefone, 
            email: req.body.email,  
            nota: req.body.nota,
            situacao: req.body.situacao,
            status: 1 
        }

        Aluno.create(aluno).then(function() {
            res.redirect('/aluno')  
        }).catch(function(erro) {
            console.error("Erro ao salvar aluno:", erro)
            res.status(500).send("Erro ao salvar o aluno")
        })
    }
}

export default new AlunoController()