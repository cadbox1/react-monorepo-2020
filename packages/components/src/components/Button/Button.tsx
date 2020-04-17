/** @jsx jsx */
import { jsx, Button as ThemeUIButton } from "theme-ui";

type ButtonProps = {
	onClick: () => void;
	sx?: object;
	children: React.ReactNode;
};
export const Button = ({ onClick, sx, children, ...props }: ButtonProps) => (
	<ThemeUIButton onClick={onClick} sx={{ ...sx }} {...props}>
		{children}
	</ThemeUIButton>
);
