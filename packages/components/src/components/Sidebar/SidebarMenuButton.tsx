import React from "react";
import { jsx, MenuButton } from "theme-ui";
import { useSidebar } from "./useSidebar";

export const SidebarMenuButton = () => {
	const { toggleSidebar } = useSidebar();

	return (
		<MenuButton
			onClick={toggleSidebar}
			sx={{ cursor: "pointer", background: "none", border: "none" }}
		/>
	);
};
