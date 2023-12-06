import UserModel from "../models/user.js";
import bcrypt from 'bcryptjs';

const bcryptSalt=bcrypt.genSaltSync(10);

const registerUser = async (req, res) => {
    try {
       const {name,email,password}=req.body 
      const userCreate = await UserModel.create({
        name,
        email,
        password:bcrypt.hashSync(password,bcryptSalt)
      });
      res.status(201).json({ 
          status: "success",
          data:{
              userCreate
          }
       });
    } catch (err) {
      res.status(404).json({
          status:'fail',
          message:err.message
      })
    }
  };
  

export {registerUser}
