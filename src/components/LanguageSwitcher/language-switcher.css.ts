import { style } from "@vanilla-extract/css";

export const languageSwitcher = style({
	display: "flex",
	justifyContent: "flex-end",
});

export const languageSwitcherList = style({
	margin: 0,
	padding: 0,
});

export const languageSwitcherListItem = style({
	display: "inline",
	marginInlineStart: "1em",
});

export const languageSwitcherLink = style({});

export default {
	languageSwitcher,
	languageSwitcherLink,
	languageSwitcherList,
	languageSwitcherListItem,
};
