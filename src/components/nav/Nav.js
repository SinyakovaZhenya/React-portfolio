import { NavLink } from "react-router-dom";
import BtnDark from "../btnDark/BtnDark";
import "./style.css";


const Nav = () => {

	const activeLink = "nav-list__link nav-list__link--active";
	const noLink = "nav-list__link";

	return (
		<nav className="nav">
			<div className="container">
				<div className="nav-row">
					<NavLink to="/" className="logo">
						<strong>Frontend</strong> portfolio
					</NavLink>
					<BtnDark/>
					<ul className="nav-list">
						<li className="nav-list__item">
							<NavLink to="/projects" className={({isActive}) => {
								return isActive ? activeLink : noLink;
							}}>
								Projects
							</NavLink>
						</li> 
						<li className="nav-list__item">
							<NavLink to="/scills" className={({isActive}) => {
								return isActive ? activeLink : noLink;
							}}>
							Skills
							</NavLink>
						</li> 
						<li className="nav-list__item">
							<NavLink to="/contacts" className={({isActive}) => {
								return isActive ? activeLink : noLink;
							}}>
								Contacts
							</NavLink>
						</li> 
					</ul>
				</div>
			</div>
		</nav>);
}

export default Nav;