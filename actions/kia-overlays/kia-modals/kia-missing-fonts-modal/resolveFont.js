function Index(resolveFonts) {
    const updateLayers = [];
    const layers = KIA.state.layers.map;

    for (const [key, l] of Object.entries(layers)) {
        const existingFont = l.css['font-family'];
        if (resolveFonts[existingFont]) {
            l.css['font-family'] = resolveFonts[existingFont];
            updateLayers.push({
            	key,
            	css: {
            		'font-family': `"${l.css['font-family']}"`
            	}
            })
        }
    }

	KIA.services.idb.core.updateObjects('layers', updateLayers);
}

export default Index;
