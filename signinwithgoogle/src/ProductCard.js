import { Images } from "./Constants"

const ProductCard =() =>{
 return (
    <>
    <div className="ml-2">
        <h2>Monitors</h2>
    </div>
    <div className=" ml-2 flex gap-6 mr-2   mt-4 ">
         {Images.map(img => (<div key={img.name} className="  border-2 hover:bg-gray-100">
             <div className="">
                 <img src={img.image} alt="" />
             </div>
             <h1>{img.name}</h1>
         </div>
         ))}
     </div></>
    )
    }
export default ProductCard