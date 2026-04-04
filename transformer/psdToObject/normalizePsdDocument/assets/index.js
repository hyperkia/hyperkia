

function Index(data){
	const assets = {};

	for( let [lKey, lObj] of Object.entries(data.layers)) {

		const key = crypto.randomUUID();

		// src
		if(lObj.assets.src) {
			const blobFile = lObj.assets.src;
			assets[key] = {
				key,
				blob: blobFile,
				name: blobFile.name,
				size: blobFile.size,
				type: blobFile.type,
			};
			lObj.assets.src = key;
		}
	}

	return assets;

}

export default Index;