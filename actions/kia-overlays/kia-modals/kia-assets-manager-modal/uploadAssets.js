function Index(files){
	const filesObj = [];
	for(let f of files) {
		const key = crypto.randomUUID();
		filesObj.push({
			key,
			name: f.name,
			size: f.size,
			type: f.type,
			blob: f,
		});
	}
	KIA.state.assets.uploadAssets(filesObj);
	KIA.services.idb.core.addObject('assets', filesObj);
}

export default Index;