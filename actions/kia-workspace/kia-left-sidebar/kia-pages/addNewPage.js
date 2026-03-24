function Index(pageObject) {

    KIA.state.canvas.setPageOrders();
    const pagesOrder = KIA.state.canvas.pagesOrder;
    pagesOrder.push(pageObject.key);
    KIA.services.idb.core.updateKeyValueObject('canvas', { pagesOrder })

    KIA.state.pages.addNewPage(pageObject);
    KIA.services.idb.core.addObject('pages', pageObject);
} 

export default Index;