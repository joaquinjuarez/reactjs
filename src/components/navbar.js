import { NavLink } from "react-router-dom"
import carwidgets from "../CartWidgets/carwidgets"

const navbar = () => {
    return(
        <nav className="NavBar">
            <link to="/">
                <h3>Tablet Shop</h3>
            </link>
            <div className="Categories">
                <NavLink to={`/Category/Wacom`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}> Wacom
                <NavLink to={`/Category/XPpen`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}> XP_pen
                <NavLink to={`/Category/Samsung`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}> Samsung

            </div>
            <carwidgets/>
        </nav>
    )
}
export default navbar