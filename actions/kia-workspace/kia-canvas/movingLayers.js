function Index(layersObj) {	
	KIA.state.layers.movingLayers(layersObj);
	if(layersObj.save) {
		KIA.services.idb.core.updateObjects('layers', layersObj.layers);
	}	
}

export default Index;