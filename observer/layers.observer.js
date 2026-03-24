
const Index = {

	observe(payload) {
		this[payload]();
	},

	renderLayers() {
		KIA.dom.kiaCanvas.renderPagesLayers();
		KIA.dom.kiaLayers.renderLayersPage();
	},

	importLayers(){
		KIA.dom.kiaCanvas.renderPagesLayers();
	},

	movingLayer() {},

	setCssPropToLayer(){
		KIA.dom.share.setCssPropToLayer();
	},

	setSelectionInnerText(){
		KIA.dom.kiaCanvas.setSelectionInnerText();
		KIA.dom.kiaCssTag.setSelectionInnerText();
	},

	setSelectionSrc(){
		KIA.dom.kiaCanvas.setSelectionSrc();
	},

	setSelectionNodeName(){
		KIA.dom.kiaCanvas.setSelectionNodeName();
	},

	updateStack(){
		KIA.dom.kiaCanvas.setSelectionStack();
	},

	deleteSelectedLayer(){
		KIA.dom.kiaCanvas.deleteSelectedLayer();
	},

	changeLayerVisiblility(){
		KIA.dom.kiaCanvas.updateLayerVisiblility();		
	},

	changelayerPointerLock(){
		KIA.dom.kiaCanvas.updateLayerPointerLock();
	},

	setSelectionZIndex(){
		KIA.dom.kiaCanvas.updateSelectionZIndex();
	},

	createdLayer(){		
		KIA.dom.kiaLayers.renderLayers();
	}

} 

export default Index;