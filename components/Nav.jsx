import React from "react";
import Link from "next/link";
import content from "../lib/content";
const Nav = (props) => {
	return (
		<div>
			<header className="lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2 text-darkgrey top-0 fixed w-screen bg-white z-10 border-b dark:border-darkergrey border-gray-200 dark:bg-black dark:text-white">
				<div className="flex justify-between w-11/12 items-center">
					<Link href="/">
						<a href="/">
							<h1 className="text-3xl font-bold text-black dark:text-white">
								{content.nav.logo}
								<span className="rounded-full bg-blue h-2 w-2 inline-block"></span>
							</h1>
						</a>
					</Link>
					<label for="menu-toggle" className="pointer-cursor lg:hidden block">
						<svg
							className="fill-current text-blue dark:text-white"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 20 20"
						>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
						</svg>
					</label>
					<input className="hidden" type="checkbox" id="menu-toggle" />
					<div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
						<nav>
							<ul className="lg:flex-1 items-center justify-between pt-4 lg:pt-0">
								<li>
									{content.nav.links.map((link, index) => {
										return (
											<Link href={link.to} key={index}>
												<a
													className={`
									${props.name === link.to.replace("/", "") ? "text-blue" : ""}
									text-sm font-medium hover:text-blue lg:p-4 py-3 px-0 block md:inline`}
												>
													{link.text}
												</a>
											</Link>
										);
									})}
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Nav;
// border-bottom: 1px solid #e9e9e9;
