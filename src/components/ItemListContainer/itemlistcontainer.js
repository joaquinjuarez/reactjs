import Itemlist from "../Itemlist/Itemlist"
import {getProducts, getproducts} from "../../asyncMock"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"


const ItemlistContainer = ({greetings}) => {

    const [products, setProducts] = useState([])
    const { categoryId } = useParams() 

    useEffect(() => {
      getProducts()
        .then(response =>{
            setProducts(categoryId ? response.filter((item) => item.category === categoryId) : response )
        })
        .catch(error => {
            console.error(error)
        })
    }, [categoryId] )

    return(
        <div>
            <h1>{greetings}</h1>
             <Itemlist products={products}/>
        </div>
    )
    
}

export default ItemlistContainer