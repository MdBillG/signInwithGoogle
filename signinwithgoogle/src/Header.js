import { Link } from "react-router-dom";

const Header =() =>{


return (
    <>

   <div className="flex justify-between border-2 border-gray-500  ml-2 mr-2 mt-2">
        <div className="flex gap-6 ml-2">
            <div>Home</div>
            <div>Contact us</div>
            <div>Services</div>
    </div>
    <div className="flex gap-2  mr-4">
        <div>Cart</div>
        <div>wishlist</div>
        <div><Link to= '/'>
    <button>
    {localStorage.getItem('clientId') ? 'Logout' : 'Login'}
    </button>
    </Link></div>
    </div>
    </div>
    </>
)
}

export default Header;