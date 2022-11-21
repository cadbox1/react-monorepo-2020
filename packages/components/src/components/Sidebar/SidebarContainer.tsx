import React, { useState } from "react";
// @ts-ignore
import { useBreakpointIndex } from "@theme-ui/match-media";

export const SidebarContext = React.createContext({
	showSidebar: false,
	setShowSidebar: (_newShowSidebar: any) => {},
	toggleSidebar: () => {},
	mobileMenu: false,
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
	const toggleSidebar = () => setShowSidebar((showSidebar) => !showSidebar);

	const breakpointIndex = useBreakpointIndex();
	const mobileMenu = breakpointIndex === 0;

	// reset the sidebar to the default if the screen breakpoint changes
	const [previousIsMobile, setPreviousIsMobile] = useState<boolean | null>(
		null
	);
	if (mobileMenu !== previousIsMobile) {
		setShowSidebar(!mobileMenu);
		setPreviousIsMobile(mobileMenu);
	}

	return (
		<SidebarContext.Provider
			value={{
				showSidebar,
				setShowSidebar,
				toggleSidebar,
				mobileMenu,
			}}
		>
			<div sx={{ display: "flex", ...sx }} {...props}>
				{children}
			</div>
		</SidebarContext.Provider>
	);
};
