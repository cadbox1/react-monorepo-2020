/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

import { Button } from "components/Button";

export const Settings = () => (
	<div>
		<Styled.h1>Settings</Styled.h1>
		<Button onClick={() => alert("hello")}>Hello</Button>
	</div>
);

export default Settings;
