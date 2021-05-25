import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponet'
import { setProducts } from '../redux/actions/productActions'

const ProductListing = () => {
  const products = useSelector((state) => state)
  const dispatch = useDispatch()
  const fetchProducts = async () => {
    const res = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log(err)
      })
    dispatch(setProducts(res.data))
  }
  useEffect(() => {
    fetchProducts()
  }, [])
  console.log('products:', products)
  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  )
}

export default ProductListing
