// Mid Top Sections

const MidTopComp = () => {
	return(
		<div className="grid grid-cols-2 justify-center">
			<section className="bg-gradient-to-r from-bg-top-hdr-bar-left to-bg-top-hdr-bar-right" style={imgContainerCss}>
			<img src="https://images.unsplash.com/photo-1573166364902-982ae58a27ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
			className="object-contain transform translate-x-4 -translate-y-4"
			style={imgCss}/>
			</section>
			<section className="pl-8">
				<small className="text-sm font-light pb-4">Our Approach</small><br/>
				<p className="font-normal text-lg pb-1">Enabling Small Businesses via Technology</p>
				<dl className="font-light text-sm">We help you build, manage and publish your business. At ShopUp, we dream big, work hard, play hard and at the same time help you grow your business to the way you've always dreamed</dl>
				<section className="pt-3">
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="fill-current text-purple-500 bi bi-play-circle-fill" viewBox="0 0 16 16">
					<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
					</svg>
				</section>
			</section>
		</div>
		)
}

const imgCss = {
	height:"300px",
	width:"500px",
}
const imgContainerCss ={
	height:"310px",
	width:"480px",
}

export default MidTopComp;