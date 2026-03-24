
const Index = {

	map: {},

	visibilityKey: null,
	pointerLockKey: null,

	renderLayers: function(layers){
		this.map = layers;
		KIA.observer.layers.observe('renderLayers');
	},

	creatingLayer: function(layerObj){
		this.map[layerObj.key] = layerObj;		
	},

	createdLayer(layerObj){
		this.map[layerObj.key] = layerObj;		
		KIA.observer.layers.observe('createdLayer');
	},

	importLayers(layers){
		Object.assign(this.map, layers);
		KIA.observer.layers.observe('importLayers');
	},

	setSelectionInnerText: function(innerText){
		const key = KIA.state.ui.selectionKeys.values().next().value;
		this.map[key].innerText = innerText;
		KIA.observer.layers.observe('setSelectionInnerText');
	},

	setSelectionSrc: function(layerObj){
		const key = KIA.dom.read.getSelectionKey();
		Object.assign(this.map[key], layerObj);
		KIA.observer.layers.observe('setSelectionSrc');
	},

	setSelectionZIndex: function(zIndex){
		const key = KIA.dom.read.getSelectionKey();
		this.map[key].css['z-index'] = zIndex;
		KIA.observer.layers.observe('setSelectionZIndex');
	}, 

	movingLayer: function(layerObj) {
		Object.assign(this.map[layerObj.key].css, layerObj.css);
		KIA.observer.layers.observe('movingLayer');
	},

	movingLayers: function(layersObj) {
		if(layersObj.save) {
			layersObj.layers.forEach((l)=>{
				Object.assign(this.map[l.key].css, l.css);
			})
		}
	},

	setCssPropToLayer: function(obj) {
		Object.assign(this.map[obj.key].css, obj.css);
		obj.type = 'setCssPropToLayer';
		KIA.observer.layers.observe(obj);
	},

	setSelectionNodeName: function(nodeName) {
		const key = KIA.dom.read.getSelectionKey();
		this.map[key].nodeName = nodeName;
		KIA.observer.layers.observe('setSelectionNodeName');
	},

	deleteSelectedLayer(){
		const key = KIA.dom.read.getSelectionKey();
		delete this.map[key];
		KIA.observer.layers.observe('deleteSelectedLayer');
	},

	changeLayerVisiblility(key, css){
		this.visibilityKey = key;
		Object.assign(this.map[key].css, css);
		KIA.observer.layers.observe('changeLayerVisiblility');
	},

	changelayerPointerLock(key, css){
		this.pointerLockKey = key;
		Object.assign(this.map[key].css, css);
		KIA.observer.layers.observe('changelayerPointerLock');
	},

	setSelectionProperties(layerNewObj){
		const key = KIA.dom.read.getSelectionKey();
		const layerObj = this.map[key];		
		for(let p in layerNewObj) {
			const vTypeOf = KIA.utils.dom.getTypeOf(layerNewObj[p]);
			if(vTypeOf === 'string') layerObj[p] = layerNewObj[p];
			// if(vTypeOf === 'array') console.log('---');
			if(vTypeOf === 'object') Object.assign(layerObj[p]||{}, layerNewObj[p])						
		}
	}

}

export default Index;