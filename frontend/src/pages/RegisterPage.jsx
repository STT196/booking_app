import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

function RegisterPage() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

 async function registerHandel(e){
    e.preventDefault();
    try{
      await axios.post('/register',{
        name,email,password
      });
      alert('registration success..!')
    }
    catch(err){
        console.log(err)
    }
  
    
  }
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-32">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form action="" className="max-w-md mx-auto"  onSubmit={registerHandel}>
       
          <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="your name" />
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="your@email.com" />

          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" />
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already have account? <Link to={'/login'} className="underline text-black">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
