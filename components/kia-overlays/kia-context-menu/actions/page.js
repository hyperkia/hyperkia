const Index = {
    fire(action) {
        this[action]();
    },

    lockUnlock() {

    },

    hideShow() {

    },

    duplicate() {

    },

    delete() {
        KIA.actions.share.deleteSelection();
        const keys = new Set().add('canvas');
        KIA.actions.share.setSelectionKeys(keys);
    },

}

export default Index;