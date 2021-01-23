import 'dotenv/config';
import { User, userRepository } from '../models/users';
import bcrypt from 'bcryptjs';
import { JwtService } from '../services/jwt';

const AuthController = {

    register: async (req, res, next) => {
        try {
            let usuarioCreado = await userRepository.create(req.body.nombre, req.body.usuario, req.body.email, 
                        bcrypt.hashSync(req.body.password, parseInt(process.env.BCRYPT_ROUNDS)));
            res.status(201).json(usuarioCreado);            
        } catch (error) {
            res.status(400).json({Error: error.message});
        }
   
    },

    login: (req, res, next) => {
        const token = JwtService.sign(req.user);
        res.status(201).json({
            nombre: req.user.nombre,
            usaurio: req.user.usuario,
            email: req.user.email,
            token: token
        });
    }

}


export {AuthController}