import React from "react";
import { useSidebar } from "./useSidebar";

type SidebarProps = {
	children: React.ReactNode;
};

export const Sidebar = ({ children }: SidebarProps) => {
	const { showSidebar, toggleSidebar, mobileMenu } = useSidebar();

	return (
		<div>
			{/* backdrop to close sidebar on mobiles */}
			{mobileMenu && (
				<div
					sx={{
						visibility: showSidebar ? "visible" : "hidden",
						position: "fixed",
						width: "100vw",
						height: "100vh",
						backgroundColor: "muted",
						cursor: "pointer",
						opacity: showSidebar ? 1 : 0,
						transition: `opacity 0.2s ease-out${
							showSidebar === false ? ", visibility 0s 0.2s" : "" // delay hidden transition by 0.2 seconds
						}`,
					}}
					onClick={toggleSidebar}
				/>
			)}
			{/* pushes the content to the right so the sidebar can slide in and be next to the content */}
			{!mobileMenu && showSidebar && <div sx={{ width: "200px" }} />}
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
