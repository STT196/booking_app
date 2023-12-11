import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';
import { UserContext } from "../components/UserContext";

function LoginPage() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')
  const [redirect,setRedirect]=useState(false);
  const{setUser}=useContext(UserContext)
  // const navigate = useNavigate();

  async function handelSubmit(e){
    e.preventDefault();
    try{
      const {data}= await axios.post('/login',{email,password})
      setUser(data)
      alert('login sucess');
      setRedirect(true)
    }catch(err){
      // console.log(err)
      alert('login fail');
      setEmail('');
      setPassword('');

 
    }
    
  }
  if(redirect){
    return <Navigate to={'/'}/>
  }
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-32">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form action="" className="max-w-md mx-auto" onSubmit={handelSubmit}>
          <input type="email" placeholder="your@email.com" value={email} onChange={e=>setEmail(e.target.value)} required/>
          <input type="password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet ? <Link to={'/register'} className="underline text-black">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
