import { style } from "@vanilla-extract/css";
import { theme } from "../../styles";

export const footer = style({
	borderTop: `1px solid ${theme.colors.surfaceAccent}`,
	fontSize: theme.fontSizes.small,
	lineHeight: 1.4,
	marginLeft: "auto",
	marginRight: "auto",
	paddingBottom: theme.responsive.spacing,
	paddingTop: theme.responsive.spacing,
	textAlign: "center",
	width: theme.responsive.fullWidth,
});

export default {
	footer,
};
