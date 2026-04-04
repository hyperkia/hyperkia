
import props from './props/index.js'
import methods from './methods/index.js'
import collectAdditionalData from './collectAdditionalData.js';

function Index(l) {
	const obj = {
		css: {},
		innerText: '',
		stack: {},
	};
	
	for(let p in props) Object.assign(obj.css, props[p](l));
	obj.innerText = methods.innerHtml(l);

	collectAdditionalData(obj);
	
	return obj;
}
 
export default Index;