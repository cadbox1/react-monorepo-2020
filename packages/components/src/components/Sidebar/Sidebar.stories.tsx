import React from "react";
import { Container } from "theme-ui";
import { BrowserRouter as Router } from "react-router-dom";

import { Sidebar } from "./index";
import { SidebarContainer } from "./SidebarContainer";
import { SidebarItem } from "./SidebarItem";
import { Toolbar } from "../Toolbar";
import { ToolbarHeading } from "../Toolbar/ToolbarHeading";

export default {
	title: "Sidebar",
	component: Sidebar,
};

export const Standard = () => {
	return (
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
	);
};
