import React from "react";
import styles from "./footer.css";
import { useIntl } from "react-intl";

const Footer: React.FC = () => {
	const intl = useIntl();

	const footerContent = intl.formatMessage(
		{ id: "copyright" },
		{
			licenseLink: `<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.${
				intl.locale.split("-")[0]
			}" rel="noopener noreferrer">CC BY-NC-SA 4.0</a>`,
		}
	);

	return (
		<footer
			className={styles.footer}
			dangerouslySetInnerHTML={{ __html: footerContent }}
		/>
	);
};

Footer.propTypes = {};

export { Footer };
