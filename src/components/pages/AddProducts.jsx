import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addProduct } from '../services/Api'

const AddProducts = () => {
    const [fromValues, setFormValues] = useState({
        brand: "",
        color: "",
        description: "",
        quantity: ""
    })
    const [formError, setFormError] = useState({})
    const [check, setCheck] = useState(false)
    const navigate = useNavigate()


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...fromValues, [name]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        setFormError(valiDate(fromValues))
        isSubmit()
    }


    const valiDate = (fromValues) => {
        const error = {}
        const regextitle = /^([A-Z])([a-zA-Z ])+$/;

        if (!fromValues.brand) {
            error.brand = "*Brand is required "
        } else if (!regextitle.test(fromValues.brand)) {
            error.brand = "*Starting Latter Must be uppercase";
        }


        if (!fromValues.color) {
            error.color = "*Color is needed "
        }


        if (Number(fromValues.quantity) < 5) {
            error.quantity = "*Quantity must be more than 5"
        } else if (Number(fromValues.quantity) > 20) {
            error.quantity = "*Quantity must be less than 20"
        }


        if (!fromValues.description) {
            error.description = "*Description is needed "
        }

        return error

    }

    const len = Object.keys(formError).length;

    useEffect(() => {
        if (len) {
            setCheck(true)
        }
    }, [len])

    const isSubmit = () => {
        if (len === 0 && check) {
            addProduct(fromValues)
            alert("Product added Successfully !!")
            navigate('/view-products')
        } 
    }

    return (
        <>
            <div className='container'>
                <h1 className='text-center'>ADD ITEMS HERE</h1>
                <hr className='text-danger'/>
                <form className="row g-3 needs-validation" onSubmit={handleSubmit}>

                    {/* Product Name */}

                    <div className="col-md-3">
                        <label htmlFor="product" className="form-label fs-4">Product</label>
                        <input
                            type="text"
                            className="form-control"
                            id="product"
                            placeholder='Model Name'
                            name='brand'
                            value={fromValues.brand}
                            onChange={handleChange} />
                        <p className='text-danger' >{formError.brand}</p>
                    </div>

                    {/* Choose Product Color */}

                    <div className="col-md-2">
                        <label htmlFor="color" className="form-label fs-4">Choose Color</label>
                        <select className="form-select" name='color' value={fromValues.color} onChange={handleChange}>
                            <option value="">Select Color</option>
                            <option value="Grey">Grey</option>
                            <option value="Red">Red</option>
                            <option value="Blue">Blue</option>
                            <option value="Black">Black</option>
                            <option value="White">White</option>
                        </select>
                        <p className='text-danger' >{formError.color}</p>
                    </div>


                    {/* Product Quantity */}

                    <div className="col-md-2">
                        <label htmlFor="quantity" className="form-label fs-4">Quantity</label>
                        <input
                            type="text"
                            className="form-control"
                            id="quantity"
                            placeholder='Quantity'
                            name='quantity'
                            value={fromValues.quantity}
                            onChange={handleChange} />
                        <p className='text-danger' >{formError.quantity}</p>
                    </div>


                    {/* Product Description */}

                    <div className="col-md-7">
                        <p className='fs-4'>Product's Description</p>
                        <textarea
                            className="form-control"
                            id="description"
                            placeholder="Enter Product's Details here"
                            name='description'
                            value={fromValues.description}
                            onChange={handleChange} />
                        <p className='text-danger' >{formError.description}</p>
                    </div>

                    <div className="col-12">
                        <button className="btn btn-danger" type="submit">ADD PRODUCT</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddProducts