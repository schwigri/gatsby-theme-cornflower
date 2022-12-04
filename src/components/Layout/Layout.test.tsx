import { render, screen } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import { Layout } from "./";
import React from "react";

describe("<Layout>", () => {
	it("should render with header and footer", () => {
		render(
			<IntlProvider locale={"et-EE"}>
				<Layout />
			</IntlProvider>
		);
		expect(screen.getByRole("banner")).toBeInTheDocument();
		expect(screen.getByRole("contentinfo")).toBeInTheDocument();
	});

	it("should render its children", () => {
		render(
			<IntlProvider locale={"et-EE"}>
				<Layout>
					<span>Test</span>
				</Layout>
			</IntlProvider>
		);

		expect(screen.getByText("Test")).toBeInTheDocument();
	});
});
