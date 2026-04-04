
import props from './props/index.js';
import collectAdditionalData from './collectAdditionalData.js';

function Index(layer) {
	const obj = {
		css: {},
		stack: {},
	};
	for(let p in props) Object.assign(obj.css, props[p](layer));

	collectAdditionalData(obj);


	return obj;
}

export default Index;