import Item from "../Item/Item"

const Itemlist= ({products}) => {
    return(
        <div className="Listgrup">
            {products.map(prod => <item key={prod.id} {...prod}/>)}
        </div>
    )
}
export default Itemlist