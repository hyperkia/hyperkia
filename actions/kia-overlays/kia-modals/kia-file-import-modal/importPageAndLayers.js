

function isMissingFont(){
	const availableFonts = KIA.state.ui.fonts;
	const missingFonts = new Set();
	const layers = KIA.state.layers.map;
	for(let k in layers) {
		const layerFont = layers[k].css['font-family'];
		if(!availableFonts[layerFont] && layerFont) missingFonts.add(layerFont);
	}
	if(missingFonts.size) return true;
	return false;
}

function Index(data) {
	KIA.state.pages.importPages(data.pages);
	KIA.state.layers.importLayers(data.layers);
	if(isMissingFont()) KIA.state.ui.setOpenModal('kiaMissingFontsModal');
	KIA.services.idb.core.addObject('pages', Object.values(data.pages));
	KIA.services.idb.core.addObject('layers', Object.values(data.layers));
    KIA.state.ui.setActiveTool('triangle');
}

export default Index; 