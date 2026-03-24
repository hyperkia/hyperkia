
import props from '../utils/props.js';
import methods from '../utils/methods.js';

class Index {

	static handler(e){
		this.clickPageItemEl = props.eTarget.closest('.page-item') || props.eRTarget.closest('.page-item');
		this.clickLayerItemEl = props.eTarget.closest('.layer-item');

		if(this.clickPageItemEl) this.pageItemClick();
		if(props.eTAction === 'layerVisible') this.changeLayerVisiblility();
		if(props.eTAction === 'layerLock') this.changePagePointerLock();

		this.clickPageItemEl = null;
		this.clickLayerItemEl = null;
	}

	static pageItemClick(){
		const pageDataset = this.clickPageItemEl.dataset;
		this.clickPageItemEl.classList.toggle('show');		
		const keys = new Set().add(pageDataset.page);
        KIA.actions.share.setSelectionKeys(keys);
		KIA.dom.kiaLayers.renderLayers();
	}

	static changeLayerVisiblility(){
		const key = this.clickLayerItemEl.dataset.layer;
		KIA.actions.kiaLayers.changeLayerVisiblility(key);
		const layerObj = KIA.state.layers.map[key];
		this.clickLayerItemEl.querySelector('[data-visiblity]').dataset.visiblity = layerObj.css.visibility;
	}

	static changePagePointerLock(){
		const key = this.clickLayerItemEl.dataset.layer;
		KIA.actions.kiaLayers.changeLayerPointerLock(key);
		const layerObj = KIA.state.layers.map[key];
		this.clickLayerItemEl.querySelector('[data-lock]').dataset.lock = layerObj.css['pointer-events'];
	}

}

export default Index;




	