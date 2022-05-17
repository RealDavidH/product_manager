import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

const Display = () => {
    const [products, setProducts] = useState('')

    const getAll = async () => {
        const response = await axios.get(`http://localhost:8000/api/all/products`)
        return response.data
    }

    const deleteOne = async (id) =>{
        await axios.delete(`http://localhost:8000/api/delete/product/${id}`)
    }

    const handleDelete = (e, id) =>{
        e.preventDefault();
        deleteOne(id)
        const filtered = products.filter((i) =>{
            return(
                i !== id
            )
        })
        setProducts(filtered)
    }

    useEffect(() => {
        getAll()
            .then(setProducts)
    }, [products])

    return (
        <div  >
            <h1 className='ms-5'>Products:</h1>
            <table className='table table-dark table-striped w-50 m-auto'>
                <tbody>
                    {products.length > 0 &&
                        products.map((product, i) => {
                            return (
                                <tr key={i}>
                                    <td className='text-center' ><a href={`/product/${product._id}`} className='text-decoration-underline text-light fs-3'>{product.Title}</a> </td>
                                    <td className='flex-row d-flex p-3 justify-content-center'><a href={`/edit/${product._id}`}>
                                        <input type="button" className='me-3 btn btn-outline-info btn-sm' value="Update" /></a>
                                    | 
                                    <input type="button" className='ms-3 btn btn-outline-danger btn-sm' onClick={e => handleDelete(e, product._id)} value="Delete" />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Display