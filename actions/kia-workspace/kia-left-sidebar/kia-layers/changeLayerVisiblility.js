function Index(key) {
	const layerObj = KIA.state.layers.map[key];
	const css = {
		visibility: (layerObj.css.visibility === 'visible' ? 'hidden' : 'visible'),
	};

	KIA.state.layers.changeLayerVisiblility(key, css);
	KIA.services.idb.core.updateObject('layers', layerObj.key, {css});
}

export default Index;