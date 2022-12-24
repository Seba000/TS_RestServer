"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
//traer todos los usuarios
const getUsuarios = (req, res) => {
    res.json({
        msg: 'getUsuarios'
    });
};
exports.getUsuarios = getUsuarios;
//trae 1 solo usuario
const getUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getUsuario',
        id
    });
};
exports.getUsuario = getUsuario;
//agrega un usuario
const postUsuario = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'postUsuario',
        body
    });
};
exports.postUsuario = postUsuario;
//actualiza un usuario
const putUsuario = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putUsuario',
        body
    });
};
exports.putUsuario = putUsuario;
//eliminar un usuario
const deleteUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteUsuario',
        id
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map