import { Breakpoint, breakpoint, theme } from "../../styles";
import { globalStyle, style } from "@vanilla-extract/css";
import { sidebar } from "../Sidebar/sidebar.css";

export const sidebarLayout = style({
	display: "grid",
	gap: theme.responsive.spacing,
	gridTemplateColumns: "1fr",
	marginLeft: "auto",
	marginRight: "auto",
	width: theme.responsive.fullWidth,
	"@media": {
		[breakpoint(Breakpoint.Large)]: {
			gridTemplateColumns: `1fr ${theme.responsive.contentWidth}`,
		},
	},
});

export const sidebarLayoutContent = style({});

globalStyle(`${sidebarLayout} > ${sidebar}`, {
	gridColumn: 1,
	gridRow: 1,
	"@media": {
		[breakpoint(Breakpoint.Large)]: {
			gridColumn: 1,
		},
	},
});

globalStyle(`${sidebarLayout} > ${sidebarLayoutContent}`, {
	gridColumn: 1,
	gridRow: 2,
	"@media": {
		[breakpoint(Breakpoint.Large)]: {
			gridColumn: 2,
			gridRow: 1,
		},
	},
});

export default {
	sidebarLayout,
	sidebarLayoutContent,
};
