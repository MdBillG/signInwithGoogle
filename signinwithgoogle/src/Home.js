import { Link } from "react-router-dom"
import Header from "./Header"
import Banner from "./Banner"
import BrandBanners from "./BrandBanners"
import ProductCard from "./ProductCard"
import Footer from "./Footer"

const Home =() =>{
return (
    <>
    <Header/>
    <Banner/>
    <BrandBanners/>
    <ProductCard/>
    <Footer/>
   </>
)



}

export default Home