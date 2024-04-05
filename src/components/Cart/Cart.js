import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Linlk } from "react-router-dom"



const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext) 

    if (totalQuantity === 0) {
        return(
            <div>
                <hi>No hay items en el carrito</hi>
                <Linlk to="/" classname="Option">Productos</Linlk>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: ${total} </h3>
            <button onClick={() => clearCart()} className="Button">Limpiar el carrito</button>
            <Linlk to="/checkout" className="Option">Checkout</Linlk>
        </div>
    )
}