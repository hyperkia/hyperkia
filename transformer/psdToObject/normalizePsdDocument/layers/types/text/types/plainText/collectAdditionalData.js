
import props from '../../../../../../props/index.js';
import methods from '../../../methods/index.js';
import textMethods from '../../methods/index.js';

function Index(obj) {
	const l = props.activeParseLayer.layer;

	const overlay = l.effects?.gradientOverlay?.[0];
	if(overlay) {
		const gradientObj = methods.getGradientData(overlay);
		Object.assign(obj.stack, gradientObj);
		const gradientColor = textMethods.gradientColor(Object.values(gradientObj)[0]);
		Object.assign(obj.css, gradientColor);
	}


}

export default Index;