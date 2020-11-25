import React from "react";
import content from "../content/content";
const Nav = () => {
	return (
		<div className="text-black">
			<div className="flex justify-between w-11/12 mx-auto py-3 items-center">
				<a href="/">
					<h1 className="text-3xl font-bold text-black">
						{content.nav.logo}
						<span className="rounded-full bg-blue h-2 w-2 inline-block"></span>
					</h1>
				</a>
				<div>
					{content.nav.links.map((link, index) => {
						return (
							<a href={link.to} key={index} className="text-base font-medium hover:text-blue ml-4">
								{link.text}
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Nav;
