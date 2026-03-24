
import props from '../utils/props.js';
import methods from '../utils/methods.js';

class Index {

	static handler(e){			
		if(props.eTEvent === 'editPageName' || props.eTarget.matches('.page-item')) this.enablePageNameEdit();
	}

	static enablePageNameEdit(){
		const editElement = KIA.kiaPages._qs(`[data-page="${props.pageKey}"] .page-name`);
		const keys = new Set().add(props.pageKey);
        KIA.actions.share.setSelectionKeys(keys);
		KIA.utils.dom.enableEditingAndFocusEnd(editElement);
	}

}

export default Index;