import React from 'react';
import FormLogic from '../FormLogic/FormLogic.jsx';

export default function Form() {

	return (
		<section className="form_container">
			<div className="text">
				<span className="insta">instagram</span>
				<span className="hash">#espufi</span>
			</div>
			<div className="collage">
				<div className="r-1">
					<img src="https://media.istockphoto.com/photos/woman-with-umbrella-and-coffee-on-rainy-day-picture-id1178504731?k=20&m=1178504731&s=612x612&w=0&h=Iz2Ijku68eJ7cIX9j2gYyH42yYMjT5tPIta28mD8KXQ=" alt="umbrella"/>
					<img src="https://www.thelist.com/img/gallery/the-alarming-truth-about-reusable-cotton-shopping-bags/intro-1629907465.jpg" alt="bag"/>
					<img src="https://imagenes.elpais.com/resizer/E7qcSQbOR91WKvOxf02oFAClUVo=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/MZY3IC4AXZCX5EZQKFXCCP7QRE.webp" alt="puff"/>
				</div>
				<div className="r-2">
					<img src="https://images.unsplash.com/photo-1558525012-54a093add0f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlbGF4aW5nJTIwYnklMjB0aGUlMjBiZWFjaHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="mbeach"/>
					<img src="https://www.jetsetter.com//uploads/sites/7/2018/04/Gbd-qpbZ.jpeg" alt="nap"/>
					<img src="https://cdn.shopify.com/s/files/1/0570/7513/8727/products/Airpuff-Different-Colors_540x_cf8dae16-5a32-4e63-84ae-0fdb06e0e0c4_540x.webp?v=1658995889" alt="puff"/>
				</div>
			</div>
			<div className="form">
				<span className="insta">newsletter</span>
				<span className="hash">suscribite</span>
				<span>Y enterate de todas las novedades</span>
				<FormLogic />
			</div>
		</section>
	);
}
