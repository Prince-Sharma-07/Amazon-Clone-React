import { createContext , useContext, useState  } from 'react'
import { ProductsData } from '../Constants'

const productsContext = createContext(null)

export default function ProductsContextProvider({children}) {
    const [filteredData , setFilteredData] = useState(ProductsData)

    function handleSearch(inputValue){
        const searchValue = inputValue.replaceAll(' ' , '')
        if(searchValue === '') {setFilteredData(ProductsData)
        }
        else {
            let searchedData = [];
            searchedData = ProductsData.filter(({product_name})=>{
            if(product_name.toLowerCase().includes(searchValue.toLowerCase())) return 1;
            return 0;
            })
            console.log(searchedData)
            setFilteredData(searchedData)
        }
    }

  return (
    <productsContext.Provider value={{filteredData , handleSearch , useProductsContext}}>
       {children}
    </productsContext.Provider>
  )
}

export function useProductsContext(){
    return useContext(productsContext) ?? {}
}

