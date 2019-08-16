const { Router } = require("express");
const router = Router();

const {
  getDeps,
  createDep,
  deleteDep,
  getDep
} = require("../controllers/departaments.controller");

router
  .route("/")
  .get(getDeps)
  .post(createDep);

router
  .route("/:id")
  .get(getDep)
  .delete(deleteDep);

module.exports = router;
