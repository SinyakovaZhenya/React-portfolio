import WindScroll from "../components/windScroll/WindScroll";

const Scills = () => {
	return ( 
		<main id="main" className="section">
		<div className="container">
			<h1 className="title-1">Skills</h1>
			<ul className="content-list">
				<li className="comtent-list__item">
					<h2 className="title-2">Frontend</h2>
					<p>JavaScript, ReactJS, HTML, CSS</p>
				</li>
				<li className="comtent-list__item">
					<h2 className="title-2">Backend</h2>
					<p>NodeJS</p>
				</li>
			</ul>
			<WindScroll/>
		</div>
		</main>
	);
}

export default Scills;