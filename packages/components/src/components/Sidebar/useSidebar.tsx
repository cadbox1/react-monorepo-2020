import { useContext } from "react";

import { SidebarContext } from "./SidebarContainer";

export function useSidebar() {
	const { showSidebar, setShowSidebar, toggleSidebar, mobileMenu } = useContext(
		SidebarContext
	);
	return { showSidebar, setShowSidebar, toggleSidebar, mobileMenu };
}
