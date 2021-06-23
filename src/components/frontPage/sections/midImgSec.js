// Middle Image Section

const RowImgCss = {
	width: '300px',
	height: '350px',
	borderRadius: '20px',
}

const OddOneOutCss = {
	width: '90%',
	height: '400px',
	borderRadius: '50px',
}

const topRightImgCss = {
	width: '300px',
	height: '400px',
	borderRadius: '20px'
}

const MidImgComponent = () => {
	return (
		<main className="pt-24 text-center">
			<section className="font-light text-xs pb-3">Our resellers</section>
			<section className="text-4xl font-light tracking-wide pb-4">They Started Dreaming</section>
			<section className="bg-gradient-to-r from-white to-mid-btn h-0.5 w-48 mx-auto"></section>

			<section className="flex pt-16">
				<section className="flex-grow">
					<img
						alt="" style={OddOneOutCss}
						className="px-4"
						src="https://images.unsplash.com/photo-1537211366831-cf5f26762d13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
					/>
				</section>
				<section className="flex-none pr-16">
					<img
						alt=""
						style={topRightImgCss}
						src="https://images.unsplash.com/photo-1593122444709-8f312cc22e88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
					/>
				</section>
			</section>
			<section className="grid grid-cols-3 gap-6 p-6">
				<section>
					<img
						alt=""
						style={RowImgCss}
						src="https://images.unsplash.com/photo-1467632499275-7a693a761056?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
					/>
				</section>
				<section>
					<img
						alt="" style={RowImgCss}
						src="https://images.unsplash.com/photo-1622766438168-8d97e6db698d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=342&q=80"
					/>
				</section>
				<section>
					<img style={RowImgCss}
						alt=""
						src="https://images.unsplash.com/photo-1512310604669-443f26c35f52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
					/>
				</section>
			</section>
			<section className="p-4 text-center text-white">
				<button className="bg-mid-btn rounded-xl px-6 py-2">See All</button>
			</section>
		</main>
	)
}

export default MidImgComponent;