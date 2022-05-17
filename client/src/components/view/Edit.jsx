import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Edit = () => {
    const [product, setProduct] = useState()
    const { id } = useParams()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/update/product/${id}`, {
            Title: product.Title,
            Price: product.Price,
            Desc: product.Desc
        })
            .then(res => navigate(`/product/${id}`))
            .catch(err => console.log(err))
    }

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    const getInfo = async () => {
        const response = await axios.get(`http://localhost:8000/api/product/${id}`)
        console.log(response.data)
        return response.data
    }

    useEffect(() => {
        getInfo()
            .then(setProduct)
    }, [])



    return (
            product ?
            <form className='bg-dark text-center pb-3' onSubmit={handleSubmit}>
                <h1>Product Manager</h1>
                <div className='mb-3 w-25 text-center m-auto'>
                    <label className='form-label' >Title:</label>
                    <input name='Title' className='form-control' onChange={handleChange} value={product.Title} type="text" />
                </div>
                <div className='mb-3 w-25 text-center m-auto'>
                    <label className='form-label' >Price:</label>
                    <input name='Price' className='form-control' onChange={handleChange} value={product.Price} type="number" />
                </div>
                <div className='mb-3 w-25 text-center m-auto'>
                    <label className='form-label'>Description:</label>
                    <textarea name='Desc' className="form-control" onChange={handleChange} placeholder="Type Something About your product" value={product.Desc} ></textarea>
                </div>
                <input type="submit" value="Submit" className="btn btn-outline-primary" />
            </form>:
            <h1>Loading</h1>
    )
}

export default Edit