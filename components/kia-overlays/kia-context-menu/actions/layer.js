const Index = {
    fire(action) {
        this[action]();
    },

    bringToFront() {
        KIA.actions.kiaLayers.bringToFrontSelectionLayer();
    },

    sendToBack() {
        KIA.actions.kiaLayers.sendToBackSelectionLayer();
    },

    lockUnlock() {

    },

    hideShow() {

    },

    duplicate() {

    },

    copy() {

    },

    paste() {

    },

    delete() {
        KIA.actions.share.deleteSelection();
        const keys = new Set().add('canvas');
        KIA.actions.share.setSelectionKeys(keys);
    },

}

export default Index;