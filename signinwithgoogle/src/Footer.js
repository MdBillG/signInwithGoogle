import { GooogleImage } from "./Constants"

const Footer= () =>{
   return (
    <>
<div className="bg-gray-500 flex hover:bg-white border-2 border-gray-500 mt-2">
  <div>
    <img src={GooogleImage} alt="" />
  </div>
  <div className="bg-gray-500 flex ml-8">
    <div className="flex flex-col">
      <div>Products</div>
      <div>
        <h1>Google play</h1>
        <h1>Google pay</h1>
        <h1>Google Drive</h1>
        <h1>Google Movies</h1>
      </div>
    </div>
    <div className="ml-8">
      <div>Follow</div>
      <div className="flex flex-col">
        <a>Youtube</a>
        <a>Instagram</a>
        <a>FaceBook</a>
        <a>X</a>
      </div>
    </div>
  </div>
  <div className="flex flex-col ml-8">
    <div>Contact Us</div>
    <div>
      <input type="text" className="border-2 border-gray-400 rounded" /> <br />
      <button>Email</button>
    </div>
  </div>
  <div>
    Copyright @ 2024
  </div>
</div>

    </>
   )

}

export default Footer