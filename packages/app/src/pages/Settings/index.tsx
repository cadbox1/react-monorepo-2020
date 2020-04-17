/** @jsx jsx */
import { jsx, Container } from "theme-ui";

import { Button, Toolbar, ToolbarHeading } from "components";

export const Settings = () => (
	<div>
		<Toolbar>
			<ToolbarHeading>Settings</ToolbarHeading>
		</Toolbar>
		<Container>
			<Button onClick={() => alert("hello")}>Hello</Button>
		</Container>
	</div>
);

export default Settings;
