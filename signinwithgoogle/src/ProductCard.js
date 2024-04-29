//  const Images =[
//     {name : 'Fire-Boltt Hurricane 1.3' ,image:'https://rukminim2.flixcart.com/image/312/312/kvcpn680/monitor/x/q/n/aw2721d-wqhd-27-210-axtq-dell-original-imag89mgkzehp4gq.jpeg?q=70'},
//     // {name :"Noise Colorfit Icon 2 1.8", image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/9/z/z/-original-imagxp8tfbntmsgk.jpeg?q=70'},
//     {name:'OnePlus Buds 3 ',image:'https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/6/0/0/-original-imagysfvpg8jw4bz.jpeg?q=70'},
//     {name:'Mivi Play 5 ',image:'https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/c/h/z/p2422h-full-hd-24-2021-210-bbdd-dell-original-imahy3u9angzgfrx.jpeg?q=70'},
//     {name:'HP DeskJet',image:'https://rukminim2.flixcart.com/image/312/312/kmxsakw0/monitor/d/n/u/s2721hgf-27-hhgmy-dell-original-imagfq7huhe5j9nw.jpeg?q=70'},
//     {name:'Hp Monitor',image:"https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/l/p/z/-original-imagysfvdbggcefy.jpeg?q=70"}
//  ]
import { Images } from "./Constants"

const ProductCard =() =>{
 return (
    <div className=" ml-2 flex gap-6 mr-2   mt-4 ">
    {Images.map(img =>
    (<div key={img.name}  className="  border-2 w   -[350px]" >
    <div className="">
    <img src={img.image} alt="" />
    </div>
    <h1>{img.name}</h1>
      </div> 
       ))}
     </div>
    )
    }
export default ProductCard