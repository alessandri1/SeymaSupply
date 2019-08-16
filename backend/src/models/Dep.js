const { Schema, model } = require("mongoose");

const depSchema = new Schema(
  {
    descripcion: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    imagen: { type: String, required: true, unique: true },
    formas: [{ nombre: String, imagen: String, medidas: [String] }]
  },
  {
    timestamps: true
  }
);

module.exports = model("Dep", depSchema);
