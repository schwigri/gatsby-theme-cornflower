import { Breakpoint, breakpoint } from "../breakpoints";
const { Small, Medium, Large } = Breakpoint;

describe("breakpoint()", () => {
	it("should return a media query upon given breakpoint", () => {
		expect(breakpoint(Small)).toBe(`(min-width: ${Small}px)`);
		expect(breakpoint(Medium)).toBe(`(min-width: ${Medium}px)`);
		expect(breakpoint(Large)).toBe(`(min-width: ${Large}px)`);
	});

	it("should return a media query until a give breakpoint", () => {
		expect(breakpoint(Small, true)).toBe(`(max-width: ${Small - 1}px)`);
		expect(breakpoint(Medium, true)).toBe(`(max-width: ${Medium - 1}px)`);
		expect(breakpoint(Large, true)).toBe(`(max-width: ${Large - 1}px)`);
	});
});
