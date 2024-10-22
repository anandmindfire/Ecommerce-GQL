import React from "react";
import Image from "next/image";

export const Banner = () => {
	return (
		<div className="mx-auto flex w-full flex-col items-center justify-between overflow-hidden rounded-lg bg-white shadow-lg md:flex-row">
			{/* Image container with increased height */}
			<div className="relative h-96 w-full md:h-[32rem] md:w-1/2">
				<Image src="/banner.jpg" alt="Shopping Experience" fill className="object-cover" priority />
			</div>

			{/* Text content */}
			<div className="w-full space-y-4 p-8 md:w-1/2">
				<h2 className="text-4xl font-bold md:text-5xl">
					<span className="bg-gradient-to-r from-blue-600 to-gray-500 bg-clip-text text-transparent">
						Discover Your Style
					</span>
				</h2>
				<h3 className="text-2xl font-semibold md:text-3xl">
					<span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
						Up to 70% Off
					</span>
				</h3>
				<p className="text-lg text-gray-600">
					Explore our curated collection of trending fashion and accessories.
				</p>
				<button className="rounded-full bg-gradient-to-r from-blue-600 to-gray-600 px-8 py-3 font-semibold text-white transition-opacity hover:opacity-90">
					Shop Now
				</button>
			</div>
		</div>
	);
};
