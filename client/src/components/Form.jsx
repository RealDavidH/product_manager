import React, {useState} from 'react'
import axios from 'axios'


const Form = () => {
    const [product, setProduct] = useState({})

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(product)
        axios.post(`http://localhost:8000/api/create/product`, {
            Title: product.title,
            Price: product.price,
            Desc: product.desc
        })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    const handleChange = (e) =>{
        setProduct({...product, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <form className='bg-dark text-center pb-3' onSubmit={handleSubmit}>
                <h1>Product Manager</h1>
                <div className='mb-3 w-25 text-center m-auto'>
                    <label className='form-label' >Title:</label>
                    <input name='title' className='form-control' onChange={handleChange} value={product.Title} placeholder='I am a title' type="text" />
                </div>
                <div className='mb-3 w-25 text-center m-auto'>
                    <label className='form-label' >Price:</label>
                    <input name='price' className='form-control' onChange={handleChange} value={product.Price} placeholder='Enter Price:' type="number" />
                </div>
                <div className='mb-3 w-25 text-center m-auto'>
                    <label className='form-label'>Description:</label>
                    <textarea name='desc' className="form-control" placeholder="Type Something About your product" onChange={handleChange} value={product.Desc} ></textarea>
                </div>
                <input type="submit" value="Submit" className="btn btn-outline-primary" />
            </form>
        </div>
    )
}

export default Form