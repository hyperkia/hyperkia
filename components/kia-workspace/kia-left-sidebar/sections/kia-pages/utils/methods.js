
import props from '../utils/props.js';

const Methods = {
	pageNameChange: function(e){
		const pageNameEl = props.eTarget.closest('.page-name');
		const pageItemEl = pageNameEl.closest('.page-item');
		const name = pageNameEl.innerText.trim() ? pageNameEl.innerText : pageNameEl.dataset.oldValue;
		KIA.actions.kiaPages.pageNameChange({
			key: pageItemEl.dataset.page, 
			name,
			save: e.type==='keyup'
		});
	}

};

export default Methods;