import { render, screen } from "@testing-library/react";
import { Footer } from "./";
import { IntlProvider } from "react-intl";
import React from "react";

describe("<Footer>", () => {
	it("should render a footer", () => {
		render(
			<IntlProvider locale={"et-EE"}>
				<Footer />
			</IntlProvider>
		);

		expect(screen.getByRole("contentinfo")).toBeInTheDocument();
	});

	it("should render copyirght info", () => {
		render(
			<IntlProvider locale={"et-EE"}>
				<Footer />
			</IntlProvider>
		);

		expect(screen.getByText("copyright")).toBeInTheDocument();
	});
});
