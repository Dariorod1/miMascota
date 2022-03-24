const server = require("express").Router();
const upload = require("./../libs/storage");
const {
    getAllPacientes,
    createPaciente,
    getPacienteById,
    deletePaciente,
    getPacienteByDni
} = require("../controllers/pacienteController.js");
/////////////////////////////////////////////////////////






//////////////////////////////////////////////////////////////////////
server.get("/:id", getPacienteById)
server.get("/dni", getPacienteByDni)
server.get("/", getAllPacientes)
server.post("/",createPaciente)
server.delete("/:id", deletePaciente);


module.exports = server;