// importa o model
const User = require('../model/CreateUser');

module.exports = function () {
    const UserController = {
        //Função para criaçao de usuários
        createUser: async (req, res) => {
            //faz um destruct trazendo os emails
            const {email} = req.body
            try {  
                // verifica se o email já existe na base de dados 
                if ( await User.findOne({ email }))
                // Se existe ele  retorna mensagem de erro
                return res.status(400).send({
                    error: 'Usuário já existe'
                })
                // Senão entra  na função de criar usuário
                const user = await User.create(req.body);
                console.log(user);
                
                return res.status(201).json(user);


            } catch (error) {
                // Caso ocorra algum erro ele retornara está mensagem 
                return res.status(400).send({
                    error: 'Erro ao criar novo usuario'
                });
            }

        },
        // Função para listar todos os usuários 
        retrieveUser: async (req, res) => {
            try {
                // Pega todos os users do banco
                const user = await User.find(req.body);
                return res.json(user);

            } catch (error) {
                return res.status(400).send({
                    error: 'Erro ao encontrar usuários'
                })

            }
        },
        // Função para buscar usuario pelo Id
        retrieveUserById: async (req, res) => {
            try {
                //Pega somente o usuario onde o id está no query params
                const user = await User.findById(req.params.id);
                //console.log(user.id)
                return res.json(user);

            } catch (error) {
                return res.status(400).send({
                    error: 'Erro ao encontrar usuário'
                })

            }
        },

        // Função para atualizar os usuários 
        updateUser: async (req, res) => {
            try {
                // busca o usuário pelo seu Id e muda atualiza os campos e valores que são passados no body.
                const user = await User.findByIdAndUpdate(req.params.id, req.body)
                .then( res.send("Usuário atualizado !!!")
                ) 
                return res.json(user);              
            } catch (error) {
                return res.status(400).send({
                    error: 'Erro ao atualizar usuário'
                })
                
            }

        },
        // Função para deletar usuário pelo id passado no params
        deleteUser: async (req, res) => {
            try {
                // Busca usuário pelo Id e exclui ele
                const user = await User.findByIdAndDelete(req.params.id)
                .then( res.send("Usuário Deletado !!!")
                ) 
                return res.json(user);              
            } catch (error) {
                return res.status(400).send({
                    error: 'Erro ao atualizar usuário'
                })
                
            }

        }
    }
    return UserController
}


