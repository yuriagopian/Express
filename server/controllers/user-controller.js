const User = require('../model/CreateUser');

module.exports = function() {
   const UserController = {
       createUser: async (req, res) => {

        let userl = req.body
        console.log(userl);
            // try {

                // const pessoa = await RegistroPessoa.create(req.body);
                const user = await User.create(req.body);
                console.log(user );
                return res.send( user ) ; 
             


            // } catch (error) {
            //   return res.status(400).send({
            //       error: 'Erro ao criar novo usuario'
            //   }) ; 
            // }
        
              
             },
             
        retrieveUser: (req, res) => {
           res.send('ola mundo');
           console.log('oi');
        },
        updateUser: (req, res) => {

        }
    }
    return UserController
}


