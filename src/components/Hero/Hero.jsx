import "./Hero.css"
import { Link } from "react-router-dom"

export default function Hero(){

return(

<section className="hero">

<h1>Los mejores celulares en Bahía Blanca</h1>

<p>
Ofertas exclusivas en iPhone, Samsung y Xiaomi
</p>

<Link to="/productos">

<button>Ver Productos</button>

</Link>

</section>

)

}