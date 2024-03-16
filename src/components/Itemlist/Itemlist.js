import Item from "../Item/Item"

const Itemlist= ({products}) => {
    return(
        <div className="Listgrup" style={{display:'flex', justifyContent:'space-around'}}>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}
export default Itemlist