// Top middle section of front page

const TopMidComponent = () => {
	return(
		<main className="pt-24">
			<div className="grid grid-rows-2">
				<div className="grid grid-cols-3">
					<div className="p-10">
					<p className="text-lg font-light">Who We Are?</p>
					<p className="text-sm font-light pt-2">Bhromor is a upcoming leading full ecommerce business solution for small sellers offering them a free shop with products.</p>
					</div>
					<div className="bg-gradient-to-br from-mid-box-grad-top to-mid-box-grad-bot rounded-tl-lg rounded-tr-lg rounded-bl-lg p-6 text-white">
						<section>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="fill-current text-black bi bi-binoculars-fill" viewBox="0 0 16 16">
							<path d="M4.5 1A1.5 1.5 0 0 0 3 2.5V3h4v-.5A1.5 1.5 0 0 0 5.5 1h-1zM7 4v1h2V4h4v.882a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V13H9v-1.5a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5V13H1V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V4h4zM1 14v.5A1.5 1.5 0 0 0 2.5 16h3A1.5 1.5 0 0 0 7 14.5V14H1zm8 0v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V14H9zm4-11H9v-.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5V3z"/>
							</svg>
						</section>
						<section className="pt-2 text-lg tracking-wide font-serif">B2B eCommerce</section>
						<section className="pt-1 text-xs">A small city beside the river Thames now houses world's most notorious billionaires and mobs.</section>
					</div>
					<div className="p-10">
						<section>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="fill-current text-black bi bi-cart-plus-fill" viewBox="0 0 16 16">
							<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
							</svg>
						</section>
						<section className="text-lg tracking-wide font-serif pt-2 font-bold antialiased">Unlimited Products</section>
						<section className="text-sm pt-1 font-light">A small city beside the river Seine now houses world's most notorious French.</section>
					</div>
				</div>
				<div className="grid grid-cols-3">
					<div className="pl-10 p-2">
						<section className="font-light">Save your time and energy to focus on what matters</section>
						<section className="grid grid-cols-2 text-xs font-light text-left pt-4">
							<section>
								<li>Run by Professionals</li>
								<li>World-class Agency</li>
								<li>Client First</li>
							</section>
							<section>
								<li>Super Creative Team</li>
								<li>Award Winning Agency</li>
								<li>Money Back Guarantee</li>
							</section>
						</section>
						<section className="pt-6 text-white">
							<button className="bg-mid-btn rounded-lg p-4 font-sans-serif">Start your dream</button>
						</section>
					</div>
					<div>
						<div className="p-6">
							<section>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="fill-current text-black bi bi-camera-reels-fill" viewBox="0 0 16 16">
								<path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
								<path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
								<path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z"/>
								</svg>
							</section>
							<section className="font-bold font-serif antialiased">Visual Profits</section>
							<section className="font-light text-sm">She sells sea-shells on the sea shore but the of the shell will fall, due to the law of supply and demand</section>
						</div>
					</div>
					<div className="bg-gradient-to-br from-mid-box-grad-bot-tr to-mid-box-grad-bot-br rounded-tr-lg rounded-bl-lg rounded-br-lg">
						<div className="p-10 text-white">
							<section>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="fill-current text-black bi bi-telegram" viewBox="0 0 16 16">
								<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
								</svg>
							</section>
							<section className="pt-2 text-lg tracking-wide font-serif">Social Campaign</section>
							<section className="pt-1 text-xs">The river flowed North following the peaches. Oh the peaches, Oh the peaches</section>
						</div>
					</div>
				</div>
			</div>
		</main>
		)
}

export default TopMidComponent;