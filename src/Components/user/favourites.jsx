import React from 'react'
// import { useNavigate } from 'react-router-dom'

const Favourites = ({cart,setCart}) => {
    // let navigate=useNavigate()
    // let readBook=(id)=>{
    //     navigate(`userPortal/books/${id}`)
    // }
    
return (
    <div className='favourties'>
        <h1>Favourties</h1>
    { cart.map((data)=>(
        <div className="fav_book">
            <h1>Title:{data.title}</h1>
            <img src={data.thumbnailUrl} alt="" />
            <h3>Page Count:{data.pageCount}</h3>
        </div>
    ))}
    
    </div>
)
}

export default Favourites
