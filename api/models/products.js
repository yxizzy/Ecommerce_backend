const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:  {type: String, required: true},
    price:  {type: String, required: true},
    description:  {type: String, required: true},
    category: {type: String, required: true},
    color: {type: String, required: true},
    productImage: {type: String}
});

module.exports = mongoose.model('Product', productSchema)