import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {

const [cart,setCart] = useState(
JSON.parse(localStorage.getItem("cart")) || []
)

useEffect(()=>{
localStorage.setItem("cart",JSON.stringify(cart))
},[cart])

const addToCart = (product) => {

const exist = cart.find(item => item.id === product.id)

if(exist){

setCart(
cart.map(item =>
item.id === product.id
? {...item, quantity:item.quantity+1}
: item
)
)

}else{

setCart([...cart,{...product,quantity:1}])

}

}

const removeFromCart = (id)=>{
setCart(cart.filter(item => item.id !== id))
}

const total = cart.reduce(
(acc,item)=>acc + item.price * item.quantity,0
)

return(
<CartContext.Provider
value={{cart,addToCart,removeFromCart,total}}
>
{children}
</CartContext.Provider>
)

}