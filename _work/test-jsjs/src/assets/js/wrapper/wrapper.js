import { element } from "../utils";

export function wrapper() {
	const wrapper = element("div", [
		"is-flex",
		"is-flex-direction-row",
		"is-flex-wrap-wrap",
	]);

	return wrapper;
}
