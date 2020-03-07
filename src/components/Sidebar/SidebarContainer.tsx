/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";

export const SidebarContext = React.createContext({
	showSidebar: false,
	setShowSidebar: (_newShowSidebar: any) => {},
	toggleSidebar: () => {},
});

type SidebarContainerProps = {
	sx?: object;
	children: React.ReactNode;
};
export const SidebarContainer = ({
	sx,
	children,
	...props
}: SidebarContainerProps) => {
	const [showSidebar, setShowSidebar] = useState(false);
	const toggleSidebar = () => setShowSidebar(showSidebar => !showSidebar);

	return (
		<SidebarContext.Provider
			value={{
				showSidebar,
				setShowSidebar,
				toggleSidebar,
			}}
		>
			<div sx={{ display: "flex", ...sx }} {...props}>
				{children}
			</div>
		</SidebarContext.Provider>
	);
};
