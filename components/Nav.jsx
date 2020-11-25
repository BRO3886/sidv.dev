import React from "react";
import Link from "next/link";
import content from "../content/content";
const Nav = (props) => {
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
							<Link href={link.to} key={index}>
								<a
									className={`
									${props.name === link.to.replace("/", "") ? "text-blue" : ""}
									text-sm font-medium hover:text-blue ml-4`}
								>
									{link.text}
								</a>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Nav;
