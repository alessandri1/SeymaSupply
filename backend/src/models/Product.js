const { Schema, model } = require('mongoose');

const productSchema = new Schema(
    {
        descripcion:{type:String,required:true},
        codigo:{type:String,required:true},
        departamento:{type:String,required:true}
    }, {
        timestamps: true
    });

module.exports = model('Product', productSchema);