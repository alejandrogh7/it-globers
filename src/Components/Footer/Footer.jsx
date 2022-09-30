import React from 'react';
import shield from '../../utils/shield.png';
import qr from '../../utils/qr.png';
import facebook from '../../utils/facebook.png';
import instagram from '../../utils/instagram.png';
import twitter from '../../utils/gorjeo.png';

export default function Footer() {
	return (
		<section className="footer_container">
			<div className="foot">
				<a className="logo" href="/">
					<span>pufi</span><span className="copy">©</span>
				</a>
					<div className="data">
						<div className="items">
							<span>pufi rain</span>
							<span>pufi puff</span>
							<span>pufi cart</span>
							<span>pufi nap</span>
						</div>
						<a className="v-line"></a>
							<div className="contact">
								<span>contacto</span>
								<span>ayuda</span>
								<span>cómo comprar</span>
								<span>término & condiciones</span>
							</div>
						<a className="v-line"></a>
							<div className="buy">
								<span>compra 100% segura</span>
									<div className="buy-data">
										<div className="icons">
											<img src={qr} alt="qr"/>
											<img src={shield} alt="shield"/>
										</div>
										<span>comprá con la garantia de pufi</span>
									</div>
							</div>
						<a className="v-line"></a>
						<div className="follow">
								<span>seguinos en</span>
								<img src={facebook} alt="face"/>
								<img src={twitter} alt="twitter"/>
								<img src={instagram} alt="instagram"/>
							</div>
					</div>
			</div>
			<div className="line">
				<a className="h-line"></a>
			</div>
			<div className="copyright">
				<span>PUFI Copyright 2017 - Todos los derechos reservados</span>
				<img src="http://www.ecommerceday.co/2018/wp-content/uploads/2017/08/Brandlive-1.png" alt="brandlive"/>
			</div>
		</section>
	);
}
