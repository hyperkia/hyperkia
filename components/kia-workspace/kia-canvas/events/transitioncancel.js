
import props from '../utils/props.js';
 
class Index {

	static handler(e){
		if (props.eTarget.dataset.event === 'canvasZoom') {
			props.isZooming = false;
			cancelAnimationFrame(props.rafZoomingID);
			props.rafZoomingID = null;
		}
	}

	
}

export default Index;