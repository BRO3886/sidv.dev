import React from "react";

const ContactLink = (props) => {
	return (
		<div className="m-1 inline-block">
			<a href={props.data.link}>
				<img src={props.data.img} alt={props.data.name} className="h-10 md:16"></img>
			</a>
			{/* <div>{props.data.name}</div> */}
		</div>
	);
};

export default ContactLink;
