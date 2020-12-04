import React from "react";
import Link from "next/link";
import content from "../lib/content";
const Nav = (props) => {
	return (
		<nav className="text-darkgrey top-0 fixed w-screen bg-white bg-opacity-70 z-10 border-b dark:border-darkergrey border-gray-200 dark:bg-black dark:text-white">
			<div className="flex justify-between w-11/12 mx-auto mb-1 items-center">
				<Link href="/">
					<a href="/">
						<h1 className="text-3xl font-bold text-black dark:text-white">
							{content.nav.logo}
							<span className="rounded-full bg-blue h-2 w-2 inline-block"></span>
						</h1>
					</a>
				</Link>
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
		</nav>
	);
};

export default Nav;
// border-bottom: 1px solid #e9e9e9;
