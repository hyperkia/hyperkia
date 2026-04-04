
import methods from '../../../methods/index.js';

function Index(layer) {
	const result = {};

	const fontSize = layer.text.style?.fontSize;
	const scaleX = layer.text?.transform?.[0] || 1;
	const finalFontSize = fontSize * scaleX;

	const leading = layer.text.style?.leading;
	const scaleY = layer.text?.transform?.[3] || 1;
	let finalLeading = leading * scaleY;
	if(finalLeading < finalFontSize) finalLeading = finalFontSize;

	if(leading) result['line-height'] = finalLeading+'px';
	return result;
}

export default Index;