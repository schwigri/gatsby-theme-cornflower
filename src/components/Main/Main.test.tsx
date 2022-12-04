import { render, screen } from "@testing-library/react";
import { Main } from ".";
import React from "react";

describe("<Main>", () => {
	it("should render a main", () => {
		render(<Main />);
		expect(screen.getByRole("main")).toBeInTheDocument();
	});

	it("should render its children", () => {
		render(
			<Main>
				<span>Test</span>
			</Main>
		);

		expect(screen.getByText("Test")).toBeInTheDocument();
	});
});
