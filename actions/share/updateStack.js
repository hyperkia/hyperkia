
let debounceTimeout = null;

function Index(layerNewObj) {
	KIA.state.layers.setSelectionProperties(layerNewObj);
	clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        const css = KIA.dom.read.getSelectionStackCss();
        layerNewObj.css = css;    	
        KIA.services.idb.core.updateObject('layers', layerNewObj.key, layerNewObj);
    }, 150); 
}

export default Index;