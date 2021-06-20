// Header Bottom Section
import CardComp from '../cardsComp/cardComponent';
import MidTopComp from './midTopSec';
import TopMidComponent from './topMidSec';
import MidImgComponent from './midImgSec';
import TestmCardComponent from '../cardsComp/testimonialCardComp';

const HeaderBottomSection = () => {
	return(
		<div>
			<div className="bg-gradient-to-r from-bg-top-hdr-bar-left to-bg-top-hdr-bar-right text-white pt-4">
				<div className="flex">
					<div className="flex-grow pt-10 text-center">
						<p className="text-4xl tracking-wider font-bold">SELL OUR PRODUCTS</p>
						<p className="text-4xl tracking-wider font-bold">TAKE THE PROFIT</p>
						<small>Sell our products at your own shop</small>
					</div>
					<div className="flex-none">
						<img style={imgCss} src="https://images.unsplash.com/photo-1573496130488-f3bd89d03653?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
					</div>
				</div>
			</div>
			<CardComp/>
			<main className="p-32">
				<MidTopComp />
				<TopMidComponent />
				<MidImgComponent />
				<TestmCardComponent />
			</main>
		</div>
		)
}

const imgCss = {
	position:"relative",
	height:"350px",
	width:"350px",
	borderBottomLeftRadius: "500% 400px",
	borderTopLeftRadius: "500% 400px",
	borderTopRightRadius: "200px",
  	borderBottomRightRadius: 0,
}

export default HeaderBottomSection;