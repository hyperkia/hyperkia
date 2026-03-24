import props from '../utils/props.js';
import methods from '../utils/methods.js';
 
class Index {

	static handler(e){
		if(props.eTarget.matches('.texthtml')) methods.inputLayerInnerText(e); 
	}

}

export default Index;