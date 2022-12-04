import PropTypes from "prop-types";
import React from "react";

interface LogoProps {
	className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => (
	<svg
		className={className}
		height={"120px"}
		version={"1.1"}
		viewBox={"0 0 208 120"}
		width={"208px"}
		xmlns={"http://www.w3.org/2000/svg"}
	>
		<path
			d={
				"M50.7378641,14.7807933 C58.3106796,14.7807933 65.4627832,17.2442589 72.1941748,22.17119 C78.9255663,27.0981211 87.4239482,35.4070981 97.6893204,47.0981211 C107.449838,30.8977035 116.537217,19.3736952 124.951456,12.526096 C133.365696,5.67849687 143.210356,1.50313152 154.485437,0 C190.161812,2.33820459 208,20.125261 208,53.3611691 C208,70.8977035 203.624595,85.6784969 194.873786,97.7035491 C185.618123,110.730689 171.313916,117.244259 151.961165,117.244259 C142.537217,117.244259 133.533981,114.279749 124.951456,108.350731 C116.368932,102.421712 107.029126,93.2776618 96.9320388,80.9185804 C87.3398058,95.782881 78.6731392,106.012526 70.9320388,111.607516 C63.1909385,117.202505 54.6084142,120 45.184466,120 C32.8996764,120 22.2977346,114.572025 13.3786408,103.716075 C4.45954693,92.8601253 0,80.7098121 0,67.2651357 C0,53.8204593 5.17475728,41.7118998 15.5242718,30.9394572 C25.8737864,20.1670146 37.6116505,14.7807933 50.7378641,14.7807933 Z M159.533981,98.4551148 L161.553398,98.4551148 C169.799353,97.1189979 176.614887,92.4843424 182,84.5511482 C187.385113,76.6179541 190.07767,67.5574113 190.07767,57.3695198 C190.07767,47.1816284 186.964401,38.6221294 180.737864,31.691023 C174.511327,24.7599165 165.760518,20.8768267 154.485437,20.0417537 C147.754045,21.0438413 141.864078,23.131524 136.815534,26.3048017 C131.76699,29.4780793 127.980583,32.6931106 125.456311,35.9498956 C122.932039,39.2066806 120.239482,43.5073069 117.378641,48.8517745 L110.058252,62.1294363 C110.899676,62.9645094 112.414239,64.8016701 114.601942,67.6409186 C116.789644,70.480167 118.262136,72.3173278 119.019417,73.1524008 C119.776699,73.9874739 120.365696,74.6137787 120.786408,75.0313152 C121.20712,75.4488518 121.585761,75.8663883 121.92233,76.2839248 C122.2589,76.7014614 123.352751,77.82881 125.203883,79.6659708 L131.009709,85.9290188 C136.899676,90.7724426 141.94822,94.0709812 146.15534,95.8246347 C150.36246,97.5782881 154.822006,98.4551148 159.533981,98.4551148 Z M49.7281553,99.7077244 C57.8058252,99.7077244 64.4110032,96.9102296 69.5436893,91.3152401 C74.6763754,85.7202505 80.1035599,77.3277662 85.8252427,66.1377871 C69.6699029,44.5929019 56.5436893,33.8204593 46.4466019,33.8204593 C38.7055016,33.8204593 32.184466,37.1189979 26.8834951,43.7160752 C21.5825243,50.3131524 18.9320388,57.7453027 18.9320388,66.0125261 C18.9320388,74.2797495 22.0873786,81.9624217 28.3980583,89.0605428 C34.7087379,96.1586639 41.8187702,99.7077244 49.7281553,99.7077244 Z"
			}
			fillRule={"nonzero"}
		/>
	</svg>
);

Logo.propTypes = {
	className: PropTypes.string,
};

export { Logo };
