import React from "react";

import { SidebarMenuButton } from "../Sidebar/SidebarMenuButton";

export const Toolbar = ({ children }: { children: React.ReactNode }) => (
	<div
		sx={{
			display: "flex",
			alignItems: "center",
			height: "4rem",
			px: 1,
		}}
	>
		<SidebarMenuButton />
		{children}
	</div>
);
