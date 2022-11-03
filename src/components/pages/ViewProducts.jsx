import React, { useEffect, useState, } from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../services/Api'

const ViewProducts = () => {
    const [products, setProducts] = useState([])
    const [colorVal, setColorVal] = useState()

    const filterColor = () => {
        if (colorVal !== "All") {
            let newProducts = products.reduce((pv, cv) => {
                if (cv.color === colorVal) {
                    pv.push(cv)
                }
                return pv;
            }, []);
            setProducts(newProducts)
        } else {
            getAllproducts()
        }
    }

    const changeColor = (e) => {
        setColorVal(e.target.value)
    }

    const getAllproducts = async () => {
        const res = await getProducts()
        setProducts(res.data)
    }

    useEffect(() => {
        getAllproducts()
    }, [])

    return (
        <>
            <div className='container col-3 my-3'>
                <label htmlFor="color" className="form-label fs-4">Filter Products: {colorVal}</label>
                <select
                    className="form-select"
                    aria-label="Default select example"
                    id="color"
                    value={colorVal}
                    onChange={changeColor}
                >
                    <option value="All">All</option>
                    <option value="Grey">Grey</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                </select>
                <button className='btn btn-outline-danger my-3 btn-sm' onClick={filterColor}> Submit </button>
            </div>

            <div className="container">
                <h1 className='text-center'>PRODUCTS</h1>
                <hr className='text-danger'/>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map((curElm) => {
                            const { brand, color, id } = curElm;
                            return (
                                <div className="col" key={id}>
                                    <div className="card-body border rounded p-3" >
                                        <h5 className="card-title">{brand}</h5>
                                        <br />
                                        <p className="card-text">Color: {color}</p>
                                        <Link className='btn btn-outline-danger btn-sm' to={`/details/${id}`}>More Details...</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ViewProducts