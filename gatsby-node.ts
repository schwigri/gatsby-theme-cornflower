import type { GatsbyNode } from "gatsby";

export const pluginOptionsSchema: GatsbyNode["pluginOptionsSchema"] = ({
	Joi,
}) =>
	Joi.object({
		useDefaultLayout: Joi.bool().description("sets page layout").default(true),
	});
