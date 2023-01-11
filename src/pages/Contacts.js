import WindScroll from "../components/windScroll/WindScroll";

const Contacts = () => {
	return ( 
		<main id="main" className="section">
		<div className="container">
			<h1 className="title-1">Contacts</h1>
			<ul className="content-list">
				<li className="comtent-list__item">
					<h2 className="title-2">Location</h2>
					<p>Ryazan, Russia</p>
				</li>
				<li className="comtent-list__item">
					<h2 className="title-2">Telegram / WhatsApp</h2>
					<p><a href="tel:+79106334778">+7 (910) 633-47-78</a></p>
				</li>
				<li className="comtent-list__item">
					<h2 className="title-2">Email</h2>
					<p><a href="mailto:sinyakovazhenya@gmail.com">sinyakovazhenya@gmail.com</a></p>
				</li>
			</ul>
			<WindScroll/>
		</div>
		</main>
	);
}

export default Contacts;