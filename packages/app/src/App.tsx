import React, { Suspense, lazy } from "react";
import { ThemeProvider } from "theme-ui";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import theme from "./theme";
import { SidebarContainer, Sidebar } from "components";
import { SidebarItem } from "components";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<SidebarContainer>
					<Sidebar>
						<SidebarItem to="/">Dashboard</SidebarItem>
						<SidebarItem to="/settings">Settings</SidebarItem>
					</Sidebar>

					<Suspense fallback={<div></div>}>
						<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route path="/settings" element={<Settings />} />
						</Routes>
					</Suspense>
				</SidebarContainer>
			</Router>
		</ThemeProvider>
	);
}

export default App;
