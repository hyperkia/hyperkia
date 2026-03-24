import KIACustomElement from '../../../../kia-custom-element/index.js';
import html from './html.js';


class KIA_Design_Module extends KIACustomElement {

    customizer = {styleHref: '/components/kia-workspace/kia-right-sidebar/kia-right-sidebar-body/kia-code-module/style.css'};

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

if (!customElements.get('kia-design-module')) {
    customElements.define('kia-design-module', KIA_Design_Module);
}