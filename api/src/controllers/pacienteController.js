const { Paciente} = require("../db");
const { Op } = require("sequelize");
const path = require("path");
const fs = require("fs");

//const { response } = require("../app");



//Funcion para obtener las eventos buscadas por el nombre

const getPacienteByDni = async(req, res, next) => {
    const nombre = req.query.nombre 
    try {
        let paciente = await Paciente.findAll({
            where: {
                apellido: {
                    [Op.iLike]: `%${nombre}%`,
                },
            },
        });
        if (!paciente) {
            res.send("Paciente no encontrada");
        }
        return res.json(paciente);
    } catch (err) {
        console.log(err);
        res.status(500).send(next);
    }
};
//funcion que devuelve todos los eventos de la base de datos
const getAllPacientes = async(req, res, next) => {
    try {
        const pacientes = await Paciente.findAll();
        res.json(pacientes)
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Algo anda mal :('
        });
    }
};
//devuelve los eventos buscados por ID
const getPacienteById = async(req, res, next) => {
    const { id } = req.params;
    try {
        const pacientes = await Paciente.findAll({
            where: {
                id: id
            }
        });
        res.json(pacientes)
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Algo anda mal :('
        });
    }
};
//crea un nuevo evento
const createPaciente = async(req, res, next) => {
    const { nombre, apellido, domicilio, fechanac, dni, obrasocial} = req.body;
    if (req.file) {
        var pacientes = req.file.filename;
    }
    try {
        let paciente = await Paciente.create({
            nombre,
            apellido,
            domicilio,
            fechanac,
            dni,
            obrasocial
        });
        return res.json({ paciente: paciente, msg: "Paciente dado de alta con exito" });
    } catch (error) {
        console.log(error);
        res.status(500).send(next);
    }
};
const deletePaciente = async (req,res) => {
    try {
        const { id } = req.params;
        await Paciente.destroy({
            where: {
                id,
            },
        });
        res.json({ message: "Paciente eliminada" });
    } catch (e) {
        res.status(500).send(next);
    }
}



module.exports = {
    getAllPacientes,
    createPaciente,
    getPacienteById,
    deletePaciente,
    getPacienteByDni

};