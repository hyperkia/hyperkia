
import props from '../utils/props.js';
import methods from '../utils/methods.js';

class Index {

	static handler(e){
		if(props.eTEvent === 'editPageName') methods.pageNameChange(e);
	}

}

export default Index;