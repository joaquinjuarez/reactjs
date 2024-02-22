const  products = [
    {
        id: "1",
        name: "Wacom",
        price: "1000",
        category: "tablet",
        img: "https://outtec.com.ar/wp-content/uploads/2022/03/tableta-grafica-wacom-instuos-basic-pen-small-black-wacctl4100-digitalizadora.jpg",
        stock: 25,
        description: "Wacom, líder mundial en el mercado de las tabletas gráficas",
    }
    {id: "2" , name: "XP_pen" , price: "2000" , category: "tableta" , img: "https://http2.mlstatic.com/D_NQ_NP_642300-MLU72637353497_112023-O.webp",}
    {id: "3" , name: "Samsung" , price: "3000" , category: "tableta" , img: "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-t220nzadaro/gallery/ar-galaxy-tab-a7-lite-wifi-t220-393873-sm-t220nzadaro-530741672?$650_519_PNG$",}
]

    export const getProducts = () => {
        return new  Promise((resolve) =>{
            setTimeout(() => {
                resolve(products)
            }, 500 )
        })
    }
    export const getProductById = (productId) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(product.find(prod => prod.id === productId))
            }, 500


            )
        }

        )
    }

