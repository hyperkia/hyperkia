const deleteMap = {
    layers: 'deleteSelectedLayer',
    pages: 'deleteSelectedPage',
}

function Index() {
    const storeType = KIA.dom.read.getSelectionStoreType();
    KIA.actions.share[deleteMap[storeType]]();
}

export default Index;