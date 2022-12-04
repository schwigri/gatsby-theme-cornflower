import { Link } from "gatsby";
import { Logo } from "../Logo";
import React from "react";
import styles from "./branding.css";
import { useIntl } from "react-intl";

const Branding: React.FC = () => {
	const intl = useIntl();

	return (
		<Link className={styles.branding} to={"/"}>
			<span className={styles.logo}>
				<Logo className={styles.logoIcon} />

				<span className={styles.logoText}>
					{intl.formatMessage({ id: "siteTitle" })}
				</span>
			</span>
		</Link>
	);
};

Branding.propTypes = {};

export { Branding };
