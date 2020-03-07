/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Link } from "react-router-dom";

export const SidebarItem = ({
	children,
	...props
}: {
	to: string;
	children: React.ReactNode;
}) => (
	<Styled.a
		as={Link}
		sx={{
			display: "block",
			my: 2,
			mx: 2,
			color: "text",
			cursor: "pointer",
		}}
		{...props}
	>
		{children}
	</Styled.a>
);
