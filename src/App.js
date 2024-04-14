import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './components/form/Form'
import { CartProvider } from './context/CartContext'
import Cart from './components/cart/Cart'
import Checkout from './components/checkout/Checkout'

function App() {
  return (
    <CartProvider>  
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos a Despegar"/>} />
          <Route path='/categories/:categoryId' element={<ItemListContainer greeting= "Categoria:"/> } />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
          <Route path='Form' element={<Form/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
          
        </Routes>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;