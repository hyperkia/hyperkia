
import props from '../utils/props.js';
import methods from '../utils/methods.js';

class Index {

	static handler(e){			
		if(props.eTEvent === 'editPageName') this.pageNameChange(e);
	}

	static pageNameChange(){
		const pageNameEl = props.eTarget.closest('.page-name')
		const name = pageNameEl.innerText.trim() ? pageNameEl.innerText : pageNameEl.dataset.oldValue;
		KIA.dom.kiaPages.disablePageNameEdit({key: props.pageKey}); 
	}

}

export default Index;