import type { PageProps, PluginOptions } from "gatsby";
import { render, screen } from "@testing-library/react";
import React from "react";
import { wrapPageElement } from "../layout";

const props = {} as PageProps<Record<string, unknown>, Record<string, unknown>>;
const options = {} as PluginOptions;

describe("wrapPageElement()", () => {
	it("should wrap given element in a layout", () => {
		render(wrapPageElement({ element: <span>Test</span>, props }, options));
		expect(screen.getByText("Test")).toBeInTheDocument();
	});
});
