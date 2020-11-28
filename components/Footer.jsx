import React from "react";

const Footer = () => {
	return (
		<div className="text-darkgrey py-3 bg-white">
			<div className="flex justify-between w-11/12 mx-auto mt-1 items-center text-sm">
				© {new Date().getFullYear()} | Siddhartha Varma
				<div>
					<a href="https://github.com/BRO3886/siddharthavarma.tech">
						<img src="/assets/contact/Github.svg" alt="github" className="h-5" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
