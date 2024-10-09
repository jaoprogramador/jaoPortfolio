import './Footer.css'
import {useCart} from '../hooks/useCart.js'
import { useFilters } from '../hooks/useFilters'

export function Footer () {
  const { filters } = useFilters()
  const {carts } = useCart()

  return (
    <footer className='footer'>                
       <pre>{JSON.stringify(filters, null, 2)}</pre>                        
       <pre>{JSON.stringify(carts, null, 2)}</pre>                        
       <br></br>
      <h4>Prueba técnica de React ⚛️ － <span>@jaoprogramador</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5> 
    </footer>
  )
}