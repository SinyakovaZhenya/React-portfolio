import "./style.css";
import vk from "./../../img/icons/vk.svg";
import githab from "./../../img/icons/gitHub.svg";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item"><a href="#!"><img src={vk} alt="Link"/></a></li>
						<li className="social__item"><a href="#!"><img src={githab} alt="Link"/></a></li>
					</ul>
					<div className="copiright">
						<p>© 2022 frontend-dev.com</p>
					</div>
				</div>	
			</div>
		</footer>)
}

export default Footer;