
const Index = {

	map: null,
	selectedAsset: null,
	supportFormat: ['image/png','image/jpeg','image/gif','image/svg+xml','image/webp','image/avif'],

	loadData(data){
		this.map = data;
	},

	uploadAssets(assets){
		assets.forEach((a)=>this.map[a.key]=a);
		KIA.observer.assets.observe('uploadAssets');
	},

	selectAsset(key){
		this.selectedAsset = this.map[key];		
	},
}

export default Index;