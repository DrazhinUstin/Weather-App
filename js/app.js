import setupSearch from "./modules/setupSearch.js";
import {hidePreloader} from "./modules/utils.js";

document.addEventListener('DOMContentLoaded', setupSearch);

window.addEventListener('load', hidePreloader);


