import React from "react";

type ButtonProps = {
	onClick: () => void;
	sx?: object;
	children: React.ReactNode;
};
export const Button = ({ onClick, sx, children, ...props }: ButtonProps) => (
	<button onClick={onClick} {...props}>
		{children}
	</button>
);
