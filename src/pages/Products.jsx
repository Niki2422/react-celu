import products from "../data/products"
import ProductCard from "../components/ProductCard/ProductCard"

export default function Products(){

return(

<div style={{padding:"40px"}}>

<h1>Productos</h1>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"20px"
}}
>

{products.map(product =>(

<ProductCard
key={product.id}
product={product}
/>

))}

</div>

</div>

)

}