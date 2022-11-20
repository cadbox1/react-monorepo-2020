import React from "react";
import { jsx, Container, Styled, ThemeProvider } from "theme-ui";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "theme";

import { Sidebar } from "./index";
import { SidebarContainer } from "./SidebarContainer";
import { SidebarItem } from "./SidebarItem";
import { Toolbar } from "components/Toolbar";
import { ToolbarHeading } from "components/Toolbar/ToolbarHeading";

export default {
	title: "Sidebar",
	component: Sidebar,
};

export const Standard = () => {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<SidebarContainer>
					<Sidebar>
						<SidebarItem to="home">Home</SidebarItem>
						<SidebarItem to="dashboard">Dashboard</SidebarItem>
						<SidebarItem to="settings">Settings</SidebarItem>
						<SidebarItem to="reports">Reports</SidebarItem>
					</Sidebar>
					<div>
						<Toolbar>
							<ToolbarHeading>Home</ToolbarHeading>
						</Toolbar>
						<Container>
							<p>This is content on the home page.</p>
						</Container>
					</div>
				</SidebarContainer>
			</Router>
		</ThemeProvider>
	);
};
