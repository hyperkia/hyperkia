function Index(key) {
	const pageObj = KIA.state.pages.map[key];
	const css = {
		visibility: (pageObj.css.visibility === 'visible' ? 'hidden' : 'visible'),
	};
	KIA.state.pages.changePageVisiblility(key, css);
	KIA.services.idb.core.updateObject('pages', pageObj.key, css);
}

export default Index;