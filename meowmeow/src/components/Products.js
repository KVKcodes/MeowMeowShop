import React from 'react'
import black from '../assets/Images/Products/black-shirt.webp'
import white from '../assets/Images/Products/white-shirt.webp'
import jojo from '../assets/Images/Products/jojo-shirt.jpg'
import designer from '../assets/Images/Products/designer-shirt.webp'
import '../css/ProductCSS.css'

const productData= [
    {
        title: "Black shirt",
        brand: "Gucci",
        cost: 50000,
        stock: 4000,
        image: black,
        des: "Just a stupidly overpriced black shirt",
    },
    {
        title: "White shirt with red stripes",
        brand: "Lovievoton",
        cost: 2000,
        stock: 2003,
        image: white,
        des: "Just a stupidly overpriced white shirt",
    },
    {
        title: "Designer shirt",
        brand: "Thrift shop",
        cost: 3000,
        stock: 4130,
        image: designer,
        des: "Just a stupidly overpriced white shirt",
    },
    {
        title: "Jojo shirt",
        brand: "Wish Wonders",
        cost: 100000,
        stock: 5,
        image: jojo,
        des: "Very valueable shirt with alot of value",
    },
]
export default function Products() {
  return (
    <div className='allProducts'>
        {productData.map((product) => (
            <>
            <div class="card mb-3">
            <h3 class="card-header"><span className='brand-name'>{product.brand}</span></h3>
            <div class="card-body">
              <h5 class="card-title"><span className='title-text'>{product.title}</span></h5>
            </div>
            <img src={product.image} alt='product' className='productImg' />
            <div class="card-body">
              <p class="card-text">{product.des}</p>
            </div>
            <ul class="list-group list-group-flush">
                <button type="button" className="btn btn-primary">Add to cart</button>
                <button type="button" className="btn btn-danger">Buy item</button>
                <button type="button" className="btn btn-warning">View item</button>
            </ul>
            <div id="cost" class="card-footer text-muted">
              Cost: {product.cost} rupees
            </div>
            <div class="card-footer text-muted">
              Stock left: {product.stock}
            </div>
          </div>
          </>
        ))}
    </div>
  )
}
