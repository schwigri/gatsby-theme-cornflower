import { render, screen } from "@testing-library/react";
import React from "react";
import { Sidebar } from ".";

describe("<Sidebar>", () => {
	it("should render an aside", () => {
		render(<Sidebar />);
		expect(screen.getByRole("complementary")).toBeInTheDocument();
	});

	it("should render its children", () => {
		render(
			<Sidebar>
				<span>Test</span>
			</Sidebar>
		);

		expect(screen.getByText("Test")).toBeInTheDocument();
	});
});
