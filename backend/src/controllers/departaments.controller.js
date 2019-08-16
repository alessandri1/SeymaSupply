const DepCtrl = {};

const Dep = require("../models/Dep");

DepCtrl.getDeps = async (req, res) => {
  try {
    const Deps = await Dep.find();
    res.json(Deps);
  } catch (err) {
    res.status(400).json({
      error: err
    });
  }
};

DepCtrl.createDep = async (req, res) => {
  try {
    const { descripcion, formas } = req.body;

    const newDep = new Dep({ descripcion, formas });
    await newDep.save();
    res.json("Departament created");
  } catch (e) {
    console.log(e);
    res.json(e.errmsg);
  }
};

DepCtrl.deleteDep = async (req, res) => {
  const { id } = req.params;
  await Dep.findByIdAndDelete(id);
  res.json("Dep deleted");
};

DepCtrl.getDep = async (req, res) => {
  const { id } = req.params;
  const dep = await Dep.findById(id);
  res.json(dep);
};

module.exports = DepCtrl;
