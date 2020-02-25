/** @jsx jsx */
import { useEffect } from "react";
import { jsx, Styled } from "theme-ui";

import { Button } from "components/Button";
import { usePromise } from "common/hooks/usePromise";

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
			<Styled.h1>Dashboard</Styled.h1>
			<Button onClick={() => call()}>
				{pending ? "Refreshing..." : "Refresh"}
			</Button>
			<p>Random Kanye West quote:</p>
			<p>{value?.quote}</p>
			<div></div>
		</div>
	);
};

export default Dashboard;
