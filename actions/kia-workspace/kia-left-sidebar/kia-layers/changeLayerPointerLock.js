function Index(key) {
	const layerObj = KIA.state.layers.map[key];
	const css = {
		'pointer-events': (layerObj.css['pointer-events'] === 'auto' ? 'none' : 'auto'),
	};
	KIA.state.layers.changelayerPointerLock(key, css);
	KIA.services.idb.core.updateObject('layers', layerObj.key, {css});
}

export default Index;