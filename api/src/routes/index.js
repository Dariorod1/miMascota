const { Router } = require("express");
const router = Router();
// import all routers;
const pacienteRouter = require("./pacienteRouter")


router.use("/pacientes",  pacienteRouter)

module.exports = router;