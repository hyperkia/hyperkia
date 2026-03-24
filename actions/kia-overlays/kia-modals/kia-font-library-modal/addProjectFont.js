function Index(fonts) {	
	KIA.state.ui.addFont(fonts);
	KIA.services.idb.core.updateKeyValueObject('options', {
		projectFonts: KIA.state.ui.fonts,
	})	
}

export default Index; 