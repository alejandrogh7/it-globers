import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar.jsx';

export default function LandingPage() {

	const [active, setActive] = useState("l1");

	return (
		<section className="landing-container">
			<NavBar />
			<div className="items">
				<div className="title">
					<h1>estár cómodo, </h1>
					<h1>nunca fue tan fácil.</h1>
				</div>
				<div className="btn-container">
					<button>shop</button>
				</div>
				<div className="slides">
					{/*<input type="radio" className="radio" id="r1" />
					<input type="radio" className="radio" id="r2" />
					<input type="radio" className="radio" id="r3" />

					<div className="dots">
						<label id="l1" className={`${active === "l1" ? "active": ""}`} onClick={() => setActive("l1")}><i></i></label>
						<label id="l2" className={`${active === "l2" ? "active": ""}`} onClick={() => setActive("l2")}><i></i></label>
						<label id="l3" className={`${active === "l3" ? "active": ""}`} onClick={() => setActive("l3")}><i></i></label>
					</div>
					*/}
					<span className="dot"><a className={`bullet ${active === "l1" ? "active" : ""}`} onClick={() => setActive("l1")}></a></span>
					<span className="dot"><a className={`bullet ${active === "l2" ? "active" : ""}`} onClick={() => setActive("l2")}></a></span>
					<span className="dot"><a className={`bullet ${active === "l3" ? "active" : ""}`} onClick={() => setActive("l3")}></a></span>
				</div>
			</div>
		</section>
	);
}
