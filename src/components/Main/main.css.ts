import { style } from "@vanilla-extract/css";
import { theme } from "../../styles";

export const main = style({
	marginBottom: theme.responsive.spacing,
	marginTop: theme.responsive.spacing,
	position: "relative",
	zIndex: 1,
});

export default {
	main,
};
