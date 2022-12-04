import { Branding } from "../Branding";
import React from "react";
import { Waves } from "../Waves";
import styles from "./header.css";

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.headerContentWrapper}>
				<div className={styles.headerContent}>
					<Branding />
				</div>
			</div>

			<div className={styles.wavesWrapper}>
				<Waves className={styles.waves} />
			</div>
		</header>
	);
};

Header.propTypes = {};

export { Header };
