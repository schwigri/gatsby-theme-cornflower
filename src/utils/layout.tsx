import type {
	PluginOptions,
	WrapPageElementBrowserArgs,
	WrapPageElementNodeArgs,
} from "gatsby";
import { Layout } from "../components";
import React from "react";

interface WrapPageElement {
	(
		args: WrapPageElementBrowserArgs,
		options: PluginOptions
	): React.ReactElement;
	(args: WrapPageElementNodeArgs, options: PluginOptions): React.ReactElement;
}

export const wrapPageElement: WrapPageElement = ({ element }, options) => {
	if (options.useDefaultLayout) {
		return <Layout>{element}</Layout>;
	}

	return element;
};
