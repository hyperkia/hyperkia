
import props from '../../../../props/index.js';
import types from './types/index.js';

function Index() {

	const l = props.activeParseLayer.layer;

	const obj = {
		nodeName: 'p',
		innerText: l.text.text,
		css: {
			overflow: 'hidden',
		},
		type: 'texthtml',
		stack: {},
	};

	const normalizeTextLayer = types(l);

	Object.assign(obj.css, normalizeTextLayer.css);
	if(normalizeTextLayer.innerText) obj.innerText = normalizeTextLayer.innerText;
	if(normalizeTextLayer.stack) Object.assign(obj.stack, normalizeTextLayer.stack);
	if(normalizeTextLayer.css) Object.assign(obj.css, normalizeTextLayer.css);

	return obj;
}

export default Index;




