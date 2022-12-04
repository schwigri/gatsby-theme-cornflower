import PropTypes from "prop-types";
import React from "react";

interface SeoProps {
	title: string;
}

const Seo: React.FC<SeoProps> = (props) => {
	const { title } = props;

	return <title>{title}</title>;
};

Seo.propTypes = {
	title: PropTypes.string.isRequired,
};

export { Seo };
