import { useContext } from "react";

import { SidebarContext } from "./SidebarContainer";

export function useSidebar() {
	const { showSidebar, setShowSidebar, toggleSidebar } = useContext(
		SidebarContext
	);
	return { showSidebar, setShowSidebar, toggleSidebar };
}
