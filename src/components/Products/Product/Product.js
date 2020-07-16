import React from 'react';
import './Product.css'
import { NavLink } from 'react-router-dom'

const Product = (props) => {

	return (
		<div className="main">
			{props.products.map((p, key) => {
				return <div class="product-card">
					<div className="badge ">SALE</div>
					<div className="product-tumb">
						<img src={p.url} alt="" />
					</div>
					<div className="product-details">
						<span className="product-catagory">Women,bag</span>
						<h4>Women leather bag</h4>
						<p>{p.title}</p>
						<div className="product-bottom-details">
							<div className="product-price">Rs.###</div>
							<div className="product-links">
								<i className="fa fa-heart"></i>
								<NavLink to="/orders"><i className="fa fa-shopping-cart"></i></NavLink>
								<button key={key} className="button" onClick={() => props.prodChosen(key)}>Add to customize</button>
							</div>

						</div>
					</div>
				</div>
			})}
		</div>
	)
}

export default Product;
