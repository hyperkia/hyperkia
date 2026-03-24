 
function Index() {
	const key = KIA.dom.read.getSelectionKey();
    KIA.state.pages.deleteSelectedPage();
    KIA.services.idb.core.deleteObject('pages', key);
}

export default Index; 