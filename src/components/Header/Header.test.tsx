import { render, screen } from "@testing-library/react";
import { Header } from "./";
import { IntlProvider } from "react-intl";
import React from "react";

describe("<Footer>", () => {
	it("should render a header", () => {
		render(
			<IntlProvider locale={"et-EE"}>
				<Header />
			</IntlProvider>
		);

		expect(screen.getByRole("banner")).toBeInTheDocument();
	});
});
