 
function Index(pageObj) {
    KIA.state.pages.pageNameChange(pageObj);
    if(pageObj.save) {
        KIA.services.idb.core.updateObject('pages', pageObj.key, {name: pageObj.name});    
    }
    
}

export default Index; 