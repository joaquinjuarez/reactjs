import Itemlist from "../Itemlist/Itemlist"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../config/firebase"


const ItemlistContainer = ({greetings}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()
     
    useEffect (() => {
        setLoading(true)
        const collectionRef = categoryId
        ?query(collection(db, "products"), where("category", "==", categoryId))
        : collection(db, products)

        getDocs(collectionRef)
        .then(response => {
            const productsAdapted = response.docs.map(doc =>{
                const data = doc.data() 
                return {id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        }) 
        .catch(error => {
            console.error(error)
        })
        .finally(()=>{
            setLoading(false)
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