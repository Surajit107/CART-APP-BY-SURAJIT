import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getSingleProducts } from '../services/Api'

const ProductDetails = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const getAllProducts = async () => {
            const res = await getSingleProducts(id)
            setProduct(res.data)
            console.log(res.data);
        }
        getAllProducts()
    }, [id])

    return (
        <>
            <div className='container col-6'>
                <h1 className='text-center'>More Details</h1>
                <hr className='text-danger'/>
                <div className="card-body border rounded p-4" >
                    <h5 className="card-title">{product.brand}</h5>
                    <br />
                    <p className="card-text fw-semibold">Color: {product.color}</p>
                    <p className="card-text fw-semibold">Quantity:  {product.quantity}</p>
                    <p className="card-text fw-semibold">Description: {product.description}</p>
                    <Link className='btn btn-outline-danger btn-sm' to={`/view-products/${id}`}>Less Details...</Link>
                </div>
            </div>
        </>
    )
}

export default ProductDetails