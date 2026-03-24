import KIACustomElement from '../../../../../../kia-custom-element/index.js';
import html from './html.js';


class KIA_CSS_Position extends KIACustomElement {

    customizer = {styleHref: 'components/kia-workspace/kia-right-sidebar/kia-right-sidebar-body/kia-design-module/sections/kia-css-position/style.css'};

    constructor() {
        super();
        this.html = html;
        this.moduleURL = import.meta.url;
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this._defaultSetup();
    }

}

if (!customElements.get('kia-css-position')) {
    customElements.define('kia-css-position', KIA_CSS_Position);
}