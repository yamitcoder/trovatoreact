import '../item/item.css'
import { useNavigate } from 'react-router-dom'

const Item =({producto}) => {
    const navegar = useNavigate()
    return(

        <div className='card-global'>
            <img className='imagen' src={producto.imagen} alt='imagen'/>

            <div className='card'>
            <p className='categoria'>{producto.categoria}</p>
            <h3 className='titulo'>{producto.name}</h3>
            <p className='descripcion'>{producto.introduccion}</p>
            <p className='desde'>Desde</p>
            <p className='precio'>${producto.precio}</p>
            <p className='cuotas'>¡Hasta 1 cuotas sin interés!</p>

            <button onClick={()=> navegar(`/item/${producto.id}`)} className='buttom'>Ver más</button>
            </div>

        </div>
    )
}

export default Item