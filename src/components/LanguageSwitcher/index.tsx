import React, { useContext } from "react";
import { I18nContext } from "@tate-media/gatsby-plugin-i18n";
import { Link } from "gatsby";
import styles from "./language-switcher.css";
import { useIntl } from "react-intl";

const LanguageSwitcher: React.FC = () => {
	const intl = useIntl();
	const i18nContext = useContext(I18nContext);

	const translations = [...(i18nContext.translations || [])];
	translations.push({ locale: intl.locale });

	return (
		<nav className={styles.languageSwitcher}>
			<ul className={styles.languageSwitcherList}>
				{translations
					.sort((a, b) => (a.locale || "").localeCompare(b.locale || ""))
					.map((t) => {
						const text = intl.formatMessage({ id: `localeName.${t.locale}` });

						return (
							<li className={styles.languageSwitcherListItem} key={t.locale}>
								{t.path ? (
									<Link className={styles.languageSwitcherLink} to={t.path}>
										{text}
									</Link>
								) : (
									<span className={styles.languageSwitcherLink}>{text}</span>
								)}
							</li>
						);
					})}
			</ul>
		</nav>
	);
};

LanguageSwitcher.propTypes = {};

export { LanguageSwitcher };
