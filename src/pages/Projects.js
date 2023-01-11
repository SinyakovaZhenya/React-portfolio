import project01 from "./../img/projects/05-big.jpg";
import vector from "./../img/icons/Vector.svg";
import WindScroll from "../components/windScroll/WindScroll";

const Projects = () => {
	return ( 
		<main id="main" className="section">
		<div className="container">
			<div className="project-details">
				<h1 className="title-1">Landing</h1>
				<img src={project01} alt="" className="project-details__cover"/>
				<div className="project-details__desc">
					<p>Skills: JavaScript, React, Node.js</p>
				</div>
				<a href="#!" className="btn-outline">
					<img src={vector} alt=""/>
					GitHub repo
				</a>
			</div>
			<WindScroll/>
		</div>
		</main>
	);
}

export default Projects;