
import props from '../utils/props.js';
 
class Index {

	static handler(e){
		if(props.eTarget.matches('.texthtml')) props.eTarget.removeAttribute('contenteditable');
	}

	
}

export default Index;