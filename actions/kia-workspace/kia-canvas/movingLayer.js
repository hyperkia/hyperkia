function Index(layerObj) {
	KIA.state.layers.movingLayer(layerObj);
	if(layerObj.save) {		
		KIA.services.idb.core.updateObject('layers', layerObj.key, {css: layerObj.css});	
	}
	
}

export default Index;