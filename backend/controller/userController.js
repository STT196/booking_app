import UserModel from "../models/user.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const bcryptSalt=bcrypt.genSaltSync(10);
const jwtSecret='hhhhdkdjeurrjwjwsss';

const registerUser = async (req, res) => {
  const {name,email,password}=req.body 
    try {
      const userCreate = await UserModel.create({
        name,
        email,
        password:bcrypt.hashSync(password,bcryptSalt)
      });
      res.json(userCreate);
    } catch (err) {
      res.status(422).json(err)
    }
  };
  
const login=async(req,res)=>{
  
    const {email,password}=req.body;
    const userDoc=await UserModel.findOne({email});
    if(userDoc){
      const passOk=bcrypt.compareSync(password,userDoc.password);
    if(passOk){
      jwt.sign({email:userDoc.email,id:userDoc._id,name:userDoc.name},jwtSecret,{},(err,token)=>{
            if(err)throw err;
            res.cookie('token',token).json(userDoc);
      })
    } 
    else{
      return res.status(422).json('not okey')
    }
    }else{
      return res.status(422).json('not found');
    }
  

}


const profileInfo=(req,res)=>{
    const {token}=req.cookies;
    if(token){
      jwt.verify(token,jwtSecret,{},async(err,userData)=>{
          if(err) throw err;
          const {name,email,_id}=await UserModel.findById(userData.id);
          res.json({name,email,_id});
      })
    }else{
      res.json(null)
    }
    
}


const logout =(req,res)=>{
  res.cookie('token','').json(true);
}

export {registerUser,login,profileInfo}
