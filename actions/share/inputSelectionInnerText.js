function Index(innerTextObj) {
	KIA.state.layers.setSelectionInnerText(innerTextObj.innerText);
	if(innerTextObj.save) {
		const key = KIA.state.ui.selectionKeys.values().next().value;	
		KIA.services.idb.core.updateObject('layers', key, {innerText: innerTextObj.innerText});
	}
}

export default Index;