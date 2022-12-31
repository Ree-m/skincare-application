// const mongoose = require("mongoose");
// const validator = require("validator");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const UserSchema = new mongoose.Schema({
//   userName: {
//     type: String,
//     required: true,
//     unique:true,
//     trim: true,
//     lowercase: true
//   },
//   email: {
//     type: String,
//     required: true,
//     lowercdase:true,
//     unique:true,
//      validate(value){
//         if(!validator.isEmail(value)){
//             throw new Error("Email is invalid!")
//         }
//     }
//   },
//   password: {
//     type: String,
//     required: true,
//     trim:true,
//     length:8,
//     lowercase:true,
//     validate(value){
//         if(value.toLowerCase().includes("password")){
//             throw new Error("Password too weak,it musn't contain the word password")
//         }
//     }

//   },
//   tokens: [{
//     token: {
//     type: String,
//     required: true
//       }
//     }]
// }, {
//   timestamps: true   //automatically creates createdAt and updatedAt 
  
  
 
  
// });
// // Auth tokens
// UserSchema.methods.generateAuthToken = async function () {
//   const user = this
//    const token = jwt.sign({ _id: user._id.toString()},      process.env.JWT_SECRET)
// user.tokens = user.tokens.concat({token})
//   await user.save()
//   return token
// }

// module.exports = mongoose.model("User", UserSchema);




// const bcrypt = require("bcrypt");
// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//   userName: { 
//     type: String,
//     unique: true
//    },
//   email: { 
//     type: String,
//      unique: true 
//     },
//   password: String,
// });

// // Password hash middleware.

// UserSchema.pre("save", function save(next) {
//   const user = this;
//   if (!user.isModified("password")) {
//     return next();
//   }
//   bcrypt.genSalt(10, (err, salt) => {
//     if (err) {
//       return next(err);
//     }
//     bcrypt.hash(user.password, salt, (err, hash) => {
//       if (err) {
//         return next(err);
//       }
//       user.password = hash;
//       next();
//     });
//   });
// });

// // Helper method for validating user's password.

// UserSchema.methods.comparePassword = function comparePassword(
//   candidatePassword,
//   cb
// ) {
//   bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
//     cb(err, isMatch);
//   });
// };

// module.exports = mongoose.model("User", UserSchema);
