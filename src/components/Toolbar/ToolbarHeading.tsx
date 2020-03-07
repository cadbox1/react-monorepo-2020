/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

export const ToolbarHeading = ({ children }: { children: React.ReactNode }) => (
	<Styled.h1 sx={{ fontSize: 2, my: 0, mx: 1 }}>{children}</Styled.h1>
);
