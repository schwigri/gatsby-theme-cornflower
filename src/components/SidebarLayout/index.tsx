import PropTypes from "prop-types";
import React from "react";
import styles from "./sidebar-layout.css";

interface SidebarLayoutProps {
	children?: React.ReactNode;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = (props) => {
	const { children } = props;

	return <div className={styles.sidebarLayout}>{children}</div>;
};

SidebarLayout.propTypes = {
	children: PropTypes.node,
};

const { sidebarLayoutContent } = styles;

export { SidebarLayout, sidebarLayoutContent };
