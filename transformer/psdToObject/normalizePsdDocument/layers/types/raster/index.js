
import props from '../../../../props/index.js';
import css from './css/index.js';
import collectAdditionalData from './collectAdditionalData.js';

function Index() {

	const l = props.activeParseLayer.layer;
	const obj = {
		nodeName: 'img',
		css: {},
		attrs: {},
		type: 'imghtml',
	};

	obj.canvas = l.canvas || null;

	for(let p in css) Object.assign(obj.css, css[p](l));
 
	collectAdditionalData(obj); 

	return obj;
}

export default Index;

