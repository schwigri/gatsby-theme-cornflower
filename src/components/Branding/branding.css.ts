import { style } from "@vanilla-extract/css";
import { theme } from "../../styles";

export const branding = style({
	color: "inherit",
	textDecoration: "none",
});

export const logo = style({
	alignItems: "center",
	display: "flex",
	fontSize: "1em",
	fontWeight: 400,
	gap: theme.global.spacingSmall,
	margin: 0,
});

export const logoIcon = style({
	fill: theme.colors.copy,
	height: theme.pixels[18],
	width: "auto",
});

export const logoText = style({
	fontSize: theme.fontSizes.medium,
});

export default {
	branding,
	logo,
	logoIcon,
	logoText,
};
