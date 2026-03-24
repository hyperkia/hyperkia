
const Index = {

	css: null,
	pagesOrder: [],

	loadData(data){
		if(data.css) this.css = data.css;
		if(data.pagesOrder) this.pagesOrder = data.pagesOrder;
		KIA.observer.canvas.observe('loadData');
	},

	updateCss(css){},

	setPageOrders(){},
}

export default Index;