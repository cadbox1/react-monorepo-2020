/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Link } from "react-router-dom";
import { useSidebar } from "./useSidebar";

export const SidebarItem = ({
	children,
	...props
}: {
	to: string;
	children: React.ReactNode;
}) => {
	const { setShowSidebar } = useSidebar();

	const handleClick = () => {
		setShowSidebar(false);
	};

	return (
		<Styled.a
			as={Link}
			onClick={handleClick}
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
};
