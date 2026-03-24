function Index(key){
	KIA.state.assets.selectAsset(key);
	KIA.kiaApp.dispatchEvent(new CustomEvent('assetSelected', {
        bubbles: true,
        composed: true,
        detail: { source: 'kiaAssetsManagerModal', key }
    }));
}

export default Index;