import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Product = () => {
    const [item, setItem] = useState('')
    const { id } = useParams()
    const navigate = useNavigate();

    const getInfo = async () => {
        const response = await axios.get(`http://localhost:8000/api/product/${id}`)
        console.log(response.data)
        return response.data
    }
    const deleteOne = async (id) =>{
        await axios.delete(`http://localhost:8000/api/delete/product/${id}`)
    }

    const handleDelete = (e, id) =>{
        e.preventDefault();
        deleteOne(id)
        navigate('/')
    }

    useEffect(() => {
        getInfo()
            .then(setItem)
    }, [])

    return (
        <div>
            <div className='bg-dark d-flex flex-column text-center text-light'>
                <p className='fs-1'>{item.Title}</p>
                <p>Price: ${item.Price}</p>
                <p className='mb-4'>Description: {item.Desc}</p>
            </div>
            <div className='d-flex justify-content-center'>
            <a href="/" className='btn btn-primary me-3'>Home</a>
            <a href={`/edit/${item._id}`}><input type="button" className=' btn btn-info' value="Update" /></a>
            <input type="button" className='ms-3 btn btn-danger' onClick={e => handleDelete(e, item._id)} value="Delete" />
            </div>
        </div>
    )
}

export default Product