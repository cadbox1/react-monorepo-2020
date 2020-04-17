/** @jsx jsx */
import { useEffect } from "react";
import { jsx, Container } from "theme-ui";

import { Button, Toolbar, ToolbarHeading } from "components";
import { usePromise } from "use-promise";

const kanyeApi = "https://api.kanye.rest";

type KanyeApiResponse = {
	quote: string;
};

export const Dashboard = () => {
	const { value, pending, call } = usePromise<KanyeApiResponse>({
		promiseFunction: async () => {
			const response = await fetch(kanyeApi);
			const json = await response.json();
			return json;
		},
	});

	useEffect(() => {
		call();
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			<Toolbar>
				<ToolbarHeading>Dashboard</ToolbarHeading>
			</Toolbar>
			<Container>
				<Button onClick={() => call()}>
					{pending ? "Refreshing..." : "Refresh"}
				</Button>
				<p>Random Kanye West quote:</p>
				<p>{value?.quote}</p>
			</Container>
		</div>
	);
};

export default Dashboard;
