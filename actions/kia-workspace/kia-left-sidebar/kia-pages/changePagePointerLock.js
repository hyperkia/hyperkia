function Index(key) {
	const pageObj = KIA.state.pages.map[key];
	const css = {
		'pointer-events': (pageObj.css['pointer-events'] === 'auto' ? 'none' : 'auto'),
	};
	KIA.state.pages.changePagePointerLock(key, css);
	KIA.services.idb.core.updateObject('pages', pageObj.key, css);
}

export default Index;