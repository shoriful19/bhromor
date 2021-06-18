// Card component for front page top

const cardCss = {
	background: "linear-gradient(to bottom, #34d399 50%, #ffffff 50%)",
}

const CardComp = () => {
	return(
		<div style={cardCss}>
			<div className="flex gap-16 justify-center text-center">
				<div className="flex-none">
					<div className="grid-rows-3 h-56 w-56 rounded-lg bg-gray-100 p-4 shadow-xl">
						<section className="p-2">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mx-auto bi bi-bag-check-fill" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
							</svg>
						</section>
						<section>
							<p className="font-bold font-2xl font-serif tracking-wide antialiased">Unlimited Products</p>
						</section>
						<section className="text-sm font-light">A very rounded card</section>
					</div>
				</div>
				<div className="flex-none">
					<div className="grid-rows-3 h-56 w-56 rounded-lg bg-gray-100 p-4 shadow-xl">
						<section className="p-2">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mx-auto bi bi-laptop-fill" viewBox="0 0 16 16">
							<path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
							</svg>
						</section>
						<section>
							<p className="font-bold font-2xl font-serif tracking-wide antialiased">Get a Free Website</p>
						</section>
						<section className="text-sm font-light">A very rounded card</section>
					</div>
				</div>
				<div className="flex-none">
					<div className="grid-rows-3 h-56 w-56 rounded-lg bg-gray-100 p-4 shadow-xl">
						<section className="p-2">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mx-auto bi bi-basket3-fill" viewBox="0 0 16 16">
							<path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z"/>
							</svg>
						</section>
						<section>
							<p className="font-bold font-2xl font-serif tracking-wide antialiased">Get Free Promotions</p>
						</section>
						<section className="text-sm font-light">A very rounded card</section>
					</div>
				</div>
			</div>
		</div>
		)
}

export default CardComp;