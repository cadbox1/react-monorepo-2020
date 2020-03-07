/** @jsx jsx */
import { jsx } from "theme-ui";
import { SidebarMenuButton } from "components/Sidebar/SidebarMenuButton";

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
