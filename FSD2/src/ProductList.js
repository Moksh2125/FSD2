import ProductCard from "./ProductCard"
import p from "./p.jfif"
import P2 from "./P2.jfif"
import P3 from "./P3.jfif"
import P4 from "./P4.jfif"
function ProductList(){
    const P=[{title:"Product1",
        id:1,
        price:"3000",
        rating:"4.5",
        image:p
    },{title:"Product2",
        id:2,
        price:"3500",
        rating:"3.5",
        image:P2
    },{title:"Product3",
        id:3,
        price:"4000",
        rating:"5",
        image:P3
    },{title:"Product4",
        id:4,
        price:"3200",
        rating:"4.7",
        image:P4
    }]
    return (<>
    <ProductCard data={P}/>
    </>)
}
export default ProductList