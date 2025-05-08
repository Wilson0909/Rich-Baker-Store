import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const Navigate=useNavigate();


    const login =()=>{
        const data={username:username,password:password};
        axios.post("http://localhost:3001/auth/login",data ).then((response)=>{
            console.log(response.data);
            Navigate("/home");

        })
    }


  return (
    <div className="w-full h-screen flex justify-center items-center">
        
  <div className="bg-stone-700 w-5/12 h-3/6 flex justify-center items-center flex-col">
    <div className="flex justify-center flex-col gap-5 w-full px-8">
        <h3 className='justify-self-center'>Login</h3>
      <label>
        Username:
        <input
          className="text-black w-full p-2 rounded"
          type="text"
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          className="text-black w-full p-2 rounded"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
    </div>

    <div className="flex justify-center">
      <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded" onClick={login} >
        LOGIN
      </button>

      
    </div>

    <div>
      <a>Don't Have an Account?<Link to='/registration' className="text-blue-500">Lets Create!</Link></a>
    </div>
  </div>
</div>
  )
}

export default Login
