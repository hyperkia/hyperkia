
import methods from '../../../methods/index.js';

function Index(layer) {
	const result = {};
	const fontSize = layer.text.style?.fontSize;
	const scaleX = layer.text?.transform?.[0] || 1;
	const finalFontSize = fontSize * scaleX;
	if(fontSize) result['font-size'] = finalFontSize+'px';
	return result;
}

export default Index;