
const Index = {

	map: {},
	selectedAsset: {},
	supportFormat: ['image/png','image/jpeg','image/gif','image/svg+xml','image/webp','image/avif'],

	loadData(data){
		this.map = data;
	},

	uploadAsset(asset){
		this.map[asset.key] = asset;
		KIA.observer.assets.observe('uploadAssets');
	},

	importAssets(assetsObj){
		console.log(assetsObj);
		for(let [aKey, aObj] of Object.entries(assetsObj)) this.map[aKey] = aObj;
		console.log(this.map);
		KIA.observer.assets.observe('uploadAssets');
	},

	selectAsset(key){
		this.selectedAsset = this.map[key];		
	},
}

export default Index;