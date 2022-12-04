export enum Breakpoint {
	Small = 482,
	Medium = 722,
	Large = 1046,
}

export const breakpoint = (bp: Breakpoint, until?: boolean): string =>
	until ? `(max-width: ${bp - 1}px)` : `(min-width: ${bp}px)`;
