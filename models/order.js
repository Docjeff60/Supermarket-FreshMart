const mongoose = require("mongoose");



const orderSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    items: [{
        product: {type: mongoose.Schema.Types.ObjectId, ref: "Product"},
        quantity: {type: Number, default: 1}
    }],
    total: {type: Number, required: true},
    status: {type: String, enum: ["pending", "completed"], default: "pending"}
},
{timestamps: true});



module.exports = mongoose.model("Order", orderSchema);

