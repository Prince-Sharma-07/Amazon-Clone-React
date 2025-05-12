/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'
import { ProductsData } from '../Constants'

export const cartContext = createContext(null)

export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState([])
    // const [subTotal , setSubTotal] = useState(0)
    // const [subTotalFormatted , setSubTotalFormatted] = useState(0)

    const totalItems = cart?.reduce((acc, { quantity }) => acc + quantity, 0)

    function addToCart(productId, quantityValue = 1, discounted_price = 0) {

        const existingProduct = cart.find(({ product_id }) => product_id === productId) ??
        {
            product_id: productId,
            quantity: 0,
            price: Number(discounted_price.slice(1, discounted_price.length).replaceAll(',', ' ').replaceAll(' ', ''))
        }

        existingProduct.quantity += Number(quantityValue)
        // setSubTotal((prev) => prev + existingProduct.price * existingProduct.quantity)
        // setSubTotalFormatted(new Intl.NumberFormat('en-IN').format(subTotal))
        !cart.find((obj) => obj.product_id === existingProduct.product_id) ? setCart([...cart, existingProduct]) : setCart([...cart])
    }

    function removeFromCart(productId) {
        const existingProduct = cart.find(({ product_id }) => product_id === productId)
        if (existingProduct.quantity === 1) return deleteFromCart(productId)
        existingProduct.quantity -= 2
        addToCart(existingProduct.product_id)
    }

    function deleteFromCart(productId) {
        setCart((prev) => prev.filter((item) => item.product_id != productId))
        //  if(item.product_id == productId) setSubTotal((prev) => prev - item.price * item.quantity) 
        // setSubTotalFormatted(new Intl.NumberFormat('en-IN').format(subTotal))
    }

    return (
        <cartContext.Provider value={{ cart, setCart, addToCart, totalItems, deleteFromCart, removeFromCart }}>
            {children}
        </cartContext.Provider>
    )
}

export function useCart() {
    return useContext(cartContext) ?? {}
}
