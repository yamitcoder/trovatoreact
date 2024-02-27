import './App.css'

import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'

function App() {
  const saludo="¡Hola!"
  return (

    <div>
      <Navbar/>
      <ItemListContainer greeting="Bienvenidos a Despegar" saludo={saludo}/>
    </div>

  );
}

export default App;
