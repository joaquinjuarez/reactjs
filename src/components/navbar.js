import carwidgets from "../CartWidgets/carwidgets"

const navbar = () => {
    return (
        <nav>
            <h3>Tabletas Graficas</h3>
            <div>
                <button>Wacom</button>
                <button>XP-Pen</button>
                <button>Samsung</button>
            </div>
            <Cartwidgets />
        </nav>
    )
}  
export default navbar