/** @jsx jsx */
import { jsx } from "theme-ui";
import { Themed as Styled } from "@theme-ui/mdx";

export const ToolbarHeading = ({ children }: { children: React.ReactNode }) => (
	<Styled.h1 sx={{ fontSize: 2, my: 0, mx: 1 }}>{children}</Styled.h1>
);
