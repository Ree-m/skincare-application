const mongoose = require("mongoose");
// const ObjectID = mongoose.Schema.Types.ObjectId


const itemSchema = new mongoose.Schema({

   name: {
      type: String,
      required: true,
      trim: true
   },
   description: {
      type: String,
      required: true
   },
   category: {
      type: String,
      required: true
   },
   brand: {
      type: String,
      required: true
   },
   price: {
      type: Number,
      
   }
}, {
   timestamps: true
})

module.exports = mongoose.model("Item", itemSchema);



