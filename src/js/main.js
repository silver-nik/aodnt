import { Poster } from "./modules/poster";

import './modules/sliders';
import './modules/gallery';

window.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.poster__item').forEach(el => {
        new Poster(el, '.poster__cover').init()
    })

})