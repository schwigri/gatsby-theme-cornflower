import React, { useContext } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { I18nContext } from "@tate-media/gatsby-plugin-i18n";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { Main } from "../Main";
import PropTypes from "prop-types";
import { TopBar } from "../TopBar";

interface LayoutProps {
	children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
	const { children } = props;
	const i18nContext = useContext(I18nContext);

	return (
		<>
			{(i18nContext.translations?.length || 0) > 0 && (
				<TopBar>
					<LanguageSwitcher />
				</TopBar>
			)}

			<Header />

			<Main>{children}</Main>

			<Footer />
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node,
};

export { Layout };
