
import props from '../utils/props.js';
import methods from '../utils/methods.js';

class Index {

	static handler(e){		
		if(e.detail.source.dataset.name = 'changeNodeName') this.changeNodeName(e);		
	}

	static changeNodeName(e){
		let nodeName = e.detail.source.value;
		KIA.actions.kiaCssTag.changeSelectionNodeName(nodeName);
		
	}

}

export default Index;