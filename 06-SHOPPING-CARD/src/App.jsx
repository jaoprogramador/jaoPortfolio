import { products as initialProducts} from "./mocks/products.json"
import { useContext, useState } from "react"
import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { IS_DEVELOPMENT } from './config.js'
import { FiltersContext } from "./context/filters.jsx"
import { useFilters } from "./hooks/useFilters.js"
import { Cart } from "./components/Cart.jsx"
import { CartProvider } from "./context/cart.jsx"




function App() {
  const [products] = useState(initialProducts)
  const {filters, filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)
  
  return (
    <CartProvider>
    <Header/>
    <Cart></Cart>
    <Products products={filteredProducts} />
    
    {IS_DEVELOPMENT && <Footer></Footer> }
    </CartProvider>
  )
}

export default App
