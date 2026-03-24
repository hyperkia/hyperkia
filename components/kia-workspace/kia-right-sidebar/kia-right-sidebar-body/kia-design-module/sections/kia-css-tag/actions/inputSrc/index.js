
import type from './type/index.js';

function Index(){
	const targetEl = KIA.dom.read.getSelectionLayerElement();
	return type[targetEl.nodeName.toLowerCase()]();
	
}

export default Index;