import { render, screen } from "@testing-library/react";
import React from "react";
import { SidebarLayout } from "./";

describe("<SidebarLayout>", () => {
	it("should render its children", () => {
		render(
			<SidebarLayout>
				<span>Test</span>
			</SidebarLayout>
		);

		expect(screen.getByText("Test")).toBeInTheDocument();
	});
});
