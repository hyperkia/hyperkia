function Index(keys) {

	KIA.state.ui.setSelectionKeys(keys);

	KIA.kiaApp.dispatchEvent(new CustomEvent('selectionChange', {
	  bubbles: true,
	  composed: true,
	}));

}

export default Index;