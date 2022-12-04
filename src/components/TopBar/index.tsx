import PropTypes from "prop-types";
import React from "react";
import styles from "./top-bar.css";

interface TopBarProps {
	children?: React.ReactNode;
}

const TopBar: React.FC<TopBarProps> = (props) => {
	const { children } = props;

	return (
		<div className={styles.topBar}>
			<div className={styles.topBarContent}>{children}</div>
		</div>
	);
};

TopBar.propTypes = {
	children: PropTypes.node,
};

export { TopBar };
