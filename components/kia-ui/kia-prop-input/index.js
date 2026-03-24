import KIACustomElement from '../../kia-custom-element/index.js';
import html from './html.js';

import * as Events from './events/index.js';
import methods from './utils/methods.js';
import props from './utils/props.js';

class KIA_Prop_Input extends KIACustomElement{

	methods = methods;
	props = props;
	customizer = {styleHref: '/components/kia-ui/kia-prop-input/style.css'};

	constructor(){
		super();
		this.html = html;
		this.moduleURL = import.meta.url;
	}

	connectedCallback(){
		this.attachShadow({mode: 'open'});
		this._defaultSetup();
		this.methods.markupSetup(this);		
		this._eventsSetup(Events);
	}

	handleEvents(e){		
		if (Date.now() - this.lastThrottle < 50) return; 
		props.eTarget = e.composedPath()[0];
		props.eRootNode = props.eTarget.getRootNode().host;
        this.lastThrottle = Date.now();
        Events[e.type]?.handler?.(e);
	}

	get value() {
		return this.$id.input.value;
	}

	set value(value) {		
		this.$id.input.value = value;
		this.dispatchEvent(new CustomEvent('kiaPropInput', {
		  bubbles: true,
		  composed: true,
		  detail: { source: this}
		}));	
	}

	set type(valu) {
		this.$id.input.type = valu;
	}

	focus(){
		this.$id.input.focus();
	}
} 

if(!customElements.get('kia-prop-input')){
	customElements.define('kia-prop-input', KIA_Prop_Input);	
}
 