import Itemlist from "../Itemlist/Itemlist"
import {getProducts, getproducts} from "../../asyncMock"
import { useParams } from "react-router-dom"


const ItemlistContainer = ({greetings}) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams([]) 
    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
      asyncFunc(categoryId)
        .then(response =>{
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    } [categoryId] )
    return(
        <div>
            <h1>{greetings}</h1>
            <Itemlist products={products}/>
        </div>
    )
    
}
export default ItemlistContainer