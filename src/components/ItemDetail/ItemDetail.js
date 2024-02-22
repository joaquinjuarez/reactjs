import Itemcount from "../ItemCount/ItemCount"
const ItemDetail = ({id, name, img, category, description, price, stock  }) => {
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">

                </h2>
            </header>
            <pictures>
                <img src={img} alt={name} className="ItemImg"/>
            </pictures>
            <section>
                <p className="Info"> 
                        {category}
                <p/>
                <p className="Info">
                        {description}
                </p>
                <p className="Info">
                        {price}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada")}></ItemCount>
            </footer>
        </article>
    )    
    
}