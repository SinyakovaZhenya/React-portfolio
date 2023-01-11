import { useEffect, useState } from "react";
import WindScroll from "../components/windScroll/WindScroll";
import Header from "./../components/header/Header";
import landingImg from "./../img/projects/01a.jpg";

const Home = () => {

	return ( 
		<>
			<Header/>
					
			<main id="main" className="section">
				<div className="container">
					<h2 className="title-1">Projects</h2>
					<ul className="projects">
						<li className="project">
							<p>
								<img src={landingImg} alt="Project img" className="project__img"/>
								<h3 className="project__title">Landing</h3>
							</p>
						</li>
					</ul>
					<div id="circle1" className="circle"></div>
					<WindScroll/>
				</div>
			</main> 
		</>
	);		
}

export default Home;