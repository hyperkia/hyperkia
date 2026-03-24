
import props from '../utils/props.js';

const Index = {

	updatePageNamePosition: function() {
		if(props.isZooming) {
			KIA.dom.kiaCanvas.setPageNamePosition();
			KIA.dom.kiaCanvas.createSelectionLayersOutline();
			KIA.dom.kiaCanvas.drawMultiElementsSelectionBound();			
			props.rafZoomingID = requestAnimationFrame(Index.updatePageNamePosition);
		}
	},

	inputLayerInnerText: function(e) {
		const innerText = props.eTarget.innerText;
		KIA.actions.share.inputSelectionInnerText({
			innerText, 
			save: e.type==='keyup',
		}); 
	},
}

export default Index;