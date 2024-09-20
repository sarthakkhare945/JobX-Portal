import User from "../models/User.js";

export const updateUserController = async(req,res,next) =>{
    const {name,email,location} = req.body;
    if(!name || !email  || !location){
        next('Please Provide All Fields')
    }

    // console.log('req body--->',req.body)
    console.log('User ID:', req.User?._id)

    const user = await User.findOne({_id: req.User?._id})
    if (!user) {
      return next('User not found');
    }
    user.name = name
    // user.lastName = lastName
    user.email = email
    user.location = location
    console.log('user dekho jra--->',user)

    await user.save()
    const token = user.createJWT()
    res.status(200).json({
      message: 'Details updated successfully',
      user,
      token

    })

}



export const getUserDetailsController = async (req, res, next) => {
  try {
    const userId = req.User?._id;
    console.log('user--->',req.User?._id)
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const user = await User.findById(userId).select('-password'); // Exclude password field
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      message: 'User details fetched successfully',
      user
    });
  } catch (error) {
    console.error('Error fetching user details:', error);
    next(error);
  }
};



export const getAllRecruitersController = async(req,res,next) =>{
  try {
    const allusers = await User.find({})
    res.status(200).json({
      message: 'Users fetched Successfully',
      users: allusers
    })
  } catch (error) {
    
  }
}




export const getAllParticularRecruitersController = async(req,res,next) =>{
  try {
    const {id} = req.params;
    const user = await User.findById(id)
    res.status(200).json({
      message: 'Users fetched Successfully',
      users: user
    })
  } catch (error) {
    
  }
}