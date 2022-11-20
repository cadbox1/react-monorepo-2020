/** @jsx jsx */
import { jsx } from "theme-ui";
import { NavLink } from "react-router-dom";
import { useSidebar } from "./useSidebar";

export const SidebarItem = ({
	children,
	...props
}: {
	to: string;
	children: React.ReactNode;
}) => {
	const { setShowSidebar, mobileMenu } = useSidebar();

	const handleClick = () => {
		if (mobileMenu) {
			setShowSidebar(false);
		}
	};

	return (
		<NavLink
			onClick={handleClick}
			sx={{
				variant: "styles.a",
				display: "block",
				my: 2,
				mx: 2,
				color: "text",
				cursor: "pointer",
				":hover": {
					textDecoration: "none",
				},
				"&.active": {
					color: "primary",
					cursor: "default",
				},
			}}
			{...props}
		>
			{children}
		</NavLink>
	);
};
