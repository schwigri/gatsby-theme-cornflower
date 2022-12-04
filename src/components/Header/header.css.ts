import { style } from "@vanilla-extract/css";
import { theme } from "../../styles";

export const header = style({
	position: "sticky",
	top: 0,
	zIndex: 2,
});

export const headerContentWrapper = style({
	backgroundColor: theme.colors.surface,
});

export const headerContent = style({
	marginLeft: "auto",
	marginRight: "auto",
	paddingBottom: theme.responsive.spacing,
	paddingTop: theme.responsive.spacing,
	width: theme.responsive.fullWidth,
});

export const wavesWrapper = style({
	height: theme.global.spacingSmall,
	overflow: "hidden",
	position: "relative",
	width: "100%",
	zIndex: 2,
});

export const waves = style({
	left: "50%",
	fill: theme.colors.surface,
	position: "absolute",
	top: 0,
	transform: "translateX(-50%) rotate(180deg)",
});

export default {
	header,
	headerContent,
	headerContentWrapper,
	waves,
	wavesWrapper,
};
