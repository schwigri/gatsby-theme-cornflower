import { style } from "@vanilla-extract/css";
import { theme } from "../../styles";

export const topBar = style({
	backgroundColor: theme.colors.surfaceAccent,
	paddingBottom: theme.global.spacingSmall,
	paddingTop: theme.global.spacingSmall,
	fontSize: theme.fontSizes.xSmall,
});

export const topBarContent = style({
	marginLeft: "auto",
	marginRight: "auto",
	width: theme.responsive.fullWidth,
});

export default {
	topBar,
	topBarContent,
};
