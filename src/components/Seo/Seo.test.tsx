import React from "react";
import { Seo } from "./";
import { render } from "@testing-library/react";

describe("<Seo>", () => {
	it("should set the document title", () => {
		render(<Seo title={"Test title 1"} />);
		expect(document.title).toBe("Test title 1");
	});
});
