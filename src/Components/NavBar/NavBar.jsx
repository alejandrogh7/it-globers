import React from 'react';
import puff from '../../utils/puff.png';
import rain from '../../utils/umbrella.png';
import cart from '../../utils/bag.png';
import nap from '../../utils/neck-pillow.png';
import arrow from '../../utils/arrow-down-sign-to-navigate.png';


const ICONS = [{icon: puff, name: "puff"}, {icon: rain, name: "rain"}, {icon: cart, name: "cart"}, {icon:nap, name: "nap"}];

export default function NavBar() {
	return (
		<section className="navbar_container">
			<div className="logo">
				<span>pufi</span><span className="copy">©</span>
			</div>
			<div className="menu">
				{ICONS.map((icon, index) => {
					return <div className="menu-container">
						<a className={` icon-${index}`}></a>
						<span key={ index } className={`menu-item`}>
							<img src={ icon.icon } alt={ icon.name } className={`icons icon`} />
							<h1 className="menu-text">pufi { icon.name }</h1>
						</span>
						</div>
				})}
			</div>
			<div className="user-data">
				<span className="user">mi cuenta <img src={arrow} alt="icon" className="icons icon-arrow"/></span>
				<span className="compra">mi compra</span>
			</div>
		</section>
	);
};
