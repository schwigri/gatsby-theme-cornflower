import { Breakpoint, breakpoint } from "./breakpoints";
import {
	assignVars,
	createGlobalThemeContract,
	globalStyle,
} from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

const { Small, Medium, Large } = Breakpoint;

export const theme = createGlobalThemeContract({
	colors: {
		background: "colors--background",
		copy: "colors--copy",
		link: "colors--link",
		surface: "colors--surface",
		surfaceAccent: "colors--surface-accent",
	},
	fontSizes: {
		xSmall: "font-sizes--x-small",
		small: "font-sizes--small",
		medium: "font-sizes--medium",
		large: "font-sizes--large",
		base: "font-sizes--base",
	},
	global: {
		contentWidth: "global--content-width",
		fullWidth: "global--full-width",
		spacing: "global--spacing",
		spacingSmall: "global--spacing-small",
	},
	pixels: {
		10: "pixels--10",
		12: "pixels--12",
		14: "pixels--14",
		16: "pixels--16",
		18: "pixels--18",
		20: "pixels--20",
		22: "pixels--22",
		24: "pixels--24",
		26: "pixels--26",
		28: "pixels--28",
		32: "pixels--32",
		36: "pixels--36",
	},
	responsive: {
		contentWidth: "responsive--content-width",
		fullWidth: "responsive--full-width",
		spacing: "responsive--spacing",
	},
});

globalStyle(":root", {
	vars: assignVars(theme, {
		colors: {
			background: "#fbfaff",
			copy: "#02000a",
			link: "#004cff",
			surface: "#f2f0ff",
			surfaceAccent: "#eae6ff",
		},
		fontSizes: {
			xSmall: theme.pixels[10],
			small: theme.pixels[14],
			medium: theme.pixels[18],
			large: theme.pixels[22],
			base: theme.pixels[16],
		},
		global: {
			contentWidth: "640px",
			fullWidth: "1024px",
			spacing: theme.pixels[16],
			spacingSmall: calc.multiply(theme.global.spacing, 0.5),
		},
		pixels: {
			10: "0.625rem",
			12: "0.75rem",
			14: "0.875rem",
			16: "1rem",
			18: "1.125rem",
			20: "1.25rem",
			22: "1.375rem",
			24: "1.5rem",
			26: "1.625rem",
			28: "1.75rem",
			32: "2rem",
			36: "2.25rem",
		},
		responsive: {
			contentWidth: calc.subtract(
				"100vw",
				calc.multiply(theme.global.spacing, 2)
			),
			fullWidth: calc.subtract("100vw", calc.multiply(theme.global.spacing, 2)),
			spacing: theme.global.spacing,
		},
	}),
	"@media": {
		"only screen and (prefers-color-scheme: dark)": {
			vars: assignVars(theme.colors, {
				background: "#02000a",
				copy: "#dae3e5",
				link: "#1489ff",
				surface: "#110066",
				surfaceAccent: "#150080",
			}),
		},
		[breakpoint(Small)]: {
			vars: assignVars(theme.responsive, {
				contentWidth: `min(${calc.subtract(
					"100vw",
					calc.multiply(theme.global.spacing, 4)
				)}, ${theme.global.contentWidth})`,
				fullWidth: `min(${calc.subtract(
					"100vw",
					calc.multiply(theme.global.spacing, 4)
				)}, ${theme.global.fullWidth})`,
				spacing: theme.global.spacing,
			}),
		},
		[breakpoint(Medium)]: {
			vars: assignVars(theme.responsive, {
				contentWidth: `min(${calc.subtract(
					"100vw",
					calc.multiply(theme.global.spacing, 8)
				)}, ${theme.global.contentWidth})`,
				fullWidth: `min(${calc.subtract(
					"100vw",
					calc.multiply(theme.global.spacing, 8)
				)}, ${theme.global.fullWidth})`,
				spacing: calc.multiply(theme.global.spacing, 2),
			}),
		},
		[breakpoint(Large)]: {
			vars: assignVars(theme.fontSizes, {
				xSmall: theme.pixels[12],
				small: theme.pixels[16],
				medium: theme.pixels[20],
				large: theme.pixels[24],
				base: theme.pixels[18],
			}),
		},
	},
});

globalStyle("body", {
	backgroundColor: theme.colors.background,
	color: theme.colors.copy,
	fontFamily: "Alexandria, sans-serif",
	fontSize: theme.fontSizes.base,
	lineHeight: 1,
	margin: 0,
});

globalStyle("h1, h2, h3, h4, h5, h6", {
	fontWeight: 700,
	lineHeight: 1,
	margin: "1em 0 0.5em",
});

globalStyle("h2", {
	fontSize: theme.fontSizes.medium,
});

globalStyle("h3", {
	fontSize: theme.fontSizes.base,
});

globalStyle("h4", {
	fontSize: theme.fontSizes.medium,
});

globalStyle("p", {
	lineHeight: 1.4,
	margin: "0 0 1em",
});

globalStyle("a", {
	color: theme.colors.link,
});
