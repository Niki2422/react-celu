import "./Navbar.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export default function Navbar(){

const {cart} = useContext(CartContext)

return(

<nav className="navbar">

<div className="logo">
React-Celu
</div>

<ul>

<li>
<Link to="/">Inicio</Link>
</li>

<li>
<Link to="/productos">Productos</Link>
</li>

<li>
<Link to="/contacto">Contacto</Link>
</li>

<li>
<Link to="/carrito">
🛒 ({cart.length})
</Link>
</li>

</ul>

</nav>

)

}