
import props from '../utils/props.js';
import methods from '../utils/methods.js';
 
class Index {

	static handler(e){
		if(props.eTAction === 'tagInnerText') methods.inputInnerText(e); 
		if(props.eTAction === 'tagSrc') this.inputSrc(e); 
	}

	static inputSrc(e){
		props.eTarget.dataset.source = 'input';
		methods.inputSrc(e);
	}
}
 
export default Index;