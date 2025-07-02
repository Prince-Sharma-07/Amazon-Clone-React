/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'
import { ProductsData } from '../Constants'

export const cartContext = createContext(null)

export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState([])
    const [subTotal, setSubTotal] = useState(0)
    const [subTotalFormatted, setSubTotalFormatted] = useState(0)
    console.log(cart)
    useEffect(() => {
        setSubTotalFormatted(new Intl.NumberFormat('en-IN').format(subTotal))
    }, [subTotal])

    const totalItems = cart?.reduce((acc, { quantity }) => acc + quantity, 0)

    function addToCart(productId, quantityValue = 1, discounted_price = 0) {

        const existingProduct = cart.find(({ product_id }) => product_id === productId) ??
        {
            product_id: productId,
            quantity: 0,
            price: parseInt(discounted_price.slice(1, discounted_price.length).replaceAll(',', ' ').replaceAll(' ', ''))
        }
        if(existingProduct.quantity >= 5){
            alert('Max 5 items are allowed!')
            return;
        } 
        existingProduct.quantity += parseInt(quantityValue)
        setCart(prev => prev.find(({product_id}) => product_id === existingProduct.product_id) ? [...prev] : [...prev, existingProduct])
        setSubTotal((prev) => prev + existingProduct.price * quantityValue)
    }

    function removeFromCart(productId) {
        const existingProduct = cart.find(({ product_id }) => product_id === productId)
        if (existingProduct.quantity === 1) return deleteFromCart(existingProduct.product_id)
        existingProduct.quantity -= 1
        setSubTotal(prev => prev - existingProduct.price)
    }

    function deleteFromCart(productId) {
        const existingProduct = cart.find(({ product_id }) => product_id === productId)
        setSubTotal((prev) => prev - existingProduct.price * existingProduct.quantity) 
        setCart((prev) => prev.filter((item) => item.product_id != productId))
        setSubTotalFormatted(new Intl.NumberFormat('en-IN').format(subTotal))
    }

    return (
        <cartContext.Provider value={{ cart, setCart, addToCart, totalItems, deleteFromCart, removeFromCart, subTotalFormatted }}>
            {children}
        </cartContext.Provider>
    )
}

export function useCart() {
    return useContext(cartContext) ?? {}
}
