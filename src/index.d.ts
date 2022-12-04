import { PluginOptions as GatsbyPluginOptions } from "gatsby";

declare module "gatsby" {
	export interface PluginOptions extends GatsbyPluginOptions {
		useDefaultLayout?: boolean;
	}
}
