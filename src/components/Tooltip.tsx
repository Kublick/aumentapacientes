import React, { useState } from 'react';

export const Tooltip = ({ children, text, ...rest }) => {
	const [show, setShow] = useState(false);

	return (
		<div className="tooltip-container">
			<div className={show ? 'tooltip-box visible' : 'tooltip-box'}>{text}</div>
			<div
				onMouseEnter={() => setShow(true)}
				onMouseLeave={() => setShow(false)}
				{...rest}
			>
				{children}
			</div>
		</div>
	);
};
