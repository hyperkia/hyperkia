function Index(layerObj) {
    const isSave = layerObj.save;
    delete layerObj.save;
    KIA.state.layers.creatingLayer(layerObj);
    if (isSave) {        
        KIA.services.idb.core.addObject('layers', layerObj);
        KIA.state.ui.setActiveTool('triangle');
        const pageKey = layerObj.pId;
        KIA.state.pages.setLayers();
        const layers = KIA.state.pages.map[pageKey].layers;
        layers.push(layerObj.key);
        KIA.services.idb.core.updateObject('pages', pageKey, {layers});
        KIA.state.layers.createdLayer(layerObj);
    }
}

export default Index;