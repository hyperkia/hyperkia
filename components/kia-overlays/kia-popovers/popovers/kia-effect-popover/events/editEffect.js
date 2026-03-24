import props from '../utils/props.js';
import methods from '../utils/methods.js';

class Index {

    static handler(e) {
        if (e.type === 'editEffect') this.openPopover(e);
        if (props.eTarget.getRootNode().host?.dataset.event === 'closePopover') popoverBase.closePopover(e);
    }

    static openPopover(e) {
        KIA.kiaPopovers.classList.add('show');
        props.root.classList.add('show');
        const layerObj = KIA.dom.read.getSelectionLayerObject();

        const stackKey = e.detail.stackKey;
        props.root.dataset.stack = stackKey;
        const stackObj = layerObj.stack[stackKey];
        props.root.dataset.shadow = stackObj.name;
        const value = stackObj.value.split(' ');

        props.root.$id.offsetX.value = parseInt(value[0]);
        props.root.$id.offsetY.value = parseInt(value[1]);
        props.root.$id.blurRadius.value = parseInt(value[2]);
        let color = value[3];
        if (stackObj.name === 'box-shadow') {
            props.root.$id.spreadRadius.value = parseInt(value[3]);
            color = value[4];
            props.root.$id.inset.value = value[5] === 'inset' ? 'true' : 'false';
        }
        props.root.$id.color.value = color;
    }
}

export default Index;

