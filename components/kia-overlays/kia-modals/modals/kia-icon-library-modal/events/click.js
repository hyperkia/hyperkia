import props from '../utils/props.js';
import methods from '../utils/methods.js';

class Index {

    static handler(e) {
        if (props.eTarget.closest('.icon-item ')) this.iconSelected();
        if (props.eRTAction === 'closeModal') this.closeModal();
    }

    static iconSelected() {
        props.selectedSvgTag = props.eTarget.closest('.icon-item').dataset.fontawesomeIconName;
        KIA.kiaApp.dispatchEvent(new CustomEvent('iconLibraryIconSelected', {
            bubbles: true,
            composed: true,
            detail: { source: 'kiaIconLibrary', iconName: props.selectedSvgTag }
        }));
        KIA.actions.kiaModals.closeModal();
    }

    static closeModal() {
        KIA.kiaApp.dispatchEvent(new CustomEvent('iconLibraryIconSelected', {
            bubbles: true,
            composed: true,
            detail: { source: 'kiaIconLibrary', iconName: '' }
        }));
        KIA.actions.kiaModals.closeModal();
    }

}

export default Index;