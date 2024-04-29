import logo from './logo.svg';
import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { Link ,Navigate } from 'react-router-dom';

function App() {
  const [isCredential,setisCredntial] = useState('')
  return (
 <> 
 <div className="App">
      <div className="flex justify-center items-center h-screen flex-col">
        <div className="w-60 border-2 p-4">
          <div className="flex flex-col ml-[12px]">
            <div>
              <label htmlFor="">Email/Ph Number</label>
            </div>
            <div>
              <input type="text" className="border-2 border-gray-500" />
            </div>
          </div>
          <div className="mt-4 ml-[12px]">
            <div className="flex flex-col">
              <label htmlFor="">Password</label>
            </div>
            <div>
              <input type="password" className="border-2 border-gray-500" />
            </div>
          </div>
            <button className='ml-[11px] mt-2 border-2 text-center w-[185px]'>
              Login
            </button>
          <div>
       </div>
        </div>
        <span className='mt-2'>or</span>
          <div className='mt-4 ml-1'>
        <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse?.clientId);
          setisCredntial(credentialResponse)
          localStorage.setItem('clientId',credentialResponse?.clientId)
        }}
        onError={() => {
          console.log('Login Failed');
        }} />
       </div>
       {isCredential && <Navigate to="/home" />}
      </div>
    </div>
    </>
  );
}
export default App;
