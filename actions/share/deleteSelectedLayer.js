 
function Index() {
	const layerKey = KIA.dom.read.getSelectionKey();
    const layerObj = KIA.state.layers.map[layerKey];
    
    const pageLayersOrder = KIA.state.pages.map[layerObj.pId].layers;
    const deleteIndex = pageLayersOrder.indexOf(layerKey);
    if(deleteIndex!==-1) pageLayersOrder.splice(deleteIndex, 1);
    
    KIA.services.idb.core.updateObject('pages', layerObj.pId, {layers: pageLayersOrder});

    KIA.state.layers.deleteSelectedLayer();
    KIA.services.idb.core.deleteObject('layers', layerKey);
}

export default Index; 