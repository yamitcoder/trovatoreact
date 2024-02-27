import './itemlistcontainer.css'

const ItemListContainer = (props) =>{
    const {greeting, saludo} = props
    return(
        <div className='container-list'>
            <h1 className='lisyt-h1'>{saludo}</h1>
            <h2 className='list-h3'>{greeting}</h2>
        </div>
    );
}

export default ItemListContainer
