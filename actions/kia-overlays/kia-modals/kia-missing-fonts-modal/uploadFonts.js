function Index(fontsBlob){	
	KIA.services.idb.core.updateKeyValueObject('options', {
		uploadedFonts: fontsBlob,
	})
}

export default Index;


