import PropTypes from "prop-types";
import React from "react";
import styles from "./main.css";

interface MainProps {
	children?: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => (
	<main className={styles.main}>{children}</main>
);

Main.propTypes = {
	children: PropTypes.node,
};

export { Main };
