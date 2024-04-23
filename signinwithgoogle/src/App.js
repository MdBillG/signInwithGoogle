import logo from './logo.svg';
import './App.css';
import { GoogleLogin } from '@react-oauth/google';

function App() {

  console.log(GoogleLogin,"GoogleLogin")
  return (
 <> <div className="App">
      <div className="flex justify-center items-center h-screen">
        <div className="w-60 border-2 p-4">
          <div className="flex flex-col ml-2">
            <div>
              <label htmlFor="">Email/Ph Number</label>
            </div>
            <div>
              <input type="text" className="border-2 border-gray-500" />
            </div>
          </div>
          <div className="mt-4 ml-2">
            <div className="flex flex-col">
              <label htmlFor="">Password</label>
            </div>
            <div>
              <input type="password" className="border-2 border-gray-500" />
            </div>
          </div>
          <div>
   <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }} />
</div>
        </div>
      </div>
     
    </div>

    </>
  );
}
export default App;
