
const Index = {
	observe(payload) {
		this[payload]();
	},

	loadData(){
		KIA.dom.kiaCanvas.updateCanvasCss();
	},
} 

export default Index; 