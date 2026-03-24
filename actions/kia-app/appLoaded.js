
 
function Index() {
	KIA.services.idb.core.initDatabase().then((response)=>{
		KIA.state.assets.loadData(KIA.managers.assets(response.assets));
		KIA.state.canvas.loadData(response.canvas);
		KIA.state.pages.loadPages(response.pages);
		KIA.state.layers.renderLayers(response.layers);
		KIA.state.ui.loadFonts(response.options.projectFonts);
		KIA.actions.kiaCanvas.canvasScaleOnLoad();
		KIA.kiaApp.dispatchEvent(new CustomEvent('appLoaded', {
		  bubbles: true,
		  composed: true,
		  detail: { source: this.cryptoId}
		})); 
	})
} 

export default Index;