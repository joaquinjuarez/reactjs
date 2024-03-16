import { NavLink,Link } from "react-router-dom"
import CartWidget from "./CartWidget/CartWidget"

const Navbar = () => {
    return(
        <nav className="NavBar" style={{display:'flex', justifyContent:'space-around'}}>
            <Link to="/">
                <h3>Tablet Shop</h3>
            </Link>
            <div className="Categories" style={{display:'flex', justifyContent:'space-around', width:500, alignItems:'center'}}>
                <NavLink to={`/category/wacom`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}> Wacom </NavLink>
                <NavLink to={`/category/xppen`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}> XP_pen</NavLink>
                <NavLink to={`/category/samsung`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}> Samsung</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default Navbar