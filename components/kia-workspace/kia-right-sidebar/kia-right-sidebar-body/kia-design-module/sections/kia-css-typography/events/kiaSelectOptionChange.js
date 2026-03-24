 
import props from '../utils/props.js';
import methods from '../utils/methods.js';

class Index {

	static handler(e){
		if(e.detail.source.dataset.name === 'font-family') this.changeFontFamily(e);
	}

	static changeFontFamily(e){
		KIA.dom.kiaCssTypography.setSelectedFontFamilyWeights();
	}

}

export default Index;