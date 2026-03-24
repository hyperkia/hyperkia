
import props from '../utils/props.js';

class Index {

    static handler(e) {
        e.preventDefault();

        if(props.eTarget.closest('[data-page]')) this.uploadFileOnPage(e);        
    }

    static async uploadFileOnPage(e){
    	const file = await KIA.utils.dom.getDropFile(e);
    	const blobUrl = URL.createObjectURL(file);
    	if(!KIA.state.assets.supportFormat.includes(file.type)) return;
    	KIA.actions.kiaAssetsManagerModal.uploadAssets([file]);
    	let assetKey = '';
    	for(let [k,asset] of Object.entries(KIA.state.assets.map)) {
    		if(asset.blob === file) assetKey = k;
    	}
    	const key = crypto.randomUUID();
    	const activePage = props.eTarget.closest('[data-page]');
    	const xy = KIA.dom.read.getCanvasPageScaleCoords({e, activePage});
    	const imageData = await KIA.utils.dom.fileToDimensionObject(file);    	

    	const newLayerObj = {
            key,
            pId: activePage.dataset.page,
            nodeName: 'img',
            attrs: {},
            type: 'imghtml',
            assets: {
                src: assetKey,
            },
            css: {
                visibility: 'visible',
                top: xy.y+'px',
                left: xy.x+'px',
                width: imageData.width+'px',
                height: imageData.height+'px',
                translate: 'none',
                'pointer-events': 'auto',
            },
            save: true,
            stack: [],
        };

        const imgEl = document.createElement('img');
        imgEl.classList.add('canvas-layer', 'imghtml');
        imgEl.setAttribute('data-layer', newLayerObj.key);
        imgEl.setAttribute('draggable', false);
        imgEl.setAttribute('src', blobUrl);
        Object.assign(imgEl.style, newLayerObj.css);
        activePage.appendChild(imgEl);
        
        KIA.actions.kiaCanvas.createLayer(newLayerObj);
        const keys = new Set().add(newLayerObj.key);
        KIA.actions.share.setSelectionKeys(keys);
    }


}

export default Index;