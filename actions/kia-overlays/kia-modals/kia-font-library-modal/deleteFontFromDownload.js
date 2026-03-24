function Index(name) {
	KIA.state.ui.deleteFont(name);
	KIA.services.idb.core.updateKeyValueObject('options', {
		projectFonts: KIA.state.ui.fonts,
	})
	
}

export default Index;