import PropTypes from "prop-types";
import React from "react";
import styles from "./sidebar.css";

interface SidebarProps {
	children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
	const { children } = props;

	return (
		<aside className={styles.sidebar}>
			<span>Sidebar</span>

			{children}
		</aside>
	);
};

Sidebar.propTypes = {
	children: PropTypes.node,
};

export { Sidebar };
