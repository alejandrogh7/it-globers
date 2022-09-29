import React from 'react';

export default function Product({ title, description, product_image, back_image, id }) {
	return (
		<section className={`product_container ${id % 2 === 0 ? "active" : ""}`}>
			<div className="image">
				<img src={ back_image } alt={ title }/>
				{id === 1 ? <button className="btn">shop</button>: null }
				<div className={id % 2 === 0 ? "triangle-left" : "triangle-right"}></div>
			</div>
			<div className="data">
				<div className="title">
					<img src={ product_image } alt={ title }/>
					<h1>{ title }</h1>
					<a></a>
				</div>
				<div className="data-2">
					<span className="desc">{ description }</span>
					<span className="more">> ver mas</span>
				</div>
			</div>
		</section>
	);
}
