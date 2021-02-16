import { element } from "../utils";
import bgImg from "../../img/backgroundDefault.jpg";

export function imgBg() {
	const img = element("img");
	img.setAttribute("src", bgImg);
	img.classList.add("bgImg");

	return img;
}
