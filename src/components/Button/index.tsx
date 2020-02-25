/** @jsx jsx */
import { jsx } from "theme-ui";

type ButtonProps = {
	onClick: () => void;
	sx?: object;
	children: React.ReactNode;
};
export const Button = ({ onClick, sx, children, ...props }: ButtonProps) => (
	<button onClick={onClick} sx={{ py: 2, px: 5, ...sx }} {...props}>
		{children}
	</button>
);
