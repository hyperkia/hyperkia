
import props from '../utils/props.js';

class Index {

	static handler(e){
		if(props.eTarget.matches('.texthtml')) this.enableTextLayerEdit();
	}

	static enableTextLayerEdit(){
		KIA.utils.dom.enableEditingAndFocusEnd(props.eTarget);
	}

	
}

export default Index;