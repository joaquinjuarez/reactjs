import { useState } from "react"



const ItemCount =({initial, onAdd}) =>{
    const [quantity, setQuantity] = useState(initial)
    const increment = () => {
            setQuantity(quantity+1)
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity -1)
        }
    }


    return(
        <div className="counter">
            <div className="controls">
                <button className="Button" onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(quantity)}>            
                  Agregar al carrito
                </button>
            </div>

        </div>
    )
}
export default ItemCount

