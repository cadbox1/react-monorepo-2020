import React, { useState } from "react";
import { useEffect } from "react";
import { Container } from "theme-ui";
import { Button, Toolbar, ToolbarHeading } from "components";

const kanyeApi = "https://api.kanye.rest";

type KanyeApiResponse = {
	quote: string;
};

export const Dashboard = () => {
	const [response, setResponse] = useState<KanyeApiResponse | null>(null);

	const callKanye = () =>
		fetch(kanyeApi)
			.then((res) => res.json())
			.then((res) => setResponse(res));

	useEffect(() => {
		callKanye();
	}, []);

	return (
		<div>
			<Toolbar>
				<ToolbarHeading>Dashboard</ToolbarHeading>
			</Toolbar>
			<Container>
				<Button onClick={() => callKanye()}>
					{!response ? "Refreshing..." : "Refresh"}
				</Button>
				<p>Random Kanye West quote:</p>
				<p>{response?.quote}</p>
			</Container>
		</div>
	);
};

export default Dashboard;
