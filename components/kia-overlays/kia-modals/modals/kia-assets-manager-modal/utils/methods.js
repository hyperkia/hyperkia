import props from '../utils/props.js';


const Index = {

	showMediaLibrary(){
		const assets = KIA.state.assets.map;
		const itemsEl = props.root.$id.medialibraryItems;		
		let html = '';
		let i = 0;
		for(let k in assets) {
			if(i>100) break;
			const a = assets[k];
			html += `
				<div class="medialibrary-item" title="${a.name}">
					<img src="${a.url}" alt="${a.name}" data-asset="${k}">
				</div>
			`;
			i++;
		}
		itemsEl.innerHTML = html;
	}
    
};

export default Index;