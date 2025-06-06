import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./Home"
import Product from "./Product"
import Productdata from "./Productdata"
import p from "../p.jfif"
import P2 from "../P2.jfif"
import P3 from "../P3.jfif"
import P4 from "../P4.jfif"
function Main(){
    const P=[{title:"Product1",
            id:"001",
            price:"3000",
            image:p
        },{title:"Product2",
            id:"002",
            price:"3500",
            image:P2
        },{title:"Product3",
            id:"003",
            price:"4000",
            image:P3
        },{title:"Product4",
            id:"004",
            price:"3200",
            image:P4
        }]
        return (<div>
            <Router>
        <ul>
            <li><Link to="/">Home </Link><p>           </p>
            <Link to="/Product">Product</Link><p>         </p>
            <Link to="/Productdata">Productdata</Link>
            </li>
        </ul>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Product" element={<Product/>}/>
            <Route path="/Productdata" element={<Productdata data={P}/>}/>
        </Routes>
        </Router>
        </div>)
}
export default Main