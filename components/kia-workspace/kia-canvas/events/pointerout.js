
import props from '../utils/props.js';
 
class Index {

	static handler(e){
		if(props.activeLayer) this.layerPointerOut();
	}

	static layerPointerOut(){
		props.root._qs('.hover-layer')?.classList.remove('hover-layer');		
		KIA.dom.kiaCanvas.createSelectionLayersOutline();
	}

	
}

export default Index;