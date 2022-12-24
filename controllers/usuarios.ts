import { Request, Response } from "express"
import Usuario from "../models/usuario"





//traer todos los usuarios
export const getUsuarios = async (req: Request, res: Response) => {
    await Usuario.sync({force: true});
    const usuarios = await Usuario.findAll();
    res.json(usuarios);

}

//trae 1 solo usuario
export const getUsuario = async (req: Request, res: Response) => {

    const {id} = req.params;
    const usuario = await Usuario.findByPk(id);
    if (usuario) { 
        res.json(usuario);
    } else {
        res.status(404).json({
            msg:`no existe el usuario con el id ${id}`
        });
    }

}

//agrega un usuario
export const postUsuario = async (req: Request, res: Response) => {

    const {body} = req;

    try {
        
        const existeEmail = await Usuario.findOne({
            where:{
                email:body.email
            }
        });
        if(existeEmail){
            return res.status(404).json({
                msg: 'ya existe un usuario con ese email'
            })
        }

        const usuario = Usuario.build(body);
        await usuario.save();

        res.json(usuario);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador',
        })
    }

}

//actualiza un usuario
export const putUsuario = (req: Request, res: Response) => {
    
    const {id} =  req.params;
    const {body} = req;

    res.json({
        msg: 'putUsuario',
        body
    })

}

//eliminar un usuario
export const deleteUsuario = (req: Request, res: Response) => {
    
    const {id} =  req.params;
    

    res.json({
        msg: 'deleteUsuario',
        id
    })

}