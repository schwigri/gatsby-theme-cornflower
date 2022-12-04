import { render, screen } from "@testing-library/react";
import React from "react";
import { TopBar } from "./";

describe("<TopBar>", () => {
	it("should render its children", () => {
		render(
			<TopBar>
				<span>Test</span>
			</TopBar>
		);

		expect(screen.getByText("Test")).toBeInTheDocument();
	});
});
