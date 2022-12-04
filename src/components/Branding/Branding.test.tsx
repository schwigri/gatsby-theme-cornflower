import { render, screen } from "@testing-library/react";
import { Branding } from "./";
import { IntlProvider } from "react-intl";
import React from "react";

describe("<Branding>", () => {
	it("should render a logo", () => {
		expect(document.getElementsByTagName("svg").length).toBe(0);

		render(
			<IntlProvider locale={"et-EE"}>
				<Branding />
			</IntlProvider>
		);

		expect(document.getElementsByTagName("svg").length).toBe(1);
	});

	it("should render the site title", () => {
		render(
			<IntlProvider locale={"et-EE"}>
				<Branding />
			</IntlProvider>
		);

		expect(screen.getByText("siteTitle")).toBeInTheDocument();
	});
});
