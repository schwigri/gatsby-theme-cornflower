import { render, screen } from "@testing-library/react";
import { I18nContext } from "@tate-media/gatsby-plugin-i18n";
import { IntlProvider } from "react-intl";
import { LanguageSwitcher } from "./";
import React from "react";

describe("<LanguageSwitcher>", () => {
	it("should render a nav with a list of all languages", () => {
		render(
			<I18nContext.Provider
				value={{
					translations: [{ locale: "en-US" }],
				}}
			>
				<IntlProvider locale={"et-EE"}>
					<LanguageSwitcher />
				</IntlProvider>
			</I18nContext.Provider>
		);

		expect(screen.getByRole("navigation")).toBeInTheDocument();
		expect(screen.getByRole("list")).toBeInTheDocument();
		expect(screen.getByText("localeName.et-EE")).toBeInTheDocument();
		expect(screen.getByText("localeName.en-US")).toBeInTheDocument();
	});
});
