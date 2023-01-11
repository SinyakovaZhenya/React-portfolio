import { useState, useEffect } from "react";
import "./style.css";

const WindScroll = () => {

	const [offsetY, setOffsetY] = useState(0);
	const handleScroll = () => setOffsetY(window.pageYOffset);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<div id="scene1">
			<div className="circle" style={{transform: `translateY(${offsetY * 0.3}px)`}}></div>
			</div>
			<div id="scene2">
				<div className="circle" style={{transform: `translateY(${offsetY * 0.2}px)`}}></div>
			</div>
			<div id="scene3">
				<div className="circle" style={{transform: `translateY(${offsetY * 0.4}px)`}}></div>
			</div>
			<div id="scene4">
				<div className="circle" style={{transform: `translateY(${offsetY * 0.3}px)`}}></div>
			</div>
			<div id="scene5">
				<div className="circle" style={{transform: `translateY(${offsetY * 0.2}px)`}}></div>
			</div>
			<div id="scene6">
				<div className="circle" style={{transform: `translateY(${offsetY * 0.4}px)`}}></div>
			</div>
			<div id="scene7">
				<div className="circle" style={{transform: `translateY(${offsetY * 0.4}px)`}}></div>
			</div>
			<div id="scene8">
				<div className="circle" style={{transform: `translateY(${offsetY * 0.2}px)`}}></div>
			</div> 
		</> 
	);
}

export default WindScroll;