/** @jsx jsx */
import { jsx, Container } from "theme-ui";

import { Button } from "components/Button";
import { Toolbar } from "components/Toolbar";
import { ToolbarHeading } from "components/Toolbar/ToolbarHeading";

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
