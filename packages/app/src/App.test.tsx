import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../__mocks__/matchMedia";

it("renders without crashing", () => {
	const div = createRoot(document.createElement("div"));
	div.render(<App />);
	div.unmount();
});
