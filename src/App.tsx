import React, { Suspense, lazy } from "react";
import { ThemeProvider } from "theme-ui";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import theme from "./theme";
import { SidebarContainer, Sidebar } from "components/Sidebar";
import { SidebarItem } from "components/Sidebar/SidebarItem";

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
						<Switch>
							<Route exact path="/" component={Dashboard} />
							<Route path="/settings" component={Settings} />
						</Switch>
					</Suspense>
				</SidebarContainer>
			</Router>
		</ThemeProvider>
	);
}

export default App;
