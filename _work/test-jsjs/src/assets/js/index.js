import { wrapper } from "./wrapper/wrapper";
import { renderCards } from './cards/cards';
import { imgBg } from "./background/background";

import "bulma";
import "../css/style.css";

const wrapperHTML = wrapper();
document.body.insertAdjacentElement("afterbegin", wrapperHTML);

const bgImg = imgBg();
wrapperHTML.insertAdjacentElement("afterbegin", bgImg);

const cardsHTML = renderCards()
wrapperHTML.insertAdjacentHTML("beforeend", cardsHTML);