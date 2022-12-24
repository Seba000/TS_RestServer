import { Request, Response } from "express"





//traer todos los usuarios
export const getUsuarios = (req: Request, res: Response) => {

    res.json({
        msg: 'getUsuarios'
    })

}

//trae 1 solo usuario
export const getUsuario = (req: Request, res: Response) => {

    const {id} = req.params;

    res.json({
        msg: 'getUsuario',
        id
    })

}

//agrega un usuario
export const postUsuario = (req: Request, res: Response) => {

    const {body} = req;

    res.json({
        msg: 'postUsuario',
        body
    })

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