
import props from '../utils/props.js';
import methods from '../utils/methods.js';

class Index {

	static handler(e){		
		if(props.eTEvent === 'pageVisible') this.changePageVisiblility();
		if(props.eTEvent === 'pageLock') this.changePagePointerLock();
		if(props.eTREvent === 'addNewPage') this.addNewPage();
	}

	static changePageVisiblility(){
		KIA.actions.kiaPages.changePageVisiblility(props.pageKey);
		const pageObj = KIA.state.pages.map[props.pageKey];
		props.pageEl.querySelector('[data-visiblity]').dataset.visiblity = pageObj.css.visibility;
	}

	static changePagePointerLock(){
		KIA.actions.kiaPages.changePagePointerLock(props.pageKey);
		const pageObj = KIA.state.pages.map[props.pageKey];
		props.pageEl.querySelector('[data-lock]').dataset.lock = pageObj.css['pointer-events'];
	}

	static addNewPage(){
		const pageObject = {
	        key: crypto.randomUUID(),
	        name: 'Page 1',
	        css: {
	            'background-color': '#ffffffff',
	            width: '1920px',
	            height: '6000px',
	            'pointer-events': 'auto',
	            visibility: 'visible',	            
	        },
	        layers: [],
	        createdAt: Date.now(),            
	    }

		KIA.actions.kiaPages.addNewPage(pageObject);
		const editElement = KIA.kiaPages._qs(`[data-page="${pageObject.key}"] .page-name`);
		KIA.utils.dom.enableEditingAndFocusEnd(editElement);
		const keys = new Set().add(pageObject.key);
		KIA.actions.share.setSelectionKeys(keys);
	}

}

export default Index;