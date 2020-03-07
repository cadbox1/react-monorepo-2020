/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
// @ts-ignore
import { useBreakpointIndex } from "@theme-ui/match-media";

import { useSidebar } from "./useSidebar";

type SidebarProps = {
	children: React.ReactNode;
};

export const Sidebar = ({ children }: SidebarProps) => {
	const { showSidebar, setShowSidebar, toggleSidebar } = useSidebar();

	const breakpointIndex = useBreakpointIndex();
	const isMobile = breakpointIndex === 0;

	// reset the sidebar to the default if the screen breakpoint changes
	const [previousIsMobile, setPreviousIsMobile] = useState();
	if (isMobile !== previousIsMobile) {
		setShowSidebar(!isMobile);
		setPreviousIsMobile(isMobile);
	}

	return (
		<div>
			{/* backdrop to close sidebar on mobiles */}
			{isMobile && (
				<div
					sx={{
						position: "fixed",
						width: "100vw",
						height: "100vh",
						backgroundColor: "muted",
						cursor: "pointer",
						opacity: showSidebar ? 1 : 0,
						transition: "opacity 0.2s ease-out",
					}}
					onClick={toggleSidebar}
				/>
			)}
			{/* pushes the content to the right so the sidebar can slide in and be next to the content */}
			{!isMobile && showSidebar && <div sx={{ width: "200px" }} />}
			<nav
				sx={{
					position: "fixed",
					width: "200px",
					transform: `translate(${showSidebar ? "0%" : "-100%"})`,
					transition: "transform 0.2s ease-out",
					backgroundColor: "background",
					height: "100%",
					py: 3,
					borderRightWidth: "1px",
					borderRightColor: "muted",
					borderRightStyle: "solid",
				}}
			>
				{children}
			</nav>
		</div>
	);
};
