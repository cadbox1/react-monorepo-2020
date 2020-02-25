import React, { Suspense, lazy } from "react";
import { ThemeProvider } from "theme-ui";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import theme from "./theme";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">Dashboard</Link>
							</li>
							<li>
								<Link to="/settings">Settings</Link>
							</li>
						</ul>
					</nav>

					<Suspense fallback={<div>Loading...</div>}>
						<Switch>
							<Route exact path="/" component={Dashboard} />
							<Route path="/settings" component={Settings} />
						</Switch>
					</Suspense>
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
