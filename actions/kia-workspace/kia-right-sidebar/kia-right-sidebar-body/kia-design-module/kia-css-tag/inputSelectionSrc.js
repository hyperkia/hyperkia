function Index(layerNewObj) {	
	console.log(layerNewObj);
	KIA.state.layers.setSelectionProperties(layerNewObj);	
	KIA.services.idb.core.updateObject('layers', layerNewObj.key, layerNewObj);
}

export default Index;