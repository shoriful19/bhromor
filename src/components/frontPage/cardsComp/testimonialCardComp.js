// Testimonial Cards

const cardImgCss = {
	width:'80px',
	height:'80px',
	border:'2px solid blue',
	borderRadius:'50%',
	marginTop:'-60px',

}

const TestmCardComponent = () => {
	return(
		<main>
			<div className="text-center pb-24 pt-24">
				<section className="text-xs font-light">Testimonials</section>
				<section className="text-4xl font-light tracking-wide pb-4">What People Says About Us</section>
				<section className="bg-gradient-to-r from-white to-mid-btn h-0.5 w-48 mx-auto"></section>
			</div>
			<div>
				<section className="grid grid-cols-3 gap-4">
					<section className="p-6 bg-gray-100 shadow-xl">
						<section>
							<img 
								style={cardImgCss}
								className="mx-auto"
								src="https://images.unsplash.com/photo-1623578134934-d56d2989f597?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
							/>
						</section>
						<section className="text-xs pt-3 font-light">How should the absurd man live? Clearly, no ethical rules apply, as they are all based on higher powers or on justification. "... integrity has no need of rules ... 'Everything is permitted,' ... is not an outburst of relief or of joy, but rather a bitter acknowledgment of a fact."</section>
						<section className="text-sm pt-3">Not Albert Camus</section>
						<section className="text-xs font-light">Good luck contacting that nihilistic</section>
					</section>
					<section className="p-6 bg-gray-100 shadow-xl">
						<section>
							<img 
								style={cardImgCss}
								className="mx-auto"
								src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
							/>
						</section>
						<section className="text-xs pt-3 font-light">How should the absurd man live? Clearly, no ethical rules apply, as they are all based on higher powers or on justification. "... integrity has no need of rules ... 'Everything is permitted,' ... is not an outburst of relief or of joy, but rather a bitter acknowledgment of a fact."</section>
						<section className="text-sm pt-3">Not Albert Camus</section>
						<section className="text-xs font-light">Good luck contacting that nihilistic</section>
					</section>
					<section className="p-6 bg-gray-100 shadow-xl">
						<section>
							<img 
								style={cardImgCss}
								className="mx-auto"
								src="https://images.unsplash.com/photo-1521567097888-2c5fc40a8660?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
							/>
						</section>
						<section className="text-xs pt-3 font-light">How should the absurd man live? Clearly, no ethical rules apply, as they are all based on higher powers or on justification. "... integrity has no need of rules ... 'Everything is permitted,' ... is not an outburst of relief or of joy, but rather a bitter acknowledgment of a fact."</section>
						<section className="text-sm pt-3">Not Albert Camus</section>
						<section className="text-xs font-light">Good luck contacting that nihilistic</section>
					</section>
					
				</section>
			</div>
		</main>
		)
}

export default TestmCardComponent;