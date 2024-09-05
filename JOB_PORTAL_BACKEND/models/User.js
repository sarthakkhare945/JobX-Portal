import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import JWT from "jsonwebtoken";

//schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    role:{
      type: String,
      enum: ['candidate','recruiter'],
      default: 'recruiter'
    
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8,'Password length must be greater than 8 characters']
    },
    location: {
      type: String,
      default: "India",
      // required: [true,'Location is required']
    },
    // createdBy: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Recruiter',
    //   required: true,
    // },
  },
  { timestamps: true }
);


//middleware
userSchema.pre('save',async function(){
  if(!this.isModified) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password,salt)

})


//comparing password
userSchema.methods.comparePassword = async function(userPassword){
  const isMatch = await bcrypt.compare(userPassword,this.password)
  return isMatch
}


//JSON web token
userSchema.methods.createJWT = function(){

  return JWT.sign({userId:this._id},process.env.JWT_SECRET,{expiresIn:'10d'})
  
}



export default mongoose.model("User", userSchema);
