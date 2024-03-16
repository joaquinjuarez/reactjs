import { Link } from "react-router-dom"

const Item= ({id, name, img, price, stock}) => {
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="Itemimg" width={300} height={300}/>
            </picture>
            <section>
                <p className="Info">
                            {price}
                </p>
                <p className="Info">
                            {stock}

                </p>
            </section>
            <footer className="ItemFooter">
               <Link to={`/item/${id}`} className="Options">Ver detalle</Link>
            </footer>
        </article>


    )
}
export default Item